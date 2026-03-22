// Función para crear pétalos que caen
function createFallingPetals() {
    const container = document.body;
    setInterval(() => {
        const petal = document.createElement("div");
        petal.innerHTML = "🌼"; // Puedes usar 🌻 o ✨ también
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
