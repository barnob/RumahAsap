// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika Hamburger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
	navbarNav.classList.toggle('active');
};

// Click diluar hamburger biar ngilang
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
});