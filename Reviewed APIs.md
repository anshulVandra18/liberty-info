### Book Module

## Database

add one column in tbl_book
column name = paper_configuration (nullable , JSON)

## API list

- [AP - Book]

1. Create paper configuration (POST)
   Req param

- book_id\* number
- configuration\* = {
  book_id: 1,
  one_mark_question_types: [
  "MCQ",
  "True/False",
  "Fill in the blanks",
  "One word / One sentense",
  "Matching",
  "Other"
  ],
  sections: [{
  mark: 1,
  },{
  mark: 2
  },{
  mark: 3
  },{
  mark: 4
  },{
  mark: 5
  },
  ]}

2. Paper Configuration ( List )
   Req Param

- Basic Pagination , searching

3. Update Paper Configuration ( update )
   Req Param

- id\*
- configuration

4. Get Remaining BookList

- Return book list which does not exist in tbl_paper_configuration (For DropDown)

- [CM - Paper Configuration]

1. Paper Configuration ( Detail )
   -> get detail either by tbl_paper_configuration > id or by book_id
   Req Param

- id* or book_id*
  Res
- all detail
