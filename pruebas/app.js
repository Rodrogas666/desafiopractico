document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorButton');

    button.addEventListener('click', () => {
        // Generar un color hexadecimal aleatorio
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // Cambiar el color de fondo del body
        document.body.style.backgroundColor = randomColor;
    });
});
