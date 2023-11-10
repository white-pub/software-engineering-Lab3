// scripts.js
// 2023.11.7
// Originally by Ian Kollipara
// slight edit by Anna Chen


const API = "http://localhost:8000/api"


// Make sure this script mounted properly
console.log("8:29 you activated scripts.js")


// did not work properly, could not figure out why
function createHolidayElement(name, date, description) {

// Make sure this function worked
console.log("you activated the createHolidayElement JavaScript function")

    const nameEl = document.createElement("h1");
    const dateEl = document.createElement("p");
    const descriptionEl = document.createElement("p");
    const holidayEl = document.createElement("section");

    nameEl.textContent = name;
    dateEl.textContent = date;
    descriptionEl.textContent = description;

    holidayEl.append(nameEl);
    holidayEl.append(dateEl);
    holidayEl.append(descriptionEl);

    return holidayEl;
}



// did not work properly, could not figure out why
function getToday() {

// Make sure this function worked
console.log("you activated the getToday JavaScript function")

    fetch(`${API}/today`)
        .then(res => res.json())
        .then(json => json.forEach(holiday => {
            let section = document.querySelector("#holidays");
            let el = createHolidayElement(holiday.name, holiday.date, holiday.description);
            section.append(el);
        }))
}


// did not work properly, could not figure out why
if(window.location.pathname === "/today.html") window.onload = getToday;
