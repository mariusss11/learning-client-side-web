# 📦 CSS Box Model - Pagina Web Educațională

## 📖 Descriere

Acest proiect reprezintă o pagină web educațională care prezintă **Modelul CSS Box** (Padding, Margin și Border). Scopul proiectului este de a demonstra practici moderne de design web și de a explica vizual cum funcționează proprietățile fundamentale ale CSS-ului.

Pagina oferă explicații teoretice, exemple vizuale și o demonstrație interactivă a modelului CSS Box.

---

## 🎯 Obiectivele Proiectului

- ✅ Explicarea proprietății **Padding** (spațiu interior)
- ✅ Explicarea proprietății **Border** (contur/chenar)
- ✅ Explicarea proprietății **Margin** (spațiu exterior)
- ✅ Demonstrarea practică a modelului CSS Box
- ✅ Crearea unui design modern și responsiv
- ✅ Utilizarea flexbox pentru layout
- ✅ Aplicarea de stilizare CSS avansată

---

## 🧩 Funcționalități

### 📚 Conținut Educativ

Pagina conține:
- Header cu titlu și descriere
- **3 blocuri informative** care explică padding, border și margin
- **3 carduri tematice** cu imagini și descrieri
- **Demonstrație Box Model** - vizualizare practică a conceptelor
- **Legendă explicativă** - descrierea componentelor CSS Box
- Footer cu informații finale

---

### 🎨 Elemente de Design

Proiectul include:
- **Design modern** cu paletă de culori tone/bej (#e8dcc4, #8b7355)
- **Card-uri cu imagini** - integrare de imagini externe (Unsplash)
- **Layout flexbox** - aranjare responsivă a elementelor
- **Borderuri și spații** - demonstrație practică de padding/margin
- **Butoane interactive** - efecte hover pe carduri
- **Responsiv** - se adapteaza pe dispozitive mobile

---

## 🛠️ Tehnologii Utilizate

| Tehnologie | Utilizare |
|-----------|-----------|
| **HTML5** | Structura pagini |
| **CSS3** | Stilizare și layout |
| **Flexbox** | Aranjare responsive |
| **Box Model** | Padding, margin, border |

---

## 📐 Proprietăți CSS Demonstrate

### Padding
```css
padding: 25px;              /* Spațiu interior uniform */
padding-top: 30px;          /* Spațiu interior sus */
padding-bottom: 30px;       /* Spațiu interior jos */
padding-left: 25px;         /* Spațiu interior stânga */
padding-right: 25px;        /* Spațiu interior dreapta */
```

**Utilitate:** Creează spațiu între conținut și border, ceea ce face textul/imaginile să nu fie lipite de margini.

---

### Border
```css
border: 3px solid #c9b89a;  /* Chenar cu grosime, stil și culoare */
border: 4px dashed #8b7355; /* Chenar punctat */
border-radius: 8px;         /* Colțuri rotunjite */
```

**Utilitate:** Delimitează vizual elementele și le separă pe pagină.

---

### Margin
```css
margin: 0;                  /* Resetare margin implicit */
margin-bottom: 40px;        /* Spațiu exterior jos */
margin-top: 30px;           /* Spațiu exterior sus */
margin: 20px;               /* Spațiu exterior uniform */
gap: 30px;                  /* Spațiu între elemente flexbox */
```

**Utilitate:** Controlează distanța dintre element și alte elemente din pagină.

---

## 📂 Structura HTML

```html
<body>
    <div class="container">
        <!-- HEADER -->
        <header>
            <h1>Modelul CSS Box</h1>
            <p>Descriere introducție...</p>
        </header>

        <!-- BLOCURI INFORMATIVE -->
        <h2 class="section-title">Blocuri informative</h2>
        <div class="info-blocks">
            <div class="info-block">
                <h3>Padding</h3>
                <p>Explicație...</p>
            </div>
            <!-- ... alte blocuri ... -->
        </div>

        <!-- CARDURI TEMATICE -->
        <h2 class="section-title">Carduri tematice</h2>
        <div class="cards">
            <div class="card">
                <img src="..." alt="...">
                <div class="card-content">
                    <h3>Titlu card</h3>
                    <p>Descriere...</p>
                    <a href="#" class="card-button">Button</a>
                </div>
            </div>
            <!-- ... alte carduri ... -->
        </div>

        <!-- DEMONSTRAȚIE BOX MODEL -->
        <div class="box-model-demo">
            <h2>Demonstrație Box Model</h2>
            <div class="outer-box">
                <p>Bloc exterior...</p>
                <div class="inner-box">
                    <p>Bloc interior...</p>
                </div>
            </div>
            <div class="box-legend">
                <p><strong>Content</strong> – textul...</p>
                <p><strong>Padding</strong> – spațiu...</p>
                <p><strong>Border</strong> – contur...</p>
                <p><strong>Margin</strong> – spațiu exterior...</p>
            </div>
        </div>

        <!-- FOOTER -->
        <footer>
            <p>Lucrare practică CSS...</p>
        </footer>
    </div>
</body>
```

---

## 🎨 Paleta de Culori

| Culoare | Cod HEX | Utilizare |
|---------|---------|-----------|
| **Fond pagină** | #f0ebe3 | Culoare de fundal principală |
| **Header/Footer** | #e8dcc4 | Fundaluri secțiuni principale |
| **Chenar** | #8b7355 | Border-uri principale |
| **Text** | #3d3027 | Text titluri |
| **Text secundar** | #5a4a3a | Text conținut |
| **Card-uri** | #faf7f2 | Fundal carduri |

---

## 📐 Elemente Principale

### Header
- Titlu mare (h1)
- Descriere introductivă
- Padding 40px, margin-bottom 40px
- Border 4px solid, colțuri rotunjite

### Info Blocks
- 3 blocuri flexbox cu gap 30px
- Padding 25px pe fiecare
- Border 3px solid
- Utilizare pentru explicații Padding/Border/Margin

### Cards
- 3 carduri cu imagini externe (Unsplash)
- Image height 200px
- Card-content cu padding specific
- Butoane cu efect hover
- Responsive - se transformă în coloane pe mobile

### Box Model Demo
- Demonstrație vizuală a modelului CSS
- Bloc exterior (outer-box) și bloc interior (inner-box)
- Legendă explicativă

---

## 🚀 Cum se Folosește

1. **Deschidere în browser:** Double-click pe fișierul HTML
2. **Vizualizare:** Observă structura și designul
3. **Inspectare:** Right-click → "Inspect" (F12) pentru a vedea CSS
4. **Editare:** Modifică valorile padding/margin/border și reîncarcă pagina
5. **Responsive:** Redimensionează fereastra pentru a vedea adaptarea pe mobile

---

## 💡 Concepte CSS Demonstrate

### Flexbox Layout
```css
.info-blocks {
    display: flex;          /* Activează flexbox */
    gap: 30px;              /* Spațiu între elemente */
    margin-bottom: 50px;    /* Spațiu jos */
}

.info-block {
    flex: 1;                /* Distribuție egală de spațiu */
}
```

---

### Proprietatea box-sizing
```css
* {
    box-sizing: border-box;  /* Padding și border incluse în width */
}
```

**Importanță:** Fără aceasta, adăugarea de padding ar mări elementul peste lățimea dorită.

---

### Responsive Design
```css
@media (max-width: 768px) {
    .info-blocks,
    .cards {
        flex-direction: column;  /* Stack vertical pe mobile */
    }
}
```

---

## ✨ Caracteristici Implementate

- 🎨 Design modern cu paletă neutră
- 📱 Layout responsiv (desktop, tablet, mobile)
- 🖼️ Imagini externe (Unsplash)
- 🔘 Butoane cu efecte hover
- 📐 Demonstrație vizuală Box Model
- 🏷️ Legendă explicativă
- ✅ HTML semantic valid
- 🎯 Navigare ușoară

---

## 📚 Concepte CSS Explicate

| Concept | Explicație | Exemplu |
|---------|-----------|---------|
| **Padding** | Spațiu interior (intre conținut și border) | `padding: 25px;` |
| **Border** | Conturul elementului | `border: 3px solid #color;` |
| **Margin** | Spațiu exterior (între elemente) | `margin: 20px;` |
| **Box Model** | Content + Padding + Border + Margin | Demonstrație vizuală |
| **Flexbox** | Layout flexibil cu gap | `display: flex; gap: 30px;` |
| **Responsive** | Adaptare la dimensiuni diferite | `@media (max-width: 768px)` |

---

## 🎓 Obiective de Învățare

Prin completarea acestui proiect, se demonstrează:

1. ✅ Înțelegerea completă a CSS Box Model
2. ✅ Utilizarea corectă a padding, border și margin
3. ✅ Crearea layout-ului cu Flexbox
4. ✅ Design modern și responsiv
5. ✅ Utilizarea de imagini externe
6. ✅ Efecte CSS (hover, border-radius)
7. ✅ Adaptare la dispozitive mobile

---

## 🔧 Elemente Editate/Personalizate

- Paletă de culori personalizată (tonuri bej și maro)
- Layout flexbox pentru card-uri și blocuri
- Imagini externe din Unsplash
- Efecte hover pe butoane
- Border-radius pentru design modern
- Spații specifice (padding/margin) pentru fiecare element
- Design responsiv cu media queries

---

## 💻 Browser Compatibility

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Note

- Imaginile sunt încărcate din Unsplash (conexiune internet necesară)
- CSS este inclus în fișierul HTML cu tag `<style>`
- Pagina nu necesită server - deschide direct în browser
- Responsive design se testează cu F12 DevTools (Toggle Device Toolbar)

---

## 🎯 Cum se Testează Box Model

1. Deschide DevTools (F12)
2. Selectează orice element din pagină (Inspect)
3. Mergi la tab "Styles"
4. Observă Box Model diagram-ul
5. Hover pe elemente pentru a vedea padding/margin/border în acțiune

---

## 📊 Statistici Proiect

- **Linii HTML:** ~150
- **Linii CSS:** ~400+
- **Secțiuni principale:** 5 (Header, Info Blocks, Cards, Box Demo, Footer)
- **Elemente demonstrație:** 3 blocuri informative + 3 carduri + 1 demo
- **Media queries:** 1 (responsive design)

---

## 🏆 Criterii de Evaluare

- ✅ Explicarea corectă a conceptelor Box Model
- ✅ Design modern și atractiv
- ✅ Layout responsiv pe toate dispozitivele
- ✅ Cod CSS organizat și curat
- ✅ HTML semantic valid
- ✅ Funcționalitate completă
- ✅ Demonstrație vizuală clară a conceptelor

---

## 📞 Autor

**Carchilan Marius**  
Anul 3 - CEITI Technical College  
Web Development Course

---

**Status:** ✅ Complet  
**Dificultate:** Intermediar  
**Cuvinte cheie:** CSS Box Model, Padding, Border, Margin, Flexbox, Responsive Design