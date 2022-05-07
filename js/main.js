document.querySelectorAll(".spoiler__block-title").forEach((item) =>
	item.addEventListener("click", function () {
		const parent = item.parentNode;
		const content = item.nextElementSibling;

		if (parent.classList.contains("spoiler__block--active")) {
			parent.classList.remove("spoiler__block--active");
			content.style.maxHeight = "0";
			parent.style.color = "#adadad";
			content.style.color = "#adadad";
		} else {
			parent.classList.add("spoiler__block--active");
			content.style.maxHeight = content.scrollHeight + "px";
			parent.style.color = "#ffffff";
			content.style.color = "#ffffff";
		}
	})
);
