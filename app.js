const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await db.Contact.findAll({ raw: true });
    return res.send(contacts);
  } catch (err) {
    console.error("An error occurred querying contacts:", JSON.stringify(err));
    return res.status(500).send(JSON.stringify(err));
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});
