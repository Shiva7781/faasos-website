localStorage.clear();

let url = "http://localhost:5000";

// let lsUserData = JSON.parse(localStorage.getItem('lsUserData')) || [];
function goToLogin() {
    document.getElementById('loginUIOverlay').setAttribute('style', 'display:block;width:100vw;height:100vh');
    let content =
        `<div>
        <div class="login-1">
            <h3>
                <img src="https://img.icons8.com/external-becris-lineal-becris/2x/external-left-arrow-mintab-for-ios-becris-lineal-becris.png" onclick=goBackFromLogin()>
                Login
            </h3>
            
            <img id="thumbs-up" src="thumbsup2.png">
        </div>
        <p>Enter your phone number to continue</p>
    </div>
    <div class="ls-input">
        <!-- <input value="+91"> -->
        <input type="number" placeholder="Phone number" id="lNumber">
        <input type="submit" value="CONTINUE" id="login-cont" onclick="checkUserData()">
    </div>
    <p>Don’t have an account? <span id="goToSignup" onclick="goToSignup()">Sign up</span> </p>`;
    document.getElementById('lsdiv').innerHTML = content;
    document.getElementById('lsdiv').setAttribute('style', 'display:flex');
}
function goToSignup() {
    document.getElementById('loginUIOverlay').setAttribute('style', 'display:block;width:100vw;height:100vh');
    let content =
        `<div>
        <div class="signup-1">
            <h3>
                <img src="https://img.icons8.com/external-becris-lineal-becris/2x/external-left-arrow-mintab-for-ios-becris-lineal-becris.png" onclick=goBackFromLogin()>
                Sign Up
            </h3>
            <img id="thumbs-up" src="thumbsup2.png">
            
        </div>
        <p>Create a account with new phone number</p>
    </div>
    <div class="ls-input" id="signin-input">
        <!-- <input value="+91"> -->
        <input type="number" placeholder="Phone number" id="ls-number">
        <input type="text" placeholder="Name" id="ls-name">
        <input type="email" placeholder="Email Address" id="ls-email">
        <input type="submit" value="CREATE ACCOUNT" id="signup-create" onclick=addUserData()>
    </div>
    <p>Already have an account? <span id="goToLogin" onclick="goToLogin()">Log in</span> </p>`;
    document.getElementById('lsdiv').innerHTML = content;
    document.getElementById('lsdiv').setAttribute('style', 'display:flex');
}
function goBackFromLogin() {
    document.getElementById('lsdiv').setAttribute('style', 'display:none');
    document.getElementById('loginUIOverlay').setAttribute('style', 'display:none');
}
function goToLSVerify(lNumber) {
    let content =
        `<div>
        <div class="login-1">
            <h3>
                <img src="https://img.icons8.com/external-becris-lineal-becris/2x/external-left-arrow-mintab-for-ios-becris-lineal-becris.png" onclick=goBackFromLogin()>
                Verify Details
            </h3>
            
            <img id="thumbs-up" src="thumbsup2.png">
        </div>
        <p>OTP sent</p>
    </div>
    <div class="ls-input">
        <!-- <input value="+91"> -->
        <input type="number" placeholder="Enter OTP" id="lOTP">
        <input type="submit" value="VERIFY" id="login-cont">
    </div>
    <p>Don’t have an account? <span id="goToSignup" onclick="goToSignup()">Sign up</span> </p>`;
    document.getElementById('lsdiv').innerHTML = content;

    
    document.getElementById("login-cont").onclick=function() {verifyOTP(lNumber)};

    
}

// adding user data to database if user isn't already registered
// is called when user clicks on the submit button in the signup form
async function addUserData() {
    let temp = {};
    let lsNumber = document.getElementById('ls-number').value;
    let lsName = document.getElementById('ls-name').value;
    let lsEmail = document.getElementById('ls-email').value;

    temp['mobile'] = lsNumber;
    temp['name'] = lsName;
    temp['email'] = lsEmail;

    console.log(temp);

    // let res = await fetch(`${url}/users`);
    // let data = await res.json();
    // console.log(data);
    try {
        let res = await fetch(`${url}/register`, {
            method: "POST",
            body: JSON.stringify(temp),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await res.json();
        console.log(`${data} received`);
    } catch(err) {
        console.log(err);
    }


    // lsUserData.push(temp);
    // localStorage.setItem('lsUserData', JSON.stringify(lsUserData));
    goToLogin();
}

// checking if user is present in database to log them in
// is called when user clicks on the submit button in the login form
function checkUserData() {
    let lNumber = document.getElementById('lNumber').value;
    goToLSVerify(lNumber);
    // for (let i = 0; i < lsUserData.length; i++) {
    //     if (lNumber == lsUserData[i].lsNumber) {
    //         goToLSVerify();
    //     }
    // }
}

function goBackHomePage() {
    window.location.href = "./HomePage/index1.html"
}

async function verifyOTP(lNumber) {
    let user,token;

    let otp = document.getElementById("lOTP").value;
    let temp = {
        'mobile': lNumber,
        'otp': otp
    };
    console.log(temp);

    // checking user mobile number against database records
    try {
        let res = await fetch(`${url}/login`, {
            method: "POST",
            body: JSON.stringify(temp),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await res.json();
        data = JSON.stringify(data);
        data = JSON.parse(data);

        user = data.user;
        token = data.token;
        // console.log(user);
        // console.log(token);
    } catch(err) {
        console.log(err);
    }

    console.log(user,token);
    localStorage.setItem("USER_DETAILS",JSON.stringify(user));
    localStorage.setItem("USER_TOKEN",JSON.stringify(token));
    goBackHomePage();
}