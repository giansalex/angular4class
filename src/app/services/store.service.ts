import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

export interface Note {
    color: string;
    title: string;
    value: string;
    id?: string | number;
    createAt?: string;
    updateAt?: string;
    userId?: string;
}

export interface User {
    id?: string;
}

export interface State {
    notes: Array<Note>;
    user: User;
}

const defaultState: State = {
    notes: [],
    user: {}
}

const _store = new BehaviorSubject(defaultState);

@Injectable()
export class StoreService {
    private store = _store;
    changes = this.store.asObservable()
    .distinctUntilChanged();

    setState(state: State) {
        this.store.next(state);
    }

    getState(): State {
        return this.store.value;
    }

    purge() {
        this.store.next(defaultState);
    }
}