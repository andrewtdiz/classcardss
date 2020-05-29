const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db")


app.use(cors());
app.use(express.json());

app.post("/user", async(req,res) => {
    try {
        const {email, image} = req.body;
        const displayName = req.body['display_name']
        const newUser = await pool.query("INSERT INTO public.users(email, display_name, image, time_created) VALUES ($1, $2, $3, now());", [email, displayName, image])
        res.json(newUser.rows[0])
    } catch (error) {
        console.log(error)
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000")
})