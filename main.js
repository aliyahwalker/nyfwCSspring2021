document.addEventListener("DOMContentLoaded", function (e) {
	const filter_dropdowns = document.querySelectorAll("select.filter");

	filter_dropdowns.forEach(function (filter_dropdown) {
		filter_dropdown.addEventListener("change", function (e) {
			filter_looks();
		});
	});
});

function filter_looks() {
	const clothingtype_class = document.querySelector("#clothingtype").value;
	const colors_class = document.querySelector("#colors").value;

	const active_items = document.querySelectorAll(".item.active");
	active_items.forEach(function (item) {
		item.classList.remove("active");
	});

	const filtered_items = document.querySelectorAll(`.item.${clothingtype_class}.${colors_class}`);

	filtered_items.forEach(function (item) {
		item.classList.add("active");
	});

}