'use strict'
const authEvents = require('./auth/events.js')
const blogEvents = require('./blogs/events.js')
// const getFormFields = require('../../lib/get-form-fields')
// const ui = require('./blogs/ui.js')
// const api = require('./blogs/api.js')

// const showBlogsTemplate = require('./templates/blog-listing.handlebars')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // THIS FUNCTION WILL FIND ALL BLOGS ON LOAD
  // const onGetBlogs = event => {
  //   event.preventDefault()
  //   const getBlogsForm = event.target
  //   const formData = getFormFields(getBlogsForm)
  //   api.getBlogs(formData)
  //     .then(ui.onGetBlogsSuccess)
  //     .catch(ui.onGetBlogsFailure)
  //
  //   $('form').trigger('reset')
  // }
  // onGetBlogs(event)
  // const showBlogsHtml = showBlogsTemplate()
  // const loadBlog = (event) => blogEvents.onGetBlogs(event)
  blogEvents.onGetBlogs()
  // $('.content-card').ready(blogEvents.onGetBlogs)
  // $('body').ready('.card', blogEvents.onGetBlogs)
  // $('#blog-table').html(showBlogsHtml).ready(blogEvents.onGetBlogs)
  // $('.content-card').on('load', blogEvents.onGetBlogs)

  // auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.signout-btn').on('click', authEvents.onSignOut)
  // blog
  $('#create-blog').on('submit', blogEvents.onCreateBlog)
  $('#delete-blog').on('submit', blogEvents.onDeleteBlog)
  $('.show-blog-btn').on('click', blogEvents.onGetUserBlogs)
  $('#update-blog').on('submit', blogEvents.onUpdateBlog)

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
  // OPEN SIGNIN
  function openSigninModal () {
    signinModal.style.display = 'block'
  }
  // CLOSE SIGNIN
  function closeSigninModal () {
    signinModal.style.display = 'none'
  }
  // CLOSE SIGNIN IF OUTSIDE CLICK
  function outsideSigninClick (i) {
    if (i.target === signinModal) {
      signinModal.style.display = 'none'
    }
  }

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
  // SET Create Blog MODAL VARS
  const createBlogModal = document.querySelector('#my-create-blog-modal')
  const createBlogModalBtn = document.querySelector('#create-blog-modal-btn')
  const createBlogCloseBtn = document.querySelector('.create-blog-close')
  // HANDLE MODAL EVENTS
  createBlogModalBtn.addEventListener('click', openCreateBlogModal)
  createBlogCloseBtn.addEventListener('click', closeCreateBlogModal)
  window.addEventListener('click', outsideCreateBlogClick)
  // OPEN CREATE BLOG
  function openCreateBlogModal () {
    createBlogModal.style.display = 'block'
  }
  // CLOSE CREATE BLOG
  function closeCreateBlogModal () {
    createBlogModal.style.display = 'none'
  }
  // CLOSE CREATE BLOG IF OUTSIDE CLICK
  function outsideCreateBlogClick (i) {
    if (i.target === createBlogModal) {
      createBlogModal.style.display = 'none'
    }
  }
  // THIS FUNCTION WILL SHOW JUST THE USERS BLOGS
  $('body').on('click', '.show-blog-btn', () => {
    $('.show-blog-btn').on('click', (event) => {
      const userId = $(event.target).data('user')
      authEvents.onGetBlogs(userId)
    })
  })
})
