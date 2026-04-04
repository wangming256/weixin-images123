// MBTI 144题 专业完整版 题目列表
// 计分：A对应维度加分，B对应另一维度加分
export const questions = [
  // ==== 第一部分：E/I 外向 / 内向 (1-36题)
  {
    id: 1,
    question: '你倾向从何处得到精力？',
    options: [
      { text: ' 和他人在一起活动 ', dimension: 'E', score: 1 },
      { text: ' 独自一人安静思考 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 2,
    question: '参加聚会时，你通常：',
    options: [
      { text: '越聊越开心，越玩越有劲 ', dimension: 'E', score: 1 },
      { text: '一会儿就觉得累，需要休息 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 3,
    question: '认识新朋友，你觉得：',
    options: [
      { text: '轻松自然，不费力 ', dimension: 'E', score: 1 },
      { text: '需要花点时间适应，有点累 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 4,
    question: '你的社交方式更像：',
    options: [
      { text: '主动认识新朋友，主动开启话题 ', dimension: 'E', score: 1 },
      { text: '等别人来找你 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 5,
    question: '你平常更喜欢：',
    options: [
      { text: '热闹聚会 ', dimension: 'E', score: 1 },
      { text: '安静独处 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 6,
    question: '聚会结束回家，你：',
    options: [
      { text: '依然很兴奋，需要找人再玩会儿 ', dimension: 'E', score: 1 },
      { text: '累了，赶紧回家安静独处 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 7,
    question: '在社交场合，你更习惯：',
    options: [
      { text: '主动开口找别人聊 ', dimension: 'E', score: 1 },
      { text: '等别人找你聊 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 8,
    question: '闲暇时间，你更喜欢：',
    options: [
      { text: '和朋友一起出去玩 ', dimension: 'E', score: 1 },
      { text: '一个人在家看书刷视频 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 9,
    question: '你说话给人感觉：',
    options: [
      { text: '坦率直接，有话直说 ', dimension: 'E', score: 1 },
      { text: '温和委婉，不直接说透 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 10,
    question: '你觉得你更像是：',
    options: [
      { text: '活泼外向 ', dimension: 'E', score: 1 },
      { text: '安静内敛 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 11,
    question: '人多的聚会，你更喜欢：',
    options: [
      { text: '一直在融入，和大家聊天 ', dimension: 'E', score: 1 },
      { text: '躲在一边，安静听大家聊 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 12,
    question: '当你要去一个聚会，你更愿意：',
    options: [
      { text: '早早到了等着 ', dimension: 'E', score: 1 },
      { text: '快到点了才到 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 13,
    question: '和陌生人聊天，你：',
    options: [
      { text: '一点儿也不费劲，自然开口 ', dimension: 'E', score: 1 },
      { text: '感觉挺累，需要适应 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 14,
    question: '你的充电方式是：',
    options: [
      { text: '和朋友们聊天热闹', dimension: 'E', score: 1 },
      { text: '一个人呆着静养', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 15,
    question: '你走路通常：',
    options: [
      { text: '大步流星', dimension: 'E', score: 1 },
      { text: '不快不慢', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 16,
    question: '你更容易：',
    options: [
      { text: '让人看见，让人认识 ', dimension: 'E', score: 1 },
      { text: '不容易被发现 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 17,
    question: '你更容易：',
    options: [
      { text: '热闹兴奋', dimension: 'E', score: 1 },
      { text: '安静缄默', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 18,
    question: '你：',
    options: [
      { text: '向外敞开心，让人接近', dimension: 'E', score: 1 },
      { text: '向内收起，自己呆着', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 19,
    question: '你和朋友聊天，你更像是：',
    options: [
      { text: '想到啥说啥，直接说 ', dimension: 'E', score: 1 },
      { text: '先想想，再说 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 20,
    question: '你参加活动，你：',
    options: [
      { text: '活动完了还精力满满 ', dimension: 'E', score: 1 },
      { text: '活动完了觉得累 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 21,
    question: '你更喜欢：',
    options: [
      { text: '热闹派对，认识新朋友 ', dimension: 'E', score: 1 },
      { text: '安静找地方，自己发呆 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 22,
    question: '聊天时你更倾向：',
    options: [
      { text: '想到什么说什么 ', dimension: 'E', score: 1 },
      { text: '打好腹稿再说 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 23,
    question: '你更喜欢：',
    options: [
      { text: '当众发言，表达观点 ', dimension: 'E', score: 1 },
      { text: '心里想想，再写出来 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 24,
    question: '你更容易：',
    options: [
      { text: '兴奋好动，活跃 ', dimension: 'E', score: 1 },
      { text: '安静沉思，内敛 ', dimension: 'I', score: 1 },
    ],
  },
  {
    id: 25,
    question: '你更容易被什么打动：',
    options: [
      { text: '遵循清晰规则的事实 ', dimension: 'S', score: 1 },
      { text: '打动人心的格言 ', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 26,
    question: '你学习新知识，更喜欢：',
    options: [
      { text: ' focus 具体实例', dimension: 'S', score: 1 },
      { text: ' understand 概念原理', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 27,
    question: '你更容易相信：',
    options: [
      { text: '你亲身经历过的 ', dimension: 'S', score: 1 },
      { text: '你的灵感 ', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 28,
    question: '你描述事情更喜欢：',
    options: [
      { text: '说到细节说清楚 ', dimension: 'S', score: 1 },
      { text: '先说整体，给人感觉 ', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 29,
    question: '你更容易：',
    options: [
      { text: '一步一步按部就班来 ', dimension: 'S', score: 1 },
      { text: '想到啥说啥，跟着灵感走 ', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 30,
   question: '你更喜欢：',
    options: [
      { text: '写实，如实描写', dimension: 'S', score: 1 },
      { text: '写意，写出意境', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 31,
    question: '你更容易被：',
    options: [
      { text: '实际具体的东西 ', dimension: 'S', score: 1 },
      { text: '天马行空的 idea ', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 32,
    question: '你排序：',
    options: [
      { text: '事实准确重于艺术感觉 ', dimension: 'S', score: 1 },
      { text: '艺术感觉重于事实准确 ', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 33,
    question: '你认为孩子应该：',
    options: [
      { text: '按照日程表严格教育 ', dimension: 'S', score: 1 },
      { text: '跟着天性自由成长 ', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 34,
    question: '你更容易被：',
    options: [
      { text: '实实在在的内容 ', dimension: 'S', score: 1 },
      { text: '鼓舞人心的话语 ', dimension: 'N', score: 1 },
    ],
  },
  {
    id: 35,
    question: '你做决策，更看重：',
    options: [
      { text: '合乎逻辑的结论 ', dimension: 'T', score: 1 },
      { text: '和谐的人际关系', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 36,
    question: '你做错事，你：',
    options: [
      { text: '直接直面批评，就事论事 ', dimension: 'T', score: 1 },
      { text: '顾及感受，尽量少伤人 ', dimension: 'F', score: 1 },
    ],
  },
  // ==== 第三部分：T/F 思考 / 情感 (37-72)
  {
    id: 37,
    question: '如果你是法官，你判人：',
    options: [
      { text: '依据条文，公正判决 ', dimension: 'T', score: 1 },
      { text: '顾及人情，调解纠纷 ', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 38,
    question: '你认为社会应该：',
    options: [
      { text: '按照对错分明处理，', dimension: 'T', score: 1 },
      { text: '尽量调解和谐让大家开心', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 39,
    question: '你更容易：',
    options: [
      { text: '保持冷静，坚持真理', dimension: 'T', score: 1 },
      { text: '协调关系，赢得感情', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 40,
    question: '你认为，人们工作应该：',
    options: [
      { text: '就事论事，对错分明处理', dimension: 'T', score: 1 },
      { text: '营造好气氛，让人心里舒服', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 41,
    question: '你更容易相信：',
    options: [
      { text: '明确的规则', dimension: 'T', score: 1 },
      {text: '个人价值观', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 42,
    question: '你做选择，更容易：',
    options: [
      { text: '理性客观，不受情绪影响 ', dimension: 'T', score: 1 },
      { text: '跟着心走，看重感受 ', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 43,
    question: '你认为，人的天性：',
    options: [
      { text: '生来就是对就是对，错就是错，说清楚', dimension: 'T', score: 1 },
      { text: ' 生来温柔，情有可原', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 44,
    question: '你更看重，',
    options: [
      { text: '结果，', dimension: 'T', score: 1 },
      { text: '过程，', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 45,
    question: '你说话：',
    options: [
      { text: '直接说出你的看法', dimension: 'T', score: 1 },
      { text: '换位思考，给对方面子', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 46,
    question: '你：',
    options: [
      { text: '很容易就能说出不同看法，', dimension: 'T', score: 1 },
      { text: '尽量保持和谐，不伤害别人感情', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 47,
    question: '比赛输赢，你觉得：',
    options: [
      { text: '赢就是赢，输就是输，直说', dimension: 'T', score: 1 },
      { text: '输赢不重要，和谐最重要', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 48,
    question: '你更容易被：',
    options: [
      { text: '清晰的原则打动', dimension: 'T', score: 1 },
      { text: '感动人的话语打动', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 49,
    question: '你认为，社会应该：',
    options: [
      { text: '奖赏分明，奖惩分明 ', dimension: 'T', score: 1 },
      { text: '仁爱包容，大家和和气气 ', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 50,
    question: '你更同意：',
    options: [
      { text: '公说公有理，婆说婆有理，非要理出对错 ', dimension: 'T', score: 1 },
      { text: '每个人都有对有错，包容就好', dimension: 'F', score: 1 },
    ],
  },
  {
    id: 51,
    question: '你觉得，错误，：',
    options: [
      { text: ' 直接指出，改正就好', dimension: 'T', score: 1 },
      { text: ' 放在那里，慢慢大家习惯就好',