/**
 * Vacancies data.
 * To add / remove a vacancy: edit this array.
 * Set requirements: [] for vacancies without requirements.
 */

export const VACANCIES = [
  {
    id: 'driver',
    title:    { ru: 'Водитель автомобиля', en: 'Car Driver', by: 'Кіроўца аўтамабіля' },
    type:     { ru: 'Полная занятость', en: 'Full-time',     by: 'Поўная занятасць' },
    location: { ru: 'г. Ельск',      en: 'Elsk, Belarus',   by: 'г. Ельск'         },
    category: { ru: 'Транспорт',     en: 'Transport',       by: 'Транспарт'        },
    desc: {
      ru: 'Управление большегрузным автомобилем для перевозки лесоматериалов по Беларуси и СНГ.',
      en: 'Driving heavy trucks to transport timber across Belarus and CIS countries.',
      by: 'Кіраванне аўтамабілем для перавозкі лесаматэрыялаў па Беларусі і СНД.',
    },
    requirements: {
      ru: ['Водительское удостоверение категории C, CE', 'Опыт вождения от 2 лет', 'Знание ПДД и техники безопасности'],
      en: ['Category C, CE driving licence', 'Driving experience 2+ years', 'Knowledge of traffic rules'],
      by: ['Пасведчанне катэгорыі C, CE', 'Досвед кіравання ад 2 гадоў', 'Веданне ПДР'],
    },
  },
  {
    id: 'boiler-operator',
    title:    { ru: 'Машинист (кочегар) котельной', en: 'Boiler Operator (Stoker)', by: 'Машыніст (качагар) кацельні' },
    type:     { ru: 'Полная занятость',     en: 'Full-time',        by: 'Поўная занятасць'    },
    location: { ru: 'г. Ельск',            en: 'Elsk, Belarus',    by: 'г. Ельск'             },
    category: { ru: 'Производство',         en: 'Production',       by: 'Вытворчасць'         },
    desc: {
      ru: 'Обслуживание котельного оборудования на производственном предприятии.',
      en: 'Operating and maintaining boiler equipment at the production facility.',
      by: 'Абслугоўванне кацельнага абсталявання на вытворчым прадпрыемстве.',
    },
    requirements: {
      ru: ['Удостоверение машиниста котельной', 'Ответственность и внимательность'],
      en: ['Boiler operator certificate', 'Reliability and attentiveness'],
      by: ['Пасведчанне машыніста кацельні', 'Адказнасць і ўважлівасць'],
    },
  },
  {
    id: 'tractor-driver',
    title:    { ru: 'Тракторист на подготовке лесосек, трелёвке, вывозке леса', en: 'Tractor Operator – Forest Clearing, Skidding & Haulage', by: 'Трактарыст на падрыхтоўцы лесасек, трэлёўцы, вывазцы лесу' },
    type:     { ru: 'Полная занятость',     en: 'Full-time',        by: 'Поўная занятасць'    },
    location: { ru: 'г. Ельск / Лесной массив', en: 'Elsk / Forest', by: 'г. Ельск / Лес'      },
    category: { ru: 'Заготовка',            en: 'Timber Harvesting','by': 'Нарыхтоўка'         },
    desc: {
      ru: 'Трелёвка и транспортировка лесоматериалов в лесных массивах Гомельской области.',
      en: 'Skidding and transporting timber in the forests of Gomel Oblast.',
      by: 'Трэлёўка і транспарціроўка лесаматэрыялаў у лясах Гомельскай вобласці.',
    },
    requirements: {
      ru: ['Права тракториста-машиниста', 'Опыт работы в лесозаготовке приветствуется', 'Физическая выносливость'],
      en: ['Tractor-machine operator licence', 'Timber harvesting experience preferred', 'Physical fitness'],
      by: ['Правы трактарыста-машыніста', 'Досвед у нарыхтоўцы лесу вітаецца'],
    },
  },
  {
    id: 'machine-operator',
    title:    { ru: 'Станочник деревообрабатывающих станков', en: 'Woodworking Machine Operator', by: 'Станочнік дрэваапрацоўчых станкоў' },
    type:     { ru: 'Полная занятость',     en: 'Full-time',        by: 'Поўная занятасць'    },
    location: { ru: 'г. Ельск',            en: 'Elsk, Belarus',    by: 'г. Ельск'             },
    category: { ru: 'Производство',         en: 'Production',       by: 'Вытворчасць'         },
    desc: {
      ru: 'Работа на деревообрабатывающем оборудовании лесопильного цеха.',
      en: 'Operating woodworking machinery in the sawmill workshop.',
      by: 'Праца на дрэваапрацоўчым абсталяванні лесапілавання.',
    },
    requirements: {
      ru: ['Профессиональное образование или опыт работы на станках', 'Внимательность, ответственность'],
      en: ['Vocational education or machine operation experience', 'Attentiveness and reliability'],
      by: ['Прафесійная адукацыя або вопыт работы на станках', 'Уважлівасць, адказнасць'],
    },
  },
  {
    id: 'builder',
    title:    { ru: 'Рабочий по комплексному обслуживанию и ремонту зданий и сооружений (строитель)', en: 'Building & Facility Maintenance Worker', by: 'Рабочы па комплексным абслугоўванні і рамонце будынкаў і збудаванняў' },
    type:     { ru: 'Полная занятость',       en: 'Full-time',           by: 'Поўная занятасць'     },
    location: { ru: 'г. Ельск',              en: 'Elsk, Belarus',       by: 'г. Ельск'              },
    category: { ru: 'Строительство',          en: 'Construction',        by: 'Будаўніцтва'          },
    desc: {
      ru: 'Строительство и техническое обслуживание производственных объектов предприятия.',
      en: 'Construction and maintenance of industrial facilities on site.',
      by: 'Будаўніцтва і тэхнічнае абслугоўванне вытворчых аб\'ектаў.',
    },
    requirements: {
      ru: ['Опыт строительно-монтажных работ'],
      en: ['Construction/installation experience'],
      by: ['Досвед будаўнічых работ'],
    },
  },
  {
    id: 'general-worker',
    title:    { ru: 'Подсобный рабочий',   en: 'General Worker',  by: 'Падсобны рабочы'     },
    type:     { ru: 'Полная занятость',    en: 'Full-time',       by: 'Поўная занятасць'    },
    location: { ru: 'г. Ельск',           en: 'Elsk, Belarus',   by: 'г. Ельск'             },
    category: { ru: 'Производство',        en: 'Production',      by: 'Вытворчасць'         },
    desc: {
      ru: 'Вспомогательные работы на производстве: сортировка, укладка, уборка территории.',
      en: 'Auxiliary production tasks: sorting, stacking, site maintenance.',
      by: 'Дапаможныя работы на вытворчасці: сартаванне, укладка, уборка тэрыторыі.',
    },
    requirements: {
      ru: [],  /* no specific requirements */
      en: [],
      by: [],
    },
  },
];

export const BENEFITS = [
  {
    emoji: '📋',
    title: { ru: 'Официальное трудоустройство', en: 'Official Employment',  by: 'Афіцыйнае ўладкаванне' },
    text:  { ru: 'Трудовой договор, запись в трудовую книжку, полный соцпакет.',
             en: 'Employment contract, work record entry, full social package.',
             by: 'Працоўны дагавор, запіс у працоўную кніжку, поўны сацпакет.' },
  },
  {
    emoji: '🚌',
    title: { ru: 'Служебные перевозки',  en: 'Work Transport',      by: 'Службовыя перавозкі'  },
    text:  { ru: 'Организованная доставка сотрудников на работу и обратно.',
             en: 'Organized commute to/from work.',
             by: 'Арганізаваная дастаўка супрацоўнікаў на работу і назад.' },
  },
  {
    emoji: '🛡️',
    title: { ru: 'Страхование',          en: 'Insurance',           by: 'Страхаванне'          },
    text:  { ru: 'Добровольное медицинское страхование и страхование жизни.',
             en: 'Voluntary medical and life insurance.',
             by: 'Добраахвотнае медыцынскае страхаванне і страхаванне жыцця.' },
  },
  {
    emoji: '👷',
    title: { ru: 'Спецодежда и СИЗ',    en: 'PPE & Workwear',      by: 'Спецвопратка і СІЗ'   },
    text:  { ru: 'Полный комплект спецодежды и средств индивидуальной защиты за счёт предприятия.',
             en: 'Full set of workwear and personal protective equipment at company expense.',
             by: 'Поўны камплект спецвопраткі і сродкаў абароны за кошт прадпрыемства.' },
  },
  {
    emoji: '🎓',
    title: { ru: 'Бесплатное обучение', en: 'Free Training',        by: 'Бясплатнае навучанне' },
    text:  { ru: 'Повышение квалификации и обучение за счёт компании.',
             en: 'Professional development and training at company expense.',
             by: 'Павышэнне кваліфікацыі і навучанне за кошт кампаніі.' },
  },
  {
    emoji: '📈',
    title: { ru: 'Карьерный рост',      en: 'Career Growth',        by: 'Кар\'ерны рост'       },
    text:  { ru: 'Возможность профессионального развития и карьерного роста внутри компании.',
             en: 'Opportunities for professional development and internal career growth.',
             by: 'Магчымасць прафесійнага развіцця і кар\'ернага росту ўнутры кампаніі.' },
  },
];
