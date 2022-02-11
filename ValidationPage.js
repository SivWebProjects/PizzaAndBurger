let invalidBorder="4px double red";
let validBorder="4px double green";

let fnameNode=document.getElementById("fname");
let spanNode1=document.getElementById("error1");
function validate1(){
    let firstName=fnameNode.value;
    spanNode1.textContent="";
    if(firstName===""){
        spanNode1.textContent="First Name is required";
        fnameNode.style.border=invalidBorder;
        return false;
    }
    else{
        fnameNode.style.border=validBorder;
        return true;
    }
}

let lnameNode=document.getElementById("lname");
let spanNode2=document.getElementById("error2");
function validate2(){
    let lastName=lnameNode.value;
    spanNode2.textContent="";
    if(lastName===""){
        spanNode2.textContent="Last Name is required";
        lnameNode.style.border=invalidBorder;
        return false;
    }
    else{
        lnameNode.style.border=validBorder;
        return true;
    }
}

let ageNode=document.getElementById("age");
let spanNode3=document.getElementById("error3");
function validate3(){
    let age=ageNode.value;
    spanNode3.textContent="";
    if(age===""){
        spanNode3.textContent="";
        ageNode.style.border=invalidBorder;
        return false;
    }
    if(age<1 || age>100){
        spanNode3.textContent="Age should be in the range of 1-100";
        ageNode.style.border=invalidBorder;
        return false;
    }
    else{
        ageNode.style.border=validBorder;
        return true;
    }
}

let mobnumNode=document.getElementById("mobnum");
let spanNode4=document.getElementById("error4");
function validate4(){
    let mobnum=mobnumNode.value;
    spanNode4.textContent="";
    let regexp=new RegExp("^[0-9]{10}$");
    let result=regexp.test(mobnum); //true: mobnum matching with pattern, false: not
    if(mobnum===""){
        spanNode4.textContent="Mobile Number is required";
        mobnumNode.style.border=invalidBorder;
        return false;
    }
    else if(result===false){
        spanNode4.textContent="Please enter valid mobile number";
        mobnumNode.style.border=invalidBorder;
        return false;
    }
    else{
        mobnumNode.style.border=validBorder;
        return true;
    }
}

let emailNode=document.getElementById("emailId");
let spanNode5=document.getElementById("error5");
function validate5(){
    let email=emailNode.value;
    spanNode5.textContent="";
    if(email===""){
        spanNode5.textContent="Email Id is required";
        emailNode.style.border=invalidBorder;
        return false;
    }
    //@ should be there in email id (includes), after @: substring: if substring='' : invalid email id
    else if(!email.includes('@') || email.substring(email.indexOf('@')+1)===''){
        spanNode5.textContent="Please enter valid email Id";
        emailNode.style.border=invalidBorder;
        return false;
    }
    else{
        emailNode.style.border=validBorder;
        return true;
    }
}

let noPeopleNode=document.getElementById('noguests');
let spanNode6=document.getElementById('error6');
function validate6(){
    let count=noPeopleNode.value;
    spanNode6.textContent="";
    if(count===""){
        spanNode6.textContent="Number of Guests is required";
        noPeopleNode.style.border=invalidBorder;
        return false;
    }
    else if(count<1 || count>15){
        spanNode6.textContent="Number of Guests should be in the range of 1-15";
        noPeopleNode.style.border=invalidBorder;
        return false;
    }
    else{
        noPeopleNode.style.border=validBorder;
        return true;
    }
}


let dateNode=document.getElementById('date');
let spanNode7=document.getElementById('error7');
function validate7(){
    let date=dateNode.value;
    spanNode7.textContent="";
    let dateObject = new Date();  //it gives today's date
    //console.log(dateObject);
    let day=String(dateObject.getDate()).padStart(2,'0');
    let month=String(dateObject.getMonth()+1).padStart(2, "0"); //getMonth() returns monh from 0 to 11
    let year=dateObject.getFullYear();
    let todayDate=day+'-'+month+'-'+year;
    //console.log(todayDate);
    if(date===""){
        spanNode7.textContent="Date is required";
        dateNode.style.border=invalidBorder;
        return false;
    }
    else if(date<todayDate){
        spanNode7.textContent="You can make Reservation from today to 10 days";
        dateNode.style.border=invalidBorder;
        return false;
    }
    else{
        dateNode.style.border=validBorder;
        return true;
    }
}

let timeNode=document.getElementById('time');
let spanNode8=document.getElementById('error8');
function validate8(){
    let time=timeNode.value;
    spanNode8.textContent="";
    let dateObject = new Date();
    let hours=String(dateObject.getHours()).padStart(2,'0');
    let minutes=String(dateObject.getMinutes()).padStart(2, "0");
    let presentTime=hours+':'+minutes;
    console.log(time);
    if(time===""){
        spanNode8.textContent="Date is required";
        timeNode.style.border=invalidBorder;
        return false;
    }
    else if(time<presentTime){
        spanNode8.textContent="Please enter valid time";
        timeNode.style.border=invalidBorder;
        return false;
    }
    else{
        timeNode.style.border=validBorder;
        return true;
    }
}

function formValidate(){
    //logic: every field validation
    let st1=validate1();
    let st2=validate2();
    let st3=validate3();
    let st4=validate4();
    let st5=validate5();
    let st6=validate6();
    let st7=validate7();
    let st8=validate8();
    //console.log(st1+" "+st2+" "+st3+" "+st4+" "+st5+" "+st6+" "+st7);
    return(st1 &&  st2 && st3 && st4 && st5 && st6 && st7 && st8);
    //validate7();

}
