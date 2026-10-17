export interface Book {
  title: string;
  author: string;
}

export interface Quote {
  id: string;
  quote: string;
  book: Book;
  tags: string[];
}
