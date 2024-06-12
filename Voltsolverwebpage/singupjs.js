let form=document.getElementById('form');
let username=document.getElementById('username');
let fullname=document.getElementById('fullname');
let accnum=document.getElementById('accnumber');
let address=document.getElementById('address');
let phonenum=document.getElementById('phonenumber');
let email=document.getElementById('email');
let password=document.getElementById('password');
let confirmpas=document.getElementById('cpassword');
let regbtn = document.getElementById("registerbtn");

regbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    validateinput();

});

     function validateinput(){
    let usernameval = username.value.trim();
    let fullnameval = fullname.value.trim();
    let accnumval = accnum.value.trim();
    let addressval = address.value.trim();
    let phonenumval = phonenum.value.trim();
    let emailval = email.value.trim();
    let pasval = password.value.trim();
    let confirmpasval = confirmpas.value.trim();

    if(usernameval === ''){
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if(fullnameval === ''){
        setError(fullname, 'Fullname is required');
    } else {
        setSuccess(fullname);
    }
    if(accnumval === ''){
        setError(accnum, 'Account Number is required');
    } else {
        setSuccess(accnum);
    }
    if(addressval === ''){
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }
    if(phonenumval === ''){
        setError(phonenum, 'Phone Number is required');
    } 
    else if(phonenumval.length <10 || phonenumval.length >10){
        setError(phonenum,'Phone Number should be 10 charactors');
    }
    else {
        setSuccess(phonenum);
    }
    if(emailval === ''){
        setError(email, 'Email is required');
    } else if(!validateEmail(emailval)){
        setError(email, 'Please enter a valid email address');
    } else {
        setSuccess(email);
    }
    if(pasval === ''){
        setError(password, 'Password is required');
    } else if(!validatePassword(pasval)){
        setError(password, 'Password must include at least 5 characters of A-Z or a-z or 0-9');
    } else {
        setSuccess(password);
    }
    if(confirmpasval === ''){
        setError(confirmpas, 'Confirm Password is required');
    } else if(confirmpasval !== pasval){
        setError(confirmpas, 'Passwords do not match');
    } else {
        setSuccess(confirmpas);
    }
}

function setError(element, message){
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element){
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

function validateEmail(email){
    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password){
    // Regular expression pattern for password validation
    var passwordPattern = /^[A-Za-z0-9]{5,}$/;
    return passwordPattern.test(password);
}
