'use strict';

let imgArray =[];
let counter = 0;
let counterMaxValue = 25;

const myContainer = document.querySelector('section');
const myButton = document.querySelector('section + div');

let img1 = document.querySelector('select img:first-child');
let img2 = document.querySelector('select img:nth-child(2)');
let img3 = document.querySelector('select img:nth-child(3)');

function Product(name, fileExtension = 'jpeg') {
  this.name = name;
  this.likes = 0;
  this.views = 0;
  this.src = `images/${name}.${fileExtension}`;
  imgArray.push(this);
}

function selectProduct() {
  return Math.floor(Math.random() * imgArray.length);
}

function renderImages() {
  let img1 = selectRandomImg();
  let img2 = selectRandomImg();
  let img3 = selectRandomImg();
  while(img1 === img2) {
    img2 = selectRandomImg();
  }

  img1.src = imgArray[img1].src;
  img1.alt = imgArray[img1].name;
  img2.src = imgArray[img2].src;
  img2.alt = imgArray[img2].name;
  img3.src = imgArray[img3].src;
  img3.alt = imgArray[img3].name;

  imgArray[img1].views++;
  imgArray[img2].views++;
  imgArray[img3].views++;

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
  new Product('bag');
  new Product('banana');
  new Product('bathroom');

  renderImages();
}
