const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateBlog = event => {
  event.preventDefault()
  const createBlogForm = event.target
  const formData = getFormFields(createBlogForm)

  api.createBlog(formData)
    .then(ui.onCreateBlogSuccess)
    .catch(ui.onCreateBlogFailure)

  $('form').trigger('reset')
}
const onGetBlogs = event => {
  event.preventDefault()
  const getBlogsForm = event.target
  const formData = getFormFields(getBlogsForm)
  api.getBlogs(formData)
    .then(ui.onGetBlogsSuccess)
    .catch(ui.onGetBlogsFailure)

  $('form').trigger('reset')
}
const onDeleteBlog = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.deleteBlog(formData)
    .then(ui.onDeleteBlogSuccess)
    .catch(ui.onDeleteBlogFailure)

  $('form').trigger('reset')
}
const onUpdateBlog = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.updateBlog(formData)
    .then(ui.onUpdateBlogSuccess)
    .catch(ui.onUpdateBlogFailure)

  $('form').trigger('reset')
}

module.exports = {
  onCreateBlog,
  onGetBlogs,
  onDeleteBlog,
  onUpdateBlog
}
