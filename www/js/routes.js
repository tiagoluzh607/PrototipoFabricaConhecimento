angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('principal', {
    url: '/principal',
    templateUrl: 'templates/principal.html',
    controller: 'principalCtrl'
  })

  .state('escolhaMaterial', {
    url: '/escolha',
    templateUrl: 'templates/escolhaMaterial.html',
    controller: 'escolhaMaterialCtrl'
  })

  .state('pergunta', {
    url: '/pergunta',
    templateUrl: 'templates/pergunta.html',
    controller: 'perguntaCtrl'
  })
  
  .state('nivel1', {
    url: '/nivel1',
    templateUrl: 'templates/pergunta.html',
    controller: 'nivel1Ctrl'
  })

  .state('acertou', {
    url: '/acertou',
    templateUrl: 'templates/acertou.html',
    controller: 'acertouCtrl'
  })

  .state('errou', {
    url: '/errou',
    templateUrl: 'templates/errou.html',
    controller: 'errouCtrl'
  })

  .state('gameOver', {
    url: '/gameover',
    templateUrl: 'templates/gameOver.html',
    controller: 'gameOverCtrl'
  })

  .state('ganhou', {
    url: '/Ganhou',
    templateUrl: 'templates/ganhou.html',
    controller: 'ganhouCtrl'
  })

$urlRouterProvider.otherwise('/principal')


});