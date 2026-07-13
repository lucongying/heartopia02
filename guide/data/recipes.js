/**
 * Heartopia 攻略站 — 食谱数据库
 * 数据更新至 2026.05 (v0.5.1)
 * 字段: id, name, nameEn, icon, category, ingredients[{name,qty}], effect, difficulty(1-3), sellPrice, unlockCondition, desc
 */
const RECIPE_DB = [
  // ===== 鱼类料理 =====
  { id:"grilled_fish", name:"烤鱼", nameEn:"Grilled Fish", icon:"🐟", category:"鱼类料理", ingredients:[{name:"任意鱼类",qty:1}], effect:"恢复 30 体力", difficulty:1, sellPrice:200, unlockCondition:"初始解锁", desc:"最简单的料理方式，将新鲜的鱼放在火上烤至金黄。几乎所有鱼类都可以用来烤。" },
  { id:"fish_soup", name:"鱼汤", nameEn:"Fish Soup", icon:"🍲", category:"鱼类料理", ingredients:[{name:"任意鱼类",qty:2},{name:"蔬菜",qty:1}], effect:"恢复 50 体力，保暖 10 分钟", difficulty:1, sellPrice:350, unlockCondition:"初始解锁", desc:"用新鲜鱼肉和蔬菜炖煮的鲜美汤品，冬日暖身首选。" },
  { id:"sashimi", name:"刺身拼盘", nameEn:"Sashimi Platter", icon:"🍣", category:"鱼类料理", ingredients:[{name:"金枪鱼",qty:1},{name:"鲑鱼",qty:1}], effect:"恢复 80 体力，获得「美食家」增益30分钟", difficulty:3, sellPrice:1800, unlockCondition:"烹饪等级5", desc:"精选新鲜金枪鱼和鲑鱼的精美刺身，展现食材本味的高级料理。" },
  { id:"fish_and_chips", name:"炸鱼薯条", nameEn:"Fish & Chips", icon:"🍟", category:"鱼类料理", ingredients:[{name:"鲈鱼",qty:1},{name:"土豆",qty:2}], effect:"恢复 40 体力", difficulty:1, sellPrice:300, unlockCondition:"钓鱼等级3", desc:"经典英式快餐，金黄酥脆的炸鱼配上热气腾腾的薯条。" },
  { id:"grilled_eel", name:"蒲烧鳗鱼", nameEn:"Grilled Eel", icon:"🍱", category:"鱼类料理", ingredients:[{name:"鳗鱼",qty:1},{name:"酱油",qty:1}], effect:"恢复 70 体力，获得「精力充沛」增益20分钟", difficulty:2, sellPrice:1200, unlockCondition:"烹饪等级4", desc:"日式经典料理，将鳗鱼剖开涂上特制酱汁烤制，香气四溢。" },
  { id:"seafood_stew", name:"海鲜浓汤", nameEn:"Seafood Stew", icon:"🥘", category:"鱼类料理", ingredients:[{name:"任意鱼类",qty:1},{name:"鱿鱼",qty:1},{name:"番茄",qty:2}], effect:"恢复 60 体力，获得「温暖」效果15分钟", difficulty:2, sellPrice:650, unlockCondition:"烹饪等级3", desc:"融合多种海鲜与番茄炖煮的浓郁汤品，地中海风味。" },
  { id:"carp_soup", name:"鲤鱼汤", nameEn:"Carp Soup", icon:"🍲", category:"鱼类料理", ingredients:[{name:"鲤鱼",qty:2},{name:"豆腐",qty:1},{name:"姜",qty:1}], effect:"恢复 45 体力，获得「健康」增益", difficulty:1, sellPrice:380, unlockCondition:"初始解锁", desc:"传统中式汤品，鲤鱼的鲜美与嫩滑豆腐完美结合。" },

  // ===== 肉类料理 =====
  { id:"steak", name:"牛排", nameEn:"Steak", icon:"🥩", category:"肉类料理", ingredients:[{name:"牛肉",qty:1},{name:"黄油",qty:1}], effect:"恢复 55 体力", difficulty:2, sellPrice:800, unlockCondition:"烹饪等级2", desc:"煎至完美熟度的优质牛排，肉食爱好者的最爱。" },
  { id:"roast_chicken", name:"烤鸡", nameEn:"Roast Chicken", icon:"🍗", category:"肉类料理", ingredients:[{name:"鸡肉",qty:1},{name:"香草",qty:2}], effect:"恢复 50 体力", difficulty:1, sellPrice:500, unlockCondition:"初始解锁", desc:"香草腌制的全鸡慢烤至外皮金黄，肉质鲜嫩多汁。" },
  { id:"hamburger", name:"汉堡", nameEn:"Hamburger", icon:"🍔", category:"肉类料理", ingredients:[{name:"面包",qty:1},{name:"牛肉",qty:1},{name:"生菜",qty:1}], effect:"恢复 45 体力", difficulty:1, sellPrice:450, unlockCondition:"烹饪等级2", desc:"经典美式汉堡，多层食材叠加出丰富的口感。" },

  // ===== 甜点/烘焙 =====
  { id:"pancake", name:"松饼", nameEn:"Pancake", icon:"🥞", category:"甜点", ingredients:[{name:"面粉",qty:1},{name:"鸡蛋",qty:1},{name:"牛奶",qty:1}], effect:"恢复 25 体力，获得「甜蜜」增益15分钟", difficulty:1, sellPrice:250, unlockCondition:"初始解锁", desc:"松软可口的早餐经典，搭配蜂蜜或水果更美味。" },
  { id:"cake", name:"蛋糕", nameEn:"Cake", icon:"🎂", category:"甜点", ingredients:[{name:"面粉",qty:2},{name:"鸡蛋",qty:2},{name:"奶油",qty:1},{name:"水果",qty:1}], effect:"恢复 60 体力，获得「生日快乐」效果", difficulty:3, sellPrice:1500, unlockCondition:"烹饪等级6", desc:"精心烘焙的奶油蛋糕，适合在特别的日子与朋友分享。" },
  { id:"apple_pie", name:"苹果派", nameEn:"Apple Pie", icon:"🥧", category:"甜点", ingredients:[{name:"面粉",qty:1},{name:"苹果",qty:3},{name:"黄油",qty:1}], effect:"恢复 40 体力", difficulty:2, sellPrice:400, unlockCondition:"烹饪等级3", desc:"经典美式甜点，酥脆的外皮包裹着香甜的苹果馅料。" },
  { id:"ice_cream", name:"冰淇淋", nameEn:"Ice Cream", icon:"🍦", category:"甜点", ingredients:[{name:"牛奶",qty:1},{name:"奶油",qty:1},{name:"水果",qty:1}], effect:"恢复 20 体力，获得「清凉」增益15分钟", difficulty:1, sellPrice:200, unlockCondition:"初始解锁", desc:"夏季消暑必备甜品，多种口味随心搭配。" },
  { id:"cookie", name:"曲奇饼干", nameEn:"Cookies", icon:"🍪", category:"甜点", ingredients:[{name:"面粉",qty:1},{name:"黄油",qty:1},{name:"巧克力",qty:1}], effect:"恢复 15 体力", difficulty:1, sellPrice:150, unlockCondition:"初始解锁", desc:"香脆可口的曲奇，下午茶的完美搭配。" },

  // ===== 蔬菜/素食 =====
  { id:"salad", name:"蔬菜沙拉", nameEn:"Garden Salad", icon:"🥗", category:"素食", ingredients:[{name:"生菜",qty:2},{name:"番茄",qty:1},{name:"黄瓜",qty:1}], effect:"恢复 30 体力，获得「轻盈」增益", difficulty:1, sellPrice:200, unlockCondition:"初始解锁", desc:"新鲜蔬菜的简单搭配，健康低卡路里。" },
  { id:"mushroom_soup", name:"蘑菇汤", nameEn:"Mushroom Soup", icon:"🍄", category:"素食", ingredients:[{name:"蘑菇",qty:3},{name:"奶油",qty:1}], effect:"恢复 35 体力", difficulty:1, sellPrice:280, unlockCondition:"初始解锁", desc:"以多种蘑菇熬制的浓郁汤品，素食主义者的暖心之选。" },
  { id:"stir_fry", name:"炒蔬菜", nameEn:"Stir-fried Vegetables", icon:"🥬", category:"素食", ingredients:[{name:"任意蔬菜",qty:3}], effect:"恢复 25 体力", difficulty:1, sellPrice:150, unlockCondition:"初始解锁", desc:"快炒时令蔬菜，保留食材的原汁原味和营养。" },

  // ===== 米饭/面食 =====
  { id:"fried_rice", name:"蛋炒饭", nameEn:"Fried Rice", icon:"🍚", category:"主食", ingredients:[{name:"米饭",qty:1},{name:"鸡蛋",qty:2},{name:"葱花",qty:1}], effect:"恢复 40 体力", difficulty:1, sellPrice:300, unlockCondition:"烹饪等级2", desc:"中餐经典简餐，粒粒分明的米饭裹着蛋香。" },
  { id:"pasta", name:"意大利面", nameEn:"Pasta", icon:"🍝", category:"主食", ingredients:[{name:"面粉",qty:1},{name:"番茄",qty:2},{name:"奶酪",qty:1}], effect:"恢复 50 体力", difficulty:2, sellPrice:500, unlockCondition:"烹饪等级3", desc:"经典番茄肉酱意面，浓郁的酱汁裹满每一根面条。" },
  { id:"ramen", name:"拉面", nameEn:"Ramen", icon:"🍜", category:"主食", ingredients:[{name:"面粉",qty:2},{name:"鸡蛋",qty:1},{name:"猪肉",qty:1}], effect:"恢复 55 体力，获得「温暖」效果20分钟", difficulty:2, sellPrice:550, unlockCondition:"烹饪等级4", desc:"日式豚骨拉面，浓郁的骨汤配上弹牙的面条。" },
  { id:"sushi_roll", name:"寿司卷", nameEn:"Sushi Roll", icon:"🍣", category:"主食", ingredients:[{name:"米饭",qty:1},{name:"任意鱼类",qty:1},{name:"海苔",qty:1}], effect:"恢复 45 体力", difficulty:2, sellPrice:600, unlockCondition:"烹饪等级3", desc:"将新鲜的鱼生与醋饭用海苔卷起，日料经典。" },
  { id:"congee", name:"粥", nameEn:"Congee", icon:"🥣", category:"主食", ingredients:[{name:"米饭",qty:1},{name:"任意蔬菜",qty:1}], effect:"恢复 20 体力，获得「养胃」增益", difficulty:1, sellPrice:120, unlockCondition:"初始解锁", desc:"温和滋补的营养粥品，适合任何时段的暖心料理。" },

  // ===== 饮品 =====
  { id:"fruit_juice", name:"鲜榨果汁", nameEn:"Fresh Juice", icon:"🧃", category:"饮品", ingredients:[{name:"任意水果",qty:2}], effect:"恢复 15 体力，获得「清爽」增益", difficulty:1, sellPrice:180, unlockCondition:"初始解锁", desc:"新鲜现榨的水果饮品，维生素满满。" },
  { id:"coffee", name:"手冲咖啡", nameEn:"Pour-over Coffee", icon:"☕", category:"饮品", ingredients:[{name:"咖啡豆",qty:1},{name:"热水",qty:1}], effect:"恢复 10 体力，获得「提神」增益30分钟", difficulty:1, sellPrice:200, unlockCondition:"初始解锁", desc:"精心手冲的咖啡，早晨一杯唤醒整天活力。" },
  { id:"smoothie", name:"果昔", nameEn:"Smoothie", icon:"🥤", category:"饮品", ingredients:[{name:"任意水果",qty:2},{name:"牛奶",qty:1}], effect:"恢复 25 体力，获得「活力」增益", difficulty:1, sellPrice:250, unlockCondition:"初始解锁", desc:"水果与牛奶的完美混合饮品，营养与美味兼具。" },

  // ===== 特殊料理 =====
  { id:"lover_soup", name:"爱心浓汤", nameEn:"Lover's Soup", icon:"💕", category:"特殊", ingredients:[{name:"鲤鱼",qty:1},{name:"番茄",qty:2},{name:"红酒",qty:1}], effect:"恢复 100 体力，赠送 NPC 好感度+10", difficulty:3, sellPrice:2000, unlockCondition:"烹饪等级8 + 恋爱系统解锁", desc:"传说中的爱情料理，据说喝下它的人会感到满满的幸福。送给心仪的 NPC 效果翻倍！" },
  { id:"golden_feast", name:"黄金盛宴", nameEn:"Golden Feast", icon:"✨", category:"特殊", ingredients:[{name:"龙鱼",qty:1},{name:"金枪鱼",qty:1},{name:"和牛",qty:1},{name:"松露",qty:1}], effect:"恢复全部体力 + 所有增益效果持续60分钟", difficulty:3, sellPrice:10000, unlockCondition:"烹饪等级10", desc:"使用最顶级的稀有食材打造的终极盛宴，只有最顶级的厨师才能驾驭。" },
];

// Export
if (typeof module !== 'undefined' && module.exports) { module.exports = RECIPE_DB; }
