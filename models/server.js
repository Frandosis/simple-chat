const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ServerSchema = new Schema({
 
  type: {
    type: String,
    required: true
  },
  data: {
    type: Buffer,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  user: {
      type: Number,
      required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Server = mongoose.model("server", ServerSchema);

// Export the Article model
module.exports = Server;