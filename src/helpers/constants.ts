export const CHAPTERS = new Map([
  ['TEMPLATE', { time: 'XX.XX.XXXX', title: 'Beispielkapitel', place: 'Beispielort' }],
  ['CHILDHOOD_C', { time: 'YYYY - ZZZZ', title: 'Kindheit von Chum Mey', place: 'Beispielort2' }],
  ['CHILDHOOD_B', { time: 'XXXX - YZYZ', title: 'Kindheit von Bou Meng', place: 'Beispielort3' }],
])

export type Chapter = 'TITLE' | 'TEMPLATE' | 'CHILDHOOD_B' | 'CHILDHOOD_C'
