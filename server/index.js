const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const Todos = require("./models/Todos");

const app = express();

app.use(express.json());
app.use(cors());
// mongoose.set("strictQuery", true);
mongoose
    .connect("mongodb+srv://imranovazer:20023838Aze@blog.6ft9u8s.mongodb.net/TodosDB")
    .then(() => console.log("DB connection successful!"));


app.get("/api/todos", async (req, res) => {
    try {
        const posts = await Todos.find();
        res.status(200).json({
            status: "succes",
            data: posts,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
});

app.patch("/api/todos/:id", async (req, res) => {
    try {


        const result = await Todos.findByIdAndUpdate(req.params.id, { isCompleted: req.body.isCompleted });

        res.status(201).json(
            {
                status: "success",
                data: result
            }
        )
    } catch (error) {
        res.status(201).json(
            {
                status: "fail",
                message: error
            }
        )
    }
}

)
app.delete("/api/todos/deleteCompleted", async (req, res) => {
    try {
        const result = await Todos.deleteMany({ [isCompleted]: 'true' });

        res.status(201).json({
            status: "success",
            data: result
        })
    } catch (error) {
        res.status(401).json({
            status: "fail",
            data: error
        })



    }
})
app.post("/api/todos", async (req, res) => {
    try {
        const arguments = {
            text: req.body.text,
            isCompleted: false
        };

        const newPost = await Todos.create(arguments);
        res.status(201).json({
            status: "succes",
            data: {
                post: newPost,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
});

app.delete("/api/todos/:id")


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App runnning on port ${port}`);
});