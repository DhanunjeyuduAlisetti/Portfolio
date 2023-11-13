// var typed=new typed(".text",{
//     String:["Frontend Developer","Web Developer"],
//     typeSpeed:100,
//     backspeed:100,
//     backDelay:1000,
//     loop:true
// })

var btn = document.getElementById("submit");
btn.addEventListener("click", function (e) {
//   e.preventDefault();
  // alert("ok");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> Subject: ' + subject + '<br/> Message: ' + message;
    
  Email.send({
    SecureToken: "67c0ada8-e79e-4a7c-beeb-1b3449c00a0a",
    To: "adhanunjay06@gmail.com",
    From: "dhanunjayalisetti@gmail.com",  
    Subject: "Contact message",
    Body: body,
  }).then(
    message => alert(message)
  );
});

