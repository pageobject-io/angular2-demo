import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Part} from "../part";

@Component({
    selector: 'part-editor',
    templateUrl: './part-editor.component.html',
    styleUrls: ['./part-editor.component.css']
})
export class PartEditorComponent {

    @Input()
    private part: Part;
    @Output()
    private onCancel = new EventEmitter<void>();
    @Output()
    private onSave = new EventEmitter<void>();

    public save(): void {
        this.onSave.emit();
    }

    public cancelEdit(event): void {
        this.onCancel.emit();
        event.preventDefault();
    }


}
