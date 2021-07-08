const imageList = [
    "gradient_01.jpg",
    "gradient_02.jpg",
    "gradient_03.jpg",
    "gradient_04.jpg",
    "gradient_05.jpg",
]

const serendipityImage = imageList[Math.floor(Math.random() * imageList.length)];

console.log(serendipityImage);

const imgElement = document.createElement("img");
imgElement.src = `background/${serendipityImage}`;
document.body.appendChild(imgElement);
