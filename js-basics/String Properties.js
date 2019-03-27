
//Exercise 7
const movie = {
    title: 'a',
    releaseYear: 2018,
    director: 'b'
};

// showProperties(movie);
function showProperties(obj) {
    for (let property in obj) {
        if (typeof(obj[property]) === "string") console.log(property,obj[property]);
    };
}


//Exercise 8
function sum(limit) {
    let result = 0;
    for (let i=0;i<=limit;i++){
        if (i%3 ===0 || i%5===0)
            result += i;
    };
    return result;
}

// console.log(sum(10));


//Exercise 9
const marks = [100, 100, 60];
function calculateGrade(marks) {
    let ave = marks.reduce((a,b)=>a + b)/marks.length;
    if (ave <= 50) return 'F'; 
    return 'FDCBAA'[~~((ave-50)/10)];
}
// console.log(calculateGrade(marks));

//Exercise 10
function showStars(rows) {
    for (let i = 1; i <= rows; i++)
        console.log('*'.repeat(i));
}
// showStars(4);



