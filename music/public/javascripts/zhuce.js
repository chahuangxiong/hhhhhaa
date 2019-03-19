function zhuce() {
    var pwd1=document.getElementsByName('password1').item(0).value;
    var pwd2=document.getElementsByName('password2').item(0).value;
    if(pwd1.length>16||pwd1.length<6){

        alert("请输入6—16位的密码");
        return false;
    }else if(pwd1==pwd2){
        return true;
    }

    alert("两次密码输入不正确");
    return false;

}
