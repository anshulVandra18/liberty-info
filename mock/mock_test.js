const mock_test = {
    type: "JEE | NEET | GUJCET", // Admin 
    name: "Neet Mock Test", // Admin
    start_date: "", // Admin
    end_date: "", // Admin

    correctAnsMark: 4, // InDesign
    notAttemptedAnsMark: -0.25, // InDesign
    wrongAnsMark: -1, // InDesign
    total_marks: 720, // InDesign
    total_que: 180, // InDesign

    progress: 0, // percentage
    attempted: 0, // number of attempted question
    mark_for_reviewed: 0, // number of mark for review question

    // InDesign
    total_subjects: [{
        id: "PHY",
        title: "Physics",
        marks: 180,
        total_no_of_que: 50,
        attempted_que: 0,
        progress: 0,
        sections: [{
            title:"A",
            
        }]
    }, {
        id: "CHEM",
        title: "Chemistry",
        marks: 180,
        total_no_of_que: 50,
        attempted_que: 0,
        progress: 0,
    }, {
        id: "BIO",
        title: "Biology",
        marks: 360,
        total_no_of_que: 50,
        attempted_que: 0,
        progress: 0,
    }],
    questions: [
        {
            question_no: 1,
            subject: "PHY",
            root_id: "QUE_ROOT_1", // Which will be used to display current question
            selected_answer_id: "",
            selected_answer: "",
            marked_for_review: false,
            attempted: false,
        }
    ]
}