'use strict'
const authEvents = require('./auth/events.js')
const blogEvents = require('./blogs/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // THIS FUNCTION WILL FIND ALL BLOGS ON LOAD
  blogEvents.onGetBlogs()

  // auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.chpw-modal').on('submit', authEvents.onChangePassword)
  $('.signout-btn').on('click', authEvents.onSignOut)
  // blog
  $('#create-blog').on('submit', blogEvents.onCreateBlog)
  $('body').on('click', '.delete-blog', blogEvents.onDeleteBlog)
  $('.show-blog-btn').on('click', blogEvents.onGetUserBlogs)
  $('body').on('submit', '.update-blog', blogEvents.onUpdateBlog)
  $('.home-btn').on('click', blogEvents.onGetBlogs)

  // SET SIGNUP MODAL VARS
  const signupModal = $('#my-signup-modal')
  const signupModalBtn = $('#signup-modal-btn')
  const signupCloseBtn = $('.signup-close')
  $('.inner-modal').on('click', innerModalClick)

  function innerModalClick (event) {
    event.stopPropagation()
  }
  // HANDLE MODAL EVENTS
  signupModalBtn.on('click', openSignupModal)
  signupCloseBtn.on('click', closeSignupModal)
  // OPEN SIGNUP
  function openSignupModal () {
    $('.modal').hide()
    signupModal.show()
  }
  // CLOSE SIGNUP
  function closeSignupModal () {
    signupModal.hide()
  }

  // SET SIGNIN MODAL VARS
  const signinModal = $('#my-signin-modal')
  const signinModalBtn = $('#signin-modal-btn')
  const signinCloseBtn = $('.signin-close')
  // HANDLE MODAL EVENTS
  signinModalBtn.on('click', openSigninModal)
  signinCloseBtn.on('click', closeSigninModal)
  $('.modal').on('click', outsideModalClick)
  // OPEN SIGNIN
  function openSigninModal () {
    $('.modal').hide()
    signinModal.show()
  }
  // CLOSE SIGNIN
  function closeSigninModal () {
    signinModal.hide()
  }
  // CLOSE FORMS IF OUTSIDE CLICK
  function outsideModalClick () {
    $('.modal form').trigger('reset')
    $('.modal').hide()
  }

  // SET CHPW MODAL VARS
  const chpwModal = $('#my-chpw-modal')
  const chpwModalBtn = $('#chpw-modal-btn')
  const chpwCloseBtn = $('.chpw-close')
  // HANDLE MODAL EVENTS
  chpwModalBtn.on('click', openChpwModal)
  chpwCloseBtn.on('click', closeChpwModal)
  // OPEN CHPW
  function openChpwModal () {
    $('.modal').hide()
    chpwModal.show()
  }
  // CLOSE CHPW
  function closeChpwModal () {
    chpwModal.hide()
  }

  // SET Create Blog MODAL VARS
  const createBlogModal = $('#my-create-blog-modal')
  const createBlogModalBtn = $('#create-blog-modal-btn')
  const createBlogCloseBtn = $('.create-blog-close')
  // HANDLE MODAL EVENTS
  createBlogModalBtn.on('click', openCreateBlogModal)
  createBlogCloseBtn.on('click', closeCreateBlogModal)
  // OPEN CREATE BLOG
  function openCreateBlogModal () {
    $('.modal').hide()
    createBlogModal.show()
  }
  // CLOSE CREATE BLOG
  function closeCreateBlogModal () {
    createBlogModal.hide()
  }

  // HANDLE UPDATE MODAL EVENTS
  $('body').on('click', '.update-blog-btn', openUpdateBlogModal)
  $('body').on('click', '.update-blog-close', closeUpdateBlogModal)
  // OPEN CREATE BLOG
  function openUpdateBlogModal (event) {
    $(event.target).parents('.blog').find('.update-blog-modal').css('display', 'block')
  }
  // CLOSE CREATE BLOG
  function closeUpdateBlogModal () {
    $('.update-blog-modal').css('display', 'none')
  }
})
