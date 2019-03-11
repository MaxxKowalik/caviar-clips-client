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
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deleteBlog = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/blogs/' + formData.blog.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const updateBlog = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/blogs/' + formData.blog.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createBlog,
  getBlogs,
  deleteBlog,
  updateBlog
}
