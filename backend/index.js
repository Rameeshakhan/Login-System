const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./model/user.model")


require("dotenv").config();
const URL = process.env.DATABASE;
app.use(cors())
app.use(express.json())

//connecting databse using mongoose
mongoose.connect(URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.log('Error connecting to MongoDB:', error);
    });

//create user register route
app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

//login route
app.post("/api/login", async (req, res) => {
    await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if(User){
        res.json({ status: "ok" , user: User})
    } else{
        res.json({ status: "error", error: "User not found" })
    }

})

app.listen(2000, () => {
    console.log("Server started at 2000")
})