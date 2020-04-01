getPracticalInfoFromWP()

function getPracticalInfoFromWP() {
    console.log('getSignUpInfoFromWP()');
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                practicalInfo = JSON.parse(this.responseText);

                practicalInfo = acfParser(practicalInfo)
                console.log(practicalInfo)
                renderPracticalInfoPage()
            } catch (error) {
                console.log(error)
            }
        }
        if (this.readyState == 4 && this.status > 400) {
            console.log('error 400')
        }
    }
    xhttp.open('GET', `${apiUrl}posts?tags=${tagPracticalInfoId}&per_page=100`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}

function renderPracticalInfoPage() {
    let outputParent = document.querySelector('.sub-section');
    practicalInfo.forEach(elem => {



        let output = `				<div class="item-container">
        <h3 class="article-header">
            ${elem.title}
        </h3>
        <i class="fas fa-chevron-down"></i>
        <div class="item-description hidden-display" id="info1">
            <p>${elem.paragraph_1}</p>

            <p>${elem.paragraph_2}</p>
        </div>
    </div>
    <hr>`

        // if (elem.prices.price_1) {
        //     output +=             `<p><strong>Prices:</strong></p>
        //     <p>${elem.prices.price_1} <br>
        //         ${elem.prices.price_2}</p>`
        // }
        // if (elem.links.link_1) {
        //     output += `            <p><strong>Links to the sign-up forms:</strong></p>
        //     <ul>
        //         <li><a href="${elem.links.link_1}"
        //                 target="_blank">Band Sing-up </a><i class="fas fa-external-link-alt"></i></li>
        //         <li><a href="${elem.links.link_3}"
        //                 target="_blank">Band Sign-up Kælderscenen (rap, rock n roll/DJ/electronica) </a><i
        //                 class="fas fa-external-link-alt"></i></li>
        //         <li><a href="${elem.links.link_2}"
        //                 target="_blank">Band Sign-up Caféscenen (unplugged) </a><i
        //                 class="fas fa-external-link-alt"></i></li>
        //         <li><a href="${elem.links.link_3}"
        //                 target="_blank">Accommodation </a><i class="fas fa-external-link-alt"></i></li>
        //     </ul>`
        // }
        //     output +=        `</div>
        //     </div>
        //     <hr>`
        outputParent.innerHTML += output
    });
    setUpInfoTabs()
}