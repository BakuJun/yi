
import { SHI_CHEN_ORIGIN_DATA } from './data';
import { RESULTS } from "./constants";


export function getJingLuo(pName) {
  const shichen = Object.keys(SHI_CHEN_ORIGIN_DATA).filter(sc => {
    const item = SHI_CHEN_ORIGIN_DATA[sc];

    if (item?.jingluo?.pName === pName) {
      return item;
    }
  })

  // @ts-ignore
  return shichen && SHI_CHEN_ORIGIN_DATA[shichen] ? SHI_CHEN_ORIGIN_DATA[shichen].jingluo : {};
}

export function setPageTitle(title: string) {
  document.title = title;
}

export function getJX(ti?: I8GuaItem, yong?: I8GuaItem) {
  if (!ti ||!yong) {
    return;
  }

  if (yong.birth === ti.nature) {
    return RESULTS.get('DA_JI')
  } else if (ti.win === yong.nature) {
    return RESULTS.get('XIAO_JI')
  } else if (yong.win === ti.nature) {
    return RESULTS.get('DA_XIONG')
  } else if (ti.birth === yong.nature) {
    return RESULTS.get('XIAO_XIONG')
  } else if (yong.nature === ti.nature) {
    return RESULTS.get('BU_DING')
  }
}