const { client } = require("../queries");

const addUserAndSignup = (email, password) => {
  const query = `
  INSERT INTO users(email,password)
  VALUES ('${email}', '${password}')`;

  client.query(query, async (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("User added");
  });
};

const getAllUsers = (callback) => {
  const query = `
  SELECT * FROM users`;

  return client.query(query, async (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    callback(res.rows);
  });
};

const getUserForLogin = (req, res, callback) => {
  const { email, password } = req.body;
  const query = `
  SELECT * FROM users
  WHERE email = '${email}'`;
  // Look for user email in the database
  return client.query(query, async (err, resp) => {
    if (err) {
      console.error(err);
      return;
    }
    callback(resp.rows[0], req, res);
  });
};
module.exports = { addUserAndSignup, getAllUsers, getUserForLogin };
