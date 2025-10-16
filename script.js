// =================================================================
// BAGIAN 1: DEKLARASI ELEMEN
// (AOS.init() DIHAPUS DARI SINI)
// =================================================================

// Ambil semua elemen dari HTML yang akan kita gunakan
const playButton = document.getElementById('play-button');
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');
const backgroundMusic = document.getElementById('background-music');
const addToCalendarBtn = document.getElementById('add-to-calendar-btn');


// =================================================================
// BAGIAN 2: EVENT LISTENERS (FUNGSI UNTUK TOMBOL)
// =================================================================

// --- Event Listener untuk Tombol Play Musik & Layar Pembuka ---
if (playButton) {
    playButton.addEventListener('click', function() {
        // Putar musiknya
        if (backgroundMusic) {
            backgroundMusic.play();
        }
        
        // Sembunyikan layar pembuka dengan efek fade-out
        if (splashScreen) {
            splashScreen.classList.add('hidden');
        }
        
        // Tampilkan konten utama setelah transisi selesai
        if (mainContent) {
            setTimeout(() => {
                mainContent.style.display = 'block';

                // ================================================
                // KUNCI PERBAIKANNYA ADA DI SINI!
                // Inisialisasi AOS HANYA SETELAH konten terlihat
                // ================================================
                AOS.init({
                    duration: 1000,
                    once: true,
                    // Tambahan: pastikan AOS tidak mulai terlalu cepat
                    offset: 50 
                });

            }, 1000); // Waktu ini harus cocok dengan durasi transisi di CSS
        }
    });
}


// --- Event Listener untuk Tombol "Set Pengingat" Kalender ---
if (addToCalendarBtn) {
    addToCalendarBtn.addEventListener('click', function() {
        // 1. Tentukan detail acara
        const event = {
            title: "Birthday Surprise Lunch! ❤️",
            description: "Jemput di meeting point yang sudah ditentukan. Jangan telat ya!",
            location: "Lokasi jemputnya rahasia, lihat di link sebelumnya ya!",
            startTime: "20251017T053000Z",
            endTime: "20251017T063000Z"
        };

        // 2. Format waktu untuk URL
        const calendarDates = `${event.startTime.replace(/-|:|\.\d+/g, '')}/${event.endTime.replace(/-|:|\.\d+/g, '')}`;

        // 3. Buat URL Google Calendar
        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${calendarDates}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

        // 4. Buka URL di tab baru
        window.open(googleCalendarUrl, '_blank');
    });
}
