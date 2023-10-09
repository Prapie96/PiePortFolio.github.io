window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password1 = document.forms["myForm"]["password"].value;
    var Repassword = document.forms["myForm"]["Repassword"].value;
   if(password1 != Repassword) 
   {
        alert("Password not Match pls Register again ");
        return false;
   }
    

}