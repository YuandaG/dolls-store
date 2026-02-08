// ========================================
// 产品数据
// ========================================
const products = [
    {
        id: 'p001',
        name: '小熊抱枕 - 奶油色',
        category: 'pillow',
        categoryLabel: '抱枕',
        price: 199,
        image: 'https://images.unsplash.com/photo-1543169866-6117669b76a4?w=400&h=400&fit=crop',
        badge: '热销',
        featured: true,
        description: '温暖的奶油色小熊抱枕，采用优质短绒面料制作，手感柔软舒适。适合放在沙发、床头，是温馨家居的好伴侣。',
        details: {
            size: '35cm x 25cm',
            material: '短绒面料、PP棉',
            handmade: '100% 手工制作',
            productionTime: '3-5个工作日'
        },
        stock: 15
    },
    {
        id: 'p002',
        name: '兔子玩偶 - 粉色',
        category: 'doll',
        categoryLabel: '玩偶',
        price: 169,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
        badge: '新品',
        featured: true,
        description: '可爱的粉色兔子玩偶，长长的耳朵和萌萌的表情让人瞬间心动。采用亲肤面料制作，适合拥抱和陪伴。',
        details: {
            size: '40cm (含耳朵)',
            material: '水晶超柔、PP棉',
            handmade: '100% 手工制作',
            productionTime: '3-5个工作日'
        },
        stock: 20
    },
    {
        id: 'p003',
        name: '猫咪挂件 - 灰色',
        category: 'ornament',
        categoryLabel: '挂件',
        price: 59,
        image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop',
        badge: '',
        featured: true,
        description: '小巧可爱的猫咪挂件，可以挂在包包、钥匙扣上。每只猫咪都有独特的表情，是日常搭配的可爱点缀。',
        details: {
            size: '10cm x 8cm',
            material: '短绒面料、PP棉',
            handmade: '100% 手工制作',
            productionTime: '2-3个工作日'
        },
        stock: 30
    },
    {
        id: 'p004',
        name: '云朵抱枕 - 白色',
        category: 'pillow',
        categoryLabel: '抱枕',
        price: 179,
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop',
        badge: '热销',
        featured: false,
        description: '蓬松柔软的云朵抱枕，采用高弹面料和优质填充棉，抱起来像抱着一朵云。简约的设计适合各种家居风格。',
        details: {
            size: '45cm x 30cm',
            material: '高弹面料、公仔棉',
            handmade: '100% 手工制作',
            productionTime: '3-5个工作日'
        },
        stock: 12
    },
    {
        id: 'p005',
        name: '小恐龙玩偶 - 绿色',
        category: 'doll',
        categoryLabel: '玩偶',
        price: 189,
        image: 'https://images.unsplash.com/photo-1596464716127-f9a863727824?w=400&h=400&fit=crop',
        badge: '',
        featured: false,
        description: '呆萌的小恐龙玩偶，圆润的造型和鲜艳的绿色让人心情愉悦。适合作为礼物送给朋友或自己收藏。',
        details: {
            size: '35cm',
            material: '水晶超柔、PP棉',
            handmade: '100% 手工制作',
            productionTime: '3-5个工作日'
        },
        stock: 18
    },
    {
        id: 'p006',
        name: '星星挂件 - 金色',
        category: 'ornament',
        categoryLabel: '挂件',
        price: 49,
        image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&h=400&fit=crop',
        badge: '',
        featured: false,
        description: '闪亮的星星挂件，金色的面料在阳光下闪闪发光。小巧精致，是手机或包包的可爱装饰。',
        details: {
            size: '8cm x 8cm',
            material: '珠光面料、PP棉',
            handmade: '100% 手工制作',
            productionTime: '2-3个工作日'
        },
        stock: 25
    },
    {
        id: 'p007',
        name: '爱心抱枕 - 红色',
        category: 'pillow',
        categoryLabel: '抱枕',
        price: 159,
        image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop',
        badge: '特价',
        featured: false,
        description: '经典的爱心抱枕，红色代表爱与温暖。非常适合作为情人节礼物，送给心爱的人。',
        details: {
            size: '40cm x 35cm',
            material: '短绒面料、PP棉',
            handmade: '100% 手工制作',
            productionTime: '3-5个工作日'
        },
        stock: 10
    },
    {
        id: 'p008',
        name: '小猪玩偶 - 粉色',
        category: 'doll',
        categoryLabel: '玩偶',
        price: 175,
        image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c7?w=400&h=400&fit=crop',
        badge: '',
        featured: false,
        description: '粉粉嫩嫩的小猪玩偶，圆圆的鼻子和可爱的造型让人忍不住想捏一捏。柔软的触感带来满满的幸福感。',
        details: {
            size: '30cm',
            material: '水晶超柔、PP棉',
            handmade: '100% 手工制作',
            productionTime: '3-5个工作日'
        },
        stock: 22
    }
];

// ========================================
// 购物车数据
// ========================================
let cart = JSON.parse(localStorage.getItem('dollsCart')) || [];

// ========================================
// 工具函数
// ========================================

// 格式化价格
function formatPrice(price) {
    return `¥${price}`;
}

// 保存购物车到本地存储
function saveCart() {
    localStorage.setItem('dollsCart', JSON.stringify(cart));
    updateCartCount();
}

// 更新购物车数量显示
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// 添加到购物车
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    renderCart();

    // 显示添加成功提示
    showToast('已添加到购物车！');
}

// 从购物车移除
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

// 更新购物车商品数量
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCart();
    }
}

// 计算购物车总价
function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// 显示提示信息
function showToast(message) {
    // 创建 toast 元素
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // 3秒后移除
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ========================================
// 渲染函数
// ========================================

// 渲染产品卡片
function renderProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <p class="product-category">${product.categoryLabel}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <div class="product-actions">
                    <button class="btn btn-primary btn-add-cart" data-id="${product.id}">加入购物车</button>
                </div>
            </div>
        </div>
    `;
}

// 渲染购物车
function renderCart() {
    const cartItemsEl = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="cart-empty">购物车是空的</p>';
        cartTotalEl.textContent = formatPrice(0);
        return;
    }

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-price">${formatPrice(item.price)}</p>
                <div class="cart-item-quantity">
                    <button onclick="updateCartItemQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartItemQuantity('${item.id}', 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">移除</button>
            </div>
        </div>
    `).join('');

    cartTotalEl.textContent = formatPrice(calculateCartTotal());
}

// 显示产品详情
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const productDetail = document.getElementById('productDetail');

    productDetail.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <p class="product-detail-category">${product.categoryLabel}</p>
            <h2 class="product-detail-name">${product.name}</h2>
            <p class="product-detail-price">${formatPrice(product.price)}</p>
            <p class="product-detail-description">${product.description}</p>
            <div class="product-detail-meta">
                <div class="product-detail-meta-item">
                    <span class="product-detail-meta-label">尺寸</span>
                    <span>${product.details.size}</span>
                </div>
                <div class="product-detail-meta-item">
                    <span class="product-detail-meta-label">材质</span>
                    <span>${product.details.material}</span>
                </div>
                <div class="product-detail-meta-item">
                    <span class="product-detail-meta-label">制作</span>
                    <span>${product.details.handmade}</span>
                </div>
                <div class="product-detail-meta-item">
                    <span class="product-detail-meta-label">制作周期</span>
                    <span>${product.details.productionTime}</span>
                </div>
                <div class="product-detail-meta-item">
                    <span class="product-detail-meta-label">库存</span>
                    <span>${product.stock > 0 ? product.stock + ' 件' : '暂时缺货'}</span>
                </div>
            </div>
            <div class="product-quantity">
                <span>数量：</span>
                <div class="quantity-selector">
                    <button id="detailDecrease">-</button>
                    <span id="detailQuantity">1</span>
                    <button id="detailIncrease">+</button>
                </div>
            </div>
            <button class="btn btn-primary btn-block" id="detailAddCart">加入购物车</button>
        </div>
    `;

    modal.classList.add('open');

    // 绑定数量选择器事件
    let quantity = 1;
    const quantityEl = document.getElementById('detailQuantity');
    const decreaseBtn = document.getElementById('detailDecrease');
    const increaseBtn = document.getElementById('detailIncrease');
    const addCartBtn = document.getElementById('detailAddCart');

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityEl.textContent = quantity;
        }
    });

    increaseBtn.addEventListener('click', () => {
        if (quantity < product.stock) {
            quantity++;
            quantityEl.textContent = quantity;
        }
    });

    addCartBtn.addEventListener('click', () => {
        addToCart(product.id, quantity);
        modal.classList.remove('open');
    });
}

// 初始化页面
function init() {
    // 渲染精选产品
    const featuredProducts = products.filter(p => p.featured);
    document.getElementById('featuredProducts').innerHTML = featuredProducts.map(renderProductCard).join('');

    // 渲染所有产品
    document.getElementById('allProducts').innerHTML = products.map(renderProductCard).join('');

    // 渲染购物车
    renderCart();

    // 更新购物车数量
    updateCartCount();

    // 绑定产品卡片点击事件
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-add-cart')) {
                const productId = e.target.dataset.id;
                addToCart(productId);
            } else {
                const productId = card.dataset.id;
                showProductDetail(productId);
            }
        });
    });

    // 筛选按钮事件
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const products = document.querySelectorAll('#allProducts .product-card');

            products.forEach(product => {
                if (filter === 'all' || product.dataset.category === filter) {
                    product.style.display = '';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // 购物车侧边栏
    const cartSidebar = document.getElementById('cartSidebar');
    const cartBtn = document.getElementById('cartBtn');
    const cartClose = document.getElementById('cartClose');
    const cartOverlay = document.getElementById('cartOverlay');

    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartSidebar.classList.add('open');
    });

    cartClose.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });

    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });

    // 产品详情模态框
    const modal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    modalClose.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    modalOverlay.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    // FAQ 展开/收起
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // 移动端导航
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 点击导航链接后关闭移动端菜单
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#cart') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 结算按钮（暂时显示提示）
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('购物车是空的');
            return;
        }
        showToast('结算功能开发中，敬请期待！');
    });
}

// DOM 加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
