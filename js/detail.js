var liking=document.getElementsByClassName('liking')[0]
var la=document.getElementsByClassName('la')[0]
var lp=document.getElementsByClassName('lp')[0]
liking.onmouseenter=function(){
  la.className='index';
  lp.style.color='red'
}

liking.onmouseleave=function(){
    la.className='';
    lp.style.color=''
  }

var sharing=document.getElementsByClassName('sharing')[0]
var sa=document.getElementsByClassName('sa')[0]
var sp=document.getElementsByClassName('sp')[0]
sharing.onmouseenter=function(){
    sa.className='index1';
    sp.style.color='red'
  }
sharing.onmouseleave=function(){
    sa.className='';
    sp.style.color=''
}
