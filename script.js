let anna = new Trainer('Anna');
let jennifer = new Trainer('Jennifer');
let lisa = new Trainer('Lisa');
let viesturs = new Trainer('Viesturs');

anna.add("poliwrath");
anna.add("poliwhirl");
anna.add("pikachu");

jennifer.add('dewgong');
jennifer.add('starmie');
jennifer.add('marill');

lisa.add('psyduck');
lisa.add('slowbro');
lisa.add('snorlax');

// lisa.add('54');
// lisa.add('143');
// lisa.add('80');

viesturs.add('pignite'); // 499
viesturs.add('granbull'); // 210
viesturs.add('gligar'); // 207

// viesturs.add('499'); // 499
// viesturs.add('210'); // 210
// viesturs.add('207'); // 207

anna.renderTrainer();
jennifer.renderTrainer();
lisa.renderTrainer();
viesturs.renderTrainer();

// setTimeout(viesturs.renderTrainer(), 10000);