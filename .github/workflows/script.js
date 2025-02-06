
let percent = 0;
let interv;
function OpenGift() {
    let gift = document.getElementById("gift-wrapper");
    if(gift){
        gift.remove();
        interv = setInterval(ShowTitle, 100);
    }
        
  }

function ShowTitle() {

    let title = document.getElementById("concert-title");
    if(title){
        
        percent = percent + 5;
        title.style.opacity = String(percent + "%");

        if(title.style.opacity == 1 ){
            console.log("stop");
            clearInterval(interv);
        }
        
    }
        
  }