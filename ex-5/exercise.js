function loadBooks(array) {

}

// Paste here your array
var books = [
    { title: 'The Design of EveryDay Things',  author: 'Don Norman', alreadyRead: false }, 
    { title: 'The power of now', author: 'Ekhart Tolle', alreadyRead: true }, 
    { title: 'The Three Body Problem', author: 'Liu Cixin', alreadyRead: true }
  ];
 
  books.forEach(function(item){
let title = document.createElement("p");
let author = document.createElement("p");
let title = document.createTextNode(item.title);
let author = document.createTextNode(item.author);
titleTag.appendChild(title);
titleTag.appendChild(author);
document.getElementsByTagName("body")[0].appendChild(titleTag);
document.getElementsByTagName("body")[0].appendChild(author);
})
// This function will execute when the window loads
window.onload = loadBooks(array);
