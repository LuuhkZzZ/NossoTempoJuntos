const startDate = new Date("2022-11-12T00:00:00");

function updateTime() {

    const now = new Date();
    
    const difference = now - startDate;

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("time").innerHTML = 
        `${years} anos, ${days} dias, ${hours} horas`;
}

setInterval(updateTime, 3600000);

updateTime();
