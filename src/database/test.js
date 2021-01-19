const database = require('./db.js');
const createPeople = require('./createPeople')

database.then(async (db) => {
    await createPeople (db, {
        name: "Bruno",
        age: "19",
        location: "SP"
    })

    const people = await db.all("SELECT * FROM people")
    console.log(people);
})