const express = require("express");
const User = require("../src/models/user.model");

const app = express();
const port = 3000;

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send(err.message);
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).send(err.message);
    }
});

app.patch("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).json(user);
    } catch (err) {
        console.error("Error updating user:", err);
        res.status(500).send(err.message);
    }
});

app.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(204).send();
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).send(err.message);
    }
});

app.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch(err){
        console.error("Error creating user:", err);
        res.status(500).send(err.message);
    }
});


app.get("/views/users", async (req, res) => {
    const users = await User.find();
    res.render("index", { title: "Aulão Node JS", users });
    // You can pass user data to the view here if needed
});