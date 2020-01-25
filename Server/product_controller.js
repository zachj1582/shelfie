module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get("db");

    db.get_inventory().then(data => res.status(200).send(data));
  },
  addItem: (req, res) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;

    db.add_item(name, price, img).then(() => res.sendStatus(200));
  },
  getItem: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.get_item(id).then(response => {
      const data = response[0];
      // console.log(data)
      res.status(200).send(data);
    });
  },
  editItem: (req, res) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;
    const { id } = req.params;
    console.log(req.params);
    db.edit_item(id, name, price, img).then(() => res.sendStatus(200));
  },
  deleteItem: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_item(id).then(data => res.sendStatus(200));
  }
};
