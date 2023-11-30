const cards = document.querySelectorAll(".card");
const obeserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
},
{
    threshold:1
}
);
cards.forEach((card) => {
  obeserver.observe(card);
});
