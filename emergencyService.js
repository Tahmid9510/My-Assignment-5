// -------------------------For heart Icon------------------------------
let h_count= parseInt( document.getElementById("heart_count").innerText)

document.getElementById("heart_icon_1").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_2").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_3").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_4").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_5").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_6").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_7").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_8").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_9").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
// -------------------------**************------------------------------
let c_count= parseInt(document.getElementById("coin_count").innerText)
document.getElementById("call_btn_1").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling National Emergency Service 999.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
})
document.getElementById("call_btn_2").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Police Helpline Service 999.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
})
document.getElementById("call_btn_3").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Fire Service 999.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
})
document.getElementById("call_btn_4").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Ambulance Service 1994-99999.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
})
document.getElementById("call_btn_5").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Women & Child Helpline Service 109.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
})
//Anti-Corruption Helpline
document.getElementById("call_btn_6").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Anti-Corruption Helpline Service 106.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
})
document.getElementById("call_btn_7").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Electricity Helpline Service 16216.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
})
document.getElementById("call_btn_8").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Brac Helpline Service 16445.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
})
document.getElementById("call_btn_9").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Bangladesh Railway Helpline Service 163.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
})