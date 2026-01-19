# Jazyk HTML - Základní příklad

Vzdělávací webová stránka představující základy jazyka HTML s moderním designem a interaktivními prvky.

## 📸 Preview

Stránka obsahuje úvodní sekci s gradientním headerem a několik vzdělávacích sekcí o HTML, editorech a základních konceptech.

## ✨ Funkce

- **Animované načítání**: Sekce se postupně objevují s fade-in efektem
- **Interaktivní sekce**: Kliknutí na sekci vytvoří vizuální feedback (rozšíření levého okraje)
- **Plynulé scrollování**: Automatické plynulé scrollování k odkazovaným sekcím
- **Responzivní design**: Přizpůsobení pro mobilní zařízení

## 🎨 Design

- **Gradientní pozadí**: Fialovo-růžový gradient (od #667eea přes #764ba2)
- **Bílá hlavní karta**: Zaoblené rohy, stínování pro "floating" efekt
- **Barevné sekce**: Světle modro-šedý gradient s levým modrým pruhem
- **Hover efekty**: Sekce se zvednou při najetí myší

## 💻 Technická implementace

### HTML
- Sémantická struktura s `<header>`, `<main>`, `<section>`
- Validní HTML5 dokument
- Externí CSS a JS soubory

### CSS
- Reset stylů (`* { margin: 0; padding: 0; }`)
- Flexbox a moderní layout techniky
- CSS transitions pro plynulé animace
- Media queries pro responzivitu (breakpoint: 768px)
- Linear gradients pro pozadí

### JavaScript
```javascript
// Postupné zobrazení sekcí při načtení
- Použití setTimeout pro postupné animace
- Event listeners pro interaktivní prvky
- Plynulé scrollování pomocí scrollIntoView()
```

## 🚀 Spuštění

```bash
# Otevřete soubor v prohlížeči
open jednoduchýpříklad.html
```

Nebo jednoduše dvojklik na `jednoduchýpříklad.html`.

## 📂 Soubory

```
.
├── jednoduchýpříklad.html    # Hlavní HTML struktura
├── styles.css                # CSS styly
└── script.js                 # JavaScript logika
```

## 🎯 Vzdělávací cíle

Tento příklad demonstruje:
- Strukturování HTML dokumentu
- Moderní CSS techniky (gradients, shadows, transitions)
- DOM manipulaci v JavaScriptu
- Event handling
- Základy animací a UX principů

## 🔧 Kompatibilita

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📱 Responzivita

Stránka je optimalizována pro:
- 💻 Desktop (nad 768px)
- 📱 Tablet a mobil (pod 768px)
