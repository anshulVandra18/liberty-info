const template = {
    name: "template name",
    book_id: 1,
    total_marks: 50,
    // We will get question configuration from array index like que_configuration_10[1]
    que_configuration: [
        // 1 Mark
        {
            // Common
            mark: 1,
            is_section_enabled: true, // true | false
            include_exercise_que: true, // true | false
            include_prev_year_que: true, // true | false
            one_mark_que_type: [
                {
                    type: "MCQ",
                    // Option Type = internal
                    option_type: "internal", // internal | general
                    index_of_internal_que: "2",
                    no_of_que: "3", // Common

                    // Option Type = internal
                    option_type: "general", // internal | general
                    no_of_que: "3", // Common
                    max_no_of_que: "5",

                    // If standard is 11 or 12 

                },
                // same with below 
                // "True/False",
                // "Fill in the blanks",
                // "One word / One sentense",
                // "Matching",
                // "Other"
            ],

            // Option Type = internal
            option_type: "internal", // internal | general
            index_of_internal_que: "2",
            no_of_que: "3", // Common

            // Option Type = internal
            option_type: "general", // internal | general
            no_of_que: "3", // Common
            max_no_of_que: "5",

        },
        // 2 Mark
        {
            // Common
            mark: 2,
            is_section_enabled: true, // true | false
            include_exercise_que: true, // true | false
            include_prev_year_que: true, // true | false

            // Option Type = internal
            option_type: "internal", // internal | general
            index_of_internal_que: "2",
            no_of_que: "3", // Common

            // Option Type = internal
            option_type: "general", // internal | general
            no_of_que: "3", // Common
            max_no_of_que: "5",
        },
        {},
        {}
    ]
}

const fs = require("fs")

fs.mkdir("./uploads/tmp/", (err) => {
    console.log('err: ', err);
})