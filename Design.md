# Design Language

This document outlines the core design principles to ensure consistency across the entire portfolio.

## Aesthetics
- **Style**: Minimalist, Swiss-inspired, highly structured. It should feel technical and system-oriented.
- **Theme**: Dark Mode (Black and Red).

## Colors
- **Background**: Deep Black (`#050505` or `#000000`).
- **Text (Primary)**: Off-white / Light Gray (`#ededed`) for readability.
- **Text (Secondary)**: Medium Gray (`#888888`) for less important details.
- **Accents**: Vibrant Red (`#ff2a2a` or `#e60000`). Used for hover states, structural grid lines, active elements, and CTA buttons.

## Typography
- **Primary Font**: A clean, modern sans-serif (e.g., Inter, Space Grotesk, or Roboto).
- **Hierarchy**: Strong contrast between large, bold section headers and lighter description text.
- **Accents**: Use monospaced fonts for technical details, indexes (e.g., `01 / 05`), and timestamps to enhance the technical feel.

## Layout & Grid
- **Grid System**: The design relies on rigid vertical columns. The grid lines themselves should be visible (styled as thin red or subtle gray borders).
- **Structure**:
  - **Left Column**: Acts as a persistent index (e.g., `01 / Signal`).
  - **Middle Column**: Holds the main content and descriptions.
  - **Right Column**: Holds supplementary data (like timestamps, roles, or locations).

## Interactions & Animations
- **Clean Default State**: The default view should be sparse.
- **Hover States**: Hovering over interactive elements (like project names) should trigger vertical shifts, expand to show hidden context tags, and change colors to the red accent.
- **Menu**: A minimalist floating button that triggers a stark, full-screen overlay menu.

## Reference: Specia1ne Design Analysis

Based on our initial scan of the portfolio website [specia1ne.com](https://specia1ne.com/), here is a detailed breakdown of its visual design and section layout that inspired this project.

### Visual Design Elements
* **Color Palette**: Highly restrained and high contrast. (Original used off-white/cream with stark dark charcoal/black text. Our version adapts this to Black and Red).
* **Typography**: The primary driver of the design is a clean, modern sans-serif typeface. Bold headers create a strong hierarchy against lighter description blocks. It cleverly integrates monospaced elements (like `01 / 05` and `[ Let's talk ]`) to give it a structured, slightly raw or technical feel.
* **Layout & Grid**: A very rigid and visible grid system. The content is divided into vertical columns. The left column acts as a persistent index (`01 / Signal`, `02 / Selected Work`), the middle holds the main content, and the right holds supplementary data (like timestamps).
* **Animations & Interactions**:
    * **Hover States**: Hovering over project names in the "Selected Work" list triggers vertical alignment shifts and expands to show context tags.
    * **Overlay Menu**: A floating menu button opens a high-contrast overlay screen displaying large bold links.
    * **Dynamic Elements**: The hero and footer sections feature a dynamic clock widget.

### Section Breakdown

````carousel
![Hero Section](C:/Users/piyus/.gemini/antigravity-ide/brain/11e53fcc-2e35-4c62-b216-19af424067b7/landing_page_hero_1784914409596.png)
<!-- slide -->
![Selected Work](C:/Users/piyus/.gemini/antigravity-ide/brain/11e53fcc-2e35-4c62-b216-19af424067b7/transition_hero_to_work_1784914476648.png)
<!-- slide -->
![Hover State Interaction](C:/Users/piyus/.gemini/antigravity-ide/brain/11e53fcc-2e35-4c62-b216-19af424067b7/hover_cryptowl_1784914484734.png)
<!-- slide -->
![Menu Overlay](C:/Users/piyus/.gemini/antigravity-ide/brain/11e53fcc-2e35-4c62-b216-19af424067b7/menu_opened_1784914454117.png)
````

#### 01 / Signal (Hero Section)
A minimal introduction statement focused on shaping digital products. It sets the tone immediately with its dynamic clock widget and a stark CTA button.

#### 02 / Selected Work
A chronological list of active projects. The projects are presented as vertically stacked typographic links that reveal extra information/tags when hovered over, keeping the default state extremely clean.

#### 03 / Practice / System
An informational section that breaks down the philosophy into "Surface" (interface design, rhythm, interactions) and "System" (underlying logic, architecture, speed).

#### 04 / About
A conceptual section representing the workflow as "One continuous line" visually linking the initial "IDEA" to the final "WORKING FORM".

#### 05 / Contact
The footer maintains the minimalist structure, containing a large CTA, email links, location info, and standard privacy/copyright details.
