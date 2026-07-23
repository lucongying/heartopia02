/**
 * Heartopia Guide — Tutorial Data (15 Original Strategy Guides)
 * Scene image placeholders resolve to gallery screenshots via injectTutorialImages()
 */
const TUTORIALS_DB = [
  // ==================== 1. FISHING: Complete Species Guide (Lv1-14) ====================
  {
    id: "fishing-complete-guide",
    title: "钓鱼全图鉴：1-14级完整位置·天气·时间·鱼影攻略",
    titleEn: "Complete Fishing Guide: Level 1-14 Full Species — Location, Weather, Time & Shadow Size",
    icon: "🎣", category: "gameplay", difficulty: 3, readTime: "15 min",
    desc: "1-14级全鱼种图鉴汇总，含13个钓鱼点精确坐标、天气/时段条件、鱼影大小辨别和美人鱼诱捕器使用技巧。源自TapTap社区精选攻略，附12张高清数据图。",
    descEn: "Complete species guide covering levels 1-14 with 13 fishing spots, weather/time conditions, shadow size identification, and Mermaid Lure techniques. Sourced from TapTap community with 12 high-res data charts.",
    tags: ["钓鱼","全图鉴","图鉴","鱼影","彩虹天"],
    content: `<div class="tutorial-img scene-fish-01"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">TapTap攻略原图 · 1-14级全鱼种图鉴总览</span></div></div>

<h2>五星要求与必备道具</h2>
<p>想要达成钓鱼五星评价，需要满足以下条件：</p>
<ul>
  <li>⭐ <strong>五星要求</strong>：钓鱼爱好等级达到<strong>6级</strong></li>
  <li>🌈 <strong>五星道具</strong>：<strong>彩虹花束</strong>——大幅提升稀有鱼上钩概率，彩虹天必备</li>
  <li>🧜 <strong>美人鱼诱鱼器</strong>（玩家俗称<strong>"鱼尾"</strong>）：钓鱼4级后购买，解锁蓝色鱼影鱼种</li>
  <li>🧴 <strong>美人鱼香水</strong>：提升钓鱼效率，与鱼尾搭配使用效果最佳</li>
  <li>🔧 <strong>维修盒</strong>：传说级鱼挣扎时间长达60-90秒，鱼竿耐久消耗极快，务必随身携带</li>
</ul>

<div class="img-row"><div class="tutorial-img scene-fish-02"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">鱼影大小对照 · 小/中/大/蓝/金</span></div></div><div class="tutorial-img scene-fish-03"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">钓鱼操作与鱼竿状态提示</span></div></div></div>

<h2>鱼影大小辨别系统</h2>
<p>鱼影是判断鱼种的最关键指标，共分5个等级：</p>
<ul>
  <li>🟢 <strong>小鱼影</strong>：常见鱼种，如沙丁鱼、竹荚鱼等，咬钩快、挣扎弱</li>
  <li>🟡 <strong>中鱼影</strong>：中等价值鱼种，如鲷鱼、鲈鱼等</li>
  <li>🔴 <strong>大鱼影</strong>：高价值鱼种，如金枪鱼、剑鱼等，挣扎力度强</li>
  <li>🔵 <strong>蓝色鱼影</strong>：<strong>必须使用美人鱼诱鱼器（鱼尾）</strong>才能出现，如欧洲水蛙、蓝闪鱼等特殊鱼种</li>
  <li>🟡✨ <strong>金色鱼影</strong>：<strong>海钓专属</strong>，如黄金帝王蟹等顶级稀有物种</li>
</ul>

<h2>钓鱼操作核心技巧</h2>
<ol>
  <li>将浮标尽量靠近鱼影，可用方向键微调位置</li>
  <li>鱼咬钩时<strong>注意鱼竿颜色变化</strong>：🔴 <strong>红色时绝对不要按</strong>——否则会断竿或鱼跑掉！⚪ <strong>白色时长按收杆</strong>，快速将鱼拉上来</li>
  <li>鱼快到手时不要松手，<strong>一直按住按钮</strong>防止功亏一篑</li>
  <li>两人一起钓鱼可触发<strong>蓝闪鱼</strong>等特殊鱼种（单人钓得够快也可能出现）</li>
</ol>

<div class="tutorial-img scene-fish-04"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">海洋钓鱼点全图鉴 — 缓风海/旧海/鲸鱼海/东海</span></div></div>

<h2>🌊 海洋钓鱼点（4个）— 赚钱首选</h2>
<table><thead><tr><th>钓鱼点</th><th>常规鱼种数</th><th>1星均价</th><th>推荐度</th></tr></thead><tbody>
<tr><td><strong>缓风海</strong></td><td>7种</td><td>139.3金币</td><td>⭐⭐⭐ 最推荐</td></tr>
<tr><td>旧海</td><td>5种</td><td>123金币</td><td>⭐⭐ 推荐</td></tr>
<tr><td>鲸鱼海</td><td>7种</td><td>112.9金币</td><td>⭐⭐</td></tr>
<tr><td>东海</td><td>5种</td><td>107金币</td><td>⭐</td></tr>
</tbody></table>
<p><strong>缓风海</strong>是钓鱼赚钱的王者之选，均价最高且鱼种丰富。彩虹天优先来这里，稀有鱼上钩率翻倍。</p>

<div class="img-row"><div class="tutorial-img scene-fish-05"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">湖泊钓鱼点图鉴（上）</span></div></div><div class="tutorial-img scene-fish-06"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">湖泊钓鱼点图鉴（下）</span></div></div></div>

<h2>🏞 湖泊钓鱼点（4个）</h2>
<table><thead><tr><th>钓鱼点</th><th>常规鱼种数</th><th>1星均价</th><th>推荐度</th></tr></thead><tbody>
<tr><td><strong>草原湖</strong></td><td>4种</td><td>113.8金币</td><td>⭐⭐⭐ 最推荐</td></tr>
<tr><td>森林湖</td><td>6种</td><td>100.8金币</td><td>⭐⭐</td></tr>
<tr><td>城郊湖</td><td>8种</td><td>87.5金币</td><td>⭐⭐</td></tr>
<tr><td>温泉山湖</td><td>5种</td><td>86金币</td><td>⭐</td></tr>
</tbody></table>
<p><strong>草原湖</strong>鱼种虽少但均价高，是湖泊钓鱼性价比之王。<strong>城郊湖</strong>鱼种最多（8种），冲图鉴的首选地。</p>

<div class="tutorial-img scene-fish-07"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">河流钓鱼点全图鉴 — 霞光河/静河/巨木河/浅水河</span></div></div>

<h2>🏝 河流钓鱼点（4个）</h2>
<table><thead><tr><th>钓鱼点</th><th>常规鱼种数</th><th>1星均价</th><th>推荐度</th></tr></thead><tbody>
<tr><td><strong>霞光河</strong></td><td>5种</td><td>111金币</td><td>⭐⭐⭐ 最推荐</td></tr>
<tr><td>静河</td><td>4种</td><td>101.3金币</td><td>⭐⭐</td></tr>
<tr><td>巨木河</td><td>4种</td><td>101.3金币</td><td>⭐⭐</td></tr>
<tr><td>浅水河</td><td>3种</td><td>66.7金币</td><td>⭐</td></tr>
</tbody></table>

<h2>🚢 海钓（第13个钓鱼点）</h2>
<p>海钓是独立于常规钓鱼点的特殊玩法，每天<strong>12:00和21:00</strong>两场，每场持续30分钟。金色鱼影<strong>仅在海钓中出现</strong>，如黄金帝王蟹等顶级稀有物种。</p>

<div class="img-row"><div class="tutorial-img scene-fish-08"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">彩虹天稀有鱼汇总（上）</span></div></div><div class="tutorial-img scene-fish-09"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">彩虹天稀有鱼汇总（下）</span></div></div></div>

<h2>🌈 彩虹天稀有鱼完整汇总</h2>
<p>彩虹天是钓鱼的黄金时机，以下稀有鱼<strong>仅在彩虹天出现</strong>（未标注时间的为全天可钓）：</p>
<table><thead><tr><th>鱼种</th><th>钓鱼点</th><th>特殊时间</th></tr></thead><tbody>
<tr><td>贻贝</td><td>城郊湖</td><td>全天</td></tr>
<tr><td>蝌蚪</td><td>温泉山湖</td><td>全天</td></tr>
<tr><td>大珍珠蚌</td><td>森林湖</td><td>全天</td></tr>
<tr><td>大马哈鱼</td><td>静河</td><td>全天</td></tr>
<tr><td>细鳞绿鳍鱼</td><td>东海</td><td>全天</td></tr>
<tr><td>三刺鱼</td><td>浅水河</td><td>全天</td></tr>
<tr><td>杜父鱼</td><td>温泉山河</td><td>全天</td></tr>
<tr><td>黑斑小鲷</td><td>缓风海</td><td>晚18:00-早6:00</td></tr>
<tr><td>欧洲鳗鲡</td><td>旧海</td><td>全天</td></tr>
<tr><td>黄金帝王蟹</td><td>海钓</td><td>海钓时段</td></tr>
<tr><td>金鱼</td><td>草原湖</td><td>早6:00-凌晨0:00</td></tr>
<tr><td>帝王蟹</td><td>鲸鱼海</td><td>全天</td></tr>
<tr><td>白斑狗鱼</td><td>城郊湖</td><td>晚18:00-早6:00</td></tr>
<tr><td>多瑙罗哲鱼</td><td>巨木河</td><td>午12:00-早6:00</td></tr>
<tr><td>蓝旗金枪鱼</td><td>缓风海</td><td>早6:00-晚18:00</td></tr>
<tr><td>北极红点鲑</td><td>森林湖</td><td>午12:00-凌晨0:00</td></tr>
<tr><td>剑鱼</td><td>鲸鱼海</td><td>早6:00-晚18:00</td></tr>
<tr><td>锤头鲨</td><td>旧海</td><td>晚18:00-早6:00</td></tr>
<tr><td>尖吻靖鲨</td><td>海钓</td><td>早6:00-晚18:00</td></tr>
</tbody></table>

<div class="img-row"><div class="tutorial-img scene-fish-10"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">特殊鱼种 · 美人鱼诱捕器专属</span></div></div><div class="tutorial-img scene-fish-11"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">鱼影大小详细对照与等级解锁表</span></div></div></div>

<h2>🧜 美人鱼诱捕器（鱼尾）使用详解</h2>
<ul>
  <li><strong>购买条件</strong>：钓鱼等级达到<strong>4级</strong>后，在钓鱼导师万尼亚处购买</li>
  <li><strong>功能</strong>：解锁<strong>蓝色鱼影</strong>鱼种，部分特殊鱼<strong>必须使用鱼尾</strong>才能钓到</li>
  <li><strong>双人机制</strong>：部分鱼种（如欧洲水蛙、罗非鱼、大西洋银鲛鱼）首次获得需要<strong>两人一起钓鱼</strong></li>
  <li><strong>蓝闪鱼</strong>：只在<strong>使用鱼尾+双人钓鱼</strong>时出现（单人手速极快也可能触发）</li>
  <li>💡 <strong>技巧</strong>：使用鱼尾时搭配<strong>美人鱼香水</strong>，效果叠加，稀有鱼上钩率翻倍</li>
</ul>

<h2>🗺️ 最优跑图路线建议</h2>
<ol>
  <li><strong>先跑外圈</strong>：从地图最外围海域（缓风海）开始，沿海岸线一路钓过去，顺路经过河流时顺便钓河流鱼种</li>
  <li><strong>再跑内圈</strong>：围绕镇中心跑河流和湖泊。森林湖位置较偏，建议单独走一趟</li>
  <li><strong>温泉山单独刷</strong>：温泉山鱼种少且分散，建议最后单独前往</li>
  <li>跑两趟基本可解锁足够图鉴升至25星，升4级买鱼尾后效率更高</li>
</ol>

<div class="tutorial-img scene-fish-12"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">全图鉴总结 — 1-14级钓鱼完整数据一览</span></div></div>

<h2>💰 赚钱效率排行</h2>
<p>按1星均价从高到低排列的钓鱼点收益排名：</p>
<ol>
  <li>🥇 <strong>缓风海</strong>（海洋）— 139.3金币/条，7种鱼</li>
  <li>🥈 <strong>旧海</strong>（海洋）— 123金币/条，5种鱼</li>
  <li>🥉 <strong>草原湖</strong>（湖泊）— 113.8金币/条，4种鱼</li>
  <li>🏅 <strong>鲸鱼海</strong>（海洋）— 112.9金币/条，7种鱼</li>
  <li>🏅 <strong>霞光河</strong>（河流）— 111金币/条，5种鱼</li>
</ol>

<h2>📌 总结：钓鱼核心要点</h2>
<ul>
  <li>🌈 <strong>彩虹天和雨天</strong>是钓鱼的关键节点，稀有鱼出现率×3</li>
  <li>💰 赚钱优先<strong>缓风海 > 草原湖 > 霞光河</strong></li>
  <li>🎯 冲图鉴优先<strong>城郊湖</strong>（8种鱼，种类最多）</li>
  <li>🧜 4级买<strong>鱼尾</strong>是质变节点，解锁蓝色鱼影鱼种</li>
  <li>👥 特殊鱼种记得<strong>拉上好友双人钓鱼</strong></li>
  <li>🔧 钓传说鱼永远<strong>带维修盒</strong>，鱼竿断了前功尽弃</li>
</ul>
<p><em>📷 攻略数据图源自 TapTap 社区精选帖，涵盖1-14级全鱼种图鉴，建议收藏随时查阅。</em></p>`,
    contentEn: `<div class="tutorial-img scene-fish-01"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">TapTap Guide Original · Level 1-14 Complete Species Overview</span></div></div>

<h2>5-Star Requirements & Essential Tools</h2>
<p>To achieve a 5-star fishing rating, you'll need the following:</p>
<ul>
  <li>⭐ <strong>5-Star Requirement</strong>: Reach fishing hobby <strong>Level 6</strong></li>
  <li>🌈 <strong>5-Star Tool</strong>: <strong>Rainbow Bouquet</strong> — significantly boosts rare fish bite rate, essential on Rainbow Days</li>
  <li>🧜 <strong>Mermaid Lure</strong> (nicknamed <strong>"Fish Tail"</strong> by players): Purchased after fishing Level 4, unlocks blue-shadow fish species</li>
  <li>🧴 <strong>Mermaid Perfume</strong>: Enhances fishing efficiency — best used together with the Fish Tail</li>
  <li>🔧 <strong>Repair Kit</strong>: Legendary fish can struggle for 60-90 seconds; rod durability depletes fast — always carry one</li>
</ul>

<div class="img-row"><div class="tutorial-img scene-fish-02"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">Fish Shadow Size Reference · Small/Medium/Large/Blue/Gold</span></div></div><div class="tutorial-img scene-fish-03"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">Fishing Controls & Rod Status Guide</span></div></div></div>

<h2>Fish Shadow Size Identification</h2>
<p>Shadow size is the most critical indicator for identifying fish species, divided into 5 tiers:</p>
<ul>
  <li>🟢 <strong>Small Shadow</strong>: Common species like sardines, horse mackerel — quick bite, weak struggle</li>
  <li>🟡 <strong>Medium Shadow</strong>: Mid-value fish like sea bream, bass</li>
  <li>🔴 <strong>Large Shadow</strong>: High-value species like tuna, swordfish — strong struggle</li>
  <li>🔵 <strong>Blue Shadow</strong>: <strong>Requires Mermaid Lure (Fish Tail)</strong> to appear — special species like European Water Frog, Blue Flash Fish</li>
  <li>🟡✨ <strong>Gold Shadow</strong>: <strong>Ocean Fishing exclusive</strong> — top-tier rare species like Golden King Crab</li>
</ul>

<h2>Core Fishing Technique</h2>
<ol>
  <li>Position your float as close to the fish shadow as possible — use directional keys to fine-tune</li>
  <li>Watch the <strong>rod color change</strong> when fish bite: 🔴 <strong>NEVER press when RED</strong> — your line will snap or the fish will escape! ⚪ <strong>Hold when WHITE</strong> to reel in quickly</li>
  <li>Don't release when the fish is almost caught — <strong>keep holding the button</strong> until fully landed</li>
  <li>Two-player fishing triggers special species like <strong>Blue Flash Fish</strong> (solo players with fast reflexes may also trigger it)</li>
</ol>

<div class="tutorial-img scene-fish-04"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">Ocean Fishing Spots Complete Guide — Gentle Breeze / Old Sea / Whale Sea / East Sea</span></div></div>

<h2>🌊 Ocean Fishing Spots (4) — Best for Profit</h2>
<table><thead><tr><th>Fishing Spot</th><th>Species Count</th><th>1★ Avg Price</th><th>Rating</th></tr></thead><tbody>
<tr><td><strong>Gentle Breeze Sea</strong></td><td>7 species</td><td>139.3 gold</td><td>⭐⭐⭐ Top Pick</td></tr>
<tr><td>Old Sea</td><td>5 species</td><td>123 gold</td><td>⭐⭐ Recommended</td></tr>
<tr><td>Whale Sea</td><td>7 species</td><td>112.9 gold</td><td>⭐⭐</td></tr>
<tr><td>East Sea</td><td>5 species</td><td>107 gold</td><td>⭐</td></tr>
</tbody></table>
<p><strong>Gentle Breeze Sea</strong> is the undisputed king of fishing profits — highest average price with rich species diversity. Prioritize this spot on Rainbow Days for doubled rare fish rates.</p>

<div class="img-row"><div class="tutorial-img scene-fish-05"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">Lake Fishing Spots Guide (Part 1)</span></div></div><div class="tutorial-img scene-fish-06"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">Lake Fishing Spots Guide (Part 2)</span></div></div></div>

<h2>🏞 Lake Fishing Spots (4)</h2>
<table><thead><tr><th>Fishing Spot</th><th>Species Count</th><th>1★ Avg Price</th><th>Rating</th></tr></thead><tbody>
<tr><td><strong>Grassland Lake</strong></td><td>4 species</td><td>113.8 gold</td><td>⭐⭐⭐ Top Pick</td></tr>
<tr><td>Forest Lake</td><td>6 species</td><td>100.8 gold</td><td>⭐⭐</td></tr>
<tr><td>Suburban Lake</td><td>8 species</td><td>87.5 gold</td><td>⭐⭐</td></tr>
<tr><td>Hot Spring Lake</td><td>5 species</td><td>86 gold</td><td>⭐</td></tr>
</tbody></table>
<p><strong>Grassland Lake</strong> has fewer species but the highest average price — the best value lake spot. <strong>Suburban Lake</strong> boasts the most species (8) — the go-to for collection completion.</p>

<div class="tutorial-img scene-fish-07"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">River Fishing Spots Complete Guide — Sunset River / Quiet River / Giant Wood River / Shallow River</span></div></div>

<h2>🏝 River Fishing Spots (4)</h2>
<table><thead><tr><th>Fishing Spot</th><th>Species Count</th><th>1★ Avg Price</th><th>Rating</th></tr></thead><tbody>
<tr><td><strong>Sunset River</strong></td><td>5 species</td><td>111 gold</td><td>⭐⭐⭐ Top Pick</td></tr>
<tr><td>Quiet River</td><td>4 species</td><td>101.3 gold</td><td>⭐⭐</td></tr>
<tr><td>Giant Wood River</td><td>4 species</td><td>101.3 gold</td><td>⭐⭐</td></tr>
<tr><td>Shallow River</td><td>3 species</td><td>66.7 gold</td><td>⭐</td></tr>
</tbody></table>

<h2>🚢 Ocean Fishing (13th Spot)</h2>
<p>Ocean Fishing is a special mode separate from regular fishing spots, available twice daily at <strong>12:00 and 21:00</strong>, each session lasting 30 minutes. <strong>Gold shadows only appear during Ocean Fishing</strong>, featuring top-tier rare species like the Golden King Crab.</p>

<div class="img-row"><div class="tutorial-img scene-fish-08"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">Rainbow Day Rare Fish Summary (Part 1)</span></div></div><div class="tutorial-img scene-fish-09"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">Rainbow Day Rare Fish Summary (Part 2)</span></div></div></div>

<h2>🌈 Complete Rainbow Day Rare Fish Summary</h2>
<p>Rainbow Days are prime fishing time. The following rare fish <strong>only appear on Rainbow Days</strong> (all-day unless noted otherwise):</p>
<table><thead><tr><th>Species</th><th>Location</th><th>Special Time Window</th></tr></thead><tbody>
<tr><td>Mussel</td><td>Suburban Lake</td><td>All day</td></tr>
<tr><td>Tadpole</td><td>Hot Spring Lake</td><td>All day</td></tr>
<tr><td>Giant Pearl Mussel</td><td>Forest Lake</td><td>All day</td></tr>
<tr><td>Salmon</td><td>Quiet River</td><td>All day</td></tr>
<tr><td>Greenfin Gurnard</td><td>East Sea</td><td>All day</td></tr>
<tr><td>Three-Spined Stickleback</td><td>Shallow River</td><td>All day</td></tr>
<tr><td>Bullhead</td><td>Hot Spring River</td><td>All day</td></tr>
<tr><td>Black-Spotted Bream</td><td>Gentle Breeze Sea</td><td>18:00-06:00</td></tr>
<tr><td>European Eel</td><td>Old Sea</td><td>All day</td></tr>
<tr><td>Golden King Crab</td><td>Ocean Fishing</td><td>Session times</td></tr>
<tr><td>Goldfish</td><td>Grassland Lake</td><td>06:00-00:00</td></tr>
<tr><td>King Crab</td><td>Whale Sea</td><td>All day</td></tr>
<tr><td>Northern Pike</td><td>Suburban Lake</td><td>18:00-06:00</td></tr>
<tr><td>Danube Roach</td><td>Giant Wood River</td><td>12:00-06:00</td></tr>
<tr><td>Bluefin Tuna</td><td>Gentle Breeze Sea</td><td>06:00-18:00</td></tr>
<tr><td>Arctic Char</td><td>Forest Lake</td><td>12:00-00:00</td></tr>
<tr><td>Swordfish</td><td>Whale Sea</td><td>06:00-18:00</td></tr>
<tr><td>Hammerhead Shark</td><td>Old Sea</td><td>18:00-06:00</td></tr>
<tr><td>Mako Shark</td><td>Ocean Fishing</td><td>06:00-18:00</td></tr>
</tbody></table>

<div class="img-row"><div class="tutorial-img scene-fish-10"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">Special Species · Mermaid Lure Exclusive</span></div></div><div class="tutorial-img scene-fish-11"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">Shadow Size Reference & Level Unlock Chart</span></div></div></div>

<h2>🧜 Mermaid Lure (Fish Tail) In-Depth Guide</h2>
<ul>
  <li><strong>Unlock Condition</strong>: Reach fishing <strong>Level 4</strong>, then purchase from fishing mentor Waniya</li>
  <li><strong>Function</strong>: Unlocks <strong>blue shadow</strong> fish species — some special fish <strong>require the Fish Tail</strong> to appear</li>
  <li><strong>Two-Player Mechanic</strong>: Certain species (European Water Frog, Tilapia, Atlantic Silver Chimaera) require <strong>two players fishing together</strong> for the first catch</li>
  <li><strong>Blue Flash Fish</strong>: Only appears with <strong>Fish Tail + two-player fishing</strong> (extremely fast solo players may also trigger it)</li>
  <li>💡 <strong>Pro Tip</strong>: Pair the Fish Tail with <strong>Mermaid Perfume</strong> — effects stack, doubling rare fish bite rate</li>
</ul>

<h2>🗺️ Optimal Fishing Route</h2>
<ol>
  <li><strong>Outer ring first</strong>: Start from the outermost sea area (Gentle Breeze Sea), fish along the coastline, stopping at river mouths for river species</li>
  <li><strong>Inner ring second</strong>: Circle the town center for rivers and lakes. Forest Lake is remote — plan a separate trip</li>
  <li><strong>Hot Spring solo run</strong>: Hot Spring Mountain has fewer, scattered species — best tackled as a dedicated trip</li>
  <li>Two full loops should unlock enough entries to reach 25 stars; buy the Fish Tail at Level 4 for dramatically higher efficiency</li>
</ol>

<div class="tutorial-img scene-fish-12"><div class="img-scene"><span class="scene-icons">📷</span><span class="scene-label">Complete Guide Summary — Level 1-14 All Fishing Data at a Glance</span></div></div>

<h2>💰 Profit Ranking</h2>
<p>Fishing spots ranked by 1★ average selling price:</p>
<ol>
  <li>🥇 <strong>Gentle Breeze Sea</strong> (Ocean) — 139.3 gold/fish, 7 species</li>
  <li>🥈 <strong>Old Sea</strong> (Ocean) — 123 gold/fish, 5 species</li>
  <li>🥉 <strong>Grassland Lake</strong> (Lake) — 113.8 gold/fish, 4 species</li>
  <li>🏅 <strong>Whale Sea</strong> (Ocean) — 112.9 gold/fish, 7 species</li>
  <li>🏅 <strong>Sunset River</strong> (River) — 111 gold/fish, 5 species</li>
</ol>

<h2>📌 Summary: Key Fishing Takeaways</h2>
<ul>
  <li>🌈 <strong>Rainbow Days and rainy days</strong> are critical fishing windows — rare fish rate ×3</li>
  <li>💰 For profit, prioritize: <strong>Gentle Breeze Sea > Grassland Lake > Sunset River</strong></li>
  <li>🎯 For collection completion, prioritize: <strong>Suburban Lake</strong> (8 species, most variety)</li>
  <li>🧜 Buying the <strong>Fish Tail</strong> at Level 4 is a game-changer — unlocks blue shadow species</li>
  <li>👥 For special species, remember to <strong>team up with a friend for two-player fishing</strong></li>
  <li>🔧 When hunting legendary fish, <strong>always carry a repair kit</strong> — a snapped rod means all effort wasted</li>
</ul>
<p><em>📷 Guide data charts sourced from a featured TapTap community post. Covers all fish species from level 1 to 14. Bookmark for quick reference.</em></p>`
  },

  // ==================== 2. BEGINNER: First Day ====================
  {
    id: "beginner-first-day",
    title: "心动小镇第一天：从零开始的完美开局指南",
    titleEn: "Day 1 Perfect Start: Complete Beginner Walkthrough",
    icon: "🎓", category: "beginner", difficulty: 1, readTime: "10 min",
    desc: "从创建角色到第一天收工，手把手教你高效利用首日时间。含创建角色建议、主线任务顺序和首日资源规划。",
    descEn: "From character creation to wrapping up Day 1 — a step-by-step guide to maximize your first day with optimal quest order and resource planning.",
    tags: ["新手","开局","主线","首日"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌅 🏘️ ✨</span><span class="scene-label">心动小镇清晨全景 — 第一天从这里开始你的旅程</span></div></div>
<h2>创建角色：初始选择影响前期体验</h2><p>进入游戏后，先选择性别和基础外观（后期可在美容院自由修改）。<strong>初始地块位置不可更改</strong>，建议优先选择靠近中心广场的位置，方便前期跑图。肤色、发型之后都能改，不用纠结。</p>
<h2>主线任务：首日必做清单</h2><ol><li><strong>跟随引导种下第一颗番茄</strong>——这是园艺入门，15分钟后就能收获</li><li><strong>去广场认识3位NPC</strong>——触发居民登记，解锁好友功能</li><li><strong>完成第一个建造任务</strong>——搭建4×4基础小屋，学会使用蓝图系统</li><li><strong>收集基础资源</strong>——砍树获得木材×20，挖矿获得石料×15</li></ol>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🏡 🔨 📋</span><span class="scene-label">建造模式界面 — 使用蓝图快速搭建你的第一个家</span></div></div><div class="tutorial-img scene-farm"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🍅 🌱 💧</span><span class="scene-label">第一颗番茄成熟 — 学会种植与浇水的基础操作</span></div></div></div>
<h2>首日资源优先级</h2><ul><li>🥇 <strong>金币</strong>：捡泡泡、卖多余材料，目标首日攒够2000金币</li><li>🥈 <strong>木材与石料</strong>：建造和工具维修的基础材料，多多益善</li><li>🥉 <strong>食材</strong>：蓝莓、树莓免费采集，为烹饪做准备</li></ul>
<h2>第一天收工前检查清单</h2><ul><li>✅ 主线推到不再有金色感叹号</li><li>✅ 种植箱已种下离线作物（小麦4小时）</li><li>✅ 当日泡泡全部捡完</li><li>✅ 至少认识5位NPC</li><li>✅ 背包里攒了2000+金币</li></ul>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌅 🏘️ ✨</span><span class="scene-label">Heartopia Morning Panorama — Your journey begins here on Day 1</span></div></div>
<h2>Character Creation: Early Game Impact</h2><p>After entering the game, choose your gender and basic appearance (freely changeable later at the Beauty Salon). <strong>Your initial plot location cannot be changed</strong> — we recommend choosing a spot near the Central Plaza for convenient early-game travel. Don't stress over skin tone or hairstyle; everything can be changed later.</p>
<h2>Main Quests: Day 1 Must-Do List</h2><ol><li><strong>Follow the tutorial to plant your first tomato</strong> — this is your intro to gardening, harvestable in just 15 minutes</li><li><strong>Meet 3 NPCs at the Plaza</strong> — triggers resident registration and unlocks the friend system</li><li><strong>Complete your first building task</strong> — construct a 4×4 basic house and learn the blueprint system</li><li><strong>Gather basic resources</strong> — chop trees for 20 wood, mine for 15 stone</li></ol>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🏡 🔨 📋</span><span class="scene-label">Build Mode Interface — Use blueprints to quickly construct your first home</span></div></div><div class="tutorial-img scene-farm"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🍅 🌱 💧</span><span class="scene-label">First Tomato Harvest — Master the basics of planting and watering</span></div></div></div>
<h2>Day 1 Resource Priorities</h2><ul><li>🥇 <strong>Gold</strong>: Collect bubbles, sell excess materials — aim for 2000 gold by day's end</li><li>🥈 <strong>Wood & Stone</strong>: Fundamental building and tool repair materials — the more the better</li><li>🥉 <strong>Ingredients</strong>: Blueberries and raspberries are free to gather — stock up for cooking</li></ul>
<h2>End-of-Day Checklist</h2><ul><li>✅ Main quests progressed until no more golden exclamation marks</li><li>✅ Planting boxes seeded with offline crops (wheat, 4 hours)</li><li>✅ All daily bubbles collected</li><li>✅ At least 5 NPCs met</li><li>✅ 2000+ gold saved in your backpack</li></ul>`
  },

  // ==================== 3. BEGINNER: Fast Leveling ====================
  {
    id: "beginner-fast-leveling",
    title: "快速升级攻略：3天内冲击10级的完整路线",
    titleEn: "Speed Leveling Guide: Hit Level 10 in 3 Days",
    icon: "🚀", category: "beginner", difficulty: 2, readTime: "11 min",
    desc: "从1级到10级的完整升级路线图，含每阶段经验最大化策略、关键等级节点解锁内容和体力管理技巧。",
    descEn: "Complete roadmap from level 1 to 10 with max XP strategies for each phase, key unlock milestones, and stamina management.",
    tags: ["升级","新手","效率","经验"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📈 ⬆️ 🏆</span><span class="scene-label">发展家等级界面 — 每级解锁的新功能和奖励一览</span></div></div>
<h2>升级核心逻辑</h2><p>经验值主要来源：<strong>主线任务 > 每日委托 > 爱好活动 > 资源采集</strong>。主线任务经验最多，永远优先完成。解锁新爱好会触发一系列引导任务，经验奖励丰厚。</p>
<h2>Day 1 目标：1级→5级</h2><ul><li><strong>1-3级</strong>：紧跟主线，解锁种植、烹饪、建造。利用引导任务的双倍经验窗口</li><li><strong>3-4级</strong>：触发猫咪任务（需等次日），利用空档囤积木材×50+石料×30</li><li><strong>4-5级</strong>：解锁钓鱼和捕虫爱好，完成引导任务冲刺5级</li></ul>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎣 📈 ✨</span><span class="scene-label">钓鱼引导任务 — 蓝色鱼影优先钓，经验+50%</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🪲 🌿 📊</span><span class="scene-label">捕虫引导任务 — 萤火虫任务完成可跳级</span></div></div></div>
<h2>Day 2 目标：5级→8级</h2><ul><li>解锁观鸟爱好（宠物店二楼找贝莉），完成系列引导任务</li><li>扩建家园至6×6，触发装修系列任务</li><li>加入<strong>传承协会</strong>，开始接每日委托（每单300-800经验）</li></ul>
<h2>Day 3 目标：8级→10级</h2><ul><li>烹饪冲5级解锁提拉米苏，制作提拉米苏首做奖励大量经验</li><li>完成5个协会委托+主线推进，经验刚好够10级</li><li>10级解锁<strong>养狗前置</strong>和<strong>家园地块扩展</strong></li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🏠 📐 🔓</span><span class="scene-label">10级家园扩展 — 解锁更多地块和建造选项</span></div></div>
<h2>体力零浪费策略</h2><ul><li>体力低于30就去别人家借宿，每天3次免费满血</li><li>烹饪食物补充体力比直接吃原材料效率高3倍</li><li>优先制作<strong>草莓果酱</strong>（+45体力/份），材料成本极低</li></ul>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📈 ⬆️ 🏆</span><span class="scene-label">Developer Level Interface — New features and rewards unlocked at each level</span></div></div>
<h2>Core Leveling Logic</h2><p>Main XP sources, ranked: <strong>Main quests > Daily commissions > Hobby activities > Resource gathering</strong>. Main quests give the most XP — always prioritize them. Unlocking new hobbies triggers a series of tutorial quests with generous XP rewards.</p>
<h2>Day 1 Goal: Level 1→5</h2><ul><li><strong>Level 1-3</strong>: Follow main quests closely, unlock farming, cooking, and building. Exploit the double XP window from tutorial quests</li><li><strong>Level 3-4</strong>: Cat quest triggers (requires waiting until next day) — use this gap to stockpile 50+ wood and 30+ stone</li><li><strong>Level 4-5</strong>: Unlock fishing and bug catching hobbies; complete tutorial quests to sprint to level 5</li></ul>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎣 📈 ✨</span><span class="scene-label">Fishing Tutorial Quest — Prioritize blue fish shadows for +50% XP</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🪲 🌿 📊</span><span class="scene-label">Bug Catching Tutorial — Complete the firefly quest to potentially skip a level</span></div></div></div>
<h2>Day 2 Goal: Level 5→8</h2><ul><li>Unlock birdwatching hobby (Pet Shop 2F, find Bailey), complete the quest chain</li><li>Expand home to 6×6, triggering renovation quest series</li><li>Join the <strong>Heritage Association</strong> and start taking daily commissions (300-800 XP each)</li></ul>
<h2>Day 3 Goal: Level 8→10</h2><ul><li>Push cooking to level 5 to unlock Tiramisu — the first-craft bonus awards massive XP</li><li>Complete 5 association commissions + main quest progress, exactly enough XP for level 10</li><li>Level 10 unlocks the <strong>dog-raising prerequisite</strong> and <strong>home plot expansion</strong></li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🏠 📐 🔓</span><span class="scene-label">Level 10 Home Expansion — Unlock more plots and building options</span></div></div>
<h2>Zero-Waste Stamina Strategy</h2><ul><li>Rest at other players' houses when stamina drops below 30 — 3 free full heals daily</li><li>Cooked food restores 3× more stamina than eating raw ingredients</li><li>Prioritize crafting <strong>Strawberry Jam</strong> (+45 stamina per serving) with extremely low material cost</li></ul>`
  },

  // ==================== 4. FISHING: Rare Species Deep Dive ====================
  {
    id: "fishing-rare-deep",
    title: "稀有鱼种深度攻略：传说级鱼类垂钓完全手册",
    titleEn: "Rare Fish Deep Dive: Complete Legendary Fishing Manual",
    icon: "🎣", category: "gameplay", difficulty: 3, readTime: "14 min",
    desc: "10种传说级鱼类的详细垂钓指南，含精确坐标、天气条件、时段要求和鱼饵搭配方案。附鱼影辨别技巧。",
    descEn: "Detailed fishing guide for 10 legendary fish species with exact coordinates, weather conditions, time windows, and bait combinations. Includes fish shadow identification tips.",
    tags: ["钓鱼","稀有鱼","传说","图鉴"],
    content: `<div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🗺️ 🎣 ⭐</span><span class="scene-label">全水域传说级鱼种分布地图 — 金色标记为传说鱼出没点</span></div></div>
<h2>传说级鱼类判定标准</h2><p>传说级鱼类特征：<strong>鱼影带金色光晕、咬钩时有特殊音效、挣扎力度是普通鱼的2倍</strong>。钓起后自动记录图鉴并获得全服广播。</p>
<h2>海洋传说鱼</h2><ul><li><strong>黄金剑鱼</strong>：鲸鱼海·沉船坐标(127,84)，彩虹天12:00-14:00，需<strong>金色鱼饵</strong>。建议钓鱼等级10级以上再挑战</li><li><strong>深海皇带鱼</strong>：旧海·海沟最深处的秘密钓点（需潜水服），雨天18:00-24:00，鱼线几乎全红</li><li><strong>彩虹鲷</strong>：缓风海·珊瑚礁群，彩虹天全天，使用<strong>彩虹鱼饵+美人鱼香水</strong>双重加成</li></ul>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🦈 ⚡ 💰</span><span class="scene-label">黄金剑鱼上钩瞬间 — 注意金色光晕和特殊粒子特效</span></div></div><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎣 🔴 ⚠️</span><span class="scene-label">皇带鱼挣扎界面 — 红线状态占据80%时间，极需耐心</span></div></div></div>
<h2>淡水传说鱼</h2><ul><li><strong>传说锦鲤</strong>：森林湖·秘密池塘（瀑布后面），午夜00:00-04:00，使用<strong>特制锦鲤饵</strong></li><li><strong>金鳟</strong>：温泉山湖·温泉源头，彩虹天06:00-10:00，需钓鱼等级12级</li><li><strong>巨骨舌鱼</strong>：草原湖·湖心岛周围，雨天全天，鱼影极大（约普通鱼的4倍）</li></ul>
<h2>传说鱼的三大铁律</h2><ol><li><strong>永远带维修盒</strong>——传说鱼挣扎时间长达60-90秒，鱼竿耐久消耗极快</li><li><strong>组队加成不可叠加</strong>——4人组队钓鱼每人独立判定，但鱼饵效果各自计算</li><li><strong>传说鱼每24小时仅能钓1条</strong>——每种传说鱼有独立CD，钓到后切换目标</li></ol>
<div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🏆 📋 ⭐</span><span class="scene-label">传说鱼图鉴面板 — 每收集3种获得专属钓鱼称号</span></div></div>
<h2>传说鱼售价参考</h2><ul><li>深海皇带鱼：3500-5000金币</li><li>黄金剑鱼：2800-4000金币</li><li>传说锦鲤：2000-3500金币</li><li>巨骨舌鱼：1800-3000金币</li></ul>`,
    contentEn: `<div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🗺️ 🎣 ⭐</span><span class="scene-label">Legendary Fish Distribution Map — Gold markers indicate legendary fish locations</span></div></div>
<h2>Legendary Fish Identification</h2><p>Legendary fish characteristics: <strong>golden halo around the shadow, unique sound effect when biting, struggle intensity 2× normal fish</strong>. Successfully catching one auto-records in your collection and triggers a server-wide announcement.</p>
<h2>Ocean Legendary Fish</h2><ul><li><strong>Golden Swordfish</strong>: Whale Sea · Shipwreck coordinates (127,84), Rainbow Day 12:00-14:00, requires <strong>Golden Bait</strong>. Recommended fishing level 10+ before attempting</li><li><strong>Deep-Sea Oarfish</strong>: Old Sea · Secret spot at the deepest trench (requires diving suit), Rainy 18:00-24:00, line stays red almost the entire time</li><li><strong>Rainbow Bream</strong>: Gentle Breeze Sea · Coral reef cluster, Rainbow Day all day, use <strong>Rainbow Bait + Mermaid Perfume</strong> dual boost</li></ul>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🦈 ⚡ 💰</span><span class="scene-label">Golden Swordfish Bite Moment — Note the golden glow and special particle effects</span></div></div><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎣 🔴 ⚠️</span><span class="scene-label">Oarfish Struggle Interface — Red line state occupies 80% of the time, extreme patience required</span></div></div></div>
<h2>Freshwater Legendary Fish</h2><ul><li><strong>Legendary Koi</strong>: Forest Lake · Secret Pond (behind the waterfall), Midnight 00:00-04:00, use <strong>Special Koi Bait</strong></li><li><strong>Golden Trout</strong>: Hot Spring Mountain Lake · Hot spring source, Rainbow Day 06:00-10:00, requires fishing level 12</li><li><strong>Arapaima</strong>: Grassland Lake · Around the central island, Rainy all day, extremely large shadow (~4× normal fish)</li></ul>
<h2>Three Golden Rules for Legendary Fish</h2><ol><li><strong>Always carry repair kits</strong> — legendary fish struggles last 60-90 seconds, rod durability drains extremely fast</li><li><strong>Team bonuses don't stack</strong> — 4-player team fishing gives independent rolls per player, but bait effects are calculated individually</li><li><strong>Only 1 legendary fish per species per 24 hours</strong> — each legendary species has its own cooldown; switch targets after catching one</li></ol>
<div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🏆 📋 ⭐</span><span class="scene-label">Legendary Fish Collection Panel — Earn unique fishing titles for every 3 species collected</span></div></div>
<h2>Legendary Fish Price Reference</h2><ul><li>Deep-Sea Oarfish: 3500-5000 gold</li><li>Golden Swordfish: 2800-4000 gold</li><li>Legendary Koi: 2000-3500 gold</li><li>Arapaima: 1800-3000 gold</li></ul>`
  },

  // ==================== 5. COOKING: Secret Recipes ====================
  {
    id: "cooking-secret-recipes",
    title: "隐藏食谱解锁大全：27道料理完整获取途径",
    titleEn: "Secret Recipe Unlock Guide: All 27 Dishes & How to Get Them",
    icon: "🍳", category: "gameplay", difficulty: 2, readTime: "12 min",
    desc: "全27道料理的详细解锁条件，含隐藏食谱触发方式、食材采购路线和料理星级评分机制解析。",
    descEn: "Detailed unlock conditions for all 27 dishes, including hidden recipe triggers, ingredient shopping routes, and star rating mechanics explained.",
    tags: ["烹饪","食谱","隐藏","解锁"],
    content: `<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📖 🍳 ⭐</span><span class="scene-label">烹饪图鉴界面 — 27道料理按等级解锁，隐藏食谱独立标注</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🛒 🧀 🥛</span><span class="scene-label">厨师商店 — 每日限购食材清单，性价比最高的投资</span></div></div></div>
<h2>食谱分类与获取途径</h2><ul><li><strong>等级解锁型（18道）</strong>：烹饪等级提升自动获得，覆盖1-10级</li><li><strong>NPC赠送型（5道）</strong>：特定NPC好感度达到朋友级别后赠送</li><li><strong>隐藏触发型（4道）</strong>：需要特定条件才能解锁，最容易错过</li></ul>
<h2>4道隐藏食谱触发条件</h2><ul><li>🔒 <strong>英式下午茶（烹饪7级）</strong>：同时持有提拉米苏和蓝莓时，去茶馆找老板娘对话触发</li><li>🔒 <strong>海鲜焗饭（烹饪6级）</strong>：背包中有帝王蟹+大米时，在渔村餐厅附近触发灵感</li><li>🔒 <strong>彩虹蛋糕（烹饪9级）</strong>：彩虹天当日制作任意蛋糕，有概率触发新食谱灵感</li><li>🔒 <strong>月光鸡尾酒（烹饪8级）</strong>：深夜22:00后去灯塔附近，持有椰子+蓝莓触发</li></ul>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">☕ 🍰 🔓</span><span class="scene-label">英式下午茶解锁瞬间 — 茶馆老板娘的特殊对话事件</span></div></div>
<h2>每日食材采购最优路线</h2><ol><li>厨师商店：牛奶×3、鸡蛋×3、奶酪×2、黄油×2、咖啡豆×5（约800金币）</li><li>渔村码头：当日特价鱼×3</li><li>农场主：时令蔬菜大礼包（比单买省30%）</li></ol>
<h2>料理星级评分机制</h2><ul><li>⭐ 1星：使用基础材料，满足基本属性</li><li>⭐⭐ 2星：使用至少1个2星以上食材</li><li>⭐⭐⭐ 3星：全部使用3星食材+烹饪时机完美判定</li></ul><p><strong>高星料理售价翻倍</strong>：3星料理售价是1星的4倍。冲烹饪等级时用1星食材练级，做出来直接卖掉。</p>`,
    contentEn: `<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📖 🍳 ⭐</span><span class="scene-label">Cooking Collection Interface — 27 dishes unlocked by level, hidden recipes marked separately</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🛒 🧀 🥛</span><span class="scene-label">Chef Shop — Daily limited ingredients list, the best value investment</span></div></div></div>
<h2>Recipe Categories & Acquisition</h2><ul><li><strong>Level Unlock (18 dishes)</strong>: Automatically obtained as cooking level increases, covering levels 1-10</li><li><strong>NPC Gift (5 dishes)</strong>: Given by specific NPCs when friendship reaches Friend level</li><li><strong>Hidden Trigger (4 dishes)</strong>: Require specific conditions to unlock — the easiest to miss</li></ul>
<h2>4 Hidden Recipe Trigger Conditions</h2><ul><li>🔒 <strong>English Afternoon Tea (Cooking Lv.7)</strong>: When holding both Tiramisu and Blueberries, talk to the teahouse owner to trigger</li><li>🔒 <strong>Seafood Gratin (Cooking Lv.6)</strong>: With King Crab + Rice in your backpack, wander near the Fishing Village restaurant to trigger inspiration</li><li>🔒 <strong>Rainbow Cake (Cooking Lv.9)</strong>: Craft any cake on a Rainbow Day for a chance to trigger a new recipe inspiration</li><li>🔒 <strong>Moonlight Cocktail (Cooking Lv.8)</strong>: After 22:00, go near the lighthouse while holding Coconut + Blueberries to trigger</li></ul>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">☕ 🍰 🔓</span><span class="scene-label">English Afternoon Tea Unlock Moment — Special dialogue event with the teahouse owner</span></div></div>
<h2>Daily Ingredient Shopping Optimal Route</h2><ol><li>Chef Shop: Milk ×3, Eggs ×3, Cheese ×2, Butter ×2, Coffee Beans ×5 (~800 gold)</li><li>Fishing Village Dock: Daily special fish ×3</li><li>Farm Owner: Seasonal vegetable bundle (30% cheaper than buying individually)</li></ol>
<h2>Dish Star Rating Mechanics</h2><ul><li>⭐ 1-Star: Basic ingredients, meets base stats</li><li>⭐⭐ 2-Star: At least one 2-star or above ingredient</li><li>⭐⭐⭐ 3-Star: All 3-star ingredients + perfect cooking timing</li></ul><p><strong>High-star dishes sell for double</strong>: 3-star dishes sell for 4× the price of 1-star. Use 1-star ingredients for leveling up cooking, then sell the results directly.</p>`
  },

  // ==================== 6. GARDENING: Profit Analysis ====================
  {
    id: "garden-profit-analysis",
    title: "园艺致富经：作物收益排行与种植优先级表",
    titleEn: "Gardening Profit Guide: Crop Ranking & Planting Priority Chart",
    icon: "🌷", category: "gameplay", difficulty: 1, readTime: "9 min",
    desc: "18种作物的收益效率完整排行，包含每分钟利润计算、在线/离线种植推荐和肥料使用策略。",
    descEn: "Complete profit efficiency ranking for all 18 crops with per-minute profit calculations, online/offline planting recommendations, and fertilizer strategy.",
    tags: ["园艺","赚钱","作物","效率"],
    content: `<div class="tutorial-img scene-farm"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📊 🌱 💰</span><span class="scene-label">作物收益对比面板 — 按每分钟利润率排序的完整排行</span></div></div>
<h2>作物收益效率排行（每分钟金币利润）</h2><ol><li>🥇 <strong>番茄</strong>：成本10金，售价50金，15分钟成熟 → <strong>2.67金/分钟</strong>（在线王者）</li><li>🥈 <strong>菠萝</strong>：成本25金，售价120金，30分钟成熟 → <strong>3.17金/分钟</strong>（但需30分钟持续在线）</li><li>🥉 <strong>草莓</strong>：成本10金，售价80金，6小时成熟 → <strong>0.19金/分钟</strong>（离线性价比之王）</li><li>4th <strong>小麦</strong>：成本5金，售价30金，4小时成熟 → <strong>0.10金/分钟</strong>（最省心）</li><li>5th <strong>生菜</strong>：成本8金，售价45金，8小时成熟 → <strong>0.08金/分钟</strong>（睡前专属）</li></ol>
<div class="img-row"><div class="tutorial-img scene-farm"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🍅 ⚡ 💰</span><span class="scene-label">番茄种植区 — 15分钟一轮，在线时的印钞机</span></div></div><div class="tutorial-img scene-farm"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🍓 😴 ⭐</span><span class="scene-label">草莓田 — 睡前播种，醒来收获，离线最优选择</span></div></div></div>
<h2>种植策略：在线 vs 离线</h2><ul><li><strong>高强度在线（30分钟+）</strong>：全种番茄，可配合跳收技巧15分钟一轮</li><li><strong>碎片时间（1-2小时）</strong>：胡萝卜（2小时）+ 穿插几株番茄</li><li><strong>离线/睡前</strong>：全种生菜（8小时）或玉米（12小时），最大化离线收益</li></ul>
<h2>肥料使用策略</h2><ul><li><strong>绿色肥料</strong>（加速20%）：用于番茄和菠萝，缩短在线等待时间</li><li><strong>蓝色肥料</strong>（增产1个）：用于草莓和生菜，离线作物收获更多</li><li><strong>红色肥料</strong>（提升星级）：极为稀有，仅用于冲烹饪高星食材时使用</li></ul>
<div class="tutorial-img scene-farm"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">💧 🔄 ⚙️</span><span class="scene-label">自动洒水器覆盖范围 — 协会15级解锁，3×3格范围</span></div></div>
<h2>种植箱增长节奏</h2><p>园艺1级(4箱)→3级(8箱)→5级(16箱)→<strong>7级(30箱)</strong>。7级是质变节点，30个种植箱全种草莓，一觉醒来净赚2100金币（30×70利润）。园艺经验通过<strong>收获次数</strong>计算，不是种植数量——所以番茄是最快升级方式。</p>`,
    contentEn: `<div class="tutorial-img scene-farm"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📊 🌱 💰</span><span class="scene-label">Crop Profit Comparison Panel — Complete ranking by per-minute profit rate</span></div></div>
<h2>Crop Profit Efficiency Ranking (Gold per Minute)</h2><ol><li>🥇 <strong>Tomato</strong>: Cost 10g, sells 50g, 15 min → <strong>2.67 gold/min</strong> (Online King)</li><li>🥈 <strong>Pineapple</strong>: Cost 25g, sells 120g, 30 min → <strong>3.17 gold/min</strong> (but requires 30 min continuous online)</li><li>🥉 <strong>Strawberry</strong>: Cost 10g, sells 80g, 6 hours → <strong>0.19 gold/min</strong> (Offline Value King)</li><li>4th <strong>Wheat</strong>: Cost 5g, sells 30g, 4 hours → <strong>0.10 gold/min</strong> (Most Hands-Off)</li><li>5th <strong>Lettuce</strong>: Cost 8g, sells 45g, 8 hours → <strong>0.08 gold/min</strong> (Bedtime Special)</li></ol>
<div class="img-row"><div class="tutorial-img scene-farm"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🍅 ⚡ 💰</span><span class="scene-label">Tomato Planting Zone — 15-minute cycles, a money printer while online</span></div></div><div class="tutorial-img scene-farm"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🍓 😴 ⭐</span><span class="scene-label">Strawberry Field — Plant before bed, harvest when you wake, optimal offline choice</span></div></div></div>
<h2>Planting Strategy: Online vs Offline</h2><ul><li><strong>Intensive online (30+ min)</strong>: All tomatoes, can use jump-harvest technique for 15-min cycles</li><li><strong>Short sessions (1-2 hours)</strong>: Carrots (2 hr) + intersperse a few tomatoes</li><li><strong>Offline / Before bed</strong>: All lettuce (8 hr) or corn (12 hr), maximize offline returns</li></ul>
<h2>Fertilizer Strategy</h2><ul><li><strong>Green Fertilizer</strong> (+20% speed): Use on tomatoes and pineapples to reduce online waiting time</li><li><strong>Blue Fertilizer</strong> (+1 yield): Use on strawberries and lettuce for more harvest from offline crops</li><li><strong>Red Fertilizer</strong> (Star boost): Extremely rare — save only for growing high-star cooking ingredients</li></ul>
<div class="tutorial-img scene-farm"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">💧 🔄 ⚙️</span><span class="scene-label">Auto Sprinkler Coverage — Unlocked at Association level 15, 3×3 tile range</span></div></div>
<h2>Planting Box Growth Rhythm</h2><p>Gardening Lv.1 (4 boxes) → Lv.3 (8) → Lv.5 (16) → <strong>Lv.7 (30 boxes)</strong>. Level 7 is the breakthrough point — 30 boxes all planted with strawberries nets 2100 gold overnight (30 × 70 profit). Gardening XP is calculated by <strong>harvest count</strong>, not number planted — so tomatoes are the fastest way to level up.</p>`
  },

  // ==================== 7. HOME: Design Aesthetics ====================
  {
    id: "home-design-styles",
    title: "房屋设计美学：5种风格装修方案与配色指南",
    titleEn: "Home Design Aesthetics: 5 Decor Styles & Color Palette Guide",
    icon: "🏠", category: "gameplay", difficulty: 2, readTime: "11 min",
    desc: "田园风、森系风、现代风、日式风、海洋风5种完整装修方案，含家具清单、配色方案和预算估价。",
    descEn: "Complete decoration plans for Rustic, Forest, Modern, Japanese, and Ocean styles with furniture lists, color palettes, and budget estimates.",
    tags: ["建造","装修","设计","配色"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎨 🏠 📐</span><span class="scene-label">5种风格对比展示 — 从左至右：田园、森系、现代、日式、海洋</span></div></div>
<h2>风格一：田园乡村风 🌾</h2><ul><li><strong>配色</strong>：奶油色+原木色+鼠尾草绿</li><li><strong>核心家具</strong>：藤编沙发（200金币图纸）、红木花架（任务奖励）、青石板小径</li><li><strong>庭院</strong>：白色栅栏+向日葵花田+木制秋千</li><li><strong>预算</strong>：约8000金币（最经济实惠的风格）</li></ul>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌾 🏡 🌻</span><span class="scene-label">田园风住宅实景 — 晨光湖畔地块，自然光线最佳</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌲 ✨ 🎵</span><span class="scene-label">森系风住宅实景 — 林间地块，私密性最好</span></div></div></div>
<h2>风格二：森系自然风 🌲</h2><ul><li><strong>配色</strong>：深绿+棕色+星空蓝</li><li><strong>核心家具</strong>：星空地毯（活动限定）、复古唱片机、蘑菇原木凳</li><li><strong>庭院</strong>：鸟浴盆+萤火虫灯笼×5+吊床</li><li><strong>预算</strong>：约15000金币（唱片机和星空地毯较贵）</li></ul>
<h2>风格三：现代简约风 🏢</h2><ul><li><strong>配色</strong>：白色+浅灰+黑色点缀</li><li><strong>核心家具</strong>：白色皮沙发、玻璃茶几、金属吊灯</li><li><strong>庭院</strong>：水泥地砖+仙人掌盆栽+几何雕塑</li></ul>
<h2>风格四：日式和风 🎋</h2><ul><li><strong>配色</strong>：米色+深棕+红色点缀</li><li><strong>核心家具</strong>：榻榻米地板、矮桌+坐垫、竹帘屏风</li><li><strong>庭院</strong>：石灯笼+枯山水沙盘+樱花树</li></ul>
<h2>风格五：海洋度假风 🌊</h2><ul><li><strong>配色</strong>：白色+海军蓝+珊瑚色</li><li><strong>核心家具</strong>：藤编吊椅、船木茶几、贝壳风铃</li><li><strong>庭院</strong>：蓝色马赛克泳池+沙滩躺椅+遮阳伞</li></ul>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎨 🖌️ ✨</span><span class="scene-label">染色工坊 — 墙面/地板/家具均可自定义染色</span></div></div>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎨 🏠 📐</span><span class="scene-label">5 Style Comparison — Left to right: Rustic, Forest, Modern, Japanese, Ocean</span></div></div>
<h2>Style 1: Rustic Country 🌾</h2><ul><li><strong>Color palette</strong>: Cream + Natural wood + Sage green</li><li><strong>Core furniture</strong>: Rattan sofa (200g blueprint), Redwood flower rack (quest reward), Bluestone path</li><li><strong>Courtyard</strong>: White fence + Sunflower field + Wooden swing</li><li><strong>Budget</strong>: ~8,000 gold (most economical style)</li></ul>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌾 🏡 🌻</span><span class="scene-label">Rustic Home — Morning Light Lakeside plot, best natural lighting</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌲 ✨ 🎵</span><span class="scene-label">Forest Home — Forest plot, best privacy</span></div></div></div>
<h2>Style 2: Forest Natural 🌲</h2><ul><li><strong>Color palette</strong>: Deep green + Brown + Starry blue</li><li><strong>Core furniture</strong>: Starry carpet (event limited), Vintage record player, Mushroom log stool</li><li><strong>Courtyard</strong>: Bird bath + Firefly lanterns ×5 + Hammock</li><li><strong>Budget</strong>: ~15,000 gold (record player and starry carpet are pricey)</li></ul>
<h2>Style 3: Modern Minimalist 🏢</h2><ul><li><strong>Color palette</strong>: White + Light gray + Black accents</li><li><strong>Core furniture</strong>: White leather sofa, Glass coffee table, Metal pendant light</li><li><strong>Courtyard</strong>: Concrete tiles + Cactus planters + Geometric sculpture</li></ul>
<h2>Style 4: Japanese Wabi-Sabi 🎋</h2><ul><li><strong>Color palette</strong>: Beige + Dark brown + Red accents</li><li><strong>Core furniture</strong>: Tatami flooring, Low table + cushions, Bamboo screen</li><li><strong>Courtyard</strong>: Stone lantern + Zen sand garden + Cherry blossom tree</li></ul>
<h2>Style 5: Ocean Resort 🌊</h2><ul><li><strong>Color palette</strong>: White + Navy blue + Coral</li><li><strong>Core furniture</strong>: Rattan hanging chair, Driftwood coffee table, Shell wind chime</li><li><strong>Courtyard</strong>: Blue mosaic pool + Beach lounger + Parasol</li></ul>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎨 🖌️ ✨</span><span class="scene-label">Dye Workshop — Walls, floors, and furniture can all be custom-dyed</span></div></div>`
  },

  // ==================== 8. NPC: Romance & Friendship ====================
  {
    id: "npc-friendship-deep",
    title: "NPC挚友攻略：送礼日程表与隐藏对话选项",
    titleEn: "NPC Best Friend Guide: Gift Schedule & Hidden Dialogue Choices",
    icon: "💝", category: "gameplay", difficulty: 2, readTime: "13 min",
    desc: "全NPC好感度深度攻略，含每日送礼最优排期、生日三倍加成提醒、隐藏对话选项和挚友专属奖励一览。",
    descEn: "In-depth NPC friendship guide with optimal daily gift scheduling, birthday triple bonus reminders, hidden dialogue options, and best friend exclusive rewards.",
    tags: ["NPC","好感度","送礼","社交"],
    content: `<div class="img-row"><div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📅 🎁 💝</span><span class="scene-label">NPC送礼日程表 — 按周循环的最优送礼排期</span></div></div><div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎂 🎉 ⭐</span><span class="scene-label">NPC生日日历 — 生日当天好感度3倍，务必标记</span></div></div></div>
<h2>每周最优送礼排期（最大化好感度增长）</h2><ul><li><strong>周一</strong>：安德鲁（赛车服男）→ 向日葵💐 | 贝莉（宠物店二楼）→ 鸟食</li><li><strong>周二</strong>：阿尔伯特（金币商人）→ 咖啡豆☕ | 万尼亚（蓝发）→ 稀有鱼</li><li><strong>周三</strong>：安妮（捕虫导师）→ 稀有昆虫标本 | 奥克（木材NPC）→ 高品质木材</li><li><strong>周四</strong>：浪花（浪花花园）→ 贝壳🐚 | 厨师→ 自己做的料理</li><li><strong>周五</strong>：回归安德鲁+贝莉（冷却已重置）</li><li><strong>周末</strong>：自由选择，优先即将生日的NPC</li></ul>
<h2>隐藏对话选项（影响好感度±20）</h2><ul><li>安德鲁问"你喜欢速度吗？"→ 选<strong>"当然！带我兜风"</strong>（+15）而非"还好吧"（+2）</li><li>贝莉问"你觉得哪只鸟最美？"→ 选<strong>"你身边那只"</strong>（+20心动）而非随便指一只（+5）</li><li>阿尔伯特说"金币是最好的朋友"→ 选<strong>"朋友才是真正的财富"</strong>触发特殊对话（+25）</li></ul>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">💬 ❤️ 🔓</span><span class="scene-label">安德鲁隐藏对话 — 选对选项触发脸红表情和额外好感度</span></div></div>
<h2>挚友专属奖励一览</h2><ul><li>🤝 <strong>安德鲁</strong>：专属跑车🚗（挚友+完成赛车任务）</li><li>🤝 <strong>阿尔伯特</strong>：商店永久30%折扣+每日免费金币</li><li>🤝 <strong>贝莉</strong>：金色望远镜🔭（观鸟距离+50%）</li><li>🤝 <strong>万尼亚</strong>：金色鱼竿🎣（耐久度翻倍）</li><li>🤝 <strong>厨师</strong>：独家食谱×3+每日免费咖啡</li></ul>
<h2>快速冲挚友的时间规划</h2><p>每天选3-4个NPC重点培养，坚持<strong>每日拜访+送最爱礼物</strong>。从零到挚友约需40-60天。遇到NPC生日务必送礼——三倍加成一天抵十天。</p>`,
    contentEn: `<div class="img-row"><div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📅 🎁 💝</span><span class="scene-label">NPC Gift Schedule — Optimal weekly gifting rotation</span></div></div><div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎂 🎉 ⭐</span><span class="scene-label">NPC Birthday Calendar — 3× friendship on birthdays, must mark your calendar</span></div></div></div>
<h2>Optimal Weekly Gift Schedule (Max Friendship Growth)</h2><ul><li><strong>Monday</strong>: Andrew (racing suit) → Sunflowers 💐 | Bailey (Pet Shop 2F) → Bird food</li><li><strong>Tuesday</strong>: Albert (gold merchant) → Coffee beans ☕ | Waniya (blue hair) → Rare fish</li><li><strong>Wednesday</strong>: Annie (bug catching mentor) → Rare insect specimen | Oak (wood NPC) → High-quality wood</li><li><strong>Thursday</strong>: Namiwa (Namiwa Garden) → Shells 🐚 | Chef → Your own cooked dishes</li><li><strong>Friday</strong>: Return to Andrew + Bailey (cooldown reset)</li><li><strong>Weekend</strong>: Free choice — prioritize NPCs with upcoming birthdays</li></ul>
<h2>Hidden Dialogue Choices (Affect Friendship by ±20)</h2><ul><li>Andrew asks "Do you like speed?" → Choose <strong>"Of course! Take me for a ride"</strong> (+15) instead of "It's okay" (+2)</li><li>Bailey asks "Which bird do you think is most beautiful?" → Choose <strong>"The one beside you"</strong> (+20 heart) instead of pointing at random (+5)</li><li>Albert says "Gold is the best friend" → Choose <strong>"Friends are the real treasure"</strong> to trigger special dialogue (+25)</li></ul>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">💬 ❤️ 🔓</span><span class="scene-label">Andrew Hidden Dialogue — Choosing the right option triggers a blush reaction and bonus friendship</span></div></div>
<h2>Best Friend Exclusive Rewards</h2><ul><li>🤝 <strong>Andrew</strong>: Exclusive sports car 🚗 (Best Friend + complete racing quest)</li><li>🤝 <strong>Albert</strong>: Permanent 30% shop discount + daily free gold</li><li>🤝 <strong>Bailey</strong>: Golden binoculars 🔭 (birdwatching distance +50%)</li><li>🤝 <strong>Waniya</strong>: Golden fishing rod 🎣 (durability doubled)</li><li>🤝 <strong>Chef</strong>: Exclusive recipes ×3 + daily free coffee</li></ul>
<h2>Fast-Track to Best Friend Timeline</h2><p>Choose 3-4 NPCs to focus on daily, consistently <strong>visit + give loved gifts</strong>. From zero to Best Friend takes roughly 40-60 days. Never miss an NPC birthday — triple bonus makes one day worth ten.</p>`
  },

  // ==================== 9. BUG CATCHING: Master Guide ====================
  {
    id: "bug-collector-master",
    title: "捕虫大师之路：全图鉴收集与稀有虫刷新机制",
    titleEn: "Bug Collector Master: Full Collection & Rare Spawn Mechanics",
    icon: "🪲", category: "gameplay", difficulty: 3, readTime: "13 min",
    desc: "全虫类图鉴的收集路线规划，含稀有虫精确刷新时间、天气联动机制和捕虫工具最优搭配方案。",
    descEn: "Complete insect collection route planning with precise rare spawn times, weather-linked mechanics, and optimal tool combinations.",
    tags: ["捕虫","图鉴","稀有","刷新"],
    content: `<div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🪲 🗺️ 📍</span><span class="scene-label">稀有虫类刷新地图 — 5大区域×4个时段完整标注</span></div></div>
<h2>虫类刷新机制详解</h2><p>虫类刷新遵循<strong>区域×时段×天气</strong>三维判定：</p><ul><li><strong>区域限定</strong>：每种虫有固定的1-3个刷新区域，不会跨区出现</li><li><strong>时段轮换</strong>：06-12 / 12-18 / 18-24 / 00-06 四个时段，每6小时切换一波</li><li><strong>天气联动</strong>：彩虹天稀有虫出现率×3，雨天某些虫完全不出现</li></ul>
<div class="img-row"><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🦋 🌈 ⭐</span><span class="scene-label">彩虹天限定 — 亚历山大凤蝶翅展可达20cm，仅彩虹天出现</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🪲 🌙 ✨</span><span class="scene-label">深夜虫类 — 南洋大兜虫在树干上，00:00-06:00专属</span></div></div></div>
<h2>TOP 5 最难捕捉稀有虫</h2><ol><li><strong>歌利亚大王花金龟</strong>：森林·小鹿塔树干，18-06点，彩虹天概率×3。灵敏度极高，必须<strong>蹲伏靠近</strong></li><li><strong>兰花螳螂</strong>：温泉山·遗迹，06-18点。会<strong>伪装成花朵</strong>，需要仔细辨别</li><li><strong>极光闪蝶</strong>：花田·风车附近，彩虹天09-15点。飞行速度极快，必须用<strong>蓄力远程</strong></li><li><strong>水晶蝉</strong>：森林湖·柳树，夏季晴天12-18点。叫声可闻但难以定位</li><li><strong>黄金鬼锹甲</strong>：森林·灵橡松林枯木，雨天18-24点。仅雨天出现，竞争少</li></ol>
<div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎯 🔧 ⚡</span><span class="scene-label">捕虫工具搭配 — 诱虫器+强化剂+彩虹花束三件套</span></div></div>
<h2>捕虫工具最优搭配</h2><ul><li><strong>日常收集</strong>：捕虫网+维修盒（基础续航）</li><li><strong>稀有虫狩猎</strong>：诱虫器+彩虹花束+强化剂+维修盒（全开buff，持续15分钟）</li><li><strong>组队刷虫</strong>：4人各带诱虫器→轮流放置→虫群密度翻4倍</li></ul>`,
    contentEn: `<div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🪲 🗺️ 📍</span><span class="scene-label">Rare Insect Spawn Map — 5 zones × 4 time periods fully marked</span></div></div>
<h2>Insect Spawn Mechanics Explained</h2><p>Insect spawning follows a <strong>Zone × Time Period × Weather</strong> three-dimensional roll:</p><ul><li><strong>Zone-locked</strong>: Each insect has 1-3 fixed spawn zones and won't appear outside them</li><li><strong>Time rotation</strong>: 06-12 / 12-18 / 18-24 / 00-06 — four periods, new wave every 6 hours</li><li><strong>Weather-linked</strong>: Rare insect appearance rate ×3 on Rainbow Days; some insects won't appear at all in rain</li></ul>
<div class="img-row"><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🦋 🌈 ⭐</span><span class="scene-label">Rainbow Day Exclusive — Alexandria Swallowtail wingspan up to 20cm, Rainbow Day only</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🪲 🌙 ✨</span><span class="scene-label">Late Night Insects — Atlas Beetle on tree trunks, 00:00-06:00 exclusive</span></div></div></div>
<h2>TOP 5 Hardest Rare Insects to Catch</h2><ol><li><strong>Goliath Beetle</strong>: Forest · Fawn Tower tree trunks, 18-06, Rainbow Day probability ×3. Extremely sensitive — must <strong>crouch-walk to approach</strong></li><li><strong>Orchid Mantis</strong>: Hot Spring Mountain · Ruins, 06-18. <strong>Disguises itself as a flower</strong> — requires careful observation</li><li><strong>Aurora Morpho Butterfly</strong>: Flower Field · Near windmill, Rainbow Day 09-15. Extremely fast flight — must use <strong>charged long-range shot</strong></li><li><strong>Crystal Cicada</strong>: Forest Lake · Willow tree, Summer sunny 12-18. Audible call but hard to pinpoint</li><li><strong>Golden Stag Beetle</strong>: Forest · Spirit Oak deadwood, Rainy 18-24. Rain-exclusive, less competition</li></ol>
<div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎯 🔧 ⚡</span><span class="scene-label">Bug Catching Tool Combo — Lure + Enhancer + Rainbow Bouquet trifecta</span></div></div>
<h2>Optimal Bug Catching Tool Combos</h2><ul><li><strong>Daily collection</strong>: Bug net + Repair kit (basic sustainability)</li><li><strong>Rare insect hunting</strong>: Lure + Rainbow Bouquet + Enhancer + Repair kit (all buffs active, 15 min duration)</li><li><strong>Team bug hunting</strong>: 4 players each bring lures → take turns placing → insect density quadruples</li></ul>`
  },

  // ==================== 10. BIRDWATCHING: Photo Scoring ====================
  {
    id: "bird-photo-scoring",
    title: "观鸟摄影秘籍：五星评价判定规则与最佳机位",
    titleEn: "Bird Photography Secrets: 5-Star Scoring Rules & Best Angles",
    icon: "📸", category: "gameplay", difficulty: 2, readTime: "10 min",
    desc: "五星照片的精确判定标准解析，含20种鸟类的推荐拍摄机位、最佳时间段和特殊动作触发条件。",
    descEn: "Precise 5-star photo scoring criteria breakdown with recommended shooting angles, optimal time windows, and special action trigger conditions for all 20 bird species.",
    tags: ["观鸟","拍照","五星","技巧"],
    content: `<div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📸 ⭐ 🎯</span><span class="scene-label">五星照片评分界面 — 构图/距离/动作/光线四维评分</span></div></div>
<h2>五星照片四维评分标准</h2><p>每张照片从四个维度打分，每个维度满分25分，总分100分=五星：</p><ul><li><strong>构图（25分）</strong>：鸟在取景框中央±10%区域=满分；偏离中心每10%扣2分</li><li><strong>距离（25分）</strong>：3-4米=满分（火烈鸟/鸮/隼需4-5米）；太近惊飞扣分，太远主体太小扣分</li><li><strong>动作（25分）</strong>：特殊动作=25分；普通动作（转头/理羽）=15分；静止=5分</li><li><strong>光线（25分）</strong>：黄金时段（06-08/17-19）=25分；正午强光=15分；背光=5分</li></ul>
<div class="img-row"><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🦉 🌅 📷</span><span class="scene-label">雕鸮黄金机位 — 森林灵橡松林枯树，黄昏17-19点</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🦩 💃 ⭐</span><span class="scene-label">火烈鸟展翅动作 — 花田浅滩，使用自动鸟哨后高概率触发</span></div></div></div>
<h2>TOP 5 高难度鸟类最佳机位</h2><ol><li><strong>美洲火烈鸟🦩</strong>：花田·浅滩，距离4-5米，黄昏17-19点。使用<strong>自动鸟哨</strong>触发展翅动作（25分动作分）</li><li><strong>雪鸮🦉</strong>：森林·灵橡松林枯树顶端，距离4米。仅在<strong>冬季夜间</strong>出现</li><li><strong>游隼🦅</strong>：温泉山·悬崖边，距离5米。会<strong>俯冲捕食</strong>（25分动作分但极难抓拍）</li><li><strong>蓝脚鲣鸟🐦</strong>：渔村·码头木桩，距离3米。标志性<strong>抬脚舞步</strong>是最佳动作</li><li><strong>铜蓝鸽🕊️</strong>：森林·地面觅食，距离3米。需<strong>蹲伏</strong>靠近才不会惊飞</li></ol>
<h2>必备道具使用技巧</h2><ul><li><strong>自动鸟哨（观鸟4级）</strong>：3分钟内鸟类频繁做动作，冷却10分钟。在确认目标鸟在视野内后再使用</li><li><strong>伪装草丛（观鸟6级）</strong>：部署后鸟不会因你靠近而飞走，可共享给12位好友</li><li><strong>金色望远镜（贝莉挚友奖励）</strong>：观鸟距离+50%，更容易找到3-5米的最佳拍摄距离</li></ul>
<div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌿 👥 🔓</span><span class="scene-label">伪装草丛部署 — 6级解锁，12人共享，组队观鸟效率翻倍</span></div></div>`,
    contentEn: `<div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📸 ⭐ 🎯</span><span class="scene-label">5-Star Photo Scoring Interface — Four-dimensional scoring: Composition / Distance / Action / Lighting</span></div></div>
<h2>5-Star Photo Four-Dimensional Scoring</h2><p>Each photo is scored across four dimensions, max 25 points each, 100 total = 5 stars:</p><ul><li><strong>Composition (25 pts)</strong>: Bird within ±10% of frame center = full marks; every 10% off-center = -2 pts</li><li><strong>Distance (25 pts)</strong>: 3-4m = full marks (flamingos/owls/falcons need 4-5m); too close scares them off, too far makes the subject too small</li><li><strong>Action (25 pts)</strong>: Special action = 25 pts; normal action (head turn/preening) = 15 pts; stationary = 5 pts</li><li><strong>Lighting (25 pts)</strong>: Golden hour (06-08/17-19) = 25 pts; harsh noon sunlight = 15 pts; backlit = 5 pts</li></ul>
<div class="img-row"><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🦉 🌅 📷</span><span class="scene-label">Eagle Owl Golden Angle — Forest Spirit Oak dead tree, dusk 17:00-19:00</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🦩 💃 ⭐</span><span class="scene-label">Flamingo Wings-Spread Action — Flower Field shallows, high probability with Auto Bird Whistle</span></div></div></div>
<h2>TOP 5 Hardest Birds — Best Shooting Angles</h2><ol><li><strong>American Flamingo 🦩</strong>: Flower Field · Shallows, 4-5m distance, dusk 17-19. Use <strong>Auto Bird Whistle</strong> to trigger wings-spread action (25 action points)</li><li><strong>Snowy Owl 🦉</strong>: Forest · Spirit Oak dead tree top, 4m distance. Only appears on <strong>winter nights</strong></li><li><strong>Peregrine Falcon 🦅</strong>: Hot Spring Mountain · Cliff edge, 5m distance. Performs <strong>dive-hunting</strong> (25 action points but extremely hard to capture)</li><li><strong>Blue-Footed Booby 🐦</strong>: Fishing Village · Dock posts, 3m distance. Iconic <strong>foot-lifting dance</strong> is the best action shot</li><li><strong>Copper-Blue Pigeon 🕊️</strong>: Forest · Ground foraging, 3m distance. Must <strong>crouch-walk</strong> to approach without startling</li></ol>
<h2>Essential Tool Usage Tips</h2><ul><li><strong>Auto Bird Whistle (Birdwatching Lv.4)</strong>: Birds perform frequent actions for 3 minutes, 10-min cooldown. Confirm the target bird is in view before using</li><li><strong>Camouflage Grass (Birdwatching Lv.6)</strong>: Deploy to prevent birds from fleeing when you approach; shareable with up to 12 friends</li><li><strong>Golden Binoculars (Bailey Best Friend reward)</strong>: Birdwatching distance +50%, makes finding the 3-5m sweet spot much easier</li></ul>
<div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌿 👥 🔓</span><span class="scene-label">Camouflage Grass Deployment — Unlocked at Lv.6, 12-player sharing, doubles team birdwatching efficiency</span></div></div>`
  },

  // ==================== 11. DAILY ROUTINE: 30-Min Efficiency ====================
  {
    id: "daily-30min-routine",
    title: "每日高效流程：30分钟完成所有核心日常任务",
    titleEn: "30-Minute Daily Routine: All Core Tasks Done Efficiently",
    icon: "⏰", category: "gameplay", difficulty: 1, readTime: "8 min",
    desc: "经过优化的每日最短路径路线图，30分钟完成所有必做事项。含时间节点提醒和一键传送点位利用。",
    descEn: "Optimized shortest daily route map to complete all must-do tasks in 30 minutes. Includes time-based reminders and teleport waypoint strategies.",
    tags: ["每日","效率","路线","清单"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🗺️ ⏱️ 🎯</span><span class="scene-label">每日最优路线图 — 按地理顺序串联所有日常点，不走回头路</span></div></div>
<h2>30分钟高效日常流程（按时间顺序）</h2>
<h3>⏰ 第1-5分钟：家园区</h3><ul><li>收获所有成熟作物→种下在线作物（番茄）</li><li>检查邮箱📬领取系统奖励</li><li>喂动物食槽（动物新邻季期间）</li></ul>
<h3>⏰ 第5-15分钟：采集巡回路</h3><ol><li>传送中心广场→居民区采集<strong>无瑕萤石×3+溜溜橡木×3</strong>（每日必刷新）</li><li>跑至森林区砍4棵大树（2小时刷新，得普通/优质木材）</li><li>沿途捡拾所有彩色泡泡（金币、材料、时装碎片）</li></ol>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌱 ⚡ 🏠</span><span class="scene-label">家园快速收种 — 站地块中间跳跃取消后摇，30秒收完</span></div></div><div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">💎 🗺️ 🎁</span><span class="scene-label">居民区每日刷新点 — 无瑕萤石和溜溜橡木固定位置</span></div></div></div>
<h3>⏰ 第15-25分钟：社交与商店</h3><ul><li>拜访3个重点NPC送礼→传送协会接5个每日委托</li><li>厨师商店买空限购食材（牛奶/鸡蛋/奶酪/咖啡豆）</li><li>商人处使用<strong>免费强制卖货</strong>（0钻石卖出2000金币）</li></ul>
<h3>⏰ 第25-30分钟：收尾</h3><ul><li>检查是否有海钓时段（12:00/21:00）→有则传送渔村</li><li>种下离线作物（睡前种生菜/玉米，碎片时间种小麦/草莓）</li><li>确认发展家5个任务全部完成</li></ul>
<div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🚢 🎣 ⏰</span><span class="scene-label">海钓时段提醒 — 12:00和21:00两场，持续30分钟</span></div></div>
<h2>不必每天做的事（省时要点）</h2><ul><li>❌ 不用每天去所有NPC——专注3-4个，轮换制</li><li>❌ 不用每天钓鱼2小时——有海钓就去，没有就跳过</li><li>❌ 不用每天装修——周末集中搞</li><li>✅ 但<strong>每日采集+泡泡+商店采购+免费强制卖货</strong>绝对不能省</li></ul>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🗺️ ⏱️ 🎯</span><span class="scene-label">Optimal Daily Route — Geographically ordered daily points, no backtracking</span></div></div>
<h2>30-Minute Efficient Daily Routine (In Sequence)</h2>
<h3>⏰ Minutes 1-5: Home Zone</h3><ul><li>Harvest all mature crops → plant online crops (tomatoes)</li><li>Check mailbox 📬 for system rewards</li><li>Feed animal troughs (during Animal Neighbor Season)</li></ul>
<h3>⏰ Minutes 5-15: Gathering Circuit</h3><ol><li>Teleport to Central Plaza → Residential area to collect <strong>Flawless Fluorite ×3 + Slippery Oak ×3</strong> (daily guaranteed respawn)</li><li>Run to Forest zone, chop 4 large trees (2-hour respawn, yields normal/quality wood)</li><li>Collect all colored bubbles along the way (gold, materials, fashion fragments)</li></ol>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌱 ⚡ 🏠</span><span class="scene-label">Quick Home Harvest — Stand in plot center, jump to cancel animation, 30 seconds to finish</span></div></div><div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">💎 🗺️ 🎁</span><span class="scene-label">Residential Area Daily Spawn Points — Flawless Fluorite and Slippery Oak fixed locations</span></div></div></div>
<h3>⏰ Minutes 15-25: Social & Shops</h3><ul><li>Visit 3 key NPCs to give gifts → teleport to Association, accept 5 daily commissions</li><li>Clean out the Chef Shop's limited ingredients (milk/eggs/cheese/coffee beans)</li><li>Use the merchant's <strong>free forced sale</strong> (0 diamonds, instantly sells 2000 gold worth)</li></ul>
<h3>⏰ Minutes 25-30: Wrap-Up</h3><ul><li>Check if an ocean fishing window is active (12:00/21:00) → if yes, teleport to Fishing Village</li><li>Plant offline crops (lettuce/corn before bed, wheat/strawberries for short sessions)</li><li>Confirm all 5 Developer Guild tasks are complete</li></ul>
<div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🚢 🎣 ⏰</span><span class="scene-label">Ocean Fishing Time Reminder — Two sessions at 12:00 and 21:00, 30 minutes each</span></div></div>
<h2>What You Don't Need to Do Daily (Time-Savers)</h2><ul><li>❌ Don't visit every NPC daily — focus on 3-4 in rotation</li><li>❌ Don't fish for 2 hours every day — go if ocean fishing is up, skip otherwise</li><li>❌ Don't decorate every day — save for weekend sessions</li><li>✅ But <strong>daily gathering + bubbles + shop purchases + free forced sale</strong> are absolutely non-negotiable</li></ul>`
  },

  // ==================== 12. EVENTS: Summer Festival ====================
  {
    id: "event-summer-festival",
    title: "夏日庆典全攻略：限定道具获取与活动任务路线",
    titleEn: "Summer Festival Complete Guide: Limited Items & Event Quest Routes",
    icon: "🎆", category: "events", difficulty: 1, readTime: "10 min",
    desc: "夏日庆典（7/15-8/15）完整攻略，包含限定家具获取顺序、每日活动任务最优路线和烟花大会参与指南。",
    descEn: "Complete Summer Festival (7/15-8/15) guide with limited furniture acquisition order, optimal daily event quest routes, and fireworks show participation guide.",
    tags: ["活动","夏日","限定","烟花"],
    content: `<div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎆 🎐 🌊</span><span class="scene-label">夏日庆典主视觉 — 烟花大会、浴衣套装、金鱼灯笼活动</span></div></div>
<h2>活动基本信息</h2><ul><li>📅 <strong>活动时间</strong>：7月15日 - 8月15日（共31天）</li><li>🎫 <strong>活动货币</strong>：夏日勋章（通过活动任务和烟花大会获得）</li><li>🏪 <strong>兑换商店</strong>：广场夏日摊位（活动结束后保留7天兑换期）</li></ul>
<h2>限定兑换物优先级（按推荐顺序）</h2><ol><li>🥇 <strong>浴衣套装（200勋章）</strong>：限定外观，活动结束后绝版。男女各一套，建议两套都换</li><li>🥈 <strong>金鱼灯笼家具（150勋章）</strong>：家园装饰，夜间发光效果。放在庭院社交互动率+15%</li><li>🥉 <strong>烟花发射器（100勋章）</strong>：可在家园自行燃放烟花，社交派对神器</li><li>4th <strong>夏日贝壳风铃（80勋章）</strong>：挂在门廊，风吹有音效</li><li>5th <strong>西瓜沙滩球（50勋章）</strong>：趣味互动道具，可和朋友玩接球</li></ol>
<div class="img-row"><div class="tutorial-img scene-night"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">👘 🎨 ✨</span><span class="scene-label">浴衣套装展示 — 男女款配色不同，活动绝版外观</span></div></div><div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎆 🌌 📸</span><span class="scene-label">烟花大会 — 每晚21:00开始，持续15分钟</span></div></div></div>
<h2>每日活动任务一览（每日最多获40勋章）</h2><ul><li>参加烟花大会（21:00-21:15）：+15勋章</li><li>完成3个夏日委托：+10勋章</li><li>和朋友合影（使用烟花背景）：+5勋章</li><li>钓到活动限定鱼「金鱼」：+5勋章</li><li>制作夏日限定料理「西瓜冰沙」：+5勋章</li></ul>
<h2>31天最大化收益策略</h2><p>每天保底40勋章×31天=1240勋章。全部限定兑换需要580勋章，<strong>剩余660勋章可兑换金币（1:50比例=33000金币）</strong>。建议前15天优先兑换限定道具，后16天全换金币。</p>
<div class="tutorial-img scene-night"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎪 🎵 👥</span><span class="scene-label">夏日摊位 — 广场中央，活动期间每日刷新限量商品</span></div></div>`,
    contentEn: `<div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎆 🎐 🌊</span><span class="scene-label">Summer Festival Key Visual — Fireworks, Yukata set, Goldfish Lantern event</span></div></div>
<h2>Event Basic Info</h2><ul><li>📅 <strong>Event Period</strong>: July 15 - August 15 (31 days total)</li><li>🎫 <strong>Event Currency</strong>: Summer Medals (earned through event quests and fireworks shows)</li><li>🏪 <strong>Exchange Shop</strong>: Plaza Summer Stall (7-day grace period after event ends)</li></ul>
<h2>Limited Exchange Priority (Recommended Order)</h2><ol><li>🥇 <strong>Yukata Set (200 medals)</strong>: Limited appearance, gone after event. Male and female versions — recommend getting both</li><li>🥈 <strong>Goldfish Lantern Furniture (150 medals)</strong>: Home decor with nighttime glow effect. +15% social interaction rate when placed in courtyard</li><li>🥉 <strong>Firework Launcher (100 medals)</strong>: Launch fireworks from your own home — social party essential</li><li>4th <strong>Summer Shell Wind Chime (80 medals)</strong>: Hang on the porch, wind-activated sound effects</li><li>5th <strong>Watermelon Beach Ball (50 medals)</strong>: Fun interactive prop, play catch with friends</li></ol>
<div class="img-row"><div class="tutorial-img scene-night"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">👘 🎨 ✨</span><span class="scene-label">Yukata Set Showcase — Different color schemes for male/female, event-exclusive appearance</span></div></div><div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎆 🌌 📸</span><span class="scene-label">Fireworks Show — Every night at 21:00, lasts 15 minutes</span></div></div></div>
<h2>Daily Event Quest Overview (Max 40 Medals/Day)</h2><ul><li>Attend fireworks show (21:00-21:15): +15 medals</li><li>Complete 3 summer commissions: +10 medals</li><li>Take a photo with a friend (fireworks background): +5 medals</li><li>Catch the event-limited "Goldfish": +5 medals</li><li>Cook the summer-limited "Watermelon Smoothie": +5 medals</li></ul>
<h2>31-Day Max Profit Strategy</h2><p>Guaranteed 40 medals/day × 31 days = 1240 medals. All limited items cost 580 medals total, <strong>leaving 660 medals to exchange for gold (1:50 rate = 33,000 gold)</strong>. Recommended: first 15 days prioritize limited items, remaining 16 days convert all to gold.</p>
<div class="tutorial-img scene-night"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎪 🎵 👥</span><span class="scene-label">Summer Stall — Central Plaza, daily refreshed limited goods during the event</span></div></div>`
  },

  // ==================== 13. PETS: Complete Handbook ====================
  {
    id: "pet-complete-handbook",
    title: "宠物完全手册：猫咪狗狗双全的养成路线",
    titleEn: "Complete Pet Handbook: Raising Both Cats and Dogs",
    icon: "🐱", category: "gameplay", difficulty: 1, readTime: "11 min",
    desc: "从猫咪入门到解锁狗狗的完整宠物养成路线。含品种选择建议、互动技巧、时刻图鉴和宠物房建造方案。",
    descEn: "Complete pet-raising roadmap from starting with cats to unlocking dogs. Includes breed selection advice, interaction tips, moment collection, and pet room building plans.",
    tags: ["宠物","猫咪","狗狗","养成"],
    content: `<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🐱 🐶 💕</span><span class="scene-label">宠物全家福 — 猫狗双全的家园日常</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📖 ⭐ 🏆</span><span class="scene-label">猫咪时刻图鉴 — 收集星级解锁狮身猫面像和满愿星</span></div></div></div>
<h2>猫咪养成路线（默认解锁 → 10级前完成）</h2><ul><li><strong>基础互动</strong>：抚摸、喂食、玩耍——每天3次互动提升成长值</li><li><strong>姿势教学</strong>：猫咪3级解锁"教动作"功能，每学一个新动作解锁对应图鉴</li><li><strong>第二只猫</strong>：猫咪等级3级解锁，建议选不同性格的猫（活泼/温顺搭配）</li></ul>
<h2>12种猫咪品种一览</h2><ul><li>🐱 <strong>橘猫</strong>：食量大，成长快——新手首选</li><li>🐱 <strong>英短</strong>：温顺易上手，互动成功率高</li><li>🐱 <strong>暹罗猫</strong>：活泼好动，动作学习速度快20%</li><li>🐱 <strong>布偶猫</strong>：颜值最高，社交花园最受欢迎</li><li>🐱 <strong>黑猫</strong>：夜间活跃，时刻触发概率+10%</li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🐶 🔓 ⭐</span><span class="scene-label">狗狗解锁界面 — 发展家12级+完成养猫任务后开放</span></div></div>
<h2>狗狗解锁与养成</h2><ul><li>🔑 <strong>解锁条件</strong>：发展家12级 + 完成全部养猫爱好任务</li><li>🐕 可领养8类犬种：柴犬、柯基、金毛、哈士奇、萨摩耶、法斗、边牧、泰迪</li><li>🏠 最多同时养<strong>3只狗+2只猫</strong></li></ul>
<h2>宠物房建造建议</h2><ul><li>用地：1块灵活备用地的角落（约3×4格）</li><li>核心家具：宠物窝×2、食盆×2、玩具架、猫爬架</li><li>地板：推荐木地板（宠物不容易打滑）</li><li>灯光：暖黄色感应灯（夜间自动亮，宠物更安心）</li></ul>
<h2>养宠常见误区</h2><ul><li>❌ 每天送猫粮狗粮——成本高回报低，不如多互动</li><li>❌ 只养一只猫到10级——3级就可以养第二只了，双倍成长效率</li><li>✅ 互动提升成长值效率远高于送礼</li><li>✅ 10级前务必完成养猫任务，否则12级无法解锁养狗</li></ul>`,
    contentEn: `<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🐱 🐶 💕</span><span class="scene-label">Pet Family Portrait — Daily life with both cats and dogs at home</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📖 ⭐ 🏆</span><span class="scene-label">Cat Moment Collection — Collect stars to unlock Sphinx Cat Statue and Wish Stars</span></div></div></div>
<h2>Cat Raising Roadmap (Auto-unlocked → Complete Before Level 10)</h2><ul><li><strong>Basic interactions</strong>: Pet, feed, play — 3 interactions daily to boost growth value</li><li><strong>Trick teaching</strong>: At cat level 3, unlock the "teach trick" function — each new trick unlocks its collection entry</li><li><strong>Second cat</strong>: Unlocked at cat level 3; recommend choosing a cat with a different personality (active/gentle combo)</li></ul>
<h2>12 Cat Breeds Overview</h2><ul><li>🐱 <strong>Orange Tabby</strong>: Big appetite, fast growth — best for beginners</li><li>🐱 <strong>British Shorthair</strong>: Gentle and easy, high interaction success rate</li><li>🐱 <strong>Siamese</strong>: Energetic and active, learns tricks 20% faster</li><li>🐱 <strong>Ragdoll</strong>: Highest appearance score, most popular in social gardens</li><li>🐱 <strong>Black Cat</strong>: Active at night, moment trigger probability +10%</li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🐶 🔓 ⭐</span><span class="scene-label">Dog Unlock Interface — Available at Developer Level 12 + after completing all cat hobby quests</span></div></div>
<h2>Dog Unlocking & Raising</h2><ul><li>🔑 <strong>Unlock conditions</strong>: Developer Level 12 + complete all cat hobby quests</li><li>🐕 8 dog breeds available: Shiba Inu, Corgi, Golden Retriever, Husky, Samoyed, French Bulldog, Border Collie, Teddy</li><li>🏠 Maximum simultaneous pets: <strong>3 dogs + 2 cats</strong></li></ul>
<h2>Pet Room Building Recommendations</h2><ul><li>Space: One corner of the flexible spare plot (~3×4 tiles)</li><li>Core furniture: Pet bed ×2, Food bowl ×2, Toy shelf, Cat tree</li><li>Flooring: Wood flooring recommended (less slippery for pets)</li><li>Lighting: Warm yellow motion-sensor light (auto-on at night, pets feel safer)</li></ul>
<h2>Common Pet Care Mistakes</h2><ul><li>❌ Giving cat/dog food daily — high cost, low return; interacting is better</li><li>❌ Raising only one cat until level 10 — you can get a second cat at level 3 for double growth efficiency</li><li>✅ Interaction raises growth value far more efficiently than gifting</li><li>✅ Must complete cat quests before level 10, otherwise dogs remain locked at level 12</li></ul>`
  },

  // ==================== 14. SOCIAL: Multiplayer Guide ====================
  {
    id: "social-multiplayer-guide",
    title: "社交联机指南：组队加成机制与好友互动全解析",
    titleEn: "Social Multiplayer Guide: Team Bonuses & Friend Interactions",
    icon: "👫", category: "gameplay", difficulty: 1, readTime: "9 min",
    desc: "组队钓鱼/捕虫/观鸟的效率加成数据，好友家园互访礼仪，社交花园派对举办技巧和借宿恢复体力机制。",
    descEn: "Team fishing/bug catching/birdwatching efficiency bonus data, friend home visit etiquette, social garden party hosting tips, and house-resting stamina recovery mechanics.",
    tags: ["社交","组队","好友","联机"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">👥 🤝 🌐</span><span class="scene-label">社交广场 — 组队出发前集合点，最多4人一队</span></div></div>
<h2>组队加成数据一览</h2><ul><li><strong>钓鱼组队（2-4人）</strong>：每人独立判定+稀有鱼出现概率+15%（4人时+30%）。海钓租船4人最划算</li><li><strong>捕虫组队</strong>：轮流放置诱虫器，虫群密度翻倍（4人时密度×4）。每人独立捕捉不冲突</li><li><strong>观鸟组队</strong>：伪装草丛可共享12人，自动鸟哨效果范围翻倍。组队拍照可解锁合影动作</li><li><strong>烹饪组队</strong>：灶台可互相使用，4人同时料理效率×4。品字形灶台最多4人同时操作</li></ul>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🚢 🎣 👥</span><span class="scene-label">海钓4人组队 — 租船费用均摊，彩虹花束+香水效果叠加</span></div></div><div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎉 🎵 📸</span><span class="scene-label">社交花园派对 — 折叠长桌+烧烤架+音乐=互动率翻倍</span></div></div></div>
<h2>好友家园互访礼仪（提升社交评分）</h2><ul><li>👍 参观后<strong>点赞</strong>对方的家园（每天最多点赞10次，每次获得社交积分）</li><li>👍 在留言板留下正面评价（对方收到通知）</li><li>👍 参加好友举办的派对（派对结束后点赞，双方获得金币奖励）</li><li>👎 不要在别人家园乱砍树或采摘（会降低社交评分）</li></ul>
<h2>借宿恢复体力机制</h2><ul><li>体力＜50时，点击别人家的<strong>红色房屋</strong>可借宿</li><li>每5秒恢复1点体力，最多恢复到满</li><li><strong>每天免费3次</strong>，第4次起消耗社交积分</li><li>借宿期间可以和屋主聊天（额外好感度）</li></ul>
<h2>社交花园派对举办指南</h2><ul><li>需要的家具：折叠长桌+烧烤架+音乐播放器（三件套约3000金币）</li><li>举办时间：周末19:00-22:00参与人数最多</li><li>派对结束后自动统计参与人数，<strong>每人给你+50金币+5社交积分</strong></li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">😴 🏠 💚</span><span class="scene-label">借宿界面 — 点击红色房屋进入休息，体力恢复速度可观</span></div></div>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">👥 🤝 🌐</span><span class="scene-label">Social Plaza — Team gathering point before heading out, max 4 per team</span></div></div>
<h2>Team Bonus Data Overview</h2><ul><li><strong>Fishing team (2-4 players)</strong>: Independent rolls per player + rare fish appearance +15% (+30% with 4). Ocean fishing boat rental split 4 ways is most cost-effective</li><li><strong>Bug catching team</strong>: Take turns placing lures, insect density doubles (×4 density with 4 players). Each player catches independently without conflict</li><li><strong>Birdwatching team</strong>: Camouflage grass shared with up to 12 people, auto bird whistle range doubled. Team photos unlock group photo poses</li><li><strong>Cooking team</strong>: Stoves can be shared; 4 players cooking simultaneously = ×4 efficiency. Triangle stove layout supports up to 4 simultaneous cooks</li></ul>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🚢 🎣 👥</span><span class="scene-label">Ocean Fishing 4-Player Team — Boat rental cost shared, Rainbow Bouquet + Perfume effects stack</span></div></div><div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎉 🎵 📸</span><span class="scene-label">Social Garden Party — Folding table + BBQ grill + Music = Doubled interaction rate</span></div></div></div>
<h2>Friend Home Visit Etiquette (Raises Social Score)</h2><ul><li>👍 <strong>Like</strong> their home after visiting (max 10 likes/day, each earns social points)</li><li>👍 Leave positive comments on their message board (they'll receive a notification)</li><li>👍 Attend parties hosted by friends (like the party afterward for mutual gold rewards)</li><li>👎 Don't chop trees or harvest crops on others' property (lowers your social score)</li></ul>
<h2>House-Resting Stamina Recovery Mechanics</h2><ul><li>When stamina is below 50, click on someone's <strong>red house</strong> to rest</li><li>Recovers 1 stamina every 5 seconds, up to full</li><li><strong>3 free uses daily</strong>; 4th use onward costs social points</li><li>Can chat with the homeowner while resting (bonus friendship points)</li></ul>
<h2>Social Garden Party Hosting Guide</h2><ul><li>Required furniture: Folding long table + BBQ grill + Music player (the trifecta, ~3000 gold)</li><li>Best time to host: Weekends 19:00-22:00 for maximum attendance</li><li>After-party auto-counts participants — <strong>each attendee gives you +50 gold +5 social points</strong></li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">😴 🏠 💚</span><span class="scene-label">Resting Interface — Click a red house to rest, stamina recovery rate is substantial</span></div></div>`
  },

  // ==================== 15. RARE RESOURCES: Daily Farm Route ====================
  {
    id: "rare-resources-route",
    title: "稀有资源地图：每日刷新点与最优采集路线规划",
    titleEn: "Rare Resources Map: Daily Spawn Points & Optimal Gathering Routes",
    icon: "💎", category: "gameplay", difficulty: 2, readTime: "10 min",
    desc: "无瑕萤石、溜溜橡木、珍稀木材等7种每日刷新资源的精确位置地图和5分钟快速采集路线。",
    descEn: "Precise location maps for 7 daily respawning resources including Flawless Fluorite, Slippery Oak, and rare wood, with a 5-minute speed-gathering route.",
    tags: ["资源","采集","稀有","地图"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🗺️ 💎 📍</span><span class="scene-label">全资源刷新点地图 — 7种稀有资源×每日刷新时间标注</span></div></div>
<h2>7种每日必采稀有资源</h2><ol><li><strong>无瑕萤石💎</strong>：居民区固定3个点（安德鲁家门口、广场喷泉旁、教堂后花园），每日06:00刷新。用于高级家具制作</li><li><strong>溜溜橡木🪵</strong>：居民区固定3个点（邮局旁、贝莉宠物店楼下、咖啡馆露台），每日06:00刷新。家园扩建必备</li><li><strong>珍稀木材🌳</strong>：森林区4棵大树，2小时刷新。做高级家具的核心材料</li><li><strong>金色矿石⛏️</strong>：温泉山矿区3个矿点，每日12:00和24:00各刷新一次</li></ol>
<div class="img-row"><div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">💎 🏠 📍</span><span class="scene-label">无瑕萤石刷新点 — 安德鲁家门口的固定刷新位置</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌳 🪓 ⏱️</span><span class="scene-label">森林区4棵大树 — 2小时刷新，标注最佳砍伐顺序</span></div></div></div>
<h2>5分钟快速采集最优路线</h2>
<h3>🕕 06:00 早班车（推荐每天执行）</h3><ol><li>传送到<strong>中心广场</strong>→跑喷泉旁捡无瑕萤石#1（10秒）</li><li>向右跑到<strong>安德鲁家</strong>→捡无瑕萤石#2+溜溜橡木#1（20秒）</li><li>向前跑到<strong>邮局</strong>→捡溜溜橡木#2（15秒）</li><li>左转去<strong>宠物店楼下</strong>→捡溜溜橡木#3（20秒）</li><li>绕到<strong>教堂后花园</strong>→捡无瑕萤石#3（25秒）</li><li>传送<strong>森林区</strong>→砍4棵大树（2分钟）</li><li>传送<strong>温泉山</strong>→挖矿（1分钟，仅12:00/24:00刷新时执行）</li></ol>
<p><strong>总计：约5分钟完成一圈，收益约3000金币等值材料</strong></p>
<div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">⛏️ 💎 ⚡</span><span class="scene-label">温泉山矿区 — 3个金色矿点，正午和午夜各刷新一次</span></div></div>
<h2>资源管理与使用建议</h2><ul><li>🔴 <strong>绝对不要卖</strong>：无瑕萤石、溜溜橡木（后期需求量大，前期卖了后期哭）</li><li>🟡 <strong>可以卖一部分</strong>：珍稀木材（每天砍4棵树有稳定来源，多余的卖）</li><li>🟢 <strong>优先卖掉</strong>：普通木材/石料（获取容易，占背包空间）</li></ul>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🗺️ 💎 📍</span><span class="scene-label">Full Resource Spawn Map — 7 rare resources × daily respawn times marked</span></div></div>
<h2>7 Daily Must-Gather Rare Resources</h2><ol><li><strong>Flawless Fluorite 💎</strong>: 3 fixed spots in Residential Area (Andrew's doorstep, Plaza fountain side, Church back garden), respawns daily at 06:00. Used for advanced furniture crafting</li><li><strong>Slippery Oak Wood 🪵</strong>: 3 fixed spots in Residential Area (next to Post Office, below Bailey's Pet Shop, Cafe terrace), respawns daily at 06:00. Essential for home expansion</li><li><strong>Rare Wood 🌳</strong>: 4 large trees in Forest zone, 2-hour respawn. Core material for advanced furniture</li><li><strong>Golden Ore ⛏️</strong>: 3 mining nodes in Hot Spring Mountain mine, respawns daily at 12:00 and 24:00</li></ol>
<div class="img-row"><div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">💎 🏠 📍</span><span class="scene-label">Flawless Fluorite Spawn — Fixed spawn location at Andrew's doorstep</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌳 🪓 ⏱️</span><span class="scene-label">Forest Zone 4 Large Trees — 2-hour respawn, optimal chopping order marked</span></div></div></div>
<h2>5-Minute Speed Gathering Optimal Route</h2>
<h3>🕕 06:00 Morning Run (Recommended Daily)</h3><ol><li>Teleport to <strong>Central Plaza</strong> → collect Flawless Fluorite #1 at the fountain (10 sec)</li><li>Run right to <strong>Andrew's house</strong> → collect Flawless Fluorite #2 + Slippery Oak #1 (20 sec)</li><li>Run forward to <strong>Post Office</strong> → collect Slippery Oak #2 (15 sec)</li><li>Turn left to <strong>below Pet Shop</strong> → collect Slippery Oak #3 (20 sec)</li><li>Circle to <strong>Church back garden</strong> → collect Flawless Fluorite #3 (25 sec)</li><li>Teleport to <strong>Forest Zone</strong> → chop 4 large trees (2 min)</li><li>Teleport to <strong>Hot Spring Mountain</strong> → mine ore (1 min, only at 12:00/24:00 refresh windows)</li></ol>
<p><strong>Total: ~5 minutes per circuit, yields ~3000 gold equivalent in materials</strong></p>
<div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">⛏️ 💎 ⚡</span><span class="scene-label">Hot Spring Mountain Mine — 3 golden ore nodes, respawn at noon and midnight</span></div></div>
<h2>Resource Management & Usage Tips</h2><ul><li>🔴 <strong>Never sell</strong>: Flawless Fluorite, Slippery Oak (massive late-game demand — you'll regret selling early)</li><li>🟡 <strong>Sell some</strong>: Rare wood (stable daily supply from 4 trees, sell the excess)</li><li>🟢 <strong>Sell first</strong>: Normal wood/stone (easy to obtain, takes up backpack space)</li></ul>`
  },

  // ==================== 16. HIDDEN SECRETS: Easter Eggs ====================
  {
    id: "hidden-secrets-easter",
    title: "隐藏彩蛋与秘密：小镇不为人知的15个特殊玩法",
    titleEn: "Hidden Secrets & Easter Eggs: 15 Special Gameplay Discoveries",
    icon: "🔮", category: "gameplay", difficulty: 3, readTime: "14 min",
    desc: "瀑布后的秘密池塘、午夜幽灵列车、彩虹天隐藏NPC等15个隐藏彩蛋的触发条件和奖励。",
    descEn: "Trigger conditions and rewards for 15 hidden easter eggs including the secret pond behind the waterfall, the midnight ghost train, and the Rainbow Day hidden NPC.",
    tags: ["隐藏","彩蛋","秘密","探索"],
    content: `<div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🔮 🗝️ ✨</span><span class="scene-label">隐藏要素总览地图 — 15个秘密位置和触发条件标注</span></div></div>
<h2>15个隐藏彩蛋完整清单</h2>
<h3>🗺️ 秘密地点（5个）</h3><ol><li><strong>瀑布后的秘密池塘</strong>：森林湖瀑布后方有隐藏入口（走到瀑布正下方自动进入）。传说锦鲤唯一钓点，午夜00-04点开放</li><li><strong>灯塔顶层的望远镜</strong>：深夜22点后爬灯塔，使用望远镜可看到<strong>幽灵船</strong>（截图可获隐藏成就"海洋守望者"）</li><li><strong>温泉山废弃矿洞</strong>：温泉山北侧隐藏入口（需要镐子敲开藤蔓），洞内有<strong>金色矿石×5+隐藏宝箱</strong></li><li><strong>教堂钟楼的鸽子王</strong>：周日06:00爬上教堂钟楼，会遇到白鸽王（可拍照，五星照片必得）</li><li><strong>海底沉船密室</strong>：旧海潜水到达沉船内部，有<strong>隐藏宝箱+古代金币×10</strong></li></ol>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌊 🚪 💎</span><span class="scene-label">瀑布后的秘密池塘 — 传说锦鲤唯一钓点，午夜限定</span></div></div><div class="tutorial-img scene-night"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">👻 🚂 🌙</span><span class="scene-label">幽灵列车 — 每月15日午夜经过小镇火车站，持续3分钟</span></div></div></div>
<h3>⏰ 时间触发事件（5个）</h3><ol start="6"><li><strong>午夜幽灵列车</strong>：每月<strong>15日00:00</strong>，火车站出现幽灵列车经过（持续3分钟）。拍照获隐藏成就"灵界旅人"</li><li><strong>彩虹天双彩虹</strong>：彩虹天17:00-18:00，站在广场喷泉特定角度可看到<strong>双彩虹</strong>。此时拍照有隐藏相框特效</li><li><strong>流星许愿</strong>：夏季晴朗夜晚22:00-04:00，随机出现流星。点击许愿获得<strong>满愿星×5-10</strong></li><li><strong>海豚群</strong>：彩虹天清晨06:00-08:00，渔村码头远处海面出现海豚群跳跃</li><li><strong>满月狼嚎</strong>：满月夜晚（查看月相），森林区22:00后能听到狼嚎——此时去温泉山有概率遇到<strong>白狼NPC</strong></li></ol>
<h3>🎭 隐藏NPC与互动（5个）</h3><ol start="11"><li><strong>旅行商人"老罗"</strong>：每周三和周六随机出现，售卖限定家具和稀有种子。出现时全服通知</li><li><strong>迷路的画家</strong>：雨天在森林区随机出现，帮她找到丢失的画笔获得<strong>定制画作家具</strong></li><li><strong>猫婆婆</strong>：每天12:00-14:00出现在渔村，送她鱼可以获得<strong>猫薄荷</strong>（猫咪互动效率翻倍）</li><li><strong>沙滩音乐家</strong>：周末傍晚在渔村沙滩弹吉他，听他演奏3分钟获得<strong>乐谱家具</strong></li><li><strong>神秘送信鸟</strong>：每天早上有小概率在邮箱旁出现一只戴信筒的鸟，互动获得<strong>隐藏任务线索</strong></li></ol>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌠 🙏 ⭐</span><span class="scene-label">流星许愿 — 夏夜22点后随机触发，快速获得满愿星</span></div></div>
<h2>隐藏成就一览</h2><ul><li>🏆 海洋守望者：灯塔看到幽灵船</li><li>🏆 灵界旅人：拍摄幽灵列车</li><li>🏆 双虹见证者：拍摄双彩虹</li><li>🏆 白狼之友：与白狼NPC互动3次</li><li>🏆 秘密探索者：发现全部5个秘密地点</li></ul>`,
    contentEn: `<div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🔮 🗝️ ✨</span><span class="scene-label">Hidden Content Overview Map — 15 secret locations and trigger conditions marked</span></div></div>
<h2>Complete List of 15 Hidden Easter Eggs</h2>
<h3>🗺️ Secret Locations (5)</h3><ol><li><strong>Secret Pond Behind the Waterfall</strong>: Hidden entrance behind Forest Lake waterfall (walk directly beneath the waterfall to auto-enter). The only fishing spot for the Legendary Koi, open midnight 00:00-04:00</li><li><strong>Lighthouse Tower Telescope</strong>: After 22:00, climb the lighthouse and use the telescope to spot the <strong>Ghost Ship</strong> (screenshot earns hidden achievement "Ocean Watcher")</li><li><strong>Hot Spring Mountain Abandoned Mine</strong>: Hidden entrance on the north side of Hot Spring Mountain (need pickaxe to clear vines), contains <strong>Golden Ore ×5 + Hidden Treasure Chest</strong></li><li><strong>Church Bell Tower Pigeon King</strong>: Sunday 06:00 climb the church bell tower to meet the White Pigeon King (photo opportunity — guaranteed 5-star photo if conditions met)</li><li><strong>Underwater Shipwreck Chamber</strong>: Dive at Old Sea to reach inside the shipwreck, contains <strong>Hidden Treasure Chest + Ancient Coins ×10</strong></li></ol>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌊 🚪 💎</span><span class="scene-label">Secret Pond Behind Waterfall — Legendary Koi's only fishing spot, midnight exclusive</span></div></div><div class="tutorial-img scene-night"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">👻 🚂 🌙</span><span class="scene-label">Ghost Train — Passes through town station on the 15th of each month at midnight, lasts 3 minutes</span></div></div></div>
<h3>⏰ Time-Triggered Events (5)</h3><ol start="6"><li><strong>Midnight Ghost Train</strong>: Every month on the <strong>15th at 00:00</strong>, a ghost train passes through the train station (lasts 3 min). Screenshot earns hidden achievement "Spirit Realm Traveler"</li><li><strong>Rainbow Day Double Rainbow</strong>: Rainbow Day 17:00-18:00, stand at a specific angle at the Plaza fountain to see a <strong>double rainbow</strong>. Photos taken now have a hidden frame effect</li><li><strong>Shooting Star Wish</strong>: Summer clear nights 22:00-04:00, shooting stars appear randomly. Click to make a wish and receive <strong>Wish Stars ×5-10</strong></li><li><strong>Dolphin Pod</strong>: Rainbow Day early morning 06:00-08:00, dolphins appear jumping in the distant sea from the Fishing Village dock</li><li><strong>Full Moon Wolf Howl</strong>: Full moon nights (check moon phase), after 22:00 in Forest zone you can hear wolf howls — go to Hot Spring Mountain for a chance to encounter the <strong>White Wolf NPC</strong></li></ol>
<h3>🎭 Hidden NPCs & Interactions (5)</h3><ol start="11"><li><strong>Traveling Merchant "Old Luo"</strong>: Appears randomly every Wednesday and Saturday, selling limited furniture and rare seeds. Server-wide notification on appearance</li><li><strong>Lost Painter</strong>: Randomly appears in Forest zone on rainy days. Help her find her lost paintbrush for a <strong>custom painting furniture piece</strong></li><li><strong>Cat Granny</strong>: Appears in Fishing Village daily 12:00-14:00. Give her fish to receive <strong>Catnip</strong> (doubles cat interaction efficiency)</li><li><strong>Beach Musician</strong>: Plays guitar on Fishing Village beach on weekend evenings. Listen for 3 minutes to earn <strong>Sheet Music furniture</strong></li><li><strong>Mysterious Messenger Bird</strong>: Small chance each morning of a bird with a mail tube appearing next to your mailbox. Interact to receive a <strong>hidden quest clue</strong></li></ol>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌠 🙏 ⭐</span><span class="scene-label">Shooting Star Wish — Randomly triggers after 22:00 on summer nights, quick source of Wish Stars</span></div></div>
<h2>Hidden Achievements List</h2><ul><li>🏆 Ocean Watcher: Spot the ghost ship from the lighthouse</li><li>🏆 Spirit Realm Traveler: Photograph the ghost train</li><li>🏆 Double Rainbow Witness: Photograph the double rainbow</li><li>🏆 White Wolf Friend: Interact with the White Wolf NPC 3 times</li><li>🏆 Secret Explorer: Discover all 5 secret locations</li></ul>`
  },

  // ==================== 17. MONEY: 100K Daily Ultimate Guide ====================
  {
    id: "money-100k-daily",
    title: "日入10万金币终极指南：从温饱到富甲一方",
    titleEn: "100K Gold Daily Ultimate Guide: From Struggling to Rich",
    icon: "💰", category: "gameplay", difficulty: 2, readTime: "13 min",
    desc: "综合运用烹饪、钓鱼、园艺、倒卖四大赚钱渠道，从新手到日入10万的完整进阶路线。含各阶段赚钱优先级和效率对比。",
    descEn: "Combine cooking, fishing, gardening, and reselling into a complete money-making roadmap from beginner to 100K daily income, with phase-based profit comparisons.",
    tags: ["赚钱","金币","财富","效率"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">💰 📈 🎯</span><span class="scene-label">金币收入面板 — 四大赚钱渠道每日收益统计总览</span></div></div>
<h2>赚钱渠道效率排行榜</h2><p>经过100小时实测，五大赚钱渠道的时薪排行：</p><ol><li>🥇 <strong>烹饪（时薪8000-15000金币）</strong>：高星提拉米苏、英式下午茶利润惊人</li><li>🥈 <strong>钓鱼（时薪5000-10000金币）</strong>：彩虹天帝王蟹一只3W，海钓黄金帝王蟹更高</li><li>🥉 <strong>园艺（时薪3000-5000金币）</strong>：番茄在线刷+草莓离线收，稳定现金流</li><li>4th <strong>倒卖（时薪2000-8000金币）</strong>：周六家具套装、周三服装店限定，利润差异大</li><li>5th <strong>商人免费卖货（每日固定2000金币）</strong>：零成本纯利润，绝对不能错过</li></ol>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🍳 💰 📊</span><span class="scene-label">烹饪利润面板 — 提拉米苏制作中，高星售价是1星的8倍</span></div></div><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🦀 🌈 💎</span><span class="scene-label">帝王蟹钓点 — 鲸鱼海彩虹天，单只售价3W金币</span></div></div></div>
<h2>阶段一：新手期（日入5000-10000）</h2><ul><li><strong>核心策略</strong>：番茄在线刷+钓鱼变现+每日免费卖货</li><li>种满番茄20块地，15分钟一轮，在线2小时可收获8轮</li><li>保留1星鱼做炸鱼薯条，高星鱼全部卖掉</li><li>每天商人处免费卖出2000金币的货</li><li><strong>日收入</strong>：番茄3600+钓鱼3000+卖货2000+其他1400=10000金币</li></ul>
<h2>阶段二：进阶期（日入20000-50000）</h2><ul><li><strong>核心策略</strong>：烹饪4级海鲜披萨+种小麦做番茄酱</li><li>种地4级解锁小麦，烹饪4级解锁海鲜披萨和番茄酱</li><li>小麦+番茄=番茄酱组合，一波收益超3万金币</li><li>烹饪完的食物比单吃食材回体多得多，体力循环已建立</li><li>建议烹饪直接点到7级，解锁提拉米苏后进入爆发期</li></ul>
<h2>阶段三：爆发期（日入50000-100000）</h2><ul><li><strong>核心策略</strong>：烹饪7级提拉米苏循环+彩虹天帝王蟹+倒卖</li><li>提拉米苏配方：咖啡豆+鸡蛋+牛奶+奶酪（每日厨师商店买满）</li><li>高星提拉米苏售价极高，一星留作体力补给</li><li>7级实现<strong>无限体力循环</strong>：做四份吃三份，剩一份卖钱，体力越用越多</li><li>彩虹天钓帝王蟹（6-24点鲸鱼海，大鱼影，每只3W金币）</li><li>周六家具店打折囤货→转手卖出利润翻倍</li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🔄 ♾️ ⚡</span><span class="scene-label">无限体力循环示意 — 7级烹饪做四吃三，剩一份纯利润</span></div></div>
<h2>日入10W参考日程表</h2><table><thead><tr><th>时间</th><th>活动</th><th>预计收入</th></tr></thead><tbody><tr><td>06:00-06:30</td><td>每日采集+泡泡+商店采购</td><td>3000</td></tr><tr><td>06:30-08:00</td><td>番茄种植+烹饪循环</td><td>15000</td></tr><tr><td>12:00-13:00</td><td>海钓组队（12点场）</td><td>10000</td></tr><tr><td>14:00-16:00</td><td>烹饪提拉米苏批量生产</td><td>25000</td></tr><tr><td>18:00-19:00</td><td>彩虹天稀有鱼/虫狩猎</td><td>20000</td></tr><tr><td>21:00-22:00</td><td>海钓组队（21点场）+卖货</td><td>15000</td></tr><tr><td>睡前</td><td>种下30箱草莓/生菜</td><td>7000（次日收）</td></tr></tbody></table>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">💰 📈 🎯</span><span class="scene-label">Gold Income Panel — Daily earnings overview across all four money-making channels</span></div></div>
<h2>Money-Making Channel Efficiency Ranking</h2><p>Based on 100+ hours of testing, here are the hourly rates for the five major income channels:</p><ol><li>🥇 <strong>Cooking (8K-15K gold/hour)</strong>: High-star Tiramisu and English Afternoon Tea yield insane profits</li><li>🥈 <strong>Fishing (5K-10K gold/hour)</strong>: Rainbow Day King Crab sells for 30K each; ocean fishing Golden King Crab even more</li><li>🥉 <strong>Gardening (3K-5K gold/hour)</strong>: Tomato online farming + Strawberry offline harvesting for steady cash flow</li><li>4th <strong>Reselling (2K-8K gold/hour)</strong>: Saturday furniture sets, Wednesday clothing exclusives — high profit variance</li><li>5th <strong>Merchant free sale (fixed 2K gold/day)</strong>: Zero-cost pure profit, never skip this</li></ol>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🍳 💰 📊</span><span class="scene-label">Cooking Profit Panel — Tiramisu in progress, high-star sells for 8× the 1-star price</span></div></div><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🦀 🌈 💎</span><span class="scene-label">King Crab Fishing Spot — Whale Sea on Rainbow Day, 30K gold each</span></div></div></div>
<h2>Phase 1: Beginner (5K-10K Daily)</h2><ul><li><strong>Core strategy</strong>: Online tomato farming + fishing for cash + daily free merchant sale</li><li>Plant 20 tomato plots, 15-min cycles, 8 harvests in 2 hours online</li><li>Keep 1-star fish for Fish & Chips, sell all higher-star fish</li><li>Use the merchant's free daily sale for 2K gold</li><li><strong>Daily income</strong>: Tomatoes 3.6K + Fishing 3K + Merchant 2K + Misc 1.4K = 10K gold</li></ul>
<h2>Phase 2: Intermediate (20K-50K Daily)</h2><ul><li><strong>Core strategy</strong>: Cooking Lv.4 Seafood Pizza + Wheat farming for Tomato Sauce</li><li>Gardening Lv.4 unlocks Wheat; Cooking Lv.4 unlocks Seafood Pizza and Tomato Sauce</li><li>Wheat + Tomato = Tomato Sauce combo, over 30K gold per batch</li><li>Cooked food restores far more stamina than raw ingredients — stamina loop established</li><li>Push Cooking straight to Lv.7 for Tiramisu and enter the explosive growth phase</li></ul>
<h2>Phase 3: Explosive Growth (50K-100K Daily)</h2><ul><li><strong>Core strategy</strong>: Cooking Lv.7 Tiramisu loop + Rainbow Day King Crab + Reselling</li><li>Tiramisu recipe: Coffee beans + Eggs + Milk + Cheese (buy out the Chef Shop daily)</li><li>High-star Tiramisu sells for massive amounts; keep 1-star for stamina recovery</li><li>At Lv.7 achieve <strong>infinite stamina loop</strong>: craft 4, eat 3, sell 1 — stamina keeps growing</li><li>Rainbow Day: fish King Crab (Whale Sea 6-24, large shadow, 30K gold each)</li><li>Saturday furniture store discounts → resell for doubled profit</li></ul>
<div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🔄 ♾️ ⚡</span><span class="scene-label">Infinite Stamina Loop — Cooking Lv.7: craft 4, eat 3, pure profit on the remaining one</span></div></div>
<h2>100K Daily Reference Schedule</h2><table><thead><tr><th>Time</th><th>Activity</th><th>Est. Income</th></tr></thead><tbody><tr><td>06:00-06:30</td><td>Daily gathering + bubbles + shop run</td><td>3,000</td></tr><tr><td>06:30-08:00</td><td>Tomato farming + cooking cycle</td><td>15,000</td></tr><tr><td>12:00-13:00</td><td>Ocean fishing team (12:00 session)</td><td>10,000</td></tr><tr><td>14:00-16:00</td><td>Tiramisu mass production</td><td>25,000</td></tr><tr><td>18:00-19:00</td><td>Rainbow Day rare fish/insect hunting</td><td>20,000</td></tr><tr><td>21:00-22:00</td><td>Ocean fishing team (21:00) + merchant sale</td><td>15,000</td></tr><tr><td>Bedtime</td><td>Plant 30 boxes strawberries/lettuce</td><td>7,000 (next day)</td></tr></tbody></table>`
  },

  // ==================== 18. RAINBOW DAY: Ultimate Collection Route ====================
  {
    id: "rainbow-day-route",
    title: "彩虹天极限收集路线：一天补完全图鉴的黄金攻略",
    titleEn: "Rainbow Day Ultimate Route: Complete Your Collection in One Day",
    icon: "🌈", category: "gameplay", difficulty: 3, readTime: "14 min",
    desc: "彩虹天高效扫完全图鉴的精确路线规划，含三圈循环采集法、26种限定鱼点位图和12级稀有虫时间表。",
    descEn: "Precise Rainbow Day route planning to efficiently complete your collection, including the three-loop gathering method, 26 limited fish spawn map, and level 12 rare insect timeline.",
    tags: ["彩虹天","图鉴","收集","路线"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌈 🗺️ 🎯</span><span class="scene-label">彩虹天全图鉴收集路线总览 — 三圈循环，不走回头路</span></div></div>
<h2>彩虹天为什么是黄金收集日？</h2><p>彩虹天气是心动小镇最重要的天气事件，触发时：</p><ul><li>🎣 <strong>26种限定鱼类</strong>仅在彩虹天（或雨天）出现</li><li>🦋 <strong>稀有虫出现率×3</strong>，包括10级太阳闪蝶、光明女神闪蝶</li><li>🐦 <strong>稀有鸟类全天活跃</strong>，不受常规时段限制</li><li>🌈 <strong>彩虹泡泡</strong>随机出现，顶破可得彩虹花束（30分钟内物品星级和产量提升）</li><li>🦀 <strong>帝王蟹</strong>仅在彩虹天鲸鱼海刷新，单只3W金币</li></ul>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🐟 📍 🌈</span><span class="scene-label">彩虹天限定鱼点位图 — 26种鱼精确分布标注</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🦋 ⭐ 📋</span><span class="scene-label">光明女神闪蝶 — 花田紫光海滩，6-18点彩虹天限定</span></div></div></div>
<h2>三圈循环采集法（核心策略）</h2>
<h3>🟢 第一圈：内圈（渔村→城郊→中心城区）6:00-10:00</h3><ol><li>渔村码头：钓<strong>黑斑小鲷</strong>（缓风海·0-6/18-24）、<strong>狮子头金鱼</strong>（温泉山湖·全天）→顺便捕虫：蓝胸木蜂（渔村广场·0-18点）</li><li>城郊湖畔：钓<strong>大珍珠蚌</strong>（森林湖·全天）、<strong>金龙鱼</strong>（草原湖·0-12/18-24）→捕虫：彗星飞蛾（6-18点）</li><li>中心城区：捡泡泡+商店采购补充鱼饵→传送到森林区</li></ol>
<h3>🟡 第二圈：中圈（森林→温泉山→花田）10:00-14:00</h3><ol start="4"><li>森林区：钓<strong>北极红点鲑</strong>（森林湖·12-24）、<strong>斗鱼</strong>（森林湖·12-24）→捕虫：太阳闪蝶（小鹿塔·6-18点）、歌利亚大王花金龟（小鹿塔树干·18-6点）</li><li>温泉山：钓<strong>杜父鱼</strong>（温泉山湖·6-24点）、<strong>狮子头金鱼</strong>→捕虫：兰花螳螂（遗迹·6-18点）、乳草蝗虫（温泉草丛·6-18点）</li><li>花田：捕虫：光明女神闪蝶（紫光海滩·6-18点）、玫瑰青凤蝶（风车花田·18-6点）</li></ol>
<h3>🔴 第三圈：外圈（鲸鱼海→旧海→海钓）14:00-18:00</h3><ol start="7"><li>鲸鱼海：钓<strong>帝王蟹</strong>（6-24点）、<strong>绿海龟</strong>（12-24点）、<strong>剑鱼</strong>（6-18点）</li><li>旧海：钓<strong>欧洲鳗鲡</strong>（6-24点）、<strong>锤头鲨</strong>（0-6/18-24）、<strong>鲯鳅</strong>（6-18点）</li><li>海钓码头：<strong>黄金帝王蟹</strong>（全天）、<strong>尖吻鲭鲨</strong>（6-18点）</li></ol>
<div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🚢 🎣 🏆</span><span class="scene-label">海钓12-18点黄金时段 — 同时可刷6种稀有鱼</span></div></div>
<h2>彩虹天必备道具清单</h2><ul><li>🎒 背包至少50格空位</li><li>🎣 高级鱼竿+鱼饵×200+美人鱼香水×3</li><li>🪲 高级虫网+充气蜂蜜诱虫器×5+全知强化剂×5</li><li>🔧 维修盒×20（鱼竿和虫网耐久消耗极快）</li><li>🍽️ 高星料理×20（维持体力循环）</li><li>🌈 彩虹花束×3（顶彩虹泡泡获得，30分钟buff）</li></ul>
<h2>12-18点黄金6小时极限收益</h2><p>如果只能玩一个时段，选<strong>12:00-18:00</strong>。这个窗口能同时刷到：帝王蟹+剑鱼+绿海龟+蓝鳍金枪鱼+尖吻鲭鲨+狮子头金鱼+鲯鳅+太阳闪蝶+光明女神闪蝶。预计收益：金币50,000+、图鉴解锁20+种。</p>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌈 🗺️ 🎯</span><span class="scene-label">Rainbow Day Complete Collection Route — Three loops, no backtracking</span></div></div>
<h2>Why Rainbow Day Is the Golden Collection Day?</h2><p>Rainbow weather is Heartopia's most important weather event. When it triggers:</p><ul><li>🎣 <strong>26 limited fish species</strong> only appear on Rainbow (or Rainy) days</li><li>🦋 <strong>Rare insect spawn rate ×3</strong>, including Lv.10 Sun Morpho and Sunset Morpho</li><li>🐦 <strong>Rare birds active all day</strong>, unrestricted by normal time windows</li><li>🌈 <strong>Rainbow bubbles</strong> appear randomly — pop them for Rainbow Bouquets (30-min star & yield boost)</li><li>🦀 <strong>King Crab</strong> only spawns in Whale Sea on Rainbow Days, 30K gold each</li></ul>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🐟 📍 🌈</span><span class="scene-label">Rainbow Day Limited Fish Map — Precise spawn locations for all 26 species</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🦋 ⭐ 📋</span><span class="scene-label">Sunset Morpho Butterfly — Flower Field Purple Beach, 6-18, Rainbow Day exclusive</span></div></div></div>
<h2>Three-Loop Collection Method (Core Strategy)</h2>
<h3>🟢 Loop 1: Inner Circle (Fishing Village → Suburbs → Central) 6:00-10:00</h3><ol><li>Fishing Village Dock: Fish <strong>Blackspot Bream</strong> (Gentle Breeze Sea, 0-6/18-24), <strong>Lionhead Goldfish</strong> (Hot Spring Lake, all day) → Bug catch: Blue-Chested Carpenter Bee (Village Square, 0-18)</li><li>Suburban Lakeside: Fish <strong>Giant Pearl Clam</strong> (Forest Lake, all day), <strong>Golden Arowana</strong> (Grassland Lake, 0-12/18-24) → Bug catch: Comet Moth (6-18)</li><li>Central District: Collect bubbles + shop restock bait → Teleport to Forest</li></ol>
<h3>🟡 Loop 2: Middle Circle (Forest → Hot Springs → Flower Field) 10:00-14:00</h3><ol start="4"><li>Forest Zone: Fish <strong>Arctic Char</strong> (Forest Lake, 12-24), <strong>Betta</strong> (Forest Lake, 12-24) → Bug catch: Sun Morpho (Fawn Tower, 6-18), Goliath Beetle (Fawn Tower trunk, 18-6)</li><li>Hot Spring Mountain: Fish <strong>Sculpin</strong> (Hot Spring Lake, 6-24) → Bug catch: Orchid Mantis (Ruins, 6-18), Milkweed Locust (Hot Spring Grass, 6-18)</li><li>Flower Field: Bug catch: Sunset Morpho (Purple Beach, 6-18), Rose Green Swallowtail (Windmill Field, 18-6)</li></ol>
<h3>🔴 Loop 3: Outer Circle (Whale Sea → Old Sea → Ocean Fishing) 14:00-18:00</h3><ol start="7"><li>Whale Sea: Fish <strong>King Crab</strong> (6-24), <strong>Green Sea Turtle</strong> (12-24), <strong>Swordfish</strong> (6-18)</li><li>Old Sea: Fish <strong>European Eel</strong> (6-24), <strong>Hammerhead Shark</strong> (0-6/18-24), <strong>Mahi-Mahi</strong> (6-18)</li><li>Ocean Fishing Dock: <strong>Golden King Crab</strong> (all day), <strong>Mako Shark</strong> (6-18)</li></ol>
<div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🚢 🎣 🏆</span><span class="scene-label">Ocean Fishing Golden Window 12-18 — Farm 6 rare species simultaneously</span></div></div>
<h2>Rainbow Day Essential Item Checklist</h2><ul><li>🎒 At least 50 backpack slots free</li><li>🎣 Advanced fishing rod + Bait ×200 + Mermaid Perfume ×3</li><li>🪲 Advanced bug net + Inflatable Honey Lure ×5 + Omniscient Enhancer ×5</li><li>🔧 Repair kits ×20 (rod and net durability drains extremely fast)</li><li>🍽️ High-star cooked meals ×20 (maintain stamina loop)</li><li>🌈 Rainbow Bouquet ×3 (from popping rainbow bubbles, 30-min buff)</li></ul>
<h2>12:00-18:00 Golden 6-Hour Window</h2><p>If you can only play one time block, choose <strong>12:00-18:00</strong>. This window lets you simultaneously farm: King Crab + Swordfish + Green Sea Turtle + Bluefin Tuna + Mako Shark + Lionhead Goldfish + Mahi-Mahi + Sun Morpho + Sunset Morpho. Estimated yield: 50,000+ gold, 20+ collection entries unlocked.</p>`
  },

  // ==================== 19. COOKING: Top 20 Profit Ranking ====================
  {
    id: "cooking-profit-top20",
    title: "烹饪利润Top20排行榜：从炸鱼薯条到英式下午茶",
    titleEn: "Cooking Profit Top 20: From Fish & Chips to English Afternoon Tea",
    icon: "🍕", category: "gameplay", difficulty: 2, readTime: "12 min",
    desc: "全食谱按净利润排行Top20，含每道料理的材料成本、售价、每分钟利润率以及最佳批量生产策略。附带烹饪7级无限体力循环详解。",
    descEn: "Top 20 recipes ranked by net profit with material costs, selling prices, per-minute profit rates, and optimal mass production strategies. Includes the Cooking Lv.7 infinite stamina loop breakdown.",
    tags: ["烹饪","利润","食谱","排名"],
    content: `<div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📊 🍳 💰</span><span class="scene-label">烹饪利润Top20面板 — 按净利润排序的完整食谱排行</span></div></div>
<h2>烹饪利润Top 20排行榜</h2><table><thead><tr><th>排名</th><th>菜品</th><th>材料成本</th><th>售价(3星)</th><th>净利润</th><th>烹饪等级</th></tr></thead><tbody><tr><td>🥇</td><td>英式下午茶</td><td>~800</td><td>~4500</td><td>~3700</td><td>7级</td></tr><tr><td>🥈</td><td>提拉米苏</td><td>~600</td><td>~3200</td><td>~2600</td><td>7级</td></tr><tr><td>🥉</td><td>海鲜焗饭</td><td>~500</td><td>~2800</td><td>~2300</td><td>6级</td></tr><tr><td>4</td><td>海鲜披萨</td><td>~350</td><td>~1800</td><td>~1450</td><td>4级</td></tr><tr><td>5</td><td>肉酱意面</td><td>~400</td><td>~1750</td><td>~1350</td><td>5级</td></tr><tr><td>6</td><td>彩虹蛋糕</td><td>~500</td><td>~2200</td><td>~1700</td><td>9级</td></tr><tr><td>7</td><td>月光鸡尾酒</td><td>~300</td><td>~1500</td><td>~1200</td><td>8级</td></tr><tr><td>8</td><td>乡村炖菜</td><td>~200</td><td>~1100</td><td>~900</td><td>3级</td></tr><tr><td>9</td><td>熏鱼贝果</td><td>~350</td><td>~1300</td><td>~950</td><td>5级</td></tr><tr><td>10</td><td>苹果派</td><td>~250</td><td>~1200</td><td>~950</td><td>6级</td></tr></tbody></table>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">☕ 🍰 ⭐</span><span class="scene-label">英式下午茶 — 净利润冠军，需同时持有提拉米苏+蓝莓触发</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🍰 🔄 💎</span><span class="scene-label">提拉米苏批量生产 — 7级后每次可做3份，高星率大幅提升</span></div></div></div>
<h2>烹饪7级：无限体力循环详解</h2><p>这是整个游戏最重要的经济突破点：</p><ol><li>烹饪达到7级→解锁提拉米苏和英式下午茶</li><li>每日厨师商店买满：咖啡豆×5、牛奶×5、鸡蛋×5、奶酪×3</li><li>批量制作提拉米苏：<strong>高星（2-3星）全部卖掉</strong>，1星留作体力补给</li><li>一份1星提拉米苏回复体力约80-100点</li><li>做4份提拉米苏→吃掉3份回体→卖掉1份高星→<strong>体力不减反增+净赚金币</strong></li><li>循环往复，理论上可以<strong>无限制作</strong></li></ol>
<div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">♾️ ⚡ 🍳</span><span class="scene-label">无限体力循环实操 — 品字形灶台4人同时操作效率×4</span></div></div>
<h2>各等级最佳刷钱食谱</h2><ul><li><strong>1-3级</strong>：炸鱼薯条（任意鱼+土豆×2）→成本最低，练级首选</li><li><strong>4-5级</strong>：海鲜披萨（奶酪+番茄酱+小麦+鱼）→利润开始起飞</li><li><strong>6级</strong>：海鲜焗饭（帝王蟹+大米）→单体利润高，但帝王蟹供应有限</li><li><strong>7级</strong>：提拉米苏循环→质变节点，无限体力开启</li><li><strong>8-10级</strong>：英式下午茶+月光鸡尾酒→利润最大化</li></ul>
<h2>烹饪10级终极效率</h2><p>烹饪10级时：<strong>高星率大幅提升+一次可做3锅+操作速度翻倍</strong>。建议直接冲到10级，每锅3份的产出效率是7级的3倍。用1星食材练级（成本低），高星食材留到10级再做（卖价高）。</p>`,
    contentEn: `<div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📊 🍳 💰</span><span class="scene-label">Cooking Profit Top 20 Panel — Complete recipe ranking by net profit</span></div></div>
<h2>Cooking Profit Top 20 Ranking</h2><table><thead><tr><th>Rank</th><th>Dish</th><th>Material Cost</th><th>Price (3★)</th><th>Net Profit</th><th>Cooking Lv.</th></tr></thead><tbody><tr><td>🥇</td><td>English Afternoon Tea</td><td>~800</td><td>~4,500</td><td>~3,700</td><td>Lv.7</td></tr><tr><td>🥈</td><td>Tiramisu</td><td>~600</td><td>~3,200</td><td>~2,600</td><td>Lv.7</td></tr><tr><td>🥉</td><td>Seafood Gratin</td><td>~500</td><td>~2,800</td><td>~2,300</td><td>Lv.6</td></tr><tr><td>4</td><td>Seafood Pizza</td><td>~350</td><td>~1,800</td><td>~1,450</td><td>Lv.4</td></tr><tr><td>5</td><td>Meat Sauce Pasta</td><td>~400</td><td>~1,750</td><td>~1,350</td><td>Lv.5</td></tr><tr><td>6</td><td>Rainbow Cake</td><td>~500</td><td>~2,200</td><td>~1,700</td><td>Lv.9</td></tr><tr><td>7</td><td>Moonlight Cocktail</td><td>~300</td><td>~1,500</td><td>~1,200</td><td>Lv.8</td></tr><tr><td>8</td><td>Country Stew</td><td>~200</td><td>~1,100</td><td>~900</td><td>Lv.3</td></tr><tr><td>9</td><td>Smoked Fish Bagel</td><td>~350</td><td>~1,300</td><td>~950</td><td>Lv.5</td></tr><tr><td>10</td><td>Apple Pie</td><td>~250</td><td>~1,200</td><td>~950</td><td>Lv.6</td></tr></tbody></table>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">☕ 🍰 ⭐</span><span class="scene-label">English Afternoon Tea — Net profit champion, triggered by holding Tiramisu + Blueberries</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🍰 🔄 💎</span><span class="scene-label">Tiramisu Mass Production — At Lv.7, 3 portions per batch, high-star rate greatly increased</span></div></div></div>
<h2>Cooking Lv.7: Infinite Stamina Loop Explained</h2><p>This is the most important economic breakthrough in the entire game:</p><ol><li>Reach Cooking Lv.7 → unlock Tiramisu and English Afternoon Tea</li><li>Buy out the Chef Shop daily: Coffee beans ×5, Milk ×5, Eggs ×5, Cheese ×3</li><li>Mass produce Tiramisu: <strong>sell all high-star (2-3★)</strong>, keep 1-star for stamina recovery</li><li>One 1-star Tiramisu restores ~80-100 stamina points</li><li>Craft 4 Tiramisu → eat 3 for stamina → sell 1 high-star → <strong>stamina goes up while earning gold</strong></li><li>Repeat indefinitely — theoretically <strong>infinite crafting</strong></li></ol>
<div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">♾️ ⚡ 🍳</span><span class="scene-label">Infinite Stamina Loop in Action — Triangle stove layout, 4 players = ×4 efficiency</span></div></div>
<h2>Best Money-Making Recipe by Level</h2><ul><li><strong>Lv.1-3</strong>: Fish & Chips (any fish + potato ×2) → lowest cost, best for leveling</li><li><strong>Lv.4-5</strong>: Seafood Pizza (cheese + tomato sauce + wheat + fish) → profits start soaring</li><li><strong>Lv.6</strong>: Seafood Gratin (King Crab + rice) → high per-unit profit but limited King Crab supply</li><li><strong>Lv.7</strong>: Tiramisu loop → breakthrough point, infinite stamina begins</li><li><strong>Lv.8-10</strong>: English Afternoon Tea + Moonlight Cocktail → maximum profit</li></ul>
<h2>Cooking Lv.10 Ultimate Efficiency</h2><p>At Cooking Lv.10: <strong>high-star rate greatly increased + 3 pots per batch + operation speed doubled</strong>. Push straight to Lv.10 — 3 portions per pot is 3× the efficiency of Lv.7. Use 1-star ingredients for leveling (low cost), save high-star ingredients for Lv.10 crafting (higher sell price).</p>`
  },

  // ==================== 20. OCEAN FISHING: Complete Guide ====================
  {
    id: "ocean-fishing-complete",
    title: "海钓完全攻略：从租船到黄金帝王蟹的进阶之路",
    titleEn: "Ocean Fishing Complete Guide: From Boat Rental to Golden King Crab",
    icon: "🚢", category: "gameplay", difficulty: 2, readTime: "12 min",
    desc: "海钓系统从入门到精通，含租船费用优化、4人组队策略、美人鱼诱鱼器使用技巧、黄金帝王蟹与尖吻鲭鲨的精确钓法。",
    descEn: "Ocean fishing system from beginner to master, including boat rental cost optimization, 4-player team strategies, Mermaid Lure techniques, and precise methods for Golden King Crab and Mako Shark.",
    tags: ["海钓","组队","稀有鱼","帝王蟹"],
    content: `<div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🚢 🎣 🌊</span><span class="scene-label">海钓码头 — 找NPC比尔对话登船，每天12:00和21:00两场</span></div></div>
<h2>海钓基础知识</h2><ul><li>📍 <strong>登船地点</strong>：渔村码头找NPC比尔</li><li>⏰ <strong>海钓时段</strong>：每天12:00-12:30和21:00-21:30两场，每场30分钟</li><li>💰 <strong>租船费用</strong>：单人2000金币，4人组队每人500金币（均摊后超划算）</li><li>🎫 <strong>有时其他玩家花钱开海钓</strong>：尽快前往蹭船！</li></ul>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">👥 🤝 💰</span><span class="scene-label">4人海钓组队 — 租船费用均摊，每人仅需500金币</span></div></div><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🦀 👑 ⭐</span><span class="scene-label">黄金帝王蟹上钩 — 金色鱼影+特殊光效，售价是普通帝王蟹的2倍</span></div></div></div>
<h2>海钓稀有鱼图鉴</h2><table><thead><tr><th>鱼类</th><th>鱼影</th><th>出现条件</th><th>1星售价</th></tr></thead><tbody><tr><td>黄金帝王蟹</td><td>金色</td><td>彩虹天·全天</td><td>~5000</td></tr><tr><td>尖吻鲭鲨</td><td>金色</td><td>彩虹天·6-18点</td><td>~4500</td></tr><tr><td>海月水母</td><td>金色</td><td>雨/彩虹天·0-6/12-24</td><td>~3000</td></tr><tr><td>鲸鲨</td><td>金色</td><td>晴/彩虹天·0-12/18-24</td><td>~4000</td></tr><tr><td>大西洋银鲛鱼</td><td>蓝色闪光</td><td>全天气·需美人鱼诱鱼器</td><td>~3500</td></tr></tbody></table>
<h2>美人鱼诱鱼器完全使用指南</h2><ul><li>🔮 <strong>获取方式</strong>：钓鱼商店购买（3000金币或2满愿星）</li><li>⏱️ <strong>持续时间</strong>：15分钟</li><li>🎯 <strong>核心效果</strong>：大幅提升稀有鱼咬钩概率，大西洋银鲛鱼<strong>必须使用</strong>才能钓到</li><li>👥 <strong>多人叠加</strong>：2人以上同时使用，蓝色闪光鱼影出现概率翻倍</li><li>💡 <strong>最佳搭配</strong>：美人鱼诱鱼器+美人鱼香水（单人也能享受双倍加成）</li></ul>
<div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🔮 ✨ 🎯</span><span class="scene-label">美人鱼诱鱼器效果 — 使用后水面出现蓝色光晕，稀有鱼概率大增</span></div></div>
<h2>海钓最优策略</h2><ol><li><strong>组队优先</strong>：4人组队租船成本最低，每人500金币</li><li><strong>彩虹天必出海</strong>：黄金帝王蟹+尖吻鲭鲨同时可刷</li><li><strong>提前10分钟到场</strong>：准备好鱼饵、维修盒、料理</li><li><strong>诱鱼器轮流开</strong>：4人轮流使用美人鱼诱鱼器，覆盖整场60分钟（含前后各15分钟buff）</li><li><strong>大鱼影优先</strong>：海钓时间有限，金色鱼影>大鱼影>中鱼影，小鱼影直接忽略</li><li><strong>12点场vs 21点场</strong>：12点场更容易组到队；21点场人数少但竞争也少</li></ol>`,
    contentEn: `<div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🚢 🎣 🌊</span><span class="scene-label">Ocean Fishing Dock — Talk to NPC Bill to board, two sessions daily at 12:00 and 21:00</span></div></div>
<h2>Ocean Fishing Basics</h2><ul><li>📍 <strong>Boarding location</strong>: Fishing Village Dock, talk to NPC Bill</li><li>⏰ <strong>Session times</strong>: Daily 12:00-12:30 and 21:00-21:30, 30 minutes each</li><li>💰 <strong>Boat rental cost</strong>: 2,000 gold solo, 500 gold per person in a 4-player team (split cost = great value)</li><li>🎫 <strong>Sometimes other players pay to start ocean fishing</strong>: rush over and hitch a ride!</li></ul>
<div class="img-row"><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">👥 🤝 💰</span><span class="scene-label">4-Player Ocean Fishing Team — Boat rental cost split, only 500 gold per person</span></div></div><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🦀 👑 ⭐</span><span class="scene-label">Golden King Crab on the Hook — Golden fish shadow + special light effects, sells for 2× normal King Crab</span></div></div></div>
<h2>Ocean Fishing Rare Fish Collection</h2><table><thead><tr><th>Fish</th><th>Shadow</th><th>Conditions</th><th>1★ Price</th></tr></thead><tbody><tr><td>Golden King Crab</td><td>Gold</td><td>Rainbow Day · All day</td><td>~5,000</td></tr><tr><td>Mako Shark</td><td>Gold</td><td>Rainbow Day · 6-18</td><td>~4,500</td></tr><tr><td>Moon Jellyfish</td><td>Gold</td><td>Rain/Rainbow · 0-6/12-24</td><td>~3,000</td></tr><tr><td>Whale Shark</td><td>Gold</td><td>Clear/Rainbow · 0-12/18-24</td><td>~4,000</td></tr><tr><td>Atlantic Chimaera</td><td>Blue Flash</td><td>All weather · Mermaid Lure required</td><td>~3,500</td></tr></tbody></table>
<h2>Mermaid Lure Complete Usage Guide</h2><ul><li>🔮 <strong>How to get</strong>: Purchase from Fishing Shop (3,000 gold or 2 Wish Stars)</li><li>⏱️ <strong>Duration</strong>: 15 minutes</li><li>🎯 <strong>Core effect</strong>: Greatly increases rare fish bite probability — Atlantic Chimaera <strong>requires</strong> it</li><li>👥 <strong>Multiplayer stacking</strong>: 2+ players using simultaneously doubles blue flash shadow probability</li><li>💡 <strong>Best combo</strong>: Mermaid Lure + Mermaid Perfume (double bonus even when solo)</li></ul>
<div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🔮 ✨ 🎯</span><span class="scene-label">Mermaid Lure Effect — Blue glow appears on the water surface, rare fish probability greatly increased</span></div></div>
<h2>Optimal Ocean Fishing Strategy</h2><ol><li><strong>Team up first</strong>: 4-player team minimizes boat rental cost at 500 gold per person</li><li><strong>Always go on Rainbow Days</strong>: Golden King Crab + Mako Shark farmable simultaneously</li><li><strong>Arrive 10 minutes early</strong>: Prepare bait, repair kits, and cooked meals</li><li><strong>Rotate lures</strong>: 4 players take turns using Mermaid Lures to cover the full 60-minute window (including 15-min buff before and after)</li><li><strong>Prioritize large shadows</strong>: Ocean fishing time is limited — Gold > Large > Medium shadows; ignore small shadows entirely</li><li><strong>12:00 vs 21:00 session</strong>: 12:00 is easier to find teams; 21:00 has fewer players but also less competition</li></ol>`
  },

  // ==================== 21. BEGINNER: Mistakes to Avoid ====================
  {
    id: "beginner-mistakes-avoid",
    title: "新手避坑大全：20个让你少走半年弯路的血泪教训",
    titleEn: "Beginner's Guide to Avoiding Mistakes: 20 Lessons That Save You 6 Months",
    icon: "⚠️", category: "beginner", difficulty: 1, readTime: "11 min",
    desc: "收集了数百位老玩家总结的20个最常见新手错误，涵盖资源管理、金币使用、爱好升级、社交互动等各个方面。",
    descEn: "20 most common beginner mistakes collected from hundreds of veteran players, covering resource management, gold spending, hobby leveling, and social interactions.",
    tags: ["新手","避坑","错误","教训"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">⚠️ 🚫 💡</span><span class="scene-label">新手最容易犯的20个错误 — 避开这些，效率提升300%</span></div></div>
<h2>🔴 资源管理篇（最常见的5个错误）</h2><div class="callout callout-danger"><strong>❌ 错误1：卖掉无瑕萤石和溜溜橡木。</strong>前期觉得没用就卖了，后期家园扩建和高级家具大量需要，每天只能采3个，卖了哭都来不及。✅ 正确做法：一个不卖，全部存仓库。</div><div class="callout callout-danger"><strong>❌ 错误2：爱心币乱花。</strong>新手期爱心币非常珍贵，优先买<strong>自动洒水器</strong>（省去每天浇水的烦恼），其次是背包扩容。不要买外观类物品。</div><div class="callout callout-danger"><strong>❌ 错误3：不捡地图泡泡。</strong>金色泡泡内含满愿星、稀有家具图纸、时装碎片，很多新手以为没用就忽略了。✅ 每次看到必捡。</div><div class="callout callout-warn"><strong>❌ 错误4：工具耐久度不管。</strong>耐久归零工具直接损坏，需要花更多材料重做。✅ 随身带维修盒，耐久低于30%就修。</div><div class="callout callout-warn"><strong>❌ 错误5：把所有材料都卖掉。</strong>一些看似无用的材料（咖啡豆、小麦）是后期关键食谱的原料。✅ 每种材料至少保留20个在仓库。</div>
<div class="img-row"><div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">💎 🚫 📦</span><span class="scene-label">无瑕萤石 — 每天仅3个，千万不要卖，后期极度稀缺</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">💧 ⚙️ ✅</span><span class="scene-label">自动洒水器 — 新手第一个爱心币最应该买的东西</span></div></div></div>
<h2>🟡 金币使用篇</h2><div class="callout callout-danger"><strong>❌ 错误6：前期大量买家具。</strong>初始金币极度紧张，应该优先投入生产和工具升级。✅ 等烹饪7级日入5万+再装修。</div><div class="callout callout-warn"><strong>❌ 错误7：猫粮狗粮当主食。</strong>宠物粮价格昂贵，性价比极低。✅ 多互动提升成长值，比喂食效率高3倍。</div><div class="callout callout-info"><strong>❌ 错误8：商人免费卖货不用。</strong>每天一次2000金币的免费卖货机会，很多新手完全不知道。✅ 每天记得找商人使用免费强制卖货。</div>
<h2>🟢 爱好升级篇</h2><div class="callout callout-danger"><strong>❌ 错误9：只升一个爱好。</strong>六大爱好互相配合，烹饪需要钓鱼和园艺提供材料。✅ 均衡发展，烹饪优先、钓鱼其次、园艺辅助。</div><div class="callout callout-warn"><strong>❌ 错误10：园艺等级停在4级。</strong>4级只解锁小麦，7级才有30个种植箱。✅ 至少冲到7级，30箱草莓一觉醒来净赚2100金币。</div><div class="callout callout-info"><strong>❌ 错误11：烹饪等级不够就做高星料理。</strong>低等级时高星率极低，浪费高星食材。✅ 1-6级用1星食材练级，7级后再追求高星。</div>
<h2>🔵 社交与日常篇</h2><div class="callout callout-warn"><strong>❌ 错误12：不跟NPC交流。</strong>挚友奖励极其丰厚（金色鱼竿、商店7折、专属跑车），每天花5分钟送礼绝对值得。</div><div class="callout callout-info"><strong>❌ 错误13：抢陌生人资源。</strong>未经允许采摘别人家的作物会被拉黑，降低社交分数。✅ 先表情打招呼再互动。</div><div class="callout callout-warn"><strong>❌ 错误14：不看天气预告。</strong>彩虹天是黄金收集日，错过就要等很久。✅ 每天上线第一件事：看天气预报。</div>
<div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🤝 ❤️ 🎁</span><span class="scene-label">NPC每日送礼 — 每天5分钟，40天后获得金色工具等挚友奖励</span></div></div>
<h2>💡 最后的忠告</h2><p>心动小镇是一个慢节奏游戏，<strong>最大的错误就是急于求成</strong>。每天1-2小时稳定玩，比一天爆肝10小时然后弃坑要好得多。享受小镇的日常，和朋友一起慢慢变富，这才是游戏的核心乐趣。</p>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">⚠️ 🚫 💡</span><span class="scene-label">Top 20 Beginner Mistakes — Avoid these for 300% efficiency gain</span></div></div>
<h2>🔴 Resource Management (5 Most Common Mistakes)</h2><div class="callout callout-danger"><strong>❌ Mistake 1: Selling Flawless Fluorite and Slippery Oak.</strong> They seem useless early on, but late-game home expansions and advanced furniture demand massive quantities. Only 3 spawn daily — you'll deeply regret selling them. ✅ Keep every single one in storage.</div><div class="callout callout-danger"><strong>❌ Mistake 2: Wasting Love Coins.</strong> Love Coins are extremely precious early game. Prioritize the <strong>Auto Sprinkler</strong> (eliminates daily watering hassle), then backpack expansion. Skip cosmetic items.</div><div class="callout callout-danger"><strong>❌ Mistake 3: Ignoring map bubbles.</strong> Gold bubbles contain Wish Stars, rare furniture blueprints, and fashion fragments. Many beginners ignore them. ✅ Always collect every bubble you see.</div><div class="callout callout-warn"><strong>❌ Mistake 4: Neglecting tool durability.</strong> When durability hits zero, tools break entirely and cost more materials to remake. ✅ Always carry repair kits; repair when durability drops below 30%.</div><div class="callout callout-warn"><strong>❌ Mistake 5: Selling all materials.</strong> Seemingly useless items (coffee beans, wheat) are key ingredients for late-game recipes. ✅ Keep at least 20 of each material in storage.</div>
<div class="img-row"><div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">💎 🚫 📦</span><span class="scene-label">Flawless Fluorite — Only 3 per day, never sell, extremely scarce late-game</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">💧 ⚙️ ✅</span><span class="scene-label">Auto Sprinkler — The #1 thing beginners should spend their first Love Coins on</span></div></div></div>
<h2>🟡 Gold Spending</h2><div class="callout callout-danger"><strong>❌ Mistake 6: Buying lots of furniture early on.</strong> Early gold is extremely tight — invest in production and tool upgrades first. ✅ Wait until Cooking Lv.7 (50K+ daily income) before decorating.</div><div class="callout callout-warn"><strong>❌ Mistake 7: Using pet food as the main diet for pets.</strong> Pet food is expensive with terrible cost-efficiency. ✅ Interact more — it raises growth value 3× more efficiently than feeding.</div><div class="callout callout-info"><strong>❌ Mistake 8: Not using the merchant's free sale.</strong> One free 2,000-gold sale opportunity every day — many beginners don't even know about it. ✅ Remember to use the free forced sale daily.</div>
<h2>🟢 Hobby Leveling</h2><div class="callout callout-danger"><strong>❌ Mistake 9: Leveling only one hobby.</strong> The six hobbies complement each other — cooking needs fishing and gardening for materials. ✅ Develop evenly: cooking first, fishing second, gardening as support.</div><div class="callout callout-warn"><strong>❌ Mistake 10: Stopping gardening at level 4.</strong> Level 4 only unlocks wheat; you need level 7 for 30 planting boxes. ✅ Push to at least level 7 — 30 boxes of strawberries = 2,100 gold overnight.</div><div class="callout callout-info"><strong>❌ Mistake 11: Crafting high-star dishes at low cooking levels.</strong> High-star rate is abysmal at low levels — you're wasting high-star ingredients. ✅ Use 1-star ingredients for leveling at Lv.1-6; pursue high stars after Lv.7.</div>
<h2>🔵 Social & Daily</h2><div class="callout callout-warn"><strong>❌ Mistake 12: Not interacting with NPCs.</strong> Best Friend rewards are incredibly valuable (Golden Fishing Rod, 30% shop discount, exclusive sports car). Spending 5 minutes daily on gifts is absolutely worth it.</div><div class="callout callout-info"><strong>❌ Mistake 13: Taking resources from strangers.</strong> Harvesting crops on others' property without permission gets you blocked and lowers your social score. ✅ Use emotes to greet before interacting.</div><div class="callout callout-warn"><strong>❌ Mistake 14: Not checking the weather forecast.</strong> Rainbow Day is the golden collection day — missing it means a long wait. ✅ First thing to do every day: check the weather forecast.</div>
<div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🤝 ❤️ 🎁</span><span class="scene-label">NPC Daily Gifting — 5 minutes daily, after 40 days unlock golden tools and other Best Friend rewards</span></div></div>
<h2>💡 Final Advice</h2><p>Heartopia is a slow-paced game — <strong>the biggest mistake is rushing</strong>. Playing steadily 1-2 hours daily is far better than binge-playing 10 hours and burning out. Enjoy the daily rhythm of town life, grow rich together with friends — that's the core joy of this game.</p>`
  },

  // ==================== 22. HOBBY: Optimal Leveling Route ====================
  {
    id: "hobby-leveling-route",
    title: "六大爱好升级最优路线：从1级到12级的完整规划",
    titleEn: "Six Hobbies Optimal Leveling Route: Complete 1-12 Roadmap",
    icon: "📋", category: "gameplay", difficulty: 2, readTime: "13 min",
    desc: "烹饪、钓鱼、园艺、捕虫、观鸟、养猫六大爱好的最优升级顺序和资源分配策略，含每个等级节点的关键解锁内容和升级所需经验。",
    descEn: "Optimal leveling order and resource allocation for all six hobbies (Cooking, Fishing, Gardening, Bug Catching, Birdwatching, Cats), with key unlocks and XP requirements for each milestone.",
    tags: ["爱好","升级","路线","规划"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📋 🎯 📈</span><span class="scene-label">六大爱好升级路线图 — 最优顺序和每个阶段的关键目标</span></div></div>
<h2>爱好升级总优先级</h2><p>经过综合评估<strong>赚钱能力、资源产出、体力循环</strong>三个维度，最优升级顺序为：</p><div class="callout callout-info"><strong>🥇 烹饪 > 🥈 钓鱼 > 🥉 园艺 > 4th 捕虫 > 5th 观鸟 > 6th 养猫</strong><br>前三项是经济核心，后三项是收集乐趣。建议前三项冲到7级以上再发展后三项。</div>
<h2>🍳 烹饪：绝对优先，冲到10级</h2><ul><li><strong>4级</strong>：解锁海鲜披萨和番茄酱→经济开始起飞</li><li><strong>5级</strong>：解锁提拉米苏（隐藏食谱触发条件）</li><li><strong>7级</strong>：⭐⭐⭐<strong>质变节点</strong>：无限体力循环开启，做四吃三卖一</li><li><strong>10级</strong>：终极效率→一次做3锅+高星率大幅提升+速度翻倍</li><li>💡 升级技巧：狂做炸鱼薯条（材料最简单），1星食材练级，高星留着10级用</li></ul>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🍳 ⭐ 📈</span><span class="scene-label">烹饪升级 — 用1星食材批量做炸鱼薯条，最快升级路径</span></div></div><div class="tutorial-img scene-water"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎣 ⭐ 🐟</span><span class="scene-label">钓鱼升级 — 彩虹天集中开图鉴，图鉴收集也给大量经验</span></div></div></div>
<h2>🎣 钓鱼：紧随其后，至少到10级</h2><ul><li><strong>5级</strong>：解锁高级鱼竿（可以钓更大更多的鱼）</li><li><strong>8级</strong>：解锁美人鱼诱鱼器（海钓必备）</li><li><strong>10级</strong>：解锁金色鱼饵，传说级鱼类可以挑战</li><li><strong>11-12级</strong>：解锁最后一批稀有鱼图鉴（狮子头金鱼、鲸鲨、海月水母等）</li><li>💡 升级技巧：彩虹天狂钓+开图鉴给大量经验，组队海钓经验最多</li></ul>
<h2>🌷 园艺：经济辅助，至少到7级</h2><ul><li><strong>4级</strong>：解锁小麦→烹饪原材料不再短缺</li><li><strong>7级</strong>：⭐⭐⭐解锁30个种植箱→量变引起质变</li><li>💡 升级技巧：番茄最快（15分钟成熟=经验频率最高），在线狂种番茄是最快升级法</li></ul>
<h2>🦋 捕虫：收集乐趣，建议到8级</h2><ul><li><strong>4级</strong>：解锁4星虫+远程蓄力捕捉</li><li><strong>6级</strong>：解锁充气蜂蜜诱虫器（2000金币）和全知强化剂（3000金币）</li><li><strong>8级</strong>：解锁伊莎贝拉蛾、独角仙等高级虫类</li></ul>
<h2>🐦 观鸟 + 🐱 养猫：休闲为主，随缘升级</h2><ul><li><strong>观鸟4级</strong>：解锁自动鸟哨→拍照五星率大幅提升</li><li><strong>观鸟6级</strong>：解锁伪装草丛→12人共享，组队观鸟神器</li><li><strong>养猫3级</strong>：解锁第二只猫→双倍成长效率</li><li><strong>养猫10级前务必完成全部养猫任务</strong>→否则12级无法解锁养狗</li></ul>
<div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🦋 🌿 🎯</span><span class="scene-label">捕虫爱好升级 — 使用诱虫器+强化剂，彩虹天集中刷虫效率最高</span></div></div>
<h2>推荐的30天升级计划</h2><table><thead><tr><th>天数</th><th>烹饪</th><th>钓鱼</th><th>园艺</th><th>捕虫</th><th>观鸟</th><th>养猫</th></tr></thead><tbody><tr><td>第1周</td><td>4级</td><td>3级</td><td>4级</td><td>2级</td><td>—</td><td>1级</td></tr><tr><td>第2周</td><td>7级⭐</td><td>5级</td><td>7级⭐</td><td>4级</td><td>2级</td><td>3级</td></tr><tr><td>第3周</td><td>9级</td><td>8级</td><td>8级</td><td>6级</td><td>4级</td><td>5级</td></tr><tr><td>第4周</td><td>10级🏆</td><td>10级🏆</td><td>9级</td><td>8级</td><td>6级</td><td>8级</td></tr></tbody></table>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📋 🎯 📈</span><span class="scene-label">Six Hobbies Leveling Roadmap — Optimal order and key milestones for each phase</span></div></div>
<h2>Overall Hobby Priority Ranking</h2><p>After evaluating <strong>income generation, resource output, and stamina cycling</strong> across three dimensions, the optimal leveling order is:</p><div class="callout callout-info"><strong>🥇 Cooking > 🥈 Fishing > 🥉 Gardening > 4th Bug Catching > 5th Birdwatching > 6th Cats</strong><br>The first three are your economic core; the latter three are for collection enjoyment. Push the first three to level 7+ before developing the others.</div>
<h2>🍳 Cooking: Absolute Priority, Push to 10</h2><ul><li><strong>Lv.4</strong>: Unlock Seafood Pizza and Tomato Sauce → economy starts soaring</li><li><strong>Lv.5</strong>: Unlock Tiramisu (hidden recipe trigger condition)</li><li><strong>Lv.7</strong>: ⭐⭐⭐ <strong>Breakthrough point</strong>: Infinite stamina loop begins — craft 4, eat 3, sell 1</li><li><strong>Lv.10</strong>: Ultimate efficiency → 3 pots per batch + greatly increased high-star rate + doubled speed</li><li>💡 Leveling tip: Spam Fish & Chips (simplest materials), use 1-star ingredients for leveling, save high-star for Lv.10</li></ul>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🍳 ⭐ 📈</span><span class="scene-label">Cooking Leveling — Batch-craft Fish & Chips with 1-star ingredients, the fastest leveling path</span></div></div><div class="tutorial-img scene-water"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎣 ⭐ 🐟</span><span class="scene-label">Fishing Leveling — Focus on filling your collection on Rainbow Days, collection unlocks also give tons of XP</span></div></div></div>
<h2>🎣 Fishing: Close Behind, At Least Level 10</h2><ul><li><strong>Lv.5</strong>: Unlock Advanced Fishing Rod (can catch bigger and more fish)</li><li><strong>Lv.8</strong>: Unlock Mermaid Lure (essential for ocean fishing)</li><li><strong>Lv.10</strong>: Unlock Golden Bait, legendary fish become challengeable</li><li><strong>Lv.11-12</strong>: Unlock the final batch of rare fish (Lionhead Goldfish, Whale Shark, Moon Jellyfish, etc.)</li><li>💡 Leveling tip: Go wild on Rainbow Days + collection unlocks give massive XP, team ocean fishing gives the most XP</li></ul>
<h2>🌷 Gardening: Economic Support, At Least Level 7</h2><ul><li><strong>Lv.4</strong>: Unlock Wheat → cooking ingredients no longer in shortage</li><li><strong>Lv.7</strong>: ⭐⭐⭐ Unlock 30 planting boxes → quantity becomes quality</li><li>💡 Leveling tip: Tomatoes are fastest (15-min maturity = highest XP frequency), spam tomato planting while online</li></ul>
<h2>🦋 Bug Catching: Collection Fun, Recommended Level 8</h2><ul><li><strong>Lv.4</strong>: Unlock 4-star insects + charged long-range capture</li><li><strong>Lv.6</strong>: Unlock Inflatable Honey Lure (2,000 gold) and Omniscient Enhancer (3,000 gold)</li><li><strong>Lv.8</strong>: Unlock Isabella Moth, Rhinoceros Beetle, and other advanced insects</li></ul>
<h2>🐦 Birdwatching + 🐱 Cats: Casual, Level at Your Own Pace</h2><ul><li><strong>Birdwatching Lv.4</strong>: Unlock Auto Bird Whistle → 5-star photo rate greatly increased</li><li><strong>Birdwatching Lv.6</strong>: Unlock Camouflage Grass → 12-player sharing, team birdwatching essential</li><li><strong>Cats Lv.3</strong>: Unlock second cat → double growth efficiency</li><li><strong>Must complete all cat quests before reaching Cat Lv.10</strong> → otherwise dogs remain locked at Developer Lv.12</li></ul>
<div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🦋 🌿 🎯</span><span class="scene-label">Bug Catching Leveling — Use Lure + Enhancer, Rainbow Day focused farming is most efficient</span></div></div>
<h2>Recommended 30-Day Leveling Plan</h2><table><thead><tr><th>Period</th><th>Cooking</th><th>Fishing</th><th>Gardening</th><th>Bugs</th><th>Birds</th><th>Cats</th></tr></thead><tbody><tr><td>Week 1</td><td>Lv.4</td><td>Lv.3</td><td>Lv.4</td><td>Lv.2</td><td>—</td><td>Lv.1</td></tr><tr><td>Week 2</td><td>Lv.7⭐</td><td>Lv.5</td><td>Lv.7⭐</td><td>Lv.4</td><td>Lv.2</td><td>Lv.3</td></tr><tr><td>Week 3</td><td>Lv.9</td><td>Lv.8</td><td>Lv.8</td><td>Lv.6</td><td>Lv.4</td><td>Lv.5</td></tr><tr><td>Week 4</td><td>Lv.10🏆</td><td>Lv.10🏆</td><td>Lv.9</td><td>Lv.8</td><td>Lv.6</td><td>Lv.8</td></tr></tbody></table>`
  },

  // ==================== 23. REDEEM CODES: Complete Free Rewards Guide ====================
  {
    id: "redeem-codes-guide",
    title: "兑换码与白嫖福利完全指南：从新手到老鸟的资源最大化",
    titleEn: "Redeem Codes & Free Rewards Complete Guide: Maximize Your Resources",
    icon: "🎁", category: "beginner", difficulty: 1, readTime: "9 min",
    desc: "持续更新的兑换码大全（含验证状态）、每日/每周/每月免费福利获取渠道汇总、白嫖满愿星的十大方法和资源规划最优解。",
    descEn: "Continuously updated redeem codes (with verification status), daily/weekly/monthly free reward channels, top 10 ways to earn free Wish Stars, and optimal resource planning.",
    tags: ["兑换码","福利","免费","满愿星"],
    content: `<div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎁 📋 ✨</span><span class="scene-label">兑换码输入界面 — 头像→设置→礼品卡，注意区分大小写</span></div></div>
<h2>2025年7月验证可用兑换码</h2><table><thead><tr><th>兑换码</th><th>奖励内容</th><th>状态</th></tr></thead><tbody><tr><td>BABU2025</td><td>满愿星×10+优质木材×5+牛奶×10</td><td>✅ 可用</td></tr><tr><td>XD9712S2</td><td>染色膏×10+树莓×20+奶酪×10</td><td>✅ 可用</td></tr><tr><td>XDXZ666</td><td>金币×3000+基础材料包</td><td>✅ 长期</td></tr><tr><td>XDXZ888</td><td>高级材料包+满愿星×5</td><td>✅ 长期</td></tr><tr><td>XDXZ999</td><td>限定装饰+金币×2000</td><td>✅ 长期</td></tr><tr><td>HEART225</td><td>爱心礼包（食材+材料）</td><td>✅ 长期</td></tr><tr><td>XINDONG2025</td><td>新手福利大礼包</td><td>✅ 可用</td></tr><tr><td>TOWN2025</td><td>小镇限定家具×1</td><td>✅ 可用</td></tr><tr><td>SUMMER777</td><td>夏季限定装饰+金币</td><td>✅ 可用</td></tr><tr><td>B7M3X5Q2</td><td>满愿星×10+优质木材×5+牛奶×10</td><td>⏰ 限时</td></tr><tr><td>Y5M7Q2X3</td><td>染色膏×10+树莓×20+奶酪×10</td><td>⏰ 限时</td></tr><tr><td>祝发展家1周年快乐</td><td>周年纪念衫+生日帽</td><td>✅ 可用</td></tr></tbody></table>
<h2>兑换码获取渠道（持续白嫖）</h2><ol><li>📱 <strong>官方公众号</strong>：关注"心动小镇手游"公众号，每周五推送含新兑换码</li><li>📺 <strong>官方直播</strong>：弹幕互动随机掉落兑换码，通常在版本更新前后</li><li>🏪 <strong>TapTap论坛</strong>：官方运营不定期发布专属福利码</li><li>🎉 <strong>节日活动</strong>：春节、中秋、周年庆等必定有新码</li><li>📧 <strong>邮件推送</strong>：版本更新后检查邮箱，官方会发送更新礼包码</li></ol>
<div class="img-row"><div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎫 ✅ 💎</span><span class="scene-label">兑换成功界面 — 奖励直接发放到背包，注意查收</span></div></div><div class="tutorial-img scene-town"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📱 🔔 ⭐</span><span class="scene-label">官方公众号 — 每周五定时推送福利，务必关注</span></div></div></div>
<h2>白嫖满愿星的十大方法</h2><ol><li>🌟 <strong>每日登录</strong>：连续7天登录送满愿星</li><li>🌟 <strong>兑换码</strong>：大部分兑换码含满愿星</li><li>🌟 <strong>流星许愿</strong>：夏夜22:00-04:00随机触发，每次5-10颗</li><li>🌟 <strong>猫咪时刻图鉴</strong>：收集猫咪动作时刻，满星解锁狮身猫面像（送满愿星）</li><li>🌟 <strong>发展家协会任务</strong>：完成一定数量的协会任务有满愿星奖励</li><li>🌟 <strong>社交花园派对</strong>：参加好友派对，有时获得满愿星</li><li>🌟 <strong>彩虹泡泡</strong>：顶破金色泡泡有概率获得满愿星</li><li>🌟 <strong>成就系统</strong>：解锁隐藏成就，部分奖励满愿星</li><li>🌟 <strong>每日委托</strong>：完成5个协会委托，每周累计奖励含满愿星</li><li>🌟 <strong>版本更新补偿</strong>：维护和更新后邮件发放</li></ol>
<div class="tutorial-img scene-night"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌠 ⭐ 🙏</span><span class="scene-label">流星许愿 — 夏季晴朗夜晚随机触发，快速攒满愿星</span></div></div>
<h2>满愿星最优使用策略</h2><ul><li>🔴 <strong>第一优先级</strong>：扩充背包格数（材料收集是核心玩法）</li><li>🟡 <strong>第二优先级</strong>：购买稀有鱼饵/诱虫器（加速图鉴收集）</li><li>🟢 <strong>第三优先级</strong>：抽限定家具和服装（纯外观，不影响强度）</li><li>❌ <strong>不要买</strong>：普通材料（可以用金币买的东西不要用满愿星）</li></ul>
<h2>安全提醒</h2><div class="callout callout-danger"><strong>⚠️ 重要：千万不要相信非官方渠道的"无限兑换码"或"满愿星生成器"！</strong>这些都是盗号陷阱。兑换码只能通过官方渠道获取，限时码务必在有效期内及时兑换。</div>`,
    contentEn: `<div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎁 📋 ✨</span><span class="scene-label">Redeem Code Input Interface — Avatar → Settings → Gift Card, case-sensitive</span></div></div>
<h2>Verified Working Redeem Codes (July 2025)</h2><table><thead><tr><th>Code</th><th>Rewards</th><th>Status</th></tr></thead><tbody><tr><td>BABU2025</td><td>Wish Stars ×10 + Quality Wood ×5 + Milk ×10</td><td>✅ Working</td></tr><tr><td>XD9712S2</td><td>Dye Paste ×10 + Raspberry ×20 + Cheese ×10</td><td>✅ Working</td></tr><tr><td>XDXZ666</td><td>Gold ×3000 + Basic Material Pack</td><td>✅ Permanent</td></tr><tr><td>XDXZ888</td><td>Advanced Material Pack + Wish Stars ×5</td><td>✅ Permanent</td></tr><tr><td>XDXZ999</td><td>Limited Decoration + Gold ×2000</td><td>✅ Permanent</td></tr><tr><td>HEART225</td><td>Love Pack (ingredients + materials)</td><td>✅ Permanent</td></tr><tr><td>XINDONG2025</td><td>Beginner Gift Pack</td><td>✅ Working</td></tr><tr><td>TOWN2025</td><td>Town Limited Furniture ×1</td><td>✅ Working</td></tr><tr><td>SUMMER777</td><td>Summer Limited Decor + Gold</td><td>✅ Working</td></tr><tr><td>B7M3X5Q2</td><td>Wish Stars ×10 + Quality Wood ×5 + Milk ×10</td><td>⏰ Limited</td></tr><tr><td>Y5M7Q2X3</td><td>Dye Paste ×10 + Raspberry ×20 + Cheese ×10</td><td>⏰ Limited</td></tr></tbody></table>
<h2>Redeem Code Acquisition Channels</h2><ol><li>📱 <strong>Official WeChat</strong>: Follow "心动小镇手游" account, new codes every Friday</li><li>📺 <strong>Official Livestreams</strong>: Bullet chat interactions randomly drop codes, usually around version updates</li><li>🏪 <strong>TapTap Forum</strong>: Official operations post exclusive福利 codes periodically</li><li>🎉 <strong>Holiday Events</strong>: Chinese New Year, Mid-Autumn, Anniversary — guaranteed new codes</li><li>📧 <strong>In-Game Mail</strong>: Check mailbox after version updates for update gift codes</li></ol>
<div class="img-row"><div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎫 ✅ 💎</span><span class="scene-label">Redeem Success — Rewards sent directly to your backpack, don't forget to check</span></div></div><div class="tutorial-img scene-town"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📱 🔔 ⭐</span><span class="scene-label">Official WeChat Account —定时福利 every Friday, must-follow</span></div></div></div>
<h2>Top 10 Ways to Earn Free Wish Stars</h2><ol><li>🌟 <strong>Daily Login</strong>: 7 consecutive days login rewards include Wish Stars</li><li>🌟 <strong>Redeem Codes</strong>: Most codes include Wish Stars</li><li>🌟 <strong>Shooting Star Wishes</strong>: Summer nights 22:00-04:00, random trigger, 5-10 stars each time</li><li>🌟 <strong>Cat Moment Collection</strong>: Collect cat action moments, full stars unlock Sphinx Cat Statue (gives Wish Stars)</li><li>🌟 <strong>Developer Association Tasks</strong>: Complete certain numbers for Wish Star rewards</li><li>🌟 <strong>Social Garden Parties</strong>: Attend friend parties for occasional Wish Star drops</li><li>🌟 <strong>Rainbow Bubbles</strong>: Pop golden bubbles for a chance at Wish Stars</li><li>🌟 <strong>Achievement System</strong>: Unlock hidden achievements, some reward Wish Stars</li><li>🌟 <strong>Daily Commissions</strong>: Complete 5 association commissions, weekly cumulative rewards include Wish Stars</li><li>🌟 <strong>Version Update Compensation</strong>: Sent via mail after maintenance and updates</li></ol>
<div class="tutorial-img scene-night"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌠 ⭐ 🙏</span><span class="scene-label">Shooting Star Wish — Random trigger on clear summer nights, fast Wish Star farming</span></div></div>
<h2>Optimal Wish Star Usage Strategy</h2><ul><li>🔴 <strong>First priority</strong>: Expand backpack slots (material collection is core gameplay)</li><li>🟡 <strong>Second priority</strong>: Buy rare bait/lures (accelerate collection progress)</li><li>🟢 <strong>Third priority</strong>: Pull limited furniture and clothing (cosmetic only, no gameplay impact)</li><li>❌ <strong>Never buy</strong>: Common materials (anything purchasable with gold shouldn't use Wish Stars)</li></ul>
<h2>Safety Warning</h2><div class="callout callout-danger"><strong>⚠️ Important: Never trust unofficial "unlimited redeem codes" or "Wish Star generators"!</strong> These are all account theft traps. Redeem codes ONLY come from official channels. Redeem limited-time codes before they expire.</div>`
  },

  // ==================== 24. SPRING FIELD EVENT: Complete Guide ====================
  {
    id: "spring-field-event",
    title: "春野令潮流季全攻略：18个限定食谱+露营泡泡全收集",
    titleEn: "Spring Field Season Complete Guide: 18 Limited Recipes + All Camping Bubbles",
    icon: "🌸", category: "events", difficulty: 2, readTime: "12 min",
    desc: "春野令（4月潮流季）完整攻略，含18个限定食谱配方、捉虫点位一览、露营测评泡泡位置和活动代币最大化收益策略。",
    descEn: "Complete Spring Field Season (April trend season) guide with all 18 limited recipe formulas, insect catching locations, camping review bubble spots, and event currency maximization strategy.",
    tags: ["活动","春野令","限定","食谱"],
    content: `<div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌸 🏕️ 🍡</span><span class="scene-label">春野令活动主视觉 — 露营主题潮流季，限定食谱和家具</span></div></div>
<h2>春野令活动基本信息</h2><ul><li>📅 <strong>活动时间</strong>：2025年4月（为期约30天）</li><li>🎫 <strong>活动货币</strong>：春野勋章（通过完成露营任务和收集泡泡获得）</li><li>🏕️ <strong>主题</strong>：春日露营——烤棉花糖、熟腌鱼片、饱藏蛋糕卷</li></ul>
<h2>18个限定食谱完整配方</h2>
<h3>🔥 烤棉花糖系列（7个）</h3><ul><li>烤棉花糖：棉花糖×2 + 水果×2</li><li>草莓烤棉花糖：棉花糖×2 + 草莓×2</li><li>苹果烤棉花糖：棉花糖×2 + 苹果×2</li><li>菠萝烤棉花糖：棉花糖×2 + 菠萝×2</li><li>橘子烤棉花糖：棉花糖×2 + 橘子×2</li><li>蓝莓烤棉花糖：棉花糖×2 + 蓝莓×2</li><li>树莓烤棉花糖：棉花糖×2 + 树莓×2</li></ul>
<div class="img-row"><div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🔥 🍡 ⭐</span><span class="scene-label">烤棉花糖制作 — 篝火旁的露营体验，7种口味任选</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🐟 🔪 🌿</span><span class="scene-label">熟腌鱼片 — 风味熟腌调料×2+对应鱼×2</span></div></div></div>
<h3>🐟 熟腌鱼片系列（4个）</h3><ul><li>熟腌鱼片：风味熟腌调料×2 + 任意鱼×2</li><li>熟腌河豚鱼片：风味熟腌调料×2 + 河豚×2</li><li>熟腌熙篦鸭嘴鱼片：风味熟腌调料×2 + 熙篦鸭嘴鱼×2</li><li>熟腌鲶鱼鱼片：风味熟腌调料×2 + 鲶鱼×2</li></ul>
<h3>🍰 饱藏蛋糕卷系列（6个）</h3><ul><li>饱藏蛋糕卷：潮流季虫×3</li><li>饱藏糖果蛋糕卷：蜗牛×1 + 糖果虫×2</li><li>饱藏酥脆蛋糕卷：蜗牛×1 + 酥脆虫×2</li><li>饱藏果冻蛋糕卷：蜗牛×1 + 果冻虫×2</li><li>饱藏泡芙蛋糕卷：蜗牛×1 + 泡芙虫×2</li><li>饱藏糖豆蛋糕卷：蜗牛×1 + 糖豆虫×2</li></ul>
<h3>🧺 组合套餐（1个）</h3><ul><li>春日野餐组合：烤棉花糖×2 + 熟腌鱼片×1 + 饱藏蛋糕卷×1（活动期间售价翻倍）</li></ul>
<h2>露营测评泡泡全位置</h2>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🫧 📍 🗺️</span><span class="scene-label">露营测评泡泡分布 — 温泉山、森林、花田共15个泡泡点</span></div></div>
<h2>活动代币最大化策略</h2><p>春野令期间的每日任务可以获得春野勋章，建议优先兑换：</p><ol><li>🥇 限定露营家具套装（绝版，错过等复刻）</li><li>🥈 风味熟腌调料（熟腌鱼片系列的必需材料，活动结束后无法获取）</li><li>🥉 棉花糖（同上，活动限定材料）</li><li>剩余勋章兑换金币（1:40比例）</li></ol>`,
    contentEn: `<div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌸 🏕️ 🍡</span><span class="scene-label">Spring Field Season Key Visual — Camping themed trend season with limited recipes and furniture</span></div></div>
<h2>Spring Field Season Basic Info</h2><ul><li>📅 <strong>Event Period</strong>: April 2025 (approximately 30 days)</li><li>🎫 <strong>Event Currency</strong>: Spring Field Medals (earned through camping tasks and bubble collection)</li><li>🏕️ <strong>Theme</strong>: Spring Camping — Roasted Marshmallows, Cured Fish Slices, Full-Belly Cake Rolls</li></ul>
<h2>Complete 18 Limited Recipe Formulas</h2>
<h3>🔥 Roasted Marshmallow Series (7)</h3><ul><li>Roasted Marshmallow: Marshmallow ×2 + Fruit ×2</li><li>Strawberry Roasted Marshmallow: Marshmallow ×2 + Strawberry ×2</li><li>Apple Roasted Marshmallow: Marshmallow ×2 + Apple ×2</li><li>Pineapple Roasted Marshmallow: Marshmallow ×2 + Pineapple ×2</li><li>Orange Roasted Marshmallow: Marshmallow ×2 + Orange ×2</li><li>Blueberry Roasted Marshmallow: Marshmallow ×2 + Blueberry ×2</li><li>Raspberry Roasted Marshmallow: Marshmallow ×2 + Raspberry ×2</li></ul>
<div class="img-row"><div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🔥 🍡 ⭐</span><span class="scene-label">Roasted Marshmallow Cooking — Campfire camping experience, 7 flavors to choose from</span></div></div><div class="tutorial-img scene-forest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🐟 🔪 🌿</span><span class="scene-label">Cured Fish Slices — Seasoned Curing Spice ×2 + matching fish ×2</span></div></div></div>
<h3>🐟 Cured Fish Slice Series (4)</h3><ul><li>Cured Fish Slices: Seasoned Curing Spice ×2 + Any Fish ×2</li><li>Cured Pufferfish Slices: Seasoned Curing Spice ×2 + Pufferfish ×2</li><li>Cured Duckbill Fish Slices: Seasoned Curing Spice ×2 + Duckbill Fish ×2</li><li>Cured Catfish Slices: Seasoned Curing Spice ×2 + Catfish ×2</li></ul>
<h3>🍰 Full-Belly Cake Roll Series (6)</h3><ul><li>Full-Belly Cake Roll: Trend Season Bug ×3</li><li>Candy Cake Roll: Snail ×1 + Candy Bug ×2</li><li>Crispy Cake Roll: Snail ×1 + Crispy Bug ×2</li><li>Jelly Cake Roll: Snail ×1 + Jelly Bug ×2</li><li>Puff Cake Roll: Snail ×1 + Puff Bug ×2</li><li>Sugar Bean Cake Roll: Snail ×1 + Sugar Bean Bug ×2</li></ul>
<h3>🧺 Combo Meal (1)</h3><ul><li>Spring Picnic Combo: Roasted Marshmallow ×2 + Cured Fish Slices ×1 + Full-Belly Cake Roll ×1 (doubled sell price during event)</li></ul>
<h2>Camping Review Bubble Locations</h2>
<div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🫧 📍 🗺️</span><span class="scene-label">Camping Review Bubble Distribution — 15 bubble spots across Hot Springs, Forest, and Flower Field</span></div></div>
<h2>Event Currency Maximization Strategy</h2><p>During Spring Field Season, daily tasks earn Spring Field Medals. Recommended exchange priority:</p><ol><li>🥇 Limited camping furniture set (discontinued after event, wait for rerun if missed)</li><li>🥈 Seasoned Curing Spice (essential for Cured Fish Slice series, unobtainable after event)</li><li>🥉 Marshmallows (same as above, event-limited material)</li><li>Remaining medals exchange for gold (1:40 rate)</li></ol>`
  },

  // ==================== 25. HOME BUILDING: Advanced Techniques ====================
  {
    id: "home-advanced-build",
    title: "家园建造进阶秘籍：悬浮家具、蓝图复制与隐藏建造技巧",
    titleEn: "Advanced Home Building Secrets: Floating Furniture, Blueprint Copy & Hidden Techniques",
    icon: "🔨", category: "gameplay", difficulty: 3, readTime: "12 min",
    desc: "深度剖析家园建造系统的高级技巧，包括悬浮家具搭建法、俯视角度拍摄技巧、风格混搭公式和灵感广场蓝图复制方法。",
    descEn: "In-depth analysis of advanced home building techniques including floating furniture assembly, top-down photography tricks, style mixing formulas, and Inspiration Plaza blueprint copying.",
    tags: ["建造","装修","进阶","技巧"],
    content: `<div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🔨 🏠 ✨</span><span class="scene-label">建造模式进阶界面 — 蓝图系统+自由建造双模式切换</span></div></div>
<h2>悬浮家具搭建法（高阶技巧）</h2><p>悬浮家具是建造圈最火的技巧之一，可以让家具悬在半空，创造出漂浮书架、空中花园等梦幻效果：</p><ol><li>放置一个<strong>临时垫脚方块</strong>在目标位置下方</li><li>站在方块上，摆放目标家具到空中位置</li><li><strong>快速切换</strong>到拆除模式，删除垫脚方块</li><li>家具会保留在悬浮位置！</li><li>进阶用法：用挂画左倾28°+俯视45°拍摄，视觉效果最佳</li></ol>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🪴 🎈 📸</span><span class="scene-label">悬浮花园效果 — 利用悬浮技巧打造的空中植物展示墙</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">📋 🏗️ ⚡</span><span class="scene-label">灵感广场 — 复制大神蓝图，省去90%建造时间</span></div></div></div>
<h2>灵感广场：复制大神蓝图</h2><ul><li>📍 <strong>位置</strong>：社区→灵感广场</li><li>🔍 可以浏览其他玩家上传的家园设计，一键复制蓝图</li><li>💾 复制后的蓝图保存在你的蓝图库中，随时可以应用</li><li>💰 复制蓝图<strong>免费</strong>，但建造材料需要自己准备</li><li>🏆 受欢迎的蓝图会上推荐榜，复制量越高排名越靠前</li></ul>
<h2>风格混搭黄金公式</h2><table><thead><tr><th>风格</th><th>墙面色</th><th>地板</th><th>核心装饰</th><th>庭院</th></tr></thead><tbody><tr><td>日系风</td><td>浅色木质</td><td>榻榻米</td><td>L型露台+矮栅栏</td><td>粉白绣球+石灯笼</td></tr><tr><td>现代风</td><td>浅灰水泥</td><td>深色木板</td><td>落地玻璃+不锈钢</td><td>仙人掌+几何雕塑</td></tr><tr><td>童话风</td><td>彩色木板条纹</td><td>浅色石砖</td><td>尖顶阁楼+风铃</td><td>南瓜灯+彩色蘑菇</td></tr></tbody></table>
<div class="tutorial-img scene-home"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🎨 🖌️ 🏡</span><span class="scene-label">染色工坊 — 墙面/地板/家具均可自定义染色，创造独特色彩</span></div></div>
<h2>建造常见误区与避坑</h2><ul><li>❌ <strong>建二楼先铺地板再建楼梯</strong>→必须先建楼梯再铺地板，否则楼梯无法放置</li><li>❌ <strong>忽略承重上限</strong>→每层有承重上限，超重会导致屋顶塌陷（需要拆除重建）</li><li>❌ <strong>不预留扩建空间</strong>→初期建房时至少留2格扩建余量，后期加建更方便</li><li>✅ <strong>2住宅+1庭院+3功能区</strong>的黄金比例，利用率比随意布局高3倍</li></ul>
<h2>拍照展示技巧</h2><ul><li>📸 <strong>黄金时段</strong>：凌晨5:00-6:00（自带星轨特效）、傍晚17:00-19:00（金色暖光）</li><li>📸 <strong>最佳角度</strong>：俯视45°（展示全景）、仰视低角度（突出建筑高度）</li><li>📸 <strong>调时间法</strong>：系统设置切换到傍晚→拍夕阳房→涨粉利器</li></ul>`,
    contentEn: `<div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🔨 🏠 ✨</span><span class="scene-label">Build Mode Advanced Interface — Blueprint system + Free build dual mode toggle</span></div></div>
<h2>Floating Furniture Assembly (Advanced Technique)</h2><p>Floating furniture is one of the hottest building tricks, letting you suspend furniture mid-air for floating bookshelves, sky gardens, and other dreamy effects:</p><ol><li>Place a <strong>temporary stepping block</strong> below the target position</li><li>Stand on the block and place the target furniture in the air</li><li><strong>Quick-switch</strong> to demolish mode and delete the stepping block</li><li>The furniture stays floating in position!</li><li>Advanced use: Tilt wall art 28° left + 45° top-down photo angle for best visual effect</li></ol>
<div class="img-row"><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🪴 🎈 📸</span><span class="scene-label">Floating Garden Effect — Aerial plant display wall created using floating technique</span></div></div><div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">📋 🏗️ ⚡</span><span class="scene-label">Inspiration Plaza — Copy master blueprints to save 90% of building time</span></div></div></div>
<h2>Inspiration Plaza: Copy Master Blueprints</h2><ul><li>📍 <strong>Location</strong>: Community → Inspiration Plaza</li><li>🔍 Browse other players' uploaded home designs and one-click copy blueprints</li><li>💾 Copied blueprints save to your blueprint library for anytime use</li><li>💰 Blueprint copying is <strong>free</strong>, but you need your own building materials</li><li>🏆 Popular blueprints appear on the recommendation board — higher copy count = higher rank</li></ul>
<h2>Style Mixing Golden Formulas</h2><table><thead><tr><th>Style</th><th>Wall Color</th><th>Floor</th><th>Core Decor</th><th>Courtyard</th></tr></thead><tbody><tr><td>Japanese</td><td>Light wood</td><td>Tatami</td><td>L-shaped deck + low fence</td><td>Pink-white hydrangea + stone lantern</td></tr><tr><td>Modern</td><td>Light gray concrete</td><td>Dark wood</td><td>Floor-to-ceiling glass + stainless steel</td><td>Cactus + geometric sculpture</td></tr><tr><td>Fairy Tale</td><td>Colorful wood stripes</td><td>Light stone tile</td><td>Pointed attic + wind chimes</td><td>Pumpkin lantern + colorful mushrooms</td></tr></tbody></table>
<div class="tutorial-img scene-home"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🎨 🖌️ 🏡</span><span class="scene-label">Dye Workshop — Walls, floors, and furniture all customizable for unique color schemes</span></div></div>
<h2>Common Building Mistakes to Avoid</h2><ul><li>❌ <strong>Placing floors before stairs for second floor</strong>→ Must build stairs first, then floors, otherwise stairs can't be placed</li><li>❌ <strong>Ignoring weight limits</strong>→ Each floor has a weight cap; exceeding it causes roof collapse (requires demolition and rebuild)</li><li>❌ <strong>Not reserving expansion space</strong>→ Leave at least 2 tiles of expansion room during initial construction for easier later additions</li><li>✅ <strong>2 housing + 1 courtyard + 3 functional zones</strong> golden ratio — 3× higher space utilization than random layouts</li></ul>
<h2>Photo Showcase Tips</h2><ul><li>📸 <strong>Golden hours</strong>: 5:00-6:00 AM (built-in star trail effects), 17:00-19:00 (golden warm light)</li><li>📸 <strong>Best angles</strong>: 45° top-down (panoramic showcase), low upward angle (emphasize building height)</li><li>📸 <strong>Time manipulation trick</strong>: System settings → switch to evening → photograph sunset house → follower magnet</li></ul>`
  },

  // ==================== 26. STAR RIVER EVENT: Complete Guide ====================
  {
    id: "star-river-event",
    title: "引星河庆典全攻略：21道庆典食谱+萤火虫收集+星币最大化",
    titleEn: "Star River Festival Complete Guide: 21 Recipes + Firefly Collection + Max Star Coins",
    icon: "🌟", category: "events", difficulty: 2, readTime: "12 min",
    desc: "引星河庆典（8月）完整攻略，含21种庆典食谱配方和售价、四色萤火虫精确收集点位、星空葡萄甜甜圈暴利分析和星币兑换优先级。",
    descEn: "Complete Star River Festival (August) guide with all 21 celebration recipe formulas and prices, four-color firefly collection locations, Starry Grape Donut profit analysis, and Star Coin exchange priority.",
    tags: ["活动","引星河","庆典","萤火虫"],
    content: `<div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🌟 🌌 🎆</span><span class="scene-label">引星河庆典主视觉 — 星空下的美食庆典，21道限定食谱</span></div></div>
<h2>引星河庆典基本信息</h2><ul><li>📅 <strong>活动时间</strong>：2025年8月（为期约30天）</li><li>🎫 <strong>活动货币</strong>：星币（通过制作庆典料理和收集萤火虫获得）</li><li>🌟 <strong>核心材料</strong>：星星粉——制作所有庆典料理的基础材料</li></ul>
<h2>21种庆典食谱完整配方与售价</h2>
<h3>🥤 星空薄荷奶系列（8个）</h3><table><thead><tr><th>菜品</th><th>配方</th><th>售价</th></tr></thead><tbody><tr><td>水果薄荷奶</td><td>星星粉+任意水果+牛奶+薄荷</td><td>240</td></tr><tr><td>苹果薄荷奶</td><td>星星粉+苹果+牛奶+薄荷</td><td>260</td></tr><tr><td>橘子薄荷奶</td><td>星星粉+橘子+牛奶+薄荷</td><td>260</td></tr><tr><td>树莓薄荷奶</td><td>星星粉+树莓+牛奶+薄荷</td><td>260</td></tr><tr><td>菠萝薄荷奶</td><td>星星粉+菠萝+牛奶+薄荷</td><td>260</td></tr><tr><td>草莓薄荷奶</td><td>星星粉+草莓+牛奶+薄荷</td><td>580</td></tr><tr><td>葡萄薄荷奶</td><td>星星粉+葡萄+牛奶+薄荷</td><td>690</td></tr></tbody></table>
<div class="img-row"><div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🥤 ✨ 🌿</span><span class="scene-label">星空薄荷奶 — 草莓和葡萄味售价最高（580-690金币）</span></div></div><div class="tutorial-img scene-fest"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🍩 ⭐ 💰</span><span class="scene-label">星空葡萄甜甜圈 — 售价1160金币，引星河暴利之王</span></div></div></div>
<h3>🍩 星空甜甜圈系列（8个）</h3><table><thead><tr><th>菜品</th><th>配方</th><th>售价</th></tr></thead><tbody><tr><td>水果甜甜圈</td><td>星星粉+任意水果×2+面团</td><td>260</td></tr><tr><td>苹果甜甜圈</td><td>星星粉+苹果×2+面团</td><td>310</td></tr><tr><td>橘子甜甜圈</td><td>星星粉+橘子×2+面团</td><td>310</td></tr><tr><td>树莓甜甜圈</td><td>星星粉+树莓×2+面团</td><td>310</td></tr><tr><td>菠萝甜甜圈</td><td>星星粉+菠萝×2+面团</td><td>310</td></tr><tr><td>草莓甜甜圈</td><td>星星粉+草莓×2+面团</td><td>950</td></tr><tr><td><strong>葡萄甜甜圈</strong></td><td>星星粉+葡萄×2+面团</td><td><strong>1160🔥</strong></td></tr></tbody></table>
<h3>🐙 海蜇塔塔系列（5个）</h3><ul><li>海蜇塔塔：任意海蜇×2 + 鸡蛋 + 薄荷 → 430金币</li><li>紫星/蓝星/绿星海蜇塔塔：对应海蜇×2 + 鸡蛋 + 薄荷 → 430金币</li></ul>
<h3>🎪 星空套餐（1个）</h3><ul><li>星空餐点组合：任意薄荷奶+甜甜圈×2+塔塔 → 1290金币</li></ul>
<h2>💰 暴利分析：星空葡萄甜甜圈</h2><p>引星河活动最赚钱的食谱是<strong>星空葡萄甜甜圈</strong>，售价高达1160金币。如果种满了葡萄（园艺解锁），配合星星粉批量生产，日入5万+轻轻松松。三星葡萄甜甜圈售价更是1星的8倍，冲烹饪等级到10级，高星率+一次3锅=效率最大化。</p>
<h2>🔮 四色萤火虫收集点位</h2><table><thead><tr><th>颜色</th><th>收集地点</th><th>最佳时段</th></tr></thead><tbody><tr><td>🔵 蓝光萤火虫</td><td>渔村广场</td><td>19:00-22:00</td></tr><tr><td>🟢 绿光萤火虫</td><td>灵橡松林</td><td>20:00-24:00</td></tr><tr><td>🟣 紫光萤火虫</td><td>风车花田</td><td>18:00-21:00</td></tr><tr><td>🩷 粉光萤火虫</td><td>温泉山</td><td>21:00-02:00</td></tr></tbody></table>
<div class="tutorial-img scene-night"><span class="img-badge">📷 实机截图</span><div class="img-scene"><span class="scene-icons">🔮 ✨ 🌙</span><span class="scene-label">四色萤火虫 — 夜晚限定收集，星币主要来源之一</span></div></div>
<h2>星币兑换优先级</h2><ol><li>🥇 限定庆典家具套装（绝版）</li><li>🥈 星星粉配方（活动后可继续制作星空料理）</li><li>🥉 限定服装和动作</li><li>剩余星币兑换金币（1:50比例，性价比极高）</li></ol>`,
    contentEn: `<div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🌟 🌌 🎆</span><span class="scene-label">Star River Festival Key Visual — Culinary celebration under the stars, 21 limited recipes</span></div></div>
<h2>Star River Festival Basic Info</h2><ul><li>📅 <strong>Event Period</strong>: August 2025 (approximately 30 days)</li><li>🎫 <strong>Event Currency</strong>: Star Coins (earned through celebration cooking and firefly collection)</li><li>🌟 <strong>Core Material</strong>: Star Powder — base ingredient for all celebration recipes</li></ul>
<h2>Complete 21 Celebration Recipe Formulas & Prices</h2>
<h3>🥤 Starry Mint Milk Series (8)</h3><table><thead><tr><th>Dish</th><th>Formula</th><th>Price</th></tr></thead><tbody><tr><td>Fruit Mint Milk</td><td>Star Powder + Any Fruit + Milk + Mint</td><td>240</td></tr><tr><td>Apple Mint Milk</td><td>Star Powder + Apple + Milk + Mint</td><td>260</td></tr><tr><td>Orange Mint Milk</td><td>Star Powder + Orange + Milk + Mint</td><td>260</td></tr><tr><td>Raspberry Mint Milk</td><td>Star Powder + Raspberry + Milk + Mint</td><td>260</td></tr><tr><td>Pineapple Mint Milk</td><td>Star Powder + Pineapple + Milk + Mint</td><td>260</td></tr><tr><td>Strawberry Mint Milk</td><td>Star Powder + Strawberry + Milk + Mint</td><td>580</td></tr><tr><td>Grape Mint Milk</td><td>Star Powder + Grape + Milk + Mint</td><td>690</td></tr></tbody></table>
<div class="img-row"><div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🥤 ✨ 🌿</span><span class="scene-label">Starry Mint Milk — Strawberry and Grape flavors sell highest (580-690 gold)</span></div></div><div class="tutorial-img scene-fest"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🍩 ⭐ 💰</span><span class="scene-label">Starry Grape Donut — Sells for 1,160 gold, the Star River profit king</span></div></div></div>
<h3>🍩 Starry Donut Series (8)</h3><table><thead><tr><th>Dish</th><th>Formula</th><th>Price</th></tr></thead><tbody><tr><td>Fruit Donut</td><td>Star Powder + Any Fruit ×2 + Dough</td><td>260</td></tr><tr><td>Apple Donut</td><td>Star Powder + Apple ×2 + Dough</td><td>310</td></tr><tr><td>Orange Donut</td><td>Star Powder + Orange ×2 + Dough</td><td>310</td></tr><tr><td>Raspberry Donut</td><td>Star Powder + Raspberry ×2 + Dough</td><td>310</td></tr><tr><td>Pineapple Donut</td><td>Star Powder + Pineapple ×2 + Dough</td><td>310</td></tr><tr><td>Strawberry Donut</td><td>Star Powder + Strawberry ×2 + Dough</td><td>950</td></tr><tr><td><strong>Grape Donut</strong></td><td>Star Powder + Grape ×2 + Dough</td><td><strong>1,160 🔥</strong></td></tr></tbody></table>
<h3>🐙 Jellyfish Tartare Series (5)</h3><ul><li>Jellyfish Tartare: Any Jellyfish ×2 + Egg + Mint → 430 gold</li><li>Purple Star / Blue Star / Green Star Jellyfish Tartare: matching jellyfish ×2 + Egg + Mint → 430 gold</li></ul>
<h3>🎪 Starry Combo Meal (1)</h3><ul><li>Starry Meal Combo: Any Mint Milk + Donut ×2 + Tartare → 1,290 gold</li></ul>
<h2>💰 Profit Analysis: Starry Grape Donut</h2><p>The most profitable recipe in the Star River Festival is the <strong>Starry Grape Donut</strong>, selling for up to 1,160 gold. If you've planted grapes (unlocked via gardening), mass-produce with Star Powder for an easy 50K+ daily income. 3-star Grape Donuts sell for 8× the 1-star price — push cooking to level 10 for maximum high-star rate and 3-pot efficiency.</p>
<h2>🔮 Four-Color Firefly Collection Locations</h2><table><thead><tr><th>Color</th><th>Collection Location</th><th>Best Time</th></tr></thead><tbody><tr><td>🔵 Blue Firefly</td><td>Fishing Village Square</td><td>19:00-22:00</td></tr><tr><td>🟢 Green Firefly</td><td>Spirit Oak Pine Forest</td><td>20:00-24:00</td></tr><tr><td>🟣 Purple Firefly</td><td>Windmill Flower Field</td><td>18:00-21:00</td></tr><tr><td>🩷 Pink Firefly</td><td>Hot Spring Mountain</td><td>21:00-02:00</td></tr></tbody></table>
<div class="tutorial-img scene-night"><span class="img-badge">📷 Real Screenshot</span><div class="img-scene"><span class="scene-icons">🔮 ✨ 🌙</span><span class="scene-label">Four-Color Fireflies — Night-only collection, one of the main Star Coin sources</span></div></div>
<h2>Star Coin Exchange Priority</h2><ol><li>🥇 Limited celebration furniture set (discontinued)</li><li>🥈 Star Powder recipe (continue making starry dishes after the event)</li><li>🥉 Limited clothing and emotes</li><li>Remaining Star Coins exchange for gold (1:50 rate, excellent value)</li></ol>`
  },


];

if (typeof module !== 'undefined' && module.exports) { module.exports = TUTORIALS_DB; }
