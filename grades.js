let averageGradeValue = document.getElementById("averageGradeValue");
const maxGradeVlue = document.getElementById("maxGradeVlue");
const minGradeValue = document.getElementById("minGradeValue");
const sumPositiveGradesValue = document.getElementById("sumPositiveGradesValue");
const sumNegativeGradesValue = document.getElementById("sumNegativeGradesValue");
const gradesAsLettersValue = document.getElementById("gradesAsLettersValue");

const grades = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);

const calcAverageGrade = (array) => {
    const sumGrade = array.reduce((a, b) => a + b);
    const averageGrade = Math.round(sumGrade / array.length);
    return averageGrade;
};
averageGradeValue.textContent = calcAverageGrade(grades);

const findMaxGrade = (array) => {
    let arrayCopy = [...array];
    arrayCopy.sort(function (a, b) {
        return a - b;
    });
    let maxGrade = arrayCopy[arrayCopy.length - 1];
    return maxGrade;
};
maxGradeVlue.textContent = findMaxGrade(grades);

const findMinGrade = (array) => {
    let arrayCopy = [...array];
    arrayCopy.sort(function (a, b) {
        return a - b;
    });
    let minGrade = arrayCopy[0];
    return minGrade;
};
minGradeValue.textContent = findMinGrade(grades);

const calcPositiveGrades = (array) => {
    const positiveGrades = array.filter((grade) => grade >= 60);
    const sumPositiveGrades = positiveGrades.length;
    return sumPositiveGrades;
};
sumPositiveGradesValue.textContent = calcPositiveGrades(grades);

const calcNegativeGrades = (array) => {
    const negativeGrades = array.filter((grade) => grade < 60);
    const sumNegativeGrades = negativeGrades.length;
    return sumNegativeGrades;
};
sumNegativeGradesValue.textContent = calcNegativeGrades(grades);

const gradesAsLetters = grades.map((grade) => {
    if (grade >= 80) {
        grade = "A";
        return grade;
    } else if (grade >= 60) {
        grade = "B";
        return grade;
    } else if (grade >= 40) {
        grade = "C";
        return grade;
    } else if (grade >= 20) {
        grade = "D";
        return grade;
    } else {
        grade = "E";
        return grade;
    }
});
gradesAsLettersValue.textContent = gradesAsLetters.join(", ");
