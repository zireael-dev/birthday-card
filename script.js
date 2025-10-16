// Inisialisasi library AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Durasi animasi dalam milidetik
    once: true, // Animasi hanya berjalan sekali
});

// Logika untuk tombol "Set Pengingat"
document.getElementById('add-to-calendar-btn').addEventListener('click', function() {
    // Detail Acara (SESUAIKAN INI!)
    const event = {
        title: "Birthday Surprise Lunch! ❤️",
        description: "Jemput di meeting point yang sudah ditentukan. Jangan telat ya!",
        location: "Lihat di link yang tadi ya, Sayang!",
        // Format Waktu: YYYYMMDDTHHMMSSZ (Waktu UTC/GMT)
        // Contoh: 18 Oktober 2025 jam 19:00 WIB itu sama dengan jam 12:00 UTC
        startTime: "20251017T053000Z",
        endTime: "20251017T063000Z" // Dibuat durasi 1 jam
    };

    // Fungsi untuk membuat file .ics (kalender)
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

    // Membuat file dan men-downloadnya
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

/* == JAVASCRIPT BARU UNTUK MUSIK == */
/* (Tambahkan ini di akhir file script.js) */

// Ambil elemen-elemen yang dibutuhkan dari HTML
const playButton = document.getElementById('play-button');
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');
const backgroundMusic = document.getElementById('background-music');

// Tambahkan event listener ke tombol play
playButton.addEventListener('click', function() {
    // Putar musiknya
    backgroundMusic.play();
    
    // Tambahkan class 'hidden' ke splash screen untuk memulai transisi fade-out
    splashScreen.classList.add('hidden');
    
    // Tampilkan konten utama setelah transisi selesai
    setTimeout(() => {
        // Tampilkan konten utama yang tadinya tersembunyi
        mainContent.style.display = 'block';
    }, 1000); // 1000ms = 1 detik, harus sama dengan durasi transisi di CSS
});
