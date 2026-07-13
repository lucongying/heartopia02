/**
 * Heartopia 攻略站 — i18n 国际化引擎
 * 默认英文，支持切换到中文
 * Usage: 在 components.js 之前引入
 */
const I18N = {
  currentLang: 'en',

  dict: {
    en: {
      // ---- Nav ----
      'nav.home': 'Guide Hub',
      'nav.beginner': 'Beginner',
      'nav.fishing': 'Fish',
      'nav.bugs': 'Bugs',
      'nav.birds': 'Birds',
      'nav.cats': 'Cats',
      'nav.cooking': 'Recipes',
      'nav.gardening': 'Garden',
      'nav.furniture': 'Furniture',
      'nav.npcs': 'NPCs',
      'nav.money': 'Money',
      'nav.events': 'Events',
      'nav.tutorials': 'Tutorials',
      'nav.videos': 'Videos',
      'page.tutorials.title': 'Written Tutorials - Heartopia Guide',
      'page.tutorials.h1': '📝 Written Tutorials',
      'page.tutorials.subtitle': '12 detailed guides with images and step-by-step instructions',
      'page.tutorials.resultsCount': 'Showing {count} of {total} tutorials',
      'page.videos.title': 'Video Tutorials - Heartopia Guide',
      'page.videos.h1': '🎬 Video Tutorials',
      'page.videos.subtitle': '10 hand-picked video guides to help you master Heartopia',
      'page.videos.resultsCount': 'Showing {count} of {total} videos',
      'nav.section.guides': 'Guides',
      'nav.section.links': 'Quick Links',
      'nav.landing': 'Official Site',

      // ---- Footer ----
      'footer.brand': 'Heartopia Guide',
      'footer.desc': 'Player-built guide for the cozy life sim game',
      'footer.disclaimer': 'Fan-made guide · Data updated to 2026.05 (v0.5.1) · Not affiliated with XD Inc.',
      'footer.links': 'Quick Links',
      'footer.follow': 'Follow Us',
      'footer.discord': 'Discord 100K+ members',
      'footer.guideHome': 'Guide Hub',
      'footer.beginner': 'Beginner Guide',
      'footer.landingLink': 'Official Site',

      // ---- Breadcrumb ----
      'breadcrumb.home': 'Guide Hub',

      // ---- Search ----
      'search.placeholder': 'Search guides, fish, recipes...',
      'search.noResults': 'No results found. Try another keyword.',

      // ---- Database Common ----
      'db.found': 'Found',
      'db.results': 'results',
      'db.noResults': 'No matching results. Try adjusting filters.',
      'db.search': 'Search...',
      'db.sort.default': 'Default',
      'db.sort.name': 'Name A-Z',
      'db.sort.priceDesc': 'Price High→Low',
      'db.sort.priceAsc': 'Price Low→High',
      'db.sort.rarityDesc': 'Rarity High→Low',
      'db.sort.rarityAsc': 'Rarity Low→High',
      'db.sort.growth': 'Growth Short→Long',
      'db.toggleUncollected': 'Show uncollected only',
      'db.toggleUnlocked': 'Show locked only',
      'db.toggleUnplanted': 'Show unplanted only',
      'db.toggleUnowned': 'Show unowned only',
      'db.toggleUnobserved': 'Show unobserved only',
      'db.toggleUnadopted': 'Show unadopted only',

      // ---- Filter Labels ----
      'filter.season': 'Season',
      'filter.location': 'Location',
      'filter.habitat': 'Habitat',
      'filter.rarity': 'Rarity',
      'filter.time': 'Time',
      'filter.category': 'Category',
      'filter.difficulty': 'Difficulty',
      'filter.type': 'Type',

      // ---- Seasons ----
      'season.spring': '🌸 Spr',
      'season.summer': '☀️ Sum',
      'season.autumn': '🍂 Aut',
      'season.winter': '❄️ Win',

      // ---- Locations ----
      'loc.river': 'River',
      'loc.lake': 'Lake',
      'loc.ocean': 'Ocean',
      'loc.pond': 'Pond',
      'loc.garden': 'Garden',
      'loc.meadow': 'Meadow',
      'loc.forest': 'Forest',
      'loc.mountain': 'Mountain',
      'loc.town': 'Town',
      'loc.desert': 'Desert',

      // ---- Rarity ----
      'rarity.common': '⭐ Common',
      'rarity.uncommon': '⭐⭐ Uncommon',
      'rarity.rare': '⭐⭐⭐ Rare',
      'rarity.legendary': '👑 Legendary',

      // ---- Time ----
      'time.all': 'All Day',
      'time.morning': 'Morning',
      'time.afternoon': 'Afternoon',
      'time.evening': 'Evening',
      'time.night': 'Night',

      // ---- Difficulty ----
      'diff.easy': '⭐ Easy',
      'diff.medium': '⭐⭐ Medium',
      'diff.hard': '⭐⭐⭐ Hard',

      // ---- Categories ----
      'cat.fish': '🐟 Fish',
      'cat.meat': '🥩 Meat',
      'cat.dessert': '🍰 Dessert',
      'cat.veggie': '🥗 Veggie',
      'cat.staple': '🍚 Staple',
      'cat.drink': '🥤 Drink',
      'cat.special': '✨ Special',

      // ---- Types ----
      'type.flower': '💐 Flower',
      'type.crop': '🥬 Crop',
      'type.fruit': '🍓 Fruit',
      'type.herb': '🌿 Herb',
      'type.fungus': '🍄 Fungus',
      'type.tree': '🌳 Tree',

      // ---- Furniture Categories ----
      'furn.living': '🛋️ Living Room',
      'furn.bedroom': '🛏️ Bedroom',
      'furn.kitchen': '🍳 Kitchen',
      'furn.yard': '🌳 Yard',
      'furn.decor': '🖼️ Decor',

      // ---- Table Headers ----
      'th.icon': '',
      'th.name': 'Name',
      'th.rarity': 'Rarity',
      'th.season': 'Season',
      'th.location': 'Location',
      'th.time': 'Time',
      'th.price': 'Price',
      'th.collect': 'Got',
      'th.category': 'Category',
      'th.ingredients': 'Ingredients',
      'th.effect': 'Effect',
      'th.difficulty': 'Diff',
      'th.type': 'Type',
      'th.growth': 'Growth',
      'th.yield': 'Yield',
      'th.source': 'Source',
      'th.materials': 'Materials',
      'th.size': 'Size',

      // ---- Hub ----
      'hub.title': '📖 Heartopia Guide',
      'hub.subtitle': 'Player-built game guide for Heartopia / Xindong Xiaozhen',
      'hub.hot': '🔥 Popular Guides',
      'hub.news': '📰 Latest Updates',
      'hub.fish': 'Fish Guide',
      'hub.fish.desc': '27 species',
      'hub.bugs': 'Bug Guide',
      'hub.bugs.desc': '23 species',
      'hub.birds': 'Bird Guide',
      'hub.birds.desc': '20 species',
      'hub.cats': 'Cat Guide',
      'hub.cats.desc': '12 breeds',
      'hub.cooking': 'Recipes',
      'hub.cooking.desc': '27 recipes',
      'hub.gardening': 'Gardening',
      'hub.gardening.desc': '18 plants',
      'hub.furniture': 'Furniture',
      'hub.furniture.desc': '20 pieces',
      'hub.npcs': 'NPC Guide',
      'hub.npcs.desc': '10 residents',
      'hub.beginner': 'Beginner',
      'hub.beginner.desc': 'Start here',
      'hub.money': 'Money',
      'hub.money.desc': 'Best methods',
      'hub.events': 'Events',
      'hub.events.desc': '2 active',
      'hub.tutorials': 'Tutorials',
      'hub.tutorials.desc': '12 guides',
      'hub.videos': 'Videos',
      'hub.videos.desc': '10 videos',
      'hub.landing': 'Official Site',
      'hub.landing.desc': 'Back to promo',
      'hub.collected': 'collected',
      'hub.unlocked': 'unlocked',
      'hub.observed': 'observed',
      'hub.adopted': 'adopted',
      'hub.planted': 'planted',
      'hub.owned': 'owned',

      // ---- Hot cards ----
      'hot.fish': 'Complete Fish Encyclopedia',
      'hot.fish.desc': 'All 27 species with season, location & price data',
      'hot.money': 'Make Gold Fast',
      'hot.money.desc': 'Most efficient money-making methods & daily checklist',
      'hot.beginner': 'Day 1 Beginner Guide',
      'hot.beginner.desc': 'Start from scratch — everything you need to know',
      'hot.events': 'Summer Festival Coming',
      'hot.events.desc': 'Limited costumes, furniture & fireworks await',
      'hot.cooking': 'All Recipes',
      'hot.cooking.desc': '27 dishes with ingredients, effects & prices',

      // ---- News ----
      'news.active': 'Active',
      'news.upcoming': 'Upcoming',
      'news.past': 'Ended',
      'news.fishingDerby.title': 'Summer Fishing Derby (7/1–7/14)',
      'news.fishingDerby.desc': 'Limited rod skin + rare bait + gold reward',
      'news.summerFest.title': 'Summer Festival (7/15–8/15)',
      'news.summerFest.desc': 'Yukata set, sparklers, goldfish lantern & more',
      'news.version.title': 'v0.5.1 Update',
      'news.version.desc': 'New furniture series + summer events + bug fixes',

      // ---- Page Titles (SEO) ----
      'page.fishing.title': 'Fish Encyclopedia - Heartopia Fishing Guide | Season · Location · Price',
      'page.fishing.desc': 'Complete Heartopia fish encyclopedia: 27 species with season, location, time, rarity, price and fishing tips. Filter by season/location/rarity, mark fish as caught.',
      'page.fishing.h1': '🎣 Fishing Guide & Fish Encyclopedia',
      'page.fishing.subtitle': 'Master fishing skills and collect all 27 fish species',
      'page.fishing.guideTitle': '🎯 Fishing Basics',
      'page.fishing.guideP1': 'Fishing is one of the first hobbies unlocked in Heartopia and the <strong>most stable way to make money</strong>. You can fish in four types of waters: rivers, lakes, ponds, and oceans. Different waters yield different fish.',
      'page.fishing.tip1': '💡 <strong>Beginner Tip:</strong> You start with <strong>Universal Bait x20</strong>. Try fishing for carp in the river first to master casting and reeling before challenging rare fish.',
      'page.fishing.howto': 'How to Fish',
      'page.fishing.step1': 'Walk to the edge of any water body (river/lake/pond/ocean)',
      'page.fishing.step2': 'Open backpack, equip fishing rod and bait',
      'page.fishing.step3': 'Hold the cast button, wait for the bobber to land',
      'page.fishing.step4': 'Tap to reel in quickly when the bobber sinks!',
      'page.fishing.step5': 'Enter the fight phase: pull in the opposite direction of the fish',
      'page.fishing.baitTitle': '🪱 Bait Types',
      'page.fishing.spotTitle': '📍 Best Fishing Spots',
      'page.fishing.spotTip1': '🏆 <strong>Highest Profit:</strong> Autumn ocean salmon (420💰) + Summer night river catfish (350💰). Alternate fishing for 5000+ gold daily.',
      'page.fishing.spotTip2': '⚠️ <strong>Note:</strong> Rare fish (Arowana, Sunfish, etc.) have extremely low spawn rates. Use premium bait in the right season and allow plenty of time.',
      'page.fishing.encyclopedia': '📊 Fish Encyclopedia',
      'page.fishing.encyDesc': 'Complete fish data below. Use filters to find your target, click ⬜ to mark as caught.',

      // Fish bait table
      'bait.universal': 'Universal Bait',
      'bait.universal.target': 'Common fish',
      'bait.universal.source': 'Shop / Starter gift',
      'bait.universal.scene': 'Daily fishing, beginner practice',
      'bait.worm': 'Worm Bait',
      'bait.worm.target': 'Small-medium freshwater fish',
      'bait.worm.source': 'Bug catching / Shop',
      'bait.worm.scene': 'Bass, trout, frog',
      'bait.stinky': 'Stinky Bait',
      'bait.stinky.target': 'Large predatory fish',
      'bait.stinky.source': 'Cooking / Shop',
      'bait.stinky.scene': 'Catfish, tuna, shark',
      'bait.premium': 'Premium Bait',
      'bait.premium.target': 'Rare/legendary fish',
      'bait.premium.source': 'Event rewards / Premium shop',
      'bait.premium.scene': 'Arowana, sunfish etc.',
      'bait.legendary': 'Legendary Bait',
      'bait.legendary.target': 'Legendary fish',
      'bait.legendary.source': 'Derby rewards / Extremely rare drop',
      'bait.legendary.scene': 'Dragon King Koi and other ultimate targets',

      // ---- Bugs Page ----
      'page.bugs.title': 'Bug Encyclopedia - Heartopia Bug Catching Guide | Season · Location · Rarity',
      'page.bugs.desc': 'Complete Heartopia bug encyclopedia: 23 insect species with season, habitat, time, rarity and price. Butterflies, beetles, dragonflies and more.',
      'page.bugs.h1': '🪲 Bug Catching & Insect Encyclopedia',
      'page.bugs.subtitle': 'Master bug catching and collect all 23 insect species',
      'page.bugs.basics': '🎯 Bug Catching Basics',
      'page.bugs.basicsP1': 'Bug catching is one of the <strong>most challenging</strong> hobbies in Heartopia. Unlike fishing, you need to hold your net, sneak up on targets, and swing at the right moment. Each insect has different alertness and flight patterns.',
      'page.bugs.tip1': '💡 <strong>Beginner Tip:</strong> Start with the Cabbage White — slow flight, wide distribution, low price but won\'t flee too fast. Master the "sneak key" (gentle joystick push) before challenging rare insects.',
      'page.bugs.steps': 'Bug Catching Steps',
      'page.bugs.step1': 'Equip bug net (Backpack → Tools → Bug Net)',
      'page.bugs.step2': 'Find target insect (different species in different habitats)',
      'page.bugs.step3': 'Hold sneak key and approach slowly (don\'t run!)',
      'page.bugs.step4': 'Release to swing when in net range!',
      'page.bugs.step5': 'Insect is automatically added to your backpack on hit',
      'page.bugs.types': '🦋 Insect Categories',
      'page.bugs.warn': '⚠️ <strong>Warning:</strong> Scorpions and Tarantulas are aggressive! If spotted and you get too close, they will attack and stun you. Correct approach: Hold net, approach extremely slowly, STOP when it raises claws/legs, continue when it lowers them.',
      'page.bugs.best': '🏆 <strong>Most Valuable:</strong> Orchid Mantis (4000💰), Blue Morpho (3000💰), Tarantula (2500💰). Never miss these!',
      'page.bugs.encyclopedia': '📊 Insect Encyclopedia',
      'page.bugs.encyDesc': 'All known insect data below. Use filters and mark collected species.',
      'table.bugs.category': 'Category',
      'table.bugs.representative': 'Representative',
      'table.bugs.bestTime': 'Best Time',
      'table.bugs.tip': 'Tip',
      'cat.butterfly': '🦋 Butterflies',
      'cat.butterfly.rep': 'Cabbage White, Swallowtail, Morpho',
      'cat.butterfly.time': 'Daytime sunny',
      'cat.butterfly.tip': 'Erratic flight path, predict landing spot',
      'cat.beetle': '🪲 Beetles',
      'cat.beetle.rep': 'Rhino Beetle, Stag Beetle',
      'cat.beetle.time': 'Summer night, on trees',
      'cat.beetle.tip': 'Best caught when stationary',
      'cat.cicada': '🦗 Cicadas/Grasshoppers',
      'cat.cicada.rep': 'Cicada, Grasshopper',
      'cat.cicada.time': 'Summer all day',
      'cat.cicada.tip': 'Follow the sound, will jump if approached',
      'cat.dangerous': '🕷️ Dangerous',
      'cat.dangerous.rep': 'Scorpion, Tarantula',
      'cat.dangerous.time': 'Nighttime',
      'cat.dangerous.tip': 'Approach with net raised, it will attack!',

      // ---- Birds Page ----
      'page.birds.title': 'Birdwatching Guide - Heartopia Bird Encyclopedia | Habitat · Season · Rarity',
      'page.birds.desc': 'Complete Heartopia birdwatching guide: 20 bird species with habitat, season, time and rarity. Songbirds, waterfowl, raptors and rare birds.',
      'page.birds.h1': '🐦 Birdwatching & Bird Encyclopedia',
      'page.birds.subtitle': 'Grab your binoculars and discover 20 beautiful bird species across town',
      'page.birds.basics': '🔭 Birdwatching Basics',
      'page.birds.basicsP1': 'Birdwatching is the most <strong>relaxing and healing</strong> hobby in Heartopia. No quick reactions needed — just patience and observation. Point your binoculars at birds and wait for the ID bar to fill.',
      'page.birds.tip1': '💡 <strong>Beginner Tip:</strong> You start with <strong>Basic Binoculars</strong> (2x zoom). Begin with pigeons at the town square — they barely fly away. Higher birdwatching levels unlock better binoculars for distant rare birds.',
      'page.birds.steps': 'How to Birdwatch',
      'page.birds.step1': 'Equip binoculars (Backpack → Tools → Binoculars)',
      'page.birds.step2': 'Spot target bird (see bird shadow or hear bird call)',
      'page.birds.step3': 'Raise binoculars and aim at the bird',
      'page.birds.step4': 'Hold steady until the ID bar fills',
      'page.birds.step5': 'Success! Bird record added to your encyclopedia',
      'page.birds.types': '🦅 Bird Categories',
      'page.birds.best': '🏆 <strong>Rarest:</strong> Red-crowned Crane (5000💰 winter only) + Flamingo (3500💰 summer evening). The ultimate glory for bird collectors!',
      'page.birds.encyclopedia': '📊 Bird Encyclopedia',
      'page.birds.encyDesc': 'All known bird species below.',
      'table.birds.category': 'Category',
      'table.birds.rep': 'Representative',
      'table.birds.time': 'Best Time',
      'table.birds.trait': 'Traits',
      'bird.songbird': '🐦 Songbirds',
      'bird.songbird.rep': 'Sparrow, Robin, Blue Tit',
      'bird.songbird.time': 'Early morning',
      'bird.songbird.trait': 'Widely distributed, easy to spot',
      'bird.waterfowl': '🦆 Waterfowl',
      'bird.waterfowl.rep': 'Mallard, Heron, Swan',
      'bird.waterfowl.time': 'Morning/evening',
      'bird.waterfowl.trait': 'Near lakes and rivers',
      'bird.raptor': '🦅 Raptors',
      'bird.raptor.rep': 'Eagle, Owl, Falcon',
      'bird.raptor.time': 'Afternoon/night',
      'bird.raptor.trait': 'Need high-power binoculars',
      'bird.rare': '👑 Rare Birds',
      'bird.rare.rep': 'Crane, Flamingo, Peacock',
      'bird.rare.time': 'Specific seasons',
      'bird.rare.trait': 'Extremely rare, collector\'s dream',

      // ---- Cats Page ----
      'page.cats.title': 'Cat Guide - Heartopia Cat Breeds & Care Tips',
      'page.cats.desc': 'Heartopia complete cat guide: 12 cat breeds with personality, favorite foods, and care tips. Orange Tabby, Siamese, Ragdoll, Bengal and more.',
      'page.cats.h1': '🐱 Cat Guide & Breed Encyclopedia',
      'page.cats.subtitle': 'Complete guide to 12 cat breeds: personality, preferences & care tips',
      'page.cats.basics': '🐾 Getting Started with Cats',
      'page.cats.basicsP1': 'In Heartopia, having a cat is the <strong>warmest and most healing</strong> hobby. You can meet stray cats around town, build trust through feeding and interaction, then adopt them. Each cat has unique <strong>personality, food preferences, and behavior patterns</strong>.',
      'page.cats.tip1': '💡 <strong>How to get your first cat:</strong> After completing the tutorial, you\'ll meet a <strong>little white cat</strong> at the Town Square. Feed it fish for 3 consecutive days to take it home! This is the only cat obtained through the main quest.',
      'page.cats.flow': 'Adoption Process',
      'page.cats.flow1': 'Explore town and spot stray cats (different breeds in different locations)',
      'page.cats.flow2': 'Feed its favorite food daily to increase affection',
      'page.cats.flow3': 'When affection is maxed, the "Adopt" option appears',
      'page.cats.flow4': 'Place a cat tree and cat bed at your home',
      'page.cats.flow5': 'Happily take them home!',
      'page.cats.warn': '⚠️ <strong>Note:</strong> Each cat can only be fed once per day. Feeding disliked food won\'t increase affection; feeding hated food may even decrease it!',
      'page.cats.encyclopedia': '📊 Cat Breed Encyclopedia',
      'page.cats.encyDesc': 'All 12 cat breeds with complete data.',
      'th.personality': 'Personality',
      'th.favoriteFood': 'Favorite Food',
      'th.traits': 'Traits',

      // ---- Cooking Page ----
      'page.cooking.title': 'Recipe Database - Heartopia Cooking Guide | Ingredients · Effects · Recipes',
      'page.cooking.desc': 'Complete Heartopia recipe database: 27 dishes with ingredients, stamina effects, and sell prices. Fish dishes, desserts, staples and drinks covered.',
      'page.cooking.h1': '🍳 Cooking Guide & Recipe Database',
      'page.cooking.subtitle': 'Complete recipes for 27 dishes: ingredients, effects, prices & unlock conditions',
      'page.cooking.basics': '🥘 Cooking System Basics',
      'page.cooking.basicsP1': 'Cooking is a core hobby in Heartopia that not only <strong>restores stamina</strong> but also provides <strong>temporary buffs</strong> (speed boost, warmth, social affinity).',
      'page.cooking.tip1': '🔓 <strong>Unlock:</strong> After completing the tutorial, place a <strong>Kitchen Counter</strong> in your home to unlock the cooking system. Start with 5 basic recipes.',
      'page.cooking.steps': 'Cooking Steps',
      'page.cooking.step1': 'Approach kitchen counter and press "Cook"',
      'page.cooking.step2': 'Select a recipe to make',
      'page.cooking.step3': 'Confirm you have all ingredients (missing items are highlighted)',
      'page.cooking.step4': 'Press "Start Cooking" and wait for completion',
      'page.cooking.step5': 'The dish is automatically stored in your backpack. Eat, sell, or gift it!',
      'page.cooking.ingredientTitle': '🥬 Ingredient Sourcing Guide',
      'page.cooking.table.ingredientType': 'Type',
      'page.cooking.table.source': 'Source',
      'page.cooking.table.examples': 'Examples',
      'page.cooking.ing.fish': '🐟 Fish',
      'page.cooking.ing.fishSrc': 'Fishing',
      'page.cooking.ing.fishEx': 'Carp, Salmon, Tuna, Squid',
      'page.cooking.ing.veggie': '🥬 Vegetables',
      'page.cooking.ing.veggieSrc': 'Gardening',
      'page.cooking.ing.veggieEx': 'Lettuce, Tomato, Cucumber, Potato',
      'page.cooking.ing.fruit': '🍎 Fruit',
      'page.cooking.ing.fruitSrc': 'Tree harvest / Gardening',
      'page.cooking.ing.fruitEx': 'Apple, Cherry, Blueberry, Strawberry',
      'page.cooking.ing.meat': '🥩 Meat',
      'page.cooking.ing.meatSrc': 'Shop / Quest rewards',
      'page.cooking.ing.meatEx': 'Beef, Chicken, Pork',
      'page.cooking.ing.dairy': '🥛 Dairy',
      'page.cooking.ing.dairySrc': 'Shop',
      'page.cooking.ing.dairyEx': 'Milk, Cream, Butter, Cheese',
      'page.cooking.ing.seasoning': '🌿 Seasoning',
      'page.cooking.ing.seasoningSrc': 'Foraging / Shop',
      'page.cooking.ing.seasoningEx': 'Herbs, Soy Sauce, Wine, Chocolate',
      'page.cooking.storageWarn': '⚠️ <strong>Storage Tip:</strong> Fridge (storage) capacity is limited. Keep 3-5 of each ingredient; sell or cook the excess (cooked dishes stack).',
      'page.cooking.levelTitle': '💡 Cooking Leveling Strategy',
      'page.cooking.level1': '<strong>Level 1-2:</strong> Repeatedly make "Grilled Fish" and "Garden Salad" — ingredients are easy to get, low cost',
      'page.cooking.level2': '<strong>Level 3-5:</strong> Make "Fish Soup" and "Fried Rice" — good value, decent XP',
      'page.cooking.level3': '<strong>Level 6-8:</strong> Make "Sashimi Platter" and "Ramen" — generous XP',
      'page.cooking.level4': '<strong>Level 9-10:</strong> Challenge the "Golden Feast" — ultimate dish worth showing off',
      'page.cooking.encyclopedia': '📊 Recipe Database',
      'page.cooking.encyDesc': 'All 27 recipes with full details.',

      // ---- Gardening Page ----
      'page.gardening.title': 'Gardening Guide - Heartopia Planting Encyclopedia | Flowers · Crops · Trees',
      'page.gardening.desc': 'Heartopia gardening guide: 18 plants including flowers, vegetables, fruits and herbs. Growth cycles, watering frequency, harvest yield and sell prices.',
      'page.gardening.h1': '🌷 Gardening & Planting Encyclopedia',
      'page.gardening.subtitle': '18 plants: flowers, vegetables, fruits & herbs — growing tips & profit analysis',
      'page.gardening.basics': '🌱 Gardening Basics',
      'page.gardening.basicsP1': 'Gardening is the most <strong>stable passive income source</strong> in Heartopia. Plant crops in your garden, water regularly, and wait for harvest. Different crops have different growth cycles, watering needs, and seasonal preferences.',
      'page.gardening.tip1': '💡 <strong>Beginner Recommendation:</strong> You start with <strong>Basic Seeds x10</strong>. Plant lettuce (2-day growth) and tomatoes (3-day growth) first — fast growth with low failure cost.',
      'page.gardening.steps': 'Gardening Steps',
      'page.gardening.step1': 'Use hoe to till soil in your garden (creates planting plots)',
      'page.gardening.step2': 'Select and sow seeds',
      'page.gardening.step3': 'Water with watering can (some crops need multiple waterings)',
      'page.gardening.step4': 'Wait for growth (check the progress bar)',
      'page.gardening.step5': 'Harvest when ripe! Some crops can be harvested multiple times',
      'page.gardening.tipsTitle': '💡 Gardening Tips',
      'page.gardening.tip2': '<strong>Season Match:</strong> In-season crops grow 20% faster. Off-season planting extends growth time.',
      'page.gardening.tip3': '<strong>Repeat Harvest:</strong> Tomatoes, blueberries and similar crops can fruit again without replanting (up to 3 times).',
      'page.gardening.tip4': '<strong>Watering Trick:</strong> Rain automatically waters crops — no manual watering needed. Check weather forecasts!',
      'page.gardening.tip5': '<strong>Fertilizer:</strong> Fertilizer reduces growth time by 20%. Highly recommended for high-value crops (watermelon, pumpkin).',
      'page.gardening.tip6': '<strong>Garden Layout:</strong> Same-type plants adjacent trigger the "Companion" effect, increasing yield by 10%.',
      'page.gardening.best': '🏆 <strong>Highest Profit:</strong> Watermelon (600💰/each) + Pumpkin (300💰/each). Long growth cycle but best daily profit per plot.',
      'page.gardening.encyclopedia': '📊 Planting Encyclopedia',
      'page.gardening.encyDesc': 'All 18 plants with complete data.',
      'th.water': 'Water/Day',
      'th.yieldData': 'Yield',

      // ---- Furniture Page ----
      'page.furniture.title': 'Furniture Catalog - Heartopia Building Guide | All Furniture Sources',
      'page.furniture.desc': 'Heartopia furniture catalog: living room, bedroom, kitchen, yard and decor items. Sources, material recipes, themes and rarity.',
      'page.furniture.h1': '🏠 Furniture Catalog & Building Guide',
      'page.furniture.subtitle': '20 selected furniture pieces: sources, material recipes & style categories',
      'page.furniture.basics': '🔨 Building System Basics',
      'page.furniture.basicsP1': 'Building and decorating is the most creative system in Heartopia. Freely place furniture, change wall colors, arrange garden decor — create your <strong>one-of-a-kind dream home</strong>. Furniture comes from shops, carpentry, event rewards and rare drops.',
      'page.furniture.tip1': '💡 <strong>Beginner Tip:</strong> Your starter home includes basic furniture (single bed, kitchen counter, basic table and chairs). Prioritize buying a <strong>Wardrobe</strong> and <strong>Bookshelf</strong> — increasing your home score unlocks more furniture slots.',
      'page.furniture.sources': 'Furniture Sources',
      'page.furniture.src1': '<strong>Shop Purchase:</strong> Most direct way. Shop inventory refreshes daily — buy what you like quickly!',
      'page.furniture.src2': '<strong>Carpentry Crafting:</strong> Collect wood/stone/metal and craft at the workshop',
      'page.furniture.src3': '<strong>Event Exclusive:</strong> Seasonal and collab event furniture — gone when the event ends',
      'page.furniture.src4': '<strong>Rare Drops:</strong> Extremely low chance to get special decor while fishing/catching bugs/birdwatching',
      'page.furniture.warn': '⚠️ <strong>Warning:</strong> Event-exclusive furniture (MLP Rainbow Sofa, Sakura Tree Lamp) cannot be traded. Miss the event = wait for a rerun!',
      'page.furniture.encyclopedia': '📊 Furniture Catalog',
      'page.furniture.encyDesc': '20 selected furniture pieces with full data.',
      'th.theme': 'Theme',
      'th.source': 'Source',

      // ---- NPCs Page ----
      'page.npcs.title': 'NPC Guide - Heartopia Character Gift & Relationship Guide',
      'page.npcs.desc': 'Heartopia NPC guide: 10 town residents with gift preferences, hated gifts, and schedules. Quick friendship reference chart.',
      'page.npcs.h1': '👥 NPC Guide & Gift Reference',
      'page.npcs.subtitle': '10 town residents: gift preferences, schedules & friendship quick reference',
      'page.npcs.basics': '💝 Friendship System',
      'page.npcs.basicsP1': 'Building relationships with NPCs is the core of Heartopia\'s social system. Increase friendship through <strong>gifting, chatting, and completing quests</strong> to unlock exclusive recipes, discounts, storylines and hidden features.',
      'page.npcs.tip1': '💡 <strong>Gifting Rules:</strong> Each NPC accepts one gift per day. ❤️ Loved = +3 FP, 👍 Liked = +1, 👎 Hated = -2. Gifting on their birthday doubles the effect!',
      'page.npcs.levels': 'Friendship Levels',
      'page.npcs.thLevel': 'Level',
      'page.npcs.thPoints': 'FP Needed',
      'page.npcs.thUnlock': 'Unlocks',
      'page.npcs.lv1': 'Lv.1 Stranger',
      'page.npcs.lv1u': 'Basic dialogue',
      'page.npcs.lv2': 'Lv.2 Acquaintance',
      'page.npcs.lv2u': 'Daily commission quests',
      'page.npcs.lv3': 'Lv.3 Friend',
      'page.npcs.lv3u': 'Exclusive recipes/skills',
      'page.npcs.lv4': 'Lv.4 Good Friend',
      'page.npcs.lv4u': 'Shop discount + special story',
      'page.npcs.lv5': 'Lv.5 Best Friend',
      'page.npcs.lv5u': 'Limited gift + special ability',
      'page.npcs.loved': '❤️ Loves',
      'page.npcs.liked': '👍 Likes',
      'page.npcs.hated': '👎 Hates',
      'page.npcs.encyclopedia': '📊 NPC Character Guide',
      'page.npcs.encyDesc': 'All 10 residents with complete gift data.',

      // ---- Beginner Page ----
      'page.beginner.title': 'Beginner Guide - Heartopia New Player Walkthrough',
      'page.beginner.desc': 'Heartopia beginner guide: Day 1 checklist, UI overview, common mistakes to avoid, and recommended 3-day starter route. Start your journey right.',
      'page.beginner.h1': '🎓 Beginner\'s Guide',
      'page.beginner.subtitle': 'Just arrived in Heartopia? This guide will help you get started quickly',
      'page.beginner.day1': '📋 Day 1 Must-Do Checklist',
      'page.beginner.day1desc': 'Here\'s what you should <strong>prioritize</strong> on your first day:',
      'page.beginner.chk1': '<strong>Create Character</strong> — Customize face, hair, outfit. Don\'t worry about mistakes; you can change later for free',
      'page.beginner.chk2': '<strong>Complete Tutorial</strong> — Follow prompts to learn basic controls (movement, interaction, backpack)',
      'page.beginner.chk3': '<strong>Claim Starter Items</strong> — Receive fishing rod, Universal Bait x20, Basic Seeds x10',
      'page.beginner.chk4': '<strong>Catch Your First Fish</strong> — Go to the nearest river with Universal Bait to practice casting and reeling',
      'page.beginner.chk5': '<strong>Plant First Crops</strong> — Sow seeds in your garden, water them, and wait for growth',
      'page.beginner.chk6': '<strong>Meet Your First Neighbor</strong> — Randomly encounter other players at Town Square; greet them to unlock social features',
      'page.beginner.chk7': '<strong>Sell First Harvest</strong> — Sell fish/crops to the shop to earn your first gold',
      'page.beginner.chk8': '<strong>Upgrade Your Home</strong> — Use your first gold to buy a furniture or decoration piece',
      'page.beginner.ui': '🖥️ UI Overview',
      'page.beginner.uiDesc': '💡 <strong>Quick Overview:</strong> Top bar (gold/stamina/backpack), left joystick (movement), right buttons (interact/fishing/building), bottom hotbar (tool switching).',
      'page.beginner.uiTitle': 'Interface Areas',
      'page.beginner.ui1': '<strong>Top Status Bar:</strong> Shows gold, stamina, backpack capacity. Stamina recovers by eating or sleeping',
      'page.beginner.ui2': '<strong>Bottom-Left Joystick:</strong> Controls character movement with 360° freedom',
      'page.beginner.ui3': '<strong>Bottom-Right Buttons:</strong> Interact key (interact with NPCs/items), Tool key (use equipped tool)',
      'page.beginner.ui4': '<strong>Bottom Hotbar:</strong> Quick-switch between rod/net/watering can/camera, up to 4 slots',
      'page.beginner.ui5': '<strong>Top-Right Menu:</strong> Open backpack, map, friends list, settings, encyclopedia',
      'page.beginner.mistakes': '⚠️ Common Beginner Mistakes',
      'page.beginner.err1': '❌ <strong>Mistake 1: Fishing nonstop ignoring stamina.</strong> When stamina depletes, you can\'t use tools. Eat food every ~10 catches, or sleep at home to recover.',
      'page.beginner.err2': '❌ <strong>Mistake 2: Selling all materials.</strong> Some "worthless" materials (herbs, mushrooms) are key cooking ingredients. Keep at least 5 of each in storage.',
      'page.beginner.err3': '❌ <strong>Mistake 3: Ignoring social features.</strong> Social interaction is Heartopia\'s core charm. Visit neighbors\' homes for inspiration; gifting accelerates friendship.',
      'page.beginner.err4': '❌ <strong>Mistake 4: Focusing on only one hobby.</strong> The six hobbies (fishing/cooking/cats/bugs/birds/gardening) complement each other. Fish for cooking, cook for gifting, etc.',
      'page.beginner.err5': '❌ <strong>Mistake 5: Not checking daily shop refresh.</strong> The town shop refreshes random items daily — limited furniture and rare seeds appear. Miss it = wait for next random appearance.',
      'page.beginner.route': '🗺️ Recommended 3-Day Starter Route',
      'page.beginner.thDay': 'Day',
      'page.beginner.thPriority': 'Priority',
      'page.beginner.thGoal': 'Goal',
      'page.beginner.d1p': 'Tutorial → Fishing intro → Plant crops → Sell fish for gold',
      'page.beginner.d1g': 'Accumulate 2000+ gold, unlock cooking',
      'page.beginner.d2p': 'Unlock cooking → NPC quests → Explore new lake/ocean fishing spots',
      'page.beginner.d2g': 'Cooking Lv.2, unlock 3 recipes',
      'page.beginner.d3p': 'Visit neighbors → Join events → Challenge rare fish → Decorate home',
      'page.beginner.d3g': 'Social Lv.3, own 5+ furniture pieces',
      'page.beginner.tips': '💎 Advanced Tips',
      'page.beginner.tip1': '<strong>Stamina Management:</strong> Sleeping at home recovers all stamina for free. Cooked food not only restores stamina but also provides bonus buffs.',
      'page.beginner.tip2': '<strong>Rain Strategy:</strong> Rain is prime fishing time (rare fish rate up). Also spawns special creatures like snails and frogs.',
      'page.beginner.tip3': '<strong>Season Awareness:</strong> Each season has unique fish and insects. Miss them = wait a year (or visit another player\'s world).',
      'page.beginner.tip4': '<strong>Backpack Expansion:</strong> Prioritize upgrading backpack with gold. Material collection is core to this game\'s fun.',
      'page.beginner.tip5': '<strong>Daily Login:</strong> Log in 7 consecutive days for rare items and gold rewards.',

      // ---- Money Page ----
      'page.money.title': 'Money Guide - Heartopia Best Gold Farming Methods',
      'page.money.desc': 'Heartopia money-making guide: 6 best gold farming methods ranked, daily checklist, and seasonal optimal money route.',
      'page.money.h1': '💰 Money-Making Guide',
      'page.money.subtitle': 'Highest efficiency money methods ranked — from hundreds to tens of thousands daily',
      'page.money.ranking': '📊 Money Method Rankings',
      'page.money.rankingDesc': 'Methods ranked by <strong>long-term stable profit efficiency</strong> (gold/hour), considering accessibility, stability and scalability:',
      'page.money.m1t': '🏆 Seasonal Rare Fish Farming',
      'page.money.m1d': 'Target current-season high-value rare fish. E.g., autumn salmon (420💰) + summer night catfish (350💰), rotating fishing spots.',
      'page.money.m2t': '🍳 Premium Dish Crafting & Selling',
      'page.money.m2d': 'Cook premium recipes (Sashimi Platter 1800💰, Lover\'s Soup 2000💰) for sale. Requires ingredient stockpiling but profits are enormous.',
      'page.money.m3t': '🌷 High-Value Crop Farming',
      'page.money.m3d': 'Plant short-growth, high-price crops (strawberries, blueberries). Harvest in bulk and sell directly or process into juice/jam for added value.',
      'page.money.m4t': '🎣 Daily Bulk Fishing',
      'page.money.m4d': 'Year-round carp (120💰) and crucian carp (100💰) in rivers — quantity over quality. Perfect for beginners and casual players.',
      'page.money.m5t': '📦 Complete NPC Daily Commissions',
      'page.money.m5d': 'NPCs refresh 3-5 commission quests daily. Gold + friendship rewards. Simple tasks (deliver fish/crops/talk), extremely high value-to-effort ratio.',
      'page.money.m6t': '🎉 Limited-Time Event Rewards',
      'page.money.m6d': 'Participate in events and fishing derbies. Complete tasks for gold, rare items, and exclusive event collectibles (non-purchasable).',
      'page.money.efficiency': '~{val}/hour',
      'page.money.efficiencyDay': '~{val}/day (timed harvest)',
      'page.money.efficiencyVar': 'Varies',
      'page.money.diffLow': 'Easy',
      'page.money.diffMed': 'Medium',
      'page.money.diffHigh': 'Hard',
      'page.money.diffVeryLow': 'Very Easy',
      'page.money.seasonal': 'Season-dependent',
      'page.money.needsCookingLevel': 'Needs cooking level',
      'page.money.passiveIncome': 'Stable passive income',
      'page.money.daily': '✅ Daily Must-Do Checklist',
      'page.money.dailyDesc': 'Complete these every day for maximum daily rewards:',
      'page.money.dl1': '<strong>Daily Login Reward</strong> — 7-day streak has bonus rewards',
      'page.money.dl2': '<strong>Harvest Ripe Crops</strong> — Sell or store, then replant',
      'page.money.dl3': '<strong>Complete All NPC Commissions</strong> — 3-5 quests, ~1500💰',
      'page.money.dl4': '<strong>Check Shop Refresh</strong> — Snag limited seeds/rare bait',
      'page.money.dl5': '<strong>Catch 10-20 Fish</strong> — At least cover high-value target species',
      'page.money.dl6': '<strong>Visit 3 Neighbors</strong> — Social interaction + get inspiration',
      'page.money.dl7': '<strong>Cook & Eat Dishes</strong> — Maintain stamina + accumulate cooking XP',
      'page.money.dl8': '<strong>Check Event Progress</strong> — Don\'t miss limited-time tasks',
      'page.money.season': '📅 Current Season Optimal Route',
      'page.money.invest': '📈 Gold Spending Priority',
      'page.money.inv1': '<strong>1st Priority:</strong> Upgrade backpack capacity → More materials = more income',
      'page.money.inv2': '<strong>2nd Priority:</strong> Unlock premium bait recipes → Higher rare fish spawn rate',
      'page.money.inv3': '<strong>3rd Priority:</strong> Raise cooking level → Premium dishes sell for 2x',
      'page.money.inv4': '<strong>4th Priority:</strong> Expand home → More garden space = more crops',

      // ---- Events Page ----
      'page.events.title': 'Event Guide - Heartopia Limited Events & Rewards',
      'page.events.desc': 'Heartopia event guide: Summer Festival, Fishing Derby, MLP collab and all seasonal events. Tasks, limited rewards and schedules.',
      'page.events.h1': '🎉 Event Guide',
      'page.events.subtitle': 'Track all limited-time events, collabs & seasonal celebrations. Never miss exclusive rewards!',
      'page.events.tab.all': '📋 All Events',
      'page.events.tab.active': '🟢 Active',
      'page.events.tab.upcoming': '🟡 Upcoming',
      'page.events.tab.past': '⚪ Past',
      'page.events.statusActive': '🟢 Active',
      'page.events.statusUpcoming': '🟡 Upcoming',
      'page.events.statusPast': '⚪ Ended',
      'page.events.typeSeasonal': 'Seasonal',
      'page.events.typeCollab': 'Collab',
      'page.events.typeLimited': 'Limited',
      'page.events.rewards': '🎁 Limited Rewards',
      'page.events.tasks': '📋 Event Tasks',
      'page.events.noEvents': 'No events in this category',
      'page.events.dateRange': '{start} ~ {end}',

      // ---- Guide Hub featured ----
      'hot.bugs': 'Bug Encyclopedia',
      'hot.bugs.desc': '23 insect species: butterflies, beetles & more',
      'hot.birds': 'Birdwatching Guide',
      'hot.birds.desc': '20 bird species with habitat & season data',
      'hot.cats': 'Cat Breed Guide',
      'hot.cats.desc': '12 cat breeds: personality, food & care tips',
      'hot.garden': 'Plant Encyclopedia',
      'hot.garden.desc': '18 plants with growth cycles & profit analysis',

      // ---- Landing page integration ----
      'landing.guideLink': '📖 Guide',
      'landing.guideBtn': '📖 View Guide',

      // ---- Back to top / Misc ----
      'backTop': '⬆',
      'toc.title': '📑 Contents',
      'toc.mobile': '📑 Navigate...',
      'lang.switch': '中文',
      'lang.label': '🌐 Language',
      'back.tutorials': '← Back to Tutorials',
      'back.videos': '← Back to Videos',

      // ---- Tutorials ----
      'filter.all': 'All',
      'filter.cat.beginner': 'Beginner',
      'filter.cat.gameplay': 'Gameplay',
      'filter.cat.events': 'Events',
      'filter.cat.build': 'Build',
      'filter.cat.news': 'News',
      'tutorial.notFound': '📝 Tutorial not found.',
      'tutorial.notFoundLink': 'Browse all tutorials',
      'tutorial.noResults': 'No tutorials found. Try a different search or filter.',
      'tutorial.showing': 'Showing {count} of {total} tutorials',
    },

    // ===== 中文翻译 =====
    zh: {
      'nav.home': '攻略首页',
      'nav.beginner': '新手入门',
      'nav.fishing': '钓鱼',
      'nav.bugs': '昆虫',
      'nav.birds': '观鸟',
      'nav.cats': '猫咪',
      'nav.cooking': '食谱',
      'nav.gardening': '园艺',
      'nav.furniture': '家具',
      'nav.npcs': 'NPC',
      'nav.money': '赚钱',
      'nav.events': '活动',
      'nav.tutorials': '图文教程',
      'nav.videos': '视频教程',
      'page.tutorials.title': '图文教程 - Heartopia 攻略站',
      'page.tutorials.h1': '📝 图文教程',
      'page.tutorials.subtitle': '12篇图文并茂的详细攻略指南',
      'page.tutorials.resultsCount': '共 {count} 篇（共 {total} 篇）',
      'page.videos.title': '视频教程 - Heartopia 攻略站',
      'page.videos.h1': '🎬 视频教程',
      'page.videos.subtitle': '10个精选视频教程，助你精通心托邦',
      'page.videos.resultsCount': '共 {count} 个（共 {total} 个）',
      'nav.section.guides': '攻略导航',
      'nav.section.links': '快捷入口',
      'nav.landing': '游戏宣传站',

      'footer.brand': 'Heartopia 攻略站',
      'footer.desc': '玩家共建的治愈系生活模拟游戏指南',
      'footer.disclaimer': '本攻略站为粉丝制作 · 数据更新至 2026.05 (v0.5.1) · 与 XD Inc. 无关联',
      'footer.links': '快速链接',
      'footer.follow': '关注我们',
      'footer.discord': 'Discord 社区已突破 10 万人',
      'footer.guideHome': '攻略首页',
      'footer.beginner': '新手入门',
      'footer.landingLink': '游戏宣传站',

      'breadcrumb.home': '攻略首页',

      'search.placeholder': '搜索攻略、鱼类、食谱...',
      'search.noResults': '未找到相关结果，试试其他关键词',

      'db.found': '共找到',
      'db.results': '条结果',
      'db.noResults': '没有匹配的结果，试试调整筛选条件',
      'db.search': '搜索...',
      'db.sort.default': '默认排序',
      'db.sort.name': '名称 A-Z',
      'db.sort.priceDesc': '价格 高→低',
      'db.sort.priceAsc': '价格 低→高',
      'db.sort.rarityDesc': '稀有度 高→低',
      'db.sort.rarityAsc': '稀有度 低→高',
      'db.sort.growth': '生长周期 短→长',
      'db.toggleUncollected': '仅显示未收集',
      'db.toggleUnlocked': '仅显示未解锁',
      'db.toggleUnplanted': '仅显示未种植',
      'db.toggleUnowned': '仅显示未拥有',
      'db.toggleUnobserved': '仅显示未观察',
      'db.toggleUnadopted': '仅显示未领养',

      'filter.season': '季节',
      'filter.location': '地点',
      'filter.habitat': '栖息地',
      'filter.rarity': '稀有度',
      'filter.time': '时间',
      'filter.category': '分类',
      'filter.difficulty': '难度',
      'filter.type': '类型',

      'season.spring': '🌸 春',
      'season.summer': '☀️ 夏',
      'season.autumn': '🍂 秋',
      'season.winter': '❄️ 冬',

      'loc.river': '河流',
      'loc.lake': '湖泊',
      'loc.ocean': '海洋',
      'loc.pond': '池塘',
      'loc.garden': '花园',
      'loc.meadow': '草地',
      'loc.forest': '森林',
      'loc.mountain': '山地',
      'loc.town': '城镇',
      'loc.desert': '沙漠',

      'rarity.common': '⭐ 普通',
      'rarity.uncommon': '⭐⭐ 稀有',
      'rarity.rare': '⭐⭐⭐ 史诗',
      'rarity.legendary': '👑 传说',

      'time.all': '全天',
      'time.morning': '清晨',
      'time.afternoon': '午后',
      'time.evening': '傍晚',
      'time.night': '夜间',

      'diff.easy': '⭐ 简单',
      'diff.medium': '⭐⭐ 中等',
      'diff.hard': '⭐⭐⭐ 困难',

      'cat.fish': '🐟 鱼类',
      'cat.meat': '🥩 肉类',
      'cat.dessert': '🍰 甜点',
      'cat.veggie': '🥗 素食',
      'cat.staple': '🍚 主食',
      'cat.drink': '🥤 饮品',
      'cat.special': '✨ 特殊',

      'type.flower': '💐 花卉',
      'type.crop': '🥬 蔬菜',
      'type.fruit': '🍓 水果',
      'type.herb': '🌿 香草',
      'type.fungus': '🍄 菌菇',
      'type.tree': '🌳 树木',

      'furn.living': '🛋️ 客厅',
      'furn.bedroom': '🛏️ 卧室',
      'furn.kitchen': '🍳 厨房',
      'furn.yard': '🌳 庭院',
      'furn.decor': '🖼️ 装饰',

      'th.icon': '',
      'th.name': '名称',
      'th.rarity': '稀有度',
      'th.season': '季节',
      'th.location': '地点',
      'th.time': '时间',
      'th.price': '价格',
      'th.collect': '已获',
      'th.category': '分类',
      'th.ingredients': '食材',
      'th.effect': '效果',
      'th.difficulty': '难度',
      'th.type': '类型',
      'th.growth': '生长',
      'th.yield': '产量',
      'th.source': '来源',
      'th.materials': '材料',
      'th.size': '尺寸',
      'th.personality': '性格',
      'th.favoriteFood': '喜好食物',
      'th.traits': '特征',
      'th.theme': '风格',
      'th.water': '浇水/天',
      'th.yieldData': '产量',

      // Chinese versions of all page content (abbreviated - keeping the original Chinese)
      'page.fishing.title': '鱼类图鉴 - Heartopia 钓鱼攻略 | 季节·地点·价格',
      'page.fishing.desc': 'Heartopia心动小镇最全鱼类图鉴，包含27种鱼类的出现季节、垂钓地点、时间、稀有度、价格和垂钓技巧。',
      'page.fishing.h1': '🎣 钓鱼攻略 & 鱼类图鉴',
      'page.fishing.subtitle': '掌握钓鱼技巧，收集全部 27 种鱼类，成为心托邦钓鱼大师',
      'page.fishing.guideTitle': '🎯 钓鱼基础',
      'page.fishing.guideP1': '钓鱼是 Heartopia 最早解锁的爱好之一，也是<strong>最稳定赚钱方式</strong>。你可以在河流、湖泊、池塘和海洋四种水域中垂钓，不同水域出产的鱼类不同。',
      'page.fishing.tip1': '💡 <strong>新手提示：</strong>开局赠送<strong>通用鱼饵 x20</strong>，建议先去河流钓鲤鱼练手，掌握甩竿和收线节奏后再挑战稀有鱼类。',
      'page.fishing.howto': '如何开始钓鱼',
      'page.fishing.step1': '走到任意水域边缘（河流/湖泊/池塘/海洋）',
      'page.fishing.step2': '打开背包，装备鱼竿和鱼饵',
      'page.fishing.step3': '长按抛竿键，鱼漂落水后等待',
      'page.fishing.step4': '鱼漂下沉时迅速点击收竿！',
      'page.fishing.step5': '进入搏鱼阶段：根据鱼的游动方向反向拉竿',
      'page.fishing.baitTitle': '🪱 鱼饵类型',
      'page.fishing.spotTitle': '📍 最佳钓点推荐',
      'page.fishing.spotTip1': '🏆 <strong>收益最高：</strong>秋季海洋钓鲑鱼（420💰）+ 夏夜河流钓鲶鱼（350💰），交替垂钓日均收入 5000+ 金币。',
      'page.fishing.spotTip2': '⚠️ <strong>注意：</strong>稀有鱼种（龙鱼、翻车鱼等）出现概率极低，建议在对应季节使用高级鱼饵，并预留充足时间。',
      'page.fishing.encyclopedia': '📊 鱼类图鉴',
      'page.fishing.encyDesc': '以下是目前已知的全部鱼类数据。点击筛选条件快速找到目标鱼类，点击 ⬜ 标记已钓到的鱼。',

      'bait.universal': '通用鱼饵', 'bait.universal.target': '常见鱼类', 'bait.universal.source': '商店购买 / 初始赠送', 'bait.universal.scene': '日常钓鱼、新手练习',
      'bait.worm': '虫饵', 'bait.worm.target': '淡水中小型鱼', 'bait.worm.source': '捕虫获得 / 商店购买', 'bait.worm.scene': '钓鲈鱼、鳟鱼、青蛙',
      'bait.stinky': '腥味鱼饵', 'bait.stinky.target': '大型肉食鱼', 'bait.stinky.source': '烹饪制作 / 商店购买', 'bait.stinky.scene': '钓鲶鱼、金枪鱼、鲨鱼',
      'bait.premium': '高级鱼饵', 'bait.premium.target': '稀有/传说鱼类', 'bait.premium.source': '活动奖励 / 高级商店', 'bait.premium.scene': '挑战龙鱼、翻车鱼等',
      'bait.legendary': '传说鱼饵', 'bait.legendary.target': '传说级鱼类', 'bait.legendary.source': '钓鱼大赛奖励 / 极稀有掉落', 'bait.legendary.scene': '龙王锦鲤等终极目标',

      'page.bugs.title': '昆虫图鉴 - Heartopia 捕虫攻略 | 季节·地点·稀有度',
      'page.bugs.desc': 'Heartopia心动小镇最全昆虫图鉴，包含23种昆虫的出现季节、栖息地、时间、稀有度和售价。',
      'page.bugs.h1': '🪲 捕虫攻略 & 昆虫图鉴',
      'page.bugs.subtitle': '掌握捕虫技巧，收集全部 23 种昆虫，成为昆虫收藏家',
      'page.bugs.basics': '🎯 捕虫基础',
      'page.bugs.basicsP1': '捕虫是 Heartopia 中<strong>最具挑战性</strong>的爱好之一。与钓鱼不同，你需要手持捕虫网，悄悄靠近目标昆虫，在合适的时机挥网。',
      'page.bugs.tip1': '💡 <strong>新手提示：</strong>先拿菜粉蝶练手——飞行慢、分布广、价格低但不会逃跑太快。掌握"慢走键"后再挑战稀有昆虫。',
      'page.bugs.steps': '捕虫步骤', 'page.bugs.step1':'装备捕虫网','page.bugs.step2':'寻找目标昆虫','page.bugs.step3':'按住慢走键悄悄靠近','page.bugs.step4':'进入射程后松开发射！','page.bugs.step5':'命中后自动收入背包',
      'page.bugs.types': '🦋 昆虫分类',
      'page.bugs.warn': '⚠️ <strong>警告：</strong>蝎子和狼蛛具有攻击性！如果被发现并且靠太近，它们会主动攻击导致眩晕。',
      'page.bugs.best': '🏆 <strong>最值钱昆虫：</strong>兰花螳螂（4000💰）、闪蝶（3000💰）、狼蛛（2500💰），遇到千万别错过！',
      'page.bugs.encyclopedia': '📊 昆虫图鉴', 'page.bugs.encyDesc':'所有已知昆虫数据。使用筛选条件并标记已收集的品种。',
      'table.bugs.category':'类别','table.bugs.representative':'代表昆虫','table.bugs.bestTime':'最佳时间','table.bugs.tip':'技巧',
      'cat.butterfly':'🦋 蝴蝶类','cat.butterfly.rep':'菜粉蝶、凤蝶、闪蝶','cat.butterfly.time':'白天晴天','cat.butterfly.tip':'飞行轨迹飘忽，预判落点',
      'cat.beetle':'🪲 甲虫类','cat.beetle.rep':'独角仙、锹形虫','cat.beetle.time':'夏夜树干上','cat.beetle.tip':'静止时捕捉最佳',
      'cat.cicada':'🦗 蝉/蝗虫类','cat.cicada.rep':'蝉、蚱蜢','cat.cicada.time':'夏季全天','cat.cicada.tip':'循声定位，靠近会跳走',
      'cat.dangerous':'🕷️ 危险昆虫','cat.dangerous.rep':'蝎子、狼蛛','cat.dangerous.time':'夜间','cat.dangerous.tip':'举网靠近，它会攻击！',

      'page.birds.title':'观鸟图鉴 - Heartopia 观鸟攻略 | 栖息地·季节·稀有度',
      'page.birds.desc':'Heartopia心动小镇观鸟图鉴，包含20种鸟类的出现季节、栖息地、时间和稀有度。',
      'page.birds.h1':'🐦 观鸟攻略 & 鸟类图鉴','page.birds.subtitle':'拿起望远镜，在小镇的各个角落发现 20 种美丽鸟类',
      'page.birds.basics':'🔭 观鸟基础','page.birds.basicsP1':'观鸟是 Heartopia 中最<strong>休闲治愈</strong>的爱好。不需要快速操作，只需要耐心和观察力。',
      'page.birds.tip1':'💡 <strong>新手提示：</strong>初始赠送<strong>基础望远镜</strong>。从小镇广场的鸽子开始，它们几乎不会飞走。',
      'page.birds.steps':'观鸟步骤','page.birds.step1':'装备望远镜','page.birds.step2':'发现目标鸟类','page.birds.step3':'举起望远镜对准鸟类','page.birds.step4':'保持稳定等待识别条填满','page.birds.step5':'识别成功！',
      'page.birds.types':'🦅 鸟类分类','page.birds.best':'🏆 <strong>最稀有：</strong>丹顶鹤（5000💰冬季限定）+ 火烈鸟（3500💰夏季傍晚），鸟类收藏家的终极荣耀！',
      'page.birds.encyclopedia':'📊 鸟类图鉴','page.birds.encyDesc':'所有已知鸟类数据。',
      'table.birds.category':'类别','table.birds.rep':'代表鸟类','table.birds.time':'最佳时间','table.birds.trait':'特征',
      'bird.songbird':'🐦 常见林鸟','bird.songbird.rep':'麻雀、知更鸟、蓝山雀','bird.songbird.time':'清晨','bird.songbird.trait':'分布广泛，容易观察',
      'bird.waterfowl':'🦆 水鸟','bird.waterfowl.rep':'绿头鸭、苍鹭、天鹅','bird.waterfowl.time':'清晨/傍晚','bird.waterfowl.trait':'湖泊和河流附近',
      'bird.raptor':'🦅 猛禽','bird.raptor.rep':'鹰、猫头鹰、游隼','bird.raptor.time':'午后/夜间','bird.raptor.trait':'需要高倍望远镜',
      'bird.rare':'👑 珍稀鸟类','bird.rare.rep':'丹顶鹤、火烈鸟、孔雀','bird.rare.time':'特定季节','bird.rare.trait':'极稀有，观鸟家的终极目标',

      'page.cats.title':'猫咪攻略 - Heartopia 猫咪品种图鉴 | 养猫指南','page.cats.desc':'Heartopia心动小镇猫咪攻略：12种猫咪品种图鉴、性格分析、喜好食物、养护技巧。',
      'page.cats.h1':'🐱 猫咪攻略 & 品种图鉴','page.cats.subtitle':'12 种猫咪的完整图鉴：性格、喜好、养护技巧',
      'page.cats.basics':'🐾 养猫入门','page.cats.basicsP1':'在 Heartopia 中，养猫是<strong>最温暖治愈</strong>的爱好。每只猫咪都有独特的<strong>性格、喜好食物和行为模式</strong>。',
      'page.cats.tip1':'💡 <strong>如何获得第一只猫：</strong>完成新手引导后，在<strong>小镇广场</strong>会遇到一只小白猫。连续3天喂它鱼！',
      'page.cats.flow':'领养流程','page.cats.flow1':'在小镇探索时注意观察流浪猫','page.cats.flow2':'每天喂它喜欢的食物提升好感度','page.cats.flow3':'好感度满后出现「领养」选项','page.cats.flow4':'在家园放置猫爬架和猫窝','page.cats.flow5':'开心地带回家！',
      'page.cats.warn':'⚠️ <strong>注意：</strong>每只猫每天只能喂食一次。喂不喜欢的食物不会增加好感度，喂讨厌的食物甚至会降低好感！',
      'page.cats.encyclopedia':'📊 猫咪品种图鉴','page.cats.encyDesc':'12 种猫咪的完整数据。',

      'page.cooking.title':'食谱大全 - Heartopia 烹饪攻略 | 食材·效果·配方','page.cooking.desc':'Heartopia心动小镇最全食谱数据库，包含27道料理的食材配方、体力恢复效果、售卖价格。',
      'page.cooking.h1':'🍳 烹饪攻略 & 食谱大全','page.cooking.subtitle':'27 道料理的完整配方：食材、效果、售价、解锁条件',
      'page.cooking.basics':'🥘 烹饪系统基础','page.cooking.basicsP1':'烹饪是 Heartopia 的核心爱好之一，不仅能为角色<strong>恢复体力</strong>，高级料理还能提供<strong>临时增益效果</strong>。',
      'page.cooking.tip1':'🔓 <strong>解锁条件：</strong>完成新手引导后，在家园放置<strong>厨房台面</strong>即可解锁烹饪系统。',
      'page.cooking.steps':'烹饪步骤','page.cooking.step1':'走近厨房台面，点击「烹饪」','page.cooking.step2':'选择要制作的食谱','page.cooking.step3':'确认拥有所有食材','page.cooking.step4':'点击「开始烹饪」','page.cooking.step5':'料理自动存入背包',
      'page.cooking.ingredientTitle':'🥬 食材获取指南','page.cooking.table.ingredientType':'食材类型','page.cooking.table.source':'获取方式','page.cooking.table.examples':'常见食材',
      'page.cooking.ing.fish':'🐟 鱼类','page.cooking.ing.fishSrc':'钓鱼获得','page.cooking.ing.fishEx':'鲤鱼、鲑鱼、金枪鱼、鱿鱼',
      'page.cooking.ing.veggie':'🥬 蔬菜','page.cooking.ing.veggieSrc':'园艺种植','page.cooking.ing.veggieEx':'生菜、番茄、黄瓜、土豆',
      'page.cooking.ing.fruit':'🍎 水果','page.cooking.ing.fruitSrc':'果树采集 / 种植','page.cooking.ing.fruitEx':'苹果、樱桃、蓝莓、草莓',
      'page.cooking.ing.meat':'🥩 肉类','page.cooking.ing.meatSrc':'商店购买 / 任务奖励','page.cooking.ing.meatEx':'牛肉、鸡肉、猪肉',
      'page.cooking.ing.dairy':'🥛 乳制品','page.cooking.ing.dairySrc':'商店购买','page.cooking.ing.dairyEx':'牛奶、奶油、黄油、奶酪',
      'page.cooking.ing.seasoning':'🌿 调料','page.cooking.ing.seasoningSrc':'采集 / 商店','page.cooking.ing.seasoningEx':'香草、酱油、红酒、巧克力',
      'page.cooking.storageWarn':'⚠️ <strong>食材管理建议：</strong>冰箱容量有限，建议每种食材保留 3-5 个，多余的出售或烹饪成料理。',
      'page.cooking.levelTitle':'💡 烹饪升级策略',
      'page.cooking.level1':'<strong>烹饪等级 1-2：</strong>反复制作「烤鱼」和「蔬菜沙拉」，食材易得、成本低',
      'page.cooking.level2':'<strong>烹饪等级 3-5：</strong>制作「鱼汤」和「蛋炒饭」，性价比高',
      'page.cooking.level3':'<strong>烹饪等级 6-8：</strong>制作「刺身拼盘」和「拉面」，经验丰厚',
      'page.cooking.level4':'<strong>烹饪等级 9-10：</strong>挑战「黄金盛宴」，终极料理值得炫耀',
      'page.cooking.encyclopedia':'📊 食谱数据库','page.cooking.encyDesc':'27 道料理的完整数据。',

      'page.gardening.title':'园艺攻略 - Heartopia 种植图鉴 | 花卉·作物·果树','page.gardening.desc':'Heartopia心动小镇园艺攻略：18种植物图鉴，包含花卉、蔬菜、水果的生长周期、浇水频率、收获产量和售价。',
      'page.gardening.h1':'🌷 园艺攻略 & 种植图鉴','page.gardening.subtitle':'18 种植物全收录：花卉、蔬菜、水果、香草的种植技巧与收益',
      'page.gardening.basics':'🌱 园艺基础','page.gardening.basicsP1':'园艺是 Heartopia 中最<strong>稳定的被动收入来源</strong>。不同作物有不同的生长周期、浇水频率和季节适应性。',
      'page.gardening.tip1':'💡 <strong>新手推荐：</strong>开局赠送<strong>基础种子x10</strong>。建议第一批种生菜（2天收获）和番茄（3天收获），生长快、失败成本低。',
      'page.gardening.steps':'园艺步骤','page.gardening.step1':'用锄头翻地创建种植格','page.gardening.step2':'选择种子播下','page.gardening.step3':'用水壶浇水','page.gardening.step4':'等待生长','page.gardening.step5':'成熟后收获！',
      'page.gardening.tipsTitle':'💡 园艺技巧',
      'page.gardening.tip2':'<strong>季节匹配：</strong>种植当季作物生长速度+20%，跨季种植会延长生长时间',
      'page.gardening.tip3':'<strong>连续收获：</strong>番茄、蓝莓等作物成熟后不拔掉，可以再次结果（最多3次）',
      'page.gardening.tip4':'<strong>浇水技巧：</strong>雨天自动浇水，省去浇水操作。合理安排查看天气预报',
      'page.gardening.tip5':'<strong>肥料使用：</strong>使用肥料可缩短生长时间20%，高价值作物强烈推荐施肥',
      'page.gardening.tip6':'<strong>花园布局：</strong>同类型植物相邻种植可触发「伴生」效果，产量+10%',
      'page.gardening.best':'🏆 <strong>最高收益作物：</strong>西瓜（600💰/个）+ 南瓜（300💰/个）。虽然生长周期长，但单格日均收益远超其他作物。',
      'page.gardening.encyclopedia':'📊 种植图鉴','page.gardening.encyDesc':'18 种植物的完整数据。',

      'page.furniture.title':'家具图鉴 - Heartopia 建造装修攻略 | 全家具获取方式','page.furniture.desc':'Heartopia心动小镇家具图鉴：客厅、卧室、厨房、庭院、装饰品全收录。包含获取方式、材料配方和稀有度。',
      'page.furniture.h1':'🏠 家具图鉴 & 建造指南','page.furniture.subtitle':'20 件精选家具的获取方式、材料配方和风格分类',
      'page.furniture.basics':'🔨 建造系统基础','page.furniture.basicsP1':'建造和装修是 Heartopia 最具创造力的系统。你可以自由摆放家具、改变墙面颜色、布置花园装饰，打造<strong>独一无二的梦想家园</strong>。',
      'page.furniture.tip1':'💡 <strong>新手提示：</strong>初始家园已包含基本家具。优先用金币购买<strong>衣柜</strong>和<strong>书架</strong>，提升家园评分。',
      'page.furniture.sources':'家具获取方式',
      'page.furniture.src1':'<strong>商店购买：</strong>最直接的方式，每天商店随机刷新商品',
      'page.furniture.src2':'<strong>木工制作：</strong>收集木材/石材/金属等材料后在工坊制作',
      'page.furniture.src3':'<strong>活动限定：</strong>季节活动和联动活动的限定家具，活动结束后绝版',
      'page.furniture.src4':'<strong>稀有掉落：</strong>钓鱼/捕虫/观鸟时极低概率获得特殊装饰品',
      'page.furniture.warn':'⚠️ <strong>注意：</strong>活动限定家具无法交易。错过了活动只能等待复刻！',
      'page.furniture.encyclopedia':'📊 家具图鉴','page.furniture.encyDesc':'20 件精选家具的完整数据。',

      'page.npcs.title':'NPC攻略 - Heartopia 角色好感度送礼指南','page.npcs.desc':'Heartopia心动小镇NPC攻略：10位小镇居民的角色介绍、喜好礼物、讨厌礼物、日程安排。',
      'page.npcs.h1':'👥 NPC 攻略 & 送礼指南','page.npcs.subtitle':'10 位小镇居民的喜好、日程和好感度速查表',
      'page.npcs.basics':'💝 好感度系统','page.npcs.basicsP1':'与小镇 NPC 建立关系是 Heartopia 社交系统的核心。通过<strong>送礼、对话、完成任务</strong>提升好感度。',
      'page.npcs.tip1':'💡 <strong>送礼规则：</strong>每个 NPC 每天只能送一次礼物。❤️喜欢=+3好感度，👍一般=+1，👎讨厌=-2。生日当天送礼效果翻倍！',
      'page.npcs.levels':'好感度等级','page.npcs.thLevel':'等级','page.npcs.thPoints':'所需好感度','page.npcs.thUnlock':'解锁内容',
      'page.npcs.lv1':'Lv.1 陌生人','page.npcs.lv1u':'基础对话',
      'page.npcs.lv2':'Lv.2 熟人','page.npcs.lv2u':'每日委托任务',
      'page.npcs.lv3':'Lv.3 朋友','page.npcs.lv3u':'专属配方/技巧',
      'page.npcs.lv4':'Lv.4 好友','page.npcs.lv4u':'商店折扣 + 独家剧情',
      'page.npcs.lv5':'Lv.5 挚友','page.npcs.lv5u':'限定礼物 + 特殊能力',
      'page.npcs.loved':'❤️ 最爱','page.npcs.liked':'👍 喜欢','page.npcs.hated':'👎 讨厌',
      'page.npcs.encyclopedia':'📊 NPC 角色图鉴','page.npcs.encyDesc':'10 位居民完整数据。',

      'page.beginner.title':'新手入门指南 - Heartopia 攻略站','page.beginner.desc':'Heartopia新手入门指南：第一天必做清单、界面操作详解、常见误区避坑、前三天推荐发展路线。',
      'page.beginner.h1':'🎓 新手入门指南','page.beginner.subtitle':'刚来到心托邦？这份指南帮你快速上手，少走弯路',
      'page.beginner.day1':'📋 第一天必做清单','page.beginner.day1desc':'以下是你来到心托邦第一天<strong>最应该优先完成</strong>的事项：',
      'page.beginner.chk1':'<strong>创建角色</strong> — 捏脸、选发型、搭配初始服装',
      'page.beginner.chk2':'<strong>完成新手引导</strong> — 跟随提示完成基础操作教学',
      'page.beginner.chk3':'<strong>领取初始道具</strong> — 获得鱼竿、通用鱼饵x20、基础种子x10',
      'page.beginner.chk4':'<strong>钓到第一条鱼</strong> — 去最近的河流使用通用鱼饵',
      'page.beginner.chk5':'<strong>种下第一批作物</strong> — 在家门口花园种下种子',
      'page.beginner.chk6':'<strong>认识第一位邻居</strong> — 在小镇广场随机遇到其他玩家',
      'page.beginner.chk7':'<strong>卖掉第一批收获</strong> — 将钓到的鱼/收获的作物卖给商店',
      'page.beginner.chk8':'<strong>升级家园</strong> — 用初始金币购买第一件家具或装饰品',
      'page.beginner.ui':'🖥️ 游戏界面一览','page.beginner.uiDesc':'💡 <strong>快速熟悉：</strong>界面分为顶部状态栏、左侧摇杆、右侧操作按钮、底部快捷栏。',
      'page.beginner.uiTitle':'主要界面区域',
      'page.beginner.ui1':'<strong>顶部状态栏：</strong>显示金币数量、体力值、背包容量',
      'page.beginner.ui2':'<strong>左下角摇杆：</strong>控制角色移动，支持 360° 自由移动',
      'page.beginner.ui3':'<strong>右下角按钮：</strong>交互键、工具键',
      'page.beginner.ui4':'<strong>底部快捷栏：</strong>快速切换鱼竿/虫网/水壶/相机等工具',
      'page.beginner.ui5':'<strong>右上角菜单：</strong>打开背包、地图、好友列表、设置、图鉴',
      'page.beginner.mistakes':'⚠️ 新手常见误区',
      'page.beginner.err1':'❌ <strong>误区 1：疯狂钓鱼不管体力。</strong>体力耗尽后无法使用工具。每钓 10 条左右吃一次食物补充。',
      'page.beginner.err2':'❌ <strong>误区 2：卖掉所有材料。</strong>有些材料是重要烹饪原料，建议每种至少保留 5 个。',
      'page.beginner.err3':'❌ <strong>误区 3：忽略社交。</strong>Heartopia 的核心魅力在于社交。拜访邻居的家可获得灵感。',
      'page.beginner.err4':'❌ <strong>误区 4：只盯着一个爱好。</strong>六大爱好相辅相成。钓鱼获得的鱼可用于烹饪，烹饪的料理可送礼。',
      'page.beginner.err5':'❌ <strong>误区 5：不看商店每日刷新。</strong>商店每天随机刷新，有限定家具和稀有种子。',
      'page.beginner.route':'🗺️ 前三天推荐路线','page.beginner.thDay':'天数','page.beginner.thPriority':'优先事项','page.beginner.thGoal':'目标',
      'page.beginner.d1p':'完成引导 → 钓鱼入门 → 种地 → 卖鱼攒钱','page.beginner.d1g':'积累 2000+ 金币，解锁烹饪',
      'page.beginner.d2p':'解锁烹饪 → 接取 NPC 任务 → 探索新钓点','page.beginner.d2g':'烹饪等级 2，解锁 3 种食谱',
      'page.beginner.d3p':'拜访邻居 → 参加活动 → 挑战稀有鱼 → 装修家园','page.beginner.d3g':'社交等级 3，拥有 5 件以上家具',
      'page.beginner.tips':'💎 进阶小贴士',
      'page.beginner.tip1':'<strong>体力管理：</strong>在家睡觉免费恢复全部体力。烹饪的食物有额外增益。',
      'page.beginner.tip2':'<strong>雨天策略：</strong>雨天是钓鱼好时机（稀有鱼概率提升）。',
      'page.beginner.tip3':'<strong>季节意识：</strong>每个季节有独特鱼种和昆虫，错过了要等一年。',
      'page.beginner.tip4':'<strong>背包扩容：</strong>优先用金币升级背包，材料收集是核心乐趣。',
      'page.beginner.tip5':'<strong>每日签到：</strong>连续登录 7 天可获得稀有道具和金币奖励。',

      'page.money.title':'赚钱攻略 - Heartopia 最快赚钱方法 | 日入万金指南','page.money.desc':'Heartopia最全赚钱攻略：6种高效赚钱方法排行、每日必做清单、季节最优赚钱路线。',
      'page.money.h1':'💰 赚钱攻略','page.money.subtitle':'最高效的赚钱方法排行，从日入百金到日入万金',
      'page.money.ranking':'📊 赚钱方法排行榜','page.money.rankingDesc':'以下方法按<strong>长期稳定收益效率</strong>排序（金币/小时）：',
      'page.money.m1t':'🏆 季节性稀有鱼垂钓','page.money.m1d':'针对当前季节的高价稀有鱼类集中垂钓。秋季钓鲑鱼 + 夏夜钓鲶鱼，交替刷新钓点。',
      'page.money.m2t':'🍳 高级料理制作与出售','page.money.m2d':'烹饪高级食谱出售。需要提前储备食材，但利润极高。',
      'page.money.m3t':'🌷 高价值作物种植','page.money.m3d':'种植生长期短、售价高的作物，批量收获后出售或加工增值。',
      'page.money.m4t':'🎣 日常批量钓鱼','page.money.m4d':'不限季节，在河流钓鲤鱼和鲫鱼，数量取胜。适合新手和休闲玩家。',
      'page.money.m5t':'📦 完成 NPC 每日委托','page.money.m5d':'每天 NPC 会刷新 3-5 个委托任务，奖励金币 + 好感度。性价比极高。',
      'page.money.m6t':'🎉 限时活动奖励','page.money.m6d':'参与活动和钓鱼大赛，完成活动任务可获得大量金币和限定物品。',
      'page.money.efficiency':'~{val}/小时','page.money.efficiencyDay':'~{val}/天（按时收获）','page.money.efficiencyVar':'收益不定',
      'page.money.diffLow':'难度：低','page.money.diffMed':'难度：中等','page.money.diffHigh':'难度：较高','page.money.diffVeryLow':'难度：极低',
      'page.money.seasonal':'需关注季节','page.money.needsCookingLevel':'需烹饪等级','page.money.passiveIncome':'稳定被动收入',
      'page.money.daily':'✅ 每日必做清单','page.money.dailyDesc':'以下事项建议每天优先完成：',
      'page.money.dl1':'<strong>签到领奖</strong> — 连续 7 天有额外奖励',
      'page.money.dl2':'<strong>收获成熟的作物</strong> — 卖出或存仓，重新播种',
      'page.money.dl3':'<strong>完成所有 NPC 委托</strong> — 3-5 个任务，约 1500💰',
      'page.money.dl4':'<strong>检查商店刷新</strong> — 抢购限定种子/稀有鱼饵',
      'page.money.dl5':'<strong>钓 10-20 条鱼</strong> — 至少覆盖高价值目标鱼类',
      'page.money.dl6':'<strong>拜访 3 位邻居</strong> — 社交互动 + 获取灵感',
      'page.money.dl7':'<strong>烹饪并食用料理</strong> — 维持体力 + 积累烹饪经验',
      'page.money.dl8':'<strong>查看活动进度</strong> — 确保不遗漏限时任务',
      'page.money.season':'📅 当前季节最优路线','page.money.invest':'📈 赚钱优先级建议',
      'page.money.inv1':'<strong>第一优先：</strong>升级背包容量 → 更多材料 = 更多收入',
      'page.money.inv2':'<strong>第二优先：</strong>解锁高级鱼饵配方 → 稀有鱼概率提升',
      'page.money.inv3':'<strong>第三优先：</strong>烹饪等级提升 → 高级料理售价翻倍',
      'page.money.inv4':'<strong>第四优先：</strong>家园扩建 → 更多花园空间 = 更多作物',

      'page.events.title':'活动攻略 - Heartopia 限时活动 & 奖励一览','page.events.desc':'Heartopia活动攻略：夏日祭典、钓鱼大赛、彩虹小马联动等全部活动的任务列表、限定奖励和参与时间。',
      'page.events.h1':'🎉 活动攻略','page.events.subtitle':'跟踪所有限时活动、联动活动和季节庆典，不错过任何限定奖励',
      'page.events.tab.all':'📋 全部活动','page.events.tab.active':'🟢 进行中','page.events.tab.upcoming':'🟡 即将到来','page.events.tab.past':'⚪ 已结束',
      'page.events.statusActive':'🟢 进行中','page.events.statusUpcoming':'🟡 即将到来','page.events.statusPast':'⚪ 已结束',
      'page.events.typeSeasonal':'季节活动','page.events.typeCollab':'联动活动','page.events.typeLimited':'限时活动',
      'page.events.rewards':'🎁 限定奖励','page.events.tasks':'📋 活动任务','page.events.noEvents':'暂无该分类的活动',
      'page.events.dateRange':'{start} ~ {end}',

      'hub.title':'📖 Heartopia 攻略站','hub.subtitle':'心托邦 / 心动小镇 · 玩家共建游戏指南',
      'hub.hot':'🔥 热门攻略','hub.news':'📰 最新动态',
      'hub.fish':'鱼类图鉴','hub.fish.desc':'27种','hub.bugs':'昆虫图鉴','hub.bugs.desc':'23种',
      'hub.birds':'观鸟图鉴','hub.birds.desc':'20种','hub.cats':'猫咪攻略','hub.cats.desc':'12只',
      'hub.cooking':'食谱大全','hub.cooking.desc':'27道','hub.gardening':'园艺种植','hub.gardening.desc':'18种',
      'hub.furniture':'家具图鉴','hub.furniture.desc':'20件','hub.npcs':'NPC攻略','hub.npcs.desc':'10位居民',
      'hub.beginner':'新手入门','hub.beginner.desc':'详细指南','hub.money':'赚钱攻略','hub.money.desc':'高效方法',
      'hub.events':'活动攻略','hub.events.desc':'2个进行中','hub.tutorials':'图文教程','hub.tutorials.desc':'12篇指南','hub.videos':'视频教程','hub.videos.desc':'10个视频','hub.landing':'游戏宣传站','hub.landing.desc':'返回官网',
      'hub.collected':'已收集','hub.unlocked':'已解锁','hub.observed':'已观察','hub.adopted':'已领养','hub.planted':'已种植','hub.owned':'已拥有',

      'hot.fish':'鱼类图鉴大全','hot.fish.desc':'27种鱼类的季节、地点、价格全收录','hot.money':'日入万金不是梦','hot.money.desc':'最高效的赚钱方法与每日必做清单',
      'hot.beginner':'新手第一天指南','hot.beginner.desc':'从零开始，手把手带你入门心托邦','hot.events':'夏日祭典即将开启','hot.events.desc':'限定服装、家具、烟花大会等你来',
      'hot.cooking':'食谱全收录','hot.cooking.desc':'27道料理的食材配方与效果一览',
      'hot.bugs':'昆虫图鉴大全','hot.bugs.desc':'23种昆虫的栖息地与价格全收录',
      'hot.birds':'观鸟图鉴大全','hot.birds.desc':'20种鸟类的栖息地与季节数据',
      'hot.cats':'猫咪品种图鉴','hot.cats.desc':'12种猫咪的性格与养护技巧',
      'hot.garden':'植物种植图鉴','hot.garden.desc':'18种植物的生长周期与收益分析',

      'news.active':'进行中','news.upcoming':'即将到来','news.past':'已结束',
      'news.fishingDerby.title':'夏季钓鱼大赛 (7/1-7/14)','news.fishingDerby.desc':'限定钓竿皮肤 + 稀有鱼饵 + 金币奖励',
      'news.summerFest.title':'夏日祭典 (7/15-8/15)','news.summerFest.desc':'浴衣套装、烟花棒、金鱼灯笼等限定道具',
      'news.version.title':'v0.5.1 版本更新','news.version.desc':'全新家具系列 + 夏季限定活动 + Bug修复',

      'landing.guideLink':'📖 攻略站','landing.guideBtn':'📖 查看攻略站',
      'backTop':'⬆','toc.title':'📑 目录','toc.mobile':'📑 目录导航...','lang.switch':'English','lang.label':'🌐 语言','back.tutorials':'← 返回图文教程','back.videos':'← 返回视频教程',
      'filter.all':'全部','filter.cat.beginner':'新手入门','filter.cat.gameplay':'玩法攻略','filter.cat.events':'活动攻略','filter.cat.build':'建筑教程','filter.cat.news':'更新资讯','tutorial.notFound':'📝 未找到该教程','tutorial.notFoundLink':'浏览全部教程','tutorial.noResults':'未找到匹配的教程，试试其他搜索词或筛选条件','tutorial.showing':'共 {count} 篇（共 {total} 篇）',
    }
  },

  /** Get translation for key */
  t(key, replacements) {
    let text = this.dict[this.currentLang]?.[key];
    if (text === undefined) {
      // Fallback to English
      text = this.dict['en'][key];
    }
    if (text === undefined) return key;

    // Handle {placeholder} replacements
    if (replacements) {
      for (const [k, v] of Object.entries(replacements)) {
        text = text.replace(`{${k}}`, v);
      }
    }
    return text;
  },

  /** Switch language */
  setLang(lang) {
    this.currentLang = lang;
    try { localStorage.setItem('heartopia_lang_v2', lang); } catch(e) {}
    this.updatePage();
  },

  /** Toggle between en/zh */
  toggleLang() {
    this.setLang(this.currentLang === 'en' ? 'zh' : 'en');
  },

  /** Get display name based on current language */
  getName(item) {
    if (this.currentLang === 'zh') return item.name;
    return item.nameEn || item.name;
  },

  /** Update all data-i18n elements on the page */
  updatePage() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = this.t(el.dataset.i18n);
    });

    // HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = this.t(el.dataset.i18nHtml);
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.dataset.i18nPlaceholder);
    });

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    const descKey = document.documentElement.dataset.i18nDesc;
    if (metaDesc && descKey) {
      metaDesc.setAttribute('content', this.t(descKey));
    }

    // Page title
    const titleKey = document.documentElement.dataset.i18nTitle;
    if (titleKey) {
      document.title = this.t(titleKey);
    }

    // Update lang toggle button text
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
      toggleBtn.textContent = this.t('lang.switch');
    }

    // Dispatch event for dynamic content (database tables, etc.)
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: this.currentLang } }));
  },

  /** Initialize: URL param > saved preference > default English, update page, add toggle to nav */
  init() {
    // 1) Check URL parameter first (highest priority) — e.g. ?lang=en or ?lang=zh
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');

    if (urlLang === 'en' || urlLang === 'zh') {
      this.currentLang = urlLang;
      try { localStorage.setItem('heartopia_lang_v2', urlLang); } catch(e) {}
    } else {
      // 2) Fall back to saved preference; if none, default stays English
      try {
        const saved = localStorage.getItem('heartopia_lang_v2');
        if (saved === 'zh' || saved === 'en') {
          this.currentLang = saved;
        }
      } catch(e) {}
    }

    // Run updatePage after a short delay (wait for components.js to inject nav)
    const self = this;
    function tryUpdate() {
      self.updatePage();
      self._injectToggle();
    }

    // Try immediately, and also after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', tryUpdate);
    } else {
      tryUpdate();
    }

    // Also listen for the custom guide-ready event from components.js
    document.addEventListener('guideNavReady', () => {
      self._injectToggle();
      self.updatePage();
    });
  },

  /** Inject language toggle button into the nav */
  _injectToggle() {
    if (document.getElementById('langToggle')) return; // Already injected

    const navInner = document.querySelector('.guide-nav-inner');
    if (!navInner) return;

    const btn = document.createElement('button');
    btn.id = 'langToggle';
    btn.textContent = this.t('lang.switch');
    btn.style.cssText = 'padding:7px 14px;border-radius:100px;border:1.5px solid rgba(74,55,40,0.15);background:var(--warm-white);font-size:0.82rem;font-weight:600;cursor:pointer;font-family:var(--font-main);color:var(--brown);white-space:nowrap;transition:all 0.2s;flex-shrink:0;margin-left:auto;';
    btn.addEventListener('mouseenter', () => { btn.style.borderColor='var(--coral)'; btn.style.color='var(--coral-dark)'; });
    btn.addEventListener('mouseleave', () => { btn.style.borderColor='rgba(74,55,40,0.15)'; btn.style.color='var(--brown)'; });
    btn.addEventListener('click', () => this.toggleLang());
    navInner.appendChild(btn);
  }
};

// Auto-init when script loads
I18N.init();
