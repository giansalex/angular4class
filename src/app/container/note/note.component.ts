import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService, StoreService } from '../../services';

@Component({
    selector : 'notes-container',
    templateUrl : './note.component.html',
    styleUrls : ['./note.component.css']
})
export class NoteComponent implements OnInit, OnDestroy  {
    notes = [];
    constructor(
        private noteService: NotesService,
        private store: StoreService
    ) {}
    ngOnInit() {
        this.getNotes();
     }

     ngOnDestroy() {
         console.log('destroy');
     }

     getNotes() {
         this.noteService.getNotes()
        .subscribe(); 

        this.store.changes
        .map(data => data.notes)
        .subscribe(notes => this.notes = notes);
     }

    onCreateNote(note) {
        this.noteService.createNote(note)
        .subscribe();
        // .subscribe(note => this.notes.push(note));
    }

    onNoteCheck(note) {
        this.noteService.completeNote(note)
        .subscribe();
        // .subscribe(note => {
        //     const i = this.notes.findIndex(localNote => localNote.id == note.id);
        //     this.notes.splice(i, 1);
        // });
    }

}


export class NameComponent {
    constructor() { }

    
}