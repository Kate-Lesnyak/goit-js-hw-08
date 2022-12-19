// Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что - то печатает.
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы.Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

getFormInput();

const formData = {};

function onFormInput(e) {
	formData[e.target.name] = e.target.value;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getFormInput() {
	try {
		const currentFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
		if (currentFormData) {
			// console.log(currentFormData);
			form.elements.email.value = currentFormData.email;
			form.elements.message.value = currentFormData.message;
		}
	}
	catch (error) {
		console.log(error.name);
		console.log(error.message);
	}
}

function onFormSubmit(e) {
	e.preventDefault();

	const {
		elements: { email, message }
	} = e.currentTarget;
	formData.email = email.value;
	formData.message = message.value;

	if (!formData.email || !formData.message) {
		return alert('Заполните, пожалуйста, все поля!')
	}

	console.log(formData);
	e.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);
}