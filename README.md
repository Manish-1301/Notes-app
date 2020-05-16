# Notes-app

This app lets you write notes into a file using command line.

####Commands:

#####add:

Lets you add a new note to the file
Example:
node app.js add --title="TITLE" --body="BODY"
OR
node app.js add -t="TITLE" -b="BODY"

#####list:

Lists all the notes in the file
Example:
node app.js list

#####get:

Gets a partciular note
Example:
node app.js get --title="TITLE"
OR
node app.js get -t="TITLE" 

#####delete:

Deletes a partciular note
Example:
node app.js delete --title="TITLE"
OR
node app.js delete -t="TITLE" 
