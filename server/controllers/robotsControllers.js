const Robot = require("../../db/models/models");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
};

module.exports = { getRobots };
