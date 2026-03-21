const startDate = new Date("2021-08-10T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

function createHeartTree() {
    const container = document.getElementById("flowers-container");
    const canvas = document.getElementById("tree-canvas");
    const totalFlowers = 950; 

    for (let i = 0; i < totalFlowers; i++) {
        setTimeout(() => {
            const flower = document.createElement("div");
            flower.className = "flower";
            flower.innerHTML = "🌻";
            
            const t = Math.random() * Math.PI * 2;
            const r = Math.pow(Math.random(), 0.35); 
            
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

            const scale = 10.0; 
            const centerX = canvas.offsetWidth / 2;
            const centerY = canvas.offsetHeight * 0.42;

            flower.style.left = (centerX + x * scale * r) + "px";
            flower.style.top = (centerY + y * scale * r) + "px";
            
            const size = 15 + Math.random() * 15;
            flower.style.fontSize = size + "px";
            flower.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
            
            container.appendChild(flower);
        }, i * 3);
    }
}

setInterval(updateTimer, 1000);
window.onload = () => {
    updateTimer();
    createHeartTree();
};
