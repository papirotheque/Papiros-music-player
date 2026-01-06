/* --- SONG LIST --- */

const songs = [
    { t: "Cherry Blossom Girl", a: "Air", s: "https://dn721709.ca.archive.org/0/items/CherryBlossomGirl-Air/02CherryBlossomGirl1.mp3" },
    { t: "Love On A Real Train", a: "Tangerine Dream", s: "https://ia800902.us.archive.org/16/items/tangerine_dream-dream_sequence-vinyl-1985_202202/F5-Love%20On%20A%20Real%20Train.mp3" },
    { t: "Empathy", a: "Bassnectar", s: "https://archive.org/download/bassnectar-empathy/Bassnectar%20-%20Empathy.mp3" },
    { t: "The Hunter", a: "Mastodon", s: "https://dn721907.ca.archive.org/0/items/thehunter2011/2011%20-%20The%20Hunter%20(Deluxe%20Edition)/07.%20The%20Hunter.mp3" },
    { t: "Tom's Diner", a: "Suzanne Vega, DNA", s: "https://dn710307.ca.archive.org/0/items/Suzanne_Vega_feat_DNA_Toms_diner_1991/Suzanne_Vega_feat_DNA_Toms_diner_1991.mp4" },
    { t: "Herr Mannelig", a: "Garmarna", s: "https://dn721905.ca.archive.org/0/items/garmarnaherrmannelig/Garmarna%20-%20Herr%20Mannelig.mp3" },
    { t: "Venus as a Boy", a: "Björk", s: "https://dn710003.ca.archive.org/0/items/venusasaboybjork/Venus%20As%20A%20Boy%20%20%20Bjork.mp3" }
];

/* --- GLOBAL VARS --- */

let idx = 0;
const audio = document.getElementById('rp-audio');
const playBtn = document.getElementById('rp-play-btn');

/* --- LOGIC --- */

function initPlaylist() {
    const list = document.getElementById('rp-list');
    if (!list) return;

    list.innerHTML = '';
    songs.forEach((s, i) => {
        const li = document.createElement('li');
        li.className = `rp-track-item ${i === idx ? 'active' : ''}`;
        li.innerHTML = `<span>${i + 1}. ${s.t}</span>`;
        li.onclick = () => loadSong(i, true);
        list.appendChild(li);
    });

    document.getElementById('rp-title').innerText = songs[idx].t;
    document.getElementById('rp-artist').innerText = songs[idx].a;
}

function loadSong(i, autoPlay = false) {
    idx = i;

    // Reset progress bar
    document.getElementById('rp-bar').style.width = '0%';

    // Active list update
    const items = document.querySelectorAll('.rp-track-item');
    items.forEach((item, index) => {
        item.classList.toggle('active', index === idx);
    });

    // Visual metadata update
    document.getElementById('rp-title').innerText = songs[idx].t;
    document.getElementById('rp-artist').innerText = songs[idx].a;

    audio.src = songs[idx].s;
    audio.load();

    if (autoPlay) {
        audio.play().then(() => {
            playBtn.innerText = "⏸";
        }).catch(e => console.error("Error al reproducir:", e));
    }
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸";
    } else {
        audio.pause();
        playBtn.innerText = "▶︎";
    }
}

function playNext() {
    loadSong((idx + 1) % songs.length, true);
}

function playPrev() {
    loadSong((idx - 1 + songs.length) % songs.length, true);
}

/* --- EVENTS --- */

// Autoplay after end of song
audio.addEventListener('ended', () => {
    playNext();
});

// Progress bar update
audio.addEventListener('timeupdate', () => {
    if (!audio.duration || isNaN(audio.duration)) return;
    const progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById('rp-bar').style.width = progress + '%';
});

// Bar seek on click
document.getElementById('rp-progress').onclick = (e) => {
    if (audio.duration) {
        const progressBox = e.target.closest('.rp-progress-box');
        const newTime = (e.offsetX / progressBox.clientWidth) * audio.duration;
        audio.currentTime = newTime;
    }
};

/* --- INIT --- */

initPlaylist();
audio.src = songs[idx].s;