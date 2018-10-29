
function addEntry(event){
    event.preventDefault();
    let journal = {
        concept: document.getElementById("journalConcepts").value,
        date: document.getElementById("journalDate").value,
        journal: document.getElementById("journalEntry").value,
        mood: document.getElementById("journalMood").value
    };
    entryForm.reset();
    database.addEntry(journal);
    entryList();
}

function populateForm(){

    form.innerHTML = `
    <div class="journal">
        <form class="journalForm" id="journal-form" action="">

            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
            <br><br>
            <input type="file" name="pic" id="pic">
            <br>
            <br>
            <label for="journalConcepts">Concepts covered</label>
            <input type="text" name="journalConcepts" id="journalConcepts">
            <label for="journalEntry">Journal Entry</label>
            <input type="text" name="journalEntry" id="journalEntry">
            <label for="journalMood">Mood for the Day</label>
            <div class="container" id="journalMood">
                <input type="button" class="button" value="Normal">
                <input type="button" class="button" value="Happy">
                <input type="button" class="button" value="Stressed">
                <input type="button" class="button" value="Mad">
            </div>
            <!-- <input type="range" min="1" max="20" value="10" class="slider" id="myRange"> -->
            <button class="submit" id = "add-entry" style="vertical-align:middle"><span>Submit</span></button>
        </form>
    </div>
    `;
    entryForm = document.getElementById("journal-form");
    document.getElementById("add-entry").addEventListener("click", addEntry);
}

