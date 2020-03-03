function sayName() {
    let userName = document.getElementById("name").value;
    let userPass = document.getElementById("password").value;
    let accessGranted = false;
    
    let userProfile = {
        username: "fake_username",
        password: "fake_password"
    };
    
    if (userName === userProfile.username && userPass === userProfile.password) {
        document.getElementById("display").innerHTML = "Login Successful!";
    } else if (userName === userProfile.username && userPass !== userProfile.password) {
        document.getElementById("display").innerHTML = "Incorrect password!";
    } else if (userName !== userProfile.username && userPass === userProfile.password) {
        document.getElementById("display").innerHTML = "Incorrect username!";
    } else {
        document.getElementById("display").innerHTML = "Login failed."
    }
}
