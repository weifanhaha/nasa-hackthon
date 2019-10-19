const Script = {
  0: {
    text: "歡迎來到 Better Life 遊戲",
    continue: 1
  },
  1: {
    text: "你的目標是追求更好的生活",
    continue: 2
  },
  2: {
    text: ["可以是更好的心情、更多的財富、", "或更好的環境"],
    continue: 3
  },
  3: {
    text: ["盡可能地讓各項數值越高越好", "準備好了嗎，讓我們開始吧！"],
    continue: 4
  },
  4: {
    text: "高中第一天上課，鬧鐘響了",
    options: [{ text: "起床", lead_to: 5 }, { text: "貪睡", lead_to: 7 }]
  },
  5: {
    text: ["昨天玩到好晚心好累", "心情 -10"],
    continue: 6,
    effects: { mood: -10, money: 0, env: 0 }
  },
  6: {
    text: "時間充裕，要怎麼上學",
    options: [
      { text: "搭公車", lead_to: 7 },
      { text: "走路", lead_to: 7 },
      { text: "爸媽載", lead_to: 7 },
      { text: "騎腳踏車", lead_to: 7 }
    ]
  },
  7: {
    text: "時間快來不及了，要怎麼上學",
    options: [
      { text: "搭公車", lead_to: 4 },
      { text: "走路", lead_to: 4 },
      { text: "當媽寶，讓媽媽載", lead_to: 8 },
      { text: "騎腳踏車", lead_to: 4 }
    ]
  },
  8: {
    text: ["路上塞車，還是遲到了QQ", "心情 -20", "金錢 -", "環保 -10"],
    options: [],
    continue: 10,
    effects: { mood: -20, money: 0, env: -10 }
  },
  10: {
    text: "不知不覺就大學了，你想過什麼樣的生活？",
    options: [
      { text: "狂買衣服、和朋友跑夜店", lead_to: 11 },
      { text: "瘋狂唸書，只能穿荷葉邊系服", lead_to: 12 },
      { text: "當個吃貨，瘋狂到處跑吃美食", lead_to: 13 },
      { text: "在星巴克打工，賺錢買 Switch", lead_to: 14 }
    ]
  },
  11: {
    text: [
      "今年中部登革熱肆虐，暑假沒辦法回台中看阿公阿罵",
      "心情 -30",
      "金錢 -",
      "環保 -"
    ],
    continue: 20,
    effects: { mood: -30, money: 0, env: 0 }
  },
  12: {
    text: [
      "今年中部登革熱肆虐，暑假沒辦法回台中看阿公阿罵",
      "心情 -30",
      "金錢 -",
      "環保 -"
    ],
    continue: 20,
    effects: { mood: -30, money: 0, env: 0 }
  },
  13: {
    text: [
      "今年中部登革熱肆虐，暑假沒辦法回台中看阿公阿罵",
      "心情 -30",
      "金錢 -",
      "環保 -"
    ],
    continue: 20,
    effects: { mood: -30, money: 0, env: 0 }
  },
  14: {
    text: [
      "今年中部登革熱肆虐，暑假沒辦法回台中看阿公阿罵",
      "心情 -30",
      "金錢 -",
      "環保 -"
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
      "日以繼夜地加班終於有代價，加薪 2%",
      "心情 +30",
      "金錢 +1200000",
      "環保 -"
    ],
    options: [],
    continue: 30,
    effects: { mood: +30, money: 120000, env: 0 }
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
  30: {
    text: "今天老家出門聚餐，要吃什麼呢",
    options: [
      { text: "美式餐廳", lead_to: 31 },
      { text: "台南牛肉火鍋", lead_to: 32 },
      { text: "慈濟素食", lead_to: 33 },
      { text: "在家自己煮", lead_to: 34 }
    ]
  },
  31: {
    text: [
      "最近颱風越來越劇烈，家裡樓下常常淹水...",
      "心情 -20",
      "金錢 -",
      "環保 -10"
    ],
    continue: 35,
    effects: { mood: -20, money: 0, env: -10 }
  },
  32: {
    text: [
      "最近颱風越來越劇烈，家裡樓下常常淹水...",
      "心情 -20",
      "金錢 -",
      "環保 -10"
    ],
    continue: 35,
    effects: { mood: -20, money: 0, env: -10 }
  },
  33: {
    text: [
      "最近颱風越來越劇烈，家裡樓下常常淹水...",
      "心情 -20",
      "金錢 -",
      "環保 -10"
    ],
    continue: 35,
    effects: { mood: -20, money: 0, env: -10 }
  },
  34: {
    text: [
      "最近颱風越來越劇烈，家裡樓下常常淹水...",
      "心情 -20",
      "金錢 -",
      "環保 -10"
    ],
    continue: 35,
    effects: { mood: -20, money: 0, env: -10 }
  },
  35: {
    text: ["年近50，存了一筆錢", "心情 +20", "金錢 +100000000", "環保 -10"],
    continue: 40,
    effects: { mood: 20, money: 100000000, env: 0 }
  },
  40: {
    text: "該怎麼動用這筆錢",
    options: [
      { text: "在士林置產", lead_to: 41 },
      { text: "蓋工廠", lead_to: 42 },
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
    continue: 50,
    effects: { mood: -50, money: -100000000, env: -10 }
  },
  42: {
    text: [
      "極端氣候越來越常發生，蓋的工廠被海水淹沒，損失慘重...",
      "心情 -50",
      "金錢 -100000000",
      "環保 -10"
    ],
    continue: 50,
    effects: { mood: -50, money: -100000000, env: -10 }
  },
  43: {
    text: [
      "極端氣候越來越常發生，蓋的工廠被海水淹沒，損失慘重...",
      "心情 -50",
      "金錢 -100000000",
      "環保 -10"
    ],
    continue: 50,
    effects: { mood: -50, money: -100000000, env: -10 }
  },
  44: {
    text: [
      "極端氣候越來越常發生，蓋的工廠被海水淹沒，損失慘重...",
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
    text: "開自家車通勤，比搭公車平均多排放了 2% CO2",
    continue: 62
  },
  62: {
    text: "星巴克打工，咖啡豆從 __ 運輸，使氣溫上升 n 度",
    continue: 63
  },
  63: {
    text: "氣溫上升，使登革熱地區往北移動",
    continue: 64
  },
  64: {
    text: "電腦比以往容易耗能，多出約 _%",
    continue: 65
  },
  65: {
    text: "進口飲食",
    continue: 66
  },
  66: {
    text: "工廠",
    continue: 67
  },
  67: {
    text: "世界的樣貌改變"
    // continue: 0
  }
}

export default Script
