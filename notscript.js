/* fetch("https://f1-live-motorsport-data.p.rapidapi.com/session/2757", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "f1-live-motorsport-data.p.rapidapi.com",
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

const url = "https://f1-live-motorsport-data.p.rapidapi.com/session/2757";
const options = {
    headers: {
        "x-rapidapi-host": "f1-live-motorsport-data.p.rapidapi.com",
        "x-rapidapi-key": "9a8ae15c5bmshf98d01efc34253bp1ae145jsn62409f75c5d1"
    }
};

const resultsContainer = document.querySelector(".results");

async function f1Data() {
    try {
        const response = await fetch(url, options);

        const data = await response.json();

        console.log(data);

        const facts = data.all;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].text);

            if (i === 20) {
                break;
            }
            resultsContainer.innerHTML += `<div class="result">${data[i].text}</div>`;
        }
    } catch (error) {
        console.log("error");
    }
}

f1Data();

/*const url "https://f1-live-motorsport-data.p.rapidapi.com/session/2757";
const options = {
    headers: {
        "x-rapidapi-host": "f1-live-motorsport-data.p.rapidapi.com",
        "x-rapidapi-key": "9a8ae15c5bmshf98d01efc34253bp1ae145jsn62409f75c5d1"
    }
};

async function fetchDriver () {
    try {
        const response = await fetch(url, options);

        const json = await response.json();

        console.log(json);

    } catch (error) {
        console.log("error");
    }
}

fetchDriver();

*/

/*fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
	"method": "GET",
	"headers": {
		"accept": "application/json",
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
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

const url = "https://f1-drivers-2021.p.rapidapi.com/drivers";
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
        //this gave me a headache. i dont know why i dont need the .all property
        for (let i = 0; i < info.length; i++) {
            console.log(info[i].title);

            resultsContainer.innerHTML += `<div class="result">${info[i].title}</div>`;
        }
    } catch (error) {
        console.log(error);
    }
}

f1Drivers();
