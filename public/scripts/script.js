document.addEventListener('DOMContentLoaded', () => {
    updateRegisteredPeople();
})

function updateRegisteredPeople() {

    fetch("http://192.168.0.13:1010/All").then( res => {
        return res.json();
    }).then( json => {
        let postPeople = '';

        let people = JSON.parse(json);
        
        people.forEach( person => {
            let postPerson = `<div id="${person.id}" class="person-card">
            <div class="card">
                <h4 class="PersonName">${person.name}</h4>
                <h4 class="PersonAge">${person.age}</h4>
                <h4 class="PersonLocation">${person.location}</h4>
                <button id="${person.id}" class="editButton" onclick="editPerson(this.id)">Edit</button>
                <button id="${person.id}" class="deleteButton" onclick="deletePerson(this.id)">Delete</button> 
            </div>
        </div>`

        postPeople += postPerson;
        })

        document.getElementById("people").innerHTML = postPeople;
    });
}

function savePerson() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let location = document.getElementById("location").value;

    let person = {name, age, location};

    const options = {
        method: "POST",
        headers: new Headers({"content-type": "application/json" }),
        body: JSON.stringify(person)
    }

    fetch("http://192.168.0.13:1010/new", options).then(res =>{
        updateRegisteredPeople();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("location").value = "";
    })
}

let postEditPeople = '';

function editPerson(id) {

    fetch(`http://192.168.0.13:1010/update/${id}`).then( res => {
        return res.json();
    }).then( json => {

        let person = JSON.parse(json);
        
        person.forEach( person => {
            let postEditPerson = ` <div id="editedPerson">
                <input id="editName" placeholder="name" value="${person.name}">
                <input id="editAge" placeholder="age" value="${person.age}">
                <input id="editLocation" placeholder="location" value="${person.location}">
                <button id="${person.id}" onclick="saveEditPerson(id)">Finish edit</button>
            </div>`

        postEditPeople += postEditPerson;

        })

    document.getElementById("editPerson").innerHTML = postEditPeople;
    });
}


function saveEditPerson(id) {
    let name = document.getElementById("editName").value;
    let age = document.getElementById("editAge").value;
    let location = document.getElementById("editLocation").value;

    let person = {name, age, location};

    const options = {
        method: "PUT",
        headers: new Headers({"content-type": "application/json" }),
        body: JSON.stringify(person)
    }

    fetch(`http://192.168.0.13:1010/updated/${id}`, options).then( res => {
        updateRegisteredPeople();
        postEditPeople = '';
        document.getElementById("editedPerson").remove();
    });
}    


function deletePerson(id) {

    const options = {
        method: "DELETE"
    }

    fetch(`http://192.168.0.13:1010/delete/${id}`, options).then(res => {
        updateRegisteredPeople();
    })

}