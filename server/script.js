// Var reused on script

// Wait till page is loaded
$(document).ready(() => {
  console.log('Script Running');
  const loginform = $("#loginform");
  loginform.submit(function(event) {
    event.preventDefault();
    ajaxPost();
  });

  function ajaxPost() {
    // Form Data value form html form
    const formData = {
      email: $('#email').val(),
      upwd: $('#upwd').val(),
    }
    // Perform async POST method
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: window.location + "api/login",
      data: JSON.stringify(formData),
      dataType: 'json',
      // Trigger success/fail class on valid customer
      success: function (customer) {
        if (customer.valid === true) {
          console.log('Successful login');
          loginform.removeClass("fail");
          loginform.addClass("success");
        } else {
          console.log('Fail login');
          loginform.removeClass("success");
          loginform.addClass("fail");
        }
        $('#postResultDiv').html(
          '<p>' + 'Login Info: <br>' +
          'Email Address: ' + customer.email + '<br>' +
          'Password: ' + customer.upwd + '<br>' +
          'Valid User: ' + customer.valid + '</p>'
        );
      },
      // Handling error
      error: function (e) {
        alert('Error!');
        console.log('ERROR: ', e);
      }
    });
    // Reset data after post method
    resetData();
  }

  function resetData() {
    $('#email').val('');
    $('#upwd').val('');
  }
});
