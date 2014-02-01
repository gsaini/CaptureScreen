(function($, undefined){
  $(document).ready(function(){
      $('#btn-capture-screen').on('click', function (){
        html2canvas(document.body, {
          onrendered: function(canvas) {
            $.ajax({
              type: "POST",
              url: "saveScreen",
              data: {
               fileName:new Date().getTime(),
               imgBase64: canvas.toDataURL("image/png").replace(/^data:image\/png;base64,/,"")
              }
            }).done(function(response) {
                alert(response);
            });
          }
        });
      });
    });  
})(jQuery);

