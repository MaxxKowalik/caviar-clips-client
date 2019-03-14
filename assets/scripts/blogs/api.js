'use strict'
const config = require('../config')
const store = require('../store')

const createBlog = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const getBlogs = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/blogs/',
    method: 'GET'
  })
}
const getUserBlogs = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/blogs?user-owned=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deleteBlog = (blogId, formData) => {
  return $.ajax({
    url: config.apiUrl + '/blogs/' + blogId,
    formData,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const updateBlog = (formData, blogId) => {
  return $.ajax({
    url: config.apiUrl + '/blogs/' + blogId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
// const updateBlog = (data) => {
//   return $.ajax({
//     url: config.apiUrl + '/blogs/' + store.user.blog.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

module.exports = {
  createBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
  getUserBlogs
}
