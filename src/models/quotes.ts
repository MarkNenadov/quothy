export interface Book {
    title: string,
    author: string
  }
  
 export interface Quote {
    quote: string,
    book: Book
    tags: string[]
  }

  export default Quote