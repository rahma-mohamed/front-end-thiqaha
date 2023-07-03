// Sample data for favorite products
const favoriteProducts = [
    {
      name: 'Product 1',
      price: 10.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 2',
      price: 19.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 3',
      price: 7.99,
      image: 'https://via.placeholder.com/150'
    }
  ];
  
  // Function to generate favorite product list
  function generateFavoriteProductList() {
    const favoriteProductsList = document.querySelector('.favorite-products');
    favoriteProductsList.innerHTML = '';
  
    for (let i = 0; i < favoriteProducts.length; i++) {
      const favoriteProduct = favoriteProducts[i];
  
      const favoriteProductElement = document.createElement('li');
  
      const