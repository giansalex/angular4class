import { 
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls : ['./color-picker.component.css']
})

export class ColorPickerComponent {
    @Input() colors : string[] = [];
    @Output() selected = new EventEmitter();
    selectorVisible : boolean = false;

    showSelector(value: boolean) {
        this.selectorVisible = value;
    }

    selectColor(color: string) {
        this.selected.next(color);
        this.showSelector(false);
    }
}