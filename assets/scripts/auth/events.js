const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const blogEvents = require('../blogs/events.js')

// authentication events
const onSignUp = event => {
  event.preventDefault()
  const signUpForm = event.target
  const formData = getFormFields(signUpForm)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)

  $('form').trigger('reset')
}
const onSignIn = event => {
  event.preventDefault()
  const signInForm = event.target
  const formData = getFormFields(signInForm)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)

  $('form').trigger('reset')
}
const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(blogEvents.onGetBlogs)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)

  $('form').trigger('reset')
}
const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)

  $('form').trigger('reset')
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
