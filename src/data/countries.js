/**
 * Partner countries and export geography data.
 * To add a new country: add an entry to PARTNER_COUNTRIES and COUNTRY_NAMES.
 *
 * ISO 3166-1 numeric codes are used as map IDs (stored as plain numbers in topojson).
 * Home country (Belarus) = 112
 */

export const HOME_COUNTRY_ID = 112;

/** IDs of all partner countries (excluding home) */
export const PARTNER_COUNTRY_IDS = new Set([643, 156, 792, 364, 31, 268, 860, 762]);

/** Full partner country list — displayed in the geography section */
export const PARTNER_COUNTRIES = [
  { id: 112, name: { ru: 'Беларусь',     en: 'Belarus',      by: 'Беларусь'     }, flag: '🇧🇾', home: true  },
  { id: 643, name: { ru: 'Россия',       en: 'Russia',       by: 'Расія'        }, flag: '🇷🇺', home: false },
  { id: 156, name: { ru: 'Китай',        en: 'China',        by: 'Кітай'        }, flag: '🇨🇳', home: false },
  { id: 792, name: { ru: 'Турция',       en: 'Turkey',       by: 'Турцыя'       }, flag: '🇹🇷', home: false },
  { id: 364, name: { ru: 'Иран',         en: 'Iran',         by: 'Іран'         }, flag: '🇮🇷', home: false },
  { id: 31,  name: { ru: 'Азербайджан',  en: 'Azerbaijan',   by: 'Азербайджан'  }, flag: '🇦🇿', home: false },
  { id: 268, name: { ru: 'Грузия',       en: 'Georgia',      by: 'Грузія'       }, flag: '🇬🇪', home: false },
  { id: 860, name: { ru: 'Узбекистан',   en: 'Uzbekistan',   by: 'Узбекістан'   }, flag: '🇺🇿', home: false },
  { id: 762, name: { ru: 'Таджикистан',  en: 'Tajikistan',   by: 'Таджыкістан'  }, flag: '🇹🇯', home: false },
];

/** Map coordinates [longitude, latitude] for marker pins */
export const COUNTRY_COORDS = {
  112: [27.95,  53.71],
  643: [37.61,  55.75],
  156: [116.40, 39.90],
  792: [32.86,  39.93],
  364: [51.38,  35.68],
  31:  [49.86,  40.40],
  268: [44.79,  41.69],
  860: [69.24,  41.29],
  762: [68.77,  38.55],
};

/**
 * Country name lookup by ISO numeric ID.
 * Used for map hover tooltip. Add / edit entries freely.
 * Key = numeric ISO 3166-1 code (as number).
 */
export const COUNTRY_NAMES = {
  /* ── CIS / Eastern Europe ─────────────────── */
  112: { ru: 'Беларусь',           en: 'Belarus',               by: 'Беларусь'            },
  643: { ru: 'Россия',             en: 'Russia',                by: 'Расія'               },
  804: { ru: 'Украина',            en: 'Ukraine',               by: 'Украіна'             },
  398: { ru: 'Казахстан',          en: 'Kazakhstan',            by: 'Казахстан'           },
  860: { ru: 'Узбекистан',         en: 'Uzbekistan',            by: 'Узбекістан'          },
  762: { ru: 'Таджикистан',        en: 'Tajikistan',            by: 'Таджыкістан'         },
  795: { ru: 'Туркменистан',       en: 'Turkmenistan',          by: 'Туркменістан'        },
  417: { ru: 'Кыргызстан',         en: 'Kyrgyzstan',            by: 'Кіргізстан'          },
  31:  { ru: 'Азербайджан',        en: 'Azerbaijan',            by: 'Азербайджан'         },
  51:  { ru: 'Армения',            en: 'Armenia',               by: 'Арменія'             },
  268: { ru: 'Грузия',             en: 'Georgia',               by: 'Грузія'              },
  498: { ru: 'Молдова',            en: 'Moldova',               by: 'Малдова'             },
  233: { ru: 'Эстония',            en: 'Estonia',               by: 'Эстонія'             },
  428: { ru: 'Латвия',             en: 'Latvia',                by: 'Латвія'              },
  440: { ru: 'Литва',              en: 'Lithuania',             by: 'Літва'               },
  616: { ru: 'Польша',             en: 'Poland',                by: 'Польшча'             },
  203: { ru: 'Чехия',              en: 'Czech Republic',        by: 'Чэхія'               },
  703: { ru: 'Словакия',           en: 'Slovakia',              by: 'Славакія'            },
  348: { ru: 'Венгрия',            en: 'Hungary',               by: 'Венгрыя'             },
  642: { ru: 'Румыния',            en: 'Romania',               by: 'Румынія'             },
  100: { ru: 'Болгария',           en: 'Bulgaria',              by: 'Балгарыя'            },
  191: { ru: 'Хорватия',           en: 'Croatia',               by: 'Харватыя'            },
  688: { ru: 'Сербия',             en: 'Serbia',                by: 'Сербія'              },
  /* ── Western / Northern Europe ──────────────── */
  276: { ru: 'Германия',           en: 'Germany',               by: 'Германія'            },
  250: { ru: 'Франция',            en: 'France',                by: 'Францыя'             },
  826: { ru: 'Великобритания',     en: 'United Kingdom',        by: 'Вялікабрытанія'      },
  380: { ru: 'Италия',             en: 'Italy',                 by: 'Італія'              },
  724: { ru: 'Испания',            en: 'Spain',                 by: 'Іспанія'             },
  620: { ru: 'Португалия',         en: 'Portugal',              by: 'Партугалія'          },
  528: { ru: 'Нидерланды',         en: 'Netherlands',           by: 'Нідэрланды'          },
  56:  { ru: 'Бельгия',            en: 'Belgium',               by: 'Бельгія'             },
  756: { ru: 'Швейцария',          en: 'Switzerland',           by: 'Швейцарыя'           },
  40:  { ru: 'Австрия',            en: 'Austria',               by: 'Аўстрыя'             },
  208: { ru: 'Дания',              en: 'Denmark',               by: 'Данія'               },
  752: { ru: 'Швеция',             en: 'Sweden',                by: 'Швецыя'              },
  578: { ru: 'Норвегия',           en: 'Norway',                by: 'Нарвегія'            },
  246: { ru: 'Финляндия',          en: 'Finland',               by: 'Фінляндыя'           },
  372: { ru: 'Ирландия',           en: 'Ireland',               by: 'Ірландыя'            },
  300: { ru: 'Греция',             en: 'Greece',                by: 'Грэцыя'              },
  /* ── Middle East ─────────────────────────────── */
  792: { ru: 'Турция',             en: 'Turkey',                by: 'Турцыя'              },
  364: { ru: 'Иран',               en: 'Iran',                  by: 'Іран'                },
  368: { ru: 'Ирак',               en: 'Iraq',                  by: 'Ірак'                },
  682: { ru: 'Саудовская Аравия',  en: 'Saudi Arabia',          by: 'Саудаўская Аравія'   },
  784: { ru: 'ОАЭ',                en: 'UAE',                   by: 'ААЭ'                 },
  400: { ru: 'Иордания',           en: 'Jordan',                by: 'Іарданія'            },
  422: { ru: 'Ливан',              en: 'Lebanon',               by: 'Ліван'               },
  376: { ru: 'Израиль',            en: 'Israel',                by: 'Ізраіль'             },
  760: { ru: 'Сирия',              en: 'Syria',                 by: 'Сірыя'               },
  887: { ru: 'Йемен',              en: 'Yemen',                 by: 'Емен'                },
  414: { ru: 'Кувейт',             en: 'Kuwait',                by: 'Кувейт'              },
  634: { ru: 'Катар',              en: 'Qatar',                 by: 'Катар'               },
  /* ── Asia ────────────────────────────────────── */
  156: { ru: 'Китай',              en: 'China',                 by: 'Кітай'               },
  356: { ru: 'Индия',              en: 'India',                 by: 'Індыя'               },
  392: { ru: 'Япония',             en: 'Japan',                 by: 'Японія'              },
  410: { ru: 'Южная Корея',        en: 'South Korea',           by: 'Паўднёвая Карэя'     },
  408: { ru: 'Северная Корея',     en: 'North Korea',           by: 'Паўночная Карэя'     },
  586: { ru: 'Пакистан',           en: 'Pakistan',              by: 'Пакістан'            },
  50:  { ru: 'Бангладеш',          en: 'Bangladesh',            by: 'Бангладэш'           },
  360: { ru: 'Индонезия',          en: 'Indonesia',             by: 'Інданезія'           },
  764: { ru: 'Таиланд',            en: 'Thailand',              by: 'Тайланд'             },
  704: { ru: 'Вьетнам',            en: 'Vietnam',               by: 'В\'етнам'            },
  608: { ru: 'Филиппины',          en: 'Philippines',           by: 'Філіпіны'            },
  458: { ru: 'Малайзия',           en: 'Malaysia',              by: 'Малайзія'            },
  418: { ru: 'Лаос',               en: 'Laos',                  by: 'Лаос'                },
  116: { ru: 'Камбоджа',           en: 'Cambodia',              by: 'Камбоджа'            },
  104: { ru: 'Мьянма',             en: 'Myanmar',               by: 'М\'янма'             },
  524: { ru: 'Непал',              en: 'Nepal',                 by: 'Непал'               },
  144: { ru: 'Шри-Ланка',          en: 'Sri Lanka',             by: 'Шры-Ланка'           },
  496: { ru: 'Монголия',           en: 'Mongolia',              by: 'Манголія'            },
  /* ── Africa ──────────────────────────────────── */
  818: { ru: 'Египет',             en: 'Egypt',                 by: 'Егіпет'              },
  504: { ru: 'Марокко',            en: 'Morocco',               by: 'Марока'              },
  788: { ru: 'Тунис',              en: 'Tunisia',               by: 'Туніс'               },
  434: { ru: 'Ливия',              en: 'Libya',                 by: 'Лівія'               },
  566: { ru: 'Нигерия',            en: 'Nigeria',               by: 'Нігерыя'             },
  710: { ru: 'ЮАР',                en: 'South Africa',          by: 'ПАР'                 },
  231: { ru: 'Эфиопия',            en: 'Ethiopia',              by: 'Эфіопія'             },
  288: { ru: 'Гана',               en: 'Ghana',                 by: 'Гана'                },
  120: { ru: 'Камерун',            en: 'Cameroon',              by: 'Камерун'             },
  /* ── Americas ────────────────────────────────── */
  840: { ru: 'США',                en: 'United States',         by: 'ЗША'                 },
  124: { ru: 'Канада',             en: 'Canada',                by: 'Канада'              },
  484: { ru: 'Мексика',            en: 'Mexico',                by: 'Мексіка'             },
  76:  { ru: 'Бразилия',           en: 'Brazil',                by: 'Бразілія'            },
  32:  { ru: 'Аргентина',          en: 'Argentina',             by: 'Аргенціна'           },
  604: { ru: 'Перу',               en: 'Peru',                  by: 'Перу'                },
  170: { ru: 'Колумбия',           en: 'Colombia',              by: 'Калумбія'            },
  152: { ru: 'Чили',               en: 'Chile',                 by: 'Чылі'                },
  862: { ru: 'Венесуэла',          en: 'Venezuela',             by: 'Венесуэла'           },
  /* ── Oceania ─────────────────────────────────── */
  36:  { ru: 'Австралия',          en: 'Australia',             by: 'Аўстралія'           },
  554: { ru: 'Новая Зеландия',     en: 'New Zealand',           by: 'Новая Зеландыя'      },
};
