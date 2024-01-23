const cheerio = require('cheerio');
const fs = require('fs');

// JSON Data
const jsonData = {
    correctAnsMark: 4,
    notAttemptedAnsMark: -0.25,
    total_marks: 720,
    total_que: 180,
    total_subjects: [
        // ... your subjects here
    ],
    questions: [
        // ... your questions here
    ]
};

function extractQuestionsAndGenerateHtml(filePath, outputFilePath) {
    fs.readFile(filePath, 'utf8', (err, html) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const $ = cheerio.load(html);
        console.log('html: ', html);
        let extractedQuestions = '';
        let subjects = [];
        let subStrings = '';

        console.log(subStrings);

        $('.Quest').each((i, elem) => {

            const questionText = $(elem).text().trim();
            const options = $(elem).nextUntil('.Quest').map((j, optionElem) => {
                return $(optionElem).text().trim();
            }).get();

            if (options.length > 0) {
                extractedQuestions += `<div class="question">
                    <p>${questionText}</p>
                    <ul>${options.map(option => `<li>${option}</li>`).join('')}</ul>
                </div>`;
            }
        });

        const outputHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Extracted Questions</title>
                <style>
                    .question { margin-bottom: 20px; }
                    ul { list-style-type: none; }
                </style>
            </head>
            <body>
                ${extractedQuestions}
            </body>
            </html>
        `;

        // fs.writeFile(outputFilePath, outputHtml, (writeErr) => {
        //     if (writeErr) {
        //         console.error('Error writing file:', writeErr);
        //     } else {
        //         console.log('File written successfully');
        //     }
        // });
    });
}

extractQuestionsAndGenerateHtml('./input/test/Std-12_Sci_Booklet_MCQ_(EM_&_GM).html', './output/output.html');
