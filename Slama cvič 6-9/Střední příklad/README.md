# Duhové barvy - Střední příklad

Interaktivní webová aplikace pro prezentaci a správu barevné palety s možností kopírování HEX a RGB kódů.

## 📸 Preview

Aplikace zobrazuje 8 duhových barev v interaktivních pruzích a kartách s kompletními informacemi o každé barvě.

## ✨ Funkce

### Hlavní funkcionality
- **Dynamické generování**: Všechny barevné prvky jsou vytvořeny JavaScriptem z datového pole
- **Kopírování do schránky**: Jedním kliknutím zkopírujete HEX nebo RGB kód
- **Interaktivní pruhy**: Hover efekt s rozšířením a animací
- **Detail barev**: Kliknutím na pruh se zobrazí alert s informacemi
- **Responzivní grid**: Karty se automaticky přizpůsobí šířce obrazovky

### Barevná paleta
- 🟣 Fialová (#9b59b6)
- 🔵 Modrá (#3498db)
- 🩵 Azurová (#00bcd4)
- 🟢 Zelená (#4caf50)
- 🟡 Žlutá (#ffeb3b)
- 🟠 Oranžová (#ff9800)
- 🔴 Červená (#f44336)
- 🍷 Vínová (#8b0000)

## 💻 Technická implementace

### JavaScript architektura

```javascript
// Datová struktura
const duhoveBарvy = [
    { nazev, trida, hex, rgb }
    // ... 8 barev
];

// Hlavní funkce
vytvorDuhovePruhy()      // Generuje interaktivní pruhy
vytvorInfoOBarvach()     // Vytváří karty s detaily
kopirovatDoSchranky()    // Clipboard API
zobrazitInfoOBarve()     // Alert s informacemi
```

### CSS techniky
- **CSS Grid**: Responzivní layout karet (`auto-fit, minmax()`)
- **CSS Classes**: Dynamické třídy pro každou barvu
- **Transitions**: Plynulé animace pro hover a kliknutí
- **Box shadows**: Hloubkový efekt
- **Linear gradients**: Moderní pozadí

### Pokročilé funkce
- **Clipboard API**: `navigator.clipboard.writeText()`
- **Event listeners**: Dynamicky přidané na generované prvky
- **Template literals**: Pro vytváření HTML struktur
- **Array methods**: `forEach()`, `map()`, `find()`
- **Error handling**: Console.error pro debugging

## 🎨 Design

- Fialový gradientní background
- Bílé kartičky s jemným stínem
- Hover efekty se zvednutím (-5px translateY)
- Monospace font pro kódy
- Barevné feedback při kopírování (zelená ✓)

## 🚀 Spuštění

```bash
# Otevřete soubor v prohlížeči
open "střední Příklad.html"
```

## 📂 Soubory

```
.
├── střední Příklad.html      # HTML struktura
├── styles.css                # CSS styly a grid layout
└── script.js                 # JavaScript logika a data
```

## 🎯 Vzdělávací cíle

Tento příklad učí:
- Práci s datovými strukturami (pole objektů)
- Dynamické generování DOM elementů
- Moderní JavaScript ES6+ syntax
- CSS Grid pro responzivní layout
- Práce s Clipboard API
- Event delegation
- Template literals pro HTML

## 🔧 API a technologie

- **Clipboard API**: Pro kopírování textu
- **DOM API**: `createElement()`, `appendChild()`, `innerHTML`
- **Event API**: `addEventListener()`, event handling
- **Console API**: Pro debugging a error reporting

## 📱 Responzivita

### Desktop (nad 768px)
- Grid s 3-4 kartami na řádek
- Větší fonty a spacing
- Pruhy výšky 80px → 90px při hover

### Mobil (pod 768px)
- Grid s 1 kartou na řádek
- Menší fonty
- Pruhy výšky 60px → 70px při hover

## 💡 Užitečné funkce

```javascript
// Získání barvy podle názvu
ziskejBarvu("Modrá")

// Náhodná barva
nahodnaDuhovaBarva()

// Gradient ze všech barev
vytvorDuhovyGradient()
```

## 🐛 Error handling

- Kontrola existence kontejnerů před použitím
- Console error při chybějících elementech
- Try-catch pro Clipboard API
- Fallback alert při selhání kopírování
