let input=document.getElementById("shiv_password");
    let show=()=>{
        document.getElementById("show").style.display="none";
        document.getElementById("hide").style.display="block";
        if(input.type=="password"){
            input.type="text";
        }else{
            input.type="password";
        }
    }
    let hide=()=>{
        document.getElementById("hide").style.display="none";
        document.getElementById("show").style.display="block";
        if(input.type=="text"){
            input.type="password";
        }else{
            input.type="text";
        }
    }
    
    let userDataArr=JSON.parse(localStorage.getItem("userData"))||[];
    



    let userDataArr=JSON.parse(localStorage.getItem("userData"))||[];
    console.log(userDataArr);
    let signIn = ()=>{
        let email=document.getElementById("shiv_email").value;
        let password=document.getElementById("shiv_password").value;
        let getDataObj={
            email,password
        }
       
        let verifiedData=[];
        let flag=true;
        userDataArr.forEach((ele)=>{
            if(getDataObj.email==""||(getDataObj.email!=ele.email)){
                flag=false;
                document.getElementById("empty_email").textContent="Correct Email Address is required";
            }else{
                document.getElementById("empty_email").textContent=null;
            }
            
            if(getDataObj.password==""||(getDataObj.password!=ele.password)){
                flag=false;
                document.getElementById("empty_password").textContent="A valid password is required"
                return;
            }else{
                document.getElementById("empty_password").textContent=null;
            }
            if(getDataObj.email==ele.email && getDataObj.password==ele.password){
                verifiedData.push(ele);
                return;
            }
        })

        if(flag==true){
            localStorage.setItem("verified_details",JSON.stringify(verifiedData));
            window.location.href="landingpage.html";
        }
    }

    document.getElementById("google").addEventListener("click",function myData(){
        window.location.href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=offline&client_id=416608718644-0p2f63469gheljgnojejgcd74hhmbaip.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapp.gusto.com%2Fuser%2Fauth%2Fgoogle_oauth2%2Fcallback&response_type=code&scope=email%20profile&state=6ebc9c7793cb0ed98f9700784ee888cc46bfb770f51e3c67&flowName=GeneralOAuthFlow";
    })

    document.getElementById("xero").addEventListener("click",function myDeta(){
        window.location.href="https://login.xero.com/identity/user/login?ReturnUrl=%2Fidentity%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dexternal_gusto%26nonce%3D08a410f7767fbd6215e1121cf287e6f1111751b923e0935f%26redirect_uri%3Dhttps%253A%252F%252Fapp.gusto.com%252Fuser%252Fauth%252Fxero%252Fcallback%26response_mode%3Dform_post%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%2520email%2520offline_access%26state%3D1d4947660634770123b0c920fea7d188e5b5b754ec4f565f";
    })

    document.getElementById("intuit").addEventListener("click",function myDATA(){
        window.location.href="https://accounts.intuit.com/index.html?redirect_url=https%3A%2F%2Fappcenter.intuit.com%2Fapp%2Fconnect%2Foauth2%3Fclient_id%3DQ0XdwplasCYkpZJkubLKQAhiPlQkauhvFEr4SSAq3dA2sK6rUL%26nonce%3Db4ae7fdd8df4fb20845958da43c071b424f26da806695860%26redirect_uri%3Dhttps%253A%252F%252Fapp.gusto.com%252Fuser%252Fauth%252Fintuit%252Fcallback%26response_mode%3Dform_post%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%26state%3Dcb70a56a4899f86b2087457c084a9b8f88b97de609763a19&offering_id=Intuit.sbg-fms.ippdevx&partner_uid_button=google&appfabric=true";
    })

    let qwe=()=>{
        window.location.href="signUpPage.html";
    }

    let qw=()=>{
        window.location.href="signUpPage.html";
    }

    let qwer=()=>{
        window.location.href="index.html";
    }