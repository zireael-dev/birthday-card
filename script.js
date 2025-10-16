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
            }, 1000); // 1000ms = 1 detik, sesuaikan dengan durasi transisi di CSS
        }
    });
}


// --- Event Listener untuk Tombol "Set Pengingat" Kalender ---
if (addToCalendarBtn) {
    addToCalendarBtn.addEventListener('click', function() {
        // Detail Acara (SESUAIKAN INI!)
        const event = {
            title: "Birthday Surprise Lunch! ❤️",
            description: "Jemput di meeting point yang sudah ditentukan. Jangan telat ya!",
            location: "Lihat di link yang tadi ya, Sayang!",
            // Format Waktu: YYYYMMDDTHHMMSSZ (Waktu UTC/GMT)
            // Waktu WIB adalah UTC+7. Jadi, 12:30 WIB = 05:30 UTC
            startTime: "20251017T053000Z", // Jumat, 17 Oktober 2025, jam 12:30 WIB
            endTime: "20251017T063000Z"   // Dibuat durasi 1 jam
        };

        // Fungsi internal untuk membuat file .ics (kalender)
        function createIcsFile() {
            return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
DTSTART:${event.startTime}
DTEND:${event.endTime}
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM
END:VEVENT
END:VCALENDAR`;
        }

        // Membuat file dan memicunya untuk di-download
        const icsContent = createIcsFile();
        const blob = new Blob([icsContent], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'kejutan-ulang-tahun.ics'; // Nama file yang akan di-download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}
