# Inventory management API

This project is an Inventory Management API built using Express.js and MongoDB. The API allows you to manage items in an inventory system with endpoints for creating, retrieving, searching, and managing stock levels.

## ✨ Features
- Add new items to the inventory.
- Retrieve all items or specific items by ID.
- Search items based on name, category, or other criteria.
- Fetch items with low stock levels.
- Lightweight and extendable

## 🚀 Installation
Follow these steps to set up the project locally:

- Clone the repository:
```bash
git clone https://github.com/IckyD/inv-mongo-express.git
cd inv-mongo-express
```

- Install the dependencies:
```bash
npm install
```

- Set up your MongoDB database connection:
    - Create a .env file in the project root:
    ```python
    DATABASE="your_mongo_connection_string"
    ```
- Start your server!
```bash
npm run start
```
The server should be up and running at default port of 9000.

## 📖 Usage
Once your server is running, you can interact with the API using tools like [Postman](https://www.postman.com/downloads/) or curl. Below are some of the key endpoints and how to use them.

## 🔑 API Endpoints
- Get All Items

    - Endpoint: `GET /api/items`
    - Description: Retrieve a list of all items in the inventory.
- Get a Single Item by ID

    - Endpoint: `GET /api/items/:id`
    - Description: Retrieve the details of a specific item using its ID.
- Search Items

    - Endpoint: `GET /api/items/search`
    - Description: Search for items by name, category, or other criteria. Example: `GET /api/items/search?name=Hammer&category=Tools`
- Get Low Stock Items

    - Endpoint: `GET /api/items/low-stock`
    - Description: Retrieve items below a certain stock threshold.
- Add a New Item

    - Endpoint: POST /api/items/add
    - Description: Add a new item to the inventory. The request body should include name, category, quantity, and price.

### 📋 Example Requests Body:
- Add new item:
```json
{
    "name": "Hammer",
    "category": "Tools",
    "quantity": 20,
    "price": 10.99
}
```

- Search for an item:
```bash
curl http://localhost:9000/api/items/search?name=Hammer&category=Tools
```

## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request with any improvements or features you’d like to add.

## 📄 License
This project is licensed under the MIT License.

#### Closing thoughts
Thank you [SanelRyan](https://github.com/SanelRyan/) for this project idea and pls give me 5 stars⭐ and dont sue me for bad code
