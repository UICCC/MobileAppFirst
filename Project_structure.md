# Project Structure - MyFirstApp

This document describes the structure of the React Native project created for **CPAN 213 - Cross-Platform Mobile Application Development**.

---

## Root Directory


---

## Key Files and Folders

### 1. **android/**
- Android-specific project files.
- Includes Gradle build scripts, app manifests, and native modules.

### 5. **ios/**
- iOS-specific project files.
- Includes Xcode project, Info.plist configuration, and native modules.

### 6. **node_modules/**
- Auto-generated folder containing all installed dependencies.
- Not manually modified by the developer.

### 2. **index.js**
- Entry point of the application.
- Registers the root component (`App`) with the React Native runtime.

### 3. **package.json**
- Contains project metadata, scripts, and dependencies.
- Example: lists React Native, React, and third-party libraries.




### 7. **src/**
- Custom folder for organizing project code.
- Typically contains:
  - `components/` → Reusable UI components
  - `screens/` → App screens
  - `assets/` → Images, fonts, icons
  - `utils/` → Helper functions

### 8. **README.md**
- Documentation file for project setup, usage, and developer notes.

