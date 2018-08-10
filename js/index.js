window.onload=function() {
    //购物车
    let top = document.getElementsByClassName("top")[0];
    let shop = top.getElementsByClassName("shop")[0];
    let shopcar = shop.getElementsByClassName("shopcar")[0];
    let a = shop.getElementsByTagName("a")[0];
    shop.onmouseenter = function () {
        shopcar.style.display = "block";
        shopcar.style.height = "98px";
        shopcar.style.transition = "all 0.3s";
        a.style.color = "#ff6700";
        shop.style.background = "#fff";
    }
    shop.onmouseleave = function () {
        shopcar.style.display = "";
        shopcar.style.height = 0;
        a.style.color = "#B0B0B0";
        shop.style.background = "#424242";
    }

    //搜索栏
    let diyige=document.querySelector(".diyige");
    let dierge=document.querySelector(".dierge");
    let xiala=document.querySelector(".xiala")
    diyige.onfocus=function(){
        diyige.style.border="1px solid #ff6700";
        dierge.style.border="1px solid #ff6700";
        xiala.style.display="block";
    }
    diyige.onblur=function(){
        diyige.style.border="1px solid #e0e0e0";
        dierge.style.border="1px solid #e0e0e0"; 
        xiala.style.display="none";       
    }

    //侧导航
    let bigBox = document.getElementsByClassName("bigBox")[0];
    let left = bigBox.getElementsByClassName("left")[0];
    let list = left.getElementsByClassName("list");
    let navigation = left.getElementsByClassName("navigation");
    for (let i = 0; i < list.length; i++) {
        list[i].onmouseenter = function () {
            for (let j=0;j<list.length;j++){
                navigation[j].style.display="";
            }
            navigation[i].style.display = "block";
            navigation[i].style.width = "993px";
        }
        list[i].onmouseleave=function(){
            navigation[i].style.display="";
        }
    }
    //热门导航图
    function all(content){
        let neirong = content.getElementsByClassName("neirong")[0];
        let right = neirong.getElementsByClassName("right");
        let title = content.getElementsByClassName("title")[0];
        let span = title.getElementsByTagName("span");
        for (let i = 0; i < span.length; i++) {
            span[i].onmouseenter = function () {
                for (let j = 0; j < span.length; j++) {
                    right[j].style.display = "";
                    span[j].style.color = "#000000";
                    span[j].style.borderBottom = "";
                }
                right[i].style.display = "block";
                span[i].style.color = "#ff6700";
                span[i].style.borderBottom = "2px solid #ff6700";
            }
        }
    }
    let jiadian = document.getElementsByClassName("jiadian")[0];
    all(jiadian);
    let zhineng = document.getElementsByClassName("zhineng")[0];
    all(zhineng);
    let dapei = document.getElementsByClassName("dapei")[0];
    all(dapei);
    let peijian = document.getElementsByClassName("peijian")[0];
    all(peijian);
    let zhoubian = document.getElementsByClassName("zhoubian")[0];
    all(zhoubian);

    //正首页导航
    let bigBox1=document.getElementsByClassName("bigBox")[0];
    let logoBox=bigBox1.getElementsByClassName("logoBox")[0];
    let fenlei=document.querySelector(".fenlei");
    let fenleib=document.querySelector(".fenleib");
    let fff=logoBox.getElementsByClassName("fff");
    let container=logoBox.getElementsByClassName("container");
    fenlei.onmouseenter=function(){
        fenleib.style.height="229px";
        fenleib.style.display="block";
        for (let i=0;i<fff.length-2;i++){
            fff[i].onmouseenter=function(){
                for (let j=0;j<fff.length-2;j++){
                    container[j].style.display="none";
                }
                container[i].style.display="block";
            }
        }
    }
    fenlei.onmouseleave=function(){
        fenleib.style.height=0;
        fenleib.style.border=0;
        // fenleib.style.display="none";
        for (let i=0;i<fff.length-2;i++){
            container[i].style.display="none";
        }
    }

    //头部下的双下标轮播图
    let Box1=document.querySelector(".Box1");
    let a1=document.querySelectorAll(".myimg a");
    let lbox=document.querySelector(".img .lbox");
    let rbox=document.querySelector(".img .rbox");
    let son=document.querySelectorAll(".img .btns .son");
    let width=parseInt(getComputedStyle(a1[0],null).width);
    function ff(a1,son,Box1,lbox,rbox,time,width) {
        let now=0;
        let next=0;
        let flag=true;
        t=setInterval(fn,3000);
        function fn(){
            next++;
            if (next==a1.length){
                next=0;
            }
            for (let i=0;i<a1.length;i++){
                a1[i].style.left="width";
                son[i].style.background="#8F8D88";
            }
            son[next].style.background="red";
            a1[next].style.left=width+"px";
            animate(a1[now],{left:-width});
            animate(a1[next],{left:0},function () {
                flag=true;
            });

            now=next;
        }
        function fn1(){
            next--;
            if (next<0){
                next=a1.length-1;
            }
            for (let i=0;i<a1.length;i++){
                a1[i].style.left="-width";
                son[i].style.background="#8F8D88";
            }
            son[next].style.background="red";
            a1[next].style.left=-width+"px";
            animate(a1[now],{left:width});
            animate(a1[next],{left:0},function(){
                flag=true;
            });
            now=next;
        }
        Box1.onmouseenter=function () {
            clearInterval(t);
        }
        Box1.onmouseleave=function () {
            t=setInterval(fn,3000);
        }
        lbox.onclick=function(){
            if (flag==false){
                return;
            }
            fn1();
            flag=false;
        }
        rbox.onclick=function () {
            if (flag==false){   //!flag=(flag==false);
                return;
            }
            fn();
            flag=false;
        }
        for (let i=0;i<son.length;i++){
            son[i].onclick=function(){
                for (let j=0;j<son.length;j++){
                    son[j].style.background="#8F8D88";
                }
                son[i].style.background="red";
                if (now==i){
                    return;
                }
                if (now<i){
                    a1[i].style.left=width+"px";
                    animate(a1[now],{left:-width});
                    animate(a1[i],{left:0});
                }
                if (now>i){
                    a1[i].style.left=-width+"px";
                    animate(a1[now],{left:width});
                    animate(a1[i],{left:0});
                }
                next=now=i;
        }}
    }
    ff(a1,son,Box1,lbox,rbox,3000,width);


    //内容的双下标轮播图
    let Broadcast=document.querySelector(".Broadcast");
    let photo=Broadcast.querySelectorAll(".box");
    let lson=Broadcast.querySelector(".lson");
    let rson=Broadcast.querySelector(".rson");
    let btn=Broadcast.querySelectorAll(".btn");
    let Width=parseInt(getComputedStyle(photo[0],null).width);
    function my(photo,btn,lson,rson){
    let flag=true;
    let now1=0;
    let next1=0;
    function fn3(){
        next1++;
        if (next1==photo.length){
            next1=0;
        }
        for (let i=0;i<photo.length;i++){
            btn[i].style.background="lightslategrey";
        }
        btn[next1].style.background="red";
        photo[next1].style.left=Width+"px";
        animate(photo[now1],{left:-Width});
        animate(photo[next1],{left:0},function () {
            flag=true;
        });
        now1=next1;
    }
    function fn4(){
        next1--;
        if (next1<0){
            next1=photo.length-1;
        }
        for (let j=0;j<photo.length;j++){
            btn[j].style.background="lightslategrey";
        }
        btn[next1].style.background="red";
        photo[next1].style.left=-Width+"px";
        animate(photo[now1],{left:Width});
        animate(photo[next1],{left:0},function () {
            flag=true;
        });
        now1=next1;
    }
    lson.onclick=function(){
        if(flag==false){
            return;
        }
        if (now1==0){
            return;
        }
        fn4();
        flag=false;
    }
    rson.onclick=function(){
        if(flag==false){
            return;
        }
        if (now1==photo.length-1){
            return
        }
        fn3();
        flag=false;
    }
    for (let k=0;k<btn.length;k++){
        btn[k].onclick=function(){
            for (let m=0;m<photo.length;m++){
                btn[m].style.background="lightslategrey";
            }
            btn[k].style.background="red";
            if (now1==k){
                return;
            }
            if (now1<k){
                photo[k].style.left=Width+"px";
                animate(photo[now1],{left:-Width});
                animate(photo[k],{left:0});
            }
            if (now1>k){
                photo[k].style.left=-Width+"px";
                animate(photo[now1],{left:width});
                animate(photo[k],{left:0});
            }
            next1=now1=k;
        }
    }}
    my(photo,btn,lson,rson,Width);
    let Broadcast1=document.querySelectorAll(".Broadcast")[1];
    let photo1=Broadcast1.querySelectorAll(".box");
    let lson1=Broadcast1.querySelector(".lson");
    let rson1=Broadcast1.querySelector(".rson");
    let btn1=Broadcast1.querySelectorAll(".btn");
    // let WIdth=parseInt(getComputedStyle(photo1[0],null).width);
    my(photo1,btn1,lson1,rson1);
    let Broadcast2=document.querySelectorAll(".Broadcast")[2];
    let photo2=Broadcast2.querySelectorAll(".box");
    let lson2=Broadcast2.querySelector(".lson");
    let rson2=Broadcast2.querySelector(".rson");
    let btn2=Broadcast2.querySelectorAll(".btn");
    // let WIDth=parseInt(getComputedStyle(photo2[0],null).width);
    my(photo2,btn2,lson2,rson2);
    let Broadcast3=document.querySelectorAll(".Broadcast")[3];
    let photo3=Broadcast3.querySelectorAll(".box");
    let lson3=Broadcast3.querySelector(".lson");
    let rson3=Broadcast3.querySelector(".rson");
    let btn3=Broadcast3.querySelectorAll(".btn");
    // let WIdTh=parseInt(getComputedStyle(photo3[0],null).width);
    my(photo3,btn3,lson3,rson3);
    // console.log(WIdTh,WIDth,WIdTh);

    //小米闪购js动态
    let right2=document.querySelector(".shangou .bottom .right");
    let leftbtn=document.querySelector(".leftbtn");
    let rightbtn=document.querySelector(".rightbtn");
    let kuan=parseInt(getComputedStyle(right2,null).width)/2;
    let time=0;
    rightbtn.onclick=function(){
        time++;
        if (time==2){
            time=1;
        }
        right2.style.transform='translateX('+"-"+kuan*time+'px)';
        // console.log(right2.style.transform = 'translateX(' + "-" + kuan * time + 'px)');
    }
    leftbtn.onclick=function(){
        time--;
        if (time<0){
            time=0;
        }
        right2.style.transform='translateX('+"-"+kuan*time+'px)';
        // console.log(right2.style.transform = 'translateX(' + "-" + kuan * time + 'px)');
    }

    //为你推荐的js动态
    let bbbox=document.querySelector(".tuijian .bottom .bbbox");
    let leftbtn1=document.querySelector(".tuijian .right .leftbtn");
    let rightbtn1=document.querySelector(".tuijian .right .rightbtn");
    let kuan1=parseInt(getComputedStyle(bbbox,null).width)/4;
    let time1=0;
    rightbtn1.onclick=function(){
        time1++;
        if (time1==4){
            time1=3;
        }
        bbbox.style.transform='translateX('+"-"+kuan1*time1+'px)';
        // console.log(bbbox.style.transform = 'translateX(' + "-" + kuan1 * time1 + 'px)',time1);
    }
    leftbtn1.onclick=function(){
        time1--;
        if (time1<0){
            time1=0;
        }
        bbbox.style.transform='translateX('+"-"+kuan1*time1+'px)';
        // console.log(bbbox.style.transform = 'translateX(' + "-" + kuan1 * time1 + 'px)');
    }

    //时间
    function hdsz() {
        let nowdate=new Date;
        let future=new Date(2018,7,2,18);
        let time=(future-nowdate)/1000;
        let xtime=0;
        let arr=[];
        let hour=Math.floor(time/(60*60));
        xtime=time%(60*60);
        if (hour<10){
            arr.push("0"+hour)
        }
        else {
            arr.push(hour);
        }
        let fen=Math.floor(xtime/60);
        if (fen<10){
            arr.push("0"+fen);
        }
        else {
            arr.push(fen);
        }
        let miao=Math.floor(xtime%60);
        if (miao<10){
            arr.push("0"+miao);
        }
        else {
            arr.push(miao);
        }
        return arr;
    }
    let dao=document.querySelectorAll("#daojishi .son");
    daoji();
    setInterval(daoji,1000);
    function daoji(){
        let arr=hdsz();
        dao[0].innerText=arr[0];
        dao[2].innerText=arr[1];
        dao[4].innerText=arr[2];
    }

};