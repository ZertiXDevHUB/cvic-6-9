# Stínování textu - Těžší příklad

Pokročilá simulace webového prohlížeče s důrazem na CSS efekty a komplexní text-shadow pro vytvoření efektu námrazy.

## 📸 Preview

Funkční mockup webového prohlížechu se záložkami, navigací, adresním řádkem a hlavní oblastí s velkým textem "Je tu zima O.o" stylizovaným jako námraza.

## ✨ Funkce

### Interaktivní prvky
- **Zavírání záložek**: Kliknutím na ×  se záložka vizuálně "blikne"
- **Navigační tlačítka**: Zpět, vpřed, reload s feedback efektem
- **Ovládací prvky okna**: Minimalizace, maximalizace, zavření (s alerts)
- **Hover efekty**: Všechny interaktivní prvky reagují na myš

### UI komponenty
- 📑 **Záložky**: Aktivní záložka + tlačítko pro novou
- 🎛️ **Toolbar**: Navigační tlačítka, adresní řádek, menu
- 🎨 **Ovládací prvky**: Standardní tlačítka okna (−, □, ×)
- ❄️ **Hlavní obsah**: Text s pokročilým stínováním

## 🎨 Pokročilé CSS efekty

### Text Shadow - Efekt námrazy
```css
text-shadow:
    0 0 5px rgba(255, 255, 255, 0.9),    /* Vnitřní záře */
    0 0 10px rgba(255, 255, 255, 0.8),   /* Střední záře */
    0 0 15px rgba(173, 216, 230, 0.7),   /* Modrá aura */
    0 0 20px rgba(173, 216, 230, 0.6),   /* Širší aura */
    0 0 30px rgba(135, 206, 250, 0.5),   /* Vnější záře */
    2px 2px 3px rgba(0, 0, 0, 0.1);      /* Jemný stín */
```

Tento vícevrstvý text-shadow vytváří:
- ❄️ Ledový, svítící efekt
- 💎 Dojem průhlednosti a lesku
- 🌟 Světelnou auru kolem textu
- 📐 Mírnou prostorovou hloubku

### Layout techniky
- **Flexbox**: Pro header, toolbar a rozložení prvků
- **Linear gradient**: Zelený gradient v headeru a toolbaru
- **Border-radius**: Zaoblené rohy pro moderní vzhled
- **Box-shadow**: Hloubkový efekt celého okna

## 💻 Technická implementace

### HTML struktura
```
.browser-window
├── .browser-header
│   ├── .browser-tabs (záložky)
│   └── .browser-controls (ovládání okna)
├── .browser-toolbar (navigace + adresní řádek)
└── .browser-content (hlavní obsah)
```

### JavaScript funkcionalita
```javascript
// Event listeners pro:
- Zavírání záložky (opacity efekt)
- Navigační tlačítka (background blink)
- Ovládací prvky (alerts s akcemi)
```

### CSS organizace
- **Reset**: Základní reset všech margin/padding
- **Komponenty**: Izolované styly pro každou část UI
- **Interaktivita**: Hover stavy pro všechny klikací prvky
- **Responzivita**: Zatím není implementována (desktop-first)

## 🚀 Spuštění

```bash
# Otevřete soubor v prohlížeči
open těžší.html
```

## 📂 Soubory

```
.
├── těžší.html       # HTML struktura mockupu
├── styles.css       # CSS s pokročilými efekty
└── script.js        # JavaScript pro interaktivitu
```

## 🎯 Vzdělávací cíle

Tento příklad demonstruje:

### CSS dovednosti
- Vícevrstvé text-shadow efekty
- Práce s rgba a průhledností
- Linear gradienty
- Komplexní layout pomocí flexbox
- Pseudo-stavy (:hover, :active)

### JavaScript dovednosti
- Event handling na různých prvcích
- setTimeout pro animační efekty
- Manipulace se styly přes JavaScript
- Event.stopPropagation()

### UI/UX principy
- Vizuální feedback na akce uživatele
- Hierarchie informací
- Konzistentní color scheme
- Použitelné ovládací prvky

## 🎨 Color Palette

| Prvek | Barva | Účel |
|-------|-------|------|
| Pozadí | `#f5f5f5` | Neutrální základ |
| Zelená primární | `#8BC34A` | Header, toolbar |
| Zelená světlá | `#A4D65E` | Gradient start |
| Zelená tmavá | `#7CB342` | Borders |
| Červená | `#e74c3c` | Close button |
| Modrá led | `#5DADE2` | Text námrazy |

## 💡 Inspirace a použití

Tento mockup může sloužit jako:
- 📚 Studijní materiál pro CSS efekty
- 🎨 Inspirace pro kreativní text efekty
- 🖼️ Základ pro mockupy webových aplikací
- 🧪 Experimentální prostor pro UI komponenty

## 🔧 Možná rozšíření

- [ ] Funkční záložky (přepínání obsahu)
- [ ] Skutečná navigace (history API)
- [ ] Více typů frost efektů
- [ ] Responzivní design pro mobil
- [ ] Dark mode varianta
- [ ] Animovaný loading state

## 📝 Poznámky

Text-shadow je velmi výkonný nástroj, ale:
- ⚠️ Může být náročný na výkon při přílišném použití
- ⚠️ Čitelnost textu by měla být prioritou
- ✅ Ideální pro hero sekce a speciální efekty
- ✅ Kombinuje se dobře s velkými fonty
