// Sample data for products
const products = [
    {
      name: 'Product 1',
      price: 10.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 2',
      price: 19.99,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 3',
      price: 7.99,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 4',
      price: 14.99,
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 5',price: 12.99,
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://via.placeholder.com/150'
    }
  ];
  
  // Sample data for categories
  const categories = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5'
  ];
  
  // Sample data for featured products
  const featuredProducts = [
    {
      name: 'Featured Product 1',
      price: 24.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Featured Product 2',
      price: 29.99,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Featured Product 3',
      price: 19.99,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Featured Product 4',
      price: 34.99,
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://via.placeholder.com/150'
    }
  ];
  
  // Function to generate product cards
  function generateProductCards() {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      productCard.appendChild(productImage);
  
      const productName = document.createElement('h3');
      productName.textContent = product.name;
      productCard.appendChild(productName);
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price.toFixed(2)}`;
      productCard.appendChild(productPrice);
  
      const productDescription = document.createElement('p');
      productDescription.textContent = product.description;
      productCard.appendChild(productDescription);
  
      productsContainer.appendChild(productCard);
    }
  }
  
  // Function to generate category links
  function generateCategoryLinks() {
    const categoriesContainer = document.querySelector('.categories ul');
    categoriesContainer.innerHTML = '';
  
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
  
      const categoryLink = document.createElement('a');
      categoryLink.href = '#';
      categoryLink.textContent = category;
  
      const categoryItem = document.createElement('li');
      categoryItem.appendChild(categoryLink);
  
      categoriesContainer.appendChild(categoryItem);
    }
  }
  
  // Function to generate featured product cards
  function generateFeaturedProductCards() {
    const featuredProductsContainer = document.querySelector('.featured-products-list');
    featuredProductsContainer.innerHTML = '';
  
    for (let i = 0; i < featuredProducts.length; i++) {
      const featuredProduct = featuredProducts[i];
  
      const featuredProductCard = document.createElement('div');
      featuredProductCard.classList.add('featured-product-card');
  
      const featuredProductImage = document.createElement('img');
      featuredProductImage.src = featuredProduct.image;
      featuredProductImage.alt = featuredProduct.name;
      featuredProductCard.appendChild(featuredProductImage);
  
      const featuredProductName = document.createElement('h3');
      featuredProductName.textContent = featuredProduct.name;
      featuredProductCard.appendChild(featuredProductName);
  
      const featuredProductPrice = document.createElement('p');
      featuredProductPrice.textContent = `$${featuredProduct.price.toFixed(2)}`;
      featuredProductCard.appendChild(featuredProductPrice);
  
      const featuredProductDescription = document.createElement('p');
      featuredProductDescription.textContent = featuredProduct.description;
      featuredProductCard.appendChild(featuredProductDescription);
  
      featuredProductsContainer.appendChild(featuredProductCard);
    }
  }
  
  // Call the functions to generate the initial content
  generateProductCards();
  generateCategoryLinks();
  generateFeaturedProductCards();

/*
This code generates product cards, category links, and featured product cards using the sample data provided. You can modify the data and styling to fit your needs
*/  


// Function to generate pagination links
function generatePaginationLinks() {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';
  
    const totalPages = Math.ceil(products.length / 9);
  
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement('a');
      pageLink.href = '#';
      pageLink.textContent = i;
  
      const pageItem = document.createElement('div');
      pageItem.appendChild(pageLink);
  
      paginationContainer.appendChild(pageItem);
    }
  }
  
  // Call the function to generate pagination links
  generatePaginationLinks();

/*
This code generates pagination links based on the number of products and the assumption that there will be 9 products per page. You can modify the number of products per page by changing the value in the 
Math.ceil(products.length / 9)
 expression
 */

// Function to filter products by category
function filterProductsByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    return filteredProducts;
  }
  
  // Function to handle category link clicks
  function handleCategoryLinkClick(event) {
    event.preventDefault();
  
    const category = event.target.textContent;
    const filteredProducts = filterProductsByCategory(category);
  
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';
  
    for (let i = 0; i < filteredProducts.length; i++) {
      const product = filteredProducts[i];
  
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      productCard.appendChild(productImage);
  
      const productName = document.createElement('h3');
      productName.textContent = product.name;
      productCard.appendChild(productName);
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price.toFixed(2)}`;
      productCard.appendChild(productPrice);
  
      const productDescription = document.createElement('p');
      productDescription.textContent = product.description;
      productCard.appendChild(productDescription);
  
      productsContainer.appendChild(productCard);
    }
  }
  
  // Add event listeners to category links
  const categoryLinks = document.querySelectorAll('.categories a');
  for (let i = 0; i < categoryLinks.length; i++) {
    const categoryLink = categoryLinks[i];
    categoryLink.addEventListener('click', handleCategoryLinkClick);
  }
  
/*
This code adds functionality to filter products by category when a category link is clicked. It also adds event listeners to the category links to trigger the filtering. Note that this code assumes that each product has a 
category
 property that matches one of the categories in the 
categories
 array. You can modify this code to fit your specific data structure and requirements
*/  

// Function to handle pagination link clicks
function handlePaginationLinkClick(event) {
    event.preventDefault();
  
    const page = parseInt(event.target.textContent);
    const startIndex = (page - 1) * 9;
    const endIndex = startIndex + 9;
    const productsToShow = products.slice(startIndex, endIndex);
  
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';
  
    for (let i = 0; i < productsToShow.length; i++) {
      const product = productsToShow[i];
  
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      productCard.appendChild(productImage);
  
      const productName = document.createElement('h3');
      productName.textContent = product.name;
      productCard.appendChild(productName);
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price.toFixed(2)}`;
      productCard.appendChild(productPrice);
  
      const productDescription = document.createElement('p');
      productDescription.textContent = product.description;
      productCard.appendChild(productDescription);
  
      productsContainer.appendChild(productCard);
    }
  }
  
  // Add event listeners to pagination links
  const paginationLinks = document.querySelectorAll('.pagination a');
  for (let i = 0; i < paginationLinks.length; i++) {
    const paginationLink = paginationLinks[i];
    paginationLink.addEventListener('click', handlePaginationLinkClick);
  }


/*
This code adds functionality to paginate the products when a pagination link is clicked. It also adds event listeners to the pagination links to trigger the pagination. Note that this code assumes that there will be 9 products per page. You can modify this code to fit your specific requirements
*/  