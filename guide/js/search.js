/**
 * Heartopia 攻略站 — Global Search Index & UI
 * Usage: initSearch(searchInputSelector, resultsContainerSelector)
 */

const SEARCH_INDEX = [
  // 新手入门
  { title: '新手入门指南', desc: 'Day1 必做清单、界面操作、常见误区', url: 'guide/beginner.html', tags: ['新手', '入门', '教程', 'beginner', 'guide'] },
  { title: 'Day1 必做清单', desc: '第一天最应该完成的事项', url: 'guide/beginner.html#section-0', tags: ['第一天', '必做', '清单'] },
  { title: '游戏界面与操作', desc: '了解 Heartopia 的基本界面和操作方式', url: 'guide/beginner.html#section-1', tags: ['界面', '操作', 'UI'] },

  // 钓鱼
  { title: '钓鱼攻略', desc: '钓鱼系统详解、鱼饵类型、最佳钓点', url: 'guide/fishing.html#section-0', tags: ['钓鱼', 'fishing', '攻略'] },
  { title: '鱼类图鉴', desc: '80+ 种鱼类数据：季节、地点、稀有度、价格', url: 'guide/fishing.html#section-1', tags: ['鱼', '图鉴', '鱼类', 'fish', '数据库'] },
  { title: '鲤鱼', desc: '常见淡水鱼，全年可钓，价格120', url: 'guide/fishing.html', tags: ['鲤鱼', 'carp'] },
  { title: '金鱼', desc: '观赏鱼，春夏秋季，湖泊出没', url: 'guide/fishing.html', tags: ['金鱼', 'goldfish'] },
  { title: '鲶鱼', desc: '夜行性鱼类，河流底部，价格较高', url: 'guide/fishing.html', tags: ['鲶鱼', 'catfish'] },

  // 烹饪
  { title: '烹饪攻略', desc: '烹饪系统详解、食材获取、食谱大全', url: 'guide/cooking.html#section-0', tags: ['烹饪', 'cooking', '料理'] },
  { title: '食谱数据库', desc: '60+ 食谱：食材、效果、售价', url: 'guide/cooking.html#section-1', tags: ['食谱', '菜谱', '配方', 'recipe'] },

  // 赚钱
  { title: '赚钱攻略', desc: '高效赚钱方法排行、每日必做清单', url: 'guide/money.html', tags: ['赚钱', '金币', 'money', 'gold', '收入', '效率'] },
  { title: '每日必做清单', desc: '每天上线应该优先完成的事项', url: 'guide/money.html#section-1', tags: ['每日', '日常', '必做', 'daily'] },

  // 活动
  { title: '活动攻略', desc: '当前活动、历史活动、限时奖励一览', url: 'guide/events.html', tags: ['活动', 'event', '季节', '节日', '限定', '联动'] },
  { title: '彩虹小马联动', desc: '限定服饰、家具和任务', url: 'guide/events.html', tags: ['彩虹小马', '联动', 'My Little Pony'] },

  // 通用
  { title: '攻略站首页', desc: 'Heartopia 攻略站——快速找到你需要的游戏指南', url: 'guide/index.html', tags: ['首页', 'home', '攻略'] },
  { title: '游戏宣传站', desc: 'Heartopia 心托邦游戏官网介绍页', url: 'index.html', tags: ['宣传', '官网', '介绍', '下载'] },

  // 新增图鉴
  { title: '昆虫图鉴', desc: '23种昆虫的完整数据：蝴蝶、甲虫、蜻蜓等', url: 'guide/bugs.html', tags: ['昆虫', '捕虫', '蝴蝶', '甲虫', 'bug'] },
  { title: '独角仙', desc: '夏季夜晚森林中的大型甲虫，售价1500', url: 'guide/bugs.html', tags: ['独角仙', '甲虫'] },
  { title: '兰花螳螂', desc: '伪装成兰花的传说级昆虫，价值4000', url: 'guide/bugs.html', tags: ['兰花螳螂', '螳螂', '传说'] },
  { title: '观鸟图鉴', desc: '20种鸟类的栖息地、季节和观察技巧', url: 'guide/birds.html', tags: ['观鸟', '鸟类', 'bird', '望远镜'] },
  { title: '丹顶鹤', desc: '冬季限定传说级鸟类，观鸟家的终极目标', url: 'guide/birds.html', tags: ['丹顶鹤', '鹤', '珍稀'] },
  { title: '猫咪攻略', desc: '12种猫咪品种、性格、喜好食物和养护技巧', url: 'guide/cats.html', tags: ['猫咪', '猫', 'cat', '宠物', '领养'] },
  { title: '布偶猫', desc: '温柔粘人的仙女猫，抱起来就软掉', url: 'guide/cats.html', tags: ['布偶猫', 'ragdoll'] },
  { title: '园艺攻略', desc: '18种植物种植图鉴：花卉、蔬菜、水果', url: 'guide/gardening.html', tags: ['园艺', '种植', '花园', '植物', '花卉', '蔬菜'] },
  { title: '西瓜', desc: '夏季高收益作物，单个售价600金币', url: 'guide/gardening.html', tags: ['西瓜', '水果', '夏季'] },
  { title: '家具图鉴', desc: '20件精选家具的获取方式和材料配方', url: 'guide/furniture.html', tags: ['家具', '装修', '建造', '装饰', 'furniture'] },
  { title: '壁炉', desc: '冬季获得温暖增益的稀有家具', url: 'guide/furniture.html', tags: ['壁炉', '取暖', '冬季'] },
  { title: 'NPC攻略', desc: '10位小镇居民的喜好礼物和好感度速查', url: 'guide/npcs.html', tags: ['NPC', '角色', '送礼', '好感度', '人物'] },
  { title: '老渔夫', desc: '钓鱼导师，喜欢稀有鱼类', url: 'guide/npcs.html', tags: ['老渔夫', '渔夫', '导师'] },
];

/**
 * Initialize search functionality
 * @param {string} inputSelector - e.g. '#searchInput'
 * @param {string} resultsSelector - e.g. '#searchResults'
 * @param {string} [basePath] - prefix for relative URLs, e.g. '' or '../'
 */
function initSearch(inputSelector, resultsSelector, basePath) {
  const input = document.querySelector(inputSelector);
  const results = document.querySelector(resultsSelector);
  if (!input || !results) return;

  const bp = basePath || '';

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();

    if (q.length < 1) {
      results.classList.remove('show');
      results.innerHTML = '';
      return;
    }

    // Score and filter results
    const scored = SEARCH_INDEX.map(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const descLower = item.desc.toLowerCase();
      const tagStr = (item.tags || []).join(' ').toLowerCase();

      // Exact match in title = highest
      if (titleLower === q) score += 100;
      // Title starts with query
      if (titleLower.startsWith(q)) score += 50;
      // Title contains query
      if (titleLower.includes(q)) score += 30;
      // Desc contains
      if (descLower.includes(q)) score += 15;
      // Tags contain
      if (tagStr.includes(q)) score += 10;
      // Individual tag matches
      for (const tag of (item.tags || [])) {
        if (tag === q) score += 40;
        if (tag.startsWith(q)) score += 20;
      }

      return { ...item, score };
    });

    const matched = scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    if (matched.length === 0) {
      results.innerHTML = '<div class="no-results">🔍 未找到相关结果，试试其他关键词</div>';
    } else {
      results.innerHTML = matched.map(item => `
        <a href="${bp}${item.url}" class="result-item">
          <div class="result-title">${highlightMatch(item.title, q)}</div>
          <div class="result-desc">${item.desc}</div>
        </a>
      `).join('');
    }

    results.classList.add('show');
  });

  // Close results on click outside
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove('show');
    }
  });

  // Close on escape
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      results.classList.remove('show');
      input.blur();
    }
  });
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx < 0) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);
  return `${before}<mark style="background:#FFF3CD;padding:0 2px;border-radius:2px;">${match}</mark>${after}`;
}
