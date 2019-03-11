'use strict'

const store = require('../store')

// authentication user interface
const removeMessageClass = () => {
  $('#log-user-message').removeClass('text-success text-danger')
  $('#load-resource-message').removeClass('text-success text-danger')
  $('#song-table').removeClass('text-success text-danger')
}
const onSignUpSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('Congradulations! Sign Up Success')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignUpFailure = () => {
  $('#log-user-message').addClass('text-danger').text('Username or Password taken, try again.')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignInSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('Sign In Success! Share some toons!')
  store.user = responseData.user
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('.sign-up-container').hide()
  $('.sign-out-container').fadeIn(1500)
  $('.create-song-container').fadeIn(1500)
}
const onSignInFailure = () => {
  $('#log-user-message').addClass('text-danger').text('Unknown username or password')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onSignOutSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('Sign Out Success')
  store.user = null
  $('.sign-up-container').show()
  $('.sign-out-container').hide()
  $('.create-song-container').hide()
  $('#song-table').hide()
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('.create-genre-container').hide()
}
const onSignOutFailure = (responseData) => {
  $('#log-user-message').addClass('text-danger').text('You failed to sign out')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onChangePasswordSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('Hoorah! Password Changed!')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onChangePasswordFailure = (responseData) => {
  $('#log-user-message').addClass('text-danger').text('Failed to Change Password')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
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
