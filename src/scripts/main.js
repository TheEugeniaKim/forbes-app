//Variables
let API_CLIENTID = "xehbc6il9cwCbakmIJVQSx6D-7E0DPlx95C7jkpwILk"
const API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=10&client_id=${API_CLIENTID}`;
const form = document.querySelector('form')
const input = document.querySelector('input')
const imgContainer = document.querySelector('.img-container')
const allImgs = document.querySelectorAll('.img')
const nextBtn = document.querySelector('.next-btn')
const backBtn = document.querySelector('.back-btn')
const page = document.querySelector('.page')
const pagination = document.querySelector('.pagination')
const pageContainer = document.querySelector('.pagination-container')
const modalNode = document.querySelector('.modal')
const logo = document.querySelector('.forbes-logo')
const modal = modalNode.childNodes
let searchTerm
let pageNum = 1
let images = []

// Add Event Listeners 
form.addEventListener('submit', () => submitForm(event))
nextBtn.addEventListener('click', () => nextTenPhotos(event))
backBtn.addEventListener('click', () => backTenPhotos(event))
logo.addEventListener('click', () => {location.reload()})

//Functions
let submitForm = (event) => {
  event.preventDefault()
  searchTerm = input.value
  input.value = ""
  searchPhotos(searchTerm)
}

let nextTenPhotos = (event) => {
  pageNum++ 
  searchPhotos(searchTerm)
}

let backTenPhotos = (event) => {
  if (pageNum > 1) {
    pageNum--
    searchPhotos(searchTerm)
  }
}

let searchPhotos = (searchTerm) => {
  let url = `${API_URL}&query=${searchTerm}&page=${pageNum}`
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      images = data 
      displayPhotos(data)
  })
}

let displayPhotos = (data) => {
  //clears previous images on page 
  if (imgContainer.childNodes.length > 0) {    
    imgContainer.innerHTML = ''
  } 
  // update page number
  if (data.results.length > 0){
    pagination.style.display = 'inline-block';

    page.innerHTML = ""
    page.insertAdjacentText('afterbegin', `Page: ${pageNum}`)
  } 
  //placing new images on page and adding event listeners for modal
  data.results.forEach((img,index) => {
    let imgElement = document.createElement('img')
    imgElement.src = img.urls.thumb
    imgElement.alt = img.alt_description
    imgElement.className="img"
    imgElement.id=index
    imgElement.addEventListener('click', () => displayModal(img, index))
    imgContainer.appendChild(imgElement)
  })

}

//helper function - get modal element
let findModalElement = (element) => {
  return document.querySelector(`.modal ${element}`)
}

let displayModal = (img, index) => {
  modalNode.style.display = 'block'
  findModalElement('img').src = img.urls.regular
  findModalElement('p').innerHTML = img.description
}

findModalElement('span').addEventListener('click', () => {
  console.log('clicking')
  document.querySelector('body').style.overflow = 'auto'  
  modalNode.style.display = 'none'
})

