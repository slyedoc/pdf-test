'use strict';

angular.module('pdfTest')
  .controller('MainCtrl', function ($scope) {
    $scope.ways = [
      {
        'title': 'IFrame',
        'description': 'Iframe link for downloading.',
        'state': 'iframe'
      },
      {
        'title': 'Object',
        'description': 'Html Object tag.',
        'state': 'object'
      },
      {
        'title': 'PdfObject',
        'description': 'Javascript library that uses html object.',
        'state': 'pdfobject'
      },
      {
        'title': 'Embed',
        'description': 'Html that uses html object.',
        'state': 'embed'
      }
    ];
  });
