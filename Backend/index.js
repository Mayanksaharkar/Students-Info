const express = require('express');
const cors = require('cors')
const connectToMongo = require('./dbConnector');
const Stud = require('./models/stud');
connectToMongo();

const app = express();
app.use(express.json());
app.use(cors());

const port = 8080;

// routes here



app.post('/create', async (req, res) => {
    try {
        const { id, fname, lname, address, program, dob, maritalStatus, country } = req.body;
        const stud = await Stud.findOne({ id: req.params.id });
        if (!stud) {
            const newStud = new Stud({ id, fname, lname, address, program, dob, maritalStatus, country });
            const savedStud = await newStud.save();
            res.json(savedStud).status(200);
        }
        else {
            res.status(400).send("Already Exists!");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong!");
        console.log("Debugging error:", error);
    }
})
app.get('/students', async (req, res) => {
    try {
        const students = await Stud.find();
        res.json(students);

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong!");
    }
})

app.delete('/delete/:id', async (req, res) => {
    try {
        let stud = await Stud.findById(req.params.id)
        if (!stud) {
            return res.status(401).send("not found");
        }
        await Stud.findByIdAndDelete(req.params.id);
        res.send("Student deleted")
    } catch (error) {
        res.json({ error: error.message }).send("Something went Wrong")
    }
})

app.put('/update/:id', async (req, res) => {
    const { id, fname, lname, address, program, maritialStatus, country } = req.body;
    const stud = await Stud.findOne({ id });
    if (stud) {
        stud.fname = fname;
        stud.lname = lname;
        stud.address = address;
        stud.program = program;
        stud.maritalStatus = maritialStatus;
        stud.country = country;
        const updatedStud = await stud.save();
        res.json(updatedStud).status(200);
    } else {
        return res.status(400).send("Not Found");
    }
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})