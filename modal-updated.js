const overlay = document.querySelector('#overlay-modal');
const closeButtons = document.querySelectorAll('.js-modal-close');


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
const runModalOpen = (id) => {
	const modalId = id,
		  modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

	modalElem.classList.add('active');
	overlay.classList.add('active');
	disableScroll();
};

// Функция закрытия модального окна 
const runModalClose = (target) => {
	const parentModal = target.closest('.modal');

	parentModal.classList.remove('active');
	overlay.classList.remove('active');
	enableScroll();
};

// Обработка события открытия модального окна после завершения загрузки контента, чере 2,5 с 
// В runModalOpen(1) прокинут data-modal="1"

document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		runModalOpen(1)
		}, 2500)
});

// Обработка события закрытия модального окна при клике на кнопку 
closeButtons.forEach(item => {
	item.addEventListener('click', event => {
		const target = event.target;
		runModalClose(target);
	});
});

// Обработка события закрытия модального окна при клике на подложку
overlay.addEventListener('click', function() {
	document.querySelector('.modal.active').classList.remove('active');
	this.classList.remove('active');
});

/* Обработка события закрытия модального окна при клике на ESC */
document.body.addEventListener('keyup',  (e) => {
	const key = e.keyCode;

	if (key == 27) {
		document.querySelector('.modal.active').classList.remove('active');
		document.querySelector('.overlay.active').classList.remove('active');
	};
}, false);

