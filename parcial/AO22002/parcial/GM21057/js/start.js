document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector(button.getAttribute('data-clipboard-target'));
        const range = document.createRange();
        range.selectNode(target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        try {
            document.execCommand('copy');
            console.log('Código copiado al portapapeles!');
        } catch (err) {
            console.log('No se pudo copiar el código.');
        }
        window.getSelection().removeAllRanges();
    });
});