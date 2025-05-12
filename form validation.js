var nameerror = document.getElementById("name-message");
var emailerror = document.getElementById("email-message");
var phoneerror = document.getElementById("phone-message");
var messageerror = document.getElementById("message");
var submiterror = document.getElementById("error-message");

function validateName() {

    var name = document.getElementById('contact').value;

    if (name === '') {
        nameerror.innerHTML = "Please enter your name";
        nameerror.style.color = "red";
        return false;
    }
    if (!name.match(/^[A-Za-z]+(?:\s+[A-Za-z]+)+$/)) {
        nameerror.innerHTML = "Please enter a valid name";
        nameerror.style.color = "red";
        return false;
    }
        
    nameerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    nameerror.style.color = "green";
    nameerror.style.fontSize = "20px";
    return true;
}

function validateEmail() {

    var email = document.getElementById('email-id').value;

    if (email === '') {
        emailerror.innerHTML = "Please enter your email"; // Fix: nameerror → emailerror
        emailerror.style.color = "red";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailerror.innerHTML = "Please enter a valid email";
        emailerror.style.color = "red";
        return false;
    }
    emailerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    emailerror.style.color = "green";
    emailerror.style.fontSize = "20px";
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phone-contact').value;

    if (phone === '') {
        phoneerror.innerHTML = "phone number is required";
        phoneerror.style.color = "red";
        return false;
    }
    if (phone.length !== 10) {
        phoneerror.innerHTML = "phone number should be 10 digits";
        phoneerror.style.color = "red";
        phoneerror.style.fontSize = "11px";
        return false;
    }
    if (!phone.match(/[0-9]{10}$/)) {
        phoneerror.innerHTML = " only numbers are allowed";
        phoneerror.style.color = "red";
        return false;
    }    

    phoneerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    phoneerror.style.color = "green";
    phoneerror.style.fontSize = "20px";
    return true;
}

function validateMessage() {
    var message = document.getElementById('message-area').value;
    var required=30;
    var left=required-message.length;

    if (message === '') {
        messageerror.innerHTML = "Please enter your message";
        messageerror.style.color = "red";
        return false;
    }
    if(left>0){
        messageerror.innerHTML = left + " more characters required";
        messageerror.style.color = "red";
        messageerror.style.fontSize = "11px";
        return false;
    }   
    messageerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    messageerror.style.color = "green";
    messageerror.style.fontSize = "20px";
    return true;
}
function validateForm() {
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
        submiterror.style.display = "block";
        submiterror.innerHTML = "Please fill all the fields correctly";
        setTimeout(function(){submiterror.style.display = "none";}, 3000);
        return false;
    }
    return true;
}



