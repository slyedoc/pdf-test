'use strict';

angular.module('pdfTest', ['ui.router', 'mgcrea.ngStrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('iframe', {
        url: '/iframe',
        templateUrl: 'app/iframe/iframe.html',
        controller: 'IframeCtrl'
      })
      .state('object', {
        url: '/object',
        templateUrl: 'app/object/object.html',
      })
      .state('pdfobject', {
        url: '/pdfobject',
        templateUrl: 'app/pdfobject/pdfobject.html',
        controller: 'PdfobjectCtrl'

      })
      .state('embed', {
        url: '/embed',
        templateUrl: 'app/embed/embed.html'
      });

    $urlRouterProvider.otherwise('/');
  })
;
