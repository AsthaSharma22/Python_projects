// 1. Initial Book Inventory (Mirrors your Python dictionary)
const bookList = {
    "1": { title: "1. All Quiet on the Western Front by Erich Maria Remarque", copies: 5 },
    "2": { title: "2. The Book Thief by Markus Zusak", copies: 5 },
    "3": { title: "3. War and Peace by Leo Tolstoy", copies: 5 },
    "4": { title: "4. The Kite Runner by Khaled Hosseini", copies: 5 },
    "5": { title: "5. A Thousand Splendid Suns by Khaled Hosseini", copies: 5 },
    "6": { title: "6. The Odyssey by Homer", copies: 5 },
    "7": { title: "7. The Palace of Illusions by Chitra Banerjee", copies: 5 },
    "8": { title: "8. The Mistress of Spices by Chitra Banerjee", copies: 5 },
    "9": { title: "9. The Housemaid by Freida McFadden", copies: 5 },
    "10": { title: "10. Never Lie by Freida McFadden", copies: 5 }
};

// 2. User Lists (Mirrors your Python lists)
let borrowedBooks = [];
let rentedBooks = [];
let purchasedBooks = [];

// 3. Get References to HTML Elements
const bookListElement = document.getElementById("book-list");
const transactionForm = document.getElementById("transaction-form");
const returnForm = document.getElementById("return-form");

const myBorrowedList = document.getElementById("my-borrowed");
const myRentedList = document.getElementById("my-rented");
const myPurchasedList = document.getElementById("my-purchased");

// 4. Function to Render/Update the Catalog (Mirrors view_books)
function renderCatalog() {
    bookListElement.innerHTML = ""; // Clear current list
    for (let key in bookList) {
        const book = bookList[key];
        const li = document.createElement("li");
        li.textContent = `${book.title} - ${book.copies} copies available`;
        bookListElement.appendChild(li);
    }
}

// 5. Function to Render/Update the User Dashboard
function renderDashboard() {
    // Update Borrowed List
    myBorrowedList.innerHTML = borrowedBooks.length === 0 
        ? "<li>No books borrowed yet.</li>" 
        : borrowedBooks.map(book => `<li>${book}</li>`).join("");

    // Update Rented List
    myRentedList.innerHTML = rentedBooks.length === 0 
        ? "<li>No books rented yet.</li>" 
        : rentedBooks.map(book => `<li>${book}</li>`).join("");

    // Update Purchased List
    myPurchasedList.innerHTML = purchasedBooks.length === 0 
        ? "<li>No books purchased yet.</li>" 
        : purchasedBooks.map(book => `<li>${book}</li>`).join("");
}

// 6. Handle Borrow, Rent, and Buy Form Submission
transactionForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const bookId = document.getElementById("book-select").value;
    const action = document.getElementById("action-type").value;
    const selectedBook = bookList[bookId];

    if (selectedBook.copies > 0) {
        selectedBook.copies -= 1;

        if (action === "borrow") {
            borrowedBooks.push(selectedBook.title);
            alert(`Success! You have borrowed '${selectedBook.title}'.`);
        } else if (action === "rent") {
            rentedBooks.push(selectedBook.title);
            alert(`Success! You have rented '${selectedBook.title}' for 14 days.`);
        } else if (action === "buy") {
            purchasedBooks.push(selectedBook.title);
            alert(`Success! You have purchased '${selectedBook.title}'. Enjoy reading!`);
        }

        // Refresh the display
        renderCatalog();
        renderDashboard();
    } else {
        alert("Sorry, this book is currently out of stock.");
    }
});

// 7. Handle Return Form Submission (Mirrors return_a_book)
returnForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const category = document.getElementById("return-category").value;
    const inputTitle = document.getElementById("return-title").value.trim().toLowerCase();

    if (!inputTitle) {
        alert("Please enter a book title or number to return.");
        return;
    }

    let activeList = category === "borrowed" ? borrowedBooks : rentedBooks;

    if (activeList.length === 0) {
        alert(`You have no ${category} books to return.`);
        return;
    }

    // Find matching book in the user's active list (allows partial match like title or number)
    const matchIndex = activeList.findIndex(title => title.toLowerCase().includes(inputTitle));

    if (matchIndex !== -1) {
        const returnedBookTitle = activeList[matchIndex];
        
        // Remove from user's active list
        activeList.splice(matchIndex, 1);

        // Add 1 copy back to bookList inventory
        for (let key in bookList) {
            if (bookList[key].title === returnedBookTitle) {
                bookList[key].copies += 1;
                break;
            }
        }

        alert(`Successfully returned '${returnedBookTitle}'!`);
        document.getElementById("return-title").value = ""; // Clear input box

        // Refresh the display
        renderCatalog();
        renderDashboard();
    } else {
        alert("This book is not in your active items.");
    }
});

// Initialize display on load
renderCatalog();
renderDashboard();
// 8. Handle Contact Form Submission
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const query = document.getElementById("contact-query").value.trim();

        if (name && email && query) {
            alert(`Thank you, ${name}! Your query has been received. We will get back to you at ${email} shortly.`);
            contactForm.reset(); // Clear the form fields
        } else {
            alert("Please fill in all the fields before submitting.");
        }
    });
}