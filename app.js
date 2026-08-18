'use strict';

/* ── Данные ──────────────────────────────────────────────────────────── */

const TG_USER = 'alex_xmos';

const ITEMS = [
  {
    id: 'drone', cat: ['Дроны', 'Drones'], price: 15000000,
    name: ['DJI Mini 5 Pro, полный комплект', 'DJI Mini 5 Pro, full kit'],
    cond: ['Отличное, летал пару раз', 'Excellent, flown a couple of times'],
    note: ['Пульт с экраном, три батареи, набор ND-фильтров, запасные пропеллеры и сумка.', 'Controller with screen, three batteries, ND filter set, spare propellers and bag.'],
    photos: ['drone-1', 'drone-2', 'drone-3'],
  },
  {
    id: 'laptop', sold: true, cat: ['Ноутбуки', 'Laptops'], price: 3000000,
    name: ['Lenovo Yoga Slim 7', 'Lenovo Yoga Slim 7'],
    cond: ['Удовлетворительное', 'Fair'],
    note: ['Intel Core i7, Evo, русская раскладка. Рабочий, но лучше брать как донор на запчасти.', 'Intel Core i7, Evo, Russian layout. Works, but better taken as a donor for parts.'],
    photos: ['laptop-1', 'laptop-2', 'laptop-3'],
  },
  {
    id: 'table', sold: true, cat: ['Массаж', 'Wellness'], price: 600000,
    name: ['Складной массажный стол', 'Foldable massage table'],
    cond: ['Отличное, использовался несколько раз', 'Excellent, used a few times'],
    note: ['Складывается в кейс, регулируемый подголовник и подлокотники.', 'Folds into a case, adjustable headrest and armrests.'],
    photos: ['table-1'],
  },
  {
    id: 'ux1', cat: ['Звук', 'Audio'], price: 700000,
    name: ['Аудиоинтерфейс Line 6 UX1', 'Line 6 UX1 audio interface'],
    cond: ['Хорошее', 'Good'],
    note: ['USB, вход для микрофона и инструмента, выход на наушники.', 'USB, mic and instrument inputs, headphone out.'],
    photos: ['ux1-1', 'ux1-2'],
  },
  {
    id: 'stomplab', sold: true, cat: ['Гитара', 'Guitar'], price: 450000,
    name: ['Педаль эффектов VOX StompLab', 'VOX StompLab multi-effects'],
    cond: ['Хорошее', 'Good'],
    note: ['Мультиэффект с тюнером, в комплекте блок питания.', 'Multi-effects with tuner, power supply included.'],
    photos: ['stomplab-1', 'stomplab-2'],
  },
  {
    id: 'webcam', cat: ['Электроника', 'Electronics'], price: 50000,
    name: ['Веб-камера Rapoo', 'Rapoo webcam'],
    cond: ['Хорошее', 'Good'],
    note: ['Со встроенной подсветкой, крепление на монитор.', 'Built-in ring light, clips onto a monitor.'],
    photos: ['webcam-1'],
  },
  {
    id: 'petbag', cat: ['Для питомцев', 'Pet'], price: 300000,
    name: ['Переноска Havana Pet Couture', 'Havana Pet Couture pet carrier'],
    cond: ['Отличное, использовалась несколько раз', 'Excellent, used a few times'],
    note: ['Рюкзак-переноска с принтом, лямки и наплечный ремень.', 'Backpack carrier with print, straps and shoulder belt.'],
    photos: ['petbag-1', 'petbag-2'],
  },
  {
    id: 'stand', sold: true, cat: ['Гитара', 'Guitar'], price: 50000, priceNote: ['за две', 'for both'],
    name: ['Две гитарные стойки', 'Two guitar stands'],
    cond: ['Хорошее', 'Good'],
    note: ['A-образная и складная, обе с мягкими упорами.', 'An A-frame and a folding one, both with padded rests.'],
    photos: ['stand-1'],
  },
  {
    id: 'cable', sold: true, cat: ['Гитара', 'Guitar'], price: 100000,
    name: ['Инструментальный кабель', 'Instrument cable'],
    cond: ['Отличное', 'Excellent'],
    note: ['Тканевая оплётка, прямой и угловой джек.', 'Braided sleeve, straight and angled jack.'],
    photos: ['cable-1'],
  },
];

const DETAILS = {
  drone: [[
    'Полный комплект DJI Mini 5 Pro: сам дрон, пульт с собственным экраном (телефон не нужен), три аккумулятора, зарядный хаб, кабели и сумка через плечо.',
    'В комплекте набор ND-фильтров в кейсе и запасные пропеллеры в заводской упаковке. Всё складывается в родную сумку, ничего не докупать.',
    'Летал пару раз, следов ударов и падений нет. Показываю в работе при встрече.',
  ], [
    'Complete DJI Mini 5 Pro kit: the drone, a controller with its own screen (no phone needed), three batteries, charging hub, cables and a shoulder bag.',
    'Includes an ND filter set in a case and spare propellers still in factory packaging. Everything fits in the original bag, nothing else to buy.',
    'Flown a couple of times, no crash or impact marks. Happy to demo it when we meet.',
  ]],
  laptop: [[
    'Lenovo Yoga Slim 7, Intel Core i7, платформа Intel Evo, русская раскладка клавиатуры.',
    'Ноутбук включается и работает, но состояние удовлетворительное: на корпусе следы использования. Беру честно — лучше рассматривать как донора на запчасти или как рабочую машину под простые задачи.',
    'Всё покажу и дам проверить перед покупкой.',
  ], [
    'Lenovo Yoga Slim 7, Intel Core i7, Intel Evo platform, Russian keyboard layout.',
    'It powers on and works, but the condition is fair: visible wear on the body. Honestly, it is best seen as a parts donor or a machine for light tasks.',
    'You can test it before buying.',
  ]],
  table: [[
    'Складной массажный стол: складывается пополам в кейс с ручкой, переносится одним человеком.',
    'В комплекте регулируемый подголовник с подковой, подлокотник и мягкие накладки. Обивка целая, без порезов и потёртостей.',
    'Использовался несколько раз, состояние отличное.',
  ], [
    'Foldable massage table: folds in half into a case with a handle, one person can carry it.',
    'Comes with an adjustable headrest with a face cradle, armrest and padded pieces. Upholstery is intact, no cuts or scuffs.',
    'Used a few times, excellent condition.',
  ]],
  ux1: [[
    'Line 6 UX1 — компактный USB-аудиоинтерфейс для записи гитары и микрофона.',
    'Входы для микрофона (XLR) и инструмента, линейные входы и выходы, выход на наушники, регуляторы усиления микрофона и общего уровня.',
    'Состояние хорошее, работает без нареканий.',
  ], [
    'Line 6 UX1 — a compact USB audio interface for recording guitar and vocals.',
    'Mic (XLR) and instrument inputs, line ins and outs, headphone output, mic gain and output knobs.',
    'Good condition, works without issues.',
  ]],
  stomplab: [[
    'VOX StompLab — гитарный мультиэффект в металлическом корпусе: перегрузы, модуляция, дилей, ревер и встроенный тюнер.',
    'Переключение банков двумя педалями, ручки категории, гейна и уровня. В комплекте оригинальный блок питания с европейской вилкой.',
    'Состояние хорошее, все ручки и педали работают.',
  ], [
    'VOX StompLab — a guitar multi-effects unit in a metal housing: drives, modulation, delay, reverb and a built-in tuner.',
    'Two footswitches for banks, knobs for category, gain and level. Original power supply with an EU plug included.',
    'Good condition, all knobs and switches work.',
  ]],
  webcam: [[
    'Веб-камера Rapoo со встроенной подсветкой вокруг объектива — удобно для созвонов в тёмной комнате.',
    'Крепление-клипса на монитор или ноутбук, подключение по USB, поворотное основание.',
    'Состояние хорошее, работает.',
  ], [
    'Rapoo webcam with a built-in ring light around the lens — useful for calls in a dim room.',
    'Clip mount for a monitor or laptop, USB connection, tilting base.',
    'Good condition, works.',
  ]],
  petbag: [[
    'Переноска-рюкзак Havana Pet Couture: плотная ткань с принтом, серая подкладка, отверстия для лап и молнии по бокам.',
    'Носится как рюкзак или на плече, есть регулируемые лямки и ремень, внутри крепление-карабин.',
    'Использовалась несколько раз, состояние отличное.',
  ], [
    'Havana Pet Couture backpack carrier: sturdy printed fabric, grey lining, leg openings and side zippers.',
    'Can be worn as a backpack or over the shoulder, adjustable straps and belt, safety clip inside.',
    'Used a few times, excellent condition.',
  ]],
  stand: [[
    'Две гитарные стойки: A-образная универсальная и складная на треноге, обе с мягкими упорами под корпус и гриф.',
    'Складываются плоско, влезают в чехол от гитары. Продаю парой.',
    'Состояние хорошее.',
  ], [
    'Two guitar stands: a universal A-frame and a folding tripod one, both with padded body and neck rests.',
    'They fold flat and fit into a guitar bag. Sold as a pair.',
    'Good condition.',
  ]],
  cable: [[
    'Инструментальный кабель в тканевой оплётке: один джек прямой, второй угловой — удобно для педалей и комбо.',
    'Оплётка целая, разъёмы без люфта, никаких трещин и шумов.',
    'Состояние отличное.',
  ], [
    'Instrument cable with a braided sleeve: one straight jack, one angled — handy for pedals and combos.',
    'Sleeve is intact, connectors are tight, no crackle or noise.',
    'Excellent condition.',
  ]],
};

const T = [{
  title: 'Продаю вещи, которые мне больше не нужны',
  lede: 'Личные вещи, которыми я пользовался сам: гитарное, звук, электроника, кое-что для дома. Всё в Чангу, забирать самовывозом.',
  pickupLabel: 'Локация', pickupValue: 'Чангу, самовывоз',
  priceLabel: 'Цены', contactLabel: 'Связь',
  itemsHeading: 'Что продаётся', sold: 'Продано',
  reserve: 'Забронировать', soldOut: 'Продано',
  negotiable: 'в рупиях, торг обсуждаем',
  condLabel: 'Состояние', close: 'Закрыть',
  mapHeading: 'Забрать в Чангу',
  mapBody: 'Точный адрес и время скину в Telegram. Обычно удобно днём, могу подождать вечера.',
  mapCta: 'Написать в Telegram',
  footerNote: 'Фото настоящие, сделаны на месте. Цены и наличие уточняйте в Telegram.',
  available: (n, s) => `${n} в наличии · ${s} продано`,
  tgPrefix: 'Привет! Ещё продаётся: ',
}, {
  title: 'Selling the things I no longer need',
  lede: 'Personal gear I used myself: guitar and audio stuff, electronics, a few household items. Everything is in Canggu, pickup only.',
  pickupLabel: 'Location', pickupValue: 'Canggu, pickup',
  priceLabel: 'Prices', contactLabel: 'Contact',
  itemsHeading: 'What is for sale', sold: 'Sold',
  reserve: 'Reserve', soldOut: 'Sold',
  negotiable: 'in rupiah, open to offers',
  condLabel: 'Condition', close: 'Close',
  mapHeading: 'Pickup in Canggu',
  mapBody: 'I send the exact address and time over Telegram. Daytime is usually easiest, evenings work too.',
  mapCta: 'Message on Telegram',
  footerNote: 'Real photos, taken on the spot. Ask about prices and availability on Telegram.',
  available: (n, s) => `${n} available · ${s} sold`,
  tgPrefix: 'Hi! Is this still available: ',
}];

/* ── Состояние ───────────────────────────────────────────────────────── */

const state = {
  lang: localStorage.getItem('lang') === 'en' ? 'en' : 'ru',
  idx: {},
  open: null,
};

const li = () => (state.lang === 'en' ? 1 : 0);
const t = () => T[li()];
const cur = (item) => state.idx[item.id] || 0;
const photoSrc = (name) => `images/${name}.jpg`;
const fmt = (n) => `${n.toLocaleString('ru-RU').replace(/\u00A0/g, ' ')} IDR`;

const priceText = (item) =>
  fmt(item.price) + (item.priceNote ? ` ${item.priceNote[li()]}` : '');

const tgLink = (item) =>
  `https://t.me/${TG_USER}?text=${encodeURIComponent(`${t().tgPrefix}${item.name[li()]}?`)}`;

/* ── Рендер ──────────────────────────────────────────────────────────── */

const mediaHtml = (item, lazy) => {
  const dots = item.photos.map((_, n) =>
    `<button type="button" class="dot${n === cur(item) ? ' is-active' : ''}" data-action="dot" data-id="${item.id}" data-n="${n}" aria-label="${n + 1}"></button>`
  ).join('');
  const nav = item.photos.length > 1 ? `
    <button type="button" class="media-nav media-nav--prev" data-action="prev" data-id="${item.id}" aria-label="←">‹</button>
    <button type="button" class="media-nav media-nav--next" data-action="next" data-id="${item.id}" aria-label="→">›</button>
    <div class="media-dots">${dots}</div>` : '';
  return `
    <div class="media" data-id="${item.id}">
      <img src="${photoSrc(item.photos[cur(item)])}" alt="${item.name[li()]}"${lazy ? ' loading="lazy"' : ''}>
      ${nav}
    </div>`;
};

const cardHtml = (item, position) => {
  const sold = !!item.sold;
  return `
  <article class="card${sold ? ' is-sold' : ''}" data-action="open" data-id="${item.id}">
    <div class="card-media-wrap">
      ${mediaHtml(item, position > 3)}
      ${sold ? `<span class="sold-badge">${t().sold}</span>` : ''}
    </div>
    <div class="card-body">
      <span class="card-category">${item.cat[li()]}</span>
      <h3 class="card-name">${item.name[li()]}</h3>
      <p class="card-note">${item.note[li()]}</p>
      <span class="card-cond">${t().condLabel}: ${item.cond[li()]}</span>
    </div>
    <div class="card-footer">
      <span class="card-price">${sold ? '—' : priceText(item)}</span>
      <a class="card-cta${sold ? ' is-sold' : ''}" href="${tgLink(item)}" target="_blank" rel="noopener" data-action="cta">${sold ? t().soldOut : t().reserve}</a>
    </div>
  </article>`;
};

const modalHtml = (item) => `
  <div class="modal" data-action="modal-box">
    <button type="button" class="modal-close" data-action="close" aria-label="${t().close}">×</button>
    ${mediaHtml(item, false)}
    <div class="modal-info">
      <span class="card-category">${item.cat[li()]}</span>
      <h3 class="modal-name">${item.name[li()]}</h3>
      <div class="modal-paragraphs">
        ${DETAILS[item.id][li()].map((p) => `<p>${p}</p>`).join('')}
      </div>
      <div class="modal-footer">
        <div class="modal-price-block">
          <span class="modal-price">${priceText(item)}</span>
          <span class="modal-cond">${t().condLabel}: ${item.cond[li()]}</span>
        </div>
        <a class="btn-primary" href="${tgLink(item)}" target="_blank" rel="noopener">${t().reserve}</a>
      </div>
    </div>
  </div>`;

function render() {
  document.documentElement.lang = state.lang;

  document.querySelectorAll('[data-t]').forEach((el) => {
    const key = el.dataset.t;
    if (t()[key]) el.textContent = t()[key];
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === state.lang);
  });

  const live = ITEMS.filter((x) => !x.sold);
  document.getElementById('available-text').textContent =
    t().available(live.length, ITEMS.length - live.length);

  document.getElementById('grid').innerHTML =
    ITEMS.map((item, n) => cardHtml(item, n)).join('');

  const modal = document.getElementById('modal');
  const openItem = ITEMS.find((x) => x.id === state.open);
  modal.hidden = !openItem;
  modal.innerHTML = openItem ? modalHtml(openItem) : '';
  document.body.classList.toggle('modal-open', !!openItem);
}

function setState(patch) {
  Object.assign(state, patch);
  if (patch.lang) localStorage.setItem('lang', patch.lang);
  render();
}

/* ── События ─────────────────────────────────────────────────────────── */

function go(id, n) {
  const item = ITEMS.find((x) => x.id === id);
  const len = item.photos.length;
  setState({ idx: { ...state.idx, [id]: ((n % len) + len) % len } });
}

/* Свайп по фото: горизонтальный жест листает карусель и гасит последующий click */
let swipeStart = null;
let swiped = false;

document.addEventListener('pointerdown', (e) => {
  const media = e.target.closest('.media');
  swipeStart = media ? { x: e.clientX, y: e.clientY, id: media.dataset.id } : null;
});

document.addEventListener('pointerup', (e) => {
  if (!swipeStart) return;
  const dx = e.clientX - swipeStart.x;
  const dy = e.clientY - swipeStart.y;
  const item = ITEMS.find((x) => x.id === swipeStart.id);
  if (item && item.photos.length > 1 && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    swiped = true;
    setTimeout(() => { swiped = false; }, 100);
    go(swipeStart.id, cur(item) + (dx < 0 ? 1 : -1));
  }
  swipeStart = null;
});

document.addEventListener('click', (e) => {
  if (swiped) {
    swiped = false;
    e.stopPropagation();
    e.preventDefault();
    return;
  }
  const langBtn = e.target.closest('.lang-btn');
  if (langBtn) return setState({ lang: langBtn.dataset.lang });

  const el = e.target.closest('[data-action]');

  if (!el) {
    if (e.target.closest('#modal') && !e.target.closest('.modal')) setState({ open: null });
    return;
  }

  const { action, id } = el.dataset;
  switch (action) {
    case 'prev': e.stopPropagation(); go(id, cur({ id }) - 1); break;
    case 'next': e.stopPropagation(); go(id, cur({ id }) + 1); break;
    case 'dot': e.stopPropagation(); go(id, Number(el.dataset.n)); break;
    case 'cta': e.stopPropagation(); break;
    case 'open': setState({ open: id }); break;
    case 'close': setState({ open: null }); break;
    default: break;
  }
}, true);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.open) setState({ open: null });
});

render();
