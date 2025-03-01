import Alpine from 'alpinejs'
import rules from './rules.js'

window.Alpine = Alpine;

Alpine.data('rules', rules);
Alpine.data('mode', () => ({
    mode: null,
    init() {
        if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
            this.mode = 'development';
            localStorage.setItem('umami.disabled', 1);
            console.log('Development mode');
        } else {
            this.mode = 'production';
        }
    }
}))
Alpine.start();