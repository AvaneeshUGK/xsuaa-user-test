namespace my.bookshop;

using {
  cuid,
  managed
} from '@sap/cds/common';

entity Authors : managed, cuid {
  name: String;
  address: String;
  genre: String;
  toBooks: Composition of many Books on toBooks.toAuthors = $self;
}
entity Books {
  key ID : UUID;
  authorId: UUID;
  title  : String;
  stock  : Integer;
  toAuthors: Association to one Authors on toAuthors.ID = authorId;
}


