// const search = document.getElementById("search-books");
// const bookList = document.getElementById("book-list");

// console.log(search, bookList);

// var titles = document.getElementsByClassName("title");
// console.log(Array.isArray(titles));

// Array.from(titles).forEach((item) => {
//   console.log(item);
// });

// const wmf = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(wmf);

//cala ne marche pas il a pas le All
// var books = document.querySelector("#book-list li .name");
// console.log(books);

//Tuto 4 JavaScript DOM-------------------------------
// var books = document.querySelectorAll("#book-list li .name");
// console.log(books);
// Array.from(books).forEach((book) => {
//   console.log(book);
// });

//Tuto 5 JavaScript DOM----------------------------------
// var books = document.querySelectorAll("#book-list li .name");

// Array.from(books).forEach((book) => {
//   console.log(book.textContent);
//   book.textContent += "  (Book Title)";
// });

// const bookList = document.querySelector("#book-list");
// console.log(bookList.innerHTML);
// bookList.innerHTML = "<h2>Book and more books...</h2>";
// bookList.innerHTML += "<h2>Book and more books...</h2>";

//Tuto 6 JavaScript DOM------------------------------
// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

//Tuto 7 JavaScript DOM----------------------------
// const bookList = document.querySelector("#book-list");
// console.log("the parent node is:", bookList.parentNode);
//Node is same a Ellemtn 99% of the time
// console.log("the parent element is:", bookList.parentElement.parentElement);
// console.log(bookList.children);

//Tuto 8 JavaScript DOM-----------------------------------
// const bookList = document.querySelector("#book-list");
// console.log("book-list next sibling is:", bookList.nextSibling);
// console.log("book-list next Element sibling is:", bookList.nextElementSibling);

// console.log("book-list next sibling is:", bookList.previousSibling);
// console.log(
//   "book-list next Element sibling is:",
//   bookList.previousElementSibling
// );

// bookList.previousElementSibling.querySelector("p").innerHTML +=
//   "<br/> Too cool for every one else";

//Tuto 9 JavaScript DOM--------------------------------
//remore <li>
// var btns = document.querySelectorAll("#book-list .delete");

// Array.from(btns).forEach(function(btn) {
//   btn.addEventListener("click", function(e) {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   });
// });

// const link = document.querySelector("#page-banner a");

// link.addEventListener("click", function(e) {
//   e.preventDefault();
//   console.log("navigaton to", e.target.textContent, "was preventer");
// });

//Tuto 10 JavaScript DOM delete

// const list = document.querySelector("#book-list ul");

// list.addEventListener("click", function(e) {
//   if (e.target.className == "delete") {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });

// Tuto 11-12 JavaScript DOM
document.addEventListener("DOMContentLoaded", function() {
  const list = document.querySelector("#book-list ul");

  list.addEventListener("click", function(e) {
    if (e.target.className == "delete") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });
  //add book
  const addForm = document.forms["add-book"];

  addForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log("value: ", value);
    console.log();

    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    //add content
    deleteBtn.textContent = "delete";
    bookName.textContent = value;

    //add classes
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    //appen to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });

  //hide book )checkBoxe
  const hideBox = document.querySelector("#hide");
  hideBox.addEventListener("change", function(e) {
    if (hideBox.checked) {
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  const searchBar = document.forms["search-books"].querySelector("input");

  searchBar.addEventListener("keyup", function(e) {
    const term = e.target.value.toLowerCase();

    const books = list.getElementsByTagName("li");
    Array.from(books).forEach(function(book) {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(term) != -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });

  const tabs = document.querySelector(".tabs");
  const panels = document.querySelectorAll(".panel");
  tabs.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if (panel == targetPanel) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    }
  });
});
