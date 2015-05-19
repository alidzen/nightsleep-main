$(document)
  .on('submit', 'form[data-def]', function (e) {
    console.log(this);
    var $this = $(this);
    var error = function(){
      $this.find('.error').show();
    }
    $.ajax({
      dataType: ($this.data('type')) ? $this.data('type') : 'json',
      url: $this.attr('action'),
      type: ($this.attr('method')) ? $this.attr('method') : 'POST',
      data:$(this).serialize(),
      cache: false,
      success: function (data, textStatus, request) {
        if(data.success){
          $this.find('.success').show();
          $this.find('.form, .error').hide();
        }
        else{
          error();
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
         error();
      },
    });
   e.preventDefault();
  })