
// convert to kebab-case :)))

const convertToKebabCase = (string) => {
    return string.replace(/\s+/g, '-').toLowerCase();
  }


const bands = {
    band1: {
        name: 'Band1',
        stage: 'Royal Stage',
        time: '10.00'
    },
    band2: {
        name: 'Band2',
        stage: 'Skaaren',
        time: '11.00'
    },
    band3: {
        name: 'Band3',
        stage: 'Royal Stage',
        time: '11.00'
    },
    band4: {
        name: 'Band4',
        stage: 'Scene Joule',
        time: '12.00'
    }
}


const table = document.querySelector('table')
const tableRows = document.querySelectorAll('tr')
// console.log(tableRows)


// DESTRUCTURE BANDS OBJECT

const bandEntries = Object.entries(bands)
console.log(bandEntries)



const matchStage = (name, stage, time) => {
    // LOOOP THROUGH TABLE ROWS TO FIND ONE MATCHING stage
    tableRows.forEach(row => {
        let rowValue = row.getAttribute('data-value');
        // console.log(stage)
        // console.log(rowValue)
        if (rowValue == stage) {
            console.log('scene match found')
            const cells = row.querySelectorAll('td');
            // console.log(cells)
            cells.forEach(cell => {
                let cellValue = cell.getAttribute('data-value');
                // console.log(cellValue)
                if (cellValue == time) {
                    console.log('time match found')
                    cell.innerHTML = `${name}`
                }
            });
        }
    });
}


for (const [nameObject, {name, stage, time}] of bandEntries) {
    console.log(`Values: ${nameObject} ${name} ${stage} ${time}`)
    matchStage(name, stage, time)
  }


// LOOP THROUGH TABLE CELLS TO FIND ONE MATCHING time


