// var mnew=document.getElementsByClassName('mnew')[0]
// mnew.onclick=function(){
//     this.className='index'
// }
// var mhot=document.getElementsByClassName('mhot')[0]
// mhot.onclick=function(){
//     this.className='index'
// }
var tbs=document.querySelectorAll('.tb')
console.log(tbs);
for(var i=0;i<tbs.length;i++){
    tbs[i].onclick=function(){
        for(var i=0;i<tbs.length;i++){
           tbs[i].className='index'
          
        }
        this.className='index1'
        
    }
    
}
