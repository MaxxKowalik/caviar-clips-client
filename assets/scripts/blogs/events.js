const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateBlog = event => {
  event.preventDefault()
  const createBlogForm = event.target
  const formData = getFormFields(createBlogForm)

  api.createBlog(formData)
    .then(() => api.getBlogs())
    .then(ui.onGetBlogsSuccess)
    .then(ui.onCreateBlogSuccess)
    .catch(ui.onCreateBlogFailure)

  $('form').trigger('reset')
}
const onGetBlogs = event => {
  api.getBlogs()
    .then(ui.onGetBlogsSuccess)
    .catch(ui.onGetBlogsFailure)
}
const onGetUserBlogs = event => {
  api.getUserBlogs()
    .then(ui.onGetUserBlogsSuccess)
    .catch(ui.onGetUserBlogsFailure)

  $('form').trigger('reset')
}
const onDeleteBlog = event => {
  event.preventDefault()
  const blogId = $(event.target).data('blog')
  api.deleteBlog(blogId)
    .then(() => api.getBlogs())
    .then(ui.onDeleteBlogSuccess)
    // .then(onGetBlogs)
    .catch(ui.onDeleteBlogFailure)

  $('form').trigger('reset')
}
const onUpdateBlog = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const blogId = $(event.target).data('blog')
  api.updateBlog(formData, blogId)
    .then(ui.onUpdateBlogSuccess)
    .then(onGetUserBlogs)
    .catch(ui.onUpdateBlogFailure)

  $('form').trigger('reset')
}

module.exports = {
  onCreateBlog,
  onGetBlogs,
  onDeleteBlog,
  onUpdateBlog,
  onGetUserBlogs
}
