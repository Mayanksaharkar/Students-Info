const express = require('express');
const cors = require('cors')
const connectToMongo = require('./dbConnector');
const Stud = require('./models/stud');
connectToMongo();

const app = express();
app.use(express.json());
app.use(cors());

const port = 8080;

app.get('/', (req, res) => {
    res.json("Hello World!");
})

// routes here
app.post('/create', async (req, res) => {
    try {
        const { id, fname, lname, address, program, maritialStatus, country } = req.body;
        console.log("address:", address)
        console.log("country:", country)
        console.log("maritialStatus:", maritialStatus)
        console.log("program:", program)
        console.log("lname:", lname)
        console.log("fname:", fname)
        console.log(id);
        const newStud = new Stud({ id, fname, lname, address, program, maritialStatus, country });
        const savedStud = await newStud.save();
        res.json(savedStud);

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong!");
    }
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})