const books = [
  { id: 1, title: "L'Étranger", author: "Albert Camus", year: 1942, genre: "Fiction", pages: 159, isRead: true },
  { id: 2, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", pages: 328, isRead: false },
  { id: 3, title: "Les Misérables", author: "Victor Hugo", year: 1862, genre: "Historical Fiction", pages: 1462, isRead: true },
  { id: 4, title: "Dune", author: "Frank Herbert", year: 1965, genre: "Science Fiction", pages: 412, isRead: false },
  { id: 5, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", year: 1943, genre: "Children's Literature", pages: 96, isRead: true }
];
for(let book of books) {
    if (book.year<1980 && book.year>1940 && book.pages>300){
    for(i of book.title) {
        if(i === "L" ) {
         
         console.log(book.title)
        }
    }
    }
}