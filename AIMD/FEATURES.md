---
title: FEATURES
---

<!-- TEMPLATE: FEATURES.template.md -->
<!-- FEATURES Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out. Replace those placeholders with real paths, rules, and project constraints. INSTRUCTIONS FOR THE AI AGENT: This file structures user-facing capabilities and functional features. Group related software parts into "Feature Groups" (with tags and anchors), then list them alphabetically under "All Features". -->
<!-- markdownlint-disable MD013 -->

# FEATURES

<!-- TOC location -->
## 🔍 Table of Contents
<!-- Maintained by script -->
- [FEATURES](#a-features) <a id="toc-features"></a> ^toc-features
  - [📑 AI Primary Files](#a-aiprimaryfiles) <a id="toc-aiprimaryfiles"></a> ^toc-aiprimaryfiles
  - [📦 Feature Groups](#a-featuregroups) <a id="toc-featuregroups"></a> ^toc-featuregroups
    - [🎨 1. Dynamic Visual Overlays](#a-1dynamicvisualoverlays) <a id="toc-1dynamicvisualoverlays"></a> ^toc-1dynamicvisualoverlays
    - [⏱️ 2. High-Frequency Coordinate Tracking](#a-2highfrequencycoordinatetracking) <a id="toc-2highfrequencycoordinatetracking"></a> ^toc-2highfrequencycoordinatetracking
    - [🚫 3. Focus Context Preservation](#a-3focuscontextpreservation) <a id="toc-3focuscontextpreservation"></a> ^toc-3focuscontextpreservation
  - [🗄️ All Features](#a-allfeatures) <a id="toc-allfeatures"></a> ^toc-allfeatures
    - [Active Selection Highlighting](#a-activeselectionhighlighting) <a id="toc-activeselectionhighlighting"></a> ^toc-activeselectionhighlighting
    - [Foreground Dialogue Suppression](#a-foregrounddialoguesuppression) <a id="toc-foregrounddialoguesuppression"></a> ^toc-foregrounddialoguesuppression
    - [Hover Tracking Feedback](#a-hovertrackingfeedback) <a id="toc-hovertrackingfeedback"></a> ^toc-hovertrackingfeedback
    - [Real-Time Dimension Snapping](#a-realtimedimensionsnapping) <a id="toc-realtimedimensionsnapping"></a> ^toc-realtimedimensionsnapping
    - [Workspace View Mutation Interception](#a-workspaceviewmutationinterception) <a id="toc-workspaceviewmutationinterception"></a> ^toc-workspaceviewmutationinterception
  - [📉 Deprecated / Removed Features](#a-deprecatedremovedfeatures) <a id="toc-deprecatedremovedfeatures"></a> ^toc-deprecatedremovedfeatures
  - [🚀 Go to...](#a-goto) <a id="toc-goto"></a> ^toc-goto

<a id="a-features"></a>[TOC](#toc-features)

Welcome to **File Tree Selector Hue Rotate**! This community plugin injects a dynamic, color-rotating border overlay container into the Obsidian interface to visually track selected or hovered files. By maintaining these visual boundaries on an isolated layout coordinate plane, the extension enhances navigational clarity without degrading sidebar scroll mechanics or clipping layout rendering views.

---

## 📑 AI Primary Files
<a id="a-aiprimaryfiles"></a>[TOC](#toc-aiprimaryfiles)

- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔸 [FEATURES.md](FEATURES.md)
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

## 📦 Feature Groups
<a id="a-featuregroups"></a>[TOC](#toc-featuregroups)

### 🎨 1. Dynamic Visual Overlays
<a id="a-1dynamicvisualoverlays"></a>[TOC](#toc-1dynamicvisualoverlays)
<a id="z1"></a>[TOC](#🔍-table-of-contents)

Coordinates the presentation, rendering cycles, and velocity adjustments of hardware-accelerated color frames over targeted file layout markers.

- **[Active Selection Highlighting](#active-selection-highlighting)** - Maps a 6-second resting color rotation loop around selected note nodes.
- **[Hover Tracking Feedback](#hover-tracking-feedback)** - Snaps a fast-spinning 2-second color boundary over hovered document items.

### ⏱️ 2. High-Frequency Coordinate Tracking
<a id="a-2highfrequencycoordinatetracking"></a>[TOC](#toc-2highfrequencycoordinatetracking)
<a id="z2"></a>[TOC](#🔍-table-of-contents)

Monitors workspace geometry layout shifts at a 60fps cadence to continuously anchor the overlay paths to the physical canvas coordinates.

- **[Real-Time Dimension Snapping](#real-time-dimension-snapping)** - Measures and matches active layout bounding boxes via 16ms evaluation cycles.
- **[Workspace View Mutation Interception](#workspace-view-mutation-interception)** - Recomputes coordinate grids automatically during structural panel movements or workspace window resizes.

### 🚫 3. Focus Context Preservation
<a id="a-3focuscontextpreservation"></a>[TOC](#toc-3focuscontextpreservation)
<a id="z3"></a>[TOC](#🔍-table-of-contents)

Intercepts foreground structural alerts and context settings panels to temporarily suppress background animations.

- **[Foreground Dialogue Suppression](#foreground-dialogue-suppression)** - Mutes animated border elements instantly whenever an interface dialogue panel enters the rendering area.

---

## 🗄️ All Features
<a id="a-allfeatures"></a>[TOC](#toc-allfeatures)

### Active Selection Highlighting
<a id="a-activeselectionhighlighting"></a>[TOC](#toc-activeselectionhighlighting)
<a id="a-active-selection-highlighting"></a>[TOC](#🔍-table-of-contents)
- **Group:** [Dynamic Visual Overlays](#z1)

Attaches a continuous, linear color-rotating border around the currently focused document row in the explorer tab. This element defaults to a resting 6-second rotation cycle using direct HSL transitions, providing an ambient navigational anchor that persists while typing or modifying note contents.

### Foreground Dialogue Suppression
<a id="a-foregrounddialoguesuppression"></a>[TOC](#toc-foregrounddialoguesuppression)
<a id="a-foreground-dialogue-suppression"></a>[TOC](#🔍-table-of-contents)
- **Group:** [Focus Context Preservation](#z3)

Continuously evaluates the active interface state for the presence of elements like settings popups, dropdown boxes, notice lists, and modal dialogue cards. If an interface overlay occupies active rendering space, the tracker forces target layout element opacity to zero to prevent visual clutter in the foreground window.

### Hover Tracking Feedback
<a id="a-hovertrackingfeedback"></a>[TOC](#toc-hovertrackingfeedback)
<a id="a-hover-tracking-feedback"></a>[TOC](#🔍-table-of-contents)
- **Group:** [Dynamic Visual Overlays](#z1)

Delegates continuous mouseover triggers on the `document.body` container layer to immediately trace when the cursor positions over a file explorer row. It instantly positions a bounding overlay box around the hovered item with a rapid 2-second rotation cycle. If the hovered item is also the current active choice, it activates a velocity escalation state to match the hover cadence.

### Real-Time Dimension Snapping
<a id="a-realtimedimensionsnapping"></a>[TOC](#toc-realtimedimensionsnapping)
<a id="a-real-time-dimension-snapping"></a>[TOC](#🔍-table-of-contents)
- **Group:** [High-Frequency Coordinate Tracking](#z2)

Uses a high-frequency tracking interval cycle running at a 16ms cadence (~60fps) to poll geometric layout metrics via `getBoundingClientRect()`. This loop maps physical position offsets (`top`, `left`, `width`, `height`) onto the floating overlay nodes, ensuring the glowing border layer remains synchronized without introducing drag or lag artifacts.

### Workspace View Mutation Interception
<a id="a-workspaceviewmutationinterception"></a>[TOC](#toc-workspaceviewmutationinterception)
<a id="a-workspace-view-mutation-interception)</a>[TOC](#🔍-table-of-contents)
- **Group:** [High-Frequency Coordinate Tracking](#z2)

Registers core workspace observer handlers hooked into Obsidian's internal `layout-change` structural state transition event framework. This pattern triggers an immediate recalculation sweep during panel snapping events, pane division shifts, and side ribbon toggle operations to prevent border coordinates from fracturing or breaking placement alignment.

---

## 📉 Deprecated / Removed Features
<a id="a-deprecatedremovedfeatures"></a>[TOC](#toc-deprecatedremovedfeatures)

- **[!] Nested Element CSS Injections:** Originally, border styling properties were injected directly into child classes inside the core file list hierarchy. This strategy was stripped due to inner container properties (`overflow: hidden`) clipping borders during horizontal scrolling.
- **Replacement Pattern:** Transitioned entire rendering layout architecture to an absolute floating model decoupled directly within `document.body` with mouse tracking pass-through filters (`pointer-events: none`).

---

## 🚀 Go to...
<a id="a-goto"></a>[TOC](#toc-goto)

- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔸 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

<!-- TEMPLATE: FEATURES.template.md -->
