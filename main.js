angular.module('app', []);

angular.module('app')
.controller('BodyController', BodyController);

function BodyController(){
  var me = this;
  me.hello = 'hi';
}
