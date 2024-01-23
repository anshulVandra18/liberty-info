// Admin Will give this json to mobile to generate UI for template configuration
const admin_driven_template_configuration = {
    // Fixed 
    option_type: ["General Opt.", "No Opt.", "Internal Opt."],
    // Dynamic 
    one_mark_question_types: ["MCQ", "TF", "FB", "OW", "MT"],
    // Dynamic
    marks: [
        {
            mark: 1,
            options: ["PYQ", "EQ", "NEET", "JEE"],
            include: true,
        },
        {
            mark: 2,
            options: ["PYQ", "EQ", "NEET", "JEE"],
            include: true,
        },
        {
            mark: 3,
            options: ["PYQ", "EQ"],
            include: true,
        },
        {
            mark: 4,
            options: ["PYQ", "EQ"],
            include: true,
        },
        {
            mark: 5,
            options: ["PYQ", "EQ"],
            include: true,
        },
    ]
}

// Backend will provide this JSON in meta data as (MASTER SECTION JSON)
// It should be generated when admin hits on generate master 
const master_section = {
    subjects: [10, 11, 12],
    medium: [1, 0],
    books: [
        {
            id: 1,
            title: "Mathematics - 12th Science - GSEB - Eng",
            board: 0,
            medium: 1,
            standard: 10,
            stream: 1,
            subject: 2,
            // Need to Remove
            chapters: [{
                name: "",
                sections: [{
                    name: ""
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