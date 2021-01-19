const express = require('express');
const post = require("../fakedata.js/people");
const db = require("../database/db");
const createPeople = require('../database/createPeople');

const router = express.Router();

router.use(express.json());

router.get("/All", (req, res) => {

    db.all(` SELECT * FROM people`, function(err, rows) {
        if (err) {
            return console.log(err);
        }

        res.json(JSON.stringify( rows ));
    })

});

router.post("/new", async(req, res) => {

    const fields = req.body;

    const data = await db
    await createPeople(data, {
        name: fields.name,
        age: fields.age,
        location: fields.location
    })


    res.send("Added");
});

router.get("/update/:id", (req, res) => {

    let id = req.params.id;
    

    db.all(` SELECT * FROM people WHERE id = "${id}" `, function(err, rows) {
        if (err) {
            return console.log(err);
        }
        res.json(JSON.stringify( rows ));
    })
})

router.put("/updated/:id", (req, res) => {

    let person = req.params.id;

    let name = req.body.name;
    let age = req.body.age;
    let location = req.body.location;

    db.run(`UPDATE people 
        SET name = "${name}", age = "${age}", location = "${location}" 
        WHERE id = "${person}" 
    `);

    res.send("person updated");
    
});


router.delete("/delete/:id", (req, res) => {

    let deleted = req.params.id

    db.run(`DELETE FROM people WHERE id = ${deleted}`);
    
    res.send("person deleted");
});


module.exports = router;