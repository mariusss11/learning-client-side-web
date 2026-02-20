# HTML & CSS Tables Project

## 📌 Project Overview

This project demonstrates advanced usage of **HTML tables** combined
with **CSS styling** to recreate complex visual layouts using:

-   `rowspan`
-   `colspan`
-   Custom color styling
-   CSS variables
-   Flexbox layout for positioning multiple tables

The goal of the project was to reproduce structured graphical layouts
(similar to puzzle blocks) using only HTML tables and CSS.

------------------------------------------------------------------------

## 🧱 Structure of the Project

The document follows a correct HTML structure:

-   `<!DOCTYPE html>` declaration
-   `<html>` root element
-   `<head>` section containing:
    -   Meta tags
    -   Title
    -   Internal CSS styling
-   `<body>` section containing:
    -   A wrapper container
    -   Three separate styled tables

------------------------------------------------------------------------

## 🎨 Styling Approach

### 1️⃣ Global Styling

Basic page styling was applied: - Background color - Font family -
Padding - Center alignment for titles

### 2️⃣ Layout Container

A `.wrap` class was used with:

``` css
display: flex;
flex-direction: column;
gap: 34px;
align-items: center;
```

This ensures: - Tables are stacked vertically - Equal spacing between
them - Centered alignment

### 3️⃣ Card Design

Each table is wrapped inside a `.card` container with: - White
background - Padding - Rounded corners - Shadow effect

This creates a clean and modern appearance.

------------------------------------------------------------------------

## 📊 Table Construction Logic

### Core Rules Used

1.  Every table row must have a consistent total number of columns.
2.  `colspan` merges columns horizontally.
3.  `rowspan` merges rows vertically.
4.  When using `rowspan`, future rows must account for already occupied
    columns.

------------------------------------------------------------------------

## 🔢 Tabelul 1

This table demonstrates: - Complex grid structuring - Multiple rowspan
and colspan combinations - Color-based segmentation

It recreates a puzzle-style layout using mathematical column
consistency.

------------------------------------------------------------------------

## 🔢 Tabelul 2

This table focuses on: - Vertical symmetry - Centralized large blocks -
Controlled rowspan stacking

The structure ensures column balance even when large sections span
multiple rows.

------------------------------------------------------------------------

## 🔢 Tabelul 3

This table recreates a block-style layout consisting of:

-   Large central red area
-   Green side blocks
-   Bottom large red block
-   Two stacked green blocks in the center
-   Four small blue squares arranged in a 2x2 grid
-   Bottom-right green block

It was built by:

1.  Defining a fixed column width (8 columns total)
2.  Carefully calculating colspan values
3.  Using rowspan for large vertical blocks
4.  Ensuring every row maintains the same total column count

------------------------------------------------------------------------

## 🧮 CSS Variables

The project uses root variables:

``` css
:root {
  --u: 42px;
  --b: 2px;
}
```

These allow easy resizing of table cell dimensions without rewriting
multiple CSS rules.

------------------------------------------------------------------------

## 🎯 Key Learning Outcomes

Through this project, the following concepts were practiced:

-   Advanced table structuring
-   Grid logic and layout math
-   Visual composition using only tables
-   Flexbox layout alignment
-   Clean CSS organization
-   Debugging broken rowspan/colspan layouts

------------------------------------------------------------------------

## 🚀 Conclusion

This project demonstrates that complex visual layouts can be built using
pure HTML tables when the structure is mathematically consistent.

The most important rule when working with tables:

> The total number of columns per row must always remain consistent
> after applying colspan and rowspan.

By respecting this rule, stable and predictable layouts can be achieved.

------------------------------------------------------------------------
