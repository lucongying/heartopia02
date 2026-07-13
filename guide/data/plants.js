/**
 * Heartopia 攻略站 — 园艺/作物数据
 * 字段: id, name, nameEn, icon, type(flower/crop/fruit/tree), season[0-3], growthDays, waterFreq, harvestYield, sellPrice, rarity(1-3), desc, tips
 */
const GARDEN_DB = [
  // ===== 花卉类 =====
  { id:"rose", name:"玫瑰", nameEn:"Rose", icon:"🌹", type:"flower", season:[0,1,2], growthDays:4, waterFreq:1, harvestYield:"1-3朵", sellPrice:80, rarity:1, desc:"经典花园花卉，红色玫瑰是浪漫的象征。", tips:"花期长，适合装饰花园入口。不同颜色混种视觉效果更好。" },
  { id:"tulip", name:"郁金香", nameEn:"Tulip", icon:"🌷", type:"flower", season:[0], growthDays:3, waterFreq:1, harvestYield:"1-2朵", sellPrice:120, rarity:1, desc:"春天的代表花卉，有着优雅的杯状花型。", tips:"春季限定！错过了要等一年。开花后可以收获鳞茎来年再种。" },
  { id:"sunflower", name:"向日葵", nameEn:"Sunflower", icon:"🌻", type:"flower", season:[1], growthDays:7, waterFreq:2, harvestYield:"1朵+2-3颗种子", sellPrice:200, rarity:2, desc:"追逐太阳的大型花朵，能长到2米以上。", tips:"需要每天浇水两次。收获时除了花朵还能获得葵花籽（可用于烹饪）。" },
  { id:"lavender", name:"薰衣草", nameEn:"Lavender", icon:"💜", type:"flower", season:[1], growthDays:5, waterFreq:1, harvestYield:"2-4束", sellPrice:150, rarity:2, desc:"紫色花海的浪漫代名词，散发着令人放松的芳香。", tips:"成片种植会吸引蝴蝶。干燥后可以作为香包装饰家园。" },
  { id:"sakura", name:"樱花", nameEn:"Cherry Blossom", icon:"🌸", type:"tree", season:[0], growthDays:10, waterFreq:2, harvestYield:"大量花瓣", sellPrice:500, rarity:3, desc:"日本的国花，短暂而绚烂的粉色花海令人心醉。", tips:"春季限定树木！花期为2周，期间每天收集花瓣可用于制作樱花主题料理和装饰。" },
  { id:"lily", name:"百合", nameEn:"Lily", icon:"🪷", type:"flower", season:[1,2], growthDays:5, waterFreq:1, harvestYield:"1-2朵", sellPrice:180, rarity:2, desc:"芳香浓郁的优雅花卉，品种繁多色彩丰富。", tips:"适合在花园的半阴处种植。花朵大而香，是制作花束的热门选择。" },
  { id:"cosmos", name:"波斯菊", nameEn:"Cosmos", icon:"🌸", type:"flower", season:[2,3], growthDays:3, waterFreq:1, harvestYield:"3-5朵", sellPrice:60, rarity:1, desc:"纤细轻盈的秋季花卉，在风中摇曳的姿态格外动人。", tips:"种植成本低、产量高，适合新手入门园艺。成片种植非常壮观。" },

  // ===== 蔬菜类 =====
  { id:"tomato", name:"番茄", nameEn:"Tomato", icon:"🍅", type:"crop", season:[1,2], growthDays:3, waterFreq:2, harvestYield:"2-4个", sellPrice:50, rarity:1, desc:"最常见的园艺作物，用途广泛的基础食材。", tips:"产量高、生长快，是赚钱和新手练手的好选择。连续收获3次后需要重新种植。" },
  { id:"lettuce", name:"生菜", nameEn:"Lettuce", icon:"🥬", type:"crop", season:[0,1], growthDays:2, waterFreq:1, harvestYield:"1-2棵", sellPrice:40, rarity:1, desc:"生长速度极快的叶菜，沙拉的基础食材。", tips:"从播种到收获只需2天！是烹饪等级低时的最佳蔬菜来源。" },
  { id:"potato", name:"土豆", nameEn:"Potato", icon:"🥔", type:"crop", season:[0,2,3], growthDays:5, waterFreq:1, harvestYield:"2-5个", sellPrice:35, rarity:1, desc:"耐寒易种的基础作物，储存时间长。", tips:"春秋冬三季可种，性价比极高。可加工成炸鱼薯条等热门料理。" },
  { id:"cucumber", name:"黄瓜", nameEn:"Cucumber", icon:"🥒", type:"crop", season:[1], growthDays:3, waterFreq:2, harvestYield:"2-4条", sellPrice:45, rarity:1, desc:"夏季清凉蔬菜，含水量高适合消暑。", tips:"夏季专属，需要勤浇水。收获后可制作沙拉或直接啃。" },
  { id:"carrot", name:"胡萝卜", nameEn:"Carrot", icon:"🥕", type:"crop", season:[0,2], growthDays:4, waterFreq:1, harvestYield:"2-3根", sellPrice:55, rarity:1, desc:"营养丰富的根茎蔬菜，烹饪中常用的辅料。", tips:"春秋两季种植，对新手友好。收获时能看到橙色顶部从土里冒出来。" },
  { id:"pumpkin", name:"南瓜", nameEn:"Pumpkin", icon:"🎃", type:"crop", season:[2], growthDays:8, waterFreq:2, harvestYield:"1-2个", sellPrice:300, rarity:2, desc:"秋季标志性作物，果实可以雕刻成南瓜灯。", tips:"生长周期长但售价高。万圣节前后价格翻倍！" },
  { id:"strawberry", name:"草莓", nameEn:"Strawberry", icon:"🍓", type:"fruit", season:[0], growthDays:5, waterFreq:2, harvestYield:"3-5颗", sellPrice:100, rarity:2, desc:"春季的甜美浆果，红艳欲滴的外形惹人喜爱。", tips:"需要勤浇水，但一次收获量可观。适合制作蛋糕和果酱。" },
  { id:"blueberry", name:"蓝莓", nameEn:"Blueberry", icon:"🫐", type:"fruit", season:[1], growthDays:6, waterFreq:1, harvestYield:"4-8颗", sellPrice:80, rarity:2, desc:"夏季的蓝色小浆果，富含花青素。", tips:"单株产量最高的浆果作物。适合制作果昔和松饼。" },
  { id:"watermelon", name:"西瓜", nameEn:"Watermelon", icon:"🍉", type:"fruit", season:[1], growthDays:10, waterFreq:3, harvestYield:"1个", sellPrice:600, rarity:3, desc:"夏季解暑的终极水果，收获一个就占满背包。", tips:"需要大量水和空间，但单个售价极高。夏天切开和邻居分享可以加社交好感度！" },
  { id:"grape", name:"葡萄", nameEn:"Grape", icon:"🍇", type:"fruit", season:[2], growthDays:7, waterFreq:2, harvestYield:"3-5串", sellPrice:250, rarity:2, desc:"秋季的甜美果实，成串采摘，是酿酒的原料。", tips:"需要搭建葡萄架（藤蔓植物）。加工成葡萄酒价值翻5倍！" },

  // ===== 香草/调料 =====
  { id:"herb_mix", name:"混合香草", nameEn:"Mixed Herbs", icon:"🌿", type:"herb", season:[0,1,2], growthDays:2, waterFreq:1, harvestYield:"2-4束", sellPrice:30, rarity:1, desc:"包含罗勒、迷迭香和百里香的混合香料盆栽。", tips:"几乎不需要打理，生长极快。烹饪肉类料理的基本调料。" },
  { id:"mushroom_log", name:"蘑菇原木", nameEn:"Mushroom Log", icon:"🍄", type:"fungus", season:[0,2,3], growthDays:5, waterFreq:1, harvestYield:"2-4个", sellPrice:70, rarity:1, desc:"接种了菌种的原木，持续产出各式蘑菇。", tips:"放在阴凉处长得更好。不同季节产出不同品种的蘑菇。" },
  { id:"coffee_plant", name:"咖啡树", nameEn:"Coffee Plant", icon:"☕", type:"tree", season:[1,2], growthDays:12, waterFreq:2, harvestYield:"10-20颗咖啡豆", sellPrice:400, rarity:3, desc:"热带灌木，果实经过烘焙后成为世界上最受欢迎的饮品原料。", tips:"从种植到收获需要近两周，但一旦成熟可以持续收获。咖啡豆可以制作手冲咖啡，获得提神增益。" },
];

if (typeof module !== 'undefined' && module.exports) { module.exports = GARDEN_DB; }
