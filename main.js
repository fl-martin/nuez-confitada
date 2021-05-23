const background = document.querySelector("#background");
let imagesURL = [];
let count = 0;

async function getImages() {
	const response = await fetch(
		"https://api.pexels.com/v1/search?query=nature",
		{
			headers: {
				Authorization:
					"563492ad6f91700001000001fc2dace139e14d6e9794e212092ce21b",
			},
		}
	);
	const imagesData = await response.json();
	return imagesData;
}

async function chooseImages() {
	imagesData = await getImages();
	for (let i = 0; i < 5; i++) {
		imagesURL.push(imagesData.photos[i].src.landscape);
	}
	return imagesURL;
}

async function displayImages() {
	let imagesURL = await chooseImages();
	background.style.backgroundImage = `url("${imagesURL[count]}")`;
	setInterval(changeBackground, 15000);
}

function changeBackground() {
	count++;
	if (count > 4) count = 0;
	background.style.backgroundImage = `url("${imagesURL[count]}")`;
}

displayImages();
