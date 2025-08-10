# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static UI documentation website showcasing a design system's color palette. It's built with HTML, CSS, and JavaScript, using TailwindCSS for styling.

## Architecture

- **index.html**: Main documentation page displaying semantic and base color tokens
- **styles.css**: Custom CSS styles (currently empty, relies on TailwindCSS)  
- **script.js**: JavaScript for interactivity (minimal implementation)
- **package.json**: Project configuration with TailwindCSS, PostCSS, and Autoprefixer

## Technology Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Styling**: TailwindCSS v4.1.11 (loaded via CDN)
- **Build Tools**: PostCSS with Autoprefixer
- **Package Manager**: npm

## Common Commands

Since this is a static website with minimal build setup:

```bash
# Install dependencies
npm install

# Open in browser (no build process needed)
open index.html
```

## Development Notes

- Colors are hardcoded in HTML using TailwindCSS classes
- No build process or hot reload - refresh browser manually to see changes
- Accessibility ratings (AA) are displayed but not dynamically calculated
- Responsive design uses TailwindCSS grid system
- Currently displays Tailwind's default color palette values