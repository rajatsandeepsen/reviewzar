const container = document.getElementById('items')
const searchbar = document.getElementById('searchbar')
const item1 = document.getElementById('item1')

searchbar.addEventListener('submit', e => {
    e.preventDefault()
    console.log(searchbar.productURL.value)

    setTimeout(() => {
        item1.style.display = 'flex'
    }, 1000);
})

const array = document.getElementsByClassName('navA')
console.log(array)