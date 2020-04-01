getPracticalInfoFromWP();

function getPracticalInfoFromWP() {
  console.log("getSignUpInfoFromWP()");
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      try {
        practicalInfo = JSON.parse(this.responseText);

        practicalInfo = acfParser(practicalInfo);
        console.log(practicalInfo);
        renderPracticalInfoPage();
      } catch (error) {
        console.log(error);
      }
    }
    if (this.readyState == 4 && this.status > 400) {
      console.log("error 400");
    }
  };
  xhttp.open(
    "GET",
    `${apiUrl}posts?tags=${tagPracticalInfoId}&per_page=100`,
    true
  );
  xhttp.setRequestHeader("Authorization", `Bearer ${apiKey}`);
  xhttp.send();
}

function renderPracticalInfoPage() {
  let outputParent = document.querySelector(".sub-section");
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
    <hr>`;
    outputParent.innerHTML += output;
  });
  setUpInfoTabs();
}
