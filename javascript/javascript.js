function validationform(){
var Fname=document.validateform.fname.value;
var Lname=document.validateform.lname.value;
var City=document.validateform.city.value;
var Number=document.validateform.phnumber.value;
var Address=document.validateform.add.value;
if(Fname==null || Fname==""){
    alert(" Enter Your Firstname");
    return false;
}
else if(Lname==null || Lname==""){
    alert("Enter Your Lastname");
return false;
}
else if(City==null || City==""){
    alert("Enter Your City");
return false;
}
else if(Number.length<11){
    alert("Enter valid Number");
    return false;
}
else if(Address==null || Address==""){
    alert("Enter Your Address");
    return false;
}
}




















  




