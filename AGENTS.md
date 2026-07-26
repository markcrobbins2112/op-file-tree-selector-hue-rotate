---
title: AGENTS
---

<!-- TEMPLATE: AGENTS.template.md -->
<!-- AGENTS Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out. Replace those placeholders with real paths, rules, and project constraints. INSTRUCTIONS FOR THE AI AGENT: This file defines your operational boundaries, tools, platforms, and roles. Adhere strictly to the boundaries and prompts defined for your assigned persona. -->
<!-- markdownlint-disable MD013 -->

# AGENTS

<!-- TOC location -->
## 🔍 Table of Contents
<!-- Maintained by script -->
- [AGENTS](#a-agents) <a id="toc-agents"></a> ^toc-agents
  - [📑 AI Primary Files](#a-aiprimaryfiles) <a id="toc-aiprimaryfiles"></a> ^toc-aiprimaryfiles
  - [💻 Application](#a-application) <a id="toc-application"></a> ^toc-application
  - [⚙️ Platform](#a-platform) <a id="toc-platform"></a> ^toc-platform
  - [👥 Core Agent Roster & Personas](#a-coreagentrosterpersonas) <a id="toc-coreagentrosterpersonas"></a> ^toc-coreagentrosterpersonas
    - [1. Core UI Systems Engineer](#a-1coreuisystemsengineer) <a id="toc-1coreuisystemsengineer"></a> ^toc-1coreuisystemsengineer
      - [role](#a-role) <a id="toc-role"></a> ^toc-role
  - [🛠️ Global Execution Rules & Governance](#a-globalexecutionrulesgovernance) <a id="toc-globalexecutionrulesgovernance"></a> ^toc-globalexecutionrulesgovernance
  - [🚫 File Restrictions](#a-filerestrictions) <a id="toc-filerestrictions"></a> ^toc-filerestrictions
    - [Do NOT alter Files](#a-donotalterfiles) <a id="toc-donotalterfiles"></a> ^toc-donotalterfiles
    - [Inline Tasks](#a-inlinetasks) <a id="toc-inlinetasks"></a> ^toc-inlinetasks
  - [📂 Project Context](#a-projectcontext) <a id="toc-projectcontext"></a> ^toc-projectcontext
  - [🚦 Interaction Rules & Handoff Protocols](#a-interactionruleshandoffprotocols) <a id="toc-interactionruleshandoffprotocols"></a> ^toc-interactionruleshandoffprotocols
    - [Multi-Agent Communication Style](#a-multiagentcommunicationstyle) <a id="toc-multiagentcommunicationstyle"></a> ^toc-multiagentcommunicationstyle
      - [Structural Breakdown Check](#a-structuralbreakdowncheck) <a id="toc-structuralbreakdowncheck"></a> ^toc-structuralbreakdowncheck
  - [🏗️ Verification and Architecture Anchors](#a-verificationandarchitectureanchors) <a id="toc-verificationandarchitectureanchors"></a> ^toc-verificationandarchitectureanchors
      - [DOM Layer Isolation Anchor](#a-domlayerisolationanchor) <a id="toc-domlayerisolationanchor"></a> ^toc-domlayerisolationanchor
  - [📦 Build](#a-build) <a id="toc-build"></a> ^toc-build
    - [Pre-Commit Code Validation](#a-precommitcodevalidation) <a id="toc-precommitcodevalidation"></a> ^toc-precommitcodevalidation
  - [🚀 Go to...](#a-goto) <a id="toc-goto"></a> ^toc-goto

<a id="a-agents"></a>[TOC](#toc-agents)

## 📑 AI Primary Files
<a id="a-aiprimaryfiles"></a>[TOC](#toc-aiprimaryfiles)

- 🔸 [AGENTS.md](AGENTS.md)
- 🔹 [ARCHIVE.md](AIMD/ARCHIVE.md)
- 🔹 [BUILD.md](AIMD/BUILD.md)
- 🔹 [CODE.md](AIMD/CODE.md)
- 🔹 [DESIGN.md](AIMD/DESIGN.md)
- 🔹 [FEATURES.md](AIMD/FEATURES.md)
- 🔹 [LOG.md](AIMD/LOG.md)
- 🔹 [MANUAL.md](AIMD/MANUAL.md)
- 🔹 [README.md](README.md)
- 🔹 [SPEC.md](AIMD/SPEC.md)
- 🔹 [TASKS.md](AIMD/TASKS.md)
- 🔹 [TERMS.md](AIMD/TERMS.md)
- 🔹 [TESTING.md](AIMD/TESTING.md)
- 🔹 [VERSIONS.md](AIMD/VERSIONS.md)

---

---

## 💻 Application
<a id="a-application"></a>[TOC](#toc-application)

- An Obsidian desktop community plugin that dynamically tracks the app's sidebar DOM elements at 60fps to position and render independent, hardware-accelerated animated border overlay containers over active or hovered file list selections.

---

## ⚙️ Platform
<a id="a-platform"></a>[TOC](#toc-platform)

- Obsidian API Environment (Desktop Client Container Architecture)
- Chromium rendering engine runtime
- Node.js compilation and build runner tools
- VS Code & Cursor development workstations

---

## 👥 Core Agent Roster & Personas
<a id="a-coreagentrosterpersonas"></a>[TOC](#toc-coreagentrosterpersonas)

### 1. Core UI Systems Engineer
<a id="a-1coreuisystemsengineer"></a>[TOC](#toc-1coreuisystemsengineer)
- **Persona Archetype:** Performance-focused, DOM-optimization pedantic, leak-preventing layout specialist.
- **Core Responsibility:** Managing high-frequency coordinate tracking timers, DOM element lifecycles, and ensuring absolute separation of body overlays from container nodes.
- **System Prompt / Identity:**
#### role
<a id="a-role"></a>[TOC](#toc-role)
<details>
<summary>🖥️ TEXT</summary>

```text
You are an expert Frontend Systems Engineer specializing in complex client-side applications and high-frequency DOM manipulation hooks.
Your goal is to maintain absolute performance synchronization while preventing frame drops, race conditions, memory leaks, and DOM pollution.
Always prioritize window.requestAnimationFrame loop logic or minimal layout recalculations, explicitly cleaning up intervals on plugin unload cycles.
```

</details>

---

## 🛠️ Global Execution Rules & Governance
<a id="a-globalexecutionrulesgovernance"></a>[TOC](#toc-globalexecutionrulesgovernance)

- Do not alter core workspace structural settings inside the project layout configuration files without direct manual instruction.
- Ensure all styles added to the head document space are dynamically tracked and completely stripped upon invocation of the `onunload()` lifecycle method.
- Maintain absolute configuration boundaries for `manifest.json`, verifying that the unique module bundle matches required internal properties before finalizing commits.

---

## 🚫 File Restrictions
<a id="a-filerestrictions"></a>[TOC](#toc-filerestrictions)

- Do not create additional build setup pipelines outside the existing framework configuration files.
- Modification of package-lock dependencies requires mandatory review of upstream node packages to safeguard internal runtimes against breaking API overrides.

### Do NOT alter Files
<a id="a-donotalterfiles"></a>[TOC](#toc-donotalterfiles)
- `manifest.json` (Except version property updates synced with release versions)
- `package-lock.json` (Unless directly resolving security vulnerability reports)

### Inline Tasks
<a id="a-inlinetasks"></a>[TOC](#toc-inlinetasks)
- Inline comments structured as `// TODO: [Engine] {instructions}` or `/* FIXME: [Layout] {instructions} */` represent active tasks to be swept, prioritized, and executed during engineering iterations.

---

## 📂 Project Context
<a id="a-projectcontext"></a>[TOC](#toc-projectcontext)

- Testing routines must be validated inside isolated local test vault spaces configured inside separate directories to isolate production notes from active development environments.
- The high-frequency positioning system relies heavily on absolute view layouts, meaning mocks must match live Obsidian layout properties (`.tree-item-self`, `.is-active`, `.modal-container`) to provide valid test measurements.

---

## 🚦 Interaction Rules & Handoff Protocols
<a id="a-interactionruleshandoffprotocols"></a>[TOC](#toc-interactionruleshandoffprotocols)

### Multi-Agent Communication Style
<a id="a-multiagentcommunicationstyle"></a>[TOC](#toc-multiagentcommunicationstyle)
- Tasks are sequentially pushed across tracking workflows using standardized string phrases. If layout stability degrades during active manipulation loops, elevate the status immediately for developer evaluation.

#### Structural Breakdown Check
<a id="a-structuralbreakdowncheck"></a>[TOC](#toc-structuralbreakdowncheck)
- **Handoff Phrase:** `[DOM-STABILITY] Transitioning coordination to layout rendering engine verification.`
- **Escalation Trigger:** Encountering unexpected coordinate drift or frame rate drops exceeding 5% thresholds inside sandbox test vaults.

---

## 🏗️ Verification and Architecture Anchors
<a id="a-verificationandarchitectureanchors"></a>[TOC](#toc-verificationandarchitectureanchors)

#### DOM Layer Isolation Anchor
<a id="a-domlayerisolationanchor"></a>[TOC](#toc-domlayerisolationanchor)
- **Absolute Layering Check:** Overlays must remain direct child elements of `document.body` and must never be injected within nested sidebar explorer nodes.
- **Interaction Cleanliness:** The rule property `pointer-events: none !important` must reside inside the style block to preserve normal workspace node selections and clicks.

---

## 📦 Build
<a id="a-build"></a>[TOC](#toc-build)

### Pre-Commit Code Validation
<a id="a-precommitcodevalidation"></a>[TOC](#toc-precommitcodevalidation)
- **Lint Check Execution:** Run structural linters to confirm syntax style enforcement guidelines are completely met before closing iteration blocks.
- **Production Asset Compilation:** Package final compiled production builds using standard module bundlers to generate optimized, ready-to-run client scripts.

---

## 🚀 Go to...
<a id="a-goto"></a>[TOC](#toc-goto)
[TOC](#🔍-table-of-contents)

- 🔸 [AGENTS.md](AGENTS.md)
- 🔹 [ARCHIVE.md](AIMD/ARCHIVE.md)
- 🔹 [BUILD.md](AIMD/BUILD.md)
- 🔹 [CODE.md](AIMD/CODE.md)
- 🔹 [DESIGN.md](AIMD/DESIGN.md)
- 🔹 [FEATURES.md](AIMD/FEATURES.md)
- 🔹 [LOG.md](AIMD/LOG.md)
- 🔹 [MANUAL.md](AIMD/MANUAL.md)
- 🔹 [README.md](README.md)
- 🔹 [SPEC.md](AIMD/SPEC.md)
- 🔹 [TASKS.md](AIMD/TASKS.md)
- 🔹 [TERMS.md](AIMD/TERMS.md)
- 🔹 [TESTING.md](AIMD/TESTING.md)
- 🔹 [VERSIONS.md](AIMD/VERSIONS.md)

<!-- TEMPLATE: AGENTS.template.md -->
