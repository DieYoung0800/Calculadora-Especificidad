/* --- 1. SELECCIÓN DE ELEMENTOS (VARIABLES) --- */
const inputSelector = document.getElementById('selector-input');

// Elementos de texto (Números)
const resultadoA = document.getElementById("score-a"); 
const resultadoB = document.getElementById("score-b"); 
const resultadoC = document.getElementById("score-c"); 
const resultadoTotal = document.getElementById("full-score");

// Elementos de caja (Para colores)
const cajaId = document.querySelector('.id-box');
const cajaClase = document.querySelector('.class-box');
const cajaElemento = document.querySelector('.element-box');

// Elementos NUEVOS (Alerta y Mensaje)
const alertaImportant = document.getElementById('important-alert');
const mensajeHumano = document.getElementById('human-message');

/* --- 2. ESCUCHADOR DE EVENTOS --- */
if (inputSelector) {
    inputSelector.addEventListener('input', () => {

        const texto = inputSelector.value;

        // ==========================================
        // PARTE A: CÁLCULOS MATEMÁTICOS
        // ==========================================
        
        // 1. Contar IDs (#)
        const numeroIds = (texto.match(/#/g) || []).length;

        // 2. Contar Clases (.)
        const numeroClases = (texto.match(/\./g) || []).length;

        // 3. Contar Elementos (Limpieza profunda)
        let textoLimpio = texto;
        textoLimpio = textoLimpio.replace(/[#\.][\w-]+/g, ""); 
        textoLimpio = textoLimpio.replace(/[>+~*\[\]"='`]/g, ""); 
        textoLimpio = textoLimpio.replace(/:[\w-()]+/g, ""); 
        
        // Convertir a lista y limpiar espacios vacíos
        const listaFinal = textoLimpio.split(" ").filter(palabra => palabra.trim() !== "");
        
        
        let numeroElementos = listaFinal.length;
        
    
        if(texto.includes('!important')) {
           
             if (numeroElementos > 0) numeroElementos--; 
        }

        // ==========================================
        // PARTE B: ACTUALIZAR PANTALLA
        // ==========================================
        
        // Números
        resultadoA.innerText = numeroIds;
        resultadoB.innerText = numeroClases;
        resultadoC.innerText = numeroElementos;
        resultadoTotal.innerText = `Especificidad: ${numeroIds}, ${numeroClases}, ${numeroElementos}`;

        // Colores de las cajas
        cajaId.classList.toggle('active', numeroIds > 0);
        cajaClase.classList.toggle('active', numeroClases > 0);
        cajaElemento.classList.toggle('active', numeroElementos > 0);

       // ==========================================
        // PARTE C: DETECTOR DE !IMPORTANT
        // ==========================================
        const esImportante = texto.includes('!important');

        if (esImportante) {
            // MODO PÁNICO
            if(alertaImportant) alertaImportant.classList.remove('hidden');
            
    
            document.body.classList.add('panic-mode'); 
            
        } else {
            // MODO NORMAL
            if(alertaImportant) alertaImportant.classList.add('hidden');
            
            document.body.classList.remove('panic-mode');
        }

        // ==========================================
        // PARTE D: TRADUCTOR HUMANO (NUEVO)
        // ==========================================
        let mensaje = "";

        if (esImportante) {
            mensaje = "☢️ Has roto las reglas. '!important' gana a todo, pero causa deuda técnica.";
        } else if (numeroIds > 1) {
            mensaje = "🏋️‍♂️ ¡Demasiado peso! Múltiples IDs hacen que este estilo sea casi imposible de sobrescribir.";
        } else if (numeroIds === 1) {
            mensaje = "⚓ Fuerte y anclado. Úsalo solo para secciones únicas (ej: Cabecera, Footer).";
        } else if (numeroClases >= 3) {
            mensaje = "🎯 Muy específico. ¿Seguro que necesitas encadenar tantas clases?";
        } else if (numeroClases > 0) {
            mensaje = "✅ Buen equilibrio. Las clases son flexibles y reutilizables.";
        } else if (numeroElementos > 0) {
            mensaje = "🍃 Ligero (Estilo base). Cualquier clase ganará sobre esto.";
        } else {
            mensaje = "Escribe un selector para analizar su poder...";
        }

        if(mensajeHumano) mensajeHumano.innerText = mensaje;

    });
} else {
    console.error("Error: No se encontró el input en el HTML.");
}