// var report_btn = document.getElementById('report-btn')
// report_btn.onclick = function () {
//     report_btn.className = 'loading';
//     report_btn.innerHTML = '正在加载中'
// }

function show() {
    var Ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
    Ajax_.open('get', 'http://127.0.0.1:3000/report/hot')
    Ajax_.send()

    Ajax_.onreadystatechange = function () {
        if (Ajax_.readyState == 4) {
            if (Ajax_.status == 200) {
                var data = JSON.parse(Ajax_.responseText)

                //     allLen = data.length;//获取json长度
                // var data1 = data[indexNum];
                // var dlen = data1.length;
                // for(var j=0;j<dlen;j++){
                // 	var thisd = data1[j];
                // 	var img = thisd["img"];
                // 	var text = thisd["text"];
                // 	var uName=thisd["uName"];
                // 	var sTime=thisd["sTime"];
                // 	param+='<li><a href="../guid/detail.html"><img src="'+img+'" width="700" height="412"/><div class="info"><p class="title">'+text+'</p><div class="btm fix"><div class="userInfo left"><span class="avt"></span><span class="name">'+uName+'</span><span class="time">'+sTime+'</span></div><div class="right icon"><span class="zan">3</span><span class="look">3</span></div></div></div></a></li>';
                // }
                // var myDiv=document.getElementById('myDiv')
                // myDiv.appendChild(str);
                // myDiv.innerHTML=myDiv
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
    // myDiv.appendChild(str);
    myDiv.innerHTML = str
}









{/* <li>
<a href="../guid/detail.html">
    <img src="${arr.img}" />
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
</li> */}