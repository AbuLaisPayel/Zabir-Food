setInterval(function(){
    const dt=new Date();
    var d=dt.toLocaleDateString();
    var t=dt.toLocaleTimeString();
    document.getElementById("t_time").innerHTML= d+' '+t;
},1000

);