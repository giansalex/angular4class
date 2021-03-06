import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable()
export class StoreHelperService {
  constructor(private store: StoreService) {}
  update(prop, state) {
    const currentState = this.store.getState();
    this.store.setState(Object.assign({}, currentState, { [prop]: state }));
  }
  add(prop, state) {
    const currentState = this.store.getState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, { [prop]: [state, ...collection] }));
  }
  findAndUpdate(prop, state) {
    const currentState = this.store.getState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, {[prop]: collection.map(item => {
      if (item.id !== state.id) {
        return item;
      }
      return Object.assign({}, item, state)
    })}))
  }
  findAndDelete(prop, id) {
    const currentState = this.store.getState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, {[prop]: collection.filter(item => item.id !== id)}));
  }
}

