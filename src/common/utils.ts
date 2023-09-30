import { SOLAR_TERMS } from "./data";

/**
 * 计算节气
 */
// calculate the solar term for a given year and month
export function getSolarTerm(date) {
  const solarTerms = [
    '立春', '雨水', '惊蛰', '春分', '清明', '谷雨',
    '立夏', '小满', '芒种', '夏至', '小暑', '大暑',
    '立秋', '处暑', '白露', '秋分', '寒露', '霜降',
    '立冬', '小雪', '大雪', '冬至', '小寒', '大寒'
  ];
  const terms = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
  
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const termIndex = Math.floor((day + terms[month * 2 - 2] - 1) / 15) % 24;
  return solarTerms[termIndex];
}
