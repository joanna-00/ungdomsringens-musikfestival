getLandingPageInfoFromWP()

function getLandingPageInfoFromWP() {
    console.log('getLandingPageInfoFromWP()');
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                landingPageInfo = JSON.parse(this.responseText);

                landingPageInfo = acfParser(landingPageInfo)
                console.log(landingPageInfo)
                renderLandingPage()
            } catch (error) {
                console.log(error)
            }
        }
        if (this.readyState == 4 && this.status > 400) {
            console.log('error 400')
        }
    }
    xhttp.open('GET', `${apiUrl}posts?tags=${tagLandingPageInfoId}&per_page=100`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}


function renderLandingPage() {
    let outputParents = document.querySelectorAll('article');
    for (let i = 0; i < outputParents.length; i++) {
        // console.log(landingPageInfo[i])
        let { paragraph_1, paragraph_2, paragraph_3 } = landingPageInfo[i]
        outputParents[i].innerHTML += `
        <p>${paragraph_1}</p>
        <p>${paragraph_2}</p>
        <p>${paragraph_3}</p>
        `
    }

    // signUpInfo.forEach(elem => {
    
    //     let output = `
    //         <p>${elem.paragraph_1}</p>
    //         <p>${elem.paragraph_2}</p>
    //         <p>${elem.paragraph_3}</p>
    //         `

    //     outputParents[i].innerHTML += output
    // });

}