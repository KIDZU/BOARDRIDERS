const favorites = document.querySelectorAll('.addToFavorites')

const addToFavorites = (elements) => {
  elements.forEach((el) => {
    el.onclick = () => {
      el.classList.toggle('activated_favorit')
    }
  })
}

addToFavorites(favorites)
