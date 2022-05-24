
if (getCookie('rember')) {
    document.getElementsByClassName("userName")[0].value = getCookie('username');
    document.getElementsByClassName("password")[0].value = getCookie('psd');
    document.getElementsByClassName("loadGiet")[0].checked = getCookie('rember');
}
//设置cookie
function login() {
    var userName_ = document.getElementsByClassName("userName")[0].value;
    var password_ = document.getElementsByClassName("password")[0].value;
    var loadGiet_ = document.getElementsByClassName("loadGiet")[0].checked;
    console.log(userName_, password_, loadGiet_);
    if (loadGiet_) {
        setCookie('username', userName_);
        setCookie('psd', password_);
        setCookie('rember', loadGiet_);
        setCookie('islogin', true)
        alert('登陆成功');
    } else {
        removeCookie('username');
        removeCookie('psd');
        removeCookie('rember');
    }
}




