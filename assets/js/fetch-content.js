const apiUrl = 'http://joajan.dreamhosters.com/wp-json/wp/v2/';
const apiKey = 'W1hYv3UyKlQTc12iLgWuhITHLWfhNYwC';
const categoryBandsId = 4;
const tagSignUpInfoId = 9;
const tagFestivalInfoId = 5;
const tagPracticalInfoId = 7;

let names = [];

let bands;
let signUpInfo;
let festivalInfo;
let practicalInfo;


function acfParser(object) {
    let array = []
    object.forEach(elem => {
        array.push(elem.acf)
        // object = {...array}
        // console.log(object)
    })

    array = array.reverse()
    return array
}

