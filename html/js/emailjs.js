
function emailForm() {
    console.log('function');
    var templateParams = {
       
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        comment: $('#comment').val()
      };
      console.log('templateParams',templateParams);


  emailjs.send("default_service","template_kPXNjEzq",templateParams).then(
    function(response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function(error) {
      console.log("FAILED...", error);
    }
  );
}
