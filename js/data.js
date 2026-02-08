// ========================================
// 定制案例数据
// ========================================
const customProducts = [
    {
        id: 'c001',
        name: '金毛定制 - "旺财"',
        category: 'dog',
        categoryLabel: '狗狗',
        price: 0, // 定制案例不显示价格
        image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop',
        badge: '热销案例',
        featured: true,
        type: 'custom',
        description: '根据客户提供的金毛照片定制，还原了标志性的金色毛发和温柔的眼神。中型尺寸，25cm。',
        details: {
            size: '25cm',
            material: '超柔毛绒、公仔棉',
            handmade: '100% 手工制作',
            productionTime: '12天'
        },
        stock: 0
    },
    {
        id: 'c002',
        name: '英短蓝猫定制 - "蓝蓝"',
        category: 'cat',
        categoryLabel: '猫咪',
        price: 0,
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop',
        badge: '新品',
        featured: true,
        type: 'custom',
        description: '可爱的英短蓝猫定制，捕捉了圆润的脸型和标志性的蓝色被毛。小型尺寸，18cm。',
        details: {
            size: '18cm',
            material: '短绒面料、PP棉',
            handmade: '100% 手工制作',
            productionTime: '8天'
        },
        stock: 0
    },
    {
        id: 'c003',
        name: '柯基定制 - "小短腿"',
        category: 'dog',
        categoryLabel: '狗狗',
        price: 0,
        image: 'https://images.unsplash.com/photo-1559264833-85579f130491?w=400&h=400&fit=crop',
        badge: '',
        featured: true,
        type: 'custom',
        description: '柯基犬定制，特别突出了标志性的小短腿和圆润的屁股，可爱指数爆表！中型尺寸，22cm。',
        details: {
            size: '22cm',
            material: '超柔毛绒、公仔棉',
            handmade: '100% 手工制作',
            productionTime: '10天'
        },
        stock: 0
    },
    {
        id: 'c004',
        name: '布偶猫定制 - "雪球"',
        category: 'cat',
        categoryLabel: '猫咪',
        price: 0,
        image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop',
        badge: '热销案例',
        featured: false,
        type: 'custom',
        description: '布偶猫定制作品，完美还原了蓝色眼睛和蓬松的长毛。大型尺寸，35cm。',
        details: {
            size: '35cm',
            material: '长毛绒面料、公仔棉',
            handmade: '100% 手工制作',
            productionTime: '18天'
        },
        stock: 0
    },
    {
        id: 'c005',
        name: '柴犬定制 - "柴柴"',
        category: 'dog',
        categoryLabel: '狗狗',
        price: 0,
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop',
        badge: '',
        featured: false,
        type: 'custom',
        description: '柴犬定制作品，捕捉了标志性的微笑脸和卷曲的尾巴。小型尺寸，20cm。',
        details: {
            size: '20cm',
            material: '超柔毛绒、PP棉',
            handmade: '100% 手工制作',
            productionTime: '9天'
        },
        stock: 0
    },
    {
        id: 'c006',
        name: '仓鼠定制 - "小丸子"',
        category: 'other',
        categoryLabel: '其他',
        price: 0,
        image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=400&fit=crop',
        badge: '',
        featured: false,
        type: 'custom',
        description: '超可爱的小仓鼠定制，腮帮子鼓鼓的样子太萌了！小型尺寸，15cm。',
        details: {
            size: '15cm',
            material: '超柔短绒、PP棉',
            handmade: '100% 手工制作',
            productionTime: '7天'
        },
        stock: 0
    },
    {
        id: 'c007',
        name: '橘猫定制 - "大橘"',
        category: 'cat',
        categoryLabel: '猫咪',
        price: 0,
        image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400&h=400&fit=crop',
        badge: '特价',
        featured: false,
        type: 'custom',
        description: '橘猫定制作品，胖嘟嘟的身材和慵懒的神态完美还原。中型尺寸，25cm。',
        details: {
            size: '25cm',
            material: '短绒面料、公仔棉',
            handmade: '100% 手工制作',
            productionTime: '11天'
        },
        stock: 0
    },
    {
        id: 'c008',
        name: '兔子定制 - "小白"',
        category: 'other',
        categoryLabel: '其他',
        price: 0,
        image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop',
        badge: '',
        featured: false,
        type: 'custom',
        description: '可爱的小兔子定制，长长的耳朵和红宝石般的眼睛。小型尺寸，18cm。',
        details: {
            size: '18cm',
            material: '天鹅绒面料、PP棉',
            handmade: '100% 手工制作',
            productionTime: '8天'
        },
        stock: 0
    }
];

// ========================================
// 现成玩偶数据
// ========================================
const readyProducts = [
    {
        id: 'r001',
        name: '小熊抱枕 - 奶油色',
        category: 'pillow',
        categoryLabel: '抱枕',
        price: 199,
        image: 'https://images.unsplash.com/photo-1543169866-6117669b76a4?w=400&h=400&fit=crop',
        badge: '热销',
        featured: true,
        type: 'ready',
        description: '温暖的奶油色小熊抱枕，采用优质短绒面料制作，手感柔软舒适。适合放在沙发、床头，是温馨家居的好伴侣。',
        details: {
            size: '35cm x 25cm',
            material: '短绒面料、PP棉',
            handmade: '100% 手工制作',
            productionTime: '现货'
        },
        stock: 8
    },
    {
        id: 'r002',
        name: '粉色兔子玩偶',
        category: 'doll',
        categoryLabel: '玩偶',
        price: 169,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
        badge: '新品',
        featured: true,
        type: 'ready',
        description: '可爱的粉色兔子玩偶，长长的耳朵和萌萌的表情让人瞬间心动。采用亲肤面料制作，适合拥抱和陪伴。',
        details: {
            size: '40cm (含耳朵)',
            material: '水晶超柔、PP棉',
            handmade: '100% 手工制作',
            productionTime: '现货'
        },
        stock: 12
    },
    {
        id: 'r003',
        name: '云朵抱枕 - 白色',
        category: 'pillow',
        categoryLabel: '抱枕',
        price: 179,
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop',
        badge: '热销',
        featured: false,
        type: 'ready',
        description: '蓬松柔软的云朵抱枕，采用高弹面料和优质填充棉，抱起来像抱着一朵云。简约的设计适合各种家居风格。',
        details: {
            size: '45cm x 30cm',
            material: '高弹面料、公仔棉',
            handmade: '100% 手工制作',
            productionTime: '现货'
        },
        stock: 6
    },
    {
        id: 'r004',
        name: '小恐龙玩偶 - 绿色',
        category: 'doll',
        categoryLabel: '玩偶',
        price: 189,
        image: 'https://images.unsplash.com/photo-1596464716127-p9a863727824?w=400&h=400&fit=crop',
        badge: '',
        featured: false,
        type: 'ready',
        description: '呆萌的小恐龙玩偶，圆润的造型和鲜艳的绿色让人心情愉悦。适合作为礼物送给朋友或自己收藏。',
        details: {
            size: '35cm',
            material: '水晶超柔、PP棉',
            handmade: '100% 手工制作',
            productionTime: '现货'
        },
        stock: 10
    },
    {
        id: 'r005',
        name: '星星挂件 - 金色',
        category: 'ornament',
        categoryLabel: '挂件',
        price: 49,
        image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&h=400&fit=crop',
        badge: '',
        featured: false,
        type: 'ready',
        description: '闪亮的星星挂件，金色的面料在阳光下闪闪发光。小巧精致，是手机或包包的可爱装饰。',
        details: {
            size: '8cm x 8cm',
            material: '珠光面料、PP棉',
            handmade: '100% 手工制作',
            productionTime: '现货'
        },
        stock: 25
    },
    {
        id: 'r006',
        name: '爱心抱枕 - 红色',
        category: 'pillow',
        categoryLabel: '抱枕',
        price: 159,
        image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop',
        badge: '特价',
        featured: false,
        type: 'ready',
        description: '经典的爱心抱枕，红色代表爱与温暖。非常适合作为情人节礼物，送给心爱的人。',
        details: {
            size: '40cm x 35cm',
            material: '短绒面料、PP棉',
            handmade: '100% 手工制作',
            productionTime: '现货'
        },
        stock: 5
    },
    {
        id: 'r007',
        name: '小猪玩偶 - 粉色',
        category: 'doll',
        categoryLabel: '玩偶',
        price: 175,
        image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c7?w=400&h=400&fit=crop',
        badge: '',
        featured: false,
        type: 'ready',
        description: '粉粉嫩嫩的小猪玩偶，圆圆的鼻子和可爱的造型让人忍不住想捏一捏。柔软的触感带来满满的幸福感。',
        details: {
            size: '30cm',
            material: '水晶超柔、PP棉',
            handmade: '100% 手工制作',
            productionTime: '现货'
        },
        stock: 9
    },
    {
        id: 'r008',
        name: '猫咪挂件 - 灰色',
        category: 'ornament',
        categoryLabel: '挂件',
        price: 59,
        image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop',
        badge: '',
        featured: false,
        type: 'ready',
        description: '小巧可爱的猫咪挂件，可以挂在包包、钥匙扣上。每只猫咪都有独特的表情，是日常搭配的可爱点缀。',
        details: {
            size: '10cm x 8cm',
            material: '短绒面料、PP棉',
            handmade: '100% 手工制作',
            productionTime: '现货'
        },
        stock: 30
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
    const isCustom = product.type === 'custom';

    return `
        <div class="product-card ${isCustom ? 'custom-case' : 'ready-product'}" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <p class="product-category">${product.categoryLabel}</p>
                <h3 class="product-name">${product.name}</h3>
                ${isCustom ?
                    `<p class="product-type">定制案例</p>` :
                    `<p class="product-price">${formatPrice(product.price)}</p>`
                }
                <div class="product-actions">
                    ${isCustom ?
                        `<button class="btn btn-outline" onclick="document.querySelector('#customize').scrollIntoView({behavior:'smooth'})">我要定制</button>` :
                        `<button class="btn btn-primary btn-add-cart" data-id="${product.id}">加入购物车</button>`
                    }
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

// ========================================
// 定制表单处理
// ========================================
let uploadedFiles = [];

// 初始化文件上传
function initFileUpload() {
    const fileUpload = document.getElementById('fileUpload');
    const fileInput = document.getElementById('petPhotos');
    const filePreview = document.getElementById('filePreview');

    // 文件选择事件
    fileInput.addEventListener('change', handleFileSelect);

    // 拖拽上传
    fileUpload.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileUpload.style.borderColor = 'var(--color-primary)';
        fileUpload.style.backgroundColor = 'rgba(139, 115, 85, 0.05)';
    });

    fileUpload.addEventListener('dragleave', (e) => {
        e.preventDefault();
        fileUpload.style.borderColor = '';
        fileUpload.style.backgroundColor = '';
    });

    fileUpload.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUpload.style.borderColor = '';
        fileUpload.style.backgroundColor = '';

        const files = Array.from(e.dataTransfer.files).filter(file =>
            file.type.startsWith('image/')
        );

        if (files.length > 0) {
            addFiles(files);
        }
    });

    function handleFileSelect(e) {
        const files = Array.from(e.target.files);
        addFiles(files);
    }

    function addFiles(files) {
        // 限制最多5张
        const remainingSlots = 5 - uploadedFiles.length;
        const filesToAdd = files.slice(0, remainingSlots);

        if (files.length > remainingSlots) {
            showToast('最多只能上传5张照片');
        }

        filesToAdd.forEach(file => {
            // 检查文件大小（5MB限制）
            if (file.size > 5 * 1024 * 1024) {
                showToast(`文件 ${file.name} 超过5MB，已跳过`);
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const fileData = {
                    name: file.name,
                    size: file.size,
                    dataUrl: e.target.result
                };
                uploadedFiles.push(fileData);
                renderFilePreview();
            };
            reader.readAsDataURL(file);
        });
    }

    function renderFilePreview() {
        filePreview.innerHTML = uploadedFiles.map((file, index) => `
            <div class="file-preview-item">
                <img src="${file.dataUrl}" alt="${file.name}">
                <span class="remove" onclick="removeUploadedFile(${index})">×</span>
            </div>
        `).join('');
    }
}

// 移除已上传的文件
function removeUploadedFile(index) {
    uploadedFiles.splice(index, 1);
    renderFilePreview();
    document.getElementById('petPhotos').value = '';
}

// 初始化定制表单
function initCustomOrderForm() {
    const form = document.getElementById('customOrderForm');

    // 设置日期最小值为今天
    const dateInput = document.getElementById('deadline');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 验证文件上传
        if (uploadedFiles.length === 0) {
            showToast('请至少上传一张宠物照片');
            return;
        }

        // 收集表单数据
        const formData = {
            ownerName: document.getElementById('ownerName').value,
            contactInfo: document.getElementById('contactInfo').value,
            petName: document.getElementById('petName').value || '未填写',
            petType: document.getElementById('petType').value,
            size: document.getElementById('size').value,
            requirements: document.getElementById('requirements').value,
            deadline: document.getElementById('deadline').value || '未填写',
            photos: uploadedFiles.map(f => ({ name: f.name, size: f.size })),
            submitTime: new Date().toLocaleString('zh-CN')
        };

        // 打印到控制台（实际项目中会发送到服务器）
        console.log('定制订单数据:', formData);
        console.log('照片文件:', uploadedFiles);

        // 显示成功提示
        showSuccessMessage(formData);

        // 重置表单
        form.reset();
        uploadedFiles = [];
        document.getElementById('filePreview').innerHTML = '';
    });
}

// 显示定制成功消息
function showSuccessMessage(data) {
    const sizeMap = {
        'small': '小型 (15-20cm)',
        'medium': '中型 (25-30cm)',
        'large': '大型 (35-45cm)'
    };

    const petTypeMap = {
        'dog': '狗狗',
        'cat': '猫咪',
        'rabbit': '兔子',
        'hamster': '仓鼠',
        'bird': '鸟类',
        'other': '其他'
    };

    const message = `
感谢 ${data.ownerName}！

我们已收到你的定制需求：
🐾 宠物：${data.petName} (${petTypeMap[data.petType]})
📏 尺寸：${sizeMap[data.size]}
📸 照片：${data.photos.length} 张

我们会在 24 小时内通过 ${data.contactInfo} 联系你，
确认细节和报价。
    `.trim();

    alert(message);
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
    // 初始化定制表单
    initFileUpload();
    initCustomOrderForm();

    // 渲染定制案例
    document.getElementById('customProducts').innerHTML = customProducts.map(renderProductCard).join('');

    // 渲染现成玩偶
    document.getElementById('readyProducts').innerHTML = readyProducts.map(renderProductCard).join('');

    // 渲染购物车
    renderCart();

    // 更新购物车数量
    updateCartCount();

    // 绑定现成玩偶的加入购物车按钮
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = e.target.dataset.id;
            const product = readyProducts.find(p => p.id === productId);
            if (product) {
                addToCart(productId);
            }
        });
    });

    // 定制案例筛选按钮
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const cards = document.querySelectorAll('#customProducts .product-card');

            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 现成玩偶筛选按钮
    document.querySelectorAll('[data-filter-ready]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-filter-ready]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filterReady;
            const cards = document.querySelectorAll('#readyProducts .product-card');

            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
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
            if (href !== '#') {
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
