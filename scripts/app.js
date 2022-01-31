

window.addEventListener("scroll", () => {
    const navBar = document.querySelector('nav .navbar-nav');

    if (window.scrollY > 150) {
        navBar.style.opacity = "100%";
    }
})


const phrases = {
    1: "Don't touch me.",
    2: "Please stop...",
    3: "Not the Eye!!!",
    4: "Really?",
    5: "Ouch!"
}

const pic = document.querySelector('#profile_pic');

pic.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    alert(`${phrases[randomNumber]}`);
})

