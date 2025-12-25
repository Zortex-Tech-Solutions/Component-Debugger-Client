# ⚡ Component Debugger

A modern Chrome extension for debugging React and Vue applications with beautiful visualizations and performance insights.

![Component Debugger](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-supported-61dafb.svg)
![Vue](https://img.shields.io/badge/Vue-supported-42b883.svg)

## 🎯 Features

- **📊 Visual Component Tree** - See your entire component hierarchy at a glance
- **🔍 Smart Search** - Quickly find components by name
- **⚛️ React & Vue Support** - Toggle between frameworks with one click
- **📈 Performance Monitoring** - Track render counts and timing for each component
- **🔎 Deep Inspection** - View props, state, and nested data structures
- **⚠️ Performance Warnings** - Get alerts for components with high render counts
- **🎨 Modern UI** - Sleek dark theme with intuitive navigation

## 🚀 Installation

### From Chrome Web Store (Coming Soon)

1. Visit the [Chrome Web Store](#)
2. Click "Add to Chrome"
3. Open your React or Vue app
4. Click the extension icon to start debugging

### Manual Installation (Development)

1. Clone this repository:
```bash
git clone https://github.com/yourusername/component-debugger.git
cd component-debugger
```

2. Install dependencies:
```bash
npm install
```

3. Build the extension:
```bash
npm run build
```

4. Load in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked"
   - Select the `build` folder from this project

## 📖 Usage

### Getting Started

1. **Open the Extension** - Click the Component Debugger icon in your Chrome toolbar
2. **Select Framework** - Choose between React or Vue mode
3. **Scan Components** - Click the "Scan" button to detect components
4. **Explore** - Click on any component in the tree to view its details

### Component Tree

The left panel shows your application's component hierarchy:

- **Expand/Collapse** - Click the arrows to navigate nested components
- **Select Component** - Click any component name to view details
- **Search** - Use the search bar to filter components by name

### Details Panel

The right panel displays detailed information:

- **Props** - All properties passed to the component
- **State** - Current state values (React) or data (Vue)
- **Performance** - Render count and timing information
- **Warnings** - Alerts for potential performance issues

### Performance Insights

Component Debugger helps you identify performance bottlenecks:

- ✅ **Green indicator** - Component performance is good
- ⚠️ **Yellow warning** - High render count detected (> 5 renders)
- **Render Time** - How long each component takes to render
- **Render Count** - Number of times a component has re-rendered

## 🎨 Screenshots

### Component Tree View
*Browse your entire component hierarchy with expandable nodes*

### Props & State Inspector
*Deep dive into component data with syntax-highlighted values*

### Performance Monitoring
*Track render counts and identify performance issues*

## 🛠️ Development

### Prerequisites

- Node.js 14+
- npm or yarn
- Chrome browser

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Project Structure

```
component-debugger/
├── src/
│   ├── components/     # React components
│   ├── utils/          # Helper functions
│   ├── manifest.json   # Chrome extension manifest
│   └── index.js        # Entry point
├── public/             # Static assets
├── build/              # Production build
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

## 🐛 Known Issues

- Currently supports client-side rendered apps only
- SSR applications require additional configuration
- Some component names may not display correctly with minified code

## 📋 Roadmap

- [ ] Support for Next.js and Nuxt.js
- [ ] Time-travel debugging
- [ ] State change history
- [ ] Export component data to JSON
- [ ] Performance profiling charts
- [ ] Custom theme support
- [ ] Firefox extension support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/component-debugger/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/component-debugger/discussions)
- **Twitter**: [@yourusername](https://twitter.com/yourusername)

## 🙏 Acknowledgments

- React DevTools for inspiration
- Vue DevTools for architecture ideas
- The open-source community for continuous support

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/component-debugger?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/component-debugger?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/component-debugger)

---

Made with ❤️ by [Your Name](https://github.com/yourusername)

**Star this repo if you find it helpful!** ⭐