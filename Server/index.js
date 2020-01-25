require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  cors = require("cors"),
  pc = require('./product_controller'),
  app = express(),
  { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());
app.use(cors());

app.get('/api/inventory', pc.getInventory)
app.get('/api/item/:id', pc.getItem)
app.post('/api/inventory', pc.addItem)
app.put('/api/item/:id', pc.editItem)
app.delete('/api/item/:id', pc.deleteItem)


massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
  app.listen(SERVER_PORT, () =>
    console.log(`Server running on ${SERVER_PORT}`)
  );
});
