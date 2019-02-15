//1.查找触发事件的元素
var txtName=document.getElementsByName("uname")[0];
var txtPwd=document.getElementsByName("upwd")[0];
var txtPhone=document.getElementsByName("phone")[0];
//2.绑定事件
txtName.onfocus=txtPwd.onfocus=txtPhone.onfocus=function(){
    var txt=this;
    var div=txt.parentNode.nextElementSibling.children[0];
//3.查找要修改的元素
//4.修改的元素
    div.className="";
}
//2.绑定事件处理函数
txtName.onblur=function(){
    vali(this,/^(\w){6,16}$/);
}
function vali(txt,reg){
    var div=txt.parentNode.nextElementSibling.children[0];
    if(reg.test(txt.value)){
        div.className='vali_success';
    }else{
        div.className='vali_fail';
    }
}
txtPwd.onblur=function(){
    vali(this,/^(\w){6,12}$/);
}
txtPhone.onblur=function(){
    vali(this,/^(\d){11}$/);
}