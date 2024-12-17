const neet_mock_test = {
    type: "NEET", // Admin 
    name: "Neet Mock Test", // Admin
    duration: "3:20",
    start_date: "30-01-2024", // Admin
    end_date: "30-01-2024", // Admin

    correctAnsMark: 4, // InDesign
    notAttemptedAnsMark: 0, // InDesign
    wrongAnsMark: -1, // InDesign
    total_marks: 120, // InDesign
    total_que: 120, // InDesign

    progress: 0, // percentage
    attempted: 0, // number of attempted question
    mark_for_reviewed: 0, // number of mark for review question

    // InDesign
    total_subjects: [{
        title: "Physics",
        marks: 40,
        total_no_of_que: 40,
        attempted_que: 0,
        progress: 0,
    }, {
        title: "Chemistry",
        marks: 40,
        total_no_of_que: 40,
        attempted_que: 0,
        progress: 0,
    }, {
        title: "Biology",
        marks: 40,
        total_no_of_que: 40,
        attempted_que: 0,
        progress: 0,
    }],
    questions: [
        {
            question_no: 1,
            subject: "Physics",
            root_id: "GUJARATI_QUE_QN1", // Which will be used to display current question
            selected_answer_id: "ENGLISH_RBTN_QN1_D",
            selected_answer: "",
            marked_for_review: false,
            attempted: false,
        }
    ]
}