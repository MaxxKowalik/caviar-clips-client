'use strict'
const authEvents = require('./auth/events.js')
const blogEvents = require('./blogs/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-blog').on('submit', blogEvents.onCreateBlog)
  $('#delete-blog').on('submit', authEvents.onDeleteBlog)
  $('#all-blogs').on('click', authEvents.onGetBlogs)
  $('#update-blog').on('submit', authEvents.onUpdateBlog)
})
