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
    }
    let userDataArr=JSON.parse(localStorage.getItem("userData"))|[];
    let signIn = ()=>{
        let email=document.getElementById("shiv_email").value;
        let password=document.getElementById("shiv_password").value;
        let getDataObj={
            email,password
        }
       
        let flag;
        userDataArr.forEach((ele)=>{
            if(getDataObj.email!=ele.email && getDataObj.password!=ele.password){
                alert("User doesn't exist")
                flag=false;
                return;
            }else if(getDataObj.password!=ele.password){
                alert("Please enter a valid password")
                flag=false;
                return;
            }else if(getDataObj.email!=ele.email){
                alert("User doesn't exist")
                flag=false;
                return;
            }else{
                flag=true;
            }
        })

        if(flag==true){
            alert("Sign In successfull");
            localStorage.setItem("verify_details",JSON.stringify(getDataObj));
        }
    }