console.log(window.location.href)
let url = window.location.href.split('/')
let id = url[url.length - 1].slice(1)
const docRef = document.getElementById('docRef')
docRef.innerHTML = `Your Document ID is <span class="fw-bolder">${id}</span>`
console.log(id)