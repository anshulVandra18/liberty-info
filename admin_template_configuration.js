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