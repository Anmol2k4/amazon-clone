// Function to update cart and wishlist counts
function updateCounts() {
    const cartCount = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
    const wishlistCount = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')).length : 0;

    document.querySelector('.cart-count').textContent = cartCount;
    document.querySelector('.wishlist-count').textContent = wishlistCount;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const itemCard = button.closest('.item-card');
        const itemId = itemCard.getAttribute('data-id');
        const itemName = itemCard.querySelector('h2').textContent;
        const itemPrice = itemCard.querySelector('.price').textContent;

        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cart.push({ id: itemId, name: itemName, price: itemPrice });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCounts();
    });
});

// Add to Wishlist functionality
document.querySelectorAll('.add-to-wishlist').forEach(button => {
    button.addEventListener('click', () => {
        const itemCard = button.closest('.item-card');
        const itemId = itemCard.getAttribute('data-id');
        const itemName = itemCard.querySelector('h2').textContent;

        let wishlist = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];
        wishlist.push({ id: itemId, name: itemName });
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateCounts();
    });
});

// Initial count update
updateCounts();