// Define your Book class here:
// need a constructor and method
// Manuals get thrown out after 5 years, Novels should be thrown out if checked out over 100 times.
class Book {
    constructor(title, author, copyrightDate, ISBN, pages, checkedOut, discard){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.pages = pages;
        this.checkedOut = checkedOut;
        this.discard = discard;
    }
    checkOut(times = 1){
        this.checkedOut += times
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    discardingManual(year){
        if(year - this.copyrightDate > 5){
            this.discard = "Yes"
        }
    }
}
class Novel extends Book {
    discardingNovel(){
        if(this.checkedOut > 100){
            this.discard = "Yes"
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let PAP = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No')
let TSSBM = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No')


// Code exercises 4 & 5 here:
PAP.discardingNovel()
TSSBM.discardingManual(2023)

console.log(PAP)
console.log(TSSBM)