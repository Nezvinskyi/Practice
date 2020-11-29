// Задача№2
// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Если она имеет значение 'ru', то в переменную arr 
// запишем строку из дней недели на русском языке, а 
// если имеет значение 'en' – то на английском.
// Решите задачу через 2 if, через switch-case.
// "пн, вт, ср, чт, пт, сб, вс" "mn, ts, wd, th, fr, st, sn" 

const lang = prompt('Select language by typing "ru" or "en"');
const langRu = 'пн, вт, ср, чт, пт, сб, вс';
const langEn = 'mn, ts, wd, th, fr, st, sn';
  
let arr = '';
if (lang === 'ru') {
  arr = langRu;
  alert(`You have selected ${lang} language. The week looks like: ${arr}`);
} else if (lang ==='en') {
  arr = langEn;
  alert(`You have selected ${lang} language. The week looks like: ${arr}`);
} else {
  alert('I do not know such a language.');
}
