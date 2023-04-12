$(document).ready(function() {
    $('#checkout-form').submit(function(event) {
      event.preventDefault();
      var formData = $(this).serialize();
      // Do something with the form data, such as send it to a server-side script
      console.log(formData);
    });
  });