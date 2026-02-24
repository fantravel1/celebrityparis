/* ═══════════════════════════════════════════════════════════════
   CelebrityParis.com — App Module
   Search, Map, Navigation, and Core UI Logic
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var DATA = window.CelebrityParisData;
  if (!DATA) return;

  // ── Utility ─────────────────────────────────────────────────
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  // ── Navigation ──────────────────────────────────────────────
  function initNav() {
    var toggles = $$('.nav-toggle');
    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        var menu = this.closest('header').querySelector('.nav-menu, .nav-list, .nav-links');
        if (menu) menu.classList.toggle('open');
      });
    });
  }

  // ── Search Autocomplete ─────────────────────────────────────
  function initSearch() {
    var searchInputs = [
      { input: '#globalSearch', dropdown: '#searchAutocomplete' },
      { input: '#heroSearch', dropdown: '#heroSearchAutocomplete' },
      { input: '#ctaSearch', dropdown: '#ctaSearchAutocomplete' },
      { input: '#celebritySearch', dropdown: '#celebritySearchResults' }
    ];

    searchInputs.forEach(function (config) {
      var input = $(config.input);
      var dropdown = $(config.dropdown);
      if (!input || !dropdown) return;

      input.addEventListener('input', function () {
        var query = this.value.trim();
        var results = DATA.searchAll(query);
        if (results.length === 0) {
          dropdown.innerHTML = '';
          dropdown.classList.remove('active');
          dropdown.setAttribute('hidden', '');
          return;
        }
        var html = '';
        results.forEach(function (r) {
          var label = r.type === 'celebrity' ? r.item.name : r.item.name + ' (Venue)';
          var href = r.type === 'celebrity'
            ? 'celebrities.html#' + r.item.id
            : 'venues.html#' + r.item.id;
          html += '<a class="search-autocomplete-item" href="' + href + '">' + escapeHTML(label) + '</a>';
        });
        dropdown.innerHTML = html;
        dropdown.classList.add('active');
        dropdown.removeAttribute('hidden');
      });

      input.addEventListener('blur', function () {
        setTimeout(function () {
          dropdown.classList.remove('active');
          dropdown.setAttribute('hidden', '');
        }, 200);
      });
    });
  }

  function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ── Featured Celebrities (Homepage) ─────────────────────────
  function initFeaturedCelebrities() {
    var grid = $('#featuredCelebrities');
    if (!grid) return;
    var featured = DATA.getFeaturedCelebrities(8);
    var html = '';
    featured.forEach(function (c) {
      var badges = c.categories.map(function (cat) {
        return '<span class="badge badge-' + cat + '">' + capitalize(cat) + '</span>';
      }).join('');
      html += '<article class="celebrity-card" data-id="' + c.id + '" role="listitem" tabindex="0">'
        + '<div class="celebrity-avatar" style="background-color:' + c.color + ';">'
        + '<span class="avatar-initials">' + escapeHTML(c.initials) + '</span></div>'
        + '<div class="celebrity-info">'
        + '<h3 class="celebrity-name">' + escapeHTML(c.name) + '</h3>'
        + '<p class="celebrity-era">' + escapeHTML(c.era) + ' &middot; ' + escapeHTML(c.nationality) + '</p>'
        + '<div class="celebrity-categories">' + badges + '</div>'
        + '<p class="celebrity-connections">' + c.connections.length + ' Paris connections</p>'
        + '</div></article>';
    });
    grid.innerHTML = html;
  }

  // ── Featured Venues (Homepage) ──────────────────────────────
  function initFeaturedVenues() {
    var grid = $('#featuredVenues');
    if (!grid) return;
    var featured = DATA.getFeaturedVenues(6);
    var html = '';
    featured.forEach(function (v) {
      html += '<article class="venue-card" data-id="' + v.id + '" role="listitem" tabindex="0">'
        + '<h3>' + escapeHTML(v.name) + '</h3>'
        + '<p style="font-size:0.8rem;color:#d4af37;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem;">' + escapeHTML(v.type) + '</p>'
        + '<p style="font-size:0.78rem;color:#888;margin-bottom:0.75rem;">' + escapeHTML(v.address) + '</p>'
        + '<p style="font-family:\'Cormorant Garamond\',serif;font-size:0.95rem;color:#555;line-height:1.6;">' + escapeHTML(v.description).substring(0, 120) + '...</p>'
        + '</article>';
    });
    grid.innerHTML = html;
  }

  // ── FAQ (Homepage) ──────────────────────────────────────────
  function initHomeFAQ() {
    var container = $('#homeFAQ');
    if (!container) return;
    var html = '';
    DATA.homeFAQ.forEach(function (faq) {
      html += '<details class="faq-item" role="listitem">'
        + '<summary class="faq-question"><span>' + escapeHTML(faq.question) + '</span>'
        + '<svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>'
        + '</summary>'
        + '<div class="faq-answer"><p>' + escapeHTML(faq.answer) + '</p></div>'
        + '</details>';
    });
    container.innerHTML = html;
  }

  // ── Celebrity Grid (Celebrities Page) ───────────────────────
  function initCelebrityGrid() {
    var grid = $('#celebrityGrid');
    if (!grid) return;

    renderCelebrityGrid(DATA.celebrities);

    // Filter pills
    $$('.filter-pill').forEach(function (pill) {
      pill.addEventListener('click', function () {
        $$('.filter-pill').forEach(function (p) {
          p.classList.remove('active');
          p.setAttribute('aria-checked', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-checked', 'true');
        filterCelebrities();
      });
    });

    // Select filters
    var eraFilter = $('#eraFilter');
    var sortOrder = $('#sortOrder');
    if (eraFilter) eraFilter.addEventListener('change', filterCelebrities);
    if (sortOrder) sortOrder.addEventListener('change', filterCelebrities);

    // Search
    var searchInput = $('#celebritySearch');
    if (searchInput) {
      searchInput.addEventListener('input', filterCelebrities);
    }

    // URL params
    var params = new URLSearchParams(window.location.search);
    var catParam = params.get('category');
    if (catParam) {
      var pill = $('[data-category="' + catParam + '"]');
      if (pill) {
        $$('.filter-pill').forEach(function (p) { p.classList.remove('active'); p.setAttribute('aria-checked', 'false'); });
        pill.classList.add('active');
        pill.setAttribute('aria-checked', 'true');
        filterCelebrities();
      }
    }

    // Clear filters
    var clearBtn = $('#clearAllFilters');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        $$('.filter-pill').forEach(function (p) { p.classList.remove('active'); p.setAttribute('aria-checked', 'false'); });
        var allPill = $('[data-category="all"]');
        if (allPill) { allPill.classList.add('active'); allPill.setAttribute('aria-checked', 'true'); }
        if (eraFilter) eraFilter.value = 'all';
        if (sortOrder) sortOrder.value = 'featured';
        if (searchInput) searchInput.value = '';
        filterCelebrities();
      });
    }

    // Card click => modal
    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.celebrity-card');
      if (!card) return;
      var id = card.getAttribute('data-id');
      openCelebrityModal(id);
    });
  }

  function filterCelebrities() {
    var activePill = $('.filter-pill.active');
    var category = activePill ? activePill.getAttribute('data-category') : 'all';
    var eraFilter = $('#eraFilter');
    var era = eraFilter ? eraFilter.value : 'all';
    var sortOrder = $('#sortOrder');
    var sort = sortOrder ? sortOrder.value : 'featured';
    var searchInput = $('#celebritySearch');
    var query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    var filtered = DATA.celebrities.filter(function (c) {
      if (category !== 'all' && c.categories.indexOf(category) === -1) return false;
      if (era !== 'all') {
        var eraMatch = false;
        var ranges = {
          '1900s-1920s': [1900, 1929],
          '1930s-1950s': [1930, 1959],
          '1960s-1980s': [1960, 1989],
          '1990s-2000s': [1990, 2009],
          '2010s-2020s': [2010, 2029]
        };
        var range = ranges[era];
        if (range) {
          var eraStr = c.era;
          var match = eraStr.match(/(\d{4})/);
          if (match) {
            var year = parseInt(match[1]);
            eraMatch = year >= range[0] && year <= range[1];
          }
          // Also check connections
          if (!eraMatch) {
            for (var i = 0; i < c.connections.length; i++) {
              var cy = parseInt(c.connections[i].year);
              if (cy >= range[0] && cy <= range[1]) { eraMatch = true; break; }
            }
          }
        }
        if (!eraMatch) return false;
      }
      if (query && c.name.toLowerCase().indexOf(query) === -1) return false;
      return true;
    });

    if (sort === 'a-z') filtered.sort(function (a, b) { return a.name.localeCompare(b.name); });
    else if (sort === 'z-a') filtered.sort(function (a, b) { return b.name.localeCompare(a.name); });
    else if (sort === 'connections') filtered.sort(function (a, b) { return b.connections.length - a.connections.length; });

    renderCelebrityGrid(filtered);

    var count = $('#resultsCount');
    if (count) count.innerHTML = 'Showing <strong>' + filtered.length + '</strong> celebrities';

    var noResults = $('#noResults');
    if (noResults) {
      if (filtered.length === 0) { noResults.removeAttribute('hidden'); }
      else { noResults.setAttribute('hidden', ''); }
    }
  }

  function renderCelebrityGrid(celebs) {
    var grid = $('#celebrityGrid');
    if (!grid) return;
    var html = '';
    celebs.forEach(function (c) {
      var badges = c.categories.map(function (cat) {
        return '<span class="badge badge-' + cat + '">' + capitalize(cat) + '</span>';
      }).join('');
      html += '<article class="celebrity-card animate-on-scroll visible" data-id="' + c.id + '" data-categories="' + c.categories.join(',') + '" role="listitem" tabindex="0" aria-label="' + escapeHTML(c.name) + '">'
        + '<div class="celebrity-avatar" style="background-color:' + c.color + ';">'
        + '<span class="avatar-initials">' + escapeHTML(c.initials) + '</span></div>'
        + '<div class="celebrity-info">'
        + '<h3 class="celebrity-name">' + escapeHTML(c.name) + '</h3>'
        + '<p class="celebrity-era">' + escapeHTML(c.era) + ' &middot; ' + escapeHTML(c.nationality) + '</p>'
        + '<div class="celebrity-categories">' + badges + '</div>'
        + '<p class="celebrity-connections">' + c.connections.length + ' Paris connections</p>'
        + '</div></article>';
    });
    grid.innerHTML = html;
  }

  // ── Celebrity Modal ─────────────────────────────────────────
  function openCelebrityModal(id) {
    var c = DATA.getCelebrity(id);
    if (!c) return;
    var modal = $('#celebrityModal');
    if (!modal) return;

    var badges = c.categories.map(function (cat) {
      return '<span class="badge badge-' + cat + '">' + capitalize(cat) + '</span>';
    }).join('');

    var connectionsHTML = '';
    c.connections.forEach(function (conn) {
      connectionsHTML += '<li class="connection-item">'
        + '<span class="connection-year">' + escapeHTML(conn.year) + '</span>'
        + '<div class="connection-detail">'
        + '<strong class="connection-venue">' + escapeHTML(conn.venue) + '</strong>'
        + '<p class="connection-description">' + escapeHTML(conn.description) + '</p>'
        + '<cite class="connection-source">Source: ' + escapeHTML(conn.source) + '</cite>'
        + '</div></li>';
    });

    var quoteHTML = '';
    if (c.quote) {
      quoteHTML = '<blockquote class="profile-quote"><p>"' + escapeHTML(c.quote) + '"</p><cite>&mdash; ' + escapeHTML(c.name) + '</cite></blockquote>';
    }

    var profile = $('#celebrityProfile');
    profile.innerHTML = '<div class="profile-header">'
      + '<div class="profile-avatar" style="background-color:' + c.color + ';">'
      + '<span class="avatar-initials avatar-initials--large">' + escapeHTML(c.initials) + '</span></div>'
      + '<div class="profile-heading">'
      + '<h2 id="modalCelebName" class="profile-name">' + escapeHTML(c.name) + '</h2>'
      + '<p class="profile-meta">' + escapeHTML(c.era) + ' &middot; ' + escapeHTML(c.nationality) + '</p>'
      + '<div class="profile-badges">' + badges + '</div>'
      + '</div></div>'
      + quoteHTML
      + '<section class="profile-connections"><h3>Paris Connections</h3>'
      + '<ul class="connections-list">' + connectionsHTML + '</ul></section>';

    modal.removeAttribute('hidden');
    modal.style.display = 'flex';
  }

  function initCelebrityModal() {
    var modal = $('#celebrityModal');
    if (!modal) return;
    var closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        modal.setAttribute('hidden', '');
        modal.style.display = 'none';
      });
    }
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.setAttribute('hidden', '');
        modal.style.display = 'none';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
        modal.setAttribute('hidden', '');
        modal.style.display = 'none';
      }
    });
  }

  // ── Venue Grid (Venues Page) ────────────────────────────────
  function initVenueGrid() {
    var grid = $('#venueGrid');
    if (!grid) return;

    renderVenueGrid(DATA.venues);

    // Expose filter function for inline scripts
    window.appFilterVenues = function () {
      var typeBtn = $('.type-filters button.active');
      var type = typeBtn ? typeBtn.getAttribute('data-type') : 'all';
      var arrFilter = $('#arrondissementFilter');
      var arr = arrFilter ? arrFilter.value : 'all';
      var sortSelect = $('#sortSelect');
      var sort = sortSelect ? sortSelect.value : 'featured';
      var searchInput = $('#venueSearch');
      var query = searchInput ? searchInput.value.trim().toLowerCase() : '';

      var typeMap = {
        hotel: 'Hotel', cafe: 'Cafe', museum: 'Museum', theater: 'Theater',
        fashion: 'Fashion House', monument: 'Monument', cemetery: 'Cemetery', restaurant: 'Restaurant'
      };

      var filtered = DATA.venues.filter(function (v) {
        if (type !== 'all') {
          var mapped = typeMap[type] || type;
          if (v.type !== mapped) return false;
        }
        if (arr !== 'all' && v.arrondissement !== parseInt(arr)) return false;
        if (query && v.name.toLowerCase().indexOf(query) === -1 && v.type.toLowerCase().indexOf(query) === -1) return false;
        return true;
      });

      if (sort === 'az') filtered.sort(function (a, b) { return a.name.localeCompare(b.name); });
      else if (sort === 'prestige') filtered.sort(function (a, b) { return b.prestige - a.prestige; });
      else if (sort === 'visitors') filtered.sort(function (a, b) { return b.celebrityVisitors.length - a.celebrityVisitors.length; });

      renderVenueGrid(filtered);
      var countEl = $('#venueCount');
      if (countEl) countEl.textContent = filtered.length + ' venues';
    };

    var countEl = $('#venueCount');
    if (countEl) countEl.textContent = DATA.venues.length + ' venues';
  }

  function renderVenueGrid(venueList) {
    var grid = $('#venueGrid');
    if (!grid) return;
    var html = '';
    venueList.forEach(function (v) {
      var icons = { Hotel: '🏨', Cafe: '☕', Museum: '🏛️', Theater: '🎭', 'Fashion House': '👗', Monument: '🗼', Cemetery: '⚰️', Restaurant: '🍽️' };
      var icon = icons[v.type] || '📍';
      html += '<div class="venue-card" data-id="' + v.id + '" tabindex="0">'
        + '<div class="venue-card-top"><span class="venue-icon">' + icon + '</span>'
        + '<span class="venue-type-badge">' + escapeHTML(v.type) + '</span></div>'
        + '<h3>' + escapeHTML(v.name) + '</h3>'
        + '<p class="venue-address">' + escapeHTML(v.address) + '</p>'
        + '<div class="venue-prestige"><div class="venue-prestige-label"><span>Prestige</span><span>' + v.prestige + '/100</span></div>'
        + '<div class="prestige-bar"><div class="prestige-bar-fill" style="width:' + v.prestige + '%;"></div></div></div>'
        + '<div class="venue-meta"><span>' + v.celebrityVisitors.length + ' celebrity visitors</span></div>'
        + '</div>';
    });
    grid.innerHTML = html;

    // Venue card click => modal
    $$('.venue-card', grid).forEach(function (card) {
      card.addEventListener('click', function () {
        var id = this.getAttribute('data-id');
        openVenueModal(id);
      });
    });
  }

  function openVenueModal(id) {
    var v = DATA.getVenue(id);
    if (!v) return;
    var modal = $('#venueModal');
    if (!modal) return;

    var nameEl = $('#modalVenueName');
    var typeEl = $('#modalVenueType');
    var addrEl = $('#modalVenueAddress');
    var descEl = $('#modalVenueDescription');
    var fillEl = $('#modalPrestigeFill');
    var listEl = $('#modalVisitorList');

    if (nameEl) nameEl.textContent = v.name;
    if (typeEl) typeEl.textContent = v.type;
    if (addrEl) addrEl.textContent = v.address;
    if (descEl) descEl.textContent = v.description;
    if (fillEl) fillEl.style.width = v.prestige + '%';

    if (listEl) {
      var html = '';
      v.celebrityVisitors.forEach(function (name) {
        html += '<li><span class="visitor-name">' + escapeHTML(name) + '</span></li>';
      });
      listEl.innerHTML = html || '<li>No documented visitors</li>';
    }

    modal.classList.add('active');
  }

  // ── Leaflet Maps ────────────────────────────────────────────
  function initHomeMap() {
    var mapEl = document.getElementById('homeMap');
    if (!mapEl || typeof L === 'undefined') return;

    var map = L.map('homeMap', { scrollWheelZoom: false }).setView([48.8566, 2.3522], 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      maxZoom: 19
    }).addTo(map);

    var goldIcon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="width:12px;height:12px;background:#d4af37;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>',
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    });

    DATA.venues.forEach(function (v) {
      if (v.lat && v.lng) {
        L.marker([v.lat, v.lng], { icon: goldIcon })
          .bindPopup('<strong>' + escapeHTML(v.name) + '</strong><br>' + escapeHTML(v.type) + '<br><small>' + escapeHTML(v.address) + '</small>')
          .addTo(map);
      }
    });

    setTimeout(function () { map.invalidateSize(); }, 300);
  }

  function initCelebrityMap() {
    var mapEl = document.getElementById('celebrityMap');
    if (!mapEl || typeof L === 'undefined') return;

    var map = L.map('celebrityMap').setView([48.8566, 2.3522], 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      maxZoom: 19
    }).addTo(map);

    var typeColors = {
      Hotel: '#E74C3C', Cafe: '#8B6914', Museum: '#2E86C1', Theater: '#8E44AD',
      'Fashion House': '#E91E9C', Monument: '#27AE60', Cemetery: '#7F8C8D', Restaurant: '#D4AC0D'
    };

    var markers = [];

    DATA.venues.forEach(function (v) {
      if (!v.lat || !v.lng) return;
      var color = typeColors[v.type] || '#d4af37';
      var icon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="width:14px;height:14px;background:' + color + ';border:2px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });

      var popupContent = '<strong>' + escapeHTML(v.name) + '</strong><br>'
        + '<em>' + escapeHTML(v.type) + '</em><br>'
        + '<small>' + escapeHTML(v.address) + '</small><br>'
        + '<small><strong>' + v.celebrityVisitors.length + '</strong> celebrity visitors</small>';

      var marker = L.marker([v.lat, v.lng], { icon: icon })
        .bindPopup(popupContent)
        .addTo(map);

      markers.push({ marker: marker, venue: v });

      marker.on('click', function () {
        var detail = $('#mapVenueDetail');
        if (detail) {
          detail.style.display = 'block';
          detail.innerHTML = '<h3 style="font-family:Playfair Display,serif;font-size:1.1rem;margin-bottom:0.25rem;">' + escapeHTML(v.name) + '</h3>'
            + '<p style="font-size:0.8rem;color:#d4af37;font-weight:600;text-transform:uppercase;margin-bottom:0.5rem;">' + escapeHTML(v.type) + '</p>'
            + '<p style="font-size:0.82rem;color:#888;margin-bottom:0.75rem;">' + escapeHTML(v.address) + '</p>'
            + '<p style="font-size:0.88rem;color:#555;line-height:1.6;margin-bottom:0.75rem;">' + escapeHTML(v.description) + '</p>'
            + '<p style="font-size:0.78rem;color:#888;"><strong>' + v.celebrityVisitors.length + '</strong> celebrity visitors: ' + v.celebrityVisitors.map(escapeHTML).join(', ') + '</p>';
        }
      });
    });

    // Build legend
    var legend = $('#mapLegend');
    if (legend) {
      var legendHTML = '';
      Object.keys(typeColors).forEach(function (type) {
        legendHTML += '<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.35rem;">'
          + '<div style="width:10px;height:10px;background:' + typeColors[type] + ';border-radius:50%;flex-shrink:0;"></div>'
          + '<span style="font-size:0.78rem;color:#555;">' + type + '</span></div>';
      });
      legend.innerHTML = '<h3>Legend</h3>' + legendHTML;
    }

    // Filter checkboxes
    var checkboxes = $$('.map-filters input[type="checkbox"]');
    checkboxes.forEach(function (cb) {
      cb.addEventListener('change', function () {
        var checkedTypes = [];
        var checkedCats = [];
        $$('.map-filters input[type="checkbox"]:checked').forEach(function (checked) {
          var val = checked.value;
          if (['Hotel', 'Café', 'Museum', 'Theater', 'Fashion House', 'Monument', 'Cemetery', 'Restaurant'].indexOf(val) !== -1) {
            checkedTypes.push(val === 'Café' ? 'Cafe' : val);
          } else {
            checkedCats.push(val);
          }
        });

        markers.forEach(function (m) {
          var typeMatch = checkedTypes.length === 0 || checkedTypes.indexOf(m.venue.type) !== -1;
          if (typeMatch) {
            map.addLayer(m.marker);
          } else {
            map.removeLayer(m.marker);
          }
        });
      });
    });

    // Search
    var mapSearch = $('#mapSearch');
    if (mapSearch) {
      mapSearch.addEventListener('input', function () {
        var q = this.value.trim().toLowerCase();
        markers.forEach(function (m) {
          var nameMatch = m.venue.name.toLowerCase().indexOf(q) !== -1;
          var visitorMatch = m.venue.celebrityVisitors.some(function (v) { return v.toLowerCase().indexOf(q) !== -1; });
          if (!q || nameMatch || visitorMatch) {
            map.addLayer(m.marker);
          } else {
            map.removeLayer(m.marker);
          }
        });
      });
    }

    // Sidebar toggle
    var sidebarToggle = $('#mapSidebarToggle');
    var sidebar = $('#mapSidebar');
    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
      });
    }

    setTimeout(function () { map.invalidateSize(); }, 300);
  }

  // Film page map
  function initFilmMap() {
    var mapEl = document.getElementById('filmLocationsMap');
    if (!mapEl || typeof L === 'undefined') return;

    var map = L.map('filmLocationsMap', { scrollWheelZoom: false }).setView([48.8566, 2.3522], 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      maxZoom: 19
    }).addTo(map);

    var filmLocations = [
      { name: 'Eiffel Tower (Funny Face)', lat: 48.8584, lng: 2.2945 },
      { name: 'Montmartre (Amelie, An American in Paris)', lat: 48.8867, lng: 2.3431 },
      { name: 'Shakespeare and Company (Midnight in Paris, Before Sunset)', lat: 48.8526, lng: 2.3471 },
      { name: 'Pont Alexandre III (Midnight in Paris)', lat: 48.8637, lng: 2.3136 },
      { name: 'Louvre (Funny Face, The Da Vinci Code)', lat: 48.8606, lng: 2.3376 },
      { name: 'Champs-Elysees (Breathless)', lat: 48.8698, lng: 2.3076 },
      { name: 'Le Grand Rex (Premieres)', lat: 48.8710, lng: 2.3478 },
      { name: 'Cinematheque Francaise', lat: 48.8365, lng: 2.3820 },
      { name: 'Musee Rodin (Midnight in Paris)', lat: 48.8554, lng: 2.3159 },
      { name: 'Gare Montparnasse (Hugo)', lat: 48.8414, lng: 2.3219 }
    ];

    var icon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="width:12px;height:12px;background:#8E44AD;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>',
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    });

    filmLocations.forEach(function (loc) {
      L.marker([loc.lat, loc.lng], { icon: icon })
        .bindPopup('<strong>' + escapeHTML(loc.name) + '</strong>')
        .addTo(map);
    });

    setTimeout(function () { map.invalidateSize(); }, 300);
  }

  // Venue page map preview
  function initVenueMapPreview() {
    var mapEl = document.getElementById('venueMapPreview');
    if (!mapEl || typeof L === 'undefined') return;

    mapEl.innerHTML = '';
    mapEl.style.height = '300px';

    var map = L.map('venueMapPreview', { scrollWheelZoom: false }).setView([48.8566, 2.3522], 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      maxZoom: 19
    }).addTo(map);

    var icon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="width:10px;height:10px;background:#d4af37;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>',
      iconSize: [10, 10],
      iconAnchor: [5, 5]
    });

    DATA.venues.forEach(function (v) {
      if (v.lat && v.lng) {
        L.marker([v.lat, v.lng], { icon: icon })
          .bindPopup('<strong>' + escapeHTML(v.name) + '</strong>')
          .addTo(map);
      }
    });

    setTimeout(function () { map.invalidateSize(); }, 300);
  }

  // ── Scroll Animations ───────────────────────────────────────
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
      $$('.animate-on-scroll').forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    $$('.animate-on-scroll').forEach(function (el) { observer.observe(el); });
  }

  // ── Back to Top ─────────────────────────────────────────────
  function initBackToTop() {
    var btn = $('#backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) btn.classList.add('visible');
      else btn.classList.remove('visible');
    });
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Newsletter Form ─────────────────────────────────────────
  function initNewsletter() {
    var form = $('#newsletterForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('.newsletter-input');
      if (input && input.value) {
        input.value = '';
        var btn = form.querySelector('.newsletter-btn');
        if (btn) {
          btn.textContent = 'Subscribed!';
          setTimeout(function () { btn.textContent = 'Subscribe'; }, 3000);
        }
      }
    });
  }

  // ── Contact Form ────────────────────────────────────────────
  function initContactForm() {
    var form = $('#contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.btn-primary');
      if (btn) {
        btn.textContent = 'Message Sent!';
        form.reset();
        setTimeout(function () { btn.textContent = 'Send Message'; }, 3000);
      }
    });
  }

  // ── Timeline Era Navigation ─────────────────────────────────
  function initTimelineNav() {
    var buttons = $$('.era-btn');
    if (buttons.length === 0) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        var era = this.getAttribute('data-era');
        var target = document.getElementById('era-' + era);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── Helpers ─────────────────────────────────────────────────
  function capitalize(str) {
    if (str === 'royalty-politics') return 'Royalty';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // ── Initialize Everything ───────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initSearch();
    initFeaturedCelebrities();
    initFeaturedVenues();
    initHomeFAQ();
    initCelebrityGrid();
    initCelebrityModal();
    initVenueGrid();
    initHomeMap();
    initCelebrityMap();
    initFilmMap();
    initVenueMapPreview();
    initScrollAnimations();
    initBackToTop();
    initNewsletter();
    initContactForm();
    initTimelineNav();
  });

})();
