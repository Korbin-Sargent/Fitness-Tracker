const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        time: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  },
});

//total duraction
WorkoutSchema.virtual("totalDuration").get(function () {
  const duration = this.exercise.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
  return duration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
