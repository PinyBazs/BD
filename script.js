
let percent = 0;
let interv;

let now = new Date();
let eventDate = new Date("2025-06-15");
function OpenGift() {
    let gift = document.getElementById("gift-wrapper");
    if(gift){
        gift.remove();

    }

    var audio = new Audio('./assets/bgmusic.mp3');
    audio.play();

    let bd = document.getElementById("bd");
    bd.onblur = function(){audio.pause();};
    bd.onfocus = function(){audio.play();};

    dateDiffInDays(now, eventDate);

    let descr = document.getElementById("description");

    if(descr){
        descr.innerHTML = "AZ IMAGINE DRAGONS BEJELENTETTE LOOM VILÁGKÖRÜLI TURNÉJÁNAK EURÓPAI SZAKASZÁT, A ZENEKAR 2025 NYARÁN INDUL ÉLETE ELSŐ STADIONTURNÉJÁRA A KONTINENSEN.<br><br>"
        
        +"„Az Imagine Dragons magasabban szárnyal, mint valaha ....Tíz évvel a berobbanásuk után a Las Vegas-i rockerek még mindig igazi crossover slágereket írnak,"
        +"teltházak előtt lépnek fel, és U2-szerű hosszú játszmát játszanak” - Billboard<br><br>"
        
        +"„Az Imagine Dragons még mindig tudja, hogyan kell hatékonyan lerohanni a stadionokat... Az alt-rock banda továbbra is megbízhatóan, rádióaktívan óriási” - Rolling Stone<br><br>"
        
        +"A GRAMMY®-díjas, többszörös platinalemezes zenekar, az Imagine Dragons bejelentette LOOM elnevezésű világkörüli turnéjuk európai szakaszát."
        +"A Live Nation által szervezett 2025-ös szakasz a Las Vegas-i csapat első teljes stadionturnéja lesz, amely során 16 országban,"
        +"többek között Észtországban, Csehországban, Olaszországban, Spanyolországban, Franciaországban, valamint Hollandiában játszanak majd. A turné Magyarországot is érinti,"
        +"az Imagine Dragons június 14-én, a Puskás Arénában lép fel.<br><br>"
        
        +"Nyár elején a zenekar kiadta várva várt hatodik nagylemezét, a LOOM-ot."
        +"Az album a művészi önfelfedező útjuk csúcspontját jelenti, és az eddigi legjobb munkájuk."
        +"A LOOM, amelyet teljes egészében az Imagine Dragons készített a zenekar régi munkatársaival, a svéd slágergyárosokkal, Mattmannal és Robinnal,"
        +"megtalálja a tökéletes egyensúlyt a klasszikus hangzás, amely szupersztárokká tette a zenekart, és azok a friss dolgok között, ami örömet okozott a bandának a stúdióban.<br><br>"
        
        +"Előjátszó: Declan McKenna"
    }


    interv = setInterval(GetGift, 100);
    
        
  }


function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    let result = Math.floor((utc2 - utc1) / _MS_PER_DAY);
    let banner = "Az eseményig még " + result + " nap van hátra"
    let timestamp = document.getElementById("timestamp");
    if(timestamp){
        timestamp.innerHTML = banner;
    }

  }

function GetGift(){
    let content = document.getElementById("open-gift");
    if(content){
        percent = percent + 2;
        content.style.opacity = percent + "%";
        console.log(content.style.opacity);
        
        if(content.style.opacity >= 1){
            console.log("stop");
            clearInterval(interv);
            
        }
    }
}
