document.getElementById('saveButton').addEventListener('click', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    if (!nameInput || !ageInput) {
        console.error('Los elementos del formulario no existen.');
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (name && !isNaN(age)) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        displayData();
    } else {
        alert('Por favor, ingresa un nombre válido y una edad numérica.');
    }
});

//borrar datos//
document.getElementById('clearButton').addEventListener('click', (e) => {
    e.preventDefault(); 
    localStorage.clear(); 
    sessionStorage.clear(); 
    displayData(); 
});


// Función para mostrar los datos almacenados//
function displayData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');
    if (name && age) {
        outputDiv.textContent = `Hola ${name}, tienes ${age} años.`;
    } else {
        outputDiv.textContent = 'No hay datos almacenados.';
    }
}

// Al cargar la página, mostrar los datos almacenados//
window.addEventListener('DOMContentLoaded', () => {
    displayData();
    document.getElementById('interactionCounter').textContent = sessionStorage.getItem('interactionCount') || 0;
});


// Inicializar contador de interacciones en Session Storage//
if (!sessionStorage.getItem('interactionCounter')) {
    sessionStorage.setItem('interactionCounter', 0);
}

// Actualizar contador de interacciones
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCounter')) || 0;
    count++;
    sessionStorage.setItem('interactionCounter', count);
    document.getElementById('interactionCounter').textContent = count; 
}


// Asignar eventos al contador
document.getElementById('saveButton').addEventListener('click', updateInteractionCount);
document.getElementById('clearButton').addEventListener('click', updateInteractionCount);



