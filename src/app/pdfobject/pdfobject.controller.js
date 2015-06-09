/**
 * Created by ptowles on 6/9/15.
 */
angular.module('pdfTest')
  .controller('PdfobjectCtrl', function ($scope) {

    var myPDF = new PDFObject({

      url: 'example.pdf',
      id: "pdfRendered",
      pdfOpenParams: {
        view: "FitH"
      }

    }).embed('target');

  });
