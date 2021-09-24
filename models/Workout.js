const mongoose = require("mongoose");

// console.log(mongoose);

const Schema = mongoose.Schema;

console.log(schema);
const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: true,
        },
        name: {
          type: String,
          time: true,
          required: true,
        },
        duration: {
          type: Number,
          trim: true,
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
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//total duration
WorkoutSchema.virtual("totalDuration").get(function () {
  const duration = this.exercise.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
  return duration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
