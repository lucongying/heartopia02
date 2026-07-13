/**
 * Heartopia 攻略站 — 昆虫图鉴数据
 * 字段: id, name, nameEn, icon, rarity(1-4), season[0-3], location[], time, weather[], price, size, desc, tips
 */
const BUGS_DB = [
  // ===== 蝴蝶类 =====
  { id:"cabbage_white", name:"菜粉蝶", nameEn:"Cabbage White", icon:"🦋", rarity:1, season:[0,1,2], location:["garden","meadow"], time:"morning", weather:["sunny"], price:80, size:"small", desc:"最常见的白色蝴蝶，在花园和草地上随处可见。", tips:"春天的花园里非常多，适合新人练手。" },
  { id:"swallowtail", name:"凤蝶", nameEn:"Swallowtail", icon:"🦋", rarity:2, season:[1,2], location:["garden","meadow"], time:"afternoon", weather:["sunny"], price:300, size:"large", desc:"拥有燕尾般优雅翅膀的大型蝴蝶，色彩斑斓。", tips:"夏秋晴天的午后在花丛附近出现。" },
  { id:"monarch", name:"帝王蝶", nameEn:"Monarch", icon:"🦋", rarity:3, season:[2], location:["meadow","forest"], time:"afternoon", weather:["sunny"], price:800, size:"medium", desc:"北美著名的迁徙蝴蝶，橙黑相间的翅膀极为醒目。", tips:"秋季限定！在阳光充足的草地上缓慢飞行。" },
  { id:"morpho", name:"闪蝶", nameEn:"Blue Morpho", icon:"🦋", rarity:4, season:[1], location:["forest"], time:"morning", weather:["sunny"], price:3000, size:"large", desc:"拥有梦幻般蓝色翅膀的热带珍稀蝴蝶，蝴蝶爱好者的终极目标。", tips:"夏季清晨在森林深处极稀有出现，飞行速度很快。" },
  { id:"luna_moth", name:"月神蛾", nameEn:"Luna Moth", icon:"🦋", rarity:3, season:[1,2], location:["forest"], time:"night", weather:["sunny"], price:1200, size:"large", desc:"浅绿色大型蛾类，仅在月夜出现，如同月光般温柔。", tips:"夏秋的晴朗月夜，在森林中靠近水源的地方。" },
  { id:"painted_lady", name:"小红蛱蝶", nameEn:"Painted Lady", icon:"🦋", rarity:1, season:[0,1,2], location:["meadow","garden"], time:"all", weather:["sunny"], price:100, size:"small", desc:"迁徙距离最长的蝴蝶之一，橘色翅膀上有黑白斑点。", tips:"春夏秋三季常见，飞行速度中等，容易捕捉。" },

  // ===== 甲虫类 =====
  { id:"ladybug", name:"瓢虫", nameEn:"Ladybug", icon:"🐞", rarity:1, season:[0,1], location:["garden","meadow"], time:"morning", weather:["sunny"], price:60, size:"tiny", desc:"红色外壳上点缀黑点的可爱甲虫，被视为幸运的象征。", tips:"春天在花园的花叶上最常见，体型小注意观察。" },
  { id:"rhinoceros_beetle", name:"独角仙", nameEn:"Rhinoceros Beetle", icon:"🪲", rarity:3, season:[1], location:["forest"], time:"night", weather:["sunny"], price:1500, size:"large", desc:"日本文化中备受喜爱的巨型甲虫，雄虫拥有威武的角。", tips:"夏季夜晚在森林的橡树上出现，听到嗡嗡声就靠近了。" },
  { id:"stag_beetle", name:"锹形虫", nameEn:"Stag Beetle", icon:"🪲", rarity:3, season:[1], location:["forest"], time:"evening", weather:["sunny"], price:1200, size:"large", desc:"拥有巨大上颚的帅气甲虫，是甲虫爱好者必收品种。", tips:"夏季傍晚在森林的树干上，与独角仙争夺领地。" },
  { id:"dung_beetle", name:"蜣螂", nameEn:"Dung Beetle", icon:"🪲", rarity:1, season:[0,1,2], location:["meadow"], time:"all", weather:["sunny"], price:100, size:"small", desc:"以推粪球闻名的甲虫，自然界的重要清道夫。", tips:"在草地上滚动粪球时很容易被发现。" },
  { id:"firefly", name:"萤火虫", nameEn:"Firefly", icon:"✨", rarity:2, season:[1], location:["forest","river"], time:"night", weather:["sunny"], price:400, size:"tiny", desc:"夏夜中闪烁发光的神奇昆虫，成群出现时如同星空降临大地。", tips:"夏季晴朗的夜晚在河边的草丛中飞舞，用网子轻扫。" },
  { id:"jewel_beetle", name:"吉丁虫", nameEn:"Jewel Beetle", icon:"💎", rarity:2, season:[1,2], location:["forest"], time:"afternoon", weather:["sunny"], price:500, size:"small", desc:"外壳闪烁着金属光泽的美丽甲虫，如同活体宝石。", tips:"夏秋午后在森林的树干上反射阳光，容易被发现。" },

  // ===== 蜻蜓/蝉类 =====
  { id:"dragonfly", name:"蜻蜓", nameEn:"Dragonfly", icon:"🪰", rarity:1, season:[1,2], location:["river","lake","pond"], time:"afternoon", weather:["sunny"], price:120, size:"medium", desc:"飞行技巧高超的捕食者，在水边最为常见。", tips:"夏秋午后在水边盘旋飞行，需要预判飞行轨迹。" },
  { id:"cicada", name:"蝉", nameEn:"Cicada", icon:"🦗", rarity:1, season:[1], location:["forest"], time:"all", weather:["sunny"], price:80, size:"medium", desc:"夏季最具代表性的鸣虫，叫声是夏天的BGM。", tips:"夏季在森林的树干上，循着叫声就能找到。" },
  { id:"evening_cicada", name:"暮蝉", nameEn:"Evening Cicada", icon:"🦗", rarity:2, season:[1], location:["forest"], time:"evening", weather:["sunny"], price:250, size:"medium", desc:"只在黄昏时分鸣叫的特殊蝉种，声音悠远而感伤。", tips:"夏季黄昏，森林边缘的树干上。声音是唯一的线索。" },

  // ===== 其他昆虫 =====
  { id:"grasshopper", name:"蚱蜢", nameEn:"Grasshopper", icon:"🦗", rarity:1, season:[1,2], location:["meadow"], time:"morning", weather:["sunny"], price:70, size:"small", desc:"常见草食昆虫，受惊吓时会跳出很远。", tips:"在草地上行走时会跳出来，注意观察脚下。" },
  { id:"praying_mantis", name:"螳螂", nameEn:"Praying Mantis", icon:"🥷", rarity:2, season:[1,2], location:["garden","meadow"], time:"afternoon", weather:["sunny"], price:350, size:"large", desc:"优雅而致命的捕食者，静静潜伏在植物间。", tips:"在花丛和草丛中保持静止，需要仔细辨认。" },
  { id:"walking_stick", name:"竹节虫", nameEn:"Walking Stick", icon:"🪵", rarity:2, season:[1,2], location:["forest"], time:"all", weather:["sunny"], price:280, size:"large", desc:"伪装大师，外形酷似树枝，极难被发现。", tips:"在森林的灌木丛中，不要看整体，找不规则的部分。" },
  { id:"honeybee", name:"蜜蜂", nameEn:"Honeybee", icon:"🐝", rarity:1, season:[0,1], location:["garden","meadow"], time:"morning", weather:["sunny"], price:90, size:"tiny", desc:"勤劳的授粉者，在花丛中忙碌穿梭。", tips:"春天的花园花丛中随处可见，飞得较低容易网到。" },
  { id:"scorpion", name:"蝎子", nameEn:"Scorpion", icon:"🦂", rarity:3, season:[1], location:["desert","meadow"], time:"night", weather:["sunny"], price:2000, size:"medium", desc:"危险的蛛形纲生物，尾部有剧毒，捕捉时需格外小心。", tips:"夏季夜晚在干燥地带出现，靠近时它会举尾警告！" },
  { id:"tarantula", name:"狼蛛", nameEn:"Tarantula", icon:"🕷️", rarity:3, season:[1,2], location:["forest","meadow"], time:"night", weather:["rainy"], price:2500, size:"large", desc:"体型巨大的毛茸茸蜘蛛，虽然吓人但价值极高。", tips:"夏秋的雨夜在森林地面游荡，看到请不要慌张！" },
  { id:"orchid_mantis", name:"兰花螳螂", nameEn:"Orchid Mantis", icon:"🌸", rarity:4, season:[0,1], location:["garden"], time:"morning", weather:["sunny"], price:4000, size:"medium", desc:"伪装成兰花的美丽螳螂，粉白相间的体色堪称艺术品。", tips:"春夏清晨在花园的花丛中极稀有出现，昆虫收藏家的圣杯。" },
];

if (typeof module !== 'undefined' && module.exports) { module.exports = BUGS_DB; }
