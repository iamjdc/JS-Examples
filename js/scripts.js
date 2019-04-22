(function () {
    var pokemonRepository = (function () {
      var repository = [
        {
          name: 'Bulbasaur',
          height: 0.7,
          types: ['grass', 'poison'],
          description: "For some time after its birth, it grows by gaining nourishment from the seed on its back."
        },
        {
          name: 'Ivysaur',
          height: 1,
          types: ['grass', 'poison'],
          description: "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flowers coming bloom."
        },
        {
          name: 'Venusaur',
          height: 2,
          types: ['grass', 'poison'],
          description: "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon."
        },
        {
          name: 'Charmander',
          height: 0.6,
          types: ['fire'],
          description: "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely."
        }
      ];
  
      var pokeFields = ['name', 'height', 'types', 'description'];
  
  
      function validation(pokemon) {
  
        var result = false;
        var pokeKeys = Object.keys(pokemon);
        var pokeLength = pokeKeys.length;
  
        var result = (typeof pokemon == 'object')
          && (pokeFields.length == pokeKeys.length)
          && pokeFields.every(function (property) { return pokeKeys.indexOf(property) >= 0; });
  
  
        return result;
      }
  
  
      function filter(inputPokemon) {
        var pokeValue = 0;
        repository.some(function (pokemon) {
  
          if (inputPokemon == pokemon.name) {
           
            console.log("This pokemon is in the pokedex");
            pokeValue =1;
            return inputPokemon === pokemon.name;
  
          } 
         
  
        });
        if (pokeValue == 0) {
  
          console.log(" Pokemone is NOT in PokeDex");
        }
         
       
      }
  
  
      function getAll() {
        return repository;
      };
  
      function add(newPokemon) {
        if (validation(newPokemon) == true) {
          return repository.shift(newPokemon);
        } else {
          console.error("Error: you are adding an invalid pokemon information");
        }
      };
      return {
        add: add,
        getAll: getAll,
        filter: filter
      };
    })();
  
  
    var pokemons = pokemonRepository.getAll();
  
    var choice =pokemonRepository.filter('Bulbasaur');
  
   pokemons.forEach(function (pokemon, index) {
      console.log((index + 1) + '. ' + pokemon.name);
      if (pokemon.height > 1.5) {
  
        console.log(' (Height:) ' + pokemon.height + ' --- Wow, thats big!');
  
      } else {
        console.log(' (Height:) ' + pokemon.height);
      }
     console.log(' (Type:) ' + pokemon.types + '<BR>');
    })
  })();