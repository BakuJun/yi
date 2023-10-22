import { Solar } from 'lunar-typescript';
import { SHI_CHEN_ORIGIN_DATA } from './data';


export function getLunar() {
  const d = new Date();
  const solar = Solar.fromYmd(d.getFullYear(), d.getMonth() + 1, d.getDate());
  return solar.getLunar();
}

export function getJingLuo(pName) {
  const shichen = Object.keys(SHI_CHEN_ORIGIN_DATA).filter(sc => {
    const item = SHI_CHEN_ORIGIN_DATA[sc];

    if (item?.jingluo?.pName === pName) {
      return item;
    }
  })

  return shichen && SHI_CHEN_ORIGIN_DATA[shichen] ? SHI_CHEN_ORIGIN_DATA[shichen].jingluo : {};
}

export function setPageTitle(title: string) {
  document.title = title;
}