window.onload = () => {

  notifyNonsense.init()

  // const options = {
  //   global: true,
  //   text: "Dogs like <a href='https://duckduckgo.com'>links</a>!",
  //   type: 'nn-alert',
  //   event: 'contextmenu'
  // }
  // notifyNonsense.init(options)

  // How to treat confirm response
  // create an observer using the 'nn-confirm-input' element:

  // dynamically generated element to record confirm response
  let confirmResponse = document.getElementById("nn-confirm-input") // defaults to false

  // create callback to observe change in DOM element's 'value' attribute
  const confirmatonCallback = function (mutations) {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes') {
        if (mutation.target.value === 'true') {
          console.log('The user responded OK!')
        }
      }
    })
  }

  // create config for MutationObserver and start observing
  // here, we only care about the attributes mutating
  const observeConfirmation = function () {
    var config = {
      childList: false,
      attributes: true
    }
    let observer = new MutationObserver(confirmatonCallback)
    observer.observe(confirmResponse, config)
  }

  observeConfirmation()

}
