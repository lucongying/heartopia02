/**
 * Heartopia 攻略站 — 活动攻略数据
 * 数据更新至 2026.05 (v0.5.1)
 * 字段: id, name, type(seasonal/collab/limited), startDate, endDate, status(active/upcoming/past), rewards[], tasks[], desc
 */
const EVENTS_DB = [
  // ===== 当前/即将到来 =====
  { id:"summer_festival_2026", name:"夏日祭典", nameEn:"Summer Festival", type:"seasonal", startDate:"2026-07-15", endDate:"2026-08-15", status:"upcoming",
    rewards:["夏日浴衣套装","烟花棒","金鱼灯笼","夏日限定家具x5","限定称号「夏日回忆」"],
    tasks:["在烟花大会上许愿3次","钓到10条夏季限定鱼","完成夏日祭小游戏5次","与3位NPC一起看烟花","收集100个夏日贝壳"],
    desc:"一年一度的夏日祭典即将到来！穿上浴衣、欣赏烟花、捞金鱼，在温馨的小镇度过难忘的夏天。新增限定家具和服装等你来收集。" },

  { id:"summer_fishing_derby", name:"夏季钓鱼大赛", nameEn:"Summer Fishing Derby", type:"seasonal", startDate:"2026-07-01", endDate:"2026-07-14", status:"active",
    rewards:["限定钓竿皮肤「黄金渔人」","钓鱼大师帽子","稀有鱼饵x20","限定鱼缸家具","金币x5000"],
    tasks:["累计钓到50条鱼","钓到3种稀有鱼类","钓到1条传说级鱼类","在钓鱼比赛中获得前三名","将最长的鱼展示在广场"],
    desc:"夏季钓鱼大赛火热进行中！拿上你的钓竿，与全服玩家一决高下。稀有鱼类出现概率提升！" },

  // ===== 过往活动 =====
  { id:"mlp_collab", name:"彩虹小马联动", nameEn:"My Little Pony Collab", type:"collab", startDate:"2026-01-08", endDate:"2026-02-08", status:"past",
    rewards:["彩虹小马主题家具套装（8件）","小马服饰（6款角色）","彩虹鬃毛发型","限定宠物「迷你小马」","联动纪念相框"],
    tasks:["完成联动主线任务「彩虹的邀请」","收集6种谐律元素","拜访6位小马NPC","建造彩虹主题花园","参加联动派对活动"],
    desc:"Heartopia × 彩虹小马首次联动！六位小马主角降临心托邦小镇，带来限定服饰、家具和专属剧情任务。虽然活动已结束，但联动道具可能会在未来的活动中复刻。" },

  { id:"spring_blossom_2026", name:"春日花见祭", nameEn:"Spring Blossom Festival", type:"seasonal", startDate:"2026-03-20", endDate:"2026-04-20", status:"past",
    rewards:["樱花和服套装","樱花花瓣发饰","赏月团子食谱","樱花树家具x3","限定称号「花见客」"],
    tasks:["在樱花树下野餐3次","收集50片樱花花瓣","烹饪团子料理10次","为5位NPC送上樱花礼物","拍摄10张樱花主题照片"],
    desc:"春季限定活动，小镇被美丽的樱花装点得如梦如幻。在花雨中野餐、收集花瓣、制作团子，感受春天的浪漫气息。" },

  { id:"lunar_new_year_2026", name:"春节庆典", nameEn:"Lunar New Year 2026", type:"seasonal", startDate:"2026-01-29", endDate:"2026-02-12", status:"past",
    rewards:["旗袍/唐装套装","舞狮头套","鞭炮装饰","春节主题家具x6","压岁钱红包x5"],
    tasks:["拜访10位NPC拜年","放烟花30次","收集福字10个","包饺子20次","参加舞狮游行"], desc:"欢庆马年春节！小镇换上喜庆装扮，舞狮、放烟花、包饺子，浓浓的年味让心托邦充满温暖。限定中国风家具和服装限时获取。" },

  { id:"halloween_2025", name:"万圣节奇妙夜", nameEn:"Halloween Night", type:"seasonal", startDate:"2025-10-25", endDate:"2025-11-07", status:"past",
    rewards:["南瓜头套","幽灵斗篷","南瓜灯家具x5","糖果x50","限定称号「捣蛋鬼」"],
    tasks:["收集南瓜30个","制作南瓜灯10个","为20位NPC送糖果","探索鬼屋3次","参加化妆舞会"],
    desc:"不给糖就捣蛋！万圣节的心托邦化身为神秘的魔法小镇，到处是南瓜灯和可爱的幽灵装饰。" },

  { id:"winter_wonderland_2025", name:"冬日仙境", nameEn:"Winter Wonderland", type:"seasonal", startDate:"2025-12-20", endDate:"2026-01-10", status:"past",
    rewards:["圣诞帽","雪花围巾","圣诞树家具（3种尺寸）","雪人装饰","姜饼食谱"],
    tasks:["堆雪人5次","装饰圣诞树","为NPC准备圣诞礼物10次","烹饪姜饼20次","参加雪地派对"],
    desc:"雪花飘落，心托邦换上了冬日新装。堆雪人、装饰圣诞树、互赠礼物，在温馨的小镇度过一个温暖的冬季。" },

  { id:"autumn_harvest_2025", name:"秋日丰收节", nameEn:"Autumn Harvest Festival", type:"seasonal", startDate:"2025-09-15", endDate:"2025-10-15", status:"past",
    rewards:["丰收围裙","稻草人装饰","秋季限定家具x5","烤火鸡食谱","限定称号「丰收使者」"],
    tasks:["收获作物50次","烹饪20道秋季料理","参加丰收市集3次","帮助NPC收割作物","制作稻草人"],
    desc:"金色的秋天是丰收的季节！参加丰收市集、烹制美食、帮助邻居收割，感受秋日的丰饶与感恩。" },
];

// Export
if (typeof module !== 'undefined' && module.exports) { module.exports = EVENTS_DB; }
