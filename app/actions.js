const addLeave = (content = '') => ({
  type: 'trey/addLeave',
  payload: { content },
})

const updateLeave = (content = '') => ({
  type: 'trey/updateLeave',
  payload: { content },
})

const removeLeave = id => ({
  type: 'trey/removeLeave',
  payload: { id },
})

export { addLeave, updateLeave, removeLeave }
