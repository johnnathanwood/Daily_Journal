"use strict";

function createEntry(date, concept, journal, mood){
    return `<h1>${concept}</h1>
            <p>${date}</p>
            <p>${journal}</p>
            <p>${mood}</p>`;
}

