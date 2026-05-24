import Alpine from 'alpinejs'
import rules from './rules.js'

globalThis.Alpine = Alpine;

Alpine.data('rules', rules);
Alpine.start();