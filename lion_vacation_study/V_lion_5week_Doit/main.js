const messageInput = document.querySelector('.message-input');
const addMessageBtn = document.querySelector('.add-message-btn');
const messagesContainer = document.querySelector('.messages');

addMessageBtn.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messageInput.value = '';
  }
});

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addMessageBtn.click();
  }
});

