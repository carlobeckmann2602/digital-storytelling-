export const CHAPTERS = new Map([
  ['TEMPLATE', { time: 'XX.XX.XXXX', title: 'Beispielkapitel', place: 'Beispielort' }],
  ['CHILDHOOD_C', { time: '1931 - 1949', title: 'Kindheit von Chum Mey', place: 'Beispielort2' }],
  ['CHILDHOOD_B', { time: 'XXXX - YZYZ', title: 'Kindheit von Bou Meng', place: 'Beispielort3' }],
  [
    'HISTORICAL_BACKGROUND',
    { time: 'XXXX - YZYZ', title: 'Historische Umstände', place: 'Beispielort3' },
  ],
  [
    'PRE_INVASION_B',
    { time: 'XXXX - YZYZ', title: 'Bou Mengs Leben vor der Invasion', place: 'Beispielort3' },
  ],
  [
    'PRE_INVASION_C',
    { time: '1950 - 1973', title: 'Chum Meys Leben vor der Invasion', place: 'Beispielort3' },
  ],
  [
    'INVASION_BACKGROUND',
    { time: 'XXXX - YZYZ', title: 'Einordnung: Einnahme Phnomh Penhs', place: 'Beispielort3' },
  ],
  [
    'INVASION_BOTH',
    { time: '17.04.1975', title: 'Der 17. April: Einnahme Phnomh Penhs', place: 'Phnomh Penh' },
  ],
  [
    'AFTER_INVASION_B',
    { time: '1975 - 1976', title: 'Bou Mengs Leben nach der Einnahme', place: 'Phnomh Penh' },
  ],
  [
    'AFTER_INVASION_C',
    { time: '1975 - 1976', title: 'Chum Meys Leben nach der Einnahme', place: 'Phnomh Penh' },
  ],
  [
    'ARREST_B',
    { time: '16.08.1977', title: 'Die Kunstschule', place: 'Ländliche Region vor Phnomh Penh' },
  ],
  [
    'ARREST_C',
    { time: '1977 - 1978', title: 'Eine verhängnisvolle Reparatur', place: 'Phnomh Penh' },
  ],
  [
    'DICTATORSHIP_BACKGROUND',
    { time: 'XXXX - YZYZ', title: 'Einordnung: Diktatur', place: 'Beispielort3' },
  ],
  [
    'PRISON_LIFE_BACKGROUND',
    { time: 'XXXX - YZYZ', title: 'Einordnung: Leben im Gefängnis', place: 'Beispielort3' },
  ],
  ['PRISON_B', { time: 'XXXX - YZYZ', title: 'Bou Meng im Gefängnis', place: 'Beispielort3' }],
  ['PRISON_C', { time: 'XXXX - YZYZ', title: 'Chum Mey im Gefängnis', place: 'Beispielort3' }],
  [
    'LIBERATION_FROM_PRISON_BACKGROUND',
    {
      time: '07.01.1979',
      title: 'Sturz der Roten Khmer & Befreiung des Gefängnisses',
      place: 'Phnom Penh',
    },
  ],
  [
    'ESCAPE_FROM_PRISON_BOTH',
    { time: 'XXXX - YZYZ', title: 'Flucht aus dem Gefängnis', place: 'Beispielort3' },
  ],
  ['OUTLOOK_BACKGROUND', { time: 'XXXX - YZYZ', title: 'Ausblick', place: 'Beispielort3' }],
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
