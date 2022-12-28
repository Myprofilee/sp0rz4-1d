// Your web app's Firebase configuration ENTER YOUR FIREBASE DETAILS HERE

var firebaseConfig = {
    apiKey: "AIzaSyD0C2MlAYzNN7IDtlq5x7gfnefzxaVpxnY",
    authDomain: "sporza-id.firebaseapp.com",
    databaseURL: "https://sporza-id-default-rtdb.firebaseio.com",
    projectId: "sporza-id",
    storageBucket: "sporza-id.appspot.com",
    messagingSenderId: "958457231239",
    appId: "1:958457231239:web:1d346d5c2fa4b60df3c522",
    measurementId: "G-5MR6BNZLHN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var form = document.querySelector('#loginForm');
var otp_form = document.querySelector('#otpForm');
var message = document.querySelector('#messageDiv');
var sign_out = document.querySelector("#signOut");
var message_value = document.querySelector('.message');


// check if user is logged in or not
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if(window.location.pathname != '/../../2022/Project/'){
            window.location = window.history.back();
        }
    } else {
        if(window.location.pathname === '/../../2022/Project/'){
            window.location = '/';
        }
    }
});

if(window.location.pathname != '/../../2022/Project/'){
    // verification captcha setting 
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
            console.log('captcha verified');
        }
    });
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().settings.appVerificationDisabledForTesting = true; // turn this off in production stage
    
    // show error message function 

function showErrorMessage(erro_message){

    message.style.display = 'block';
    message_value.innerText = erro_message;
    console.log(erro_message);
    setTimeout(function(){
        message.style.display = 'none';
    }, 3000);
}

    // user login
    if(form){
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let phone_number = form.phone.value;
        
            // setup invisible recaptcha 
            firebase.auth().signInWithPhoneNumber(phone_number, appVerifier)
            .then((confirmationResult) => {
                console.log("OTP SEND", confirmationResult);
                form.style.display = 'none';
                otp_form.style.display = 'block';
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                showErrorMessage(error.message);
            });
            
        })
    }

    // verify otp 
    if(otp_form){
        otp_form.addEventListener('submit', function(e) {
            e.preventDefault();
            let otp_number = otp_form.otp_value.value;
            confirmationResult.confirm(otp_number).then((result) => {
                // User signed in successfully.
                const user = result.user;
                window.location = window.history.back();
            }).catch((error) => {
                showErrorMessage(error.message);
            });
        })
    }

}



// sign out  
if(sign_out){
    sign_out.addEventListener('click', function(e) {
        firebase.auth().signOut().then(() => {
            window.location = '/';
        }).catch((error) => {
        // An error happened.
        });
    })
}