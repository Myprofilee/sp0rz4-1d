const firebaseConfig = {
    apiKey: "AIzaSyD0C2MlAYzNN7IDtlq5x7gfnefzxaVpxnY",
    authDomain: "sporza-id.firebaseapp.com",
    databaseURL: "https://sporza-id-default-rtdb.firebaseio.com",
    projectId: "sporza-id",
    storageBucket: "sporza-id.appspot.com",
    messagingSenderId: "958457231239",
    appId: "1:958457231239:web:1d346d5c2fa4b60df3c522",
    measurementId: "G-5MR6BNZLHN"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var reportDB = firebase.database().ref("report");

document.getElementById("report").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var link = getElementVal("link");
    var error = getElementVal("error");
    var text = getElementVal("text");

    saveMessages(link, error, text);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("report").reset();
}

const saveMessages = (link, error, text) => {
    var newreport = reportDB.push();

    newreport.set({
        link: link,
        error: error,
        text: text,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};