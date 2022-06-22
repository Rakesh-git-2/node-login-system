const { Client } = require("pg");
const client = new Client({
  user: "rakesh",
  host: "localhost",
  database: "self_dev",
  password: "rakesh",
  port: 5432,
});
client.connect();
module.exports = { client };
