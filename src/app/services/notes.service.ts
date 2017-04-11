import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StoreHelperService } from './store-helper.service';

@Injectable()
export class NotesService {
    path = '/api/v1/notes/';

    constructor(
        private api: ApiService,
        private storeHelper: StoreHelperService
    ) { }

    createNote(note) {
        return this.api.post(this.path, note)
        .do(savedNote => this.storeHelper.add('notes', savedNote));
    }

    getNotes() {
        return this.api.get(this.path)
        .do(resp => this.storeHelper.update('notes', resp));
    }

    completeNote(note) {
        return this.api.delete(`${this.path}${note.id}`)
        .do(resp => this.storeHelper.findAndDelete('notes', resp.id));
    }
}