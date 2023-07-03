// Sample data for order items
const orderItems = [
    {
      name: 'Product 1',
      price: 10.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 2',
      price: 19.99,
      quantity: 2,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 3',
      price: 7.99,
      quantity: 3,
      image: 'https://via.placeholder.com/150'
    }
  ];
  
  // Function to generate order item list
  function generateOrderItemList() {
    const orderList = document.querySelector('.order-list');
    orderList.innerHTML = '';
  
    for (let i = 0; i < orderItems.length; i++) {
      const orderItem = orderItems[i];
  
      const orderItemElement = document.createElement('li');
      orderItemElement.classList.add('order-item');
  
      const orderItemImage = document.createElement('img');
      orderItemImage.src = orderItem.image;
      orderItemImage.alt = orderItem.name;
      orderItemElement.appendChild(orderItemImage);
  
      const orderItemDetails = document.createElement('div');
      orderItemDetails.classList.add('order-item-details');
  
      const orderItemName = document.createElement('h3');
      orderItemName.textContent = orderItem.name;
      orderItemDetails.appendChild(orderItemName);
  
      const orderItemPrice = document.createElement('p');
      orderItemPrice.textContent = `$${orderItem.price.toFixed(2)}`;
      orderItemDetails.appendChild(orderItemPrice);

    const orderItemQuantity = document.createElement('p');
    orderItemQuantity.textContent = `Quantity: ${orderItem.quantity}`;
    orderItemDetails.appendChild(orderItemQuantity);

    orderItemElement.appendChild(orderItemDetails);

    orderList.appendChild(orderItemElement);
  }
}

// Call the function to generate the order item list
generateOrderItemList();