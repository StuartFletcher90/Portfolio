// Jquery scroll
$('.nav-links a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },
      1000
      );
  }
});

const aboutMe = document.getElementById("about-me-id")
const techStack = document.getElementById("tech-icons")

const myScrollFunc = () => {
  console.log(window.scrollY)
  let y = window.scrollY;

  if (y >= 600) {
    aboutMe.classList.add("animate");
    aboutMe.classList.remove("hide");
  }
  if (y >= 1569) {
    techStack.classList.add("animate");
    techStack.classList.remove("hide");
  }


}

window.addEventListener("scroll", myScrollFunc);
