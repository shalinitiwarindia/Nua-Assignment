export async function fetchProduct() {
  const response = await fetch('https://fakestoreapi.com/products/1')

  if (!response.ok) {
    throw new Error('Failed to fetch product')
  }

  return response.json()
}