# Onsko - Premium Skincare E-Commerce Platform

![Onsko Banner](app/assets/images/banner.avif)

**Onsko** is a modern, visually stunning e-commerce platform specializing in premium skincare and beauty products. Built with cutting-edge web technologies, Onsko offers an immersive shopping experience with smooth animations, intuitive navigation, and comprehensive product management.

## ✨ Features

### 🛍️ E-Commerce Functionality
- **Product Catalog**: Extensive range of skincare products including serums, moisturizers, cleansers, and tools
- **Advanced Filtering**: Filter products by category (face, body, hair), price range, best sellers, and new arrivals
- **Product Details**: Rich product pages with ingredients, benefits, usage instructions, and ratings
- **Shopping Cart**: Add products to cart with persistent state management

### 👤 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: GSAP-powered animations including sticky sections and bounce effects
- **Interactive Navigation**: Dynamic navigation that adapts based on page context
- **Visual Storytelling**: Immersive homepage with hero sections, product showcases, and brand narrative

### 🔧 User Account Management
- **Profile Management**: Complete user profile with account settings
- **Order History**: Track past purchases and order status
- **Wishlist**: Save favorite products for later
- **Address Book**: Manage shipping and billing addresses
- **Wallet Integration**: Digital wallet for seamless payments

### 📱 Pages & Components
- **Homepage**: Hero section, best sellers carousel, category showcase, arrivals, contact
- **Shop Page**: Product grid with filtering and search capabilities
- **Product Pages**: Detailed product information with images and specifications
- **Profile Pages**: Account, orders, addresses, wallet, wishlist management
- **Blog**: Content section for beauty tips and skincare advice

## 🛠️ Technology Stack

### Core Framework
- **Nuxt.js 4.2.2** - Full-stack Vue.js framework with SSR/SSG capabilities
- **Vue 3.5.25** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript for better development experience

### Styling & Design
- **Tailwind CSS 6.14.0** - Utility-first CSS framework
- **Custom Design System**:
  - Primary: `#AE3A00` (Warm Orange)
  - Secondary: `#E1F861` (Bright Yellow)
  - Dark: `#2D5142` (Deep Green)
  - Light: `#A0C8FF` (Soft Blue)
- **Google Fonts**: Manrope, Poppins, Merriweather

### Enhancements & Modules
- **@nuxt/image 2.0.0** - Optimized image handling and lazy loading
- **@nuxt/icon 2.1.0** - Icon management system
- **@nuxt/fonts 0.12.1** - Google Fonts integration
- **v-gsap-nuxt 1.4.4** - GSAP animation library integration
- **@nuxtjs/google-fonts 3.2.0** - Enhanced font loading

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript Compiler** - Type checking
- **Vite** - Fast development server and build tool

## 📦 Product Categories

### Face Care
- Vitamin C Serum (20% concentration)
- Hydrating Face Oil
- Glow Boosting Moisturizer
- Gentle Face Wash
- Pressed Powder Foundation
- Facial Cleansing Brush

### Body Care
- Hand & Body Lotion
- Body care essentials

### Hair Care
- Repairing Hair Treatment
- Hair nourishment products

### Tools & Accessories
- Skincare Container Sets
- Premium glass containers with bamboo lids
- Professional-grade cleansing brushes

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd onsko
   ```

2. **Install dependencies**
   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Or using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Start development server**
   ```bash
   # Using pnpm
   pnpm dev

   # Or using npm
   npm run dev

   # Or using yarn
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:9000` (configured port)

### Build Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Generate static site
pnpm generate
```

## 📁 Project Structure

```
onsko/
├── app/
│   ├── app.vue              # Main app component
│   ├── layouts/
│   │   └── default.vue      # Default layout
│   ├── pages/               # Nuxt pages (file-based routing)
│   │   ├── index.vue        # Homepage
│   │   ├── Shop.vue         # Shop page
│   │   ├── Profile.vue      # User profile
│   │   ├── Blog.vue         # Blog page
│   │   └── shop/
│   │       └── [id].vue     # Dynamic product pages
│   └── components/          # Vue components
│       ├── common/          # Shared components
│       │   ├── BaseNavigation.vue
│       │   ├── BaseNavigationShop.vue
│       │   └── Footer.vue
│       ├── HomePages/       # Homepage sections
│       ├── ShopPage/        # Shop components
│       └── Profile/         # Profile components
├── assets/                  # Static assets
│   ├── css/
│   │   └── tailwind.css
│   ├── images/              # Product and UI images
│   └── products/            # Product images
├── lib/                     # Data and utilities
│   └── index.ts             # Products data, categories, exports
├── public/                  # Public assets (favicon, robots.txt)
├── nuxt.config.ts           # Nuxt configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
```css
.primary: #AE3A00    /* Warm Orange - CTAs, accents */
.secondary: #E1F861  /* Bright Yellow - Highlights, buttons */
.dark: #2D5142       /* Deep Green - Text, dark elements */
.light: #A0C8FF      /* Soft Blue - Backgrounds, light accents */
```

### Typography
- **Primary**: Manrope (Sans-serif) - Headings, UI elements
- **Secondary**: Poppins (Sans-serif) - Body text, buttons
- **Accent**: Merriweather (Serif) - Hero text, emphasis

### Animations
- **GSAP Integration**: Smooth transitions and micro-interactions
- **Sticky Sections**: Dynamic positioning for enhanced UX
- **Bounce Effects**: Playful animations on scroll and interaction

## 📊 Data Structure

### Product Schema
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'face' | 'body' | 'hair' | 'tools';
  rating: number;
  reviews: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  ingredients: string[];
  benefits: string[];
  info: {
    usage: string;
    volume: string;
    skinType: string;
    keyIngredients: string;
    shelfLife: string;
  };
}
```

## 🔧 Configuration

### Nuxt Config (`nuxt.config.ts`)
- SSR/SSG setup with latest compatibility
- Module integrations (Tailwind, GSAP, Images, Icons, Fonts)
- Google Fonts configuration
- Development tools enabled

### Tailwind Config (`tailwind.config.js`)
- Custom color palette
- Font family extensions
- Container utilities
- Responsive breakpoints

## 🌟 Key Features & Highlights

1. **Immersive Homepage**: Multi-section layout with sticky navigation and smooth scrolling
2. **Advanced Product Filtering**: Real-time filtering by category, price, and status
3. **Responsive Grid Layout**: Adaptive product grid that works across all devices
4. **Professional UI/UX**: Clean, modern design with attention to typography and spacing
5. **Performance Optimized**: Image optimization, lazy loading, and efficient bundling
6. **Type-Safe Development**: Full TypeScript integration for reliable code
7. **Modular Architecture**: Well-organized component structure for maintainability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Support

For questions or support, please contact the development team.

---

**Built with ❤️ using Nuxt.js, Vue.js, and modern web technologies**
