/**
 * Heartopia 攻略站 — Database Filtering, Sorting & Collection System (i18n-aware)
 * Depends on: i18n.js
 */
class EncyclopediaDB {
  constructor(data, filterConfig, storageKey) {
    this.data = data;
    this.config = filterConfig;
    this.storageKey = storageKey;
    this.activeFilters = {};
    this.sortBy = filterConfig.defaultSort || 'name';
    this.sortOrder = 'asc';
    this.searchQuery = '';
    this.onlyUncollected = false;
    this.collected = this._loadCollection();
    this.resultsContainer = null;
    this.countEl = null;

    // Listen for language changes
    document.addEventListener('langChanged', () => this.render());
  }

  _loadCollection() {
    try { const raw = localStorage.getItem(this.storageKey); return raw ? new Set(JSON.parse(raw)) : new Set(); }
    catch(e) { return new Set(); }
  }

  _saveCollection() {
    try { localStorage.setItem(this.storageKey, JSON.stringify([...this.collected])); } catch(e) {}
  }

  toggleCollected(id) {
    if (this.collected.has(id)) this.collected.delete(id);
    else this.collected.add(id);
    this._saveCollection();
    this.render();
  }

  isCollected(id) { return this.collected.has(id); }

  /** Get display name based on current language */
  _name(item) {
    if (typeof I18N !== 'undefined') return I18N.getName(item);
    return item.name;
  }

  /** Get i18n text */
  _t(key, replacements) {
    if (typeof I18N !== 'undefined') return I18N.t(key, replacements);
    return key;
  }

  getResults() {
    let results = [...this.data];
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      results = results.filter(item => {
        const searchStr = [item.name, item.nameEn, item.desc, ...(item.tags || [])].filter(Boolean).join(' ').toLowerCase();
        return searchStr.includes(q);
      });
    }
    for (const [key, values] of Object.entries(this.activeFilters)) {
      if (!values || values.size === 0) continue;
      results = results.filter(item => {
        const itemVal = item[key];
        if (Array.isArray(itemVal)) return [...values].some(v => itemVal.includes(v));
        return values.has(itemVal);
      });
    }
    if (this.onlyUncollected) {
      results = results.filter(item => !this.collected.has(item.id));
    }
    results.sort((a, b) => {
      let va = a[this.sortBy], vb = b[this.sortBy];
      if (typeof va === 'string') va = va.toLowerCase();
      if (typeof vb === 'string') vb = vb.toLowerCase();
      if (va < vb) return this.sortOrder === 'asc' ? -1 : 1;
      if (va > vb) return this.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    return results;
  }

  init() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.dataset.filterGroup;
        const value = btn.dataset.filterValue;
        if (!this.activeFilters[group]) this.activeFilters[group] = new Set();
        if (btn.classList.contains('active')) {
          btn.classList.remove('active');
          this.activeFilters[group].delete(value);
        } else {
          btn.classList.add('active');
          this.activeFilters[group].add(value);
        }
        this.render();
      });
    });

    const uncollectedToggle = document.getElementById('toggleUncollected');
    if (uncollectedToggle) {
      uncollectedToggle.addEventListener('change', () => { this.onlyUncollected = uncollectedToggle.checked; this.render(); });
    }

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        const val = sortSelect.value;
        if (val.startsWith('-')) { this.sortBy = val.slice(1); this.sortOrder = 'desc'; }
        else { this.sortBy = val; this.sortOrder = 'asc'; }
        this.render();
      });
    }

    const searchInput = document.getElementById('dbSearch');
    if (searchInput) {
      searchInput.addEventListener('input', () => { this.searchQuery = searchInput.value.trim(); this.render(); });
    }

    this.resultsContainer = document.getElementById('dbResults');
    this.countEl = document.getElementById('dbCount');

    // Update toggle label on lang change
    document.addEventListener('langChanged', () => {
      if (uncollectedToggle) {
        const label = uncollectedToggle.closest('label');
        if (label) {
          const textNode = label.childNodes[label.childNodes.length - 1];
          if (textNode && textNode.nodeType === 3) {
            textNode.textContent = ' ' + this._t(this._getToggleLabelKey());
          }
        }
      }
    });
  }

  _getToggleLabelKey() {
    return 'db.toggleUncollected';
  }

  render() {
    const results = this.getResults();
    if (this.countEl) {
      this.countEl.innerHTML = `${this._t('db.found')} <strong>${results.length}</strong> ${this._t('db.results')}`;
    }
    if (!this.resultsContainer) return;

    if (results.length === 0) {
      this.resultsContainer.innerHTML = `<div class="text-center" style="padding:40px;color:var(--brown-lighter);">🔍 ${this._t('db.noResults')}</div>`;
      return;
    }

    let tableHtml = '', cardsHtml = '';
    results.forEach(item => {
      const collectedClass = this.isCollected(item.id) ? 'collected' : '';
      const collectIcon = this.isCollected(item.id) ? '✅' : '⬜';
      tableHtml += this._renderTableRow(item, collectIcon, collectedClass);
      cardsHtml += this._renderCard(item, collectIcon, collectedClass);
    });

    this.resultsContainer.innerHTML = `<table class="db-table">${tableHtml}</table><div class="db-cards">${cardsHtml}</div>`;

    const self = this;
    this.resultsContainer.querySelectorAll('.col-collect, .collect-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        self.toggleCollected(this.dataset.id);
      });
    });
  }

  _renderTableRow(item, collectIcon, collectedClass) {
    return `<tr><td class="col-icon">${item.icon||'📦'}</td><td class="col-name">${this._name(item)}</td><td>${item.desc||''}</td><td class="col-price">${item.price?'💰'+item.price:''}</td><td class="col-collect ${collectedClass}" data-id="${item.id}">${collectIcon}</td></tr>`;
  }

  _renderCard(item, collectIcon, collectedClass) {
    return `<div class="db-card"><div class="card-icon-big">${item.icon||'📦'}</div><div class="card-info"><h4>${this._name(item)}</h4><div class="card-tags">${item.desc||''}</div></div><button class="collect-btn ${collectedClass}" data-id="${item.id}">${collectIcon}</button></div>`;
  }
}

/** Checklist init (i18n-aware) */
function initChecklist(listId, storageKey) {
  const list = document.getElementById(listId);
  if (!list) return;
  let checked = new Set();
  try { const raw = localStorage.getItem(storageKey); if (raw) checked = new Set(JSON.parse(raw)); } catch(e) {}
  list.querySelectorAll('li').forEach((li, i) => {
    const id = li.dataset.id || String(i);
    if (checked.has(id)) li.classList.add('done');
    li.addEventListener('click', () => {
      li.classList.toggle('done');
      if (li.classList.contains('done')) checked.add(id); else checked.delete(id);
      try { localStorage.setItem(storageKey, JSON.stringify([...checked])); } catch(e) {}
    });
  });
}
