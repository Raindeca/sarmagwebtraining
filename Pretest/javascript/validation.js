function validate() {
    
    if (document.valiForm.name.value=="") {
        alert("Please provide your name");
        document.valiForm.name.focus();
        return false;
    }
    if (document.valiForm.password.value=="") {
        alert("Please provide your password");
        document.valiForm.password.focus();
        return false;
    }
    if (document.valiForm.repassword.value=="") {
        alert("Please retype your password");
        document.valiForm.repassword.focus();
        return false;
    }
    if (document.valiForm.password.value != document.valiForm.repassword.value) {
        alert("Password Missmatch!");
        document.valiForm.password.value = "";
        document.valiForm.repassword.value = "";
        document.valiForm.password.focus();
        return false;
    }

    if (document.valiForm.email.value=="") {
        alert("Please provide your email");
        document.valiForm.email.focus();
        return false;
    }

    if (document.valiForm.address.value=="") {
        alert("Please provide your address");
        document.valiForm.address.focus();
        return false;
    }

}

function validateEmail() {
    var emailID = document.valiForm.email.value;
    atpos = emailID.IndexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        document.myForm.email.focus() ;
        return false;
     }
     return( true );
}