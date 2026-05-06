let massages = [
  "Пойдем гулять в парк?",
  "Кажется, дождь собирается. Лучше пойдем в кино!",
  "Давай, сегодня как раз вышел новый фильм.",
  "Встречаемся через час у кинотеатра.",
];
console.log("Переписка в хронологическом порядке\n");

for (let i = 0; i < massages.length; i++) {
  let sender = i % 2 == 0 ? "Друг" : "Вы";
  console.log(sender + ": " + massages[i]);
}

let searchText = "кино";
console.log("\nРезультат поиска (слово: " + searchText + ")");

for (let i = 0; i < massages.length; i++) {
  let regex = new RegExp('(?<![а-яё])' + searchText + '(?![а-яё])', 'i');
  if (regex.test(massages[i])) {
    console.log(massages[i]);
  }
}

