annotationApp.controller('MainController', function($scope, configurator) {
  var conf = configurator.conf_for('MainController');
  tokenRetriever = configurator.getService(conf.retriever);

  tokenRetriever.getAnalyses(function(res) {
    $scope.tokens = res.data;
  });

  $scope.selectedToken = { id: '1' };

  $scope.currentToken = function() {
    return $scope.tokens[$scope.selectedToken.id - 1];
  };

  $scope.selectToken = function(id) {
    $scope.selectedToken.id = id;
  };
});
