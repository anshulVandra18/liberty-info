## Subject Module and Question Bank

Note : we need to upload one template CSV file in s3 for now we can upload it in our local server and send that url link in admin login response

# Upload New Subject (API Process)

# [AP - Subject]

Req Parameters:

- education_board (enum)
- medium (enum)
- standard (integer)
- stream (enum)
- subject (enum)
- paper_configuration (JSON)
  {
  marks : [] ,
  one_mark_que_types : []
  }
- CSV file for index (file)

Database: tbl_book, tbl_chapter , tbl_section , tbl_paper_configuration

- title : concat(`<subject(actual name)> - <standard>th <stream> - <education_board> - <medium>`)ex: "Mathematics - 12th Science - GSEB - Guj"
- board: education_board
- medium: medium
- stream: stream
- standard: standard
- subject : subject
- paper_configuration: paper_configuration
- is_master_generated : false
- master_url : null

CSV processing
=> From Csv we will get chapters and section list and we have to add those list in tbl_chapters and tbl_sections

paper_configuration (JSON)
=> Need to add entry in tbl_paper_configuration with book_id reference

---

# List Subjects (API)

# [AP - Subject]

---

Note : If we don't have any request param for pagination send all the data

Req Params:

- page (optional): number
- limit (optional): number
- search (optional): string
- is_master_generated (optional) : boolean
  => true / false (need filter on this column to get list of books with generated and not generated books) and if is_master_generated is not there in request param then send all book list

Res Params:

- title : concat(`<subject(actual name)> - <standard>th <stream> - <education_board> - <medium>`)ex: "Mathematics - 12th Science - GSEB - Guj"
- board: education_board
- medium: medium
- stream: stream
- standard: standard
- subject : subject
- chapters
- Sections

---

# Detail Subjects (API)

# [AP - Subject]

---

Req Params:

- subject_id: integer (Request param) "/subject/id"
- is_uploaded_section (Optional) : boolean 
=> when is_uploaded_section is true send only those tbl_section records which has is_uploaded : true

Res Params:

- title : concat(`<subject(actual name)> - <standard>th <stream> - <education_board> - <medium>`)ex: "Mathematics - 12th Science - GSEB - Guj"
- board: education_board
- medium: medium
- stream: stream
- standard: standard
- subject : subject
- paper_configuration
- chapters
- sections

Note: need to send all the chapters and section JSON for that subject
ex: chapters : [
{
name:'chapter - 1 ',
sections:[{
name : "s1 - section 1"
}]
}
]

---
