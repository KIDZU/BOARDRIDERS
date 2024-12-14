const favorites = document.querySelectorAll('.addToFavorites')
console.log(favorites)
const addToFavorites = (elements) => {
  elements.forEach((el) => {
    el.onclick = () => {
      el.classList.toggle('activated_favorit')
    }
  })
}
addToFavorites(favorites)
