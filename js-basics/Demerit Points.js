checkSpeed(60);

function checkSpeed(speed) {
    let point = Math.floor((speed - 70)/5);
    if (point <= 0) console.log('OK');
    else if (point <= 12) console.log('Points', point);
    else console.log('Licence suspended');
}