const detailsContainer = document.querySelector(".driver-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("title");

console.log(id);

const driverUrl = "https://f1-drivers-2021.p.rapidapi.com/drivers/lewis";

async function driverDetails() {
    try {
        const response = await fetch(driverUrl, proxy);

        const details = await response.json();

        console.log(details);

        detailsContainer.innerHTML += `<div class="result">
                                        <h2>${details[i].title}</h2>
                                        <h3>${details[i].team}</h3>
                                        <h4>${details[i].country}</h4>
                                        </div>`;
    } catch (error) {
        console.log(error);
    }
}

driverDetails();

// Hmmmm i dont get it. i've tryed so many different things now :(
