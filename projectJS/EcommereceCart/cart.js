document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Butter", price: 500.50 },
        { id: 2, name: "Banana", price: 70.00 },
        { id: 3, name: "Milk", price: 33.50 },
        { id: 4, name: "Protein", price: 750.999 },
    ];

    const productList = document.getElementById("product-list");
    const cartItem = document.getElementById("cart-item");
    const emptyCart = document.getElementById("empty-cart");
    const cardTotal = document.getElementById("total-cart");
    const totalPrice = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("CheckOut-btn");

    // Render product list
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <span>${product.name} : ₹${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    const cart = [];

    // Add to cart
    productList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });

    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        renderCart();
    }

    function renderCart() {
        cartItem.innerHTML = "";
        let totalPri = 0;

        if (cart.length > 0) {
            emptyCart.classList.add("hidden");
            cardTotal.classList.remove("hidden");

            cart.forEach((item, index) => {
                totalPri += item.price * item.quantity;

                const cartDiv = document.createElement('div');
                cartDiv.classList.add('product');
                cartDiv.innerHTML = `
                    <span>${item.name} : ₹${item.price.toFixed(2)}   | Quqntity: ${item.quantity} | </span>
                    <button data-index="${index}">Remove</button>
                `;
                cartItem.appendChild(cartDiv);
            });

            totalPrice.textContent = `₹${totalPri.toFixed(2)}`;
        } else {
            emptyCart.classList.remove("hidden");
            totalPrice.textContent = `₹0.00`;
        }
    }

    // Remove item from cart
    cartItem.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const index = parseInt(e.target.getAttribute("data-index"));
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1);
            }
            renderCart();
        }
    });

    // Checkout
    checkOutBtn.addEventListener("click", () => {
        cart.length = 0;
        alert("CheckOut Successfully!");
        renderCart();
    });
});