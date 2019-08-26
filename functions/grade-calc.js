//Caculate the Student score and total possible score to find the percentage and grade
//15/20 -> You got a C (75%)!
// A 90 - 100, B 80 - 89, C 70 - 79, D 60 - 69, F 0 - 59

const calcGrade = function(studentScore, totalScore = 20) {
    const gradePercent = (studentScore / totalScore) * 100
    let letterGrade = ''
    if(gradePercent >= 90) {
        letterGrade = 'A'
    } else if(gradePercent >= 80) {
        letterGrade = 'B'
    } else if(gradePercent >= 70) {
        letterGrade = 'C'
    } else if(gradePercent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return`${studentScore}/${totalScore} -> You got a ${letterGrade} (${gradePercent}%)!`
}

const result = calcGrade(17)
console.log(result)