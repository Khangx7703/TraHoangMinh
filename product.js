let cartCount = 0;

function addToCart() {
    cartCount++;
    updateCartBadge();
}

function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    if (cartCount > 0) {
        cartBadge.textContent = cartCount;
        cartBadge.classList.remove('hidden');
    } else {
        cartBadge.classList.add('hidden');
    }
}

const addToCartButtons = document.querySelectorAll('.cart-btn');
addToCartButtons.forEach((btn) => {
    btn.addEventListener('click', addToCart);
});

function toggleCart(button) {
    const targetId = button.getAttribute('data-target');
    const targetCart = document.getElementById(targetId);

    const allCarts = document.querySelectorAll('.cart-container');
    allCarts.forEach(cart => {
        if (cart.id !== targetId) {
            cart.classList.remove('visible');
            setTimeout(() => cart.classList.add('hidden'), 500);
        }
    });

    if (targetCart.classList.contains('visible')) {
        targetCart.classList.remove('visible');
        setTimeout(() => targetCart.classList.add('hidden'), 500);
    } else {
        targetCart.classList.remove('hidden');
        setTimeout(() => targetCart.classList.add('visible'), 10);
    }
}

const cartModal = document.getElementById('accounting');
const cartButton = document.getElementById('cart-btn');
const closeModalButton = document.getElementById('close-modal-btn');

cartButton.addEventListener('click', () => {
    // Hiển thị modal
    cartModal.classList.remove('hidden');
});
// Đóng modal
closeModalButton.addEventListener('click', () => {
    cartModal.classList.add('hidden');
});

// Nút Thanh toán
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Cảm ơn bạn! Đang xử lý đơn hàng...');
    cartModal.classList.add('hidden'); // Ẩn modal sau khi thanh toán
});