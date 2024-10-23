//Listens for Express application on port 8081 and sends a message to the console to let know it's working. Sets up the other applications too.
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

//Creates a connection with mysql, the database that will hold the information
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "assign"
})

//The api, only works when the app is listening! (I practically pumped my fist in the air when it worked properly)
app.get("/", (req, res) => {
    //Simple sql to select everything from the student table, the one I'm using for this
    const sql = "SELECT * FROM student";
    
    //Error handling
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
})

//Inserts data into the database
app.post("/create", (req, response) => {
    const sql = "INSERT INTO student (`Name`, `Email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, result) => {
        if(err) {
            console.error("Error:", err);
            return response.status(500).json({ error: "Error"});
        }
        return response.json(result);
    })
})

//Changes data in database
app.put('/update/:id', (req, response) => {
    const sql = "UPDATE student SET `Name` = ?, `Email` = ? WHERE ID = ?";
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id;
    db.query(sql, [...values, id], (err, result) => {
        if(err) {
            console.error("Error:", err);
            return response.status(500).json({ error: "Error"});
        }
        return response.json(result);
    })
})

//Deletes data in database
app.delete('/student/:id', (req, response) => {
    const sql = "DELETE FROM student WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if(err) {
            console.error("Error:", err);
            return response.status(500).json({ error: "Error"});
        }
        return response.json(result);
    })
})

app.listen(8081, () => {
    console.log("listening");
})