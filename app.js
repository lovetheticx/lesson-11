let books = [
  {
    id: 1,
    title: "O'tkan kunlar",
    author: "Abdulla Qodiriy",
    price: 50000,
    isRead: true,
  },
  {
    id: 2,
    title: "Sariq devni minib",
    author: "Xudoyberdi To'xtaboyev",
    price: 40000,
    isRead: false,
  },
];
//-----------------------------------------------------------------
// 1. CREATE - Kitob qo'shish
//----------------------------------------------------------------

function addBook(nomi, muallif, narxi) {
  const newBook = {
    id: books.length + 1,
    title: nomi,
    author: muallif,
    price: narxi,
    isRead: false,
  };
  books.push(newBook);
  return newBook;
}
console.log(addBook("Yulduzli tunlar", "Abdulla Qodiriy", 60000));

//---------------------------------------------------------------
// 2. READ - Kitoblarni ko'rsatish
//-----------------------------------------------------------------

function showBooks() {
  for (let book of books) {
    console.log(
      `Kitob nomi: ${book.title}, Muallif: ${book.author}, Narxi: ${book.price}, Holati: ${
        book.isRead ? "O'qilgan" : "O'qilmagan"
      }`,
    );
  }
}
showBooks();

//-----------------------------------------------------------------
// 3. UPDATE - Kitobni tahrirlash / holatini o'zgartirish
//-------------------------------------------------------------

function updateBook(id, newTitle, newPrice) {
  const book = books.find((book) => book.id === id);
  if (book) {
    book.title = newTitle;
    book.price = newPrice;
    return book;
  } else {
    return null;
  }
}
console.log(updateBook(1, "O'tkan kunlar", 55000));

function toggleReadStatus(id) {
  const book = books.find((book) => book.id === id);
  if (book) {
    book.isRead = !book.isRead;
    return book;
  } else {
    return null;
  }
}
console.log(toggleReadStatus(1));

//-----------------------------------------------------------------
// 4. DELETE - Kitobni o'chirish
//-----------------------------------------------------------------

function deleteBook(id) {
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books = books.filter((book) => book.id !== id);
    return books;
  } else {
    return null;
  }
}
console.log(deleteBook(1));
