const router = require("express").Router();
const db = require("../models");

//get route for workout data
router.get("/api/workouts", (req, res) => {
  //   db.Workout.find({})
  //     .then((dbWorkout) => {
  //       console.log(dbWorkout);
  //       res.json(dbWorkout);
  //     })
  //     .catch((err) => {
  //       res.status(400).json(err);
  //     });
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//posting new workout data
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Update workout data
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate({ _id: req.params.id }, { exercises: req.body })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//get workout data far range endpoint
router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;