let createEntry = require("./entry");
let database = require("./entryCollection");

//1. get contacts from LS (which is in our other module)
//2. iterate over them
//2.5 where should we put it?
//3. render them to the DOM
let outputEl = document.querySelector("#entriesList");


function listEntries(){
    outputEl.innerHTML = "";
    database.getEntry().forEach(entry => {
        let journalComponent = createEntry(entry.concept, entry.date, entry.journal, entry.mood);
        writeEntriesToDOM(journalComponent);
    });
}


function writeEntriesToDOM(entry){
    outputEl.innerHTML += entry;
}


module.exports = listEntries;