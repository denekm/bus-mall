'use strict';

let imgArray =[];
let counter = 0;
let counterMaxValue = 25;
let indexArray = [];

const myContainer = document.querySelector('section');
const myButton = document.querySelector('section + div');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

function Product(name, fileExtension = 'jpeg') {
  this.likes = 0;
  this.views = 0;
  this.name = name;
  this.src =`img/${name}.${fileExtension}`;
  imgArray.push(this);
}

function selectRandomImg() {
  return Math.floor(Math.random() * imgArray.length);
}

function renderImages() {
  // let product1 = selectRandomImg();
  // let product2 = selectRandomImg();
  // let product3 = selectRandomImg();
  while (indexArray.length < 6) {
    let randomIndex = selectRandomImg();
    if (!indexArray.includes(randomIndex)) {
      indexArray.push(randomIndex);
    }
  }

  let product1 = indexArray.shift();
  let product2 = indexArray.shift();
  let product3 = indexArray.shift();

  image1.src = imgArray[product1].src;
  image1.alt = imgArray[product1].name;
  image2.src = imgArray[product2].src;
  image2.alt = imgArray[product2].name;
  image3.src = imgArray[product3].src;
  image3.alt = imgArray[product3].name;
  imgArray[product1].views++;
  imgArray[product2].views++;
  imgArray[product3].views++;
}

function handleClick(event) {
  if (event.target === myContainer) {
    alert ('Please Click on an Image');
  }
  counter++;
  let imgClicked = event.target.alt;
  for (let i = 0; i < imgArray.length; i++) {
    if(imgClicked === imgArray[i].name) {
      imgArray[i].likes++;
      break;
    }
  }

  // RENDER THE CHART TO THE DOM
  if (counter === counterMaxValue) {
    myContainer.removeEventListener('click', handleClick);
    renderChart();
  } else {
    renderImages();
  }
}
function renderChart(){
  let imgNames =[];
  let imgLikes =[];
  let imgViews =[];
  for (let i = 0; i <imgArray.length; i++) {
    imgNames.push(imgArray[i].name);
    imgLikes.push(imgArray[i].likes);
    imgViews.push(imgArray[i].views);
  }

  const data = {
    labels: imgNames,
    datasets: [{
      label: 'Number of Views',
      data: imgViews,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  const chart = document.getElementById('myCanvas');
  const myChart = new Chart(chart,config);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');


renderImages();

myContainer.addEventListener('click', handleClick);
