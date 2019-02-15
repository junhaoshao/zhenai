function login(){
    var xhr=createXhr();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res=xhr.responseText;
            console.log(res);
        }
    }
    xhr.open("post","mypro/login",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var uname=$("uname").value;
    var upwd=$("upwd").value;
    var formData="uname="+uname+"&upwd="+upwd;
    xhr.send(formData);
}