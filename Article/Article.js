

// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"


/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

class Article {
 constructor(domElement) {
   this.expandButton = domElement.querySelector(".expandButton");
   this.expandButton.innerHTML = "Open";
   this.article = domElement.querySelector('.article');
   

   
   // Set a click handler on the expandButton reference, calling the expandArticle method.
   this.expandButton.addEventListener('click', () => this.expandArticle());
 }
 expandArticle() {
   // Using our reference to the domElement, toggle a class to expand or hide the article.
   
   this.article.classList.toggle('article-open');

 }
}

const articles = document.querySelectorAll('.article');
articles.forEach( article => new Article(article));

