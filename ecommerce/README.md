# 🛒 E-Commerce Store

A feature-rich e-commerce application built with React and Redux Toolkit. Browse products, manage your cart, and enjoy a seamless shopping experience.

## ✨ Features

- 🏪 Product catalog with detailed information
- 🔍 Real-time search functionality
- 🛍️ Shopping cart management
- 💰 Price calculations with discounts
- ⭐ Product ratings display
- 📦 Stock availability tracking
- 📱 Fully responsive design
- 🎨 Modern UI with Bootstrap 5
- 🔄 Redux state management
- 🎯 Sticky navigation header

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd react/ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the store.

## 🎯 Usage

### Shopping Features
- **Browse Products**: View all available products with images, prices, and ratings
- **Search**: Use the search bar to find specific products
- **Add to Cart**: Click "Add to Cart" to add items to your shopping cart
- **View Cart**: Click the cart icon to see your selected items
- **Manage Cart**: Update quantities or remove items from cart
- **Discount Badges**: See percentage discounts on sale items
- **Stock Status**: Real-time stock availability display

## 📁 Project Structure

```
ecommerce/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── Cart.js        # Shopping cart component
│   │   ├── Home.js        # Product listing page
│   │   └── Navbar.js      # Navigation header
│   ├── Details/
│   │   ├── products.json  # Product data
│   │   └── Reducerslicer.js # Redux slice
│   ├── App.js             # Main app component
│   ├── Store.js           # Redux store configuration
│   ├── index.js           # Entry point
│   └── index.css          # Styling
├── package.json
└── README.md
```

## 🛠️ Built With

- **React** (v18.2.0) - UI library
- **Redux Toolkit** (v1.9.5) - State management
- **React Redux** (v8.0.7) - React bindings for Redux
- **Bootstrap** (v5.3.0) - CSS framework
- **React Bootstrap** (v2.7.4) - Bootstrap components for React
- **React Headroom** (v3.2.1) - Sticky header component

## 📦 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation!** Ejects the app from Create React App.

## 🎨 Features Breakdown

### Product Display
- High-quality product images
- Original and discounted prices
- Star ratings
- Stock availability
- Discount percentage badges

### Shopping Cart
- Add/remove items
- Quantity management
- Total price calculation
- Empty cart state
- Visual feedback on cart updates

### Search Functionality
- Real-time filtering
- Case-insensitive search
- Instant results

## 🔄 State Management

The app uses Redux Toolkit for centralized state management:
- **Product State**: Product catalog data
- **Cart State**: Shopping cart items
- **Search State**: Search query filtering

## 🎨 Customization

Modify `src/index.css` to customize the theme. Bootstrap variables can be overridden for custom branding.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ using React and Redux

---

**Happy Shopping!** 🎉

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
