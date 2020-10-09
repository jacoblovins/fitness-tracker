const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// map to the workout collection and define the type of documents in it
const WorkoutSchema = new Schema(
{
    day:{
        type: Date,
        default: Date.now
    },
    exercises:[
        {
            type: { type: String },
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
},
{
    toJSON:{
        virtuals:true
    }
});

// Calculate workout total duration to display on home page
WorkoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise)=>{
        return total+exercise.duration;
    },0)
});

const Workout = mongoose.model("Workout",WorkoutSchema);

module.exports = Workout;