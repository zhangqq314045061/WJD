$(function(){

function quan(){
    var y=$(".quan1")
    var d=$(".f-a-a")
    for(var i=0;i<d.length;i++){
      d[i].index=i
      d[i].onmouseover=function(){
          for(var i=0;i<d.length;i++){
            d[i].style.borderBottom="0"
            y[i].style.display="none"
          }
          d[this.index].style.borderBottom="4px solid red"
          y[this.index].style.display="block"
        }
    }
}
      
// quan();












  function bannerxia(){
    var y=$(".C-c-e")
    var d=$(".C-c-5")
    for(var i=0;i<d.length;i++){
      d[i].index=i
      d[i].onmouseover=function(){
          for(var i=0;i<d.length;i++){
            d[i].style.borderBottom="0"
            // y[i].style.display="none"
          }
          d[this.index].style.borderBottom="4px solid red"
          // y[this.index].style.display="block"
        }
    }
}
      
bannerxia();


















  for(var i=0;i<15;i++){
bannerx(i)
}

  function bannerx(n){
    var y=$(".th")[n]
    var d=$(".C-a-a")[n]
    addEvent(d,"mouseover",function(){y.style.display="block"})
    addEvent(d,"mouseout",function(){y.style.display="none"})   
}

	


    function a2(){
    	var b=$("#b");
    	var gai=$(".gai")[0];
    	b.onmouseover=function(){
    animate(gai,{height:200,width:200},200)
    
	}
	b.onmouseout=function(){
    animate(gai,{height:0,width:0},200)

	}
    }
    a2();



    function a3(){
        var b=$("#f");
        var gai=$(".gaia")[0];
        b.onmouseover=function(){
    animate(gai,{height:260,width:400},200)
    
    }
    b.onmouseout=function(){
    animate(gai,{height:0,width:0},200)

    }
    }
    a3();



    function a4(){
        var b=$("#c");
        var gai=$(".gaib")[0];
        b.onmouseover=function(){
    animate(gai,{height:200,width:200},200)
    
    }
    b.onmouseout=function(){
    animate(gai,{height:0,width:0},200)

    }
    }
    a4();


     function a5(){
        var b=$("#d");
        var gai=$(".gaic")[0];
        b.onmouseover=function(){
    animate(gai,{height:160,width:200},200)
    
    }
    b.onmouseout=function(){
    animate(gai,{height:0,width:0},200)

    }
    }
    a5();
    

    function a6(){
        var b=$("#e");
        var gai=$(".gaid")[0];
        b.onmouseover=function(){
    animate(gai,{height:200,width:1210},200)
    
    }
    b.onmouseout=function(){
    animate(gai,{height:0,width:0},200)

    }
    }
    a6();

    


    function a7(){
        var b=$("#g");
        var gai=$(".gaie")[0];
        b.onmouseover=function(){
    animate(gai,{height:250,width:300},200)
    
    }
    b.onmouseout=function(){
    animate(gai,{height:0,width:0},200)

    }
    }
    a7();



    

    function a8(){
        var b=$(".A-c-a")[0];
        var gai=$(".gouwuche")[0];
        b.onmouseover=function(){
    animate(gai,{height:40,width:250},200)
    
    }
    b.onmouseout=function(){
    animate(gai,{height:0,width:0},200)

    }
    }
    a8();




    function gailu(){


    var floor=$(".gailou");
    var box=$(".box");
    var top=document.scrolltop;
    var b=$(".boxhe")[0];
    var height1=document.documentElement.clientHeight;//获取浏览器的高
    var bh=b.offsetHeight;
    // console.log(document.documentElement.scrollTop);
        
        b.style.top=(height1-bh)/2+"px";//左边楼层控制居中
        for(var i=0;i<box.length;i++){
             box[i].index=i;
          box[i].onclick=function(){
            if(!sign){
                return;
            }
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;
             var top=floor[this.index].offsetTop;
               // obj.scrollTop=top;//瞬间移动
               animate(document.body,{scrollTop:top},300)
               animate(document.documentElement,{scrollTop:top},300)//缓慢移动

            for(var i=0;i<box.length;i++){
                box[i].style.color="#ccc";
                box[this.index].style.color="#f23445";
     //下一个
     //scrollTop>=offsetTop-height
           }
         }
       }
       var sign=true;
         var flag=true;//定义开关
         var flag1=true;//定义开关
        window.onscroll=function(){
            var obj=document.documentElement.scrollTop?document.documentElement:document.body;
              // console.log(obj.scrollTop);//输出obj
              for(var i=0;i<floor.length;i++){
                 if(obj.scrollTop>=floor[i].offsetTop-bh+10){
                      for(var j=0;j<box.length;j++){
                        box[j].style.color="#ccc";
                      }
                    box[i].style.color="#f23445";
                                var imgs=$("imgs",floor[i]);
                                for(var j=0;j<imgs.length;j++){
                                    var aa=imgs[j].getAttribute("aa");
                                    imgs[j].src=aa;
                                }


                 }
              }
              if(obj.scrollTop>=floor[0].offsetTop-bh+10){
                // b.style.opacity=1;//左边到一楼时显示
                if(flag){
                    flag=false;
                    animate(b,{opacity:1},300,function(){
                            flag1=true;
                    });
                }
              }else{
               // b.style.opacity=0;}//左边到一楼时隐藏
                 if(flag1){
                    flag1=false;
                    animate(b,{opacity:0},300,function(){
                        //当执行此处程序，关掉开关
                      flag=true;
                    });
                 }
              }
        }
}
 gailu();




function lunbo(){
  var box=$(".C-b")[0];
    var win=$(".inmg-box")[0];
    var imgs=(".inmg");
    var width=imgs.offsetWidth;
    // console.log(imgBox);
    var yuan=$(".yuan");
    var yuans=$(".yuans")[0];
   
    var left=$(".left")[0];
    var right=$(".right")[0];

      var flag=true;
    var t=setInterval(move,1000);
      function move(){
          if(!flag){
                return;
          }
          flag=false;
          var lif=getFirst(win);     
          animate(win,{left:-width},300,function(){
                      win.appendChild(lif);     
                      win.style.left=0;  

                       flag=true;
          })                                       
        }
        function movez(){
          if(!flag){
                return;
          }
          flag=false;
          var lif=getFirst(win); 
          var lil=getLast(win);  
          insertBefore(lil,lif); 
          win.style.left=-width+"px";
          animate(win,{left:0},300,function(){
            flag=true;
          });  
                                     
            }  
     
       addEvent(left,"click",movez);
       addEvent(right,"click",move);
       


        box.onmouseover=function(){/*鼠标移入终止函数的运行*/
           clearInterval(t)
         }
        // 划出继续
         box.onmouseout=function(){/*鼠标移出，重新建立函数*/
           t=setInterval(move,1000)
         }

          for(var i=0;i<yuan.length;i++){
                yuan[i].index=i;
          yuan[i].onclick=function(){
            for(var i=0;i<imgs.length;i++){
                yuan[i].style.background="#626F77";
                
            } 
                yuan[this.index].style.background="#FF91BE"
                
           
          }
        }
       }
lunbo();







function lun(){
  var box=$(".f1a")[0];
    var win=$(".fla-imgs")[0];
    var imgs=$(".f1a-1");
    var left=$(".fla-zuo")[0];
    var right=$(".fla-you")[0];
    var width=imgs.offsetWidth;
    var flag=true;
    var t=setInterval(move,1000);
      function move(){
          if(!flag){
                return;
          }
          flag=false;

          var lif=getFirst(win);  
          win.style.left=-width+"px";   
          animate(win,{left:-width},300,function(){
                      win.appendChild(lif);     
                      win.style.left=0;         
                       flag=true;
          })                                       
        }
        function movez(){
          if(!flag){
                return;
          }
          flag=false;
          var lif=getFirst(win); 
          var lil=getLast(win);  
          insertBefore(lil,lif); 
          win.style.left=-width+"px";
          animate(win,{left:0},300,function(){
            flag=true;
          });  
                                     
            }  
       addEvent(box,"mouseover",function(){
            clearInterval(t);
       }) 
       addEvent(box,"mouseout",function(){
            t=setInterval(move,1000);
       }) 
       addEvent(left,"click",movez);
       addEvent(right,"click",move);


}
lun();


function ln(){
  var box=$(".af1a")[0];
    var win=$(".afla-imgs")[0];
    var imgs=$(".af1a-1");
    var left=$(".afla-zuo")[0];
    var right=$(".afla-you")[0];
    var width=imgs.offsetWidth;
    var flag=true;
    var t=setInterval(move,1000);
      function move(){
          if(!flag){
                return;
          }
          flag=false;

          var lif=getFirst(win);  
          win.style.left=-width+"px";   
          animate(win,{left:-width},300,function(){
                      win.appendChild(lif);     
                      win.style.left=0;         
                       flag=true;
          })                                       
        }
        function movez(){
          if(!flag){
                return;
          }
          flag=false;
          var lif=getFirst(win); 
          var lil=getLast(win);  
          insertBefore(lil,lif); 
          win.style.left=-width+"px";
          animate(win,{left:0},300,function(){
            flag=true;
          });  
                                     
            }  
       addEvent(box,"mouseover",function(){
            clearInterval(t);
       }) 
       addEvent(box,"mouseout",function(){
            t=setInterval(move,1000);
       }) 
       addEvent(left,"click",movez);
       addEvent(right,"click",move);


}
ln();












// function aa(){

// var aa=$(".c-a")[0];
// var aa1=$(".C-a-a")[0];
// var aa2=$(".th")[0];
// aa1.onmouseover=function(){

// animate(aa2,{height:454,width:800},200)

// }
// aa1.onmouseout=function(){
//     animate(aa2,{height:0,width:0},200)

//     }



// }aa();

// function aa1(){
//     aa();
// }aa1();

  


 function bb1(){
    var box=$(".d-a-1")[0];
    var win=$(".divqw")[0];
    var imgs=$(".d-a-c1");
    var left=$(".zuo-zuo")[0];
    var right=$(".you-you")[0];
    var width=imgs.offsetWidth;
    var flag=true;
    var t=setInterval(move,1000);
      function move(){
          if(!flag){
                return;
          }
          flag=false;
          var lif=getFirst(win);     
          animate(win,{left:-width},300,function(){
                      win.appendChild(lif);     
                      win.style.left=0;         
                       flag=true;
          })                                       
        }
        function movez(){
          if(!flag){
                return;
          }
          flag=false;
          var lif=getFirst(win); 
          var lil=getLast(win);  
          insertBefore(lil,lif); 
          win.style.left=-width+"px";
          animate(win,{left:0},300,function(){
            flag=true;
          });  
                                     
            }  
      
       addEvent(left,"click",movez);
       addEvent(right,"click",move);

       addEvent(box,"mouseover",function(){
            clearInterval(t);
       }) 
       addEvent(box,"mouseout",function(){
            t=setInterval(move,1000);
       }) 
 
      

}

bb1();




})













