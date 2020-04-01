getSignUpInfoFromWP()

function getSignUpInfoFromWP() {
    console.log('getSignUpInfoFromWP()');
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                signUpInfo = JSON.parse(this.responseText);

                signUpInfo = acfParser(signUpInfo)
                renderSignUpPage()
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


function renderSignUpPage() {
    let outputParent = document.querySelector('.sub-section');
    signUpInfo.forEach(elem => {
        let output = `<div class="item-container">
        <h3 class="article-header">
        ${elem.title}
        </h3>
        <i class="fas fa-chevron-down"></i>
        <div class="item-description hidden-display">
            <p>${elem.paragraph_1}<br>
            ${elem.paragraph_2}</p>`

        if (elem.prices.price_1) {
            output +=             `<p><strong>Prices:</strong></p>
            <p>${elem.prices.price_1} <br>
                ${elem.prices.price_2}</p>`
        }
        if (elem.links.link_1) {
            output += `            <p><strong>Links to the sign-up forms:</strong></p>
            <ul>
                <li><a href="${elem.links.link_1}"
                        target="_blank">${elem.links.link_1_label}</a><i class="fas fa-external-link-alt"></i></li>
                <li><a href="${elem.links.link_2}"
                        target="_blank">${elem.links.link_2_label}</a><i
                        class="fas fa-external-link-alt"></i></li>
                <li><a href="${elem.links.link_3}"
                        target="_blank">${elem.links.link_3_label}</a><i
                        class="fas fa-external-link-alt"></i></li>
                <li><a href="${elem.links.link_4}"
                        target="_blank">${elem.links.link_4_label}</a><i class="fas fa-external-link-alt"></i></li>
            </ul>`
        }
            output +=        `</div>
            </div>
            <hr>`
        outputParent.innerHTML += output
    });
    setUpInfoTabs()
}