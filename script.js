//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

const repositorio_encriptador = 'https://github.com/xandervel98/encriptador-texto';
const demo_encriptador = 'https://xandervel98.github.io/encriptador-texto/';

const repositorio_juego = 'https://github.com/xandervel98/adivinar-numero';
const demo_juego = 'https://xandervel98.github.io/adivinar-numero/';

//Botones encriptador de texto

document.getElementById('repositorio_encriptador').onclick = function() {
    window.open(repositorio_encriptador, '_blank');
};

document.getElementById('demo_encriptador').onclick = function() {
    window.open(demo_encriptador, '_blank'); 
};


//Botones juego del numero secreto

document.getElementById('repositorio_juego').onclick = function() {
    window.open(repositorio_juego, '_blank'); 
};

document.getElementById('demo_juego').onclick = function() {
    window.open(demo_juego, '_blank'); 
};


// Validacion campos contacto
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('contacto__formulario');
    const btnEnviar = document.getElementById('btn_enviar');
    const inputs = formulario.querySelectorAll('input, textarea');

    // Función para validar si todos los campos cumplen con los requisitos
    function validarCampos() {
        let camposCompletos = true;

        inputs.forEach(function(input) {
            const valor = input.value.trim();

            if (valor === '' || 
                (input.type === 'text' && valor.length > 50) ||
                (input.type === 'asunto' && valor.length > 50) || 
                (input.type === 'email' && valor.length > 50) || 
                (input.tagName === 'TEXTAREA' && valor.length > 300)) {
                camposCompletos = false;
            }
        });
        btnEnviar.disabled = !camposCompletos;
    }

    inputs.forEach(function(input) {
        input.addEventListener('input', validarCampos);
    });
});