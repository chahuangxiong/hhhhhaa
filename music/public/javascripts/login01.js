function validPwd(){
    var pwd=document.getElementsByName('password')[0].value;
    if (pwd.length>16||pwd.length<5){
        alert("输入错误");
        return false;
    } return true;
}
