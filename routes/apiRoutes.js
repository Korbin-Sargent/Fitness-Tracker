const router = require("express").Router();
const db = require("../models");

//get route for workout data
router.get("/api/routes", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/routes", (req, res) => {
    db.Workout.create(req.body).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    }
})
