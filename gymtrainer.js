class Trainer{
    constructor(name){
        this.name = name;
        this.id = name;
        this.pokemonCaught = [];
    }

    all(){
        //no parameters
        //returns an array of Pokemon objects
        return this.pokemonCaught;
    }
    
    add(pokemonObject) {
        let newPokemon;
        //`https://pokeapi-nycda.firebaseio.com/pokemon/` + pokemonObject + '.json'
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonObject}/`).then(response => {
            let data = response.data;
            let pokemonName = data.name;
            let pokemonNumber = data.id;
            let pokemonType = data.types[0].type.name;
            let pokeFrontPic = data.sprites.front_default;
            let pokemonHp = parseInt(`${data.stats[5].base_stat}`);
            let pokemonAtk = parseInt(`${data.stats[4].base_stat}`);
            let pokemonDef = parseInt(`${data.stats[3].base_stat}`);
            let pokemonAbilities = [];
            let abilities = data.abilities;
            abilities.forEach(ability => {
                pokemonAbilities.push(" " + ability.ability.name);
            });

            newPokemon = new Pokemon(pokemonName, pokemonNumber, pokemonType, pokeFrontPic, pokemonHp, pokemonAtk, pokemonDef, pokemonAbilities);
        
        this.pokemonCaught.push(newPokemon)
        })
        .then(() => {
            if (this.pokemonCaught.length===3){
                this.renderTrainer();
            }
        })
        .catch(error => alert('error'));
    }

    renderTrainer() {
        //SECTION CLASS - 'new-trainer'
        let newTrainerContainer = document.getElementById(this.id);

        newTrainerContainer.addEventListener('click', e => {
            e.preventDefault();
            
            // DIV CLASS - 'trainer-pokemon'
            let pokemonSection = document.getElementById('display');
            pokemonSection.classList.add('trainer-pokemon');
            pokemonSection.innerHTML = '';
            for (let pokemon of this.pokemonCaught) {

                // SPAN CLASS - pokeball
                let pokeBall = document.createElement('span');
                pokeBall.classList.add('pokeball');

                    let pokePic = document.createElement('img');
                    pokePic.src = pokemon.frontPic;

                    let pokeTag = document.createElement('p');
                    pokeTag.innerHTML = pokemon.name + '<br/> NO. ' + pokemon.id + '<br/>TYPE ' + pokemon.type;

                    let pokeStats = document.createElement('p');
                    pokeStats.innerHTML = 'HP ' + pokemon.hp + '<br/>ATK ' + pokemon.atk + '<br/>DEF ' + pokemon.def; 

                    let pokeAbilities = document.createElement('p');
                    pokeAbilities.innerHTML = 'ABILITIES <br/>' + pokemon.pokemonAbilities[0] + '<br/>' + pokemon.pokemonAbilities[1];

                pokeBall.append(pokePic, pokeTag, pokeStats, pokeAbilities);
                pokemonSection.append(pokeBall);
            }
        });
    }
}