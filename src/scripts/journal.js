const createJournalEntry = () => {
    const entries = {
        entry:[],
    }

    return entries

}
const entries = []
const stringified = JSON.stringify(entries)

localStorage.setItem("entries",stringified)



