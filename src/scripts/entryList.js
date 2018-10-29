
function listEntries(){
    outputEl.innerHTML = ".entryList";
    database.getEntry().forEach(entry => {
        let journalComponent = createEntry(entry.concept, entry.date, entry.journal, entry.mood);
        writeEntriesToDOM(journalComponent);
    });
}



function writeEntriesToDOM(entry){
    outputEl.innerHTML += entry;
}

const componentMakerObject = {
    componentMaker: (entries) => {
        entries.forEach( (entry) => {
        document.querySelector(".entryList").innerHTML += entryComponentObjectManager.makeEntryComponent(entry);
        })
    }
}

const componentMakerObjectManager = Object.create(componentMakerObject);


