const fs = require('fs');
const _= require('lodash')
const yargs= require('yargs')

const notes = require('./notes.js')

var titleoptions={
    describe:'Title of note',
    demand:true,
    alias:'t'
}
var bodyoptions={
    describe:'Body of note',
    demand:true,
    alias:'b'
}

const argv=yargs
    .command('add','Adding a note',{
        title:titleoptions,
        body:bodyoptions
    })
    .command('list','Listing all notes')
    .command('get','Getting the required note',{title:titleoptions})
    .command('delete','deleting the required note',{title:titleoptions})
    .argv;
const command=argv._[0];
console.log(`Command: ${command}`);

if(command==='add'){
    notes.addNote(argv.title,argv.body);
}else if (command==='list'){
    notes.getAll();
}else if(command==='get'){
    notes.getNote(argv.title);
}else if(command==='delete'){
    notes.deleteNote(argv.title);
}else {
    console.log('Command not found!!')
}
