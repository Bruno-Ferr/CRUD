function createPeople(db, person) {
    db.run(`
        INSERT INTO people (
            name,
            age,
            location
        ) VALUES (
            "${person.name}",
            "${person.age}",
            "${person.location}" 
        );
    `);
}

module.exports = createPeople;