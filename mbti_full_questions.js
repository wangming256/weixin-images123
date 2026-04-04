// MBTI 完整题库 包含 93题标准版 + 144题专业版
// 格式：每个题目两个选项，每个选项对应维度加分
// 使用：import questions from './mbti_full_questions.js'

export const questions93 = [
  // ==== 第一部分：E/I 外向 / 内向 (1-38)
  {
    id:  1,
    question: '你发现很难让大多数人同意你的观点吗？',
    options: [
      { text: '是的，经常', dimension: 'A', score: 1 },
      { text: '不是，很少', dimension: 'I', score: 1 },
    ],
  },
  {
    id:  2,
    question: '当你要去一个新地方，你会？',
    options: [
      { text: '提前想好你要做什么', dimension: 'J', score: 1 },
      { text: '到了之后慢慢找，看着安排', dimension: 'P', score: 1 },
    ],
  },
  {
    id:  3,
    question: '你更喜欢？',
    options: [
      { text: '热闹的多人聚会', dimension: 'E', score: 1 },
      { text: '安静的一对一或者小聚', dimension: 'I', score: 1 },
    ],
  },
  {
    id:  4,
    question: '你做事更喜欢？',
    options: [
      { text: '照着计划一步步来', dimension: 'J', score: 1 },
      { text: '不需要计划，到时候再说', dimension: 'P', score: 1 },
    ],
  },
  {
    id:  5,
    question: '和陌生人聊天，你更容易？',
    options: [
      { text: '自然而然开口聊天', dimension: 'E', score: 1 },
      { text: '想好了再说', dimension: 'I', score: 1 },
    ],
  },
  {
    id:  6,
    question: '你更容易相信？',
    options: [
      { text: '你实际经验过的', dimension: 'S', score: 1 },
      { text: '你的灵感', dimension: 'N', score: 1 },
    ],
  },
  {
    id:  7,
    question: '空闲时间你更喜欢？',
    options: [
      { text: '和朋友一起出去', dimension: 'E', score: 1 },
      { text: '一个人在家看书视频', dimension: 'I', score: 1 },
    ],
  },
  {
    id:  8,
    question: '你出去游玩，你更喜欢？',
    options: [
      { text: '提前做好攻略安排好了行程', dimension: 'J', score: 1 },
      { text: '走到哪算哪，没有计划', dimension: 'P', score: 1 },
    ],
  },
  {
    id:  9,
    question: '如果有人不同意你的观点，你会？',
    options: [
      { text: '当场坚持观点，辩论', dimension: 'T', score: 1 },
      { text: '放下不说，让过去过去', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 10,
    question: '你觉得你更像？',
    options: [
      { text: '头脑冷静，理性思考', dimension: 'T', score: 1 },
      { text: '热心肠，重视感受', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 11,
    question: '聚会之后，你更喜欢？',
    options: [
      { text: '依旧兴奋，找朋友接着聊', dimension: 'E', score: 1 },
      { text: '累了，需要回去安静待会', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 12,
    question: '你做事更喜欢？',
    options: [
      { text: '照着计划表来', dimension: 'J', score: 1 },
      { text: '没有计划表，想到就做', dimension: 'P', score: 1 },
    ],
  },
  {
    id: 13,
    question: '你更容易被？',
    options: [
      { text: '规则明确的事情', dimension: 'S', score: 1 },
      { text: '规则不明确，自由发挥', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 14,
    question: '你认为你更像是？',
    options: [
      { text: '务实，脚踏实地', dimension: 'S', score: 1 },
      { text: '创新，喜欢脑洞', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 15,
    question: '你更看重？',
    options: [
      { text: '现在，事实', dimension: 'S', score: 1 },
      { text: '未来，可能性', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 16,
    question: '你画画，你更喜欢？',
    options: [
      { text: '照着现实看到的画', dimension: 'S', score: 1 },
      { text: '照着你心里想到的画', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 17,
    question: '你更喜欢？',
    options: [
      { text: '稳定不变，心里踏实', dimension: 'S', score: 1 },
      { text: '变化创新，不断改', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 18,
    question: '你穿衣更喜欢？',
    options: [
      { text: '干净整齐，', dimension: 'J', score: 1 },
      { text: '舒服自在，', dimension: 'P', score: 1 },
    ],
  },
  {
    id: 19,
    question: '当你要完成一项任务，你更喜欢？',
    options: [
      { text: '做完了再开始下一个', dimension: 'J', score: 1 },
      { text: '同时做很多件，做完一件继续一件', dimension: 'P', score: 1 },
    ],
  },
  {
    id: 20,
    question: '你更喜欢？',
    options: [
      { text: '说了就定了，不改变', dimension: 'J', score: 1 },
      { text: '可以改变可以调整，', dimension: 'P', score: 1 },
    ],
  },
  {
    id: 21,
    question: '你觉得你的桌子通常？',
    options: [
      { text: '干净整齐', dimension: 'J', score: 1 },
      { text: '随便放着，能用就行', dimension: 'P', score: 1 },
    ],
  },
  {
    id: 22,
    question: '你更讨厌？',
    options: [
      { text: '原来计划好的事被打乱', dimension: 'J', score: 1 },
      { text: '没有计划天天被打乱', dimension: 'P', score: 1 },
    ],
  },
  {
    id: 23,
    question: '你更像是？',
    options: [
      { text: '干脆利落，行动派', dimension: 'J', score: 1 },
      { text: '慢慢探索，观望派', dimension: 'P', score: 1 },
    ],
  },
  // ==== 第二部分：S/N 感觉 / 直觉 (39-76)
  {
    id:  24,
    question: '你更容易被哪句话打动？',
    options: [
      { text: '合乎逻辑正确', dimension: 'T', score: 1 },
      { text: '打动你的心', dimension: 'F', score: 1 },
    ],
  },
  {
    id:  25,
    question: '你更容易相信？',
    options: [
      { text: '你实实在在经验过', dimension: 'S', score: 1 },
      { text: '你的感觉，', dimension: 'N', score: 1 },
    ],
  },
  {
    id:  26,
    question: '你学习新知识，你更喜欢：',
    options: [
      { text: '跟着实例学', dimension: 'S', score: 1 },
      { text: '听懂概念理论，', dimension: 'N', score: 1 },
    ],
  },
  {
    id:  27,
    question: '你更相信，',
    options: [
      { text: '你经验过证明了的', dimension: 'S', score: 1 },
      { text: '你的gut feeling', dimension: 'N', score: 1 },
    ],
  },
  {
    id:  28,
    question: '你偏好？',
    options: [
      { text: '具体明确的', dimension: 'S', score: 1 },
      { text: '抽象创新的', dimension: 'N', score: 1 },
    ],
  },
  {
    id:  29,
    question: '你更容易对？',
    options: [
      { text: '实际发生的事件', dimension: 'S', score: 1 },
      { text: '可能性灵感', dimension: 'N', score: 1 },
    ],
  },
  {
    id:  30,
    question: '你更喜欢，',
    options: [
      { text: '细节真实', dimension: 'S', score: 1 },
      { text: '概略整体', dimension: 'N', score: 1 },
    ],
  },
  {
    id:  31,
    question: '你觉得，旅行，',
    options: [
      { text: '提前做好攻略安排景点', dimension: 'J', score: 1 },
      { text: '不带攻略，到了再说', dimension: 'P', score: 1 },
    ],
  },
  {
    id:  32,
    question: '你更容易，',
    options: [
      { text: '按计划一步步完成', dimension: 'J', score: 1 },
      { text: '边走边看边调整，', dimension: 'P', score: 1 },
    ],
  },
  {
    id:  33,
    question: '你更喜欢，',
    options: [
      { text: '有组织有秩序', dimension: 'J', score: 1 },
      { text: '自由发展', dimension: 'P', score: 1 },
    ],
  },
  {
    id:  34,
    question: '你更受不了，',
    options: [
      { text: '生活没有计划，', dimension: 'J', score: 1 },
      { text: '生活被计划打乱，', dimension: 'P', score: 1 },
    ],
  },
  {
    id:  35,
    question: '你的生活更像是，',
    options: [
      { text: '整理好整洁的桌面，每件事都安排清楚', dimension: 'J', score: 1 },
      { text: '自由自在，随随便便', dimension: 'P', score: 1 },
    ],
  },
  {
    id:  36,
    question: '你做事更喜欢，',
    options: [
      { text: '早早做好，安心', dimension: 'J', score: 1 },
      { text: '快要到截止才开始做，赶进度', dimension: 'P', score: 1 },
    ],
  },
  {
    id:  37,
    question: '你，',
    options: [
      { text: '容易相信规则，按规则来，', dimension: 'J', score: 1 },
      { text: '更容易接受自由发挥，', dimension: 'P', score: 1 },
    ],
  },
  {
    id:  38,
    question: '当你去约会，你更喜欢，',
    options: [
      { text: '早早做好安排，', dimension: 'J', score: 1 },
      { text: '跟着感觉走，', dimension: 'P', score: 1 },
    ],
  },
  {
    id:  39,
    question: '你更看重，',
    options: [
      { text: '结果，', dimension: 'T', score: 1 },
      { text: '过程，', dimension: 'F', score: 1 },
    ],
  },
  {
    id:  40,
    question: '你做决定，',
    options: [
      { text: '好好想想，得出结论', dimension: 'T', score: 1 },
      { text: '跟着感觉走，', dimension: 'F', score: 1 },
    ],
  },
  {
    id:  41,
    question: '你更容易：',
    options: [
      { text: '头脑冷静，不受情绪影响', dimension: 'T', score: 1 },
      { text: '和谐友善，受情绪影响', dimension: 'F', score: 1 },
    ],
  },
  {
    id:  42,
    question: '你认为，一个好人，必须是，',
    options: [
      { text: '公正，坚持真理，', dimension: 'T', score: 1 },
      { text: '温暖，让人舒服，', dimension: 'F', score: 1 },
    ],
  },
  {
    id:  43,
    question: '在做重大决定时，你，',
    options: [
      { text: '依逻辑，不依情绪，', dimension: 'T', score: 1 },
      { text: '依心依意，跟着感觉走，', dimension: 'F', score: 1 },
    ],
  },
  {
    id:  44,
    question: '你认为，一个团队领导，应该，',
    options: [
      { text: '坚持原则，奖惩分明，', dimension: 'T', score: 1 },
      {text: '调和矛盾，维护团结，', dimension: 'F', score: 1},
    ],
  },
  {
    id:  45,
    question: '你，',
    options: [
      { text: '铁面无私，对错分明，', dimension: 'T', score: 1 },
      { text: '包容情义，', dimension: 'F', score: 1 },
    ],
  },
  {
    id:  46,
    question: '你更喜欢，',
    options: [
      { text: '真理不惧人情，', dimension: 'T', score: 1 },
      { text: '人情不伤真理，', dimension: 'F', score: 1 },
    ],
  },
  // ==== 第三部分：T/F 思考 / 情感 (77-108)
  {
    id:  47,
    question: '当你不同意一个人的意见，你会，',
    options: [
      { text: '直接说出来，让对方知道', dimension: 'T', score: 1 },
      { text: '放到一边，不说，保留面子', dimension: 'F', score: 1 },
    ],
  },
  {
    id:  48,
    question: '你的朋友有困难，你会，',
    options: [
      { text: '直接说哪里不对，帮助改正', dimension: 'T', score: 1 },
      { text: '表达理解，给人安慰', dimension: 'F', score: 1 },
    ],
  },
  {
    id:  49,
    question: '你认为社会应该，',
    options: [
      { text: '对错分明，处理事情', dimension: 'T', score: 1 },
      { text: '和谐共处，留有余地', dimension: 'F', score: 1 },
    ],
  },
  {
    id:  50,
    question: '你觉得，',
    options: [
      { text: '对就是对，错就是错，坚持原则', dimension: 'T', score: 1 },
      { text: '没有绝对的对错，需要包容', dimension: 'F', score: 1 },
    ],
  },
  {
    id: