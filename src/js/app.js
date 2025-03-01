import Alpine from 'alpinejs'
import rules from './rules.js'

window.Alpine = Alpine;

Alpine.data('rules', rules);
Alpine.start();