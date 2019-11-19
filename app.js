//book construction
function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;

}
//ui Contortor
function UI(){

}
//event Listeners
document.getElementById('book-from').addEventListener('submit',
  function(e){
    // get form values

    const title=document.getElementById('title').value,
    author=document.getElementById('author').value,
    isbn=document.getElementById('isbn').value
    // instantiate book
    const book=new Book(title,author,isbn);
    console.log(book);
      e.preventDefault();
  }
);

