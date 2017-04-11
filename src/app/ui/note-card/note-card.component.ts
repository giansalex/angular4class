import {
    Component, 
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector : 'note-card',
    templateUrl : './note-card.component.html',
    styleUrls : ['./note-card.component.css']
})
export class NoteCardComponent {
   @Input() note = {}; 
   @Output() checked = new EventEmitter();
   showCheck : boolean = false;

   toggleCheck() {
       this.showCheck = !this.showCheck;
   }
   onChecked() {
       this.checked.next(this.note);
   }
}