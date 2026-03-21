const startDate = new Date("2021-08-10T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

function createHeartTree() {
    const container = document.getElementById("flowers-container");
    const canvas = document.getElementById("tree-canvas");
    
    // 800 flores para un relleno absoluto y frondoso
    const totalFlowers = 800; 

    for (let i = 0; i < totalFlowers; i++) {
        setTimeout(() => {
            const flower = document.createElement("div");
            flower.className = "flower";
            flower.innerHTML = "🌻";
            
            // Generamos un ángulo aleatorio
            const t = Math.random() * Math.PI * 2;
            
            // Lógica de relleno mejorada:
            // Usamos Math.pow con un valor bajo (0.45) para empujar agresivamente 
            // la mayoría de las flores hacia el núcleo del corazón, 
            // eliminando los huecos de la captura.
            const r = Math.pow(Math.random(), 0.45); 
            
            // Ecuación paramétrica del corazón para una forma perfecta
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

            // Ajuste de escala grande para que llene la pantalla
            const scale = 11.2; 
            // Posicionamos el centro del corazón justo arriba del tronco
            const centerX = canvas.offsetWidth / 2;
            const centerY = canvas.offsetHeight * 0.45;

            flower.style.left = (centerX + x * scale * r) + "px";
            flower.style.top = (centerY + y * scale * r) + "px";
            
            // Variación de tamaño para naturalidad y cobertura
            // Las flores interiores son un poquito más grandes para tapar huecos
            const sizeVar = (1 - r) * 10;
            const size = 18 + sizeVar + Math.random() * 10;
            flower.style.fontSize = size + "px";
            
            // Rotación aleatoria para que parezca un árbol natural
            flower.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
            
            container.appendChild(flower);
        }, i * 5); // Aparición rápida secuencial
    }
}

setInterval(updateTimer, 1000);
window.onload = () => {
    updateTimer();
    createHeartTree();
};
// Función para crear pétalos que caen
function createFallingPetals() {
    const container = document.body;
    setInterval(() => {
        const petal = document.createElement("div");
        petal.innerHTML = "🟨 "; // Puedes usar 🌻 o ✨ también
        petal.style.position = "fixed";
        petal.style.top = "-20px";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.fontSize = Math.random() * 10 + 10 + "px";
        petal.style.opacity = Math.random();
        petal.style.zIndex = "0"; // Para que caigan detrás del texto
        petal.style.transition = "transform 5s linear, top 5s linear";
        
        container.appendChild(petal);

        // Animación de caída
        setTimeout(() => {
            petal.style.transform = `rotate(${Math.random() * 360}deg) translateX(${Math.random() * 100 - 50}px)`;
            petal.style.top = "110vh";
        }, 10);

        // Limpieza para no saturar la memoria
        setTimeout(() => {
            petal.remove();
        }, 5000);
    }, 400); // Crea un pétalo cada 400ms
}

// Llama a la función dentro de window.onload
const originalOnload = window.onload;
window.onload = () => {
    if (originalOnload) originalOnload();
    createFallingPetals();
};

