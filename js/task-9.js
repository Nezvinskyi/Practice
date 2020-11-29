// Нужно написать скрипт, который проверяет,
// являются ли две строки анаграммами,
// причем регистр букв не имеет значения.
// Учитываются лишь символы; пробелы или
// знаки препинания в расчет не берутся.

const s1 = 'Пи;%ла .пост';
const s2 = 'липа сТоп:';

const s1Normalized = s1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s{1,100}]/g, '').toLowerCase();
const s2Normalized = s2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s{1,100}]/g, '').toLowerCase();
console.log('s1Normalized :>> ', s1Normalized);
console.log('s2Normalized :>> ', s2Normalized);

console.log(Object.keys(s1Normalized));