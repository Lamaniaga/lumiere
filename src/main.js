import './style.css'
import Alpine from 'alpinejs'
import bookingForm from './booking.js';

// Pasang Alpine ke objek window agar bisa diakses oleh tag HTML
window.Alpine = Alpine

Alpine.data('bookingForm', bookingForm)

// Inisialisasi Alpine
Alpine.start()