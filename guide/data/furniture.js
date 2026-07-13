/**
 * Heartopia 攻略站 — 家具图鉴数据 (精选代表)
 * 字段: id, name, nameEn, icon, category, theme, source, materials[], size, sellPrice, rarity(1-3), desc
 */
const FURNITURE_DB = [
  // ===== 客厅 =====
  { id:"sofa_cozy", name:"舒适沙发", nameEn:"Cozy Sofa", icon:"🛋️", category:"客厅", theme:"现代简约", source:"商店购买", materials:[], size:"2x1", sellPrice:800, rarity:1, desc:"柔软舒适的布艺沙发，回家后瘫在上面是最幸福的时刻。" },
  { id:"coffee_table", name:"茶几", nameEn:"Coffee Table", icon:"☕", category:"客厅", theme:"现代简约", source:"商店购买", materials:[{name:"木材",qty:10}], size:"1x1", sellPrice:300, rarity:1, desc:"简约木质茶几，摆放咖啡和杂志的完美位置。" },
  { id:"bookshelf", name:"书架", nameEn:"Bookshelf", icon:"📚", category:"客厅", theme:"文艺复古", source:"木工制作", materials:[{name:"木材",qty:20}], size:"2x1", sellPrice:500, rarity:1, desc:"摆满书籍的木质书架，让家园充满文化气息。" },
  { id:"fireplace", name:"壁炉", nameEn:"Fireplace", icon:"🔥", category:"客厅", theme:"温馨复古", source:"商店购买", materials:[{name:"石材",qty:30},{name:"木材",qty:10}], size:"2x1", sellPrice:3000, rarity:3, desc:"冬日客厅的灵魂！围着壁炉喝茶是冬天最温馨的画面。冬季获得「温暖」增益。" },

  // ===== 卧室 =====
  { id:"bed_simple", name:"单人床", nameEn:"Simple Bed", icon:"🛏️", category:"卧室", theme:"现代简约", source:"初始赠送", materials:[], size:"2x1", sellPrice:200, rarity:1, desc:"基础单人床，虽然简单但很舒适。睡觉可以恢复全部体力。" },
  { id:"bed_double", name:"双人床", nameEn:"Double Bed", icon:"🛏️", category:"卧室", theme:"现代简约", source:"商店购买", materials:[{name:"木材",qty:20},{name:"布料",qty:10}], size:"3x2", sellPrice:2000, rarity:2, desc:"宽敞的双人床，如果有室友可以一起休息。恢复效果提升20%。" },
  { id:"wardrobe", name:"衣柜", nameEn:"Wardrobe", icon:"👗", category:"卧室", theme:"现代简约", source:"商店购买", materials:[{name:"木材",qty:15}], size:"1x1", sellPrice:400, rarity:1, desc:"存放衣服的衣柜，可以在这里更换造型和搭配服装。" },
  { id:"vanity", name:"梳妆台", nameEn:"Vanity", icon:"🪞", category:"卧室", theme:"公主梦幻", source:"商店购买", materials:[{name:"木材",qty:10},{name:"玻璃",qty:5}], size:"1x1", sellPrice:600, rarity:2, desc:"带有镜子的梳妆台，可以在这里更换发型和妆容。" },

  // ===== 厨房 =====
  { id:"kitchen_counter", name:"厨房台面", nameEn:"Kitchen Counter", icon:"🍳", category:"厨房", theme:"现代简约", source:"初始赠送", materials:[], size:"2x1", sellPrice:500, rarity:1, desc:"基础厨房台面，放置后解锁烹饪功能。所有美食从这里诞生。" },
  { id:"fridge", name:"冰箱", nameEn:"Refrigerator", icon:"🧊", category:"厨房", theme:"现代简约", source:"商店购买", materials:[{name:"金属",qty:10},{name:"电子元件",qty:5}], size:"1x1", sellPrice:1200, rarity:2, desc:"储存食材的冰箱，容量比普通仓库大。放入的食材保鲜时间延长。" },
  { id:"oven", name:"烤箱", nameEn:"Oven", icon:"🔥", category:"厨房", theme:"现代简约", source:"烹饪等级3解锁", materials:[{name:"金属",qty:15}], size:"1x1", sellPrice:1500, rarity:2, desc:"专业烘焙设备，解锁后可制作蛋糕、曲奇等烘焙类食谱。" },

  // ===== 庭院 =====
  { id:"garden_table", name:"花园桌", nameEn:"Garden Table", icon:"🪑", category:"庭院", theme:"自然田园", source:"木工制作", materials:[{name:"木材",qty:12}], size:"2x2", sellPrice:350, rarity:1, desc:"适合放在花园里的户外桌椅组合，享受阳光和下午茶。" },
  { id:"hammock", name:"吊床", nameEn:"Hammock", icon:"🏖️", category:"庭院", theme:"度假风情", source:"活动奖励", materials:[{name:"布料",qty:8},{name:"绳索",qty:4}], size:"3x1", sellPrice:800, rarity:2, desc:"绑在两棵树之间的吊床，躺在上面摇摇晃晃看云朵是最惬意的事。" },
  { id:"bird_bath", name:"鸟浴盆", nameEn:"Bird Bath", icon:"🕊️", category:"庭院", theme:"自然田园", source:"商店购买", materials:[{name:"石材",qty:15}], size:"1x1", sellPrice:450, rarity:1, desc:"放在花园里的鸟浴盆，吸引小鸟来喝水和洗澡。提升观鸟概率。" },
  { id:"gnome_statue", name:"花园矮人雕像", nameEn:"Garden Gnome", icon:"🧑‍🌾", category:"庭院", theme:"童话梦幻", source:"稀有掉落", materials:[], size:"1x1", sellPrice:5000, rarity:3, desc:"据说能带来好运的花园矮人雕像。极其稀有的装饰品，全服拥有率不到1%。" },

  // ===== 装饰品 =====
  { id:"painting", name:"风景画", nameEn:"Landscape Painting", icon:"🖼️", category:"装饰", theme:"文艺复古", source:"商店购买", materials:[], size:"1x1", sellPrice:250, rarity:1, desc:"一幅心托邦小镇风景画，挂在墙上增添艺术气息。" },
  { id:"rug_persian", name:"波斯地毯", nameEn:"Persian Rug", icon:"🧶", category:"装饰", theme:"异域风情", source:"商店购买", materials:[{name:"布料",qty:15}], size:"3x2", sellPrice:1200, rarity:2, desc:"精美的手工编织地毯，为房间增添温暖和异域风情。" },
  { id:"aquarium", name:"水族箱", nameEn:"Aquarium", icon:"🐠", category:"装饰", theme:"现代简约", source:"钓鱼等级5解锁", materials:[{name:"玻璃",qty:10},{name:"金属",qty:5}], size:"2x1", sellPrice:2000, rarity:2, desc:"大型水族箱，可以展示你钓到的鱼！放入稀有鱼会吸引访客驻足观赏。" },
  { id:"cat_tree", name:"猫爬架", nameEn:"Cat Tree", icon:"🐱", category:"装饰", theme:"宠物用品", source:"养猫后解锁", materials:[{name:"木材",qty:15},{name:"布料",qty:10}], size:"2x1", sellPrice:800, rarity:2, desc:"多层猫爬架，让你家的猫咪尽情攀爬和磨爪。提升猫咪好感度。" },

  // ===== 联动/限定 =====
  { id:"mlp_rainbow_sofa", name:"彩虹小马沙发", nameEn:"MLP Rainbow Sofa", icon:"🌈", category:"客厅", theme:"彩虹小马联动", source:"联动活动限定", materials:[], size:"2x1", sellPrice:"不可交易", rarity:3, desc:"彩虹小马联动限定家具，装饰有可爱小马图案的彩虹色沙发。活动结束后绝版。" },
  { id:"sakura_tree_light", name:"樱花树灯", nameEn:"Sakura Tree Lamp", icon:"🌸", category:"庭院", theme:"春日花见", source:"春日花见祭限定", materials:[], size:"1x1", sellPrice:"不可交易", rarity:3, desc:"春日花见祭限定装饰，夜晚会发出柔和的粉色光芒，将庭院变成梦幻樱花林。" },
];

if (typeof module !== 'undefined' && module.exports) { module.exports = FURNITURE_DB; }
