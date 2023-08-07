let firstPairPrice=195.00;
let secondPairPrice=345.00;
let thirdPairPrice=528.00;
// Function for handling box events based on radio button status
const handleBundleVisibility=()=>{
    let radio1=document.getElementById("bundle1");
    let radio2=document.getElementById("bundle2");
    let radio3=document.getElementById("bundle3");
    if(radio1.checked){
        // if  the first pair radio button is in checked status then we are showing size and color options.
        // and heighlight the background and border 
        document.getElementById("size_colors1").style.display="block";
        document.querySelector(".box1").style.borderColor="green";
        document.querySelector(".box1").style.backgroundColor="#e6ffe6";
        document.querySelector(".total").innerHTML=`Total : DKK ${firstPairPrice}.00`;
    }else{
        //first pair radio button is unchecked hidding the color and size otions
        document.getElementById("size_colors1").style.display="none";
        document.querySelector(".box1").style.borderColor="gray";
        document.querySelector(".box1").style.backgroundColor="white";
    }
    if(radio2.checked){
        // if  the second pair radio button is in checked status then we are showing size and color options.
        // and heighlight the background and border 
        document.getElementById("size_colors2").style.display="block";
        document.querySelector(".box2").style.borderColor="green";
        document.querySelector(".box2").style.backgroundColor="#e6ffe6";
        document.querySelector(".total").innerHTML=`Total : DKK ${secondPairPrice}.00`;
    }else{
        //second pair radio button is unchecked hidding the color and size otions
        document.getElementById("size_colors2").style.display="none";
        document.querySelector(".box2").style.borderColor="gray";
        document.querySelector(".box2").style.backgroundColor="white";
       
    }
    if(radio3.checked){
         // if  the third pair radio button is in checked status then we are showing size and color options.
        // and heighlight the background and border .
        document.getElementById("size_colors3").style.display="block";
        document.querySelector(".box3").style.borderColor="green";
        document.querySelector(".box3").style.backgroundColor="#e6ffe6";
        document.querySelector(".total").innerHTML=`Total : DKK ${thirdPairPrice}.00`;
    }else{
        //second pair radio button is unchecked hidding the color and size otions
        document.getElementById("size_colors3").style.display="none";
        document.querySelector(".box3").style.borderColor="gray";
        document.querySelector(".box3").style.backgroundColor="white";
    }
}