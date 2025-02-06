
let percent = 100;
let interv;
function OpenGift() {
    let gift = document.getElementById("gift-wrapper");
    if(gift){
        gift.remove();
        interv = setInterval(HideConfetti, 100);
    }
        
  }

function ShowTitle() {

    let title = document.getElementById("concert-title");

    if(title){
        
        percent = percent + 5;
        title.style.opacity = String(percent + "%");

        if(title.style.opacity == 1 ){

            clearInterval(interv);


        }
        
    }
        
  }

function HideConfetti() {

    let confetti = document.getElementById("confetti");

    if(confetti){
        
        percent = percent - 5;
        confetti.style.opacity = String(percent + "%");

        if(confetti.style.opacity == 0 ){
            clearInterval(interv);
            interv = setInterval(ShowTitle, 100);

        }
        
    }
        
}