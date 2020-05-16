const fs= require('fs')

const fetchNotes=()=>{
    try{
        const notesString=fs.readFileSync('notes-data.json');
        const notes =JSON.parse(notesString)
        return notes;
    }
    catch(e){
        return [];
    }
}

const saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

const addNote=(title,body) =>{
    const notes=fetchNotes();
    const note={
        title,
        body
    }
    var duplicateNotes= notes.filter((Note)=> Note.title===title)

    if(duplicateNotes.length===0){
        notes.push(note)
        saveNotes(notes);
        console.log(`Note added with title : ${title}`);
    }else{
        console.log(`Note with title: ${title} already present`)
    }
}

const getAll=()=>{
    console.log('Getting notes....')
    const notes=fetchNotes();
    notes.map((note)=> console.log(note.title));
}

const getNote=(title)=>{
    console.log('Getting note..')
    const notes=fetchNotes();
    filterednote= notes.filter((note)=>note.title===title);
    console.log(filterednote);
}
const deleteNote=(title)=>{
    console.log('deleting note...')
    notes=fetchNotes();
    filterednote=notes.filter((note)=> note.title !==title)
    if(filterednote.length===notes.length){
        console.log(`No note with title: ${title}`);
    }else{
        saveNotes(filterednote)
        console.log(`Note with title: ${title} deleted`);
    }
}

module.exports={
    addNote,
    getAll,
    getNote,
    deleteNote
}