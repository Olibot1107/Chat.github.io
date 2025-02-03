const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === '') {
        return;
    }

    const messageElement = document.createElement('div');
    messageElement.textContent = messageText;
    messagesContainer.appendChild(messageElement);

    messageInput.value = '';
    messageInput.focus();

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
