getFestivalInfoFromWP();

function getFestivalInfoFromWP() {
  console.log("getFestivalFromWP()");
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      try {
        festivalInfo = JSON.parse(this.responseText);
        festivalInfo = acfParser(festivalInfo)[0];
        console.log(festivalInfo);
        renderFestivalInfo();
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
    `${apiUrl}posts?tags=${tagFestivalInfoId}&per_page=100`,
    true
  );
  xhttp.setRequestHeader("Authorization", `Bearer ${apiKey}`);
  xhttp.send();
}

function renderFestivalInfo() {
  let footer = document.querySelector(".info-footer").querySelector("div");
  footer.innerHTML = `
    <h2>
        ${festivalInfo.name}
    </h2>
    <p>
    ${festivalInfo.start_date} to ${festivalInfo.end_date} 
    </p>
    <p>
        Friday: ${festivalInfo.day_1_start_time}  -  ${festivalInfo.day_1_end_time}
    </p>
    <p>
        Saturday:  ${festivalInfo.day_2_start_time} - ${festivalInfo.day_2_end_time}
    </p>
    <p>
    ${festivalInfo.address_line_1}
    </p>
    <p>
    ${festivalInfo.address_line_2}
    </p>
    `;

  let topBar = document.querySelector(".date");
  topBar.innerHTML = `${festivalInfo.start_date} - ${festivalInfo.end_date}
    - Aalborg`;
}
