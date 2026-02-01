document.addEventListener('DOMContentLoaded', () => {
    
    // --- CLAVE SECRETA (MODIFICA ESTA LÍNEA) ---
    const CLAVE_SECRETA = "25/01/2026"; 

    window.intentarEntrar = function() {
        const input = document.getElementById('input-clave').value;
        const pantallaBloqueo = document.getElementById('pantalla-bloqueo');
        const contenidoSecreto = document.getElementById('contenido-secreto');
        const mensajeError = document.getElementById('mensaje-error');
        const bgMusic = document.getElementById('bgMusic');

        if (input === CLAVE_SECRETA) {
            pantallaBloqueo.style.opacity = '0'; // Comienza el fundido a negro
            
            setTimeout(() => {
                pantallaBloqueo.style.display = 'none'; // Elimina la pantalla de bloqueo
                contenidoSecreto.style.display = 'block'; // Muestra el contenido
                
                // Pequeño retraso para que la transición de opacidad sea visible
                setTimeout(() => {
                    contenidoSecreto.style.opacity = '1'; // El contenido emerge
                    
                    bgMusic.volume = 0.4; // Volumen suave
                    bgMusic.play().catch(e => console.error("Error al intentar reproducir la música:", e));
                    
                }, 100); 
            }, 2000); // Duración del fundido de la pantalla de bloqueo (2 segundos)

        } else {
            mensajeError.innerText = "La cifra es errónea. El Santuario permanece sellado...";
            mensajeError.style.opacity = 1;
            
            // Animación de 'error' para el input
            const inputField = document.getElementById('input-clave');
            inputField.style.animation = "shake 0.3s";
            setTimeout(() => inputField.style.animation = "", 300); // Quita la animación después de 0.3s
        }
    };

    // Permitir "Enter" para el ritual
    document.getElementById('input-clave').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            intentarEntrar();
        }
    });

    // Animación de sacudida para el input (CSS)
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `@keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
    }`;
    document.head.appendChild(styleSheet);

});
