/**
 * Heartopia Guide — Tutorial Data with scene image cards
 * Replace .img-scene divs with <img src="real-screenshot.jpg"> when real screenshots are available
 */
const TUTORIALS_DB = [
  {
    id: "beginner-5day",
    title: "新手5天进阶指南：从萌新到镇长",
    titleEn: "5-Day Beginner Guide: From Newbie to Mayor",
    icon: "🎓", category: "beginner", difficulty: 1, readTime: "12 min",
    desc: "覆盖前5天全部关键节点：主线推进、资源规划、家园建设、金币积累，附最新礼包码。",
    descEn: "Complete 5-day roadmap with quest guide, resource planning, home building and gift codes.",
    tags: ["新手","开荒","主线","礼包码"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🏘️ 🌳 ☀️ 🕊️</span><span class="scene-label">心动小镇全景 — 中心广场与周边区域</span></div></div>
<h2>Day 1：打好基础</h2><p>紧跟主线任务走，首日即可解锁<strong>种植、烹饪、建造</strong>三大核心功能。注意3级升4级会触发猫咪任务，需等待次日刷新，期间可囤积木材和矿石。目标是第一天到达4级。</p>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📋 ✅ 🏠</span><span class="scene-label">主线任务界面 — 优先完成金色主线任务</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🏡 🌻 🚪</span><span class="scene-label">初始家园外观 — 4×4基础住宅</span></div></div></div>
<h2>Day 2-3：攒钱扩建</h2><p>完成至5级解锁家园扩建。核心目标是<strong>3天内攒够约6万金币的扩建费</strong>。地图彩色泡泡含金币、时装、稀有材料，是前期主要资源来源。高处的泡泡可踩摩托车长按跳跃键"大跳"获取。</p>
<h2>Day 4-5：爱好全面发展</h2><p>解锁钓鱼（找蓝头发NPC万尼亚）、捕虫（找安妮）、观鸟（去宠物店二楼找贝莉）。种植箱永不空置：在线种番茄（15分钟熟），离线改种小麦（4小时熟）。每天居民区固定刷新<strong>3个无瑕萤石和溜溜橡木</strong>，务必全部采集。</p>
<h2>最新礼包码</h2><ul><li><code>BABU2025</code>：3个特殊食材+2个维修盒+10个木材</li><li><code>HEART225</code>：10个染色膏+20个橘子</li><li><code>XDXZ666</code>：金币×18888+满愿星×150</li></ul>
<h2>新手避坑要点</h2><ul><li>❌ 10级前仅需4×4基础住宅，盲目扩建浪费资源</li><li>❌ 不要卖掉稀有材料——无瑕萤石、溜溜橡木后期会翻倍需求</li><li>❌ 不要忽视宠物前置任务——10级前完成养猫，否则12级无法解锁养狗</li><li>✅ 商人每天免费强制卖货记得按——0钻石帮你瞬间卖出2000金币</li></ul>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🏘️ 🌳 ☀️ 🕊️</span><span class="scene-label">Heartopia Town Panorama — Central Plaza & Surrounding Areas</span></div></div>
<h2>Day 1: Build Your Foundation</h2><p>Follow the main quest line closely. On your first day, unlock the <strong>farming, cooking, and building</strong> three core features. Note that level 3 to 4 triggers the cat quest which requires waiting for the next day's reset — use this time to stockpile wood and ore. Aim to reach level 4 on day one.</p>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📋 ✅ 🏠</span><span class="scene-label">Main Quest Interface — Prioritize gold-colored main quests</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🏡 🌻 🚪</span><span class="scene-label">Starting Home Exterior — 4×4 basic house</span></div></div></div>
<h2>Day 2-3: Save for Expansion</h2><p>Reach level 5 to unlock home expansion. Your core goal is <strong>to save roughly 60,000 gold for the expansion fee within 3 days</strong>. Map colored bubbles contain gold, fashion items, and rare materials — they are your main early-game resource source. For high-altitude bubbles, stand on your motorcycle and hold the jump button for a "super jump" to reach them.</p>
<h2>Day 4-5: Develop All Hobbies</h2><p>Unlock fishing (find blue-haired NPC Waniya), bug catching (find Annie), and birdwatching (go to pet shop 2F and find Bailey). Never leave planting boxes empty: plant tomatoes while online (15 min to mature), switch to wheat before going offline (4 hours). Every day, <strong>3 Flawless Fluorite and Slippery Oak Wood</strong> respawn in the residential area — be sure to collect them all.</p>
<h2>Latest Gift Codes</h2><ul><li><code>BABU2025</code>: 3 special ingredients + 2 repair kits + 10 wood</li><li><code>HEART225</code>: 10 dye pastes + 20 oranges</li><li><code>XDXZ666</code>: Gold ×18888 + Wish Stars ×150</li></ul>
<h2>Beginner Mistakes to Avoid</h2><ul><li>❌ Before level 10, a 4×4 basic house is sufficient — blindly expanding wastes resources</li><li>❌ Don't sell rare materials — Flawless Fluorite and Slippery Oak Wood will be in double demand later</li><li>❌ Don't neglect pet prerequisite quests — complete cat adoption before level 10, or you'll be locked out of dogs at level 12</li><li>✅ Always use the merchant's daily free forced sale — 0 diamonds instantly sells 2000 gold worth of goods</li></ul>`
  },
  {
    id: "fishing-complete",
    title: "钓鱼全图鉴攻略：98种鱼一网打尽",
    titleEn: "Complete Fishing Guide: All 98 Fish Species",
    icon: "🎣", category: "gameplay", difficulty: 3, readTime: "15 min",
    desc: "涵盖全部98种鱼类的分布位置、出现时间、天气条件和售价。附钓鱼操作技巧和快速升级方法。",
    descEn: "Full coverage of all 98 fish species with locations, times, weather conditions, and prices.",
    tags: ["钓鱼","图鉴","鱼类分布","赚钱"],
    content: `<div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🗺️ 🎣 🌊 📍</span><span class="scene-label">全地图钓鱼点分布 — 标注四大水域和最佳钓位</span></div></div>
<h2>钓鱼解锁</h2><p>找到<strong>万尼亚</strong>（蓝色头发NPC），完成她的初始任务（制作修理工具箱需要5个树枝），然后用<strong>爱好扩展券</strong>正式解锁钓鱼。扩展券在传承协会达到2级时获得。</p>
<h2>钓鱼操作技巧</h2><ul><li><strong>白色鱼线</strong>：安全，可持续卷线</li><li><strong>黄色鱼线</strong>：警告，减速或稍作停顿</li><li><strong>红色鱼线</strong>：危险，<strong>立即停止</strong>，否则断线</li></ul><p>鱼影越大通常鱼越稀有。使用<strong>诱鱼器和美人鱼香水</strong>能大幅提升效率。</p>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎣 ⚡ 🎯</span><span class="scene-label">钓鱼操作界面 — 注意鱼线颜色变化</span></div></div><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🐟 🐠 🦈</span><span class="scene-label">鱼影大小对比 — 越大越稀有</span></div></div></div>
<h2>海域鱼类（最赚钱）</h2><ul><li><strong>缓风海</strong>：玫鲹、北欧鳌龙虾、蓝鳍金枪鱼（彩虹天）</li><li><strong>东海</strong>：翻车鱼、虾虎鱼、细鳞绿鳍鱼（彩虹天）</li><li><strong>鲸鱼海</strong>：剑鱼（10级+彩虹天）、帝王蟹、大西洋鲑</li><li><strong>旧海</strong>：欧洲鲽、河鲀、锤头鲨（彩虹天）</li></ul>
<h2>湖泊鱼类</h2><ul><li><strong>城郊湖</strong>：荫鱼、斑条鳉鱼、白斑狗鱼（雨天/彩虹天）</li><li><strong>草原湖</strong>：金鱼（雨天/彩虹天）、鳟鱼、胡瓜鱼</li><li><strong>温泉山湖</strong>：蓝腮太阳鱼、杜父鱼（彩虹天）</li><li><strong>森林湖</strong>：蓝色北欧鳌虾、大珍珠蚌、北极红点鲑</li></ul>
<div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🏆 📊 🥇</span><span class="scene-label">钓鱼图鉴收集进度 — 全98种鱼收集完成获得黄金钓鱼勋章</span></div></div>
<h2>高价值鱼售价</h2><ul><li>传说锦鲤：2000+金币（午夜·秘密池塘）</li><li>剑鱼：600金币（10级+彩虹天）</li><li>蓝鳍金枪鱼：约1500金币（彩虹天）</li><li>帝王蟹：800+金币（夜间海床·海钓）</li></ul>`,
    contentEn: `<div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🗺️ 🎣 🌊 📍</span><span class="scene-label">Full Map Fishing Spot Distribution — Four major water regions and best fishing positions</span></div></div>
<h2>Unlocking Fishing</h2><p>Find <strong>Waniya</strong> (blue-haired NPC) and complete her initial quest (crafting a repair toolbox requires 5 branches), then use a <strong>Hobby Expansion Ticket</strong> to officially unlock fishing. Expansion tickets are obtained when the Heritage Association reaches level 2.</p>
<h2>Fishing Techniques</h2><ul><li><strong>White fishing line</strong>: Safe, keep reeling</li><li><strong>Yellow fishing line</strong>: Warning, slow down or pause briefly</li><li><strong>Red fishing line</strong>: Danger, <strong>stop immediately</strong> or the line will snap</li></ul><p>Larger fish shadows usually mean rarer fish. Use <strong>lures and Mermaid Perfume</strong> to dramatically boost efficiency.</p>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎣 ⚡ 🎯</span><span class="scene-label">Fishing Interface — Watch the line color changes carefully</span></div></div><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🐟 🐠 🦈</span><span class="scene-label">Fish Shadow Size Comparison — Larger = more rare</span></div></div></div>
<h2>Ocean Fish (Most Profitable)</h2><ul><li><strong>Gentle Breeze Sea</strong>: Rose Trevally, Norway Lobster, Bluefin Tuna (Rainbow Day)</li><li><strong>East Sea</strong>: Ocean Sunfish, Goby, Spiny Greenling (Rainbow Day)</li><li><strong>Whale Sea</strong>: Swordfish (Level 10+ & Rainbow Day), King Crab, Atlantic Salmon</li><li><strong>Old Sea</strong>: European Plaice, Pufferfish, Hammerhead Shark (Rainbow Day)</li></ul>
<h2>Lake Fish</h2><ul><li><strong>Suburban Lake</strong>: Shadow Fish, Striped Killifish, Northern Pike (Rain/Rainbow Day)</li><li><strong>Grassland Lake</strong>: Goldfish (Rain/Rainbow Day), Trout, Smelt</li><li><strong>Hot Spring Mountain Lake</strong>: Bluegill Sunfish, Sculpin (Rainbow Day)</li><li><strong>Forest Lake</strong>: Blue Norway Lobster, Giant Pearl Clam, Arctic Char</li></ul>
<div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🏆 📊 🥇</span><span class="scene-label">Fishing Collection Progress — Complete all 98 species to earn the Golden Fishing Badge</span></div></div>
<h2>High-Value Fish Prices</h2><ul><li>Legendary Koi: 2000+ gold (Midnight · Secret Pond)</li><li>Swordfish: 600 gold (Level 10+ & Rainbow Day)</li><li>Bluefin Tuna: ~1500 gold (Rainbow Day)</li><li>King Crab: 800+ gold (Night Sea Floor · Ocean Fishing)</li></ul>`
  },
  {
    id: "cooking-profit",
    title: "烹饪暴利攻略：日入2万金币的秘密",
    titleEn: "Cooking Profit Guide: 20K Gold Per Day",
    icon: "🍳", category: "gameplay", difficulty: 2, readTime: "10 min",
    desc: "从草莓果酱到英式下午茶，完整烹饪升级路线。含暴利配方、食材管理和无限体力技巧。",
    descEn: "Complete cooking leveling route with profit recipes, ingredient management, and infinite stamina tricks.",
    tags: ["烹饪","赚钱","食谱","体力"],
    content: `<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🍳 🔥 🍲</span><span class="scene-label">品字形灶台布局 — 不转视角同时做3锅</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🍓 📊 💰</span><span class="scene-label">草莓果酱配方 — 利润率超800%</span></div></div></div>
<h2>烹饪升级路线</h2><ul><li><strong>前期</strong>：采集蓝莓/树莓做果酱；种土豆+钓鱼做炸鱼薯条（低成本练级）</li><li><strong>中期</strong>：厨师处买牛奶+咖啡豆做<strong>拿铁咖啡</strong>；能做提拉米苏就主做提拉米苏</li><li><strong>后期</strong>：烹饪7级解锁<strong>英式下午茶</strong>（提拉米苏+蓝莓），实现无限体力——吃3份剩1份原价卖出</li></ul>
<h2>暴利配方排行</h2><ul><li>🥇 <strong>草莓果酱</strong>：4草莓(成本约40) → 售价375金币，利润率超<strong>8倍</strong></li><li>🥈 <strong>清蒸帝王蟹</strong>：3帝王蟹+黄油 → 售价850金币</li><li>🥉 <strong>乡村炖菜</strong>：番茄+土豆+生菜 → 250金币/份</li><li>🏅 <strong>香煎鲫鱼</strong>：10条鲫鱼 → 350金币/份</li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">☕ 🍰 ✨</span><span class="scene-label">英式下午茶 — 7级解锁，实现无限体力循环的关键料理</span></div></div>
<h2>核心烹饪技巧</h2><ul><li>灶台摆成<strong>品字形</strong>，不转视角同时做3锅（最多4锅）</li><li>高星作物直接卖掉，低星拿去做烹饪</li><li>每天厨师的咖啡、牛奶、鸡蛋、奶酪<strong>全部买满</strong></li><li>2星以上食材直接卖（售价翻倍），1星做烹饪</li></ul>
<h2>赚钱效率对比</h2><p>烹饪 ＞ 钓鱼 ＞ 园艺 ＞ 观鸟 ＝ 捕虫 ＞ 养猫。优先冲到烹饪10级，是游戏中最快的赚钱方式。</p>`,
    contentEn: `<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🍳 🔥 🍲</span><span class="scene-label">Triangle Stove Layout — Cook 3 pots simultaneously without turning the camera</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🍓 📊 💰</span><span class="scene-label">Strawberry Jam Recipe — Profit margin exceeding 800%</span></div></div></div>
<h2>Cooking Leveling Route</h2><ul><li><strong>Early game</strong>: Gather blueberries/raspberries to make jam; grow potatoes + fish for Fish & Chips (low-cost leveling)</li><li><strong>Mid game</strong>: Buy milk + coffee beans from the chef to make <strong>Caffe Latte</strong>; once you can make Tiramisu, focus on that</li><li><strong>Late game</strong>: At cooking level 7, unlock <strong>English Afternoon Tea</strong> (Tiramisu + Blueberries), achieving infinite stamina — eat 3 portions, sell 1 at original price</li></ul>
<h2>Top Profit Recipes</h2><ul><li>🥇 <strong>Strawberry Jam</strong>: 4 strawberries (cost ~40g) → sells for 375 gold, profit margin over <strong>8x</strong></li><li>🥈 <strong>Steamed King Crab</strong>: 3 King Crabs + Butter → sells for 850 gold</li><li>🥉 <strong>Country Stew</strong>: Tomato + Potato + Lettuce → 250 gold per serving</li><li>🏅 <strong>Pan-Fried Crucian Carp</strong>: 10 Crucian Carp → 350 gold per serving</li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">☕ 🍰 ✨</span><span class="scene-label">English Afternoon Tea — Unlocked at level 7, the key dish for achieving infinite stamina loop</span></div></div>
<h2>Core Cooking Tips</h2><ul><li>Arrange stoves in a <strong>triangle formation</strong> to cook 3 pots (max 4) simultaneously without turning the camera</li><li>Sell high-star crops directly, use low-star ones for cooking</li><li>Buy out the chef's <strong>coffee, milk, eggs, and cheese every single day</strong></li><li>2-star and above ingredients sell directly (double price), 1-star for cooking</li></ul>
<h2>Profit Efficiency Comparison</h2><p>Cooking > Fishing > Gardening > Birdwatching = Bug Catching > Cat Raising. Prioritize reaching cooking level 10 — it's the fastest way to make gold in the game.</p>`
  },
  {
    id: "garden-strategy",
    title: "园艺种植策略：从零到30个种植箱",
    titleEn: "Gardening Strategy: Zero to 30 Planting Boxes",
    icon: "🌷", category: "gameplay", difficulty: 1, readTime: "8 min",
    desc: "园艺7级解锁30个种植箱的完整路线。含作物选择、种植节奏和自动洒水器获取技巧。",
    descEn: "Complete roadmap to unlock 30 planting boxes at gardening level 7 with crop selection and planting rhythm.",
    tags: ["园艺","种植","作物","洒水器"],
    content: `<div class="tutorial-img scene-farm"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌱 📦 🌿</span><span class="scene-label">30个种植箱布局 — 按3的倍数排列以匹配洒水范围</span></div></div>
<h2>优先升级目标</h2><p>强烈建议<strong>冲到7级</strong>——解锁30个种植箱，烹饪食材来源极大提升。3/6/9级扩大浇水范围至3/6/9格，种植箱按<strong>3的倍数摆放</strong>效率最高。</p>
<h2>种植节奏表</h2><ul><li><strong>在线时</strong>：番茄(15分钟)、菠萝(30分钟)——快熟高收益</li><li><strong>碎片时间</strong>：胡萝卜(2小时)、小麦(4小时)、草莓(6小时)——省心省力</li><li><strong>睡前</strong>：生菜(8小时)、玉米(12小时)——睡醒刚好成熟</li></ul>
<div class="img-row"><div class="tutorial-img scene-farm"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🍅 ⏱️ 💰</span><span class="scene-label">番茄 — 15分钟成熟，在线种植首选</span></div></div><div class="tutorial-img scene-farm"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">💧 ⚙️ ⏰</span><span class="scene-label">自动洒水器 — 协会15级解锁，每日省30分钟</span></div></div></div>
<h2>核心技巧</h2><ul><li>快速收菜：站地块中间，<strong>快速点击采摘+跳跃</strong>取消后摇</li><li>肥料优先做<strong>绿色肥料</strong>，红色肥料土壤极为稀有，建议攒起来冲星时使用</li><li>每天采集4棵大树（2小时刷新），获得普通/优质/珍稀木材</li></ul>`,
    contentEn: `<div class="tutorial-img scene-farm"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌱 📦 🌿</span><span class="scene-label">30 Planting Box Layout — Arrange in multiples of 3 to match sprinkler range</span></div></div>
<h2>Priority Upgrade Target</h2><p>Strongly recommend <strong>rushing to level 7</strong> — unlocks 30 planting boxes, greatly boosting cooking ingredient supply. At levels 3/6/9, watering range expands to 3/6/9 tiles. Arrange planting boxes in <strong>multiples of 3</strong> for maximum efficiency.</p>
<h2>Planting Rhythm Table</h2><ul><li><strong>While online</strong>: Tomato (15 min), Pineapple (30 min) — fast maturity, high yield</li><li><strong>Short sessions</strong>: Carrot (2 hr), Wheat (4 hr), Strawberry (6 hr) — low maintenance</li><li><strong>Before bed</strong>: Lettuce (8 hr), Corn (12 hr) — ready when you wake up</li></ul>
<div class="img-row"><div class="tutorial-img scene-farm"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🍅 ⏱️ 💰</span><span class="scene-label">Tomato — 15 minutes to mature, top choice for online planting</span></div></div><div class="tutorial-img scene-farm"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">💧 ⚙️ ⏰</span><span class="scene-label">Auto Sprinkler — Unlocked at Association level 15, saves 30 minutes daily</span></div></div></div>
<h2>Core Techniques</h2><ul><li>Fast harvesting: Stand in the center of plots and <strong>rapidly tap harvest + jump</strong> to cancel the recovery animation</li><li>Prioritize making <strong>Green Fertilizer</strong> first; Red Fertilizer soil is extremely rare — save it for star-raising sessions</li><li>Gather from 4 large trees daily (2-hour respawn) to obtain normal/quality/rare wood</li></ul>`
  },
  {
    id: "home-building",
    title: "房屋建造黄金规划：6块地打造梦想家园",
    titleEn: "Home Building Guide: 6-Plot Dream Home",
    icon: "🏠", category: "gameplay", difficulty: 2, readTime: "10 min",
    desc: "6块地黄金布局方案，含主题风格推荐、染色技巧和低成本装饰搭配。",
    descEn: "Optimal 6-plot layout plans with theme style recommendations, dyeing techniques, and budget decoration.",
    tags: ["建造","家园","装修","布局"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📐 🏠 🌳</span><span class="scene-label">6块地黄金规划俯瞰图 — 住宅区/庭院/农场/社交花园分区示意</span></div></div>
<h2>基础要点</h2><ul><li>建造需先开地，<strong>最少6块地</strong></li><li><strong>学会用蓝图</strong>！蓝图建好直接套用，可整体后移/平移</li><li>墙面、地面、天花板、门窗均可染色</li><li>限高8米（约3层楼），承重有上限</li></ul>
<h2>6块地黄金规划</h2><ul><li><strong>2块→核心住宅区</strong>：一楼厨房+客厅，二楼卧室+书桌</li><li><strong>1块→过渡庭院</strong>：鞋柜、快递箱、青石板路+门廊</li><li><strong>1块→迷你农场</strong>：4×4网格，中后期加自动洒水器</li><li><strong>1块→社交花园</strong>：草坪+折叠长桌+烧烤架</li><li><strong>1块→灵活备用</strong>：工具棚+宠物房，后期可改造</li></ul>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🏡 🌾 🌸</span><span class="scene-label">田园风住宅 — 晨光湖畔红木花架+吊床秋千</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌲 ✨ 🎵</span><span class="scene-label">森系风住宅 — 林间地块星空地毯+复古唱片机</span></div></div></div>
<h2>低成本装饰搭配</h2><ul><li><strong>客厅</strong>：藤编沙发（200金币图纸）+复古唱片机（任务奖励）</li><li><strong>庭院</strong>：番茄×10解锁壁挂花篮+萤火虫灯笼</li><li><strong>露台</strong>：钓鱼大赛星空灯（限定）</li></ul>
<h2>建造避坑</h2><ul><li>10级前仅搭4×4基础住宅，过度扩建浪费资源</li><li>优先选带门矮栅栏划分区域</li><li>每个区域装1盏感应灯（夜间自动亮）</li></ul>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📐 🏠 🌳</span><span class="scene-label">6-Plot Golden Layout Overhead View — Residential / Courtyard / Farm / Social Garden zones</span></div></div>
<h2>Basic Points</h2><ul><li>Building requires opening land first — <strong>minimum 6 plots</strong></li><li><strong>Learn to use blueprints</strong>! Once built, blueprints can be applied directly and moved/translated as a whole</li><li>Walls, floors, ceilings, doors, and windows can all be dyed</li><li>Height limit 8 meters (about 3 floors), weight-bearing has an upper limit</li></ul>
<h2>6-Plot Golden Layout</h2><ul><li><strong>2 plots → Core residential area</strong>: First floor kitchen + living room, second floor bedroom + desk</li><li><strong>1 plot → Transitional courtyard</strong>: Shoe cabinet, delivery box, bluestone path + porch</li><li><strong>1 plot → Mini farm</strong>: 4×4 grid, add auto sprinkler in mid-to-late game</li><li><strong>1 plot → Social garden</strong>: Lawn + folding long table + BBQ grill</li><li><strong>1 plot → Flexible spare</strong>: Tool shed + pet room, can be renovated later</li></ul>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🏡 🌾 🌸</span><span class="scene-label">Rustic Style Home — Morning Light Lakeside with redwood flower rack + hammock swing</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌲 ✨ 🎵</span><span class="scene-label">Forest Style Home — Forest plot with starry carpet + vintage record player</span></div></div></div>
<h2>Budget Decoration Tips</h2><ul><li><strong>Living room</strong>: Rattan Sofa (200 gold blueprint) + Vintage Record Player (quest reward)</li><li><strong>Courtyard</strong>: Tomato ×10 unlocks wall-mounted flower basket + Firefly Lantern</li><li><strong>Terrace</strong>: Fishing Contest Starry Sky Lamp (limited edition)</li></ul>
<h2>Building Pitfalls</h2><ul><li>Before level 10, only build a 4×4 basic house — excessive expansion wastes resources</li><li>Prioritize low fence sections with gates to divide areas</li><li>Install 1 motion-sensor light per zone (auto-on at night)</li></ul>`
  },
  {
    id: "npcs-guide",
    title: "NPC好感度完全指南：送礼、心情与挚友攻略",
    titleEn: "Complete NPC Friendship Guide",
    icon: "👥", category: "gameplay", difficulty: 2, readTime: "12 min",
    desc: "10+位NPC的送礼偏好、好感度等级奖励、心情系统和快速提升技巧。",
    descEn: "Gift preferences, friendship level rewards, mood system, and fast-raising tips for 10+ NPCs.",
    tags: ["NPC","好感度","送礼","社交"],
    content: `<div class="img-row"><div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎁 💝 💬</span><span class="scene-label">送礼界面 — 选对礼物事半功倍</span></div></div><div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📊 ⭐ 🏆</span><span class="scene-label">好感度等级表 — 从点头之交到挚友</span></div></div></div>
<h2>好感度等级与奖励</h2><ul><li><strong>点头之交</strong>：基础商店折扣，标准对话</li><li><strong>朋友</strong>：10%商店折扣，解锁个人任务</li><li><strong>亲密朋友</strong>：20%折扣，专属道具，家访邀请（需20-30天）</li><li><strong>挚友</strong>：30%折扣，稀有蓝图，特殊照片（需40-60天）</li></ul>
<h2>送礼等级与心情影响</h2><ul><li>❤️ <strong>最爱</strong>：+15~20心情点数（专属挚爱物品）</li><li>👍 <strong>喜欢</strong>：+5~10心情点数（品类偏好）</li><li>👎 <strong>讨厌</strong>：-15~20心情点数（与价值观严重冲突）</li></ul>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎂 🗓️ 🎉</span><span class="scene-label">NPC生日日历 — 生日当天送礼三倍好感度加成</span></div></div>
<h2>关键NPC送礼偏好</h2><ul><li><strong>安德鲁</strong>（赛车服胡子NPC）→ 送花💐，好感度达到一定等级送汽车🚗</li><li><strong>阿尔伯特</strong>（金币商人）→ 喜欢咖啡豆和稀有宝石，送鱼/花效果差</li><li><strong>贝莉</strong>（观鸟导师·宠物店二楼）→ 喜欢鸟食和摄影器材</li><li><strong>奥克</strong>（每天提供橡木木材）→ 喜欢直接、有帮助的对话</li></ul>
<h2>快速提升技巧</h2><ul><li>每日拜访即使不送礼也能贡献少量好感度</li><li>在NPC最喜欢的3-4个礼物之间轮换保持新鲜感</li><li>每天专注3-4个NPC高质量互动比广撒网效率更高</li><li>用自己烹饪的食物、钓的鱼、种的花送礼——整合爱好资源</li></ul>`,
    contentEn: `<div class="img-row"><div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎁 💝 💬</span><span class="scene-label">Gift-Giving Interface — Choosing the right gift yields twice the results</span></div></div><div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📊 ⭐ 🏆</span><span class="scene-label">Friendship Level Chart — From Acquaintance to Best Friend</span></div></div></div>
<h2>Friendship Levels & Rewards</h2><ul><li><strong>Acquaintance</strong>: Basic shop discount, standard dialogue</li><li><strong>Friend</strong>: 10% shop discount, unlocks personal quests</li><li><strong>Close Friend</strong>: 20% discount, exclusive items, home visit invitations (takes 20-30 days)</li><li><strong>Best Friend</strong>: 30% discount, rare blueprints, special photos (takes 40-60 days)</li></ul>
<h2>Gift Tiers & Mood Effects</h2><ul><li>❤️ <strong>Loved</strong>: +15~20 mood points (exclusive beloved items)</li><li>👍 <strong>Liked</strong>: +5~10 mood points (category preferences)</li><li>👎 <strong>Disliked</strong>: -15~20 mood points (seriously conflicts with values)</li></ul>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎂 🗓️ 🎉</span><span class="scene-label">NPC Birthday Calendar — Gifts given on birthdays earn triple friendship points</span></div></div>
<h2>Key NPC Gift Preferences</h2><ul><li><strong>Andrew</strong> (racing suit + beard NPC) → Give flowers 💐, at certain friendship level gives you a car 🚗</li><li><strong>Albert</strong> (gold merchant) → Likes coffee beans and rare gemstones; fish/flowers have poor effect</li><li><strong>Bailey</strong> (birdwatching mentor · Pet Shop 2F) → Likes bird food and photography equipment</li><li><strong>Oak</strong> (provides oak wood daily) → Likes direct, helpful dialogue</li></ul>
<h2>Quick Tips</h2><ul><li>Daily visits contribute a small amount of friendship even without gifts</li><li>Rotate between an NPC's 3-4 favorite gifts to maintain freshness</li><li>Focusing on 3-4 NPCs with high-quality interaction daily is more efficient than casting a wide net</li><li>Use your own cooked food, caught fish, and grown flowers as gifts — integrate your hobby resources</li></ul>`
  },
  {
    id: "bug-catching",
    title: "捕虫全图鉴攻略：从入门到12级大师",
    titleEn: "Complete Bug Catching Guide: Beginner to Level 12 Master",
    icon: "🪲", category: "gameplay", difficulty: 2, readTime: "10 min",
    desc: "捕虫解锁条件、操作技巧、11-12级高级虫类分布表和动物潮流季限定虫捕捉攻略。",
    descEn: "Bug catching unlock conditions, techniques, level 11-12 advanced insect distribution, and limited event capture guide.",
    tags: ["捕虫","昆虫","图鉴","稀有"],
    content: `<div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🪲 🎯 🌿</span><span class="scene-label">捕虫操作示意 — 轻按直接捕捉，长按蓄力远程发射泡泡陷阱</span></div></div>
<h2>解锁条件</h2><p>主线剧情到达5-7级后，找NPC<strong>安妮</strong>聊聊解锁爱好。然后去<strong>浪花花园</strong>找浪花接任务，抓萤火虫即可正式解锁。</p>
<h2>捕虫操作技巧</h2><ul><li>靠近虫子<strong>轻按捕虫键</strong>直接捕捉</li><li>虫子飞走时<strong>长按蓄力</strong>发射泡泡陷阱远程抓捕</li><li>提升捕虫等级解锁更高品质虫子</li></ul>
<div class="img-row"><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🦋 🌸 ☀️</span><span class="scene-label">亚历山大凤蝶 — 城郊湖周围 18-6点</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🪲 🌲 🌙</span><span class="scene-label">南洋大兜虫 — 森林灵像松林树干 12-6点</span></div></div></div>
<h2>11-12级高级虫类分布</h2><ul><li><strong>小十三星瓢虫</strong>：花田-鲸鱼山草丛（12-24点）</li><li><strong>亚历山大凤蝶</strong>：城郊湖周围（18-6点）</li><li><strong>兰花螳螂</strong>：温泉山-遗迹（6-18点）</li><li><strong>歌利亚大王花金龟</strong>：森林-小鹿塔树干（18-6点）</li></ul>
<h2>速刷经验技巧</h2><ul><li>使用<strong>诱虫器+强化剂+彩虹花束+维修箱</strong>组合</li><li>温泉山触发"引虫出洞"事件，组队刷效率翻倍</li><li>晚上光线暗时更容易发现发光虫类</li></ul>`,
    contentEn: `<div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🪲 🎯 🌿</span><span class="scene-label">Bug Catching Controls — Tap to catch directly, hold to charge and launch a bubble trap from range</span></div></div>
<h2>Unlock Conditions</h2><p>After the main storyline reaches level 5-7, find NPC <strong>Annie</strong> to chat and unlock the hobby. Then go to <strong>Namiwa Garden</strong> to find Namiwa for a quest — catch fireflies to officially unlock.</p>
<h2>Bug Catching Techniques</h2><ul><li>Approach the bug and <strong>tap the catch button</strong> to capture directly</li><li>When the bug flies away, <strong>hold to charge</strong> and launch a bubble trap for long-range capture</li><li>Level up bug catching to unlock higher-quality insects</li></ul>
<div class="img-row"><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🦋 🌸 ☀️</span><span class="scene-label">Alexandria Swallowtail — Around Suburban Lake, 18:00-06:00</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🪲 🌲 🌙</span><span class="scene-label">Atlas Beetle — Forest Spirit Oak Pine trunk, 12:00-06:00</span></div></div></div>
<h2>Level 11-12 Advanced Insects</h2><ul><li><strong>Thirteen-Spot Ladybug</strong>: Flower Field - Whale Mountain grass (12:00-24:00)</li><li><strong>Alexandria Swallowtail</strong>: Around Suburban Lake (18:00-06:00)</li><li><strong>Orchid Mantis</strong>: Hot Spring Mountain - Ruins (06:00-18:00)</li><li><strong>Goliath Beetle</strong>: Forest - Fawn Tower tree trunks (18:00-06:00)</li></ul>
<h2>Fast XP Tips</h2><ul><li>Use <strong>Lure + Enhancer + Rainbow Bouquet + Repair Kit</strong> combo</li><li>Trigger the "Lure Insects Out" event at Hot Spring Mountain — squad up for doubled efficiency</li><li>Glowing insects are easier to spot in low light at night</li></ul>`
  },
  {
    id: "birdwatching",
    title: "观鸟五星攻略：从知更鸟到火烈鸟",
    titleEn: "Birdwatching 5-Star Guide: From Robin to Flamingo",
    icon: "🐦", category: "gameplay", difficulty: 2, readTime: "10 min",
    desc: "观鸟解锁方式、各区域鸟类分布速查表、五星照片拍摄条件和最佳道具使用技巧。",
    descEn: "Birdwatching unlock method, regional bird distribution, 5-star photo conditions, and best tool usage tips.",
    tags: ["观鸟","鸟类","图鉴","拍照"],
    content: `<div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📸 🐦 🎯</span><span class="scene-label">五星照片拍摄示意 — 取景框中央，距离3-4米，捕捉特殊动作</span></div></div>
<h2>解锁方式</h2><p>找NPC<strong>贝莉</strong>（位于<strong>宠物店二楼</strong>），提交爱好拓展券即可解锁。初始任务引导扫描知更鸟。</p>
<h2>拍摄五星照片条件</h2><ul><li>观鸟等级需达到<strong>6级</strong></li><li>把鸟放在取景框中央，距离保持<strong>3-4米</strong>（火烈鸟/鸮/隼类需4米）</li><li>拍摄鸟类<strong>特殊动作</strong>：展翅、伸脖子、转头等</li></ul>
<div class="img-row"><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🔭 🎵 ⏱️</span><span class="scene-label">自动鸟哨 — 观鸟4级解锁，3分钟内鸟类频繁做动作</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌿 👥 🔒</span><span class="scene-label">伪装草丛 — 观鸟6级解锁，不惊动鸟类可共享12人</span></div></div></div>
<h2>各区域鸟类分布速查</h2><ul><li><strong>森林</strong>：巨地鸠、鹪鹩、松雀 → 稀有：红隼、雕鸮、雪鸮、铜蓝鸽</li><li><strong>渔村</strong>：斑皇鸠、五子雀 → 稀有：圣米格尔雀、蓝脚鲣鸟</li><li><strong>温泉山</strong>：大山雀、文须雀 → 稀有：长耳鸮、游隼、红脚隼</li><li><strong>花田</strong>：苍头燕雀、红颈绿鸠 → 稀有：美洲火烈鸟、北极海鸥</li></ul>`,
    contentEn: `<div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📸 🐦 🎯</span><span class="scene-label">5-Star Photo Shooting Guide — Center the bird in the frame, 3-4m distance, capture special actions</span></div></div>
<h2>Unlock Method</h2><p>Find NPC <strong>Bailey</strong> (located on the <strong>Pet Shop 2nd Floor</strong>) and submit a Hobby Expansion Ticket to unlock. The initial quest guides you to scan a robin.</p>
<h2>5-Star Photo Conditions</h2><ul><li>Birdwatching level must reach <strong>level 6</strong></li><li>Center the bird in the viewfinder, maintain a distance of <strong>3-4 meters</strong> (flamingos/owls/falcons require 4 meters)</li><li>Capture the bird's <strong>special actions</strong>: spreading wings, stretching neck, turning head, etc.</li></ul>
<div class="img-row"><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🔭 🎵 ⏱️</span><span class="scene-label">Auto Bird Whistle — Unlocked at birdwatching level 4, birds perform actions frequently for 3 minutes</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌿 👥 🔒</span><span class="scene-label">Camouflage Grass — Unlocked at birdwatching level 6, won't scare birds, shareable with up to 12 people</span></div></div></div>
<h2>Regional Bird Distribution Quick Reference</h2><ul><li><strong>Forest</strong>: Giant Ground Dove, Wren, Pine Grosbeak → Rare: Common Kestrel, Eagle Owl, Snowy Owl, Copper-Blue Pigeon</li><li><strong>Fishing Village</strong>: Spotted Imperial Pigeon, Nuthatch → Rare: San Miguel Sparrow, Blue-Footed Booby</li><li><strong>Hot Spring Mountain</strong>: Great Tit, Bearded Reedling → Rare: Long-Eared Owl, Peregrine Falcon, Red-Footed Falcon</li><li><strong>Flower Field</strong>: Chaffinch, Pink-Necked Green Pigeon → Rare: American Flamingo, Arctic Tern</li></ul>`
  },
  {
    id: "daily-money",
    title: "每日必做清单与高效赚钱路线",
    titleEn: "Daily Checklist & Efficient Gold Routes",
    icon: "💰", category: "gameplay", difficulty: 1, readTime: "8 min",
    desc: "整理每日必做的10件事，含时间节点提醒和最优赚钱路线规划。坚持执行日入2万+。",
    descEn: "10 daily must-do tasks with time reminders and optimal gold farming route planning.",
    tags: ["每日","赚钱","清单","效率"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📅 ⏰ 📋</span><span class="scene-label">每日时间线 — 从清晨6点到深夜22点的完整日程规划</span></div></div>
<h2>每日必做清单</h2><ol><li>采集<strong>溜溜木、无瑕萤石</strong>（每天刷新，高级家具必备）</li><li>完成发展家5个任务（解锁地块、爱好升级券）</li><li><strong>12:00 & 21:00</strong>海钓（10分钟内赶到）</li><li>种植箱永不空置：在线番茄/下线小麦</li><li>周六集齐15个紫色泡泡（限定时装）</li><li>22:00后找夜游商人买神秘种子</li><li>商人每天免费强制卖货——0钻石瞬卖2000金币</li><li>拜访3-4个重点NPC送礼提升好感度</li><li>每天采集4棵大树（2小时刷新）</li><li>喂动物食槽（动物新邻季）</li></ol>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🚢 🎣 👥</span><span class="scene-label">海钓组队 — 约4-5位好友租船，使用彩虹花束+鱼尾+香水</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">😴 🏠 💚</span><span class="scene-label">借宿恢复体力 — 点击别人家红色房屋，每5秒恢复1点</span></div></div></div>
<h2>赚钱黄金时段</h2><ul><li><strong>清晨6-8点</strong>：琥珀湾钓彩虹鱼，单条200-500金币</li><li><strong>傍晚18-20点</strong>：深海区钓帝王蟹，单只利润超800金币</li><li><strong>彩虹天全天</strong>：全力钓鱼！剑鱼、蓝鳍金枪鱼、锤头鲨限时出现</li></ul>
<h2>体力零成本管理</h2><ul><li>体力＜20时点击别人家的红色房屋<strong>借宿</strong>，每5秒恢复1点，每天免费满血3次</li><li>背包常备果酱应急补充</li><li>遍历地图捡取状态泡泡可恢复20体力</li></ul>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📅 ⏰ 📋</span><span class="scene-label">Daily Timeline — Complete schedule from 6 AM to 10 PM</span></div></div>
<h2>Daily Must-Do List</h2><ol><li>Collect <strong>Slippery Oak Wood, Flawless Fluorite</strong> (daily respawn, essential for advanced furniture)</li><li>Complete 5 Developer Guild tasks (unlock plots, hobby upgrade tickets)</li><li><strong>12:00 & 21:00</strong> Ocean fishing (arrive within 10 minutes)</li><li>Never leave planting boxes empty: tomatoes while online / wheat while offline</li><li>On Saturday, collect all 15 purple bubbles (limited fashion items)</li><li>After 22:00, find the Night Merchant to buy mysterious seeds</li><li>Merchant daily free forced sale — 0 diamonds instantly sells 2000 gold</li><li>Visit 3-4 key NPCs to give gifts and raise friendship</li><li>Gather from 4 large trees daily (2-hour respawn)</li><li>Feed animal troughs (Animal Neighbor Season)</li></ol>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🚢 🎣 👥</span><span class="scene-label">Ocean Fishing Squad — Gather 4-5 friends to rent a boat, use Rainbow Bouquet + Fish Tail + Perfume</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">😴 🏠 💚</span><span class="scene-label">House-Borrowing for Stamina Recovery — Click a red house to rest, recovers 1 stamina per 5 seconds</span></div></div></div>
<h2>Prime Gold Farming Times</h2><ul><li><strong>Early morning 6-8 AM</strong>: Amber Bay rainbow fish, 200-500 gold each</li><li><strong>Evening 6-8 PM</strong>: Deep sea King Crab fishing, over 800 gold profit each</li><li><strong>Rainbow Day all day</strong>: Go all out on fishing! Swordfish, Bluefin Tuna, and Hammerhead Shark appear with limited-time availability</li></ul>
<h2>Zero-Cost Stamina Management</h2><ul><li>When stamina is below 20, click on someone else's red house to <strong>rest</strong> — recovers 1 stamina per 5 seconds, free full heal up to 3 times daily</li><li>Keep jam in your backpack for emergency replenishment</li><li>Roam the map and pick up status bubbles that can restore 20 stamina</li></ul>`
  },
  {
    id: "seasonal-events",
    title: "季节活动完全攻略：春野令·星河庆典·动物新邻季",
    titleEn: "Complete Seasonal Event Guide",
    icon: "🎉", category: "events", difficulty: 1, readTime: "10 min",
    desc: "2025年三大季节活动详细攻略：春野令限定虫捕捉位置、星河庆典萤火虫分布、动物新邻季好感度。",
    descEn: "Detailed guides for 2025's three major seasonal events with limited item locations and affection strategies.",
    tags: ["活动","季节","限定","奖励"],
    content: `<div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌸 🎊 🦋</span><span class="scene-label">春野令活动主视觉 — 限定昆虫和时装一览</span></div></div>
<h2>🌸 春野令活动</h2><p><strong>限定虫捕捉位置：</strong></p><ul><li><strong>棒棒糖饱藏蜻蜓</strong>：草原湖（水边+草丛）全天全天气</li><li><strong>蝴蝶酥饱藏蝴蝶</strong>：花田-风车花田 全天全天气</li><li><strong>果冻饱藏萤火虫</strong>：花田-风车花田（草丛+花丛）全天全天气</li><li><strong>泡芙饱藏瓢虫</strong>：花田-鲸鱼山（空中+草丛）全天全天气</li><li><strong>蛋糕卷饱藏蜗牛</strong>：花田-鲸鱼山（地面+草地）全天全天气</li></ul>
<div class="img-row"><div class="tutorial-img scene-night"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">✨ 🏮 🌌</span><span class="scene-label">星河庆典萤火虫 — 五种颜色分布在五个区域</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🐼 🎋 💕</span><span class="scene-label">熊猫互动 — 森林岛熊猫滑梯附近，每日投喂3次</span></div></div></div>
<h2>✨ 引星河庆典</h2><p>各色萤火虫位置：</p><ul><li><strong>紫光萤火虫</strong>：花田-风车花田</li><li><strong>蓝光萤火虫</strong>：渔村广场</li><li><strong>绿光萤火虫</strong>：森林-灵橡松林</li><li><strong>粉光萤火虫</strong>：温泉山温泉附近</li><li><strong>黄光萤火虫</strong>：神秘事件随机触发</li></ul>
<h2>🐼 动物新邻季</h2><ul><li>一共8只动物，先找饲养员接任务</li><li>找到每个动物的<strong>食槽</strong>才会在功能里显示</li><li>动物<strong>好感4级</strong>后可触发家园拜访，获得赠礼</li></ul>`,
    contentEn: `<div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌸 🎊 🦋</span><span class="scene-label">Spring Wild Event Main Visual — Limited insects and fashion items overview</span></div></div>
<h2>🌸 Spring Wild Event</h2><p><strong>Limited Bug Capture Locations:</strong></p><ul><li><strong>Lollipop Dragonfly</strong>: Grassland Lake (near water + grass) All day, all weather</li><li><strong>Butterfly Pastry Butterfly</strong>: Flower Field - Windmill Flower Field, All day, all weather</li><li><strong>Jelly Firefly</strong>: Flower Field - Windmill Flower Field (grass + flower bushes) All day, all weather</li><li><strong>Cream Puff Ladybug</strong>: Flower Field - Whale Mountain (air + grass) All day, all weather</li><li><strong>Cake Roll Snail</strong>: Flower Field - Whale Mountain (ground + grass) All day, all weather</li></ul>
<div class="img-row"><div class="tutorial-img scene-night"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">✨ 🏮 🌌</span><span class="scene-label">Star River Celebration Fireflies — Five colors across five regions</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🐼 🎋 💕</span><span class="scene-label">Panda Interaction — Near Forest Island panda slide, feed 3 times daily</span></div></div></div>
<h2>✨ Star River Celebration</h2><p>Firefly Color Locations:</p><ul><li><strong>Purple Glow Firefly</strong>: Flower Field - Windmill Flower Field</li><li><strong>Blue Glow Firefly</strong>: Fishing Village Square</li><li><strong>Green Glow Firefly</strong>: Forest - Spirit Oak Pine Forest</li><li><strong>Pink Glow Firefly</strong>: Hot Spring Mountain - near hot springs</li><li><strong>Yellow Glow Firefly</strong>: Randomly triggered by mysterious events</li></ul>
<h2>🐼 Animal Neighbor Season</h2><ul><li>8 animals total — find the keeper first to accept the quest</li><li>Find each animal's <strong>feeding trough</strong> to make it appear in the function menu</li><li>Animals at <strong>affection level 4</strong> can trigger home visits and give gifts</li></ul>`
  },
  {
    id: "pets-cats",
    title: "猫咪养成全攻略：从领养到猫咪咖啡屋",
    titleEn: "Complete Cat Guide: From Adoption to Cat Cafe",
    icon: "🐱", category: "gameplay", difficulty: 1, readTime: "9 min",
    desc: "猫咪解锁条件、互动技巧、时刻图鉴收集和趣味猫咪咖啡屋建造教程。附养狗前置条件说明。",
    descEn: "Cat unlock conditions, interaction tips, moment collection guide, and fun cat cafe building tutorial.",
    tags: ["猫咪","宠物","图鉴","建造"],
    content: `<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🐱 💕 🎮</span><span class="scene-label">猫咪互动界面 — 多互动提升成长值</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🏠 ☕ 🐱</span><span class="scene-label">猫咪咖啡屋 — 五块地零氪可建，6×7地基</span></div></div></div>
<h2>猫咪养成基础</h2><ul><li>养猫默认解锁，10级前要完成基础任务</li><li>核心思路：多互动、提高互动姿势、提升成长值</li><li>3级可养2只猫</li><li>养猫是<strong>解锁养狗的前置条件</strong>（需发展家12级）</li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📖 🏆 ⭐</span><span class="scene-label">猫咪时刻图鉴 — 收集星级可领取狮身猫面像家具和满愿星</span></div></div>
<h2>猫咪时刻图鉴</h2><p>猫咪学习新动作后，每日赠礼有概率获得图鉴碎片。收集星级提升可领取<strong>狮身猫面像家具、满愿星</strong>等奖励。</p>
<h2>养狗解锁</h2><ul><li>发展家12级+完成养猫爱好任务解锁</li><li>可领养8类犬种，最多养3只狗</li></ul>
<h2>养猫避坑</h2><ul><li>每日送猫粮消耗>礼物价值，不太划算</li><li>专注互动提升成长值比送礼更高效</li><li>10级前务必完成养猫任务，否则12级无法解锁养狗</li></ul>`,
    contentEn: `<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🐱 💕 🎮</span><span class="scene-label">Cat Interaction Interface — Interact more to boost growth value</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🏠 ☕ 🐱</span><span class="scene-label">Cat Cafe — Buildable with 5 plots F2P, 6×7 foundation</span></div></div></div>
<h2>Cat Basics</h2><ul><li>Cats are auto-unlocked by default; complete the basic quest before level 10</li><li>Core strategy: interact frequently, improve interaction posture, boost growth value</li><li>At level 3 you can raise 2 cats</li><li>Raising cats is a <strong>prerequisite for unlocking dogs</strong> (requires Developer level 12)</li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📖 🏆 ⭐</span><span class="scene-label">Cat Moment Collection — Collect stars to earn Sphinx Cat Statue furniture and Wish Stars</span></div></div>
<h2>Cat Moment Collection</h2><p>After a cat learns new actions, daily gifts have a chance of dropping collection fragments. Raising your collection star level earns <strong>Sphinx Cat Statue furniture, Wish Stars</strong>, and other rewards.</p>
<h2>Unlocking Dogs</h2><ul><li>Requires Developer level 12 + completion of the cat hobby quest</li><li>8 dog breeds available to adopt, up to 3 dogs at a time</li></ul>
<h2>Cat Care Pitfalls</h2><ul><li>Daily cat food gifts cost more than their value in return — not worth it</li><li>Focusing on interaction to raise growth value is more efficient than gifting</li><li>You must complete the cat quest before level 10, otherwise you cannot unlock dogs at level 12</li></ul>`
  },
  {
    id: "home-advanced",
    title: "家园进阶指南：主题装修、地基迁移与社交花园",
    titleEn: "Advanced Home Guide: Themes, Relocation & Social Gardens",
    icon: "🏡", category: "gameplay", difficulty: 3, readTime: "10 min",
    desc: "15级地基迁移攻略、三种主题风格装修方案详解和社交花园互动率提升技巧。",
    descEn: "Level 15 plot relocation guide, three theme decoration plans, and social garden tips.",
    tags: ["家园","装修","进阶","社交"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🗺️ 🏠 ✈️</span><span class="scene-label">地基迁移界面 — 15级花500金币买迁移卡，推荐晨光湖畔或林间地块</span></div></div>
<h2>15级地基迁移</h2><p>花500金币买迁移卡，推荐迁至<strong>晨光湖畔</strong>或<strong>林间地块</strong>。迁移前确保新地块足够放下全部建筑和庭院。</p>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌾 🌸 🏡</span><span class="scene-label">田园风方案 — 红木花架+吊床秋千+青石板路</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌲 ✨ 🎵</span><span class="scene-label">森系风方案 — 星空地毯+唱片机+鸟浴盆+蘑菇原木</span></div></div></div>
<h2>主题风格方案一：田园风</h2><ul><li>选址：晨光湖畔</li><li>核心家具：红木多层花架、吊床秋千、藤编沙发</li><li>庭院：青石板路+门廊+壁挂花篮+萤火虫灯笼</li></ul>
<h2>主题风格方案二：森系风</h2><ul><li>选址：林间地块</li><li>核心家具：星空地毯、复古唱片机、木质书架</li><li>庭院：鸟浴盆+蘑菇原木+吊床</li><li>优势：社交互动率+60%</li></ul>
<h2>主题风格方案三：现代简约</h2><ul><li>核心家具：白色皮沙发、玻璃茶几、金属吊灯</li><li>配色：白色+浅灰+木色</li></ul>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎉 🎵 👥</span><span class="scene-label">社交花园派对 — 别人开派对直接参加，结束后点赞拿金币</span></div></div>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🗺️ 🏠 ✈️</span><span class="scene-label">Plot Relocation Interface — At level 15, spend 500 gold on a migration card; Morning Light Lakeside or Forest Plot recommended</span></div></div>
<h2>Level 15 Plot Relocation</h2><p>Spend 500 gold on a migration card. Recommended destinations: <strong>Morning Light Lakeside</strong> or <strong>Forest Plot</strong>. Before migrating, ensure the new plot has enough space for all buildings and courtyards.</p>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌾 🌸 🏡</span><span class="scene-label">Rustic Style Plan — Redwood flower rack + hammock swing + bluestone path</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌲 ✨ 🎵</span><span class="scene-label">Forest Style Plan — Starry carpet + record player + bird bath + mushroom log</span></div></div></div>
<h2>Theme Style 1: Rustic</h2><ul><li>Location: Morning Light Lakeside</li><li>Core furniture: Redwood multi-tier flower rack, Hammock swing, Rattan sofa</li><li>Courtyard: Bluestone path + porch + wall-mounted flower basket + firefly lantern</li></ul>
<h2>Theme Style 2: Forest</h2><ul><li>Location: Forest Plot</li><li>Core furniture: Starry carpet, Vintage record player, Wooden bookshelf</li><li>Courtyard: Bird bath + mushroom log + hammock</li><li>Advantage: Social interaction rate +60%</li></ul>
<h2>Theme Style 3: Modern Minimalist</h2><ul><li>Core furniture: White leather sofa, Glass coffee table, Metal pendant light</li><li>Color scheme: White + light gray + wood tones</li></ul>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎉 🎵 👥</span><span class="scene-label">Social Garden Party — Join others' parties directly and like them afterward for gold</span></div></div>`
  }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = TUTORIALS_DB; }
