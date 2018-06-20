angular.module('app.directives', [])

.directive('barraVida', [function(){ // usar barra-vida

    var ddo = {}; //uma diretiva sempre retorna um ddo
    
            ddo.restric = "E"; //Poderemos usar tanto como Atribute: <div meu-painel></div> tanto como Element: <meu-painel></meu-painel>
            
            ddo.scope = {
               numerovida: '@numerovida' // diz podemos inserir o atributo titulo para o painel: <meu-painel titulo="Teste"></meu-painel>, 
            }
            
           ddo.transclude = true; //permite que no html montado insira elementos filhos
            ddo.templateUrl = 'templates/directives/barra-vida.html'; //Elemento que ele irá renderizar
    
            return ddo;


}]);