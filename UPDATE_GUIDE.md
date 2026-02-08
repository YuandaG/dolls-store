# 萌宠手作坊 - 内容更新指南

> 本文档指导如何手动更新网站内容，如图片、文字、产品等

---

## 📁 项目文件结构

```
dolls-store/
├── index.html          # 网页结构和文字内容
├── css/
│   └── style.css       # 样式（一般不需要改）
├── js/
│   └── data.js         # 产品/案例数据
├── images/             # 本地图片目录
└── UPDATE_GUIDE.md     # 本指南文档
```

---

## 1️⃣ 更换图片

### 方式一：使用网络图片（推荐，简单）

#### 替换产品/案例图片

打开 `js/data.js`，找到对应产品，修改 `image` 字段：

```javascript
// 定制案例
{
  id: 'c001',
  name: '金毛定制 - "旺财"',
  image: 'https://你的图片地址.jpg',  // 👈 修改这里
  // ...
}

// 现成玩偶
{
  id: 'r001',
  name: '小熊抱枕',
  image: 'https://你的图片地址.jpg',  // 👈 修改这里
  // ...
}
```

#### 替换英雄区大图

打开 `css/style.css`，找到：

```css
.hero {
    background-image: url('https://你的图片地址.jpg');  /* 👈 修改这里 */
    background-size: cover;
    background-position: center;
    position: relative;
}
```

#### 替换关于我们图片

打开 `index.html`，找到：

```html
<div class="about-image">
    <img src="https://你的图片地址.jpg" alt="手作过程">  <!-- 👈 修改这里 -->
</div>
```

---

### 方式二：使用本地图片

#### 步骤：

1. **将图片放入 `images` 文件夹**
   ```
   dolls-store/
   └── images/
       ├── my-doll-1.jpg
       ├── my-doll-2.jpg
       └── hero-bg.jpg
   ```

2. **修改代码中的图片路径**

   在 `js/data.js` 中：
   ```javascript
   image: 'images/my-doll-1.jpg',  // 👈 使用相对路径
   ```

   在 `index.html` 中：
   ```html
   <img src="images/hero-bg.jpg" alt="...">
   ```

---

## 2️⃣ 修改文字内容

### 修改网页标题和描述

打开 `index.html`，找到：

```html
<title>毛绒玩偶定制 | 根据你的宠物照片制作独一无二的手作玩偶</title>
<meta name="description" content="根据你宠物的照片，手工定制独一无二的毛绒玩偶。上传照片，告诉我们你的需求，我们为你定制专属回忆。">
```

### 修改品牌名称

在 `index.html` 中搜索 `"萌宠手作坊"`，全部替换为你的品牌名。

### 修改英雄区文字

打开 `index.html`，找到：

```html
<section class="hero" id="home">
    <div class="hero-overlay">
        <div class="container hero-content">
            <h1 class="hero-title">用一针一线，重现你的毛孩子</h1>
            <p class="hero-subtitle">根据宠物照片，手工定制独一无二的毛绒玩偶</p>
            <a href="#customize" class="btn btn-primary">立即定制</a>
            <a href="#products" class="btn btn-outline" style="margin-left: 10px;">查看作品</a>
```

### 修改关于我们内容

在 `index.html` 中找到 `about` 区域，修改 `<p>` 标签内的文字：

```html
<section class="about" id="about">
    <div class="about-content">
        <div class="about-image">
            <img src="https://..." alt="手作过程">
        </div>
        <div class="about-text">
            <h2 class="section-title">关于萌宠手作坊</h2>
            <p>我是一名宠物爱好者，也是一名手工艺人。自从失去陪伴我十年的小狗后，我决定用这种方式延续与毛孩子们的美好回忆。</p>
            <p>每一个定制玩偶都是我亲手设计、裁剪、缝制的。我会仔细观察你提供的照片，捕捉宠物的独特特征——那双灵动的眼睛、可爱的斑点、或是标志性的坐姿。</p>
            <p>我相信，机器只能复制外形，而手作才能注入温度和灵魂。</p>
```

### 修改 FAQ 问题

在 `index.html` 中找到 `faq` 区域，修改问题和答案：

```html
<div class="faq-item">
    <div class="faq-question">
        <span>制作需要多长时间？</span>  <!-- 👈 改问题 -->
        <i class="fas fa-chevron-down"></i>
    </div>
    <div class="faq-answer">
        <p>小型玩偶（15-20cm）约 7-10 天...</p>  <!-- 👈 改答案 -->
    </div>
</div>
```

### 修改联系方式

在 `index.html` 中找到页脚部分：

```html
<div class="footer-section">
    <h4>联系我们</h4>
    <ul>
        <li><i class="fas fa-envelope"></i> hello@cutedoll.work</li>  <!-- 👈 修改邮箱 -->
        <li><i class="fab fa-weixin"></i> CuteDoll2026</li>  <!-- 👈 修改微信号 -->
    </ul>
</div>
```

---

## 3️⃣ 添加/修改产品

### 添加新的现成玩偶

打开 `js/data.js`，在 `readyProducts` 数组中添加：

```javascript
{
    id: 'r009',  // 唯一ID，不要重复
    name: '你的产品名称',
    category: 'doll',  // pillow(抱枕) / doll(玩偶) / ornament(挂件)
    categoryLabel: '玩偶',
    price: 199,  // 价格
    image: 'images/your-product.jpg',  // 图片地址
    badge: '新品',  // 可选：热销/新品/特价，留空则不显示
    featured: true,  // 是否在前排展示
    type: 'ready',
    description: '产品描述...',
    details: {
        size: '30cm',
        material: '水晶超柔、PP棉',
        handmade: '100% 手工制作',
        productionTime: '现货'
    },
    stock: 10  // 库存数量
}
```

### 添加新的定制案例

在 `js/data.js` 的 `customProducts` 数组中添加：

```javascript
{
    id: 'c009',
    name: '哈士奇定制 - "二哈"',
    category: 'dog',  // dog / cat / other
    categoryLabel: '狗狗',
    price: 0,  // 定制案例始终为0
    image: 'images/case-husky.jpg',
    badge: '热销案例',
    featured: true,
    type: 'custom',  // 注意这里是 custom
    description: '案例描述...',
    details: {
        size: '25cm',
        material: '超柔毛绒、公仔棉',
        handmade: '100% 手工制作',
        productionTime: '12天'
    },
    stock: 0  // 定制案例始终为0
}
```

### 修改产品信息

直接在 `js/data.js` 中找到对应产品，修改相应字段：

```javascript
{
    id: 'r001',
    name: '小熊抱枕 - 奶油色',  // 👈 修改名称
    price: 199,  // 👈 修改价格
    stock: 8,  // 👈 修改库存
    // ...
}
```

---

## 4️⃣ 修改颜色主题

打开 `css/style.css`，找到 `:root` 部分：

```css
:root {
    /* 主色调 - 可以改成你喜欢的颜色 */
    --color-primary: #8B7355;        /* 主色（按钮、链接） */
    --color-primary-dark: #6B5344;   /* 深色（悬停状态） */
    --color-secondary: #D4C4B0;      /* 浅色（背景） */
    --color-accent: #E8B4A0;         /* 点缀色（标签） */
}
```

---

## 5️⃣ 本地预览修改

### 步骤：

1. **启动本地服务器**
   ```bash
   cd /Users/yuandagao/Documents/Code/Web/dolls-store
   python3 -m http.server 8080
   ```

2. **在浏览器打开**
   ```
   http://localhost:8080
   ```

3. **修改文件后，刷新浏览器查看效果**
   - Mac: `Cmd + R` 或 `Cmd + Shift + R`（强制刷新）
   - Windows: `Ctrl + R` 或 `Ctrl + Shift + R`

---

## 6️⃣ 将更新发布到网上

### 方法一：通过终端（推荐）

```bash
# 1. 进入项目目录
cd /Users/yuandagao/Documents/Code/Web/dolls-store

# 2. 查看修改了哪些文件
git status

# 3. 添加所有修改
git add .

# 4. 提交修改（写清楚改了什么）
git commit -m "更新：添加3个新产品，修改联系方式"

# 5. 推送到 GitHub
git push origin main
```

### 方法二：直接在 GitHub 网页上修改

1. 访问 https://github.com/YuandaG/dolls-store
2. 点击要修改的文件
3. 点击右上角铅笔图标 ✏️
4. 修改内容
5. 在页面底部填写提交说明
6. 点击 "Commit changes"

---

## 📋 常见修改位置速查表

| 想改什么 | 文件 | 搜索关键词 |
|----------|------|------------|
| 品牌名称 | index.html | "萌宠手作坊" |
| 网页标题 | index.html | `<title>` |
| 英雄区大图 | style.css | `.hero {` |
| 英雄区文字 | index.html | `hero-title` |
| 产品/案例 | data.js | `customProducts` 或 `readyProducts` |
| 产品价格 | data.js | `price:` |
| 产品库存 | data.js | `stock:` |
| 关于我们 | index.html | `关于萌宠手作坊` |
| FAQ 问题 | index.html | `制作需要多长时间` |
| 联系方式 | index.html | `hello@cutedoll.work` |
| 颜色主题 | style.css | `:root` |

---

## 💡 小贴士

### 图片建议

| 图片类型 | 建议尺寸 | 格式 | 文件大小 |
|----------|----------|------|----------|
| 产品图片 | 800x800 | JPG/PNG | < 500KB |
| 英雄区大图 | 1920x800 | JPG | < 1MB |
| 关于我们 | 600x400 | JPG | < 300KB |

### 提交信息规范

好的提交信息示例：
```
更新：添加3个新产品
修复：修改联系方式错误
优化：更新产品图片
改进：调整价格
```

### 注意事项

1. **ID 不能重复**：添加新产品时确保 `id` 唯一
2. **图片路径**：使用网络图片要确保链接可访问
3. **库存管理**：售完产品将 `stock` 设为 0
4. **价格单位**：所有价格都是人民币（元）

---

## 🆘 遇到问题？

- **图片不显示**：检查图片路径是否正确
- **修改不生效**：尝试强制刷新浏览器（Ctrl+Shift+R）
- **网站打不开**：检查本地服务器是否运行
- **GitHub 推送失败**：检查网络连接和账户权限

---

*最后更新：2026-02-08*
