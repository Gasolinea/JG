
 var tbs=document.querySelectorAll('.tb')
 // console.log(tbs);
//  this.className='index1'      
 for(var i=0;i<tbs.length;i++){
 tbs[i].onclick=function(){
     for(var i=0;i<tbs.length;i++){
        tbs[i].className='index';
     }
     this.className='index1'      

 }
 
}
  var mnew=document.getElementsByClassName('mnew')[0]
  var more=document.getElementsByClassName('more')[0]
   
   more.onclick=function(){

    var ajax_=new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get','http://127.0.0.1:3000/guid/new');
    ajax_.send();
    ajax_.onreadystatechange=function(){
        if(ajax_.readyState==4){
            if(ajax_.status==200){
              var str= ajax_.responseText;
              var data = JSON.parse(ajax_.responseText);
              console.log(data);
   
              // 调用渲染数据的函数
             
              var nihao=document.getElementsByClassName('cf')[0]
              console.log(nihao);
              nihao.style.display='block';   
              more.children[0].style.display='none';
              // 调用渲染数据的函数
             setTimeout(fn,1000)
             function fn(){      
                render(data)
             }
            
            }
        }
    }
       function render(data_){
           // console.log(data_);
           var str='';
           str+=`
           <ul>
           <li>
               <img src="../img/g1.jpg" alt="">
               <p>他用十二年找一把完美剃须刀，给你两万字终极购买指南</p>
                <span class="x">3</span>
                <span class="message">3</span>             
           </li>
           <li>
               <img src="../img/g2.jpg" alt="">         
               <p>2016，这8支钢笔够你装逼一整年</p>
               <span class="x1">3</span>
               <span class="message1">3</span>  
           </li>
           <li>
               <img src="../img/g3.jpg" alt="">         
               <p>到底有没有完美的iPhone手机配件，答案都在这里</p>
               <span class="x">3</span>
               <span class="message">3</span>  
           </li>
           <li>
               <img src="../img/g4.jpg" alt="">         
               <p>花万元把蜗居秒变"豪宅"？这12件家具就能帮你办到</p>
               <span class="x">3</span>
               <span class="message">3</span>  

           </li>
       </ul>
       <ul>
           <li>
               <img src="../img/g1.jpg" alt="">
               <p>他用十二年找一把完美剃须刀，给你两万字终极购买指南</p>
                <span class="x">3</span>
                <span class="message">3</span>             
           </li>
           <li>
               <img src="../img/g2.jpg" alt="">         
               <p>2016，这8支钢笔够你装逼一整年</p>
               <span class="x1">3</span>
               <span class="message1">3</span>  
           </li>
           <li>
               <img src="../img/g3.jpg" alt="">         
               <p>到底有没有完美的iPhone手机配件，答案都在这里</p>
               <span class="x">3</span>
               <span class="message">3</span>  
           </li>
           <li>
               <img src="../img/g4.jpg" alt="">         
               <p>花万元把蜗居秒变"豪宅"？这12件家具就能帮你办到</p>
               <span class="x">3</span>
               <span class="message">3</span>  

           </li>
       </ul>
       <ul>
           <li>
               <img src="../img/g1.jpg" alt="">
               <p>他用十二年找一把完美剃须刀，给你两万字终极购买指南</p>
                <span class="x">3</span>
                <span class="message">3</span>             
           </li>
           <li>
               <img src="../img/g2.jpg" alt="">         
               <p>2016，这8支钢笔够你装逼一整年</p>
               <span class="x1">3</span>
               <span class="message1">3</span>  
           </li>
           <li>
               <img src="../img/g3.jpg" alt="">         
               <p>到底有没有完美的iPhone手机配件，答案都在这里</p>
               <span class="x">3</span>
               <span class="message">3</span>  
           </li>
           <li>
               <img src="../img/g4.jpg" alt="">         
               <p>花万元把蜗居秒变"豪宅"？这12件家具就能帮你办到</p>
               <span class="x">3</span>
               <span class="message">3</span>  

           </li>
       </ul>
           `
           for(var item of data_){
               str+=`     
              <ul>
               <li>
                   <img src="${item.img}">
                   <p>${item.text}</p>
                    <span class="x">3</span>
                    <span class="message">3</span>             
               </li>
               <li>
                   <img src="${item.img}">
                   <p>${item.text}</p>
                    <span class="x">3</span>
                    <span class="message">3</span>             
               </li>
               <li>
                   <img src="${item.img}">
                   <p>${item.text}</p>
                    <span class="x">3</span>
                    <span class="message">3</span>             
               </li>
               <li>
                   <img src="${item.img}">
                   <p>${item.text}</p>
                    <span class="x">3</span>
                    <span class="message">3</span>             
               </li>
               </ul>
               `   
           }

 // 0
 str+=`
 <div class="back">
 <img src="./../css/img/top.webp" alt="">
 <!-- <p>返回顶部</p> -->
 </div>
 `
   var  con=document.getElementsByClassName('con')[0];
   con.innerHTML=str;

  
     // 1
     var back=document.getElementsByClassName('back')[0];
     window.onscroll=function(){
     var top=document.documentElement.scrollTop ;
     back.onclick=function(){
       var timer=setInterval(function(){
        var top_=document.documentElement.scrollTop ;
        var speed=Math.floor(-top/7)
        document.documentElement.scrollTop=top_+speed;
        if(top_==0){
            clearInterval(timer)
        }
       },50)
   }
  }
// 1
       }
       
     
}


