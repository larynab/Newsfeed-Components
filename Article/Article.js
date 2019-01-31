

// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"


/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/


class Article {
  constructor(aElement) {
    this.aElement = aElement;
    this.articleButton = aElement.querySelector('.expandButton');
    this.articleButton.innerHTML = "Expand";
    this.articleButton.addEventListener('click', () =>this.expandArticle());
  }
  expandArticle() {
    this.aElement.classList.toggle('article-open');
  
  }
};

const articles = document.querySelectorAll('.article');
articles.forEach( article => new Article(article));
