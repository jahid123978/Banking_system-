document.getElementById('login-btn').addEventListener('click', function(){
    //get user email
   const emailField = document.getElementById('user-email')
   const userEmail = emailField.value;
   //get user password
   const pasWordField = document.getElementById('user-password');
   const userPassword = pasWordField.value;
    //check password and email
    if(userEmail == 'jahidhasan21cse@gmail.com' && userPassword == '12345')
    {
        window.location.href = "banking.html";
    }
});