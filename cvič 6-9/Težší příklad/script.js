document.addEventListener('DOMContentLoaded', function() {
    const tabClose = document.querySelector('.tab-close');
    const tab = document.querySelector('.tab');

    tabClose.addEventListener('click', function(e) {
        e.stopPropagation();
        tab.style.opacity = '0.5';
        setTimeout(() => {
            tab.style.opacity = '1';
        }, 200);
    });

    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.background = 'rgba(255,255,255,0.5)';
            setTimeout(() => {
                this.style.background = 'rgba(255,255,255,0.3)';
            }, 100);
        });
    });

    const controls = document.querySelectorAll('.control');
    controls.forEach(control => {
        control.addEventListener('click', function() {
            if (this.classList.contains('close')) {
                alert('Zavírání okna');
            } else if (this.classList.contains('maximize')) {
                alert('Maximalizace okna');
            } else if (this.classList.contains('minimize')) {
                alert('Minimalizace okna');
            }
        });
    });
});