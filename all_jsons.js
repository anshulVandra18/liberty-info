
// Backend will provide this JSON in meta data as (MASTER SECTION JSON)
// It should be generated when admin hits on generate master 
const master_section = {
    standards: [10, 11, 12],
    medium: [0, 1],
    books: [
        {
            id: 1,
            title: "Mathematics - 12th Science - GSEB - Eng",
            board: 0,
            medium: 1,
            stream: 0,
            standard: 12,
            subject: 0,
            master_url: "",
            is_master_generated: true,
            font_family: "",
            created_at: "",
            updated_at: "",
            chapters: [{
                id: 1,
                name: "chapter 1",
                sequence: 1,
                sections: [{
                    id: 1,
                    name: "section 1",
                    sequence: 1,
                }]
            }],
            paper_configuration: {
                total_marks: 0,
                // Dynamic 
                marks: [
                    {
                        mark: 1,
                        total_no_of_que: 0,
                        checkbox_options: [
                            { name: "PYQ", is_checked: false },
                            { name: "EQ", is_checked: false },
                            { name: "NEET", is_checked: false },
                            { name: "JEE", is_checked: false }
                        ],
                        one_mark_question_types: [
                            { name: "MCQ", is_selected: false, no_of_que: 0, },
                            { name: "TF", is_selected: false, no_of_que: 0, },
                            { name: "FB", is_selected: false, no_of_que: 0, },
                            { name: "OW", is_selected: false, no_of_que: 0, },
                            { name: "MT", is_selected: false, no_of_que: 0, }
                        ],
                        include: true,
                    },
                    {
                        mark: 2,
                        total_no_of_que: 0,
                        checkbox_options: [
                            { name: "PYQ", is_checked: false },
                            { name: "EQ", is_checked: false },
                        ],
                        include: true,
                        selected_option_type: "No Opt.",
                        option_type: [
                            { name: "No Opt.", no_of_que: 0 },
                            { name: "General Opt.", no_of_que: 0, out_of_que: 0 },
                            { name: "Internal Opt.", no_of_que: 0, sel_int_option: [] }
                        ],
                    },
                    {
                        mark: 3,
                        total_no_of_que: 0,
                        checkbox_options: [
                            { name: "PYQ", is_checked: false },
                            { name: "EQ", is_checked: false },
                        ],
                        include: true,
                        selected_option_type: "No Opt.",
                        option_type: ["No Opt.", "General Opt.", "Internal Opt."],
                    },
                    {
                        mark: 4,
                        total_no_of_que: 0,
                        checkbox_options: [
                            { name: "PYQ", is_checked: false },
                            { name: "EQ", is_checked: false },
                        ],
                        include: true,
                        selected_option_type: "No Opt.",
                        option_type: ["No Opt.", "General Opt.", "Internal Opt."],
                    },
                    {
                        mark: 5,
                        total_no_of_que: 0,
                        checkbox_options: [
                            { name: "PYQ", is_checked: false },
                            { name: "EQ", is_checked: false },
                        ],
                        include: true,
                        selected_option_type: "No Opt.",
                        option_type: ["No Opt.", "General Opt.", "Internal Opt."],
                    },
                ]
            },
        },
        {
            id: 2,
            title: "Science - 12th Science - GSEB - Eng",
            board: 0,
            medium: 1,
            stream: 0,
            standard: 12,
            subject: 1,
            master_url: "",
            is_master_generated: true,
            font_family: "",
            created_at: "",
            updated_at: "",
            chapters: [{
                id: 1,
                name: "chapter 1",
                sequence: 1,
                sections: [{
                    id: 1,
                    name: "section 1",
                    sequence: 1,
                }]
            }],
            paper_configuration: {
                total_marks: 0,
                // Dynamic 
                marks: [
                    {
                        mark: 1,
                        total_no_of_que: 0,
                        checkbox_options: [
                            { name: "PYQ", is_checked: false },
                            { name: "EQ", is_checked: false },
                            { name: "NEET", is_checked: false },
                            { name: "JEE", is_checked: false }
                        ],
                        one_mark_question_types: [
                            { name: "MCQ", is_selected: false, no_of_que: 0, },
                            { name: "TF", is_selected: false, no_of_que: 0, },
                            { name: "FB", is_selected: false, no_of_que: 0, },
                            { name: "OW", is_selected: false, no_of_que: 0, },
                            { name: "MT", is_selected: false, no_of_que: 0, }
                        ],
                        include: true,
                    },
                    {
                        mark: 2,
                        total_no_of_que: 0,
                        checkbox_options: [
                            { name: "PYQ", is_checked: false },
                            { name: "EQ", is_checked: false },
                        ],
                        include: true,
                        selected_option_type: "No Opt.",
                        option_type: [
                            { name: "No Opt.", no_of_que: 0 },
                            { name: "General Opt.", no_of_que: 0, out_of_que: 0 },
                            { name: "Internal Opt.", no_of_que: 0, sel_int_option: [] }
                        ],
                    },
                    {
                        mark: 3,
                        total_no_of_que: 0,
                        checkbox_options: [
                            { name: "PYQ", is_checked: false },
                            { name: "EQ", is_checked: false },
                        ],
                        include: true,
                        selected_option_type: "No Opt.",
                        option_type: ["No Opt.", "General Opt.", "Internal Opt."],
                    },
                    {
                        mark: 4,
                        total_no_of_que: 0,
                        checkbox_options: [
                            { name: "PYQ", is_checked: false },
                            { name: "EQ", is_checked: false },
                        ],
                        include: true,
                        selected_option_type: "No Opt.",
                        option_type: ["No Opt.", "General Opt.", "Internal Opt."],
                    },
                    {
                        mark: 5,
                        total_no_of_que: 0,
                        checkbox_options: [
                            { name: "PYQ", is_checked: false },
                            { name: "EQ", is_checked: false },
                        ],
                        include: true,
                        selected_option_type: "No Opt.",
                        option_type: ["No Opt.", "General Opt.", "Internal Opt."],
                    },
                ]
            },
        }
    ],
    version: 1,
    created_at: "UTC Date",
    updated_at: "UTC Date"
}

const template_configuration = {
    total_marks: 0,
    // Dynamic 
    marks: [
        {
            mark: 1,
            total_no_of_que: 0,
            checkbox_options: [
                { name: "PYQ", is_checked: false },
                { name: "EQ", is_checked: false },
                { name: "NEET", is_checked: false },
                { name: "JEE", is_checked: false }
            ],
            one_mark_question_types: [
                { name: "MCQ", is_selected: false, no_of_que: 0, },
                { name: "TF", is_selected: false, no_of_que: 0, },
                { name: "FB", is_selected: false, no_of_que: 0, },
                { name: "OW", is_selected: false, no_of_que: 0, },
                { name: "MT", is_selected: false, no_of_que: 0, }
            ],
            include: true,
        },
        {
            mark: 2,
            total_no_of_que: 0,
            checkbox_options: [
                { name: "PYQ", is_checked: false },
                { name: "EQ", is_checked: false },
            ],
            include: true,
            selected_option_type: "No Opt.",
            option_type: [
                { name: "No Opt.", no_of_que: 0 },
                { name: "General Opt.", no_of_que: 0, out_of_que: 0 },
                { name: "Internal Opt.", no_of_que: 0, sel_int_option: [] }
            ],
        },
        {
            mark: 3,
            total_no_of_que: 0,
            checkbox_options: [
                { name: "PYQ", is_checked: false },
                { name: "EQ", is_checked: false },
            ],
            include: true,
            selected_option_type: "No Opt.",
            option_type: ["No Opt.", "General Opt.", "Internal Opt."],
        },
        {
            mark: 4,
            total_no_of_que: 0,
            checkbox_options: [
                { name: "PYQ", is_checked: false },
                { name: "EQ", is_checked: false },
            ],
            include: true,
            selected_option_type: "No Opt.",
            option_type: ["No Opt.", "General Opt.", "Internal Opt."],
        },
        {
            mark: 5,
            total_no_of_que: 0,
            checkbox_options: [
                { name: "PYQ", is_checked: false },
                { name: "EQ", is_checked: false },
            ],
            include: true,
            selected_option_type: "No Opt.",
            option_type: ["No Opt.", "General Opt.", "Internal Opt."],
        },
    ]
}

const template_db_json = [
    { mark: 1, no_of_que: 0, },
    { mark: 2, no_of_que: 0, },
    { mark: 3, no_of_que: 0, },
    { mark: 4, no_of_que: 0, },
    { mark: 5, no_of_que: 0, },
]

const selected_question_json = {
    selected_questions_list: [{
        question_id: "C1_S4_1",
        original_mark: 1,
        updated_mark: 4,
    }],
    or_questions: [],
    slash_questions: [],
    plus_questions: [],
    x_questions: [],
}



// TODO :
// - scrapping add one data attribute as sync_id:`<book_id>_ch1_sec_1`

