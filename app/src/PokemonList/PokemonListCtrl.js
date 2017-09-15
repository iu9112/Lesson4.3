'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, PokemonsService, BerriesService) {

    $scope.isLoadedPokemons = false;
    $scope.isLoadedBerries = false;
    
    // PokemonsService.getPokemons().then(function(response) {
    //     $scope.pokemons = response.data.results;
    // });
    //
    // BerriesService.getBerries().then(function(response) {
    //     $scope.berries = response.data.results;
    // });

    PokemonsService.getPokemons().then(function(response) {
        $scope.pokemons = response.data.results;
        $scope.isLoadedPokemons = true; //убрать прелоадер покемонов
        
        return BerriesService.getBerries()
    }).then(function(response) {
        $scope.berries = response.data.results;
         $scope.isLoadedBerries = true; //убрать прелоадер покемонов
    });



});
