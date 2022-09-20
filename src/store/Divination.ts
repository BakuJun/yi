
import { DIVINATION_TYPES, GUA_8, SHI_CHEN } from '@/common/constants';
import { action, observable, makeAutoObservable, computed } from 'mobx';
import Message from '@/components/Message';
import { getJX } from '@/common/utils';

class Divination {
  // @observable type: string = '';
  // @observable n1: number = 0;
  // @observable n2: number = 0;

  @observable type: string = DIVINATION_TYPES.NUMBERS;
  @observable n1: number = 0;
  @observable n2: number = 0;

  dongyao: string = '';

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

  @action
  submit({ n1, n2, type }: { n1: number, n2: number, type: string }) {
    if (type === DIVINATION_TYPES.NUMBERS) {
      if (!n1 || !n2) {
        Message.error('请输入正确的数字.')
        return
      }
      this.n1 = n1;
      this.n2 = n2;
    } else {
      this.type = type;
    }
  }

  @computed get yuanGua() {
    let shang, xia;

    if (this.type === DIVINATION_TYPES.NUMBERS) {
      if (!this.n1 || !this.n2) {
        return
      }

      shang = this.get3YaoGua(this.n1);
      xia = this.get3YaoGua(this.n2)
    } else {

    }

    return {
      shang,
      xia,
      jx: getJX(xia, shang)
    };
  }

  @computed get bianGua() {
    if (this.type === DIVINATION_TYPES.NUMBERS) {
      return this.getNumBianGua();
    } else {

    }
    return {
      // shang : this.get3YaoGua(this.n1),
      // xia : this.get3YaoGua(this.n2)
    };
  }

  @computed get dongYao() {
    return this.dongyao;
  }

  private getNumBianGua() {
    if (!this.n1 || !this.n2) {
      return
    }

    const shang = this.get3YaoGua(this.n1, true)
    const xia = this.get3YaoGua(this.n2, true)
    const shiChen = this.getShiChen();
    const bianIndex = (this.n1 + this.n2 + shiChen?.value) % 6;
    const yao6 = shang.img.concat(xia.img)
    this.dongyao = `${bianIndex}`
    yao6[6 - bianIndex] = !(yao6[6 - bianIndex])
  }



  private get3YaoGua(num: number, clone = false) {
    for (const iterator of GUA_8) {
      const [k, v] = iterator;
      if (v.value === num) {
        // 深拷贝一份
        if (clone) {
          return JSON.parse(JSON.stringify(v))
        } else {
          return v;
        }
      }
    }
  }

  private getShiChen() {
    const hour = new Date().getHours()
    for (const iterator of SHI_CHEN) {
      const [k, v] = iterator;
      if (v.times.indexOf(hour) > -1) {
        return v;
      }
    }
  }
}

export default new Divination();