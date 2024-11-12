const startDate = new Date("2022-11-12T00:00:00");

function updateTime() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const yearsText = years === 1 ? "1 ano" : years > 1 ? `${years} anos` : "";
    const monthsText = months === 1 ? "1 mês" : months > 1 ? `${months} meses` : "";
    const daysText = days === 1 ? "1 dia" : days > 1 ? `${days} dias` : "";

    const timeString = [yearsText, monthsText, daysText].filter(Boolean).join(", ");
    document.getElementById("time").innerHTML = timeString;

    if (months === 0 && days === 0) {
        document.getElementById("progress-bar").style.width = "100%";
        document.getElementById("progress-percentage").innerText = "100%";
        launchConfetti();
    } else {
        const progress = ((months * 30 + days) / 365) * 100;
        document.getElementById("progress-bar").style.width = `${progress}%`;
        document.getElementById("progress-percentage").innerText = `${Math.round(progress)}%`;
    }
}

function launchConfetti() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, i * 1000);
    }
}

function startDailyUpdate() {
    updateTime();
    const now = new Date();
    const timeToMidnight = 
        new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;
    setTimeout(() => {
        updateTime();
        setInterval(updateTime, 24 * 60 * 60 * 1000);
    }, timeToMidnight);
}
startDailyUpdate();

// Animação ao rolar
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeInElements.forEach(el => observer.observe(el));
});
