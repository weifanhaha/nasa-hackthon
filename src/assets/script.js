import earth from "./images/earth.jpg"
import maldives from "./images/maldives.jpg"
import typhoon from "./images/typhoon.jpeg"

const Script = {
  0: {
    text: "歡迎來到 Better Life 遊戲",
    continue: 1
  },
  1: {
    text: "高中第一天上課，鬧鐘響了",
    options: [{ text: "起床", lead_to: 2 }, { text: "貪睡", lead_to: 3 }],
    bgImg: earth
  },
  2: {
    text: "時間充裕，要怎麼出門",
    options: [
      { text: "搭公車", lead_to: 4 },
      { text: "走路", lead_to: 4 },
      { text: "爸媽載", lead_to: 4 },
      { text: "騎腳踏車", lead_to: 4 }
    ],
    bgImg: maldives
  },
  3: {
    text: "時間快來不及了，要怎麼上學",
    options: [
      { text: "搭公車", lead_to: 4 },
      { text: "走路", lead_to: 4 },
      { text: "爸媽載", lead_to: 4 },
      { text: "騎腳踏車", lead_to: 4 }
    ],
    bgImg: typhoon
  },
  4: {
    text: ["上課遲到，但是省錢環保", "心情 -10", "金錢 +100", "環保 +10"],
    options: [],
    bgImg: typhoon,
    continue: 5,
    effects: { mood: -10, money: 100, env: 10 }
  },
  5: {
    text: "到教室發現大家在選幹部，被選上沒人要當的環保小尖兵0.0",
    bgImg: typhoon,
    continue: 6
  },
  6: {
    text: "不知不覺就大學了，你想過什麼樣的生活？",
    options: [
      { text: "狂買衣服、和朋友跑夜店", lead_to: 7 },
      { text: "瘋狂唸書，只能穿荷葉邊系服", lead_to: 7 },
      { text: "當個吃貨，瘋狂到處跑吃美食", lead_to: 7 }
    ],
    bgImg: typhoon
  },
  7: {
    text: ["體重 Up Up 衣服尺寸越穿越大", "心情 -10", "金錢 -100", "環保 -10"],
    bgImg: typhoon,
    continue: 8,
    effects: { mood: -10, money: -100, env: -10 }
  },
  8: {
    text: "大學一轉眼畢業了、出社會、結婚生子，時光飛逝",
    bgImg: earth,
    continue: 9
  },
  9: {
    text: "今天老家出門聚餐，要吃什麼呢",
    options: [
      { text: "美式餐廳", lead_to: 10 },
      { text: "台南牛肉火鍋", lead_to: 10 },
      { text: "慈濟素食", lead_to: 10 },
      { text: "在家自己煮", lead_to: 10 }
    ],
    bgImg: typhoon
  },
  10: {
    text: "最近颱風越來越劇烈，家裡樓下常常淹水...",
    bgImg: typhoon
  }
}

export default Script
