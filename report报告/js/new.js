function show() {
    var Ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
    Ajax_.open('get', 'http://127.0.0.1:3000/report/hot')
    Ajax_.send()

    Ajax_.onreadystatechange = function () {
        if (Ajax_.readyState == 4) {
            if (Ajax_.status == 200) {
                var data = JSON.parse(Ajax_.responseText)
                console.log(data);
                render(data)
            }
        }
    }
}

function render(data_) {
    console.log(1);
    var str = ''
    for (var arr of data_) {
        str += `  
        <li>
  <a href="../guid/detail.html">
    <img src="${arr.img}" width="700" height="412"/>
    <div class="info">
        <p class="title">${arr.text}</p>
        <div class="btm fix">
            <div class="userInfo left">
                <span class="avt"></span>
                <span class="name">${arr.uName}</span>
                <span class="time">${arr.endTime}</span>
            </div>
            <div class="right icon">
                <span class="zan">3</span>
                <span class="look">3</span>
            </div>
        </div>
    </div>
</a>
</li>
        `
    }

    var myDiv = document.getElementById('myDiv')
    myDiv.innerHTML = str
}
