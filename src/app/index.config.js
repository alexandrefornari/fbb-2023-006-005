(function() {
  'use strict';

  angular
    .module('infi-cursos')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
