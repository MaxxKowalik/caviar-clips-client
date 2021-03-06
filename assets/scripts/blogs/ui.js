'use strict'
const showBlogsTemplate = require('../templates/blog-listing.handlebars')
const showUserBlogsTemplate = require('../templates/user-blog-listing.handlebars')

const removeMessageClass = () => {
  $('#user-message').removeClass('text-success text-danger')
}
const onCreateBlogSuccess = () => {
  $('#user-message').addClass('text-success').text('You Created a Blog!')
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('.create-blog-modal').hide()
}
const onCreateBlogFailure = (responseData) => {
  $('#user-message').addClass('text-danger').text('Create Blog Failure')
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
const onDeleteBlogSuccess = (responseData) => {
  $('#user-message').addClass('text-success').text('Blog Deleted')
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('.blog').hide()
  // $('#blog-table').hide()
}
const onDeleteBlogFailure = (responseData) => {
  $('#user-message').addClass('text-danger').text('Blog was not deleted')
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}
// THIS FUNCTION WILL GET ALL THE BLOGS
const onGetBlogsSuccess = (responseData) => {
  const showBlogsHtml = showBlogsTemplate({ blogs: responseData.blogs })
  if (responseData.blogs.length === 0) {
    $('#user-message').addClass('text-danger').text('No Blogs')
    $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  } else {
    $('#blog-table').html(showBlogsHtml).fadeIn(3000)
    $('#user-message').stop(onGetUserBlogsSuccess)
  }
}
// THIS FUNCTION WILL GET JUST THE USER BLOGS
const onGetUserBlogsSuccess = (responseData) => {
  const showUserBlogsHtml = showUserBlogsTemplate({ blogs: responseData.blogs })
  if (responseData.blogs.length === 0) {
    $('#user-message').addClass('text-danger').text('No Blogs')
    $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  } else {
    $('#blog-table').html(showUserBlogsHtml).fadeIn(3000)
  }
}

const onUpdateBlogSuccess = (responseData) => {
  $('#user-message').addClass('text-success').text('Blog Edited!')
  $('#user-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
  $('.modal').hide()
}
const onUpdateBlogFailure = (responseData) => {
  $('#load-resource-message').addClass('text-danger').text('Blog was not updated')
  $('#load-resource-message').fadeIn(1500).delay(1700).fadeOut(1000, removeMessageClass)
}

module.exports = {
  onCreateBlogSuccess,
  onCreateBlogFailure,
  onGetBlogsSuccess,
  onGetUserBlogsSuccess,
  onDeleteBlogSuccess,
  onDeleteBlogFailure,
  onUpdateBlogSuccess,
  onUpdateBlogFailure
}
