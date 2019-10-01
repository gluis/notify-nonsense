const animations = {

  fadeIn: (element, rate) => {
    element.style.opacity = 0
    let start = Date.now()
    let fadeUp = setInterval(() => {
      let milliseconds = Date.now() - start
      if (milliseconds >= rate || element.style.opacity > 1) {
        clearInterval(fadeUp)
        return
      }
      element.style.opacity = parseFloat(element.style.opacity) + 0.01
    })
  },

  fadeOut: (element, rate) => {
    element.style.opacity = 1
    let start = Date.now()
    let fadeDown = setInterval(() => {
      let milliseconds = Date.now() - start
      if (milliseconds >= rate || element.style.opacity < 0) {
        clearInterval(fadeDown)
        return
      }
      element.style.opacity = parseFloat(element.style.opacity) - 0.01
    })
  }

}

module.exports = animations
