const get = (req, res) => {
  const userDetails = [
    { name: "User1", id: 1, batch: "MERN" },
    { name: "User2", id: 2, batch: "MEAN" },
  ];
  if (req.params.batch) {
    const newUser = userDetails.filter((val) => val.batch === req.params.batch);
    res.send(newUser);
  } else if (req.query.id) {
    const newUser = userDetails.filter(
      (val) => val.id === Number(req.query.id)
    );
    res.send(newUser);
  } else {
    res.send(userDetails);
  }
};

module.exports.controllerGet = get;
