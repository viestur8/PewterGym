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
            let pokeBackPic = data.sprites.back_default;
            let pokemonHp = parseInt(`${data.stats[5].base_stat}`);
            let pokemonAtk = parseInt(`${data.stats[4].base_stat}`);
            let pokemonDef = parseInt(`${data.stats[3].base_stat}`);
            let pokemonAbilities = [];
            let abilities = data.abilities;
            abilities.forEach(ability => {
                pokemonAbilities.push(ability.ability.name);
            });

            newPokemon = new Pokemon(pokemonName, pokemonNumber, pokemonType, pokeFrontPic, pokeBackPic, pokemonHp, pokemonAtk, pokemonDef, pokemonAbilities);
        
        // .then(() => 
        this.pokemonCaught.push(newPokemon)
        })
    // );
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
        
        // //DIV CLASS - 'trainer-facts'
        // let newTrainerFacts = document.createElement('div');
        // newTrainerFacts.classList.add('trainer-facts');

        // //p CLASS - 'content' (name)
        // let trainerName = document.createElement('p');
        // trainerName.innerText = this.name;

        // newTrainerFacts.append(trainerName);

        
        // DIV CLASS - 'trainer-pokemon'
        let pokemonSection = document.createElement('div');
        pokemonSection.classList.add('trainer-pokemon');
        for (let pokemon of this.pokemonCaught) {

            // SPAN CLASS - pokeball
            let pokeBall = document.createElement('span');
            pokeBall.classList.add('pokeball');

                let pokePic = document.createElement('img');
                pokePic.src = pokemon.frontPic;

                let pokeTag = document.createElement('p');
                pokeTag.innerText = pokemon.name;

                

            pokeBall.append(pokePic, pokeTag);
            pokemonSection.append(pokeBall);
        newTrainerContainer.append(pokemonSection);
        }
    }
}