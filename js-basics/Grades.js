
function getGrade(score) {
    let grade;
    // Write your code here
    grade = 'FEDCBA'[~~((score-1)/5)];
    return grade;
}

console.log(getGrade(11));