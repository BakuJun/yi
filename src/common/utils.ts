import { Solar } from 'lunar-typescript';

export function getSolarTerm() {
  const d = new Date();
  const solar = Solar.fromYmd(d.getFullYear(), d.getMonth() + 1, d.getDate());
  const lunar = solar.getLunar();
  return (lunar.getCurrentJieQi() || lunar.getPrevJieQi()).getName();
}