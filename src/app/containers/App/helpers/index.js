// store token in localStorage
export const rememberMe = (token, callback = () => undefined) => {
  if (!token) return
  localStorage.setItem("token", token)
  return callback
}
