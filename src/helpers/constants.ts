export const CHAPTERS = new Map([
  ['TEMPLATE', { time: 'Einführung', title: 'Einführung', person: 'none', place: 'Beispielort' }],
  [
    'CHILDHOOD_C',
    {
      time: '1931 - 1964',
      title: 'Chum Mey – Vom Bauern zum Mechaniker',
      person: 'chum',
      place: 'Beispielort2',
    },
  ],
  [
    'CHILDHOOD_B',
    {
      time: '1941 - 1967',
      title: 'Der Maler Bou Mong-Seang',
      person: 'bou',
      place: 'Beispielort3',
    },
  ],
  [
    'HISTORICAL_BACKGROUND',
    {
      time: 'none',
      title: 'Kambodscha: Zwischen Unabhängigkeit & Unterdrückung',
      person: 'none',
      place: 'Beispielort3',
    },
  ],
  [
    'PRE_INVASION_B',
    {
      time: '1967 - 1974',
      title: 'Bou Mong-Seangs Weg zur Revolution',
      person: 'bou',
      place: 'Beispielort3',
    },
  ],
  [
    'PRE_INVASION_C',
    {
      time: 'none',
      title: 'Chum Meys Weg nach Phnom Penh',
      person: 'chum',
      place: 'Beispielort3',
    },
  ],
  [
    'INVASION_BACKGROUND',
    {
      time: '1974 - 1975',
      title: 'Einordnung: Einnahme Phnomh Penhs',
      person: 'none',
      place: 'Beispielort3',
    },
  ],
  [
    'INVASION_BOTH',
    {
      time: 'none',
      title: 'Der 17. April: Einnahme Phnomh Penhs',
      person: 'both',
      place: 'Phnomh Penh',
    },
  ],
  [
    'AFTER_INVASION_B',
    {
      time: '1975 - 1976',
      title: 'Die Reisfelder der Roten Khmer',
      person: 'bou',
      place: 'Phnomh Penh',
    },
  ],
  [
    'AFTER_INVASION_C',
    {
      time: 'none',
      title: 'Zwischen Leid und Gehorsam',
      person: 'chum',
      place: 'Phnomh Penh',
    },
  ],
  [
    'ARREST_B',
    {
      time: '1976 - 1979',
      title: 'Die Kunstschule',
      person: 'bou',
      place: 'Ländliche Region vor Phnomh Penh',
    },
  ],
  [
    'ARREST_C',
    {
      time: 'none',
      title: 'Eine verhängnisvolle Reparatur',
      person: 'chum',
      place: 'Phnomh Penh',
    },
  ],
  [
    'DICTATORSHIP_BACKGROUND',
    {
      time: 'none',
      title: 'Die Diktatur der Roten Khmer',
      person: 'none',
      place: 'Beispielort3',
    },
  ],
  [
    'PRISON_LIFE_BACKGROUND',
    {
      time: 'none',
      title: 'Das Leben im Gefängnis S-21',
      person: 'none',
      place: 'Beispielort3',
    },
  ],
  [
    'PRISON_B',
    {
      time: 'none',
      title: 'Bou Mengs Malereien aus Leid und Blut',
      person: 'bou',
      place: 'Beispielort3',
    },
  ],
  [
    'PRISON_C',
    {
      time: 'none',
      title: 'Chum Mey im Abgrund von Tuol Sleng',
      person: 'chum',
      place: 'Beispielort3',
    },
  ],
  [
    'LIBERATION_FROM_PRISON_BACKGROUND',
    {
      time: '1979 - 1980',
      title: 'Der Sturz der Roten Khmer',
      person: 'none',
      place: 'Phnom Penh',
    },
  ],
  [
    'ESCAPE_FROM_PRISON_BOTH',
    {
      time: 'none',
      title: 'Eine Flucht voller Gefahren',
      person: 'both',
      place: 'S-21 – Phnom Penh',
    },
  ],
  [
    'OUTLOOK_BACKGROUND',
    { time: '1979 - heute', title: 'Aufarbeitung', person: 'none', place: '' },
  ],
  [
    'GENERAL_INFO',
    {
      time: 'none',
      title: 'Allgemeine Projektinformationen',
      person: 'none',
      place: '',
    },
  ],
])

export type Chapter =
  | 'TITLE'
  | 'TEMPLATE'
  | 'CHILDHOOD_B'
  | 'CHILDHOOD_C'
  | 'HISTORICAL_BACKGROUND'
  | 'PRE_INVASION_B'
  | 'PRE_INVASION_C'
  | 'INVASION_BACKGROUND'
  | 'INVASION_BOTH'
  | 'AFTER_INVASION_B'
  | 'AFTER_INVASION_C'
  | 'ARREST_B'
  | 'ARREST_C'
  | 'DICTATORSHIP_BACKGROUND'
  | 'PRISON_LIFE_BACKGROUND'
  | 'PRISON_B'
  | 'PRISON_C'
  | 'LIBERATION_FROM_PRISON_BACKGROUND'
  | 'ESCAPE_FROM_PRISON_BOTH'
  | 'OUTLOOK_BACKGROUND'
  | 'GENERAL_INFO'

export const FADINGTIME = 2000
