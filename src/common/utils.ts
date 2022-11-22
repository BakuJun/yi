import { RESULTS } from "./constants";

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