/**
 * Heartopia 攻略站 — 猫咪图鉴数据
 * 字段: id, name, nameEn, icon, breed, rarity(1-4), personality, favoriteFood, traits[], desc, careTips
 */
const CATS_DB = [
  { id:"tabby", name:"橘猫", nameEn:"Orange Tabby", icon:"🐱", breed:"中华田园猫", rarity:1, personality:"贪吃、慵懒、亲人", favoriteFood:"烤鱼", traits:["食量大","爱睡觉","性格温顺"], desc:"橘色条纹的经典家猫，以'十只橘猫九个胖'闻名。是新手铲屎官的最佳选择。", careTips:"控制饮食量，虽然它总是装可怜讨食但不要被迷惑。每天陪玩10分钟即可。" },
  { id:"black_cat", name:"黑猫", nameEn:"Black Cat", icon:"🐈‍⬛", breed:"孟买猫", rarity:1, personality:"神秘、独立、忠诚", favoriteFood:"刺身拼盘", traits:["夜间活跃","对主人忠诚","不喜欢陌生人"], desc:"漆黑如墨的优雅猫咪，在许多文化中被视为吉兆而非厄运。", careTips:"给它足够的独立空间，不要在它躲藏时强行抱出来。夜间它会自己玩耍。" },
  { id:"siamese", name:"暹罗猫", nameEn:"Siamese", icon:"🐱", breed:"暹罗猫", rarity:2, personality:"话痨、聪明、粘人", favoriteFood:"金枪鱼", traits:["爱叫唤","高智商","极其粘人"], desc:"拥有蓝色杏仁眼和重点色毛发的泰国皇室猫咪，嗓门特别大。", careTips:"需要大量陪伴时间，如果冷落它会用叫声抗议。适合在家时间长的玩家。" },
  { id:"persian", name:"波斯猫", nameEn:"Persian", icon:"🐱", breed:"波斯猫", rarity:2, personality:"优雅、温柔、安静", favoriteFood:"三文鱼", traits:["长毛需要打理","性格温顺","喜欢安静环境"], desc:"拥有蓬松长毛和扁平面孔的贵族猫咪，举止优雅如同猫咪中的公主。", careTips:"每天需要梳理毛发防止打结，不喜欢嘈杂环境。给它一个安静舒适的角落。" },
  { id:"ragdoll", name:"布偶猫", nameEn:"Ragdoll", icon:"🐱", breed:"布偶猫", rarity:3, personality:"温柔、粘人、放松", favoriteFood:"奶油", traits:["抱起来就软掉","对人毫无戒心","体型巨大"], desc:"被誉为仙女猫的大型长毛品种，抱起来就会像布偶一样全身放松。", careTips:"非常需要人类陪伴，建议放在家园的中心位置。因为是长毛猫需要经常打理。" },
  { id:"scottish_fold", name:"苏格兰折耳猫", nameEn:"Scottish Fold", icon:"🐱", breed:"苏格兰折耳猫", rarity:3, personality:"甜美、安静、忠诚", favoriteFood:"烤鸡", traits:["折耳特征","不爱叫","对人友善"], desc:"以独特的折耳闻名的可爱猫咪，圆圆的脸加上折耳让人无法抗拒。", careTips:"注意耳朵清洁，折耳容易积累污垢。性格温顺适合所有玩家。" },
  { id:"munchkin", name:"短腿猫", nameEn:"Munchkin", icon:"🐱", breed:"曼基康猫", rarity:3, personality:"活泼、好奇、好动", favoriteFood:"饼干", traits:["短腿萌","跑得快","好奇心旺盛"], desc:"天生短腿的独特猫咪品种，虽然腿短但跑起来一点不慢！", careTips:"虽然腿短但精力旺盛，需要比一般猫咪更多的活动空间和玩具。" },
  { id:"sphynx", name:"无毛猫", nameEn:"Sphynx", icon:"🐱", breed:"斯芬克斯猫", rarity:3, personality:"热情、精力旺盛、喜欢表演", favoriteFood:"肉排", traits:["无毛","体温高","极其粘人"], desc:"外表酷似外星人的无毛猫，实际上性格极其热情友好。", careTips:"因为没有毛发保护，需要经常洗澡和保暖。冬天要给它穿小衣服。" },
  { id:"bengal", name:"豹猫", nameEn:"Bengal", icon:"🐆", breed:"孟加拉豹猫", rarity:4, personality:"野性、活跃、聪明绝顶", favoriteFood:"高级生鱼片", traits:["豹纹皮毛","运动能力强","会开门"], desc:"拥有野性豹纹的华丽猫咪，保留了部分野生基因，行动敏捷。", careTips:"需要大量运动空间和攀爬设施。非常聪明，甚至会自己开门，记得锁好贵重物品！" },
  { id:"calico", name:"三花猫", nameEn:"Calico", icon:"🐱", breed:"中华田园猫", rarity:2, personality:"傲娇、独立、捕鼠好手", favoriteFood:"鱼汤", traits:["三色毛发","几乎全是母猫","领地意识强"], desc:"黑白橘三色交织的漂亮猫咪，传说中招财猫的原型。", careTips:"独立性很强，不需要太多陪伴。但会主动帮你在家门口'巡逻'，是庭院的好守卫。" },
  { id:"maine_coon", name:"缅因猫", nameEn:"Maine Coon", icon:"🦁", breed:"缅因猫", rarity:4, personality:"温柔巨人、聪明、忠诚", favoriteFood:"海鲜浓汤", traits:["体型最大","性格温顺","喜欢水"], desc:"世界上体型最大的家猫品种之一，毛发蓬松如同小型狮子。", careTips:"需要大量食物和空间，但性格极其温顺。喜欢玩水，洗澡出奇地配合。猫中大型犬！" },
  { id:"neko_shiro", name:"小白猫", nameEn:"Little White", icon:"🐱", breed:"中华田园猫", rarity:1, personality:"乖巧、胆小、慢热", favoriteFood:"牛奶", traits:["全身雪白","声音轻柔","容易受惊"], desc:"纯白色的可爱小猫，是最初来到小镇时遇到的流浪猫。", tips:"通过新手引导任务免费获得。虽然初始胆小，但信任建立后会非常依赖你。" },
];

if (typeof module !== 'undefined' && module.exports) { module.exports = CATS_DB; }
