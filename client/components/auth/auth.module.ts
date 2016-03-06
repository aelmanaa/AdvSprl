'use strict';

angular.module('advSprlApp.auth', [
  'advSprlApp.constants',
  'advSprlApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
