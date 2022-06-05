const ws = new WebSocket('ws://localhost:5501');
const nameInput = document.querySelector('#name-input');
const authorizationButton = document.querySelector('#authorization-button');
const authorization = document.querySelector('#authorization');
const chat = document.querySelector('#chat');
const members = document.querySelector('#members');

authorizationButton.addEventListener('click', (event) => {
	event.preventDefault();
	if (nameInput.value != '') {
		const name = nameInput.value;
		const newMember = document.createElement('div');
		newMember.textContent = name;
		members.appendChild(newMember);
		authorization.classList.add('hide');
		chat.classList.remove('hide');
	} else {
		alert('Введите пожалуйста свой ник для дальнейшей авторизации');
	}
});
