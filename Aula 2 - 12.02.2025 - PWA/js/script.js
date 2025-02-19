// Registra o dervice Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker.js')
    .then(registration => {
        console.log('Service worker registrado com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao registra o service Worker:', error);
    });
}

// Adiciona evento de clique no botão
document.getElementById('btn-notificar').addEventListener('click', () => {
    // Verifica de o navegador suporta notificações
    if('Notification' in window) {
        // Solicita permissão para enviar notificações
        Notification.requestPermission(permission => {
            if(permission === 'granted') {
                // Envia notificação
                new Notification('Olá mundo!');
            }
        });
    }
});