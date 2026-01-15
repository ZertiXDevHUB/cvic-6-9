
const duhoveBарvy = [
    {
        nazev: 'Fialová',
        trida: 'fialova',
        hex: '#9b59b6',
        rgb: 'rgb(155, 89, 182)'
    },
    {
        nazev: 'Modrá',
        trida: 'modra',
        hex: '#3498db',
        rgb: 'rgb(52, 152, 219)'
    },
    {
        nazev: 'Azurová',
        trida: 'azurova',
        hex: '#00bcd4',
        rgb: 'rgb(0, 188, 212)'
    },
    {
        nazev: 'Zelená',
        trida: 'zelena',
        hex: '#4caf50',
        rgb: 'rgb(76, 175, 80)'
    },
    {
        nazev: 'Žlutá',
        trida: 'zluta',
        hex: '#ffeb3b',
        rgb: 'rgb(255, 235, 59)'
    },
    {
        nazev: 'Oranžová',
        trida: 'oranzova',
        hex: '#ff9800',
        rgb: 'rgb(255, 152, 0)'
    },
    {
        nazev: 'Červená',
        trida: 'cervena',
        hex: '#f44336',
        rgb: 'rgb(244, 67, 54)'
    },
    {
        nazev: 'Vínová',
        trida: 'vinova',
        hex: '#8b0000',
        rgb: 'rgb(139, 0, 0)'
    }
];
function vytvorDuhovePruhy() {
    const kontejner = document.getElementById('duhovy-kontejner');

    if (!kontejner) {
        console.error('Kontejner s ID "duhovy-kontejner" nebyl nalezen.');
        return;
    }

    kontejner.innerHTML = '';

    duhoveBарvy.forEach(barva => {
        const pruh = document.createElement('div');
        pruh.className = `duhovy-pruh ${barva.trida}`;
        pruh.textContent = barva.nazev;

        pruh.title = `${barva.nazev}: ${barva.hex}`;

        pruh.addEventListener('click', () => {
            zobrazitInfoOBarve(barva);
        });

        kontejner.appendChild(pruh);
    });
}

function vytvorInfoOBarvach() {
    const infoKontejner = document.getElementById('barvy-info');

    if (!infoKontejner) {
        console.error('Kontejner s ID "barvy-info" nebyl nalezen.');
        return;
    }

    infoKontejner.innerHTML = '';

    duhoveBарvy.forEach(barva => {
        const karta = document.createElement('div');
        karta.className = `barva-karta ${barva.trida}`;

        karta.innerHTML = `
            <div class="barva-nahled ${barva.trida}">
                ${barva.nazev}
            </div>
            <div class="barva-detaily">
                <div class="barva-nazev">${barva.nazev}</div>
                <div class="barva-kody">
                    <div class="kod-radek">
                        <span class="kod-label">HEX:</span>
                        <span class="kod-hodnota">${barva.hex}</span>
                        <button class="kopirovat-btn" onclick="kopirovatDoSchranky('${barva.hex}', this)">
                            Kopírovat
                        </button>
                    </div>
                    <div class="kod-radek">
                        <span class="kod-label">RGB:</span>
                        <span class="kod-hodnota">${barva.rgb}</span>
                        <button class="kopirovat-btn" onclick="kopirovatDoSchranky('${barva.rgb}', this)">
                            Kopírovat
                        </button>
                    </div>
                </div>
            </div>
        `;

        infoKontejner.appendChild(karta);
    });
}

function kopirovatDoSchranky(text, button) {
    navigator.clipboard.writeText(text).then(() => {

        const puvodni = button.textContent;
        button.textContent = '✓ Zkopírováno';
        button.classList.add('zkopirovano');

        setTimeout(() => {
            button.textContent = puvodni;
            button.classList.remove('zkopirovano');
        }, 2000);
    }).catch(err => {
        console.error('Chyba při kopírování:', err);
        alert('Nepodařilo se zkopírovat do schránky.');
    });
}

function zobrazitInfoOBarve(barva) {
    const zprava = `
Barva: ${barva.nazev}
HEX: ${barva.hex}
RGB: ${barva.rgb}
Třída CSS: .${barva.trida}
    `.trim();

    alert(zprava);
}

function ziskejBarvu(nazev) {
    return duhoveBарvy.find(barva =>
        barva.nazev.toLowerCase() === nazev.toLowerCase()
    );
}

function nahodnaDuhovaBarva() {
    const index = Math.floor(Math.random() * duhoveBарvy.length);
    return duhoveBарvy[index];
}

function vytvorDuhovyGradient() {
    const barvy = duhoveBарvy.map(b => b.hex).join(', ');
    return `linear-gradient(to right, ${barvy})`;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌈 Duhové barvy inicializovány!');

    vytvorDuhovePruhy();

    vytvorInfoOBarvach();

    console.log('Dostupné barvy:', duhoveBарvy);
});

window.duhoveBарvy = duhoveBарvy;
window.vytvorDuhovePruhy = vytvorDuhovePruhy;
window.kopirovatDoSchranky = kopirovatDoSchranky;