# Web Development Lab - Complete Course

A comprehensive collection of web development laboratory assignments covering HTML and CSS fundamentals, completed as part of the Web Development course at CEITI (Technical College).

**Author:** Carchilan Marius  
**Year of Study:** Year 3  
**College:** CEITI (Technical College)  
**Language:** Romanian/English

---

## 📋 Project Overview

This project demonstrates progressive learning through four interconnected web development laboratories. Starting from basic HTML structure, the assignments build toward advanced CSS styling techniques. Each lab builds upon previous concepts while introducing new skills.

---

## 🎯 Learning Objectives

Through these labs, the following skills are demonstrated:

- ✅ HTML semantic markup and proper document structure
- ✅ HTML form elements and user input handling
- ✅ CSS styling with inline and external stylesheets
- ✅ Advanced typography and font manipulation
- ✅ HTML navigation and linking structures
- ✅ CSS selectors, properties, and cascading
- ✅ Professional web page design
- ✅ Responsive spacing and visual hierarchy

---

## 🧪 Laboratory Assignments - Complete Overview


## **LAB 1: Personal Introduction Page**

### 📝 Overview
Create a personal profile page with structured HTML, demonstrating basic markup and document organization.

### 🎯 Objectives
- ✅ Create semantic HTML structure with proper hierarchy
- ✅ Use heading elements (h1, h2, h3) correctly
- ✅ Implement ordered and unordered lists
- ✅ Apply inline CSS styling with `<style>` tags
- ✅ Create internal navigation to other labs
- ✅ Understand HTML document structure

### 📋 Content Included

**Personal Information:**
- Name: Carchilan Marius
- Year of Study: Year 3
- College: CEITI Technical College

**Sections:**
- Programming experience (C++, Java, C#, HTML, CSS, JavaScript - Intermediate to Advanced level)
- Preferred languages (C++ and Java)
- Current semester courses (OOP, Databases, Networks)
- Course expectations and goals
- Expected grade: 9/10
- Personal interests (programming, technology, cryptocurrencies, web development)

### 💻 HTML Code Example

```html
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Laborator 8 - Pagina personala</title>
    <link rel="stylesheet" href="laborator8.css">
    <style>
        p {
            font-family: Arial;
        }
        .divider {
            margin: 20px 0;
            border-top: 3px solid black;
        }
    </style>
</head>
<body>
    <h1 style="text-decoration: underline; font-family: 'Times New Roman';">
        Carchilan Marius
    </h1>
    
    <p>Anul de studiu: Anul 3</p>
    <p>Experiența în programare: Am programat în C++, Java, C#, HTML, CSS și puțin JavaScript. Nivelul meu este mediu spre avansat.</p>
    <p>Limbajul de programare preferat: C++ și Java</p>
    
    <div class="divider"></div>
    
    <h2>Laboratoarele din acest semestru</h2>
    <ul>
        <li><a href="lab8_1.html">Laboratorul 1</a></li>
        <li><a href="lab8_2.html">Laboratorul 2</a></li>
        <li><a href="lab8_3.html">Laboratorul 3</a></li>
    </ul>
</body>
</html>
```

### 🎨 Styling Features

**CSS Classes:**
- `.divider` - Visual separator with 3px solid black border and 20px margins

**Typography:**
- Main heading: Times New Roman, underlined
- Paragraph text: Arial font
- Consistent spacing with margins

### 🎓 Key Concepts

| Concept | Implementation |
|---------|-----------------|
| **HTML Structure** | DOCTYPE, meta tags, lang attributes |
| **Semantics** | Proper heading hierarchy (h1, h2, h3) |
| **Lists** | Unordered lists for navigation |
| **Linking** | Internal page navigation with `<a>` tags |
| **Styling** | Inline CSS with `<style>` tags |

### ✨ Features Demonstrated
- 🎯 Clear information architecture
- 🔗 Navigation links between labs
- 📋 Semantic HTML markup
- 🎨 Basic CSS styling
- 📱 Readable typography

---

## **Student Registration Form**

### 📝 Overview
Build an interactive HTML form demonstrating various input types for collecting structured student data.

### 🎯 Objectives
- ✅ Create functional HTML forms with `<form>` element
- ✅ Implement multiple input types (text, radio, select, checkbox)
- ✅ Design user-friendly form layout
- ✅ Use proper form semantics and field naming
- ✅ Implement form submission and reset functionality
- ✅ Understand form data collection

### 📋 Form Fields

**Text Inputs:**
- Nume (Name) - Single-line text input
- Prenume (Surname) - Single-line text input

**Radio Buttons (Year of Study - Single Selection):**
- Anul 1 (Year 1)
- Anul 2 (Year 2)
- Anul 3 (Year 3)
- Anul 4 (Year 4)

**Dropdown Menu (Specialization):**
- Calculatoare (Computers)
- Tehnologia Informației (Information Technology)

**Checkbox:**
- Îmi place programarea (I like programming)

**Action Buttons:**
- Trimite (Submit) - POST method
- Reset - Clear all fields

### 💻 HTML Code Example

```html
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Laborator 8 - Formular</title>
</head>
<body>
    <h1>Formular Student</h1>
    
    <form method="post">
        Nume:<br>
        <input type="text" name="nume"><br><br>
        
        Prenume:<br>
        <input type="text" name="prenume"><br><br>
        
        Anul de studiu:<br>
        <input type="radio" name="an" value="1"> Anul 1<br>
        <input type="radio" name="an" value="2"> Anul 2<br>
        <input type="radio" name="an" value="3"> Anul 3<br>
        <input type="radio" name="an" value="4"> Anul 4<br><br>
        
        Specialitatea:<br>
        <select name="specialitate">
            <option>Calculatoare</option>
            <option>Tehnologia Informației</option>
        </select>
        <br><br>
        
        <input type="checkbox" name="ii_place_programarea">
        Îmi place programarea
        
        <br><br>
        
        <input type="submit" value="Trimite">
        <input type="reset" value="Reset">
    </form>
</body>
</html>
```

### 📊 Form Data Structure

When submitted, the form generates this data structure:
```
nume: "Marius"
prenume: "Carchilan"
an: "3"
specialitate: "Calculatoare"
ii_place_programarea: "on" (if checked)
```

### 🎓 Form Elements Reference

| Element | Purpose | Type Attribute |
|---------|---------|-----------------|
| `<input type="text">` | Single-line text | name, value |
| `<input type="radio">` | Single choice | name, value (grouped) |
| `<input type="checkbox">` | Multiple selections | name, checked |
| `<select>` | Dropdown menu | name, multiple |
| `<option>` | Dropdown option | value, selected |
| `<input type="submit">` | Submit button | value |
| `<input type="reset">` | Reset button | value |

### 📋 Form Attributes

- **name** - Field identifier when submitted
- **value** - Data sent to server or radio/checkbox value
- **type** - Input type (text, radio, checkbox, submit, reset)
- **method** - Form submission method (GET, POST)

### ✨ Features Demonstrated
- 🎯 Complete student registration system
- 🔘 Radio button grouping
- 📝 Text input fields
- 📋 Dropdown menu implementation
- ☑️ Checkbox functionality
- 🔄 Submit and reset buttons

### 🚀 How to Use
1. Open in browser
2. Fill form fields
3. Select year and specialization
4. Check preferences
5. Click "Trimite" to submit
6. Click "Reset" to clear fields

---

## **CSS External Stylesheets & Form Styling**

### 📝 Overview
Apply professional CSS styling using external stylesheets, building on the form from Lab 2.

### 🎯 Objectives
- ✅ Create and link external CSS stylesheets
- ✅ Apply CSS styling to form elements
- ✅ Implement typography enhancements
- ✅ Practice CSS selectors (element, class, ID)
- ✅ Learn CSS cascading and specificity
- ✅ Style list elements
- ✅ Improve overall visual presentation

### 📋 Content

**Page Structure:**
- Title: "Laborator CSS"
- Subtitle: "Exemplu de utilizare CSS"
- Description paragraph
- Complete student registration form (from Lab 2)
- Section: Top favorite movies (Ordered list)
- Navigation: Back link to Lab 1

**Movie List:**
1. Interstellar
2. The Dark Knight
3. Inception
4. Avatar
5. Gladiator

### 💻 HTML Code Example

```html
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Laborator 8 - CSS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Laborator CSS</h1>
    <h3>Exemplu de utilizare CSS</h3>
    <p>Această pagină folosește un fișier CSS extern pentru formatarea elementelor.</p>
    
    <form method="post">
        Nume:<br>
        <input type="text" name="nume"><br><br>
        <!-- More form fields... -->
    </form>
    
    <h3>Top filme preferate</h3>
    <ol>
        <li>Interstellar</li>
        <li>The Dark Knight</li>
        <li>Inception</li>
        <li>Avatar</li>
        <li>Gladiator</li>
    </ol>
    
    <a href="lab8_1.html">Înapoi la prima pagină</a>
</body>
</html>
```

### 🎨 CSS Concepts

**Why External Stylesheets?**
- 📦 Separation of concerns (HTML and CSS separate)
- ♻️ Reusability (one CSS file for multiple pages)
- 🚀 Performance (browser caches CSS file)
- 🔧 Maintainability (easier to update)
- 🌐 Scalability (works for large projects)

### 💻 CSS Selectors

```css
/* Element Selector */
h1 { color: #333; font-size: 2em; }

/* Class Selector */
.form-section { margin-bottom: 20px; }

/* ID Selector */
#main-form { border: 1px solid #ccc; padding: 20px; }

/* Descendant Selector */
form input { padding: 8px; }

/* Multiple Selectors */
h1, h2, h3 { font-family: Arial, sans-serif; }
```

### 🎨 Common CSS Properties

| Property | Purpose | Example |
|----------|---------|---------|
| `color` | Text color | `color: #333;` |
| `font-size` | Text size | `font-size: 16px;` |
| `font-family` | Font choice | `font-family: Arial, sans-serif;` |
| `margin` | External spacing | `margin: 10px 0;` |
| `padding` | Internal spacing | `padding: 10px 15px;` |
| `border` | Element border | `border: 1px solid #ccc;` |
| `background-color` | Background | `background-color: #f9f9f9;` |
| `line-height` | Line spacing | `line-height: 1.6;` |

### 📊 Form Styling Best Practices

```css
/* Input Fields */
input[type="text"],
input[type="email"],
textarea {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-family: inherit;
}

input[type="text"]:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 5px rgba(0, 102, 204, 0.3);
}

/* Buttons */
input[type="submit"],
input[type="reset"] {
    padding: 10px 20px;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

input[type="submit"]:hover {
    background-color: #0052a3;
}
```

### ✨ Features Demonstrated
- 🔗 External stylesheet linking
- 🎯 CSS selectors
- 🎨 Form element styling
- 📖 Typography enhancement
- 📏 Spacing and margins
- 📋 List styling

### 🚀 How to Use
1. Ensure `style.css` is in same directory as HTML
2. Open HTML file in browser
3. CSS is automatically applied
4. Modify CSS to see changes
5. Use browser DevTools (F12) to inspect styles

### 🔧 Debugging Tips

**CSS Not Applying?**
- Check file is linked: `<link rel="stylesheet" href="style.css">`
- Verify filename matches exactly (case-sensitive)
- Check CSS file is in same directory
- Look for typos in selectors
- Use browser DevTools (F12) to inspect

---

## **Advanced CSS Styling & Typography**

### 📝 Overview
Explore advanced CSS techniques focusing on typography manipulation, custom styling, and professional design patterns.

### 🎯 Objectives
- ✅ Implement advanced typography techniques
- ✅ Use custom fonts and font weights
- ✅ Apply list styling with images
- ✅ Control line-height and spacing
- ✅ Create responsive font sizing
- ✅ Implement CSS pseudo-classes
- ✅ Develop professional design aesthetics

### 📋 Content

**Main Section:**
- Text: "Astazi este vineri" (Today is Friday) - repeated for dramatic effect
- Styling with Georgia serif font, italic, bold (600 weight), xx-large size, line-height 2.5

**Author Section:**
- Text: "Carchilan Marius"
- CSS class styling applied

**Lists:**
- Ordered list (numbered): Ceai, Cafea, Coca Cola
- Unordered list (custom styling): Same items with custom image markers

### 💻 HTML & CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .f {
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-style: italic;
            font-weight: 600;
            line-height: 2.5;
            font-size: xx-large;
        }

        .u2 {
            list-style-type: disc;
            list-style-image: url("images/tree.png");
            list-style-position: inside;
        }
    </style>
</head>
<body>
    <p class="f">
        Astazi este
        vineri
        vineri
        vineri
        (repeated)
    </p>
    
    <p class="for">Carchilan Marius</p>

    <ol>
        <li>Ceai</li>
        <li>Cafea</li>
        <li>Coca Cola</li>
    </ol>

    <ul class="u2">
        <li>Ceai</li>
        <li>Cafea</li>
        <li>Coca Cola</li>
    </ul>
</body>
</html>
```

### 🎨 Advanced CSS Concepts

**Font Properties:**

```css
.f {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;           /* Italic slant */
    font-weight: 600;             /* Semi-bold */
    font-size: xx-large;          /* Large size */
    line-height: 2.5;             /* Tall line spacing */
}
```

**Font Stack Logic:**
- Primary: Georgia (most preferred)
- Secondary: Times New Roman (fallback)
- Tertiary: Times (alternative)
- Generic: serif (system default)

### 📖 Font Properties Reference

| Property | Purpose | Values |
|----------|---------|--------|
| `font-family` | Typeface | Font names, serif/sans-serif |
| `font-style` | Text slant | normal, italic, oblique |
| `font-weight` | Text thickness | 100-900, bold, normal |
| `font-size` | Text size | px, em, rem, keywords |
| `line-height` | Line spacing | 1.5, 2.5, %, em |

### 🎯 Font Sizes Keywords

```css
xx-small    /* Very small */
x-small     /* Extra small */
small       /* Small */
medium      /* Medium (default) */
large       /* Large */
x-large     /* Extra large */
xx-large    /* Very large */

/* Relative Keywords */
smaller     /* Smaller than parent */
larger      /* Larger than parent */

/* Units */
px          /* Pixels (fixed) */
em          /* Relative to parent font size */
rem         /* Relative to root font size */
%           /* Percentage of parent */
```

### 🎨 List Styling

```css
.u2 {
    list-style-type: disc;              /* Bullet style */
    list-style-image: url("images/tree.png");  /* Custom image */
    list-style-position: inside;        /* Position relative to text */
}
```

**List Style Types:**
- disc (filled circle)
- circle (empty circle)
- square (filled square)
- decimal (1, 2, 3...)
- lower-alpha (a, b, c...)
- upper-alpha (A, B, C...)
- lower-roman (i, ii, iii...)
- upper-roman (I, II, III...)

**Shorthand Syntax:**
```css
/* Expanded */
.list {
    list-style-type: square;
    list-style-image: url("marker.png");
    list-style-position: inside;
}

/* Shorthand */
.list {
    list: square url("marker.png") inside;
}
```

### 📏 Line-Height Control

```css
.f {
    line-height: 2.5;  /* 2.5x font size */
}

/* Different units */
line-height: 1.5;       /* Unitless (most common) */
line-height: 24px;      /* Fixed pixels */
line-height: 150%;      /* Percentage */
line-height: 1.5em;     /* Relative to element */
```

**Line-Height Effects:**
- `1.0` - No space (cramped)
- `1.5` - Standard readability
- `2.0` - Double spacing
- `2.5` - Very open (artistic)

### 🎓 Font Weights

```
100 - Thin
200 - Extra Light
300 - Light
400 - Normal (default)
500 - Medium
600 - Semi Bold (used in Lab 4)
700 - Bold
800 - Extra Bold
900 - Black
```

### 🎨 Design Principles Demonstrated

1. **Typographic Hierarchy**
   - Large, italic text draws attention
   - High line-height creates dramatic spacing
   - Font-weight variation creates emphasis
   - Font families establish mood

2. **Visual Impact**
   - Serif fonts convey sophistication
   - Italic styling suggests emphasis
   - Large sizing demands attention
   - Spacing affects emotion

3. **List Design**
   - Custom markers personalize lists
   - List positioning controls flow
   - Consistent styling maintains unity
   - Images enhance visual interest

### ✨ Features Demonstrated
- 🎯 Advanced typography
- 🖼️ Custom list markers with images
- 📏 Spacing control (line-height)
- 🎨 Professional aesthetics
- 🔤 Font stacking strategy
- 🎭 Styling effects (italic, bold, large)

### 🚀 How to Use
1. Open in browser
2. Observe typographic effects
3. Inspect `<style>` section
4. Modify properties to experiment
5. Try different fonts and sizes

### 💡 Practical Applications

**Blog Headers**
- Dramatic typography for titles
- Custom fonts for branding

**Marketing Pages**
- Large, bold text for calls-to-action
- Custom markers for benefits

**Portfolios**
- Italic text for quotes
- Custom fonts for personality

**News Sites**
- Serif fonts for traditional appearance
- High line-height for readability

---

## 🛠️ Technologies Used

| Technology | Purpose | Coverage |
|-----------|---------|----------|
| **HTML5** | Semantic markup and structure | All labs |
| **CSS3** | Styling and visual presentation | Labs 1, 3, 4 |
| **Forms** | User input and data collection | Lab 2 |
| **Typography** | Font management and styling | Labs 1, 3, 4 |

---

## 📊 Skills Progression

### Lab 1: Foundations
- HTML semantic markup
- Heading hierarchy
- Lists and navigation
- Basic inline styling

### Lab 2: Interactivity
- Form elements and structure
- Input types (text, radio, select, checkbox)
- Form submission and reset
- Data structure understanding

### Lab 3: Professional Styling
- External stylesheets
- CSS selectors and properties
- Cascading and specificity
- Form enhancement
- Visual hierarchy

### Lab 4: Advanced Design
- Typography mastery
- Font selection and stacking
- Advanced CSS properties
- Custom styling effects
- Professional aesthetics

---

## 🎓 Learning Outcomes

By completing all four labs, you demonstrate:

1. **HTML Fundamentals** ✓
   - Proper document structure
   - Semantic elements
   - Form creation and structure
   - Valid HTML syntax

2. **CSS Expertise** ✓
   - Inline and external stylesheets
   - Selectors and properties
   - Typography and fonts
   - Advanced styling techniques

3. **Form Design** ✓
   - User input handling
   - Proper field design
   - Submission and validation
   - Professional appearance

4. **Web Design** ✓
   - Visual hierarchy
   - Information architecture
   - Professional aesthetics
   - User experience

5. **Code Organization** ✓
   - Separation of concerns
   - Clean, readable code
   - Proper file structure
   - Maintainability

---

## 🚀 How to Use These Files

1. **Open in Browser:** Double-click any HTML file (no server required)
2. **Navigate:** Use links to move between labs
3. **View Source:** Right-click → "View Page Source"
4. **Inspect:** Right-click element → "Inspect" (F12) to see CSS
5. **Edit:** Modify HTML/CSS and refresh to see changes

### File Usage
```
lab8_1.html (or index.html)  → Lab 1: Personal page
lab8_2.html                   → Lab 2: Student form
lab8_3.html                   → Lab 3: CSS styling
images/tree.png               → Custom list marker (Lab 4)
laborator8.css                → Stylesheet
style.css                      → Additional styles
```

---

## 💡 Key Concepts Summary

### HTML Elements
- `<form>` - Form container
- `<input>` - Form fields (text, radio, checkbox, submit)
- `<select>` / `<option>` - Dropdown menus
- `<h1>` to `<h6>` - Headings
- `<p>` - Paragraphs
- `<a>` - Links
- `<ul>` / `<ol>` / `<li>` - Lists
- `<div>` - Content grouping

### CSS Properties
- `color` - Text color
- `font-family` - Font selection
- `font-size` - Text size
- `font-weight` - Text thickness
- `font-style` - Italic/oblique
- `margin` - External spacing
- `padding` - Internal spacing
- `line-height` - Line spacing
- `border` - Element outline
- `list-style-*` - List customization

### Form Attributes
- `name` - Field identifier
- `value` - Field value
- `type` - Input type
- `method` - Submission method (GET/POST)

---

## 📚 CSS Reference Guide

### Selector Types
```css
element { }           /* Element selector */
.class { }           /* Class selector */
#id { }              /* ID selector */
element.class { }    /* Element with class */
parent > child { }   /* Child selector */
parent descendant {} /* Descendant selector */
element:hover { }    /* Pseudo-class */
element::before { }  /* Pseudo-element */
```

### Common Properties
```css
/* Typography */
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;
line-height: 1.5;
color: #333;

/* Spacing */
margin: 10px;
padding: 10px;
margin-top: 10px;
margin-right: 10px;
margin-bottom: 10px;
margin-left: 10px;

/* Background & Border */
background-color: #f9f9f9;
border: 1px solid #ccc;
border-radius: 4px;

/* Display */
display: block;
display: inline;
display: flex;
```

---

## 🎯 Best Practices

### HTML
- ✅ Use semantic elements (`<header>`, `<main>`, `<footer>`)
- ✅ Include proper meta tags
- ✅ Use meaningful class/ID names
- ✅ Validate HTML structure
- ✅ Keep markup clean and organized

### CSS
- ✅ Use external stylesheets
- ✅ Avoid inline styles
- ✅ Use class selectors over ID
- ✅ Organize CSS logically
- ✅ Use consistent naming conventions

### Forms
- ✅ Label all form fields
- ✅ Use proper input types
- ✅ Group related inputs
- ✅ Clear submit buttons
- ✅ Provide feedback on submission

### Design
- ✅ Maintain visual hierarchy
- ✅ Consistent spacing
- ✅ Readable typography
- ✅ Good color contrast
- ✅ Professional appearance

---

## 🔧 Troubleshooting

### CSS Not Applying?
1. Check stylesheet is linked: `<link rel="stylesheet" href="style.css">`
2. Verify filename matches (case-sensitive)
3. Ensure CSS file is in same directory
4. Check for typos in selectors
5. Use DevTools (F12) to inspect

### Images Not Showing?
1. Verify file path: `url("images/tree.png")`
2. Check file exists in specified folder
3. Use correct relative path
4. Try absolute path if relative fails

### Form Not Submitting?
1. Add `action` attribute to form tag
2. Ensure input names are correct
3. Check method is POST or GET
4. Verify backend endpoint exists

### Font Not Displaying?
1. Check font name spelling
2. Use quotes for multi-word fonts
3. Verify font is installed/available
4. Check browser console for errors

---

## 📈 Assessment Criteria

### Lab 1: Personal Page
- ✅ Valid HTML markup
- ✅ Proper heading hierarchy
- ✅ Semantic elements used
- ✅ CSS styling applied
- ✅ Navigation functional

### Lab 2: Student Form
- ✅ All input types implemented
- ✅ Proper form structure
- ✅ Correct attribute usage
- ✅ Functional buttons
- ✅ Clear, logical layout

### Lab 3: CSS Styling
- ✅ External stylesheet linked
- ✅ CSS rules target correctly
- ✅ Form elements styled
- ✅ Typography enhanced
- ✅ Professional appearance

### Lab 4: Advanced Styling
- ✅ Typography properly applied
- ✅ Font family stack correct
- ✅ Font-weight/style effective
- ✅ Line-height creates effect
- ✅ Custom markers functional

## 📧 Contact & Links

- **GitHub:** [mariusss11](https://github.com/mariusss11)
- **College:** CEITI Technical College, Moldova

---

## 📝 Summary

**Total Coverage:**
- All HTML fundamentals
- CSS from basic to advanced
- Professional design principles
- Real-world applications
- Best practices and conventions

**Status:** Complete ✅

---

**Last Updated:** 2026  
**Course:** Web Development Lab - CEITI Technical College  
**Author:** Carchilan Marius  
**Year of Study:** Year 3