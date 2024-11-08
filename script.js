function updateTime() {
    const startDate = new Date('2022-11-12');
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById('time').innerText = `${years} anos, ${days} dias e ${hours} horas`;
}

updateTime();
setInterval(updateTime, 1000);