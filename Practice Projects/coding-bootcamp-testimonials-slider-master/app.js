const testimonials = [
  {
    name: "Tanyan Sinclair",
    job: "UX Engineer",
    img: "./scss/images/image-tanya.jpg",
    alt: "Tanyan",
    text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ",
  },

  {
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    img: "./scss/images/image-john.jpg",
    alt: "John",
    text: '"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "',
  },
];

const testimonialText = document.querySelector("#card-text");
const profession = document.querySelector("#job");
const authorName = document.querySelector("#author-name");
const testimonialImage = document.querySelector("#img");

const btns = document.querySelectorAll(".btn");

let currentTestimonial = 0;

const showTestimonials = () => {
  const testimonial = testimonials[currentTestimonial];
  authorName.textContent = testimonial.name;
  profession.textContent = testimonial.job;
  testimonialImage.src = testimonial.img;
  testimonialImage.alt = testimonial.alt;
  testimonialText.textContent = testimonial.text;
};

window.addEventListener("DOMContentLoaded", function () {
  showTestimonials();
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget.classList;

    if (target.contains("next")) {
      currentTestimonial++;
      if (currentTestimonial > testimonials.length - 1) {
        currentTestimonial = 0;
      }
      showTestimonials();
    } else {
      currentTestimonial--;
      if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
      }
      showTestimonials();
    }
  });
});
