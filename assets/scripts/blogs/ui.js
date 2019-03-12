'use strict'
const showBlogsTemplate = require('../templates/blog-listing.handlebars')

const removeMessageClass = () => {
  $('#log-user-message').removeClass('text-success text-danger')
  $('#load-resource-message').removeClass('text-success text-danger')
  $('#blog-table').removeClass('text-success text-danger')
}
const onCreateBlogSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('You Created a Blog!')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  // $('#blog-table').hide()
}
const onCreateBlogFailure = (responseData) => {
  $('#log-user-message').addClass('text-danger').text('Create Blog Failure')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onDeleteBlogSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('Blog Deleted')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  // $('#blog-table').hide()
}
const onDeleteBlogFailure = (responseData) => {
  $('#log-user-message').addClass('text-danger').text('Blog was not deleted')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onGetBlogsSuccess = (responseData) => {
  const showBlogsHtml = showBlogsTemplate({ blogs: responseData.blogs })
  if (responseData.blogs.length === 0) {
    $('#log-user-message').addClass('text-danger').text('No Blogs')
    $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  } else {
    $('#log-user-message').addClass('text-success').text('All Blogs Located!')
    $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
    $('#blog-table').html(showBlogsHtml).fadeIn(3000)
  }
}
const onUpdateBlogSuccess = (responseData) => {
  $('#log-user-message').addClass('text-success').text('Blog Rating Updated')
  $('#log-user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('#blogs-table').hide()
}
const onUpdateBlogFailure = (responseData) => {
  $('#load-resource-message').addClass('text-danger').text('Blog was not updated')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}

module.exports = {
  onCreateBlogSuccess,
  onCreateBlogFailure,
  onGetBlogsSuccess,
  onDeleteBlogSuccess,
  onDeleteBlogFailure,
  onUpdateBlogSuccess,
  onUpdateBlogFailure
}
