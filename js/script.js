/*fetch("https://f1-drivers-2021.p.rapidapi.com/drivers", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "f1-drivers-2021.p.rapidapi.com",
		"x-rapidapi-key": "9a8ae15c5bmshf98d01efc34253bp1ae145jsn62409f75c5d1"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
*/

const url = "https://f1-drivers-2021.p.rapidapi.com/drivers/";
const proxy = {
    headers: {
        "x-rapidapi-host": "f1-drivers-2021.p.rapidapi.com",
        "x-rapidapi-key": "9a8ae15c5bmshf98d01efc34253bp1ae145jsn62409f75c5d1"
    }
};

const resultsContainer = document.querySelector(".results");

async function f1Drivers() {
    try {
        const response = await fetch(url, proxy);

        const results = await response.json();

        const info = results;
        //this gave me a headache. i dont know why i didnt need the .all property
        resultsContainer.innerHTML = "";

        for (let i = 0; i < info.length; i++) {
            console.log(info[i].title);

            resultsContainer.innerHTML += `<a href="details.html?title${info}" class="result">
                                            <h2>${info[i].title}</h2>
                                            <h3>${info[i].team}</h3>
                                            <h4>${info[i].country}</h4>
                                            </a>`;
        }
    } catch (error) {
        console.log(error);
    }
}

f1Drivers();
