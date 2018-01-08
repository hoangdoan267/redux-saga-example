export const getData = async () => {
  return fetch('https://facebook.github.io/react-native/movies.json').then(
    res => res.json()
  )
}
