
import { DIVINATION_TYPES, GUA_8, SHI_CHEN } from '@/common/constants';
import { action, observable, makeAutoObservable, computed } from 'mobx';
import Message from '@/pages/yi/components/Message';
import { getJX } from '@/pages/yi/common/utils';
import gua64 from '@/common/gua64';


class Divination {
  @observable type: string = DIVINATION_TYPES.NUMBERS;
  @observable n1: number = 0;
  @observable n2: number = 0;
  @observable dongyao: string = '';
  @observable yuanGua = null;
  @observable bianGua = null;

  constructor() {
    makeAutoObservable(this)
  }

  @action
  setType(type: string) {
    if (type !== this.type) {
      this.type = type;
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
  submit() {
    const { type, n1, n2 } = this;
    if (this.type === DIVINATION_TYPES.NUMBERS) {
      if (!n1 || !n2) {
        Message.error('请输入正确的正数.')
        return
      }
      this.computeYuanGua();
      this.computeBianGua();
    } else {

    }
  }

  @action
  clear() {
    this.n1 = 0;
    this.n2 = 0;
    this.type = '';
    this.dongyao = '';
    this.yuanGua = null;
    this.bianGua = null;
  }

  @action
  computeYuanGua() {
    let wai, nei;

    if (this.type === DIVINATION_TYPES.NUMBERS) {
      if (!this.cn1 || !this.cn2) {
        return
      }

      wai = this.get3YaoGua(this.cn1);
      nei = this.get3YaoGua(this.cn2)
    } else {

    }

    if (wai && nei) {
      // @ts-ignore
      this.yuanGua = {
        wai,
        nei,
        jx: getJX(nei, wai),
        yao6: gua64.getGua64ByNeiWai(nei, wai)
      };
    }
  }

  @action
  computeBianGua() {
    if (this.type === DIVINATION_TYPES.NUMBERS) {
      // @ts-ignore
      this.bianGua = this.getNumBianGua();
    } else {

    }
    return {
      // wai : this.get3YaoGua(this.n1),
      // nei : this.get3YaoGua(this.n2)
    };
  }

  @action
  setDongYao(dongyao: string) {
    this.dongyao = dongyao;
  }

  @computed
  get cn1() {
    return (this.n1 % 8) || 8;
  }

  @computed
  get cn2() {
    return (this.n2 % 8) || 8;
  }

  private getNumBianGua() {
    if (!this.n1 || !this.n2) {
      return null;
    }

    const wai = this.get3YaoGua(this.cn1, true)
    const nei = this.get3YaoGua(this.cn2, true)
    const shiChen = this.getShiChen();
    // @ts-ignore
    const bianIndex = ((this.n1 + this.cn2 + shiChen?.value) % 6) || 6;
    const yao6 = wai.img.concat(nei.img)
    this.setDongYao(`${bianIndex}`)
    yao6[6 - bianIndex] = !(yao6[6 - bianIndex])

    if (bianIndex > 3) {
      let bian = this.get3YaoGuaByImg(yao6.slice(0, 3))
      return {
        wai: bian,
        nei,
        jx: getJX(nei, bian),
        yao6: gua64.getGua64ByNeiWai(nei, bian)
      }
    } else {
      let bian = this.get3YaoGuaByImg(yao6.slice(3))
      return {
        wai,
        nei: bian,
        jx: getJX(bian, wai),
        yao6: gua64.getGua64ByNeiWai(bian, wai)
      }
    }

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

  private get3YaoGuaByImg(img: boolean[]) {
    for (const iterator of GUA_8) {
      const [k, v] = iterator;

      for (let i = 0; i < v.img.length; i++) {

        if (v.img[i] !== img[i]) {
          break;
        } else {
          if (i == img.length - 1) {
            return v;
          }
        }
        // console.log(v)
        // return v;
      }
    }
    return;
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

const divination = new Divination();

export default divination;

// TODO
// 4. 日期算法
