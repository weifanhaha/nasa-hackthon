import earth from "./images/earth.jpg"
import maldives from "./images/maldives.jpg"
import typhoon from "./images/typhoon.jpeg"

const Script = {
  0: {
    text: "歡迎來到 Better Life 遊戲",
    continue: 1
  },
  1: {
    text: "叮鈴鈴鈴鈴鈴鈴鈴鈴鈴鈴鈴鈴!",
    continue: 2
  },
  2: {
    text: "鬧鐘響得很大聲，好吵!!",
    options: [
      { text: "算了，起床吧。", lead_to: 999 },
      { text: "齁齁齁!", lead_to: 3 }
    ]
  },
  3: {
    text: "「小子!!你該起床了!!」\n你媽覺得鬧鐘有夠吵，對你施放二連擊!!",
    continue: 4
  },
  4: {
    text: "轟!你被你媽打起床了\n，「快去洗潄!!該上學了!」",
    continue: 5
  },
  5: {
    text:
      "你慢吞吞的刷牙洗臉，正準備走出家門，突然聽到新聞正在播報:\n「有環保專家指出，現在生態破壞越來越嚴重，有專家拍到北極熊...」",
    options: [
      { text: "快去上課，要遲到了", lead_to: 6 },
      { text: "北極熊怎麼了??看一下", lead_to: 999 }
    ]
  },
  6: {
    text: "你快步走出家門\n「怎麼辦?快遲到了!!」",
    options: [
      { text: "騎腳踏車去吧", lead_to: 7 },
      { text: "搭公車去吧", lead_to: 999 },
      { text: "叫老爸載我一趟吧", lead_to: 999 }
    ]
  },
  7: {
    text: "我急急忙忙地踩著腳踏車，結果還是遲到了QAQ",
    continue: 8
  },
  8: {
    text: "剛要走進教室，突然從教室裡傳出老師說話的聲音...",
    continue: 9
  },
  9: {
    text:
      "「現在我們來投票選出環保股長，來，自願的...\n喔?(主角)今天遲到，就決定是你囉」",
    continue: 10
  },
  10: {
    text: "「哀～好衰~怎麼剛好我遲到就選環保股長」",
    continue: 11
  },
  11: {
    text:
      "「哈哈!!誰叫你今天剛好遲到」\n同學一邊笑我一邊把早餐的塑膠杯丟進垃圾桶",
    continue: 12
  },
  12: {
    text: "「等等..你那個..」",
    options: [
      { text: "「你那個塑膠杯要丟回收ㄟ」", lead_to: 999 },
      { text: "「.....」", lead_to: 13 },
      { text: "我把我的早餐盃也丟進垃圾桶", lead_to: 999 }
    ]
  },
  13: {
    text:
      "根據路邊社的消息，現在海平面上升的幅度越來越大，\n目前已有三成的農田被淹沒，根據農委位的統計\n目前市面上蔬菜的價格平均上升了5成",
    continue: 14
  },
  14: {
    text:
      "由於大量低窪地區的居民湧入市區，現在市區租屋價格水漲船高\n現在想要在市區有個小窩真的很難",
    options: [
      { text: "雖然有點貴，但還是繼續住在市區好了", lead_to: 15 },
      { text: "既然都貴，不如去租個豪華小套房", lead_to: 15 },
      { text: "太貴了，找個頂樓違建看看", lead_to: 15 }
    ]
  },
  15: {
    text: "好...好熱...可是電價好貴...",
    options: [
      { text: "開冷氣", lead_to: 17 },
      { text: "開電風扇", lead_to: 999 },
      { text: "開窗戶", lead_to: 16 }
    ]
  },
  16: {
    text: "還...還是好熱...",
    options: [
      { text: "開冷氣", lead_to: 17 },
      { text: "開電風扇", lead_to: 999 }
    ]
  },
  17: {
    text: "最近剛好發了一筆獎金..",
    options: [
      { text: "買間房吧", lead_to: 18 },
      { text: "買台車吧", lead_to: 999 },
      { text: "存起來", lead_to: 999 }
    ]
  },
  18: {
    text: "最近士林的房子還蠻便宜的呢",
    options: [{ text: "買!!!", lead_to: 19 }, { text: "還是買!!", lead_to: 19 }]
  },
  19: {
    text: "海平面上升，都被淹光光了...",
    continue: 20
  },
  20: {
    text: "end"
  },
  999: {
    text: "demo版本未包含此路線喔!",
    continue: 1
  }
}

export default Script
