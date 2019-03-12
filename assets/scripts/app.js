'use strict'
const authEvents = require('./auth/events.js')
const blogEvents = require('./blogs/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.signout-btn').on('click', authEvents.onSignOut)
  // blog
  $('#create-blog').on('submit', blogEvents.onCreateBlog)
  $('#delete-blog').on('submit', blogEvents.onDeleteBlog)
  $('#all-blogs').on('click', blogEvents.onGetBlogs)
  $('#update-blog').on('submit', blogEvents.onUpdateBlog)

  // SET CHPW MODAL VARS
  const chpwModal = document.querySelector('#my-chpw-modal')
  const chpwModalBtn = document.querySelector('#chpw-modal-btn')
  const chpwCloseBtn = document.querySelector('.chpw-close')
  // HANDLE MODAL EVENTS
  chpwModalBtn.addEventListener('click', openChpwModal)
  chpwCloseBtn.addEventListener('click', closeChpwModal)
  window.addEventListener('click', outsideChpwClick)
  // OPEN CHPW
  function openChpwModal () {
    chpwModal.style.display = 'block'
  }
  // CLOSE CHPW
  function closeChpwModal () {
    chpwModal.style.display = 'none'
  }
  // CLOSE CHPW IF OUTSIDE CLICK
  function outsideChpwClick (i) {
    if (i.target === chpwModal) {
      chpwModal.style.display = 'none'
    }
  }

  // SET SIGNUP MODAL VARS
  const signupModal = document.querySelector('#my-signup-modal')
  const signupModalBtn = document.querySelector('#signup-modal-btn')
  const signupCloseBtn = document.querySelector('.signup-close')
  // HANDLE MODAL EVENTS
  signupModalBtn.addEventListener('click', openSignupModal)
  signupCloseBtn.addEventListener('click', closeSignupModal)
  window.addEventListener('click', outsideSignupClick)
  // OPEN SIGNUP
  function openSignupModal () {
    signupModal.style.display = 'block'
  }
  // CLOSE SIGNUP
  function closeSignupModal () {
    signupModal.style.display = 'none'
  }
  // CLOSE SIGNUP IF OUTSIDE CLICK
  function outsideSignupClick (i) {
    if (i.target === signupModal) {
      signupModal.style.display = 'none'
    }
  }

  // SET SIGNIN MODAL VARS
  const signinModal = document.querySelector('#my-signin-modal')
  const signinModalBtn = document.querySelector('#signin-modal-btn')
  const signinCloseBtn = document.querySelector('.signin-close')
  // HANDLE MODAL EVENTS
  signinModalBtn.addEventListener('click', openSigninModal)
  signinCloseBtn.addEventListener('click', closeSigninModal)
  window.addEventListener('click', outsideSigninClick)
  // OPEN SIGNUP
  function openSigninModal () {
    signinModal.style.display = 'block'
  }
  // CLOSE SIGNUP
  function closeSigninModal () {
    signinModal.style.display = 'none'
  }
  // CLOSE SIGNUP IF OUTSIDE CLICK
  function outsideSigninClick (i) {
    if (i.target === signinModal) {
      signinModal.style.display = 'none'
    }
  }
})
