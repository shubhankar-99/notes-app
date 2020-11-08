const fs = require('fs');
const chalk = require('chalk');

// const getNotes = () => {
//     return 'Your notes are..';
// }

const addNote =  (title, body) => {
    const notes = loadNotes();
   // const duplicateNotes = notes.filter((note) => note.title === title )
    const duplicateNote = notes.find((note) => note.title === title);

    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title;
    // })

    if(!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));
    }
    else
    {
        console.log(chalk.red.inverse("Title Taken"));
    }


}

const removeNote = (title)=> {
    const notes = loadNotes();
    const NotesToKeep = notes.filter((note) => note.title !== title)

    

    if(notes.length === NotesToKeep.length)
    {
        console.log(chalk.red.inverse('This Note does not exist'));
    }
    else
    {
        
        console.log(chalk.green.inverse('Note Removed Successfully'));
        saveNotes(NotesToKeep);
    }
}

const listNotes = () => {

    const notes= loadNotes();
    console.log(chalk.inverse('Yout Notes'));
    notes.forEach((note) => {
        console.log(note.title);
    })

}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if(note)
    {
       console.log(chalk.inverse(note.title)); 
       console.log(note.body);
    }
    else
    {
        console.log(chalk.red.inverse("Note not found"));
    }
}


const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }
}

module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};