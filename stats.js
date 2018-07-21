//Pokemon API

//DOM Elements
let img = document.getElementById('image');
let upArrow = document.getElementById('upArrow');
let downArrow = document.getElementById('downArrow');
let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');
let homeCircle = document.getElementById('homeCircle'); 
let id = document.getElementById('id');
let name = document.getElementById('name');
let hp = document.getElementById('hp');
let attack = document.getElementById('attack');
let defense = document.getElementById('defense');
let abilityOne = document.getElementById('one');
let abilityTwo = document.getElementById('two');
let abilityThree = document.getElementById('three');
let abilityFour = document.getElementById('four');

//Classes
class Pokemon {
    constructor(id, name, hp, attack, defense, abilityOne, abilityTwo, abilityThree, abilityFour) {
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilityOne = abilityOne;
        this.abilityTwo = abilityTwo;
        this.abilityThree = abilityThree;
        this.abilityFour = abilityFour;
        this.image = image;
    }
}
    
class Trainer {
    constructor() {
        this.pokemon = [];
    }
        get(name) {
            for (let i = 0; i < this.pokemon.length; i++) {
                if (this.pokemon[i].name === name) {
                }    return this.pokemon[i];
            }
        }
        
        add(pokemonObject) {
            this.pokemon.push(pokemonObject);
        }
    
        all() {
            return this.pokemon;
        }
        
}        
    
let MadameZapphir = new Trainer('Madame Zapphir');
    
//Pokemon #1: Dewgong
axios.get("https://pokeapi.co/api/v2/pokemon/87").then((response) => {
    let data = response.data;
    console.log(data);

    let dewgong = new Pokemon(
        response.data.id,
        response.data.name,
        response.data.stats[5].base_stat,
        response.data.stats[4].base_stat,
        response.data.stats[3].base_stat,
        response.data.abilities[0].ability.name,
        response.data.abilities[1].ability.name,
        response.data.abilities[2].ability.name,
        response.data.moves[2].move.name,
    )
    MadameZapphir.add(dewgong);
    console.log(dewgong);
});

//Pokemon #2: Starmie
axios.get("https://pokeapi.co/api/v2/pokemon/121/").then((response) => {
    let data = response.data;
    console.log(data);

    let starmie = new Pokemon(
        response.data.id,
        response.data.name,
        response.data.stats[5].base_stat,
        response.data.stats[4].base_stat,
        response.data.stats[3].base_stat,
        response.data.abilities[0].ability.name,
        response.data.abilities[1].ability.name,
        response.data.abilities[2].ability.name,
        response.data.moves[3].move.name,
    )
        MadameZapphir.add(starmie);
        console.log(starmie);
});

//Pokemon #3: Marill
axios.get("https://pokeapi.co/api/v2/pokemon/183/").then((response) => {
    let data = response.data;
    console.log(data);

    let marill = new Pokemon(
        response.data.id,
        response.data.name,
        response.data.stats[5].base_stat,
        response.data.stats[4].base_stat,
        response.data.stats[3].base_stat,
        response.data.abilities[0].ability.name,
        response.data.abilities[1].ability.name,
        response.data.abilities[2].ability.name,
        response.data.moves[4].move.name,
    )
    
        MadameZapphir.add(marill);
        console.log(marill);
        console.log(MadameZapphir.pokemon)
});
//Selecting Pokemon
    let i = 0;
    let arr = ["marill.png", "starmie.png", "dewgong.png"]

    rightArrow.addEventListener('click', () => {
        // catch i if its over the last index, and return to start
        console.log(MadameZapphir.pokemon[0].image);
        i++;
        if (i >= 3) {
            i = 0;
        }
        id.innerText = '#' + MadameZapphir.pokemon[i].id;
        name.innerText = capitalize(MadameZapphir.pokemon[i].name);
        hp.innerText = 'HP: ' + MadameZapphir.pokemon[i].hp;
        attack.innerText = 'Attack: ' + MadameZapphir.pokemon[i].attack;
        defense.innerText = 'Defense: ' + MadameZapphir.pokemon[i].defense;
        abilityOne.innerText = capitalize(MadameZapphir.pokemon[i].abilityOne) + ',';
        abilityTwo.innerText = capitalize(MadameZapphir.pokemon[i].abilityTwo) + ',';
        abilityThree.innerText = capitalize(MadameZapphir.pokemon[i].abilityThree) + ',';
        abilityFour.innerText = capitalize(MadameZapphir.pokemon[i].abilityFour);
        img.src = MadameZapphir.pokemon[i].name + ".png"
    })
    leftArrow.addEventListener('click', () => {
        // catch i if its under the first index, and return to end
        console.log(i);
        i--;
        if (i < 0) {
            i = 2;
        }
        id.innerText = '#' + MadameZapphir.pokemon[i].id;
        name.innerText = capitalize(MadameZapphir.pokemon[i].name);
        hp.innerText = 'HP: ' + MadameZapphir.pokemon[i].hp;
        attack.innerText = 'Attack: ' + MadameZapphir.pokemon[i].attack;
        defense.innerText = 'Defense: ' + MadameZapphir.pokemon[i].defense;
        abilityOne.innerText = capitalize(MadameZapphir.pokemon[i].abilityOne) + ',';
        abilityTwo.innerText = capitalize(MadameZapphir.pokemon[i].abilityTwo) + ',';
        abilityThree.innerText = capitalize(MadameZapphir.pokemon[i].abilityThree) + ',';
        abilityFour.innerText = capitalize(MadameZapphir.pokemon[i].abilityFour);
        img.src = MadameZapphir.pokemon[i].name + ".png"
    })
    upArrow.addEventListener('click', () => {
        // catch i if its over the last index, and return to start
        console.log(MadameZapphir.pokemon[0].image);
        i++;
        if (i >= 3) {
            i = 0;
        }
        id.innerText = '#' + MadameZapphir.pokemon[i].id;
        name.innerText = capitalize(MadameZapphir.pokemon[i].name);
        hp.innerText = 'HP: ' + MadameZapphir.pokemon[i].hp;
        attack.innerText = 'Attack: ' + MadameZapphir.pokemon[i].attack;
        defense.innerText = 'Defense: ' + MadameZapphir.pokemon[i].defense;
        abilityOne.innerText = capitalize(MadameZapphir.pokemon[i].abilityOne) + ',';
        abilityTwo.innerText = capitalize(MadameZapphir.pokemon[i].abilityTwo) + ',';
        abilityThree.innerText = capitalize(MadameZapphir.pokemon[i].abilityThree) + ',';
        abilityFour.innerText = capitalize(MadameZapphir.pokemon[i].abilityFour);
        img.src = MadameZapphir.pokemon[i].name + ".png"
    })
    downArrow.addEventListener('click', () => {
        // catch i if its under the first index, and return to end
        console.log(i);
        i--;
        if (i < 0) {
            i = 2;
        }
        id.innerText = '#' + MadameZapphir.pokemon[i].id;
        name.innerText = capitalize(MadameZapphir.pokemon[i].name);
        hp.innerText = 'HP: ' + MadameZapphir.pokemon[i].hp;
        attack.innerText = 'Attack: ' + MadameZapphir.pokemon[i].attack;
        defense.innerText = 'Defense: ' + MadameZapphir.pokemon[i].defense;
        abilityOne.innerText = capitalize(MadameZapphir.pokemon[i].abilityOne) + ',';
        abilityTwo.innerText = capitalize(MadameZapphir.pokemon[i].abilityTwo) + ',';
        abilityThree.innerText = capitalize(MadameZapphir.pokemon[i].abilityThree) + ',';
        abilityFour.innerText = capitalize(MadameZapphir.pokemon[i].abilityFour);
        img.src = MadameZapphir.pokemon[i].name + ".png"
    })
    homeCircle.addEventListener('click', () => {
        window.location.reload();
    })  
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

