// MBTI 93题标准版 题目列表
// 格式：每个题目两个选项，每个选项对应一个维度加分
export const questions = [
  // 第一部分：精力来源 E / I
  {
    id: 1,
    question: '你发现很难让大多数人同意你的观点吗？',
    options: [
      { text: '是的，经常', A: 1 },
      { text: '不是，很少', B: 1 },
    ],
  },
  {
    id: 2,
    question: '当你要去一个新的地方，你会？',
    options: [
      { text: '提前计划好了要去哪些地方', J: 1 },
      { text: '到了之后再根据感觉慢慢逛', P: 1 },
    ],
  },
  {
    id: 3,
    question: '你更喜欢？',
    options: [
      { text: '热闹的多人聚会', E: 1 },
      { text: '安静的一对一或者小聚', I: 1 },
    ],
  },
  {
    id: 4,
    question: '你做事更喜欢？',
    options: [
      { text: '按照计划好的时间表来', J: 1 },
      { text: '不介意，随时可以调整', P: 1 },
    ],
  },
  {
    id: 5,
    question: '当你和别人聊天，你更倾向于？',
    options: [
      { text: '想到什么就说什么', N: 1 },
      { text: '仔细想清楚了再说', S: 1 },
    ],
  },
  {
    id: 6,
    question: '一般你更容易相信？',
    options: [
      { text: '过去积累的实际经验', S: 1 },
      { text: '你的灵感', N: 1 },
    ],
  },
  {
    id: 7,
    question: '你更喜欢哪种休闲方式？',
    options: [
      { text: '和朋友出去玩', E: 1 },
      { text: '一个人窝在家里看书刷视频', I: 1 },
    ],
  },
  {
    id: 8,
    question: '你出游，更喜欢？',
    options: [
      { text: '提前做好详细行程攻略', J: 1 },
      { text: '随心而去，想看啥就看啥', P: 1 },
    ],
  },
  {
    id: 9,
    question: '如果有人侮辱了你信奉的理念，你会？',
    options: [
      { text: '当场捍卫自己的观点', T: 1 },
      { text: '心里不舒服，但是不打算当面说', F: 1 },
    ],
  },
  {
    id: 10,
    question: '你觉得你是？',
    options: [
      { text: '头脑冷静，理性客观', T: 1 },
      { text: '重情重义，看重感受', F: 1 },
    ],
  },
  {
    id: 11,
    question: '聚会后你通常？',
    options: [
      { text: '更加兴奋', E: 1 },
      { text: '更加疲惫', I: 1 },
    ],
  },
  {
    id: 12,
    question: '你更擅长？',
    options: [
      { text: '记住具体细节', S: 1 },
      { text: '记住整体印象', N: 1 },
    ],
  },
  {
    id: 13,
    question: '发生冲突，你优先？',
    options: [
      { text: '直接解决问题', T: 1 },
      { text: '维护人际关系', F: 1 },
    ],
  },
  {
    id: 14,
    question: '旅行，你更喜欢？',
    options: [
      { text: '做好详细攻略', S: 1 },
      { text: '走到哪算哪', N: 1 },
    ],
  },
  {
    id: 15,
    question: '你更像？',
    options: [
      { text: '务实的', S: 1 },
      { text: '有创意的', N: 1 },
    ],
  },
  {
    id: 16,
    question: '你说话更？',
    options: [
      { text: '具体直白', T: 1 },
      { text: '抽象比喻', F: 1 },
    ],
  },
  {
    id: 17,
    question: '你更容易？',
    options: [
      { text: '理性分析', T: 1 },
      { text: '共情他人', F: 1 },
    ],
  },
  {
    id: 18,
    question: '你更喜欢？',
    options: [
      { text: '确定的事情', J: 1 },
      { text: '开放式的选择', P: 1 },
    ],
  },
  {
    id: 19,
    question: ' deadline 快到了，你？',
    options: [
      { text: '提前完成，安心踏实', J: 1 },
      { text: ' deadline 临近才高效爆发，最后赶工', P: 1 },
    ],
  },
  {
    id: 20,
    question: '你更习惯？',
    options: [
      { text: '做完决定就不改了', J: 1 },
      { text: '保留选择，随时调整', P: 1 },
    ],
  },
  {
    id: 21,
    question: '你的桌面/空间通常是？',
    options: [
      { text: '干净整齐', J: 1 },
      { text: '随性自然，自己舒服就好', P: 1 },
    ],
  },
  {
    id: 22,
    question: '你更讨厌？',
    options: [
      { text: '原来的计划被打乱', J: 1 },
      { text: '条条框框束缚', P: 1 },
    ],
  },
  {
    id: 23,
    question: '你更像？',
    options: [
      { text: '果断行动派', J: 1 },
      { text: '慢慢观察探索派', P: 1 },
    ],
  },
  // 第二部分：认知方式 S / N
  {
    id: 24,
    question: '你更容易被哪句话打动？',
    options: [
      { text: '合情合理', T: 1 },
      { text: '动人心弦', F: 1 },
    ],
  },
  {
    id: 25,
    question: '在社交聚会上，你？',
    options: [
      { text: '出去回来后都觉得精力充沛', E: 1 },
      { text: '出去回来后都觉得累，需要安静恢复', I: 1 },
    ],
  },
  {
    id: 26,
    question: '认识新朋友，你觉得？',
    options: [
      { text: '轻松自然', E: 1 },
      { text: '有点消耗精力', I: 1 },
    ],
  },
  {
    id: 27,
    question: '你说话更？',
    options: [
      { text: '直接表达你的想法', E: 1 },
      { text: '兜兜转转，不会直接说', I: 1 },
    ],
  },
  {
    id: 28,
    question: '你更相信？',
    options: [
      { text: '你亲身经历的事实', S: 1 },
      { text: '你的第六感', N: 1 },
    ],
  },
  {
    id: 29,
    question: '你更喜欢？',
    options: [
      { text: '有明确逻辑结构', S: 1 },
      { text: '有自由发挥空间', N: 1 },
    ],
  },
  {
    id: 30,
    question: '你更容易被？',
    options: [
      { text: '信条', T: 1 },
      { text: '氛围', F: 1 },
    ],
  },
  // 第三部分：决策方式 T / F
  {
    id: 31,
    question: '你认为错误的说法也要公开辩论吗？',
    options: [
      { text: '是的，应该', T: 1 },
      { text: '没必要，看场合', F: 1 },
    ],
  },
  {
    id: 32,
    question: '你认为公司招人应该，',
    options: [
      { text: '技能经验对得上就可以', T: 1 },
      { text: '价值观合得来比较重要', F: 1 },
    ],
  },
  {
    id: 33,
    question: '你做决策，更依赖？',
    options: [
      { text: '客观的数据结论', T: 1 },
      { text: '内心的感受', F: 1 },
    ],
  },
  {
    id: 34,
    question: '你更容易',
    options: [
      { text: '坚持原则，不让', T: 1 },
      { text: '兼顾人情，让', F: 1 },
    ],
  },
  {
    id: 35,
    question: '在公正与善良之间，你觉得哪个更重要？',
    options: [
      { text: '公正', T: 1 },
      { text: '善良', F: 1 },
    ],
  },
  // 第四部分：生活态度 J / P
  {
    id: 36,
    question: '你喜欢什么样的生活？',
    options: [
      { text: '井井有条', J: 1 },
      { text: '随遇而安', P: 1 },
    ],
  },
  {
    id: 37,
    question: '快要到约定截止时间，你通常？',
    options: [
      { text: '提前早就完成了', J: 1 },
      { text: '截止前紧张赶工', P: 1 },
    ],
  },
  {
    id: 38,
    question: '你更喜欢',
    options: [
      { text: '一言九鼎，说完不变', J: 1 },
      { text: '随时可以调整改变', P: 1 },
    ],
  },
  {
    id: 39,
    question: '你喜欢，',
    options: [
      { text: '有计划有步骤地推进', J: 1 },
      { text: '顺其自然', P: 1 },
    ],
  },
  {
    id: 40,
    question: '你更讨厌，',
    options: [
      { text: '原来的计划被打乱', J: 1 },
      { text: '条条框框束缚', P: 1 },
    ],
  },
  // 第五部分：混合题
  {
    id: 41,
    question: '当你要去参加一个聚会，你会，',
    options: [
      { text: '去了之后依然精力充沛', E: 1 },
      { text: '去了之后需要充电恢复', I: 1 },
    ],
  },
  {
    id: 42,
    question: '你说话方式，',
    options: [
      { text: '直接说出来', E: 1 },
      { text: '绕弯子，不直接说透', I: 1 },
    ],
  },
  {
    id: 43,
    question: '你做选择时，更容易，',
    options: [
      { text: '中庸一点，差不多就行', E: 1 },
      { text: '总有一个对错，必须说清楚', I: 1 },
    ],
  },
  {
    id: 44,
    question: '当你同意一个观点，',
    options: [
      { text: '因为证据符合你就同意', S: 1 },
      { text: '因为感觉好你就同意', N: 1 },
    ],
  },
  {
    id: 45,
    question: '你更容易，',
    options: [
      { text: '脚踏实地', S: 1 },
      { text: '标新立异', N: 1 },
    ],
  },
  {
    id: 46,
    question: '你更容易，',
    options: [
      { text: '认清事实', N: 1 },
      { text: '激发想象', S: 1 },
    ],
  },
  {
    id: 47,
    question: '你更喜欢，',
    options: [
      { text: '具体事实', S: 1 },
      { text: '抽象概念', N: 1 },
    ],
  },
  {
    id: 48,
    question: '你觉得孩子应该，',
    options: [
      { text: '按照日程表严格教育', S: 1 },
      { text: '跟着天性自由发展', N: 1 },
    ],
  },
  {
    id: 49,
    question: '你觉得，',
    options: [
      { text: '建造出流程清晰的，', T: 1 },
      { text: '培养出自然成长的，', F: 1 },
    ],
  },
  {
    id: 50,
    question: '你更看重，',
    options: [
      { text: '规矩明确做得对', T: 1 },
      { text: '让人感到温暖舒服', F: 1 },
    ],
  },
  {
    id: 51,
    question: '在社交场合，',
    options: [
      { text: '你主动找别人聊天', E: 1 },
      { text: '你等别人来找你', I: 1 },
    ],
  },
  {
    id: 52,
    question: '你更容易，',
    options: [
      { text: '兴奋好动', E: 1 },
      { text: '安静内敛', I: 1 },
    ],
  },
  {
    id: 53,
    question: '做一个项目，你会，',
    options: [
      { text: '在开始前做好计划', J: 1 },
      { text: '边做边想，做了再说', P: 1 },
    ],
  },
  {
    id: 54,
    question: '你更喜欢，',
    options: [
      { text: '一步一步按部就班完成', J: 1 },
      { text: '随时随地适应调整，想到哪做到哪', P: 1 },
    ],
  },
  {
    id: 55,
    question: '你持有什么样的态度对待新事物，',
    options: [
      { text: '欢迎，保持开放', N: 1 },
      { text: '按照我习惯的来', S: 1 },
    ],
  },
  {
    id: 56,
    question: '你穿衣更喜欢，',
    options: [
      { text: '干净整齐，', J: 1 },
      { text: '舒适随意', P: 1 },
    ],
  },
  {
    id: 57,
    question: '你认为你是，',
    options: {
      { text: '外向，', E: 1 },
      { text: '内向，', I: 1 },
    },
  },
  {
    id: 58,
    question: '当你需要接受新想法，',
    options: [
      { text: '你接受，只要逻辑说得通，', T: 1 },
      { text: '你接受，只要感觉对了就行', F: 1 },
    ],
  },
  {
    id: 59,
    question: '你，',
    options: [
      { text: '更容易被平静的道理说服，', T: 1 },
      { text: '更容易被打动你的情绪征服', F: 1 },
    ],
  },
  {
    id: 60,
    question: '在大多数情况下，你觉得