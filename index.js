const projects = document.querySelectorAll(".project");
const inputs = document.querySelectorAll("input, textarea");
const submit = document.querySelector(".submit");

for (let project of projects) {
    project.addEventListener("mouseover", () => {
        project.children[0].children[0].classList.remove("hidden");
    });
    project.addEventListener("mouseout", () => {
        project.children[0].children[0].classList.add("hidden");
    });
}

for (let input of inputs) {
    input.addEventListener("focus", () => {
        input.style.borderBottom = "1px solid #4EE1A0";
    });
    input.addEventListener("blur", () => {
        input.style.borderBottom = "1px solid #FFF";
    });
}

const emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
submit.addEventListener("click", () => {
    const emailAddress = inputs[1].value;
    if (emailAddress == '' || !emailAddress.match(emailFormat)) {
        document.querySelector(".error-message").classList.remove("hidden");
        document.querySelector(".error-icon").classList.remove("hidden");
        inputs[1].style.borderBottom = "1px solid #FF6F5B";
    }
});