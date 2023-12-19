import { Solar } from 'lunar-typescript';
import dayjs from 'dayjs';
import { formatSolarToDayJs, formatSolatToYMDHMS } from './utils';

const jieQiData = [
  {
    "name": "立春",
    "sanhou": [
      {
        "title": "东风解冻",
        "zhizhoujianyan": "千古江山今朝新 保暖防寒助阳生"
      },
      {
        "title": "蛰虫始振",
        "zhizhoujianyan": "发陈时节四肢展 寒湿交合健脾先"
      },
      {
        "title": "鱼陟负冰",
        "zhizhoujianyan": "春风春日忙春耕 心田心情平心稳"
      }
    ],
    "pinyin": "lichun",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/01_lichun.jpg"
  },
  {
    "name": "雨水",
    "sanhou": [
      {
        "title": "獭祭鱼",
        "zhizhoujianyan": "天地交泰雨水施 乍暖还寒护阳时"
      },
      {
        "title": "鸿雁来",
        "zhizhoujianyan": "杏花春雨农事忙 赏花听雨心田耕"
      },
      {
        "title": "草木萌动",
        "zhizhoujianyan": "梨花带雨草木萌 春风春雨肝木舒"
      }
    ],
    "pinyin": "yushui",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/02_yushui.jpg"
  },
  {
    "name": "惊蛰",
    "sanhou": [
      {
        "title": "桃始华",
        "zhizhoujianyan": "桃红李白菜花黄 卫衣秋裤齐护阳"
      },
      {
        "title": "仓庚鸣",
        "zhizhoujianyan": "莺歌燕舞蝶儿忙 腰扭腿伸身子展"
      },
      {
        "title": "鹰化为鸠",
        "zhizhoujianyan": "木气渐旺启蛰候 疏肝理气太冲揉"
      }
    ],
    "pinyin": "jingzhe",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/03_jingzhe.jpg"
  },
  {
    "name": "春分",
    "sanhou": [
      {
        "title": "玄鸟至",
        "zhizhoujianyan": "日月阴阳两均天 川上良人情志展"
      },
      {
        "title": "雷乃发声",
        "zhizhoujianyan": "千花百卉争明媚 心底明镜擦净勤"
      },
      {
        "title": "始电",
        "zhizhoujianyan": "下厚上薄春要捂 应天之序阳宜扶"
      }
    ],
    "pinyin": "chunfen",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/04_chunfen.jpg"
  },
  {
    "name": "清明",
    "sanhou": [
      {
        "title": "桐始华",
        "zhizhoujianyan": "清明时节  吾辈当慎终追远  阳气升发  机体宜疏肝健脾"
      },
      {
        "title": "田鼠化为鹌",
        "zhizhoujianyan": "草长莺飞  阳气渐盛  阳主阴从 不息生生"
      },
      {
        "title": "虹始见",
        "zhizhoujianyan": "阴阳交会 天际虹始见  阳长阴消  人身捂为护"
      }
    ],
    "pinyin": "qingming",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/05_qingming.jpg"
  },
  {
    "name": "谷雨",
    "sanhou": [
      {
        "title": "萍始生",
        "zhizhoujianyan": "雨生百谷清净明洁  早晚衣物合理增减"
      },
      {
        "title": "鸣鸠拂其羽",
        "zhizhoujianyan": "仓颉造字华夏绵长  文化传承你我担当"
      },
      {
        "title": "戴胜降于桑",
        "zhizhoujianyan": "布谷声里生化当令  暮春时节护阳健脾"
      }
    ],
    "pinyin": "guyu",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/06_guyu.jpg"
  },
  {
    "name": "立夏",
    "sanhou": [
      {
        "title": "蝼蛄鸣",
        "zhizhoujianyan": "斗指东南万物以荣  人心向善阳气宜隆"
      },
      {
        "title": "蚯蚓出",
        "zhizhoujianyan": "斗指东南节为春夏  气温交替医为良医"
      },
      {
        "title": "王瓜生",
        "zhizhoujianyan": "斗指东南暑来寒往  晨起晚间自知冷暖"
      }
    ],
    "pinyin": "lixia",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/07_lixia.jpg"
  },
  {
    "name": "小满",
    "sanhou": [
      {
        "title": "苦菜秀",
        "zhizhoujianyan": "四月中气小得盈满  感火苦菜大助心阳"
      },
      {
        "title": "靡草死",
        "zhizhoujianyan": "客气太阴阻滞气机  扶阳旨在温通阳气"
      },
      {
        "title": "麦秋至",
        "zhizhoujianyan": "温通阳气旨在扶阳  早睡午休交通心阳"
      }
    ],
    "pinyin": "xiaoman",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/08_xiaoman.jpg",
    "opacity": 0.4
  },
  {
    "name": "芒种",
    "sanhou": [
      {
        "title": "螳螂生",
        "zhizhoujianyan": "芒种端阳螳螂生  夏至未至阳气盛"
      },
      {
        "title": "鸠始鸣",
        "zhizhoujianyan": "梅雨时节脾胃护  渌沼莲花映日红"
      },
      {
        "title": "反舌无声",
        "zhizhoujianyan": "反舌无声感阴生  昼长夜短少损阳"
      }
    ],
    "pinyin": "mangzhong",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/09_mangzhong.jpg",
    "opacity": 0.4
  },
  {
    "name": "夏至",
    "sanhou": [
      {
        "title": "鹿角解",
        "zhizhoujianyan": "君子乾乾自强不息  百姓应天无厌于日"
      },
      {
        "title": "蝉始鸣",
        "zhizhoujianyan": "生活处处智慧中医  盛夏养阳防寒第一"
      },
      {
        "title": "半夏生",
        "zhizhoujianyan": "阳热至极暑气来袭  心火当令子午觉宜"
      }
    ],
    "pinyin": "xiazhi",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/10_xiazhi.jpg"
  },
  {
    "name": "小暑",
    "sanhou": [
      {
        "title": "温风至",
        "zhizhoujianyan": "小暑温风夏荷香  借助天时以驱寒"
      },
      {
        "title": "蟋蟀居宇",
        "zhizhoujianyan": "六月伏日进汤饼  汗出辟恶畅中行"
      },
      {
        "title": "鹰始鸷",
        "zhizhoujianyan": "温风因循小暑来  恰时晒衣晾书画"
      }
    ],
    "pinyin": "xiaoshu",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/11_xiaoshu.jpg"
  },
  {
    "name": "大暑",
    "sanhou": [
      {
        "title": "腐草为萤",
        "zhizhoujianyan": "暑气炎炎暑相连  防暑降温心静凉"
      },
      {
        "title": "土润溽暑",
        "zhizhoujianyan": "土润溽暑正中伏  气燥心浮切莫有"
      },
      {
        "title": "大雨时行",
        "zhizhoujianyan": "伏天伏邪伏气流  清淡饮食肠胃轻"
      }
    ],
    "pinyin": "dashu",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/12_dashu.jpg"
  },
  {
    "name": "立秋",
    "sanhou": [
      {
        "title": "凉风至",
        "zhizhoujianyan": "温热变凉气始肃  早晚温降热白昼"
      },
      {
        "title": "白露生",
        "zhizhoujianyan": "秋金色白白露降  二便通顺日日畅"
      },
      {
        "title": "寒蝉鸣",
        "zhizhoujianyan": "寒蝉感阴信于秋  冷气房里勤添衣"
      }
    ],
    "pinyin": "liqiu",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/13_liqiu.jpg"
  },
  {
    "name": "处暑",
    "sanhou": [
      {
        "title": "鹰乃祭鸟",
        "zhizhoujianyan": "处暑出暑新秋时  早晚凉降法天地"
      },
      {
        "title": "天地始肃",
        "zhizhoujianyan": "天地乾坤始渐肃  人身精气待归藏"
      },
      {
        "title": "禾乃登",
        "zhizhoujianyan": "天地庆收禾乃登  人心向善阳乃密"
      }
    ],
    "pinyin": "chushu",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/14_chushu.jpg"
  },
  {
    "name": "白露",
    "sanhou": [
      {
        "title": "鸿雁来",
        "zhizhoujianyan": "露从今夜白莫露身  雁始向南飞勤添衣"
      },
      {
        "title": "元鸟归",
        "zhizhoujianyan": "月是故乡明思念长  早晚秋意浓感冒防"
      },
      {
        "title": "群鸟养羞",
        "zhizhoujianyan": "露占蔬草白天青高  春华秋实时心胸宽"
      }
    ],
    "pinyin": "bailu",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/15_bailu.jpg"
  },
  {
    "name": "秋分",
    "sanhou": [
      {
        "title": "雷始收声",
        "zhizhoujianyan": "八月阴中雷收声  阴阳相伴寒暑平"
      },
      {
        "title": "蛰虫坯户",
        "zhizhoujianyan": "阴气渐甚虫坯户  阳气固密衣来护"
      },
      {
        "title": "水始涸",
        "zhizhoujianyan": "雨量减少水始涸  阴气渐多阳归藏"
      }
    ],
    "pinyin": "qiufen",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/16_qiufen.jpg"
  },
  {
    "name": "寒露",
    "sanhou": [
      {
        "title": "鸿雁来宾",
        "zhizhoujianyan": "草木黄落雁南归  秋风肃降冷风吹"
      },
      {
        "title": "雀入大水为蛤",
        "zhizhoujianyan": "秋意浓时温差大  衣为大药时勤添"
      },
      {
        "title": "菊有黄华",
        "zhizhoujianyan": "菊花黄时冷秋月  顺应天时宜扶阳"
      }
    ],
    "pinyin": "hanlu",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/17_hanlu.jpg"
  },
  {
    "name": "霜降",
    "sanhou": [
      {
        "title": "豺乃祭兽",
        "zhizhoujianyan": "深秋早晚温差大  体感从心衣裳添"
      },
      {
        "title": "草木黄落",
        "zhizhoujianyan": "草木黄落露为霜  秋衣秋裤勤来添"
      },
      {
        "title": "蛰虫咸俯",
        "zhizhoujianyan": "蛰虫咸俯入冬眠  秋气肃降为冬藏"
      }
    ],
    "pinyin": "shuangjiang",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/18_shuangjiang.jpg",
    "opacity": 0.4
  },
  {
    "name": "立冬",
    "sanhou": [
      {
        "title": "水始冰",
        "zhizhoujianyan": "立冬十月小阳春  衣养四时大讲究"
      },
      {
        "title": "地始冻",
        "zhizhoujianyan": "归藏时节地始冻  复命归根睡宜早"
      },
      {
        "title": "雉入大水为蜃",
        "zhizhoujianyan": "阳藏阴长应冬象  身藏心藏宜志养"
      }
    ],
    "pinyin": "lidong",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/19_lidong.jpg"
  },
  {
    "name": "小雪",
    "sanhou": [
      {
        "title": "虹藏不见",
        "zhizhoujianyan": "气之下伏曰虹藏  阳之收敛曰归藏"
      },
      {
        "title": "天气上升 地气下降",
        "zhizhoujianyan": "天气上升阳敛藏  地气下降阴归藏"
      },
      {
        "title": "闭塞而成冬",
        "zhizhoujianyan": "天地不交则不通  闭塞成冬缘不通"
      }
    ],
    "pinyin": "xiaoxue",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/20_xiaoxue.jpg"
  },
  {
    "name": "大雪",
    "sanhou": [
      {
        "title": "贴鹖鴠不鸣",
        "zhizhoujianyan": "大雪时节阴至极  鹖鴠不鸣寒知藏"
      },
      {
        "title": "虎始交",
        "zhizhoujianyan": "阴极阳生虎始交  天地化育转不休"
      },
      {
        "title": "荔挺出",
        "zhizhoujianyan": "马兰感阳知挺时  人身微阳护当机"
      }
    ],
    "pinyin": "daxue",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/21_daxue.jpg"
  },
  {
    "name": "冬至",
    "sanhou": [
      {
        "title": "蚯蚓结",
        "zhizhoujianyan": "一阳来复正冬至  因天之序护阳气"
      },
      {
        "title": "麋角解",
        "zhizhoujianyan": "阳气微生糜角解  天寒地冻藏志意"
      },
      {
        "title": "水泉动",
        "zhizhoujianyan": "水泉灵动知阳生  藏精藏意藏阳气"
      }
    ],
    "pinyin": "dongzhi",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/22_dongzhi.jpg"
  },
  {
    "name": "小寒",
    "sanhou": [
      {
        "title": "雁北乡",
        "zhizhoujianyan": "雁回北乡梅始放  人应天地阳渐长"
      },
      {
        "title": "鹊始巢",
        "zhizhoujianyan": "三九腊月鹊始巢  盈缩消息阳见早"
      },
      {
        "title": "雉始鸲",
        "zhizhoujianyan": "阳长阴消雉始鸲  天长地久阴阳媾"
      }
    ],
    "pinyin": "xiaohan",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/23_xiaohan.jpg",
    "opacity": 0.4
  },
  {
    "name": "大寒",
    "sanhou": [
      {
        "title": "鸡始乳",
        "zhizhoujianyan": "阳气内升鸡始乳  人言梅花知岁寒"
      },
      {
        "title": "征鸟厉疾",
        "zhizhoujianyan": "征鸟厉疾归北乡  兰芽已动春将还"
      },
      {
        "title": "水泽腹坚",
        "zhizhoujianyan": "坚冰深处春水生  寒至极处阳气升"
      }
    ],
    "pinyin": "dahan",
    "imgUrl": "https://www.ourfreesky.org/static/jieqi/24_dahan.jpg"
  }
]

const now = new Date();
const solar = Solar.fromYmd(now.getFullYear(), now.getMonth() + 1, now.getDate());
const lunar = solar.getLunar();

export default {
  jieQiData,
  solar,
  lunar,
  calcStart: 0,
  _jqObj: null,
  getJieQiByName(jieqiName) {
    return this.jieQiData.find(item => item.name === jieqiName);
  },
  getCurrentJieQi() {
    return this.lunar.getCurrentJieQi() || this.lunar.getPrevJieQi()
  },
  getCurrentJieQiObj() {
    const calcEnd = (new Date()).getTime()
    //优化计算逻辑,60秒算一次节气就好，不然太过密集了，停留时间长的情况下可能有偏差
    if (this.calcStart === 0 || (this.calcStart > 0 && calcEnd - this.calcStart > 60000)) {
      const jq = this.getCurrentJieQi();
      const jqObj = this.getJieQiByName(jq.getName())
      const start = jq.getSolar()

      // 节气是精确到时分秒的
      jqObj.start = formatSolatToYMDHMS(start);
      const end = this.lunar.getNextJieQi().getSolar();
      jqObj.end = `${end.getYear()}-${end.getMonth()}-${end.getDay()} ${end.getHour()}:${end.getMinute()}:${end.getSecond() - 1}`

      jqObj.startDate = `${start.getMonth()}.${start.getDay()}`
      const endDate = dayjs(jqObj.end).subtract(1, 'day')
      jqObj.endDate = `${endDate.month() + 1}.${endDate.date()}`

      this._setCurrentHou(jqObj)

      this._jqObj = jqObj;
      this.calcStart = calcEnd;

      return this._jqObj;
    } else {
      return this._jqObj;
    }
  },
  _getNextSolar(currentSolar) {
    // fixed：在节气当天，取到的下一个节气是自己，所以需要再向后取，取到的可能是节，也可能是气。
    let nextSolar = this.lunar.getNextJieQi().getSolar();
    if (nextSolar === currentSolar) {
      nextSolar = this.lunar.getNextJie().getSolar();
      if (nextSolar === currentSolar) {
        nextSolar = this.lunar.getNextQi().getSolar();
      }
    }

    return nextSolar;
  },
  /**
   * @description
   * 比如参考下面这个表
   * https://interesting-sky.china-vo.org/2023-solar-term/
   */
  _setCurrentHou(jqObj) {
    const currentSolar = this.getCurrentJieQi().getSolar();
    const nextSolar = this._getNextSolar(currentSolar);
    const curSolarDayjs = formatSolarToDayJs(currentSolar);
    const nextSolarDayjs = formatSolarToDayJs(nextSolar);
    const totalDays = nextSolarDayjs.diff(curSolarDayjs, 'days');
    const now = dayjs(new Date());
    const houDays = [[], [], []];
    let currentHouIndex = 0;
    for (let i = 0; i <= totalDays; i++) {
      let arrayIndex = Math.min(Math.floor(i / 5), 2);
      let tempDayjs = curSolarDayjs.add(i, 'day');
      if ((tempDayjs.month() !== nextSolarDayjs.month() || tempDayjs.date() !== nextSolarDayjs.date())) {
        houDays[arrayIndex].push(`${tempDayjs.month() + 1}/${tempDayjs.date()}`)
      }

      if (now.month() === tempDayjs.month() && now.date() === tempDayjs.date()) {
        currentHouIndex = arrayIndex;
      }
    }

    let tempArray = houDays[currentHouIndex];

    jqObj.currentHou = {
      ...jqObj['sanhou'][currentHouIndex],
      start: tempArray[0],
      end: tempArray[tempArray.length - 1],
      name: currentHouIndex === 0 ? '一候' : (currentHouIndex === 1 ? '二候' : '三候')
    };
  }
}
