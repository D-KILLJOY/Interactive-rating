const rateNum = document.querySelectorAll(".circle-btn");
const rating = document.querySelector(".rate-no");
const submit = document.querySelector(".submit-btn");
const ratingCon = document.querySelector(".rating");
const thanksCon = document.querySelector(".thanks");
let rate = "";

rateNum.forEach((e) => {
	e.addEventListener("click", () => {
		for (i = 0; i < rateNum.length; i++) {
			let picked = e.classList.contains("selected");
			let val = parseInt(e.getAttribute("value"));
			rate = val;
			rating.textContent = rate;

			rateNum[i].classList.remove("selected");
			e.classList.add("selected");
		}
	});
});

submit.addEventListener("click", () => {
	if (rate !== "") {
		ratingCon.classList.add("hidden");
		thanksCon.classList.remove("hidden");
	}
});
