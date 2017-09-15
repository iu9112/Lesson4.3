var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'btford.socket-io']);

angular
    .module('PokemonApp')

.config(['$routeProvider', '$httpProvider',
    function config($routeProvider, $httpProvider) {
        
        $httpProvider.defaults.headers.post = {
            /*"application-id": "B9E7CC35-2750-A792-FF97-96716BBD6A00",
            "secret-key": "B0F1EB2B-8A2F-29B9-FF6A-53AF03794900",*/
            "application-id": "4B730C92-F81E-236B-FFF0-6651FE882800",// с моими не работает
            "secret-key": "CB6DE86C-6069-86C4-FF1C-9049D5AC9400",
            "Content-Type": "application/json"
        };
        
        $routeProvider.
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        when('/update/:pokemonId', {
            templateUrl: 'src/UpdatePokemon/UpdatePokemon.html',
            controller: 'UpdatePokemonCtrl'
        }).
        when('/realtime/:userName', {
            templateUrl: 'src/PokemonRealtime/PokemonRealtime.html',
            controller: 'PokemonRealtimeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
])

.factory('mySocket', function(socketFactory) {
  var myIoSocket = io.connect('https://netology-socket-io.herokuapp.com/');

    mySocket = socketFactory({
      ioSocket: myIoSocket
    });

    return mySocket;
});
