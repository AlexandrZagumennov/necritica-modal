const modalOverlay = document.querySelector('.modal__overlay');


/* Блокировка скролла */
const disableScroll = () => {
	const widthScroll = window.innerWidth - document.body.offsetWidth;

	document.body.dbScrollY = window.scrollY;

	document.body.style.cssText = `
		position: fixed;
		top: ${-window.scrollY}px;
		left: 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		padding-right: ${widthScroll}px;
	`
};

const enableScroll = () => {
	document.body.style.cssText = '';
	window.scroll({
		top: document.body.dbScrollY,
	});
};
/* Блокировка скролла END*/

// Функция открытия модального окна 
const runModalOpen = () => {
	modalOverlay.classList.add('modal__overlay-open');
	disableScroll();
};

// Функция закрытия модального окна 
const runModalClose = () => {
	modalOverlay.classList.remove('modal__overlay-open');
	enableScroll();
};

// Обработка события открытия модального окна после завершения загрузки контента 
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		runModalOpen();
	}, 2500)
});

// Обработка события закрытия модального окна при клике на кнопку 
modalOverlay.addEventListener('click', event => {
	target = event.target;

	if (target.matches('.modal__close')) {
		runModalClose();
	 }
});

// Обработка события закрытия модального окна при нажатии на клавишу Esc
document.body.addEventListener('keyup', event => {
	const key = event.code;

	if (key === 'Escape') {
		runModalClose();
	}
});


