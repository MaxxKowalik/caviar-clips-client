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
  api.getBlogs()
    .then(ui.onGetBlogsSuccess)
    .catch(ui.onGetBlogsFailure)
}
const onGetUserBlogs = event => {
  event.preventDefault()
  const getBlogsForm = event.target
  const formData = getFormFields(getBlogsForm)
  api.getUserBlogs(formData)
    .then(ui.onGetUserBlogsSuccess)
    .catch(ui.onGetUserBlogsFailure)

  $('form').trigger('reset')
}
const onDeleteBlog = event => {
  event.preventDefault()
  const blogId = $(event.target).data('blog')
  api.deleteBlog(blogId)
    .then(ui.onDeleteBlogSuccess)
    .then(onGetUserBlogs)
    .catch(ui.onDeleteBlogFailure)

  $('form').trigger('reset')
}
// const onUpdateBlog = event => {
//   event.preventDefault()
//   const blogId = $(event.target).data('blog')
//   const formData = getFormFields(event.target)
//
//   api.updateBlog(blogId, formData)
//     .then(ui.onUpdateBlogSuccess)
//     .catch(ui.onUpdateBlogFailure)
//
//   $('form').trigger('reset')
// }
const onUpdateBlog = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const blogId = $(event.target).data('blog')
  console.log('blog id is', blogId)
  api.updateBlog(formData, blogId)
    .then(ui.onUpdateBlogSuccess)
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
