document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".form-input");
  const button = document.querySelector(".form-button");
  const articles = document.querySelectorAll(".articles-item");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    filterArticles();
  });

  function filterArticles() {
    const text = input.value.toLowerCase();
    articles.forEach((article) => {
      if (article.textContent.toLowerCase().includes(text)) {
        article.style.display = "list-item";
      } else {
        article.style.display = "none";
      }
    });
  }
});
