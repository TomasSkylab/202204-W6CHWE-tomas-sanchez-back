const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: Date,
  },
  stamina: {
    type: Number,
    min: 0,
    max: 10,
  },
  dateOfCreation: {
    type: String,
  },
  speed: {
    type: Number,
    min: 0,
    max: 10,
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
