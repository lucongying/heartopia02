/**
 * Heartopia 攻略站 — NPC 角色数据
 * 字段: id, name, nameEn, icon, role, personality, birthday, lovedGifts[], likedGifts[], hatedGifts[], schedule, desc
 */
const NPCS_DB = [
  { id:"mayor", name:"镇长爷爷", nameEn:"Mayor", icon:"👴", role:"镇长", personality:"慈祥、睿智", birthday:"01-15",
    lovedGifts:["烤鱼","鱼汤","蔬菜沙拉"], likedGifts:["任意鱼类","任意蔬菜"], hatedGifts:["垃圾","杂草"],
    schedule:"白天在镇公所，傍晚在小镇广场散步", desc:"心托邦的镇长，一位慈祥温和的老人。他是第一个欢迎你来到小镇的人，也是新手引导的关键NPC。" },

  { id:"fisherman", name:"老渔夫", nameEn:"Old Fisherman", icon:"🎣", role:"钓鱼导师", personality:"沉默寡言、经验丰富", birthday:"06-08",
    lovedGifts:["龙鱼","鲟鱼","金枪鱼"], likedGifts:["任意鱼类"], hatedGifts:["蔬菜","甜点"],
    schedule:"清晨和傍晚在码头钓鱼，白天在家修理渔具", desc:"镇上最有经验的渔夫，沉默寡言但技术精湛。提高好感度后可以学习高级钓鱼技巧和获得稀有鱼饵配方。" },

  { id:"chef", name:"厨娘", nameEn:"Chef Lady", icon:"👩‍🍳", role:"烹饪导师", personality:"热情、挑剔", birthday:"03-21",
    lovedGifts:["刺身拼盘","蛋糕","黄金盛宴"], likedGifts:["任意料理"], hatedGifts:["生食材","烤焦的食物"],
    schedule:"白天在餐厅厨房，下午去市场采购食材", desc:"小镇餐厅的主厨，对料理有着近乎偏执的热爱。解锁高级食谱和烹饪技巧的关键人物。" },

  { id:"florist", name:"花店姐姐", nameEn:"Florist", icon:"💐", role:"园艺导师", personality:"温柔、浪漫", birthday:"04-14",
    lovedGifts:["樱花","玫瑰","郁金香"], likedGifts:["任意花卉","薰衣草"], hatedGifts:["杂草","虫子"],
    schedule:"白天在花店，傍晚在花园浇水，周末去森林采集", desc:"小镇花店的店主，对花卉有着温柔的热爱。提升好感度后可获得稀有花种和园艺技巧。" },

  { id:"handyman", name:"木匠大叔", nameEn:"Carpenter", icon:"🔨", role:"建造导师", personality:"爽朗、手艺好", birthday:"09-12",
    lovedGifts:["牛排","啤酒","稀有木材"], likedGifts:["任意肉类料理","木材"], hatedGifts:["塑料制品"],
    schedule:"白天在工坊，下午送货到各家", desc:"小镇的木匠和工匠，几乎所有家具都出自他手。好感度提升可解锁独家家具图纸和装修折扣。" },

  { id:"cat_lady", name:"猫婆婆", nameEn:"Cat Lady", icon:"👵", role:"猫咪导师", personality:"特立独行、猫奴", birthday:"07-04",
    lovedGifts:["任意猫咪相关","鱼","牛奶"], likedGifts:["猫玩具","毛线球"], hatedGifts:["狗相关物品"],
    schedule:"大部分时间在家照顾猫咪，偶尔去商店买猫粮", desc:"独自居住在小镇边缘的老奶奶，家里养了十几只猫。提升好感度后可以领养稀有品种猫咪。" },

  { id:"explorer", name:"探险家", nameEn:"Explorer", icon:"🧭", role:"探险导师", personality:"冒险精神、话多", birthday:"10-28",
    lovedGifts:["稀有昆虫","传奇鱼类","地图"], likedGifts:["咖啡","登山装备"], hatedGifts:["宅家相关物品"],
    schedule:"清晨出发探索，傍晚回到小镇记录日志", desc:"周游世界的探险家，知道小镇周边所有隐藏的秘密地点。提升好感度可解锁新地图区域。" },

  { id:"musician", name:"音乐少女", nameEn:"Musician", icon:"🎵", role:"小镇居民", personality:"活泼、感性", birthday:"05-17",
    lovedGifts:["夜莺","音乐盒","咖啡"], likedGifts:["花束","甜点"], hatedGifts:["噪音","垃圾"],
    schedule:"傍晚在小镇广场弹吉他，周末在咖啡馆驻唱", desc:"热爱音乐的年轻女孩，常在傍晚时分在小镇广场弹唱。提升好感度可获得专属BGM。" },

  { id:"twins", name:"双胞胎兄妹", nameEn:"Twins", icon:"👫", role:"小镇居民", personality:"调皮、可爱", birthday:"08-22",
    lovedGifts:["糖果","冰淇淋","玩具"], likedGifts:["水果","蛋糕"], hatedGifts:["蔬菜","苦的食物"],
    schedule:"白天在学校，放学后在公园玩耍", desc:"小镇上最活泼的一对双胞胎，总是形影不离。和他们一起玩小游戏可以获得额外金币。" },

  { id:"doctor", name:"医生姐姐", nameEn:"Doctor", icon:"👩‍⚕️", role:"医生", personality:"知性、关心他人", birthday:"02-14",
    lovedGifts:["茶","书","按摩椅"], likedGifts:["草药","健康食品"], hatedGifts:["垃圾食品","烟酒"],
    schedule:"白天在诊所，晚上在家看书", desc:"小镇诊所的医生，温柔而专业。提升好感度可获得免费医疗和体力恢复加成。" },
];

if (typeof module !== 'undefined' && module.exports) { module.exports = NPCS_DB; }
