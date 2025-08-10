# Kombai Integration Guide

This guide will help you connect Kombai to your UI documentation project.

## What is Kombai?

Kombai is an AI-powered design-to-code tool that converts Figma designs into production-ready HTML, CSS, and JavaScript code.

## Setup Options

### Option 1: Web Interface (Recommended for Beginners)

1. **Visit Kombai**: Go to [kombai.com](https://kombai.com)
2. **Create Account**: Sign up for a free account
3. **Connect Figma**: 
   - Click "Connect Figma" 
   - Authorize Kombai to access your Figma files
4. **Select Design**: Choose the frame or component you want to convert
5. **Generate Code**: Click "Generate Code" and wait for the conversion
6. **Download**: Save the generated code to your `generated-components/` folder

### Option 2: API Integration (For Developers)

1. **Get API Key**: Sign up at kombai.com and get your API key
2. **Configure**: Update `kombai-config.json` with your API key and Figma file ID
3. **Use the Integration**: Use the provided JavaScript helper to load components

## How to Use with This Project

### Step 1: Generate Code with Kombai

1. Open your Figma design
2. Select the component you want to convert
3. Use Kombai to generate the code
4. Download the generated files

### Step 2: Add to Your Documentation

1. **Place files**: Put the generated files in the `generated-components/` folder
2. **Update documentation**: Add the component to your HTML documentation
3. **Test**: Open your documentation to see the component

### Step 3: Example Usage

```javascript
// Load a Kombai-generated component
const component = kombai.loadComponent('my-button');

// Add it to your documentation
kombai.addToDocumentation('my-button', document.getElementById('component-container'));

// Generate documentation automatically
const docs = kombai.generateDocumentation('my-button');
document.getElementById('docs-container').innerHTML = docs;
```

## File Structure

```
ui-documentation/
├── index.html                 # Main documentation
├── styles.css                 # Your styles
├── script.js                  # Your scripts
├── kombai-integration.js      # Kombai helper
├── kombai-config.json         # Kombai configuration
├── generated-components/      # Kombai-generated code
│   ├── component1.html
│   ├── component1.css
│   └── component1.js
└── KOMBAI-SETUP.md           # This file
```

## Tips for Best Results

1. **Clean Figma Designs**: Make sure your Figma components are well-organized
2. **Use Semantic Names**: Name your Figma layers clearly
3. **Test Responsively**: Check how components look on different screen sizes
4. **Customize Output**: Modify the generated code to match your design system

## Troubleshooting

### Common Issues:

1. **Code not generating**: Check your Figma file permissions
2. **Styling issues**: Make sure Tailwind CSS is loaded
3. **Component not loading**: Check file paths in `generated-components/`

### Getting Help:

- Kombai Documentation: [docs.kombai.com](https://docs.kombai.com)
- Support: Contact Kombai support through their website

## Next Steps

1. Try generating a simple button component
2. Add it to your documentation
3. Customize the styling to match your design system
4. Generate more complex components as needed

Happy coding! 🚀
