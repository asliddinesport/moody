const wrapper = document.querySelector(".wrapper");
const login-link = document.querySelector(".login-link");
const registr-link = document.querySelector(".registr-link");

registr-link.addEventListener("click", ()=>) {
	wrapper.classList.add("active");
});

login-link.addEventListener("click", ()=>) {
	wrapper.classList.add.remove("active");
});