/**
 * Product catalog data.
 * To add a product: add an entry here — it will appear automatically on the Products page.
 *
 * Fields:
 *   id        – unique string ID
 *   emoji     – emoji icon (fallback when no image)
 *   image     – photo URL (use null to show emoji placeholder)
 *   thumbBg   – CSS background color for thumbnail area
 *   group     – filter category ID (must match PRODUCT_GROUPS key)
 *   cat       – category label (multilingual)
 *   title     – product name (multilingual)
 *   desc      – short description (multilingual)
 *   specs     – array of [key, value] specification rows (multilingual)
 */

import productionPhoto from '../assets/images/production-photo.jpg';
const LUMBER_IMG = productionPhoto;

export const PRODUCT_GROUPS = {
  all:       { ru: 'Все',              en: 'All',           by: 'Усе'              },
  lumber:    { ru: 'Пиломатериалы',    en: 'Lumber',        by: 'Піламатэрыялы'    },
  special:   { ru: 'Специальные',      en: 'Special',       by: 'Спецыяльныя'      },
  fuel:      { ru: 'Энергоносители',   en: 'Fuel',          by: 'Паліва'           },
  byproduct: { ru: 'Отходы / сырьё',   en: 'By-products',   by: 'Адходы / сыравіна'},
};

export const PRODUCTS = [
  {
    id: 'sawn-board',
    emoji: '🪵',
    image: LUMBER_IMG,
    thumbBg: '#E8DCC8',
    group: 'lumber',
    cat:   { ru: 'Пиломатериалы',    en: 'Lumber',           by: 'Піламатэрыялы'   },
    title: { ru: 'Доска обрезная',   en: 'Sawn Timber Board', by: 'Абрэзная дошка'  },
    desc: {
      ru: 'Обрезные доски из сосны хвойных пород. Применяются в строительстве, производстве мебели, упаковки и тары.',
      en: 'Sawn pine boards for construction, furniture manufacturing, packaging and crating.',
      by: 'Абрэзныя дошкі з хваі. Прымяняюцца ў будаўніцтве, вытворчасці мэблі і тары.',
    },
    specs: {
      ru: [['Порода', 'Сосна'], ['Толщина', '16–100 мм'], ['Ширина', '75–250 мм'], ['Длина', '3–6 м'], ['Влажность', '12–22%']],
      en: [['Species', 'Pine'], ['Thickness', '16–100 mm'], ['Width', '75–250 mm'], ['Length', '3–6 m'], ['Moisture', '12–22%']],
      by: [['Парода', 'Хваёвая'], ['Таўшчыня', '16–100 мм'], ['Шырыня', '75–250 мм'], ['Даўжыня', '3–6 м'], ['Вільготнасць', '12–22%']],
    },
  },
  {
    id: 'beam',
    emoji: '📐',
    image: LUMBER_IMG,
    thumbBg: '#DDD0B8',
    group: 'lumber',
    cat:   { ru: 'Пиломатериалы',    en: 'Lumber',          by: 'Піламатэрыялы'    },
    title: { ru: 'Брус строительный', en: 'Construction Beam', by: 'Будаўнічы брус' },
    desc: {
      ru: 'Строительный брус из сосны для каркасного строительства, домов из бруса, перекрытий и стропил.',
      en: 'Pine construction beams for frame buildings, log houses, floors and roof trusses.',
      by: 'Будаўнічы брус з хваі для каркасных дамоў, перакрыццяў і стрэх.',
    },
    specs: {
      ru: [['Порода', 'Сосна'], ['Сечение', '100×100, 100×150, 150×150, 200×200'], ['Длина', '3–6 м'], ['Влажность', 'Натуральная / Сухая']],
      en: [['Species', 'Pine'], ['Section', '100×100, 100×150, 150×150, 200×200'], ['Length', '3–6 m'], ['Moisture', 'Natural / Dried']],
      by: [['Парода', 'Хваёвая'], ['Перасек', '100×100, 100×150, 150×150, 200×200'], ['Даўжыня', '3–6 м']],
    },
  },
  {
    id: 'sleeper',
    emoji: '🚂',
    image: null,
    thumbBg: '#C8B898',
    group: 'special',
    cat:   { ru: 'Специальные изделия', en: 'Special Products', by: 'Спецвырабы'    },
    title: { ru: 'Шпала деревянная',    en: 'Wooden Sleeper',   by: 'Драўляная шпала'},
    desc: {
      ru: 'Деревянные шпалы для железнодорожных путей промышленного и узкоколейного применения. ГОСТ 78-2004.',
      en: 'Wooden railway sleepers for industrial and narrow-gauge tracks. GOST 78-2004.',
      by: 'Драўляныя шпалы для чыгунак прамысловага і вузкакалейнага прымянення.',
    },
    specs: {
      ru: [['Порода', 'Сосна'], ['Тип', '1, 2, 3 (ГОСТ 78-2004)'], ['Длина', '2,75 м']],
      en: [['Species', 'Pine'], ['Type', '1, 2, 3 (GOST 78-2004)'], ['Length', '2.75 m']],
      by: [['Парода', 'Хваёвая'], ['Тып', '1, 2, 3 (ДАСТ 78-2004)'], ['Даўжыня', '2,75 м']],
    },
  },
  {
    id: 'pallet-board',
    emoji: '📦',
    image: LUMBER_IMG,
    thumbBg: '#E0D4BC',
    group: 'lumber',
    cat:   { ru: 'Пиломатериалы',   en: 'Lumber',        by: 'Піламатэрыялы'   },
    title: { ru: 'Паллетная доска', en: 'Pallet Board',  by: 'Паддонная дошка' },
    desc: {
      ru: 'Доска для производства деревянных паллет и поддонов. Стандартные и нестандартные размеры под заказ.',
      en: 'Boards for manufacturing wooden pallets. Standard and custom dimensions available.',
      by: 'Дошка для вытворчасці драўляных паддонаў. Стандартныя і нестандартныя памеры.',
    },
    specs: {
      ru: [['Порода', 'Сосна'], ['Толщина', '20–22 мм'], ['Ширина', '75–145 мм'], ['Длина', '0,8–1,2 м']],
      en: [['Species', 'Pine'], ['Thickness', '20–22 mm'], ['Width', '75–145 mm'], ['Length', '0.8–1.2 m']],
      by: [['Парода', 'Хваёвая'], ['Таўшчыня', '20–22 мм'], ['Шырыня', '75–145 мм'], ['Даўжыня', '0,8–1,2 м']],
    },
  },
  {
    id: 'waney-slab',
    emoji: '🪨',
    image: null,
    thumbBg: '#C8B890',
    group: 'byproduct',
    cat:   { ru: 'Отходы / сырьё', en: 'By-products', by: 'Адходы / сыравіна' },
    title: { ru: 'Горбыль',        en: 'Waney-edge Slab', by: 'Горбыль'        },
    desc: {
      ru: 'Горбыль — боковая часть бревна с необрезанной стороной. Используется как топливо или для черновых работ.',
      en: 'Waney-edge slab — the outer cut of a log. Used as fuel or for rough carpentry.',
      by: 'Горбыль — бакавая частка бервяна з неабрэзаным краем. Выкарыстоўваецца як паліва.',
    },
    specs: {
      ru: [['Порода', 'Сосна'], ['Применение', 'Топливо, черновые работы'], ['Поставка', 'Насыпью / в пачках']],
      en: [['Species', 'Pine'], ['Use', 'Fuel, rough work'], ['Supply', 'Bulk / bundled']],
      by: [['Парода', 'Хваёвая'], ['Ужыванне', 'Паліва, чарнавыя работы'], ['Пастаўка', 'Насыпам']],
    },
  },
  {
    id: 'charcoal',
    emoji: '🔥',
    image: null,
    thumbBg: '#2A2A2A',
    group: 'fuel',
    cat:   { ru: 'Энергоносители',  en: 'Fuel',           by: 'Паліва'           },
    title: { ru: 'Уголь древесный', en: 'Charcoal',       by: 'Драўляны вугаль'  },
    desc: {
      ru: 'Высококалорийный уголь из лиственных пород. Подходит для металлургии, ресторанов и домашних мангалов.',
      en: 'High-calorie charcoal from hardwood. Suitable for metallurgy, restaurants and BBQ.',
      by: 'Высококалярыйны вугаль з ліставых парод. Падыходзіць для металургіі і барбекю.',
    },
    specs: {
      ru: [['Сырьё', 'Лиственные породы'], ['Калорийность', '≥ 29 МДж/кг'], ['Влажность', 'до 8%'], ['Фасовка', '5, 10, 25 кг / насыпью']],
      en: [['Raw material', 'Hardwood'], ['Calorific value', '≥ 29 MJ/kg'], ['Moisture', 'up to 8%'], ['Packing', '5, 10, 25 kg / bulk']],
      by: [['Сыравіна', 'Ліставыя пароды'], ['Калярыйнасць', '≥ 29 МДж/кг'], ['Вільготнасць', 'да 8%']],
    },
  },
  {
    id: 'wood-chips',
    emoji: '🌿',
    image: null,
    thumbBg: '#D8EAC8',
    group: 'byproduct',
    cat:   { ru: 'Отходы / сырьё',        en: 'By-products',         by: 'Адходы / сыравіна' },
    title: { ru: 'Щепа технологическая',  en: 'Technology Wood Chips', by: 'Тэхналагічная трэска'},
    desc: {
      ru: 'Технологическая щепа для целлюлозно-бумажной промышленности, биотоплива и производства ДСП.',
      en: 'Technology chips for paper industry, biofuel and chipboard production.',
      by: 'Тэхналагічная трэска для папяровай прамысловасці, біяпаліва і ДСП.',
    },
    specs: {
      ru: [['Порода', 'Сосна, смешанные'], ['Фракция', '15–30 мм'], ['Влажность', '40–55%'], ['Поставка', 'Насыпью, самосвалами']],
      en: [['Species', 'Pine, mixed'], ['Fraction', '15–30 mm'], ['Moisture', '40–55%'], ['Supply', 'Bulk, dump trucks']],
      by: [['Парода', 'Хваёвая, змяшаная'], ['Фракцыя', '15–30 мм'], ['Вільготнасць', '40–55%']],
    },
  },
  {
    id: 'sawdust',
    emoji: '🌾',
    image: null,
    thumbBg: '#EDE8C0',
    group: 'byproduct',
    cat:   { ru: 'Отходы / сырьё', en: 'By-products', by: 'Адходы / сыравіна' },
    title: { ru: 'Опилки',         en: 'Sawdust',     by: 'Тырса'             },
    desc: {
      ru: 'Свежие опилки хвойных пород — сырьё для пеллет, биотоплива, подстилки и производства ДСП.',
      en: 'Fresh pine sawdust — feedstock for pellets, biofuel, bedding and chipboard.',
      by: 'Свежая тырса хваёвых парод — сыравіна для гранул, біяпаліва і ДСП.',
    },
    specs: {
      ru: [['Порода', 'Сосна'], ['Влажность', '35–50%'], ['Поставка', 'Насыпью, спецтранспорт']],
      en: [['Species', 'Pine'], ['Moisture', '35–50%'], ['Supply', 'Bulk, special transport']],
      by: [['Парода', 'Хваёвая'], ['Вільготнасць', '35–50%'], ['Пастаўка', 'Насыпам']],
    },
  },
  {
    id: 'offcuts',
    emoji: '✂️',
    image: LUMBER_IMG,
    thumbBg: '#F0EAD8',
    group: 'byproduct',
    cat:   { ru: 'Отходы / сырьё', en: 'By-products', by: 'Адходы / сыравіна' },
    title: { ru: 'Рейки и обрезки', en: 'Battens & Offcuts', by: 'Рэйкі і абрэзкі' },
    desc: {
      ru: 'Рейки и обрезки от производства. Подходят для ограждений, тары, черновых строительных работ.',
      en: 'Production battens and offcuts. Suitable for fencing, crating and rough construction.',
      by: 'Рэйкі і абрэзкі ад вытворчасці. Падыходзяць для агароджаў і тары.',
    },
    specs: {
      ru: [['Порода', 'Сосна'], ['Сечение', 'Различное'], ['Длина', 'от 0,5 м']],
      en: [['Species', 'Pine'], ['Section', 'Various'], ['Length', 'from 0.5 m']],
      by: [['Парода', 'Хваёвая'], ['Перасек', 'Розны'], ['Даўжыня', 'ад 0,5 м']],
    },
  },
];
