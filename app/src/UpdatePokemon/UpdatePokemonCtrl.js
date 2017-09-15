'use strict';

pokemonApp.controller('UpdatePokemonCtrl', function($scope, $routeParams, PokemonsService) {

    $scope.updateSuccess = false;

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(pokemonData) {
        $scope.pokemon = pokemonData.data;
    });

    $scope.updatePokemon = function(myPokemon) {
        console.log(myPokemon);

        PokemonsService.updatePokemon($routeParams['pokemonId'], myPokemon).then(function(response) {
            $scope.updateSuccess = true;
            console.log(response);
        })
    };

});