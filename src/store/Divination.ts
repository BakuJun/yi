
import { DIVINATION_TYPES } from '@/common/constants';
import { action, observable, makeAutoObservable, runInAction } from 'mobx';

class Divination {
  @observable type: string = DIVINATION_TYPES.YMDH;
  @observable n1: number | string = '';
  @observable n2: number | string = '';

  constructor() {
    makeAutoObservable(this)
  }
}

export default new Divination();