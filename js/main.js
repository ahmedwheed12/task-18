// var y =x.length; // عدد الحروف اللى جوه ال string
// var y =x.indexOf("@",2)
// var y =x.lastIndexOf("l",5)
// var y =x.search("w")
// var y =x.slice(-10,-5)
// var y= x.substring(6,11) نفس ال slice بس مش بتاخد قيم بالسالب
// var y =x.substr(6,5) نفسها بردو بس البرمتم التانى بياخد هيقطع قد اى
// var y = x.toUpperCase() بتخلى كل الحروف كابيتل
// var y = x.toLowerCase() بتخلى كل الحروف اسمول
// var y = x.replace(/world/ig, "ali") بتشيل كلمة مكان كلمة
// var y = x.trim() بتشيل الاسبيس 
// var y = x.charAt(7) بتديله المكان يديك الحرف فين
// string method 
// var x = "hello World!" ;
// alert (y)
// ===========================================================
function validate (){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");
    result.setAttribute("class","alert alert-danger");
    if(user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML = "enter date in form";
        return false;

    }else if (user.length <5 || user.length >15 ){
        result.innerHTML = "Enter 5-15 character in Name";
        return false;
    }else if (email.indexOf("@",1)==-1 || email.indexOf(".com")==-1){
        result.innerHTML = "Enter Valid Email";
        return false;
    }else if (pass.length <8){
        result.innerHTML ="weak password";
        return false;
    }else if (pass != confirm){
        result.innerHTML = "match password";
        return false;
    }else{
        return true;
    }


}

