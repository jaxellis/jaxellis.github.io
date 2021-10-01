for (let elem of document.getElementsByClassName('sidebar-dropdown')) {
	elem.addEventListener(
		'click',
		() => {
			DropdownTrigger(elem);
		},
		false
	);
}

function DropdownTrigger(element) {
	var hiddenDropdown = document.getElementById('hidden-dropdown');
	if (!element.classList.value.includes('is-expanded')) {
		element.classList.add('is-expanded');
		hiddenDropdown.classList.add('show');
	} else {
		element.classList.remove('is-expanded');
		hiddenDropdown.classList.remove('show');
	}
}
