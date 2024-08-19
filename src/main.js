require('dotenv').config();
const express = require('express');
const connectDatabase = require('./db.js')
const mongoose = require('mongoose')

const Item = require('./items/schema.js')

connectDatabase();

const server = express();
server.use(express.json())

server.post('/api/items/add', async (req, res) => {
    console.log('Request Body:', req.body);
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

server.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

server.get('/api/items/find/:id', async (req, res) => {
    try {
        const itemId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(itemId)) {
            return res.status(400).json({ message: 'Invalid item ID format' });
        }
        const item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

server.get('/api/items/search', async (req, res) => {
    try {
        const { name, category, minPrice, maxPrice } = req.query;
        const query = {};
        if (name) {
            query.name = new RegExp(name, 'i');
        }
        if (category) {
            query.category = category;
        }
        if (minPrice) {
            query.price = { $gte: parseFloat(minPrice) };
        }
        if (maxPrice) {
            query.price = { ...query.price, $lte: parseFloat(maxPrice) };
        }
        const items = await Item.find(query);

        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

server.get('/api/items/low-stock', async (req, res) => {
    try {
        const threshold = parseInt(req.query.threshold);
        if (isNaN(threshold)) {
            return res.status(400).json({ message: 'Invalid threshold value' });
        }
        const items = await Item.find({ quantity: { $lt: threshold } });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



const PORT = 9000;
server.listen(PORT, () => {
    console.log("Server started!");
});