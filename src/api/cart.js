export function addToCartApi(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(item)
    }, 1000)
  })
}