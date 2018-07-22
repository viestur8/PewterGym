let anna = new Trainer('Anna');
let madame = new Trainer('Madame');
let logan = new Trainer('Logan');
let homer = new Trainer('Homer');

anna.add("blastoise");
anna.add("poliwhirl");
anna.add("poliwrath");

//jennifer
madame.add('dewgong');
madame.add('starmie');
madame.add('marill');

//lisa
logan.add('psyduck');
logan.add('slowbro');
logan.add('snorlax');

//viesturs
homer.add('pignite'); // 499
homer.add('granbull'); // 210
homer.add('gligar'); // 207

anna.renderTrainer();
madame.renderTrainer();
logan.renderTrainer();
homer.renderTrainer();

// setTimeout(viesturs.renderTrainer(), 10000);