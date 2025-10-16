// =================================================================
// BAGIAN 1: INISIALISASI & DEKLARASI ELEMEN
// =================================================================

// Inisialisasi library Animate On Scroll (AOS)
AOS.init({
    duration: 1000, // Durasi animasi dalam milidetik
    once: true,     // Animasi hanya berjalan sekali
});

// Ambil semua elemen dari HTML yang akan kita gunakan
const playButton = document.getElementById('play-button');
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');
const backgroundMusic = document.getElementById('background-music');
const addToCalendarBtn = document.getElementById('add-to-calendar-btn');


// =================================================================
// BAGIAN 2: EVENT LISTENERS (FUNGSI UNTUH TOMBOL)
// =================================================================

// --- Event Listener untuk Tombol Play Musik & Layar Pembuka ---
if (playButton) {
    playButton.addEventListener('click', function() {
        if (backgroundMusic) {
            backgroundMusic.play();
        }
        if (splashScreen) {
            splashScreen.classList.add('hidden');
        }
        if (mainContent) {
            setTimeout(() => {
                mainContent.style.display = 'block';
            }, 1000);
        }
    });
}


// --- Event Listener untuk Tombol "Set Pengingat" Kalender ---
// === BAGIAN INI YANG DIUBAH TOTAL ===
if (addToCalendarBtn) {
    addToCalendarBtn.addEventListener('click', function() {
        // 1. Tentukan detail acara (sama seperti sebelumnya)
        const event = {
            title: "Birthday Surprise Lunch! ❤️",
            description: "Jemput di meeting point yang sudah ditentukan. Jangan telat ya!",
            location: "Lokasi jemputnya rahasia, lihat di link sebelumnya ya!",
            // Format waktu UTC tetap sama
            startTime: "20251017T053000Z", // Jumat, 17 Oktober 2025, jam 12:30 WIB
            endTime: "20251017T063000Z"
        };

        // 2. Format waktu untuk URL Google Calendar
        // Formatnya adalah: YYYYMMDDTHHMMSSZ/YYYYMMDDTHHMMSSZ
        const calendarDates = `${event.startTime.replace(/-|:|\.\d+/g, '')}/${event.endTime.replace(/-|:|\.\d+/g, '')}`;

        // 3. Buat URL Google Calendar
        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${calendarDates}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

        // 4. Buka URL di tab baru
        window.open(googleCalendarUrl, '_blank');
    });
}
