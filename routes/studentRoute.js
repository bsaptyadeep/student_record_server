const router = require("express").Router();
const Student = require('../models/model');
const mongo = require('mongodb')

router.post("/", async (req, res) => {
    try {
        // console.log(req.body);
        var std = await Student.findOne({ email: req.body.email })
        if (std)
            res.status(201).send({ message: "Student with email already exits!" })
        std = await new Student(req.body).save();
        res.status(200).send({ message: "Student details Added" })
    }
    catch (err) {
        console.log("Error Occured: ", err);
        res.status(400).send({ message: err });
    }
}).get("/", async (req, res) => {
    try {
        const std = await Student.find();
        if (std.length == 0)
            res.status(201).send(std);
        else
            res.status(200).send(std)
    }
    catch (err) {
        console.log("Error Occured: ", err);
        res.status(400).send({ message: err });
    }
}).delete("/", async (req, res) => {
    try {
        // console.log(req.body._id)
        const std = await Student.deleteOne({ _id: new mongo.ObjectId(req.body._id) })
        res.status(200).send({ message: "Successfully deleted" })
    }
    catch (err) {
        console.log("Error Occured: ", err);
        res.status(400).send({ message: err });
    }
}).put("/", async (req, res) => {
    try {
        await Student.updateOne({ _id: new mongo.ObjectId(req.body.id) },
            {
                $set: {
                    firstName: req.body.firstName,
                    secondName: req.body.secondName,
                }
            })
        res.status(200).send({ message: "Update Successfull" })
    }
    catch (err) {
        console.log("Error Occured: ", err);
        res.status(400).send({ message: err });
    }
})

module.exports = router;