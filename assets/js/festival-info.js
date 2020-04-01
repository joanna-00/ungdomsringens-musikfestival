function getFestivalInfoFromWP() {
    console.log('getFestivalFromWP()');
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                festivalInfo = JSON.parse(this.responseText);
                festivalInfo = acfParser(festivalInfo)
                console.log(festivalInfo)
                renderFestivalInfo()

            } catch (error) {
                console.log(error)
            }
        }
        if (this.readyState == 4 && this.status > 400) {
            console.log('error 400')
        }
    }
    xhttp.open('GET', `${apiUrl}posts?tags=${tagSignUpInfoId}&per_page=100`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}



function renderFestivalInfo() {
    let footer = document.querySelector('.info-footer')
}