const Script = {
  0: {
    text: "歡迎來到 Better Life 遊戲",
    continue: 1
  },
  1: {
    text: "你的目標是讓你的各項數值越高越好",
    continue: 2
  },
  2: {
    text: "小心選擇哦，每個選項都可能改變你的未來",
    continue: 3
  },
  3: {
    text: "準備好了嗎，讓我們開始吧！",
    continue: 4
  },
  4: {
    text: "高中第一天上課，鬧鐘響了",
    options: [{ text: "起床", lead_to: 5 }, { text: "貪睡", lead_to: 6 }]
  },
  5: {
    text: "時間充裕，要怎麼上學",
    options: [
      { text: "搭公車", lead_to: 5 },
      { text: "走路", lead_to: 5 },
      { text: "爸媽載", lead_to: 5 },
      { text: "騎腳踏車", lead_to: 5 }
    ]
  },
  6: {
    text: "時間快來不及了，要怎麼上學",
    options: [
      { text: "搭公車", lead_to: 5 },
      { text: "走路", lead_to: 5 },
      { text: "爸媽載", lead_to: 5 },
      { text: "騎腳踏車", lead_to: 5 }
    ]
  },
  7: {
    text: ["上課遲到，但是省錢環保", "心情 -10", "金錢 +100", "環保 +10"],
    options: [],
    continue: 5,
    effects: { mood: -10, money: 100, env: 10 }
  },
  8: {
    text: "到教室發現大家在選幹部，被選上沒人要當的環保小尖兵0.0",
    continue: 6
  },
  9: {
    text: "不知不覺就大學了，你想過什麼樣的生活？",
    options: [
      { text: "狂買衣服、和朋友跑夜店", lead_to: 7 },
      { text: "瘋狂唸書，只能穿荷葉邊系服", lead_to: 7 },
      { text: "當個吃貨，瘋狂到處跑吃美食", lead_to: 7 }
    ]
  },
  10: {
    text: ["體重 Up Up 衣服尺寸越穿越大", "心情 -10", "金錢 -100", "環保 -10"],
    continue: 8,
    effects: { mood: -10, money: -100, env: -10 }
  },
  11: {
    text: "大學一轉眼畢業了、出社會、結婚生子，時光飛逝",
    continue: 9
  },
  12: {
    text: "今天老家出門聚餐，要吃什麼呢",
    options: [
      { text: "美式餐廳", lead_to: 10 },
      { text: "台南牛肉火鍋", lead_to: 10 },
      { text: "慈濟素食", lead_to: 10 },
      { text: "在家自己煮", lead_to: 10 }
    ]
  },
  13: {
    text: "最近颱風越來越劇烈，家裡樓下常常淹水..."
  }
}

export default Script
