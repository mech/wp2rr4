const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'auth/login':
      return payload
    case 'auth/logout':
      return {}
    default:
      return state
  }
}

export { authReducer }
