module.exports = {
  getUser: (req, res) => {
    res.status(200).send({ email: "no@thisispatrick.com", user_id: 24 });
  },
};
