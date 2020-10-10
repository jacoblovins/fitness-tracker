const router = require("express").Router();
const path = require("path");
const Workout = require("../models/Workout.js");

// Static HTML routes for each of the three pages

router.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"../public/index.html"));
});

router.get("/exercise",(req,res)=>{
  res.sendFile(path.join(__dirname,"../public/exercise.html"));
});

router.get("/stats",(req,res)=>{
  res.sendFile(path.join(__dirname,"../public/stats.html"));
});

// API routes for mongoose interaction 

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Get route for the charts
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Add/ complete workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Update workout by id
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,{$push:{exercises: req.body}})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;