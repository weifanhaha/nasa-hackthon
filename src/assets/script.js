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
    text: ["歡迎來到 Better Life 遊戲", "你的目標是追求更好的生活"],
    continue: 1,
    bgImg: earth
  },
  1: {
    text: ["盡可能地讓各項數值越高越好", "準備好了嗎，讓我們開始吧！"],
    continue: 4,
    bgImg: earth
  },
  4: {
    text: ["高中第一天上課，鬧鐘響了", "叮鈴鈴鈴鈴鈴鈴鈴鈴鈴鈴鈴鈴!"],
    continue: 5,
    bgImg: morning
  },
  5: {
    text: "鬧鐘響得很大聲，好吵",
    options: [
      { text: "算了，起床吧。", lead_to: 8 },
      { text: "再睡一下好了，齁齁齁", lead_to: 8 }
    ],
    bgImg: morning
  },
  8: {
    text: "時間快來不及了，要怎麼上學",
    options: [
      { text: "搭公車", lead_to: 9, co2: 12.0 },
      { text: "當媽寶，讓媽媽載", lead_to: 9, co2: 17.3 },
      { text: "騎腳踏車", lead_to: 9, co2: 5.0 }
    ],
    bgImg: morning2
  },
  9: {
    text: ["路上塞車，還是遲到了QQ", "心情 -20", "金錢 --", "環保 -10"],
    options: [],
    continue: 10,
    effects: { mood: -20, money: 0, env: -10 },
    bgImg: cars
  },
  10: {
    text: ["不知不覺就大學了，有點缺錢", "要去哪裡打工？"],
    options: [
      { text: "天仁茗茶", lead_to: 14, co2: 5 },
      { text: "50嵐", lead_to: 14, co2: 12 },
      { text: "耍廢", lead_to: 14, co2: 0 },
      { text: "星巴克", lead_to: 14, co2: 35.0 }
    ],
    bgImg: univ
  },
  14: {
    text: ["店長：辛苦拉，這是你的薪水", "心情 +5", "金錢 +20000", "環保 --"],
    continue: 15,
    effects: { mood: +5, money: 20000, env: 0 },
    bgImg: starbuck
  },
  15: {
    text: [
      "今年中部登革熱肆虐",
      "暑假沒辦法回台中看阿公阿罵",
      "心情 -30",
      "金錢 --",
      "環保 -10"
    ],
    continue: 30,
    effects: { mood: -30, money: 0, env: 0 },
    bgImg: taiwan
  },
  30: {
    text: "今天老家出門聚餐，要吃什麼呢",
    options: [
      { text: "美式餐廳", lead_to: 31, co2: 35.0 },
      { text: "台南牛肉火鍋", lead_to: 33, co2: 12.0 },
      { text: "慈濟素食", lead_to: 34, co2: 5.0 }
    ],
    bgImg: restaurant
  },
  31: {
    text: ["好貴...", "心情 +20", "金錢 -10000", "環保 -10"],
    continue: 32,
    effects: { mood: 20, money: -10000, env: -10 },
    bgImg: restaurant
  },
  32: {
    text: [
      "最近颱風越來越劇烈，家裡樓下常常淹水...",
      "心情 -20",
      "金錢 -",
      "環保 -10"
    ],
    continue: 36,
    effects: { mood: -20, money: 0, env: -10 },
    bgImg: typhoon
  },
  36: {
    text: ["年近50，存了一筆錢", "心情 +20", "金錢 +100000000", "環保 -10"],
    continue: 41,
    effects: { mood: 20, money: 100000000, env: 0 },
    bgImg: cat
  },
  41: {
    text: [
      "極端氣候越來越常發生，蓋的工廠被海水淹沒，損失慘重...",
      "心情 -50",
      "金錢 -870000000",
      "環保 -10"
    ],
    continue: 50,
    effects: { mood: -50, money: -870000000, env: -10 },
    bgImg: typhoon
  },
  50: {
    text: [
      "結局：",
      "你的人生大起大落",
      "雖然曾經發大財",
      "但很快就被海水淹沒..."
    ],
    continue: 999,
    bgImg: wave
  }
}
export default Script
