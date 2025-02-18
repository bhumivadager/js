// News article data
const articleData = {
    headline: "Google Unveils Bard AI, a Rival to ChatGPT",
    text: "Google has announced the launch of Bard, a conversational AI designed to provide accurate and informative responses to users' queries.",
    image: "image.jpg",
    author: "John Doe",
    date: "February 10, 2023"
};

// Load news article data
function loadArticleData() {
    const headlineElement = document.getElementById("headline");
    const articleTextElement = document.getElementById("article-text");
    const articleImageElement = document.getElementById("article-image");
    const authorElement = document.getElementById("author");
    const dateElement = document.getElementById("date");

      
    headlineElement.textContent = articleData.headline;
    articleTextElement.textContent = articleData.text;
    articleImageElement.src = articleData.image;
    authorElement.textContent = articleData.author;
    dateElement.textContent = articleData.date;
}
// Initialize news article data
loadArticleData();
