
import { DIVINATION_TYPES } from '@/common/constants';
import { action, observable, makeAutoObservable, computed } from 'mobx';

class Divination {
  @observable type: string = '';
  @observable n1: number = 0;
  @observable n2: number = 0;

  constructor() {
    makeAutoObservable(this)
  }

  @action
  setType(type: string) {
    if (type !== this.type) {
      this.type = type;
      this.n1 = 0;
      this.n2 = 0;
    }
  }

  @action
  setN1(n1: number) {
    this.n1 = n1;
  }

  @action
  setN2(n2: number) {
    this.n2 = n2;
  }

  @computed get isShowNums() {
    return this.type === DIVINATION_TYPES.NUMBERS;
  }
}

export default new Divination();