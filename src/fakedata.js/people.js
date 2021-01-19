module.exports = {

    people: [
        {
            id: 0,
            name: "Bruno",
            age: "19",
            location: "São Paulo"
        }
    ],

    getAll() {
        return this.people;
    },

    newPost(name, age, location) {

        this.people.push({"id": createID(), name, age, location});

    }

}

let x = 0;

function createID() {
    x++;
    return x;
}