// =====================================
// FECHA DEL CRUCERO
// =====================================

const targetDate = new Date("2026-07-19T00:00:00");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const message = document.getElementById("message");

// =====================================
// ANIMACIÓN DE LOS NÚMEROS
// =====================================

function updateValue(element, value) {

    if (element.textContent != value) {

        element.animate([
            {
                transform: "scale(1.35)",
                opacity: .5
            },
            {
                transform: "scale(1)",
                opacity: 1
            }
        ], {
            duration: 350,
            easing: "ease-out"
        });

        element.textContent = value;
    }

}

// =====================================
// MENSAJES
// =====================================

function updateMessage(daysLeft){

    if(daysLeft > 180){

        message.innerHTML="🌴 Todavía queda bastante... ¡pero la ilusión ya ha empezado!";

    }else if(daysLeft > 90){

        message.innerHTML="🧳 Ya va siendo hora de pensar qué llevar en la maleta.";

    }else if(daysLeft > 30){

        message.innerHTML="☀️ ¡Cada vez queda menos para embarcar!";

    }else if(daysLeft > 7){

        message.innerHTML="🚢 ¡La cuenta atrás ya está muy cerca!";

    }else if(daysLeft > 1){

        message.innerHTML="🎉 ¡Últimos días! El crucero está a la vuelta de la esquina.";

    }else if(daysLeft === 1){

        message.innerHTML="😍 ¡Mañana embarcamos!";

    }else{

        message.innerHTML="🎊 ¡HOY ES EL GRAN DÍA! ¡FELIZ CRUCERO! 🚢";

    }

}

// =====================================
// CONTADOR
// =====================================

function updateCountdown(){

    const now = new Date();

    const difference = targetDate - now;

    if(difference <= 0){

        days.textContent = "0";
        hours.textContent = "0";
        minutes.textContent = "0";
        seconds.textContent = "0";

        updateMessage(0);

        clearInterval(timer);

        return;

    }

    const d = Math.floor(difference / (1000*60*60*24));

    const h = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));

    const m = Math.floor((difference % (1000*60*60)) / (1000*60));

    const s = Math.floor((difference % (1000*60)) / 1000);

    updateValue(days,d);
    updateValue(hours,h.toString().padStart(2,"0"));
    updateValue(minutes,m.toString().padStart(2,"0"));
    updateValue(seconds,s.toString().padStart(2,"0"));

    updateMessage(d);

}

updateCountdown();

const timer = setInterval(updateCountdown,1000);

// =====================================
// BRILLO DE LAS TARJETAS
// =====================================

document.querySelectorAll(".time-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.animate([
            {transform:"translateY(0px)"},
            {transform:"translateY(-8px)"}
        ],{
            duration:250,
            fill:"forwards"
        });

    });

    card.addEventListener("mouseleave",()=>{

        card.animate([
            {transform:"translateY(-8px)"},
            {transform:"translateY(0px)"}
        ],{
            duration:250,
            fill:"forwards"
        });

    });

});

// =====================================
// BARCO
// =====================================

const ship = document.querySelector(".ship");

let angle = 0;

setInterval(()=>{

    angle += 0.03;

    const rotate = Math.sin(angle)*4;

    const move = Math.cos(angle)*8;

    ship.style.transform =
        `translateY(${move}px) rotate(${rotate}deg)`;

},40);
