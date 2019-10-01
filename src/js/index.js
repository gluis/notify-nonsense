(function (window) {
  'use strict'

  function notifyNonsense() {

    const mobileFunctions = require('./mobile-functions.js')
    const animations = require('./animations.js')

    const NN = {}

    let alertWindow, nnContainer, nnType, nnGlobalText
    let isGlobal = false

    const setUpDefaults = () => {
      NN.nnOk = document.createElement('span')
      NN.nnCancel = document.createElement('span')
      NN.nnOk.innerHTML = 'Ok!'
      NN.nnCancel.innerHTML = 'Cancel'
      NN.nnOk.setAttribute('class', 'nn-action-button ok')
      NN.nnOk.setAttribute('data-response', 'ok')
      NN.nnCancel.setAttribute('class', 'nn-action-button cancel')
      NN.nnCancel.setAttribute('data-response', 'cancel')
      NN.response = false
    }

    const getAlertButtons = () => {
      const alertButtons = document.querySelectorAll('.nn-alert');

      const alertButtonCount = alertButtons.length

      if (alertButtonCount > 0) {
        alertButtons.forEach(b => {
          b.addEventListener('click', showAlertWindow)
        })
      }
    }

    const getConfirmButtons = () => {
      const confirmButtons = document.querySelectorAll('.nn-confirm');

      const confirmButtonCount = confirmButtons.length

      if (confirmButtonCount > 0) {
        confirmButtons.forEach(b => {
          b.addEventListener('click', showAlertWindow)
        })
      }
    }

    const showAlertWindow = (e) => {
      e.preventDefault()
      let text = ''
      if (!isGlobal) {
        nnType = e.target.getAttribute('class')
        text = e.target.getAttribute('data-notify-text')
      } else {
        text = nnGlobalText
      }
      typeof (alertWindow) === 'undefined' ? makeWindow(text): updateWindow(text)
      toggleType()
    }

    const treatAlert = (e) => {
      e.preventDefault()
      const response = e.target.getAttribute('data-response')
      NN.response = response === 'ok' ? true : false
      closeWindow()
    }

    const addButtonListeners = () => {
      const buttons = document.querySelectorAll(".nn-action-button")
      buttons.forEach(b => {
        b.addEventListener('click', treatAlert)
      })
    }

    const toggleType = () => {
      if (typeof (nnType) !== 'undefined') {
        if (nnType === 'nn-alert') {
          document.querySelector('.cancel').classList.add('nn-hide')
          document.querySelector('.nn-buttons').classList.add('nn-single')
        } else {
          document.querySelector('.cancel').classList.remove('nn-hide')
          document.querySelector('.nn-buttons').classList.remove('nn-single')
        }
      }
    }

    const closeWindow = () => {
      alertWindow.setAttribute('class', 'nn-hide')
    }

    const updateWindow = (text) => {
      let textContent = document.querySelector('#nn-alert-text')
      textContent.innerHTML = '<p>' + text + '</p>'
      alertWindow.classList.remove('nn-hide')
      animations.fadeIn(alertWindow, 1000)
    }

    const makeWindow = (text) => {
      alertWindow = document.createElement('div')
      alertWindow.setAttribute('id', 'nn-alert')

      const textContent = document.createElement('div')
      textContent.setAttribute('id', 'nn-alert-text')

      const buttonDiv = document.createElement('div')

      textContent.innerHTML = '<p>' + text + '</p>'

      buttonDiv.setAttribute('class', 'nn-buttons')

      buttonDiv.appendChild(NN.nnCancel)
      buttonDiv.appendChild(NN.nnOk)

      alertWindow.appendChild(textContent)
      alertWindow.appendChild(buttonDiv)

      nnContainer = document.getElementById('nn-container')
      animations.fadeIn(document.body.insertBefore(alertWindow, nnContainer), 1000)

      addButtonListeners()
    }

    NN.init = (options = {}) => {
      setUpDefaults()

      if (options.global) {
        isGlobal = true
        nnType = options.type
        nnContainer = document.querySelector('body')
        nnGlobalText = options.text
        window.addEventListener(options.event, showAlertWindow)
      } else {
        getAlertButtons()
        getConfirmButtons()
      }
    }

    NN.getResponse = () => {
      return NN.response
    }

    return NN

  } // notifyNonsense

  if (typeof (window.notifyNonsense) === 'undefined') {
    window.notifyNonsense = notifyNonsense()
  }

})(window)
