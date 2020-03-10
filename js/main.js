document.addEventListener("DOMContentLoaded",function(){
    var trangthai="Dang1200";
    var header=document.getElementById("header");
    window.addEventListener("scroll",function(){
        if(window.pageYOffset>1200){
            if(trangthai=="Dang1200"){
                header.classList.add("fixed");
                trangthai="Tren1200"
            }
        }
        if(window.pageYOffset<=1200){
            if(trangthai=="Tren1200"){
                header.classList.remove("fixed");
                trangthai="Dang1200"   
            }
        }
    })
},false)