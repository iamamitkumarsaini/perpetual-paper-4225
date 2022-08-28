
let allCate = document.getElementById("smallDivbtn1");

let noCost = document.getElementById("smallDivbtn2");

let lowCost = document.getElementById("smallDivbtn3");

let premium = document.getElementById("smallDivbtn4");

let amit_container = document.getElementById("amit_container");

let lowcost_container = document.getElementById("lowcost_container");

let nocost_container = document.getElementById("nocost_container");

let premium_container = document.getElementById("premium_container");







let displayAllCate = () => {

    amit_container.style.display = "block";

    allCate.style.backgroundColor = "#0A8080";
    allCate.style.color = "white";

    nocost_container.style.display = "none"
    noCost.style.backgroundColor = "#ecebec";
    noCost.style.color = "grey";

    lowcost_container.style.display = "none"
    lowCost.style.backgroundColor = "#ecebec";
    lowCost.style.color = "grey";

    premium_container.style.display = "none"
    premium.style.backgroundColor = "#ecebec";
    premium.style.color = "grey";

}




allCate.addEventListener("click",displayAllCate);



let displayNoCostCate = () => { 

    nocost_container.style.display = "block"
    noCost.style.backgroundColor = "#0A8080";
    noCost.style.color = "white";
    
    amit_container.style.display = "none";
    allCate.style.backgroundColor = "#ebeceb";
    allCate.style.color = "grey";

    lowcost_container.style.display = "none"
    lowCost.style.backgroundColor = "#ecebec";
    lowCost.style.color = "grey";

    premium_container.style.display = "none"
    premium.style.backgroundColor = "#ecebec";
    premium.style.color = "grey";

}

noCost.addEventListener("click",displayNoCostCate);



let displayLowCostCate = () => {

    lowcost_container.style.display = "block"
    lowCost.style.backgroundColor = "#0A8080";
    lowCost.style.color = "white";

    amit_container.style.display = "none";
    allCate.style.backgroundColor = "#ebeceb";
    allCate.style.color = "grey";

    nocost_container.style.display = "none"
    noCost.style.backgroundColor = "#ecebec";
    noCost.style.color = "grey";

    premium_container.style.display = "none"
    premium.style.backgroundColor = "#ecebec";
    premium.style.color = "grey";
}

lowCost.addEventListener("click",displayLowCostCate);




let displayPremiumCate = () => {

    premium_container.style.display = "block"
    premium.style.backgroundColor = "#0A8080";
    premium.style.color = "white";

    amit_container.style.display = "none";
    allCate.style.backgroundColor = "#ebeceb";
    allCate.style.color = "grey";

    nocost_container.style.display = "none"
    noCost.style.backgroundColor = "#ecebec";
    noCost.style.color = "grey";

    lowcost_container.style.display = "none"
    lowCost.style.backgroundColor = "#ecebec";
    lowCost.style.color = "grey";
}

premium.addEventListener("click",displayPremiumCate);







let plusBtn1 = document.getElementById("plusBtn1");


let hidePlus1Btn = () => {

    let fbox1 = document.getElementById("fbox1"); 
    let backsidefbox1 = document.getElementById("backsidefbox1");

    fbox1.style.display = "none";
    backsidefbox1.style.display = "flex"

    let = allplusBtn1 = document.getElementById("allplusBtn1");

    allplusBtn1.style.transform = "rotate(90deg)";
}

plusBtn1.addEventListener("click",hidePlus1Btn);





let crossBtn1 = document.getElementById("crossBtn1");


let showPlus1Btn = () => {

    let fbox1 = document.getElementById("fbox1"); 
    let backsidefbox1 = document.getElementById("backsidefbox1");

    fbox1.style.display = "flex";
    backsidefbox1.style.display = "none";

    let = allplusBtn1 = document.getElementById("allplusBtn1");

    plusBtn1.style.transform = "rotate(90deg)";
}

crossBtn1.addEventListener("click",showPlus1Btn);












let plusBtn2 = document.getElementById("plusBtn2");

let hidePlus2Btn = () => {

    let maindiv5 = document.getElementById("maindiv5");
    let maindiv5backside = document.getElementById("maindiv5backside");

    maindiv5.style.display = "none";
    maindiv5backside.style.display = "block"
}

plusBtn2.addEventListener("click",hidePlus2Btn);



let crossBtn2 = document.getElementById("crossBtn2");

let showPlus2Btn = () => {

    let maindiv5 = document.getElementById("maindiv5");
    let maindiv5backside = document.getElementById("maindiv5backside");

    maindiv5.style.display = "block";
    maindiv5backside.style.display = "none";
}

crossBtn2.addEventListener("click",showPlus2Btn);










let plusBtn3 = document.getElementById("plusBtn3");

let hidePlus3Btn = () => {

    let maindiv6 = document.getElementById("maindiv6");
    let maindiv6backside = document.getElementById("maindiv6backside");

    maindiv6.style.display = "none";
    maindiv6backside.style.display = "block"
}


plusBtn3.addEventListener("click",hidePlus3Btn);

let crossBtn3 = document.getElementById("crossBtn3");

let showPlus3Btn = () => {

    let maindiv6 = document.getElementById("maindiv6");
    let maindiv6backside = document.getElementById("maindiv6backside");

    maindiv6.style.display = "block";
    maindiv6backside.style.display = "none";
}

crossBtn3.addEventListener("click",showPlus3Btn);











let premiumplusBtn1 = document.getElementById("premiumplusBtn1");


let hidePlus1BtnPremium = () => {

    let premiumfbox1 = document.getElementById("premiumfbox1"); 
    let premium_backsidefbox1 = document.getElementById("premium_backsidefbox1");

    premiumfbox1.style.display = "none";
    premium_backsidefbox1.style.display = "flex"
}

premiumplusBtn1.addEventListener("click",hidePlus1BtnPremium);





let premiumcrossBtn1 = document.getElementById("premiumcrossBtn1");


let showPlus1BtnPremium = () => {

    let premiumfbox1 = document.getElementById("premiumfbox1"); 
    let premium_backsidefbox1 = document.getElementById("premium_backsidefbox1");

    premiumfbox1.style.display = "flex";
    premium_backsidefbox1.style.display = "none";
}

premiumcrossBtn1.addEventListener("click",showPlus1BtnPremium)






let lowcostplusBtn2 = document.getElementById("lowcostplusBtn2");

let hidePlus2BtnLowcost = () => {

    let lowcostmaindiv5 = document.getElementById("lowcostmaindiv5");
    let lowcost_maindiv5backside = document.getElementById("lowcost_maindiv5backside");

    lowcostmaindiv5.style.display = "none";
    lowcost_maindiv5backside.style.display = "block"
}

lowcostplusBtn2.addEventListener("click",hidePlus2BtnLowcost);



let lowcostcrossBtn2 = document.getElementById("lowcostcrossBtn2");

let showPlus2BtnLowcost = () => {

    let lowcostmaindiv5 = document.getElementById("lowcostmaindiv5");
    let lowcost_maindiv5backside = document.getElementById("lowcost_maindiv5backside");

    lowcostmaindiv5.style.display = "block";
    lowcost_maindiv5backside.style.display = "none";
}

lowcostcrossBtn2.addEventListener("click",showPlus2BtnLowcost);






let nocostplusBtn3 = document.getElementById("nocostplusBtn3");

let hidePlus3BtnNocost = () => {

    let nocostmaindiv6 = document.getElementById("nocostmaindiv6");
    let nocost_maindiv6backside = document.getElementById("nocost_maindiv6backside");

    nocostmaindiv6.style.display = "none";
    nocost_maindiv6backside.style.display = "block"
}


nocostplusBtn3.addEventListener("click",hidePlus3BtnNocost);

let nocostcrossBtn3 = document.getElementById("nocostcrossBtn3");

let showPlus3BtnNocost = () => {

    let nocostmaindiv6 = document.getElementById("nocostmaindiv6");
    let nocost_maindiv6backside = document.getElementById("nocost_maindiv6backside");

    nocostmaindiv6.style.display = "block";
    nocost_maindiv6backside.style.display = "none";
}

nocostcrossBtn3.addEventListener("click",showPlus3BtnNocost)










let question1 = document.getElementById("question1");

let question2 = document.getElementById("question2");

let question3 = document.getElementById("question3");

let question4 = document.getElementById("question4");


let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");


let itag1 = document.getElementById("itag1");
let itag2 = document.getElementById("itag2");
let itag3 = document.getElementById("itag3");
let itag4 = document.getElementById("itag4");

let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;

let showAnswer1 = () => {

    if (flag1==false){
        answer1.style.display = "block";
        flag1 = true;

        itag1.style.transform = "rotate(90deg)"
        itag1.style.transition = "all 0.3s ease-in-out";

         flag2 = false;
         flag3 = false;
         flag4 = false;
    }

     else{
        answer1.style.display = "none";
        flag1=false;
        itag1.style.transform = "rotate(0deg)";
    }

    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";

    itag2.style.transform = "rotate(0deg)";
    itag3.style.transform = "rotate(0deg)";
    itag4.style.transform = "rotate(0deg)";
}

question1.addEventListener("click",showAnswer1);



let showAnswer2 = () => {

    if (flag2==false){
        answer2.style.display = "block";
        flag2 = true;

        itag2.style.transform = "rotate(90deg)";
        itag2.style.transition = "all 0.3s ease-in-out";

         flag1 = false;
         flag3 = false;
         flag4 = false;
    }

     else{
        answer2.style.display = "none";
        flag2=false;
        itag2.style.transform = "rotate(0deg)";
    }

    answer1.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";

    itag1.style.transform = "rotate(0deg)";
    itag3.style.transform = "rotate(0deg)";
    itag4.style.transform = "rotate(0deg)";
}

question2.addEventListener("click",showAnswer2);




let showAnswer3 = () => {

    
    if (flag3==false){
        answer3.style.display = "block";
        flag3 = true;

        itag3.style.transform = "rotate(90deg)";
        itag3.style.transition = "all 0.3s ease-in-out";

        flag1 = false;
         flag2 = false;
         flag4 = false;
    }

     else{
        answer3.style.display = "none";
        flag3=false;
        itag3.style.transform = "rotate(0deg)";
    }

    answer1.style.display = "none";
    answer2.style.display = "none";
    answer4.style.display = "none";

    itag1.style.transform = "rotate(0deg)";
    itag2.style.transform = "rotate(0deg)";
    itag4.style.transform = "rotate(0deg)";
}

question3.addEventListener("click",showAnswer3);




let showAnswer4 = () => {

    if (flag4==false){
        answer4.style.display = "block";
        flag4 = true;

        itag4.style.transform = "rotate(90deg)";
        itag4.style.transition = "all 0.3s ease-in-out";

        flag1 = false;
         flag2 = false;
         flag3 = false;
    }

     else{
        answer4.style.display = "none";
        flag4=false;
        itag4.style.transform = "rotate(0deg)";
    }

    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";

    itag1.style.transform = "rotate(0deg)";
    itag2.style.transform = "rotate(0deg)";
    itag3.style.transform = "rotate(0deg)";
}

question4.addEventListener("click",showAnswer4);



let imgArr = [
    "https://prod.gusto-assets.com/assets/product/benefits/benefits_hub/TheSaltyDonut_Miami_FL-7c502c2e168a61a54c66514ea204ab8df694e797039f1b894f474ab7b0cb255e.jpg",
    "https://prod.gusto-assets.com/assets/product/benefits/benefits_hub/dwg_Austin_TX-313e126a43d478165cb79b00a5f6cf69456252645e24b65acf2fc37bc7588263.jpg",
    "https://prod.gusto-assets.com/assets/product/benefits/benefits_hub/Handlebar_Cyclery_Austin_TX-dbdd43719bd45f78906712080e02af6368e428308c9e610e2755469d7aaca509.jpg"

];

let count=0;

function slideImg (){

    let changeImage = document.getElementById("changeImage");
    changeImage.src = imgArr[count%imgArr.length]
    count++
    console.log(count,count%imgArr.length)

    let changeDiv = document.getElementById("img_ben")

    changeDiv.style.animation =  "fadeIn 5s";
}

setInterval (slideImg,3000)