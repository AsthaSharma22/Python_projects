'''
The main functions that it will have:
view books
borrow books
buy books
rent a book
return a book'''


print("WELCOME TO THE ABODE OF BOOKS :)\n")
print("What would you like to do today?\n")


book_list= {
"1. All Quiet on the Western Front by Erich Maria Remarque":5,
"2. The Book Thief by Markus Zusak":5,
"3. War and Peace by Leo Tolstoy":5,
"4. The Kite Runner by Khaled Hosseini":5,
"5. A Thousand Splendid Suns by Khaled Hosseini":5,
"6. The Odyssey by Homer":5,
  "7. The Palace of Illusions by Chitra Banerjee":5,
  "8. The Mistress of Spices  by Chitra Banerjee":5,
  "9. The Housemaid by Freida McFadden":5,
  "10. Never Lie by Freida McFadden":5
}


#for key, value in book_list.items():
 # print(key,":",value)

borrowed_books = []
rented_books = []
purchased_books = []

def view_books():
    print("\n--- The books with their available copies are here ---")
    books_tuple = tuple(book_list.items())
    for key, value in books_tuple:
        print(f"{key} : {value} copies available")
    print("-" * 50)

def borrow_books():
    view_books()
    choice = input("Enter the exact book title or number key you want to borrow: ").strip()
    
    # Match user input against dictionary keys
    matched_key = None
    for key in book_list:
        if choice in key:
            matched_key = key
            break
            
    if matched_key:
        if book_list[matched_key] > 0:
            book_list[matched_key] -= 1
            borrowed_books.append(matched_key)
            print(f"Success! You have borrowed '{matched_key}'.")
        else:
            print("Sorry, this book is currently out of stock.")
    else:
        print("Invalid book choice. Please try again.")

def buy_books():
    view_books()
    choice = input("Enter the exact book title or number key you want to buy: ").strip()
    
    matched_key = None
    for key in book_list:
        if choice in key:
            matched_key = key
            break
            
    if matched_key:
        if book_list[matched_key] > 0:
            book_list[matched_key] -= 1
            purchased_books.append(matched_key)
            print(f"Success! You have purchased '{matched_key}'. Enjoy reading!")
        else:
            print("Sorry, copies are out of stock for purchase.")
    else:
        print("Book not found.")

def rent_a_book():
    view_books()
    choice = input("Enter the exact book title or number key you want to rent: ").strip()
    
    matched_key = None
    for key in book_list:
        if choice in key:
            matched_key = key
            break
            
    if matched_key:
        if book_list[matched_key] > 0:
            book_list[matched_key] -= 1
            rented_books.append(matched_key)
            print(f"Success! You have rented '{matched_key}' for 14 days.")
        else:
            print("Sorry, no copies available for rent.")
    else:
        print("Book not found.")

def return_a_book():
    print("\n--- Your Active Items ---")
    print(f"1. Borrowed Books: {borrowed_books}")
    print(f"2. Rented Books: {rented_books}")
    
    category = input("Are you returning a (borrowed) or (rented) book? ").lower().strip()
    
    if category == "borrowed":
        if not borrowed_books:
            print("You have no borrowed books to return.")
            return
        book_name = input("Enter the exact book title you are looking for")
      
def return_a_book():
    print("\n--- Your Active Items ---")
    print("Borrowed Books:", borrowed_books)
    print("Rented Books:", rented_books)

    category = input(
        "\nAre you returning a (borrowed) or (rented) book? "
    ).lower().strip()

    if category == "borrowed":
        active_list = borrowed_books

    elif category == "rented":
        active_list = rented_books

    else:
        print("Invalid category.")
        return

    if not active_list:
        print("You have no books to return.")
        return

    book_name = input(
        "Enter the exact book title you want to return: "
    ).strip()

    if book_name in active_list:
        active_list.remove(book_name)
        book_list[book_name] += 1
        print(f"Successfully returned '{book_name}'!")

    else:
        print("This book is not in your active items.")

while True:

    print("\n========== ABODE OF BOOKS ==========")
    print("1. View all books")
    print("2. Borrow a book")
    print("3. Rent a book")
    print("4. Purchase a book")
    print("5. Return a book")
    print("6. View my borrowed books")
    print("7. View my rented books")
    print("8. View my purchased books")
    print("9. Exit")

    choice = input("\nEnter your choice: ").strip()

    if choice == "1":
        view_books()

    elif choice == "2":
        borrow_books()

    elif choice == "3":
        rent_a_book()

    elif choice == "4":
        buy_books()

    elif choice == "5":
        return_a_book()

    elif choice == "6":
        print("\nYour borrowed books:")
        print(borrowed_books)

    elif choice == "7":
        print("\nYour rented books:")
        print(rented_books)

    elif choice == "8":
        print("\nYour purchased books:")
        print(purchased_books)

    elif choice == "9":
        print("\nThank you for visiting Abode of Books!")
        break

    else:
        print("\nInvalid choice. Please try again.")
