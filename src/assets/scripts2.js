import earth from "./images/earth.jpg"
import morning from "./images/morning.jpg"
import morning2 from "./images/morning2.jpg"
import cars from "./images/cars.jpg"
import starbuck from "./images/starbuck.jpg"
import restaurant from "./images/restaurant.jpg"
import typhoon from "./images/typhoon.jpeg"
import univ from "./images/univ.jpg"
import wave from "./images/wave.jpg"
import taiwan from "./images/taiwan3.png"
import cat from "./images/cat.jpg"

const Script = {
  0: {
    text: ["Welcome to Better Life", "Your Goal is to Purchase Higher Score"],
    continue: 1,
    bgImg: earth
  },
  1: {
    text: ["盡可能地讓各項數值越高越好", "準備好了嗎，讓我們開始吧！"],
    continue: 2,
    bgImg: earth
  },
  2: {
    text: ["高中第一天上課，鬧鐘響了", "叮鈴鈴鈴鈴鈴鈴鈴鈴鈴鈴鈴鈴!"],
    continue: 3,
    bgImg: morning
  },
  3: {
    text: "鬧鐘響得很大聲，好吵",
    options: [
      { text: "算了，起床吧。", lead_to: 4 },
      { text: "再睡一下好了，齁齁齁", lead_to: 6 }
    ],
    bgImg: morning
  },
  4: {
    text: ["昨天玩到好晚心好累", "心情 -10"],
    continue: 5,
    effects: { mood: -10, money: 0, env: 0 },
    bgImg: morning2
  },
  5: {
    text: "時間充裕，要怎麼上學",
    options: [
      { text: "搭公車", lead_to: 8, co2: 12.0 },
      { text: "當媽寶，讓媽媽載", lead_to: 9, co2: 17.3 },
      { text: "騎腳踏車", lead_to: 7, co2: 5.0 }
    ],
    bgImg: morning2
  },
  6: {
    text: "時間快來不及了，要怎麼上學",
    options: [
      { text: "搭公車", lead_to: 8, co2: 12.0 },
      { text: "當媽寶，讓媽媽載", lead_to: 9, co2: 17.3 },
      { text: "騎腳踏車", lead_to: 7, co2: 5.0 }
    ],
    bgImg: morning2
  },
  7: {
    text: ["我努力地踩著腳踏車，還是遲到了QQ", "心情 -20", "環保 +10"],
    options: [],
    continue: 10,
    effects: { mood: -20, money: 0, env: 10 },
    bgImg: cars
  },
  8: {
    text: ["路上塞車，還是遲到了QQ", "心情 -20", "環保 +5"],
    options: [],
    continue: 10,
    effects: { mood: -20, money: 0, env: 5 },
    bgImg: cars
  },
  9: {
    text: ["路上塞車，還是遲到了QQ", "心情 -20", "環保 -10"],
    options: [],
    continue: 10,
    effects: { mood: -20, money: 0, env: -10 },
    bgImg: cars
  },
  10: {
    text: ["不知不覺就大學了，有點缺錢", "要去哪裡打工？"],
    options: [
      { text: "天仁茗茶", lead_to: 11, co2: 5 },
      { text: "50嵐", lead_to: 12, co2: 12 },
      { text: "耍廢", lead_to: 13, co2: 0 },
      { text: "星巴克", lead_to: 14, co2: 35.0 }
    ],
    bgImg: univ
  },
  11: {
    text: ["忍不住偷喝幾口，被店長斥責", "心情 -20", "金錢 -1000"],
    continue: 20,
    effects: { mood: -20, money: -1000, env: 0 },
    bgImg: starbuck
  },
  12: {
    text: ["店長：辛苦拉，這是你的薪水", "心情 +5", "金錢 +20000", "環保 --"],
    continue: 20,
    effects: { mood: +5, money: 20000, env: 0 },
    bgImg: starbuck
  },
  13: {
    text: ["在家躺著真不錯", "心情 +10", "金錢 -10000"],
    continue: 20,
    effects: { mood: 10, money: -10000, env: 0 }
  },
  14: {
    text: ["店長：辛苦拉，這是你的薪水", "心情 +5", "金錢 +20000", "環保 --"],
    continue: 15,
    effects: { mood: +5, money: 20000, env: 0 }
  },
  15: {
    text: [
      "今年中部登革熱肆虐",
      "暑假沒辦法回台中看阿公阿罵",
      "心情 -30",
      "金錢 --",
      "環保 -10"
    ],
    continue: 20,
    effects: { mood: -30, money: 0, env: 0 }
  },
  20: {
    text: "大學一轉眼畢業了、出社會要找什麼工作呢",
    options: [
      { text: "NGO 投身環保議題", lead_to: 21 },
      { text: "進軟體公司當宅宅工程師", lead_to: 22 },
      { text: "在家讓爸媽養", lead_to: 23 }
    ]
  },
  21: {
    text: [
      "日子過得有一餐沒一餐，但為了理想，我要努力！",
      "心情 +10",
      "金錢 -10000",
      "環保 +30"
    ],
    options: [],
    continue: 30,
    effects: { mood: 10, money: -10000, env: 30 }
  },
  22: {
    text: [
      "日以繼夜地加班終於有代價，加薪 2%",
      "心情 +30",
      "金錢 +1200000",
      "環保 -"
    ],
    options: [],
    continue: 30,
    effects: { mood: +30, money: 120000, env: 0 }
  },
  23: {
    text: ["在家的日子過得真舒服", "心情 +30", "金錢 +1200000", "環保 -"],
    options: [],
    continue: 30,
    effects: { mood: +30, money: 120000, env: 0 }
  },
  30: {
    text: "今天老家出門聚餐，要吃什麼呢",
    options: [
      { text: "美式餐廳", lead_to: 31, co2: 35.0 },
      { text: "台南牛肉火鍋", lead_to: 33, co2: 12.0 },
      { text: "慈濟素食", lead_to: 34, co2: 5.0 }
    ]
  },
  31: {
    text: ["好貴...", "心情 +20", "金錢 -10000", "環保 -10"],
    continue: 32,
    effects: { mood: 20, money: -10000, env: -10 }
  },
  32: {
    text: [
      "最近颱風越來越劇烈，家裡樓下常常淹水...",
      "心情 -20",
      "金錢 -",
      "環保 -10"
    ],
    continue: 36,
    effects: { mood: -20, money: 0, env: -10 }
  },
  33: {
    text: [
      "最近颱風越來越劇烈，家裡樓下常常淹水...",
      "心情 -20",
      "金錢 -",
      "環保 -10"
    ],
    continue: 36,
    effects: { mood: -20, money: 0, env: -10 }
  },
  34: {
    text: [
      "最近颱風越來越劇烈，家裡樓下常常淹水...",
      "心情 -20",
      "金錢 -",
      "環保 -10"
    ],
    continue: 36,
    effects: { mood: -20, money: 0, env: -10 }
  },
  35: {
    text: [
      "最近颱風越來越劇烈，家裡樓下常常淹水...",
      "心情 -20",
      "金錢 -",
      "環保 -10"
    ],
    continue: 36,
    effects: { mood: -20, money: 0, env: -10 }
  },
  36: {
    text: ["年近50，存了一筆錢", "心情 +20", "金錢 +100000000", "環保 -10"],
    continue: 40,
    effects: { mood: 20, money: 100000000, env: 0 }
  },
  40: {
    text: "該怎麼動用這筆錢",
    options: [
      { text: "在士林置產", lead_to: 41 },
      { text: "蓋工廠", lead_to: 42, co2: 35.0 },
      { text: "買跑車", lead_to: 43 },
      { text: "買名牌包給老婆", lead_to: 44 }
    ]
  },
  41: {
    text: [
      "極端氣候越來越常發生，蓋的工廠被海水淹沒，損失慘重...",
      "心情 -50",
      "金錢 -100000000",
      "環保 -10"
    ],
    continue: 45,
    effects: { mood: -50, money: -100000000, env: -10 }
  },
  42: {
    text: [
      "極端氣候越來越常發生，蓋的工廠被海水淹沒，損失慘重...",
      "心情 -50",
      "金錢 -100000000",
      "環保 -10"
    ],
    continue: 45,
    effects: { mood: -50, money: -100000000, env: -10 }
  },
  43: {
    text: [
      "極端氣候越來越常發生，蓋的工廠被海水淹沒，損失慘重...",
      "心情 -50",
      "金錢 -100000000",
      "環保 -10"
    ],
    continue: 45,
    effects: { mood: -50, money: -100000000, env: -10 }
  },
  44: {
    text: [
      "極端氣候越來越常發生，蓋的工廠被海水淹沒，損失慘重...",
      "心情 -50",
      "金錢 -100000000",
      "環保 -10"
    ],
    continue: 45,
    effects: { mood: -50, money: -100000000, env: -10 }
  },
  45: {
    text: [
      "台北陸續淹水，政府決定遷都，房價暴跌",
      "心情 -50",
      "金錢 -100000000",
      "環保 -10"
    ],
    continue: 50,
    effects: { mood: -50, money: -100000000, env: -10 }
  },
  50: {
    text: [
      "結局：",
      "你的人生大起大落",
      "雖然曾經發大財",
      "但很快就被海水淹沒..."
    ],
    continue: 60
  },
  60: {
    text: "你以為這樣就結束了嗎...?",
    continue: 61
  },
  61: {
    text: [
      "讓媽媽載",
      "造成額外約 17.3 頓的碳排放",
      " ",
      "星巴克",
      "星巴克的咖啡豆是由巴西運來的",
      "平均每年造成了35頓的碳排放量"
    ],
    continue: 62
  },
  62: {
    text: [
      "登革熱向北移動 竟是暖化推一把",
      "原本屬於熱帶及亞熱帶的傳染病",
      "如今卻蔓延至溫帶",
      "全球暖化加上人口移動",
      "使疾病不再有南北限制"
    ],
    continue: 63
  },
  // To be checked
  63: {
    text: [
      "進軟體公司當宅宅工程師",
      "你就是個宅宅",
      " ",
      "美式餐廳",
      "美國牛肉運輸至台灣平均每年造成了35頓的碳排放量"
      // "蓋工廠",
      // "根據統計，每年每家工廠造成了X的碳排放量"
    ],
    continue: 64
  },
  64: {
    text: [
      "台北遷都?由印尼看台北",
      "印尼首都雅加達正在下沈",
      "如果印尼海平面上升3公尺",
      "將造成500萬人流離失所",
      "這是印尼遷都的重要原因"
    ],
    continue: 999
  }
}
export default Script
