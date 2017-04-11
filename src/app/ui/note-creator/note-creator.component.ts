import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'note-creator',
    templateUrl: './note-creator.component.html',
    styleUrls : ['./note-creator.component.css']
})

export class NoteCreatorComponent {
    @Output() createNote = new EventEmitter();
    myColors : string[] = ['orange', 'lightgreen', 'lightblue', 'teal', 'purple', 'yellow'];
    newNote = {
        title : '', 
        value : '',
        color : 'white',
    };
    fullForm : boolean;

    onCreatorNote() {
        const {title, value} = this.newNote;
        if (title && value) {
            this.createNote.next(this.newNote);
            this.reset();
            this.setFull(false);
        }
    }
    reset() {
        this.newNote = {
            title : '', 
            value : '',
            color : 'white',
        };
    }

    setFull(value : boolean) {
        this.fullForm = value;
    }

    onSelectColor(color: string) {
        this.newNote.color = color;
    }
}