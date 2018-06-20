angular.module('app.controllers', [])
  
.controller('principalCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('escolhaMaterialCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('perguntaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.numerovida = "4"
    $scope.pergunta = "Teste de Pergunta";
    $scope.itens = [
        
        {
            imagem: '../img/vNbX1MDR4iprFFFVsm09_card1-couroESoladeBorracha.jpg',
            nome: 'Escova de Aço'
        },
        {
            imagem: '../img/vNbX1MDR4iprFFFVsm09_card1-couroESoladeBorracha.jpg',
            nome: 'Escova de Aço',
            order: 'order-2'
        },
        {
            imagem: '../img/vNbX1MDR4iprFFFVsm09_card1-couroESoladeBorracha.jpg',
            nome: 'Escova de Aço'
        }
        
    ];

}])

.controller('nivel1Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.numerovida = "4"
    $scope.pergunta = "Teste de Pergunta";
    $scope.itens = [
        
        {
            imagem: '../img/vNbX1MDR4iprFFFVsm09_card1-couroESoladeBorracha.jpg',
            nome: 'Nivel1'
        },
        {
            imagem: '../img/vNbX1MDR4iprFFFVsm09_card1-couroESoladeBorracha.jpg',
            nome: 'Nivel1',
            order: 'order-2'
        },
        {
            imagem: '../img/vNbX1MDR4iprFFFVsm09_card1-couroESoladeBorracha.jpg',
            nome: 'Nivel1'
        }
        
    ];

}])
   
.controller('acertouCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('errouCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('gameOverCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('ganhouCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 