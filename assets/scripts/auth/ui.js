'use strict'

const store = require('../store')

// authentication user interface
const removeMessageClass = () => {
  $('#user-message').removeClass('text-success text-danger')
  $('#load-resource-message').removeClass('text-success text-danger')
  $('#song-table').removeClass('text-success text-danger')
}
const onSignUpSuccess = (responseData) => {
  $('#user-message').addClass('text-success').text('Congradulations! Sign Up Success')
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('.signup-modal').hide()
}
const onSignUpFailure = () => {
  $('#user-message').addClass('text-danger').text('Username or Password taken, try again.')
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignInSuccess = (responseData) => {
  $('#user-message').addClass('text-success').text('Sign In Success! Share some toons!')
  store.user = responseData.user
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('.signin-modal').hide()
  $('.signup-btn').hide()
  $('.signin-btn').hide()
  $('.chpw-btn').fadeIn(1500)
  $('.signout-btn').fadeIn(1500)
}
const onSignInFailure = () => {
  $('#user-message').addClass('text-danger').text('Unknown username or password')
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignOutSuccess = (responseData) => {
  $('#user-message').addClass('text-success').text('Sign Out Success')
  store.user = null
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('.chpw-btn').hide()
  $('.signout-btn').hide()
  $('.signup-btn').fadeIn(1500)
  $('.signin-btn').fadeIn(1500)
}
const onSignOutFailure = (responseData) => {
  $('#user-message').addClass('text-danger').text('You failed to sign out')
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onChangePasswordSuccess = (responseData) => {
  $('#user-message').addClass('text-success').text('Hoorah! Password Changed!')
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onChangePasswordFailure = (responseData) => {
  $('#user-message').addClass('text-danger').text('Failed to Change Password')
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
