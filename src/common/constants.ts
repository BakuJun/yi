import { SHI_CHEN_ORIGIN_DATA } from "./data";

export enum DIVINATION_TYPES {
  YMDH = 'YMDH', // 年月日
  NUMBERS = 'NUMBERS' //数字
}

export const RESULTS = new Map(Object.entries({
  DA_JI: {
    title: '大吉',
    desc: '用生体万事吉',
    mean: '客观环境服务于人。不用操心就能成功',
    value: 2,
    color: '#32CD32'
  },
  XIAO_JI: {
    title: '小吉',
    desc: '体克用可成功',
    mean: '人要征服客观环境。要付出一定的代价方能成事。事情吉利，成事偏迟缓。',
    value: 1,
    color: '#9ACD32'
  },
  DA_XIONG: {
    title: '大凶',
    desc: '用克体诸事凶',
    mean: '受制于客观环境。不但不成功，反有灾难。',
    value: -2,
    color: '#B22222'
  },
  XIAO_XIONG: {
    title: '小凶',
    desc: '体生用有损耗',
    mean: '人要调节客观环境。主不易成功，劳而无获。',
    value: -1,
    color: '#FFA07A'
  },
  BU_DING: {
    title: '不定',
    desc: '体用和诸事吉',
    mean: '人和环境相处融合。大多情况下是吉，但是也有返例。',
    value: 0,
    color: '#CD950C'
  }
}))

export const GUA_8 = new Map(Object.entries({
  "乾": {
    "value": 1,
    "name": "乾",
    "img": [
      true,
      true,
      true
    ],
    "xiang": "天",
    "distance": "南",
    "nature": "金",
    "win": "木",
    "lose": "火",
    "birth": "水"
  },
  "兑": {
    "value": 2,
    "name": "兑",
    "img": [
      false,
      true,
      true
    ],
    "xiang": "泽",
    "distance": "东南",
    "nature": "金",
    "win": "木",
    "lose": "火",
    "birth": "水"
  },
  "离": {
    "value": 3,
    "name": "离",
    "img": [
      true,
      false,
      true
    ],
    "xiang": "火",
    "distance": "东",
    "nature": "火",
    "win": "金",
    "lose": "水",
    "birth": "土"
  },
  "震": {
    "value": 4,
    "name": "震",
    "img": [
      false,
      false,
      true
    ],
    "xiang": "雷",
    "distance": "东北",
    "nature": "木",
    "win": "土",
    "lose": "金",
    "birth": "火"
  },
  "巽": {
    "value": 5,
    "name": "巽",
    "img": [
      true,
      true,
      false
    ],
    "xiang": "风",
    "distance": "西南",
    "nature": "木",
    "win": "土",
    "lose": "金",
    "birth": "火"
  },
  "坎": {
    "value": 6,
    "name": "坎",
    "img": [
      false,
      true,
      false
    ],
    "xiang": "水",
    "distance": "西",
    "nature": "水",
    "win": "火",
    "lose": "土",
    "birth": "木"
  },
  "艮": {
    "value": 7,
    "name": "艮",
    "img": [
      true,
      false,
      false
    ],
    "xiang": "山",
    "distance": "西北",
    "nature": "土",
    "win": "水",
    "lose": "木",
    "birth": "金"
  },
  "坤": {
    "value": 8,
    "name": "坤",
    "img": [
      false,
      false,
      false
    ],
    "xiang": "地",
    "distance": "北",
    "nature": "土",
    "win": "水",
    "lose": "木",
    "birth": "金"
  }
}))

export const SHI_CHEN = new Map(Object.entries(SHI_CHEN_ORIGIN_DATA))