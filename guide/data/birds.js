/**
 * Heartopia 攻略站 — 观鸟图鉴数据
 * 字段: id, name, nameEn, icon, rarity(1-4), season[0-3], habitat[], time, weather[], size, desc, tips
 */
const BIRDS_DB = [
  // ===== 常见鸟类 =====
  { id:"sparrow", name:"麻雀", nameEn:"Sparrow", icon:"🐦", rarity:1, season:[0,1,2,3], habitat:["town","meadow","garden"], time:"morning", weather:["sunny","rainy"], size:"small", desc:"最常见的城市鸟类，在街道和公园中随处可见。", tips:"全年全天都能看到，使用基础望远镜即可。" },
  { id:"robin", name:"知更鸟", nameEn:"Robin", icon:"🐦", rarity:1, season:[0,1], habitat:["garden","forest","meadow"], time:"morning", weather:["sunny"], price:100, size:"small", desc:"胸口橙色羽毛的标志性小鸟，春天的使者。", tips:"清晨在花园的草地上寻找，喜欢在低处觅食。" },
  { id:"blue_tit", name:"蓝山雀", nameEn:"Blue Tit", icon:"🐦", rarity:1, season:[0,1,2,3], habitat:["forest","garden"], time:"morning", weather:["sunny"], price:90, size:"tiny", desc:"小巧活泼的蓝黄色小鸟，喜欢倒挂在树枝上觅食。", tips:"在森林边缘和公园的树枝间跳跃，叫声清脆。" },
  { id:"pigeon", name:"鸽子", nameEn:"Pigeon", icon:"🕊️", rarity:1, season:[0,1,2,3], habitat:["town","meadow"], time:"all", weather:["sunny","rainy"], price:50, size:"medium", desc:"城镇中最常见的鸟类，在广场和街道上悠闲踱步。", tips:"广场上成群出现，是最容易观察到的鸟类。" },
  { id:"crow", name:"乌鸦", nameEn:"Crow", icon:"🐦‍⬛", rarity:1, season:[0,1,2,3], habitat:["town","forest","meadow"], time:"all", weather:["sunny","rainy"], price:70, size:"large", desc:"聪明的黑色大鸟，被认为具有很高的智商。", tips:"城镇和森林边缘都常见，叫声响亮易于发现。" },

  // ===== 水鸟 =====
  { id:"mallard", name:"绿头鸭", nameEn:"Mallard", icon:"🦆", rarity:1, season:[0,1,2], habitat:["lake","pond","river"], time:"morning", weather:["sunny"], price:120, size:"medium", desc:"最常见的野鸭，雄鸟头部呈金属绿色。", tips:"在湖泊和池塘水面悠然游动，清晨最活跃。" },
  { id:"heron", name:"苍鹭", nameEn:"Grey Heron", icon:"🦩", rarity:2, season:[0,1,2], habitat:["lake","river"], time:"morning", weather:["sunny"], price:350, size:"large", desc:"体型高大的涉禽，在浅水中静止不动等待猎物。", tips:"清晨在湖边浅滩站立不动，需要耐心等待它现身。" },
  { id:"swan", name:"天鹅", nameEn:"Swan", icon:"🦢", rarity:2, season:[0,1,2], habitat:["lake"], time:"morning", weather:["sunny"], price:400, size:"large", desc:"优雅的白色大鸟，以优美的脖颈曲线著称。", tips:"在大型湖泊的中心区域游动，使用长焦望远镜。" },
  { id:"kingfisher", name:"翠鸟", nameEn:"Kingfisher", icon:"🐦", rarity:3, season:[1,2], habitat:["river","lake"], time:"morning", weather:["sunny"], price:800, size:"small", desc:"羽毛闪耀着宝石般蓝绿色光泽的美丽小鸟，擅长俯冲捕鱼。", tips:"夏秋清晨在河岸边，看到蓝色闪光就是它！飞行极快。" },

  // ===== 猛禽 =====
  { id:"eagle", name:"鹰", nameEn:"Eagle", icon:"🦅", rarity:3, season:[0,2], habitat:["mountain","forest"], time:"afternoon", weather:["sunny"], price:1500, size:"large", desc:"天空之王，展开巨大翅膀在蓝天中盘旋。", tips:"春秋午后在山地和森林上空盘旋，需要使用高倍望远镜。" },
  { id:"owl", name:"猫头鹰", nameEn:"Owl", icon:"🦉", rarity:3, season:[0,1,2,3], habitat:["forest"], time:"night", weather:["sunny"], price:1200, size:"large", desc:"夜行性猛禽，无声飞行，是森林夜晚的守护者。", tips:"夜间在森林的枯树枝上，眼睛的反光是重要线索。" },
  { id:"falcon", name:"游隼", nameEn:"Peregrine Falcon", icon:"🦅", rarity:3, season:[2,3], habitat:["mountain","town"], time:"afternoon", weather:["sunny"], price:1800, size:"medium", desc:"地球上速度最快的动物，俯冲时速可达300公里。", tips:"秋冬午后在高楼和悬崖附近，飞行速度快需要预判。" },

  // ===== 林鸟 =====
  { id:"woodpecker", name:"啄木鸟", nameEn:"Woodpecker", icon:"🪚", rarity:2, season:[0,1,2], habitat:["forest"], time:"morning", weather:["sunny"], price:300, size:"medium", desc:"用喙在树干上敲击的独特鸟类，发出咚咚的响声。", tips:"跟着声音走！在森林中听到敲木头的声音就找到它了。" },
  { id:"jay", name:"松鸦", nameEn:"Eurasian Jay", icon:"🐦", rarity:2, season:[0,1,2], habitat:["forest"], time:"afternoon", weather:["sunny"], price:280, size:"medium", desc:"拥有蓝色翅膀斑块的鸦科鸟类，警觉性很高。", tips:"午后在森林地面寻找橡子，一有动静就会飞走。" },
  { id:"nightingale", name:"夜莺", nameEn:"Nightingale", icon:"🎵", rarity:2, season:[0,1], habitat:["forest","garden"], time:"night", weather:["sunny"], price:500, size:"small", desc:"以美妙歌声闻名的鸟类，夜间的鸣唱最为动人。", tips:"春夏夜晚在森林边缘的灌木丛中，循着歌声寻找。" },

  // ===== 珍稀鸟类 =====
  { id:"peacock", name:"孔雀", nameEn:"Peacock", icon:"🦚", rarity:3, season:[0,1], habitat:["garden","forest"], time:"morning", weather:["sunny"], price:2000, size:"large", desc:"拥有华丽尾羽的鸟中之王，开屏时令人叹为观止。", tips:"春夏清晨在花园和森林空地，看到华丽的尾屏就是它。" },
  { id:"crane", name:"丹顶鹤", nameEn:"Red-crowned Crane", icon:"🦩", rarity:4, season:[3], habitat:["lake","meadow"], time:"morning", weather:["sunny"], price:5000, size:"large", desc:"象征长寿与吉祥的珍稀候鸟，头顶一抹红色极为优雅。", tips:"冬季清晨在湖泊附近的草地上，极稀有！观鸟爱好者的终极目标。" },
  { id:"hummingbird", name:"蜂鸟", nameEn:"Hummingbird", icon:"🐦", rarity:3, season:[0,1], habitat:["garden","forest"], time:"morning", weather:["sunny"], price:900, size:"tiny", desc:"世界上最小的鸟类，能够在空中悬停并倒飞。", tips:"春夏清晨在花丛中快速振翅，体型极小需要仔细观察。" },
  { id:"parrot", name:"金刚鹦鹉", nameEn:"Macaw", icon:"🦜", rarity:2, season:[1,2], habitat:["forest","town"], time:"afternoon", weather:["sunny"], price:600, size:"large", desc:"色彩鲜艳的大型鹦鹉，聪明而善于模仿声音。", tips:"夏秋午后在热带森林区域，鲜艳的羽毛非常显眼。" },
  { id:"flamingo", name:"火烈鸟", nameEn:"Flamingo", icon:"🦩", rarity:4, season:[1], habitat:["lake"], time:"evening", weather:["sunny"], price:3500, size:"large", desc:"粉色羽毛的优雅水鸟，在夕阳下成群出现如梦如幻。", tips:"夏季傍晚在浅水湖区域极稀有出现，成群的粉色是最美的风景。" },
];

if (typeof module !== 'undefined' && module.exports) { module.exports = BIRDS_DB; }
