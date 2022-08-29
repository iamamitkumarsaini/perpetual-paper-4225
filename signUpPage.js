function shiv_btn1() {
    document.getElementById("shiv_container1").style.display = "none";
    document.getElementById("shiv_container2").style.display = "block";
}

function shiv_btn2() {
    document.getElementById("shiv_container2").style.display = "none";
    document.getElementById("shiv_container3").style.display = "block";
}

function shiv_btn3() {
    document.getElementById("shiv_container3").style.display = "none";
    document.getElementById("shiv_container4").style.display = "block";
}

function shiv_btn4() {
    document.getElementById("shiv_container4").style.display = "none";
    document.getElementById("shiv_container5").style.display = "block";
}

function shiv_btn5() {
    document.getElementById("shiv_container5").style.display = "none";
    document.getElementById("shiv_container6").style.display = "block";
}

function shiv_btn6() {
    document.getElementById("shiv_container6").style.display = "none";
    document.getElementById("shiv_container7").style.display = "block";
}

function shiv_btn7() {
    document.getElementById("shiv_container7").style.display = "none";
    setTimeout(function () {
        thanks();
    },0)

}



function thanks() {
    document.getElementById("shiv_container8").style.display = "block";
}

function shiv_back_btn2() {
    document.getElementById("shiv_container2").style.display = "none";
    document.getElementById("shiv_container1").style.display = "block";
}

function shiv_back_btn3() {
    document.getElementById("shiv_container3").style.display = "none";
    document.getElementById("shiv_container2").style.display = "block";
}

function shiv_back_btn4() {
    document.getElementById("shiv_container4").style.display = "none";
    document.getElementById("shiv_container3").style.display = "block";
}

function shiv_back_btn5() {
    document.getElementById("shiv_container5").style.display = "none";
    document.getElementById("shiv_container4").style.display = "block";
}

function shiv_back_btn6() {
    document.getElementById("shiv_container6").style.display = "none";
    document.getElementById("shiv_container5").style.display = "block";
}

function shiv_back_btn7() {
    document.getElementById("shiv_container7").style.display = "none";
    document.getElementById("shiv_container5").style.display = "block";
}




function shiv_other_btn4() {
    document.getElementById("shiv_container4").style.display = "none";
    document.getElementById("shiv_container5").style.display = "block";
}

function shiv_notsure_btn5() {
    document.getElementById("shiv_container5").style.display = "none";
    document.getElementById("shiv_container6").style.display = "block";
}


let userDataArr = JSON.parse(localStorage.getItem("userData"))||[];
let submit_btn = () => {
    let name = document.getElementById("shiv_name").value;
    let email = document.getElementById("shiv_email").value;
    let company = document.getElementById("shiv_company").value;
    let employessCount = document.getElementById("shiv_employees").value;
    let phoneNo = document.getElementById("shiv_phone").value;
    let password = document.getElementById("shiv_password").value;
    let cpassword = document.getElementById("shiv_cpassword").value;


    let userDataObj = {
        name, email, company, employessCount, phoneNo, password, cpassword
    }

    let flag=true;
    if (name == "" || !name.includes(" ")) {
        document.getElementById("empty_name").textContent = "Hi, we’re Gusto. What’s your full name?";
        flag = false;
    } else {
        document.getElementById("empty_name").textContent = null;
    }

    if (email == "" || !email.includes("@")) {
        document.getElementById("empty_email").textContent = "You’ll sign into Gusto with this email address.";
        flag = false;
    } else {
        document.getElementById("empty_email").textContent = null;
    }

    if (company == "" || company.includes(0) || company.includes(1) || company.includes(2) || company.includes(3) || company.includes(4) || company.includes(5) || company.includes(6) || company.includes(7) || company.includes(8) || company.includes(9)) {
        document.getElementById("empty_company").textContent = "What’s the official name of your business?";
        flag = false;
    } else {
        document.getElementById("empty_company").textContent = null;
    }

    if (phoneNo.length < 10 || phoneNo.length > 10) {
        document.getElementById("empty_phone").textContent = "What's your number? We won't share it with anyone.";
        flag = false;
    } else {
        document.getElementById("empty_phone").textContent = null;
    }

    if ((password=="")||(password.length < 8) ||( !password.includes("a") && !password.includes("b") && !password.includes("c") && !password.includes("k") && !password.includes("s") && !password.includes("d") && !password.includes("l") && !password.includes("t") && !password.includes("e") && !password.includes("m") && !password.includes("u") && !password.includes("f") && !password.includes("n") && !password.includes("v") && !password.includes("g") && !password.includes("o") && !password.includes("w") && !password.includes("h") && !password.includes("p") && !password.includes("x") && !password.includes("i") && !password.includes("q") && !password.includes("y") && !password.includes("j") && !password.includes("r") && !password.includes("z")) || (!password.includes(0) && !password.includes(1) && !password.includes(2) && !password.includes(3) && !password.includes(4) && !password.includes(5) && !password.includes(6) && !password.includes(7) && !password.includes(8) && !password.includes(9))){
        document.getElementById("empty_password").textContent="A valid password is required.";
        flag=false;
    }else{
        document.getElementById("empty_password").textContent=null;
    }
        
    if(cpassword != password){
        document.getElementById("empty_cpassword").textContent="Passwords do not match.";
        flag=false;
    }else{
        document.getElementById("empty_cpassword").textContent=null;
    }

    
    if (flag === true) {
        userDataArr.push(userDataObj);
        console.log(userDataArr);
        localStorage.setItem("userData", JSON.stringify(userDataArr));
        setTimeout(function(){
            nextWindow();
        },1000)
    }
}

function nextWindow(){
    window.location.href="thankyouPage.html";
}

function SignIn(){
    window.location.href="signInPage.html";
}

function signInHere(){
    window.location.href="signInPage.html";
}