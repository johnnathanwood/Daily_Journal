"use strict";

let database = Object.create(null, {
    init: {
        value: function(){
            this.getDatabase();
        }
    },
    entries: {
        value: [],
        writable:true
    },
    addEntry: {
        value: function(newEntry){
            let database = this.getEntry();
            database.push(newEntry);
            this.setEntry(database);
        }
    },
    getEntry: {
        value: function(){
            return this.entries;
        }
    },
    getDatabase: {
        value: function(){
            return JSON.parse(localStorage.getItem("entries")) || [];
        }
    },
    setEntry: {
        value: function(entries){
            localStorage.setItem("entries", JSON.stringify(entries));
            this.entries = this.getDatabase();
        }
    }
});


module.exports = database;