---
title: BUILD
---

<!-- TEMPLATE: BUILD.template.md -->
<!-- BUILD Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out. Replace those placeholders with real paths, rules, and project constraints. INSTRUCTIONS FOR THE AI AGENT: This file serves as the system construction guide. It must document building blocks, dependencies installation commands, target directory structures, packing pipelines, and runtime execution. -->
<!-- markdownlint-disable MD013 -->

# BUILD

<!-- TOC location -->
## 🔍 Table of Contents
<!-- Maintained by script -->
- [BUILD](#a-build) <a id="toc-build"></a> ^toc-build
  - [📑 AI Primary Files](#a-aiprimaryfiles) <a id="toc-aiprimaryfiles"></a> ^toc-aiprimaryfiles
  - [📋 Prerequisites & Toolchain Setup](#a-prerequisitestoolchainsetup) <a id="toc-prerequisitestoolchainsetup"></a> ^toc-prerequisitestoolchainsetup
  - [🛠️ Build & Packaging Pipeline](#a-buildpackagingpipeline) <a id="toc-buildpackagingpipeline"></a> ^toc-buildpackagingpipeline
    - [📦 Key Components](#a-keycomponents) <a id="toc-keycomponents"></a> ^toc-keycomponents
  - [🚀 Execution & Packing Commands](#a-executionpackingcommands) <a id="toc-executionpackingcommands"></a> ^toc-executionpackingcommands
  - [🧪 Post-Build Verification Rules](#a-postbuildverificationrules) <a id="toc-postbuildverificationrules"></a> ^toc-postbuildverificationrules
  - [🚀 Go to...](#a-goto) <a id="toc-goto"></a> ^toc-goto

<a id="a-build"></a>[TOC](#toc-build)

## 📑 AI Primary Files
<a id="a-aiprimaryfiles"></a>[TOC](#toc-aiprimaryfiles)

- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔸 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

---

---

## 📋 Prerequisites & Toolchain Setup
<a id="a-prerequisitestoolchainsetup"></a>[TOC](#toc-prerequisitestoolchainsetup)

- **Compiler/Runtime:** Node.js v20.x or higher, npm v10.x or higher
- **Global System Variables Required:**
  - `NODE_ENV`: production / development
  - `OBSIDIAN_TEST_VAULT`: Path to local sandbox Obsidian testing vault plugin directory (Optional for automated local sync hot-swaps)

---

## 🛠️ Build & Packaging Pipeline
<a id="a-buildpackagingpipeline"></a>[TOC](#toc-buildpackagingpipeline)

- **Dependency Tree Resolution:** Resolves and validates node packages specified inside the manifest to minimize runtime sizes.
- **Source Linting & Verification:** Validates code conventions, style constraints, and syntax profiles before running bundling tools.
- **Module Bundling:** Bundles and structuralizes `main.js` from source paths using standard build dependencies.
- **Asset Manifest Generation:** Validates and matches local metadata definitions within `manifest.json`.

---

### 📦 Key Components
<a id="a-keycomponents"></a>[TOC](#toc-keycomponents)

- **`main.js`**: Core plugin entry point containing the coordinate synchronizer loops and element tracking event registers.
- **`manifest.json`**: Static configuration declaration containing the plugin ID, display name, minimum required application version, and access constraints.
- **`package.json`**: Project metadata definitions detailing build tool mappings, scripts, permissions, and dependencies.

---

## 🚀 Execution & Packing Commands
<a id="a-executionpackingcommands"></a>[TOC](#toc-executionpackingcommands)

- **Install Dependencies**:
  ```bash
  npm install
  ```
- **Local Dev Server / Watch Mode**:
  ```bash
  npm run dev
  ```
- **Verification / Linting**:
  ```bash
  npm run lint
  ```
- **Production Package Compilation**:
  ```bash
  npm run build
  ```

---

## 🧪 Post-Build Verification Rules
<a id="a-postbuildverificationrules"></a>[TOC](#toc-postbuildverificationrules)

- 1. **Size Checking:** Verify that the output `main.js` asset size remains within optimized footprint limits to ensure quick local client load initialization.
- 2. **Path Verification:** Check that `main.js` and `manifest.json` reside concurrently within the root workspace build distribution outputs.
- 3. **Smoke Test Command:** Validate initial structural integrity by testing the plug-in activation routines inside an isolated sandbox vault instance.

---

## 🚀 Go to...
<a id="a-goto"></a>[TOC](#toc-goto)

- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔸 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

<!-- TEMPLATE: BUILD.template.md -->
