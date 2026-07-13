/**
 * Heartopia 攻略站 — 鱼类图鉴数据
 * 数据更新至 2026.05 (v0.5.1)
 * 字段: id, name, nameEn, icon, rarity(1-4), season[0-3], location[], time, weather[], price, difficulty, bait, shadow, desc, tips
 */
const FISH_DB = [
  // ===== 河流鱼类 =====
  { id:"carp", name:"鲤鱼", nameEn:"Carp", icon:"🐟", rarity:1, season:[0,1,2], location:["river","lake"], time:"all", weather:["sunny","rainy"], price:120, difficulty:"easy", bait:"通用鱼饵", shadow:"medium", desc:"最常见的淡水鱼，适应力极强，几乎全年都能在河流中钓到。", tips:"新手首选目标，使用通用鱼饵即可轻松上钩。" },
  { id:"goldfish", name:"金鱼", nameEn:"Goldfish", icon:"🔶", rarity:1, season:[0,1,2], location:["lake","pond"], time:"all", weather:["sunny"], price:180, difficulty:"easy", bait:"通用鱼饵", shadow:"small", desc:"色彩鲜艳的观赏鱼，最初由鲫鱼驯化而来。", tips:"在晴天的小池塘和湖泊更容易遇到。" },
  { id:"crucian_carp", name:"鲫鱼", nameEn:"Crucian Carp", icon:"🐟", rarity:1, season:[0,1,2,3], location:["river","lake","pond"], time:"all", weather:["sunny","rainy","snowy"], price:100, difficulty:"easy", bait:"通用鱼饵", shadow:"small", desc:"小体型淡水鱼，全年都能钓到，是烹饪的基础食材。", tips:"分布极广，几乎任何水域都能遇到。" },
  { id:"catfish", name:"鲶鱼", nameEn:"Catfish", icon:"🐋", rarity:2, season:[1,2], location:["river"], time:"night", weather:["rainy"], price:350, difficulty:"medium", bait:"腥味鱼饵", shadow:"large", desc:"夜行性底栖鱼类，长有标志性的胡须，在雨夜活跃。", tips:"雨夜使用腥味鱼饵效果最佳，注意大型鱼影。" },
  { id:"salmon", name:"鲑鱼", nameEn:"Salmon", icon:"🐟", rarity:2, season:[2], location:["river","ocean"], time:"all", weather:["sunny","rainy"], price:420, difficulty:"medium", bait:"腥味鱼饵", shadow:"large", desc:"洄游鱼类，秋季从海洋返回河流产卵，肉质鲜美。", tips:"秋季在河流上游和入海口附近出现频率最高。" },
  { id:"trout", name:"鳟鱼", nameEn:"Trout", icon:"🐟", rarity:2, season:[0,2], location:["river","lake"], time:"morning","weather":["sunny"], price:280, difficulty:"medium", bait:"虫饵", shadow:"medium", desc:"喜欢清凉水域的淡水鱼，清晨最为活跃。", tips:"清晨在山间溪流使用虫饵垂钓效果最好。" },
  { id:"arowana", name:"龙鱼", nameEn:"Arowana", icon:"🐉", rarity:4, season:[1], location:["river"], time:"morning","weather":["rainy"], price:5000, difficulty:"hard", bait:"高级鱼饵", shadow:"large", desc:"被誉为水中活化石的珍贵鱼类，鳞片闪烁着金属光泽。", tips:"夏季雨天的清晨，在深水河段极低概率出现，建议使用高级鱼饵。" },
  { id:"piranha", name:"食人鱼", nameEn:"Piranha", icon:"🦈", rarity:3, season:[1], location:["river"], time:"afternoon","weather":["sunny"], price:1200, difficulty:"hard", bait:"腥味鱼饵", shadow:"small", desc:"热带河流中以凶猛著称的鱼类，群体出动时令人畏惧。", tips:"仅在夏季的炎热午后出现，使用腥味鱼饵。" },

  // ===== 湖泊/池塘鱼类 =====
  { id:"koi", name:"锦鲤", nameEn:"Koi", icon:"🎏", rarity:3, season:[0,1,2], location:["lake","pond"], time:"morning","weather":["sunny"], price:2000, difficulty:"medium", bait:"高级鱼饵", shadow:"large", desc:"色彩华丽的观赏鱼，被视为吉祥和好运的象征。", tips:"在晴天的清晨出现于湖泊，是比较稀有的观赏鱼。" },
  { id:"bass", name:"鲈鱼", nameEn:"Bass", icon:"🐟", rarity:1, season:[0,1,2,3], location:["lake","river"], time:"all", weather:["sunny","rainy"], price:200, difficulty:"easy", bait:"虫饵", shadow:"medium", desc:"全年可钓的运动型鱼类，是钓鱼比赛的常见目标。", tips:"使用虫饵在湖泊深水区垂钓效果更好。" },
  { id:"frog", name:"青蛙", nameEn:"Frog", icon:"🐸", rarity:1, season:[0,1], location:["pond"], time:"evening","weather:["rainy"], price:150, difficulty:"easy", bait:"虫饵", shadow:"small", desc:"雨后池塘边活跃的两栖动物，虽然不算鱼但也经常被钓到。", tips:"雨后的傍晚在池塘边很容易发现。" },
  { id:"tilapia", name:"罗非鱼", nameEn:"Tilapia", icon:"🐟", rarity:1, season:[1,2], location:["lake","pond"], time:"all", weather:["sunny"], price:160, difficulty:"easy", bait:"通用鱼饵", shadow:"medium", desc:"原产非洲的热带鱼，现已广泛养殖，肉质细嫩。", tips:"夏秋季节在温暖的浅水区域常见。" },

  // ===== 海洋鱼类 =====
  { id:"tuna", name:"金枪鱼", nameEn:"Tuna", icon:"🐟", rarity:3, season:[0,1], location:["ocean"], time:"morning","weather:["sunny"], price:3000, difficulty:"hard", bait:"腥味鱼饵", shadow:"huge", desc:"海洋中的速度之王，体型巨大，是渔民的终极目标之一。", tips:"春夏季节的清晨出海，注意巨大的鱼影。" },
  { id:"mackerel", name:"鲭鱼", nameEn:"Mackerel", icon:"🐟", rarity:1, season:[0,1,2,3], location:["ocean"], time:"all", weather:["sunny"], price:150, difficulty:"easy", bait:"通用鱼饵", shadow:"small", desc:"常见的海鱼，全年可钓，是海钓入门的最佳选择。", tips:"分布广泛，基础鱼饵即可。" },
  { id:"squid", name:"鱿鱼", nameEn:"Squid", icon:"🦑", rarity:2, season:[0,3], location:["ocean"], time:"night","weather:["sunny"], price:400, difficulty:"medium", bait:"腥味鱼饵", shadow:"medium", desc:"夜间活动的头足类生物，是料理中的高级食材。", tips:"夜间出海垂钓，使用腥味鱼饵。" },
  { id:"clownfish", name:"小丑鱼", nameEn:"Clownfish", icon:"🐠", rarity:2, season:[1,2], location:["ocean"], time:"all", weather:["sunny"], price:300, difficulty:"medium", bait:"虫饵", shadow:"small", desc:"色彩鲜明的热带珊瑚鱼，因动画电影而广为人知。", tips:"夏秋季节在珊瑚礁附近使用虫饵。" },
  { id:"sunfish", name:"翻车鱼", nameEn:"Ocean Sunfish", icon:"🌕", rarity:4, season:[1], location:["ocean"], time:"afternoon","weather:["sunny"], price:8000, difficulty:"hard", bait:"高级鱼饵", shadow:"huge", desc:"外形奇特的巨型海洋鱼类，体重可达一吨以上。", tips:"夏季晴天的午后极低概率在海面出现，传说级别的收获！" },
  { id:"seahorse", name:"海马", nameEn:"Seahorse", icon:"🐴", rarity:3, season:[0,1], location:["ocean"], time:"morning","weather:["sunny"], price:800, difficulty:"medium", bait:"虫饵", shadow:"tiny", desc:"小巧玲珑的海洋生物，虽然体型小但却很珍贵。", tips:"春夏清晨的浅海区域出现，鱼影极小注意观察。" },

  // ===== 特殊鱼类 =====
  { id:"eel", name:"鳗鱼", nameEn:"Eel", icon:"🐍", rarity:2, season:[1,2], location:["river","ocean"], time:"night","weather:["rainy"], price:600, difficulty:"medium", bait:"腥味鱼饵", shadow:"long", desc:"细长体型的洄游鱼类，雨夜在河流和近海活动。", tips:"雨夜使用腥味鱼饵，注意细长的鱼影。" },
  { id:"pufferfish", name:"河豚", nameEn:"Pufferfish", icon:"🐡", rarity:3, season:[0,1], location:["ocean"], time:"afternoon","weather:["sunny"], price:2500, difficulty:"hard", bait:"高级鱼饵", shadow:"medium", desc:"会膨胀成球形的有毒鱼类，但处理得当是顶级美味。", tips:"春夏午后晴天的近海出现，需用高级鱼饵。" },
  { id:"sturgeon", name:"鲟鱼", nameEn:"Sturgeon", icon:"🐟", rarity:4, season:[0,3], location:["river"], time:"all", weather:["rainy"], price:6000, difficulty:"hard", bait:"高级鱼饵", shadow:"huge", desc:"古老的鱼类活化石，体型巨大，鱼子酱的来源。", tips:"春秋两季的雨天，在河流下游极稀有出现。" },
  { id:"koi_king", name:"龙王锦鲤", nameEn:"Dragon King Koi", icon:"👑", rarity:4, season:[0], location:["lake"], time:"morning","weather:["rainy"], price:10000, difficulty:"hard", bait:"传说鱼饵", shadow:"huge", desc:"传说中的巨型锦鲤，据说见到它的人会获得好运。", tips:"春雨的清晨在湖泊最深处有极低概率出现，渔民的终极梦想！" },

  // ===== 更多常见鱼类 =====
  { id:"herring", name:"鲱鱼", nameEn:"Herring", icon:"🐟", rarity:1, season:[0,3], location:["ocean"], time:"all", weather:["sunny"], price:130, difficulty:"easy", bait:"通用鱼饵", shadow:"small", desc:"小型群居海鱼，春秋季节大量出现。", tips:"使用通用鱼饵即可轻松大量钓获。" },
  { id:"sardine", name:"沙丁鱼", nameEn:"Sardine", icon:"🐟", rarity:1, season:[1,2], location:["ocean"], time:"all", weather:["sunny"], price:110, difficulty:"easy", bait:"通用鱼饵", shadow:"tiny", desc:"极小的群居海鱼，数量庞大，适合大批量捕捞。", tips:"夏秋季节海面随处可见的小鱼群。" },
  { id:"perch", name:"鲈鱼", nameEn:"Perch", icon:"🐟", rarity:1, season:[0,1,2], location:["river","lake"], time:"all", weather:["sunny","rainy"], price:180, difficulty:"easy", bait:"虫饵", shadow:"medium", desc:"淡水运动鱼类的代表，是许多钓鱼爱好者的心头好。", tips:"使用虫饵在湖泊和河流都能获得不错的收获。" },
  { id:"zander", name:"梭鲈", nameEn:"Zander", icon:"🐟", rarity:2, season:[1,2], location:["lake"], time:"night","weather:["rainy"], price:450, difficulty:"medium", bait:"腥味鱼饵", shadow:"large", desc:"夜行性大型淡水鱼，以其他鱼类为食。", tips:"夏秋雨夜在湖泊深水区使用腥味鱼饵。" },
  { id:"loach", name:"泥鳅", nameEn:"Loach", icon:"🐟", rarity:1, season:[0,1,2], location:["pond","river"], time:"evening","weather:["rainy"], price:90, difficulty:"easy", bait:"虫饵", shadow:"tiny", desc:"喜欢在泥底水域活动的小型鱼类，雨后活跃。", tips:"雨后的傍晚在池塘边很容易钓到。" },
  { id:"anglerfish", name:"𩽾𩾌鱼", nameEn:"Anglerfish", icon:"👾", rarity:3, season:[0,3], location:["ocean"], time:"night","weather:["rainy"], price:3500, difficulty:"hard", bait:"腥味鱼饵", shadow:"large", desc:"深海怪鱼，头顶的发光器用来吸引猎物。", tips:"春秋两季的雨夜深海垂钓，需要耐心和运气。" },
];

// Export
if (typeof module !== 'undefined' && module.exports) { module.exports = FISH_DB; }
