# 📝 Todo List - Task Manager

A beautiful and intuitive todo list application built with React. Features a modern two-column layout separating active and completed tasks with smooth animations and a stunning gradient design.

## ✨ Features

- ➕ Add new tasks quickly
- ✅ Mark tasks as complete/active
- 🗑️ Delete tasks
- 📊 Two-column layout (Active | Completed)
- 🎨 Modern gradient UI design
- 📱 Fully responsive (mobile & desktop)
- ⚡ Smooth animations and transitions
- 🏷️ Status badges (Active/Completed)
- 📈 Task count indicators
- 🎯 Empty state messages
- 💫 Hover effects and interactions
- ⌨️ Form validation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd react/todolist
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🎯 Usage

### Managing Tasks
- **Add Task**: Type your task in the input field and click "Add"
- **Complete Task**: Click the "Complete" button to move task to completed column
- **Undo Completion**: Click "Undo" on a completed task to move it back to active
- **Delete Task**: Click "Delete" to remove a task permanently
- **View Status**: See real-time task counts for active and completed tasks

### Layout
- **Left Column**: Active tasks (green gradient background)
- **Right Column**: Completed tasks (pink gradient background with strikethrough)

## 📁 Project Structure

```
todolist/
├── public/
│   └── index.html
├── src/
│   ├── App.js         # Main component with state management
│   ├── Todo.js        # Input form component
│   ├── TodoList.js    # Task card component
│   ├── index.js       # Entry point
│   └── index.css      # Extensive styling with animations
├── package.json
└── README.md
```

## 🛠️ Built With

- **React** (v18.2.0) - UI library with hooks (useReducer)
- **Bootstrap** (v5.2.3) - CSS framework
- **React Bootstrap** (v2.7.4) - Bootstrap components
- **CSS3** - Custom animations and gradients

## 📦 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation!** Ejects from Create React App.

## 🎨 Design Features

### Visual Elements
- **Purple Gradient Background**: Beautiful gradient backdrop
- **Card-based Layout**: Clean, organized task cards
- **Status Badges**: Visual indicators for task status
- **Smooth Animations**: Fade-in, slide-in effects
- **Hover Effects**: Interactive feedback on all elements
- **Gradient Buttons**: Modern button styling
- **Box Shadows**: Depth and dimension
- **Responsive Grid**: Two-column desktop, stacked mobile

### Color Scheme
- Primary: Purple gradient (#667eea to #764ba2)
- Success: Green gradients for active tasks
- Danger: Pink/red gradients for completed tasks
- Neutral: Gray tones for secondary elements

## 🔄 State Management

Uses React's `useReducer` hook for state management:
- **Actions**: ADD_LIST, TOGGLE_STATUS, DELETE_LIST
- **State**: Array of todo objects with id, task, and status
- **Immutable Updates**: Pure reducer function

## 🎨 Customization

Customize colors in `src/index.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --success-color: #10b981;
  --danger-color: #ef4444;
}
```

## 📱 Responsive Design

- Desktop: Two-column layout with vertical divider
- Tablet: Adjusted padding and font sizes
- Mobile: Single column, stacked layout
- Touch-friendly button sizes on all devices

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ using React

---

**Get Things Done!** ✨📋

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
