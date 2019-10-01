window.onload = () => {

  // notifyNonsense.init()

  const options = {
    global: true,
    text: "Dogs like <a href='https://duckduckgo.com'>links</a>!",
    type: 'nn-alert',
    event: 'contextmenu'
  }
  notifyNonsense.init(options)

}
