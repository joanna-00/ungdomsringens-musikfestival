// convert to kebab-case :)))

const convertToKebabCase = (string) => {
    return string.replace(/\s+/g, '-').toLowerCase();
  }

const apiUrl = 'http://joajan.dreamhosters.com/wp-json/wp/v2/';
const apiKey = 'W1hYv3UyKlQTc12iLgWuhITHLWfhNYwC';
const categoryBandsId = 4;
let bands;
let names = [];

getBandsFromWP()

function getBandsFromWP() {
    console.log('getBandsFromWP()');
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                bands = JSON.parse(this.responseText);
                console.log(bands)

                structureBands()
                let bandEntries = Object.entries(bands)
                console.log(bandEntries)

                for (const [nameObject, {name, stage, time, day}] of bandEntries) {
                    console.log(`Values: ${nameObject}, ${name}, ${stage}, ${time}, ${day}`)
                    matchStage(name, stage, time, day)
                    handleNames(name)
                  }
            } catch (error) {
                console.log(error)
                // errorMessage(`Error parsing JSON: ${error}`);
            }
        }
        if (this.readyState == 4 && this.status > 400) {
            console.log('error 400')
            // errorMessage('An error has occured while getting the data. Please try again later!');
        }
    }
    xhttp.open('GET', `${apiUrl}posts?categories=${categoryBandsId}`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}

// console.log(bands)
// let bandEntries = Object.entries(bands)
// console.log(bandEntries)

function structureBands() {
    let array = []
    bands.forEach(elem => {
        // console.log(elem)
        array.push(elem.acf.band_info)
        // console.log(array)
        bands = {...array}
        // let object = Object.assign(array);
        console.log(bands)
    })
}

// debugger

// const bands = {
//     band1: {
//         name: 'A Band1',
//         stage: 'Royal Stage',
//         time: '10.00',
//         day: '1'
//     },
//     band2: {
//         name: 'E Band2',
//         stage: 'Skraaen',
//         time: '11.00',
//         day: '1'

//     },
//     band3: {
//         name: 'Z Band3',
//         stage: 'Royal Stage',
//         time: '12.30',
//         day: '2'
//     },
//     band4: {
//         name: 'L Band4',
//         stage: 'Joule',
//         time: '14.00',
//         day: '1'
//     },
//     band5: {
//         name: 'P Band1',
//         stage: 'Royal Stage',
//         time: '10.00',
//         day: '1'
//     },
//     band6: {
//         name: 'I Band2',
//         stage: 'Skraaen',
//         time: '10.00',
//         day: '1'

//     },
//     band7: {
//         name: 'VBand3',
//         stage: 'Royal Stage',
//         time: '16.00',
//         day: '2'
//     },
//     band8: {
//         name: 'Band4',
//         stage: 'Joule',
//         time: '13.00',
//         day: '2'
//     }
// }

// const bands = [
//     {
//         name: 'A Band1',
//         stage: 'Royal Stage',
//         time: '10.00',
//         day: '1'
//     },
//     {
//         name: 'E Band2',
//         stage: 'Skraaen',
//         time: '11.00',
//         day: '1'

//     },
//     {
//         name: 'Z Band3',
//         stage: 'Royal Stage',
//         time: '12.30',
//         day: '2'
//     },
//     {
//         name: 'L Band4',
//         stage: 'Joule',
//         time: '14.00',
//         day: '1'
//     },
//     {
//         name: 'P Band1',
//         stage: 'Royal Stage',
//         time: '10.00',
//         day: '1'
//     },
//     {
//         name: 'I Band2',
//         stage: 'Skraaen',
//         time: '10.00',
//         day: '1'

//     },
//     {
//         name: 'VBand3',
//         stage: 'Royal Stage',
//         time: '16.00',
//         day: '2'
//     },
//     {
//         name: 'Band4',
//         stage: 'Joule',
//         time: '13.00',
//         day: '2'
//     }
// ]



const table1 = document.querySelector('table#day1')
const table2 = document.querySelector('table#day2')

const tableRows1 = table1.querySelectorAll('tr')
const tableRows2 = table2.querySelectorAll('tr')
// console.log(tableRows)



function calculateTimes(dayStart, dayEnd) {
    let hours = [];
    dayStart = dayStart.split('.', 2);
    // if (dayStart[1] != 0) {
    //     dayStart[0] += 1
    // }
    // dayStart = Number(dayStart.split('.', 1));
    dayEnd = dayEnd.split('.', 2);



    dayStart[0] = Number(dayStart[0])
    dayStart[1] = Number(dayStart[1])

    dayEnd[0] = Number(dayEnd[0])
    dayEnd[1] = Number(dayEnd[1])

    for (i = dayStart[0]; i <= dayEnd[0]; i++) {
        if((i == dayStart[0] && dayStart[1] != '30') || (i != dayStart[0] && (i != dayEnd[0] || dayEnd[1] == '30'))) {
            hours.push(`${i}.00`);
        }

        if ((i != dayEnd[0] && dayEnd[1] == '30') || i != dayEnd[0]) {
            hours.push(`${i}.30`);
        }
    }
    console.log(hours);
    return hours
}




function drawTable(tableRows, dayStart, dayEnd) {
    let hours = calculateTimes(dayStart, dayEnd)
    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        if (i == 0) {
            hours.forEach(hour => {
                let newTh = document.createElement('th');
                newTh.innerHTML = hour;
                newTh.setAttribute('data-value', hour);
                row.appendChild(newTh);
                // console.log('appended')
            });
        }
        else {
            hours.forEach(hour => {
                let newTd = document.createElement('td');
                newTd.setAttribute('data-value', hour);
                row.appendChild(newTd);
                // console.log('appended')
            });
        }
    }
}

drawTable(tableRows1, '19.00', '24.00')
drawTable(tableRows2, '10.30', '23.00')


// DESTRUCTURE BANDS OBJECT

// let bandEntries = Object.entries(bands)
// console.log(bandEntries)


const matchStage = (name, stage, time, day) => {
    if (day == 1) {
        // LOOOP THROUGH TABLE ROWS TO FIND ONE MATCHING stage
        loopTableRows(tableRows1, name, stage, time, day)
    }
    if (day == 2) {
        // LOOOP THROUGH TABLE ROWS TO FIND ONE MATCHING stage
        loopTableRows(tableRows2, name, stage, time, day)
    }
}


function loopTableRows(table, name, stage, time, day) {
    table.forEach(row => {
        let rowValue = row.getAttribute('data-value');
        if (rowValue == stage) {
            console.log('scene match found')
            const cells = row.querySelectorAll('td');
            // LOOP THROUGH TABLE CELLS TO FIND ONE MATCHING time
            cells.forEach(cell => {
                let cellValue = cell.getAttribute('data-value');
                if (cellValue == time) {
                    console.log('time match found')
                    cell.innerHTML = `${name}`
                }
            });
        }
    });
}



// for (const [nameObject, {name, stage, time, day}] of bandEntries) {
//     console.log(`Values: ${nameObject}, ${name}, ${stage}, ${time}, ${day}`)
//     matchStage(name, stage, time, day)
//     handleNames(name)
//   }

function handleNames(name) {
    names.push(name)
    names.sort()
    console.log(names)
}
