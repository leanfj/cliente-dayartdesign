jQuery(document).ready(function ($) {
  $("#submit_btn").click(function () {
    var proceed = true;

    $("input[required], textarea[required]").each(function () {
      $(this).css('background-color', '');
      if (!$.trim($(this).val())) { 
        $(this).css('background-color', '#FFDEDE'); 
        proceed = false; 
      }
      
      var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if ($(this).attr("type") == "email" && !email_reg.test($.trim($(this).val()))) {
        $(this).css('background-color', '#FFDEDE'); 
        proceed = false; 
      }
    });

    if (proceed) 
    {
      post_data = {
        'user_name': $('input[name=name]').val(),
        'user_email': $('input[name=email]').val(),
        'subject': $('select[name=subject]').val(),
        'tel': $('input[name=telefone]').val(),
        'msg': $('textarea[name=message]').val()
      };

      $.ajax({
        type: "POST",
        url: 'sendmail.php',
        data: post_data,
        success: function (response) {
          if (response == '0') { 
            output = '<br><br><div class="error"> Erro ao envia mensagem </div>';
          } else {
            output = '<br><br><div class="success"> Sua mensagem foi enviada </div>';

            $("input[name=name], input[name=email], input[name=telefone], textarea[name=message]").val('');
          }
          $("#contact_results").hide().html(output).slideDown();
          setTimeout(function () { $("#contact_results").slideUp(); }, 3000)
        },
        dataType: 'text'
      });
    }
  });

});