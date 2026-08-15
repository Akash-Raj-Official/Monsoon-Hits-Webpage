/* ==========================================================================
   DELUXE MUSIC PLAYER APPLICATION LOGIC
   ========================================================================== */

// --- Global YouTube IFrame API Callback ---
window.onYouTubeIframeAPIReady = function () {
  if (window.initYTPlayer) {
    window.initYTPlayer();
  } else {
    window.ytAPIReady = true;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // --- Playlist Data ---
  const MONSOON_YT_PLAYLIST = "https://music.youtube.com/playlist?list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I";

  const playlist = [
    {
      id: 1,
      title: "Baarish",
      artist: "Ash King & Shashaa Tirupati",
      videoId: "6cHdXwyqS50",
      durationStr: "5:01",
      durationSec: 301,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
      ytUrl: "https://music.youtube.com/watch?v=6cHdXwyqS50&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 2,
      title: "Apna Bana Le",
      artist: "Sachin-Jigar, Arijit Singh & Amitabh Bhattacharya",
      videoId: "u0DfC7-KCLk",
      durationStr: "4:21",
      durationSec: 261,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=chill-abstract-intention-12099.mp3",
      ytUrl: "https://music.youtube.com/watch?v=u0DfC7-KCLk&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 3,
      title: "Pal Pal Dil Ke Paas - Title Track",
      artist: "Arijit Singh & Parampara Thakur",
      videoId: "vQjuNZ7pPIg",
      durationStr: "4:14",
      durationSec: 254,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=ambient-piano-amp-strings-10711.mp3",
      ytUrl: "https://music.youtube.com/watch?v=vQjuNZ7pPIg&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 4,
      title: "Maiyya Mainu",
      artist: "Sachet Tandon & Shellee",
      videoId: "PYZshDm4kFg",
      durationStr: "3:51",
      durationSec: 231,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_99391e4a3b.mp3?filename=soft-notice-124376.mp3",
      ytUrl: "https://music.youtube.com/watch?v=PYZshDm4kFg&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 5,
      title: "Rabba Janda",
      artist: "Jubin Nautiyal",
      videoId: "kRUzuZpbTmw",
      durationStr: "4:06",
      durationSec: 246,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/11/06/audio_c6f2df83c9.mp3?filename=acoustic-guitars-ambient-126435.mp3",
      ytUrl: "https://music.youtube.com/watch?v=kRUzuZpbTmw&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 6,
      title: "Ve Maahi",
      artist: "Arijit Singh & Asees Kaur",
      videoId: "6gI-6opqHZ0",
      durationStr: "3:44",
      durationSec: 224,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
      ytUrl: "https://music.youtube.com/watch?v=6gI-6opqHZ0&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 7,
      title: "Jaan Nisaar (Arijit)",
      artist: "Arijit Singh",
      videoId: "zGFmcRGT6Xo",
      durationStr: "3:58",
      durationSec: 238,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=chill-abstract-intention-12099.mp3",
      ytUrl: "https://music.youtube.com/watch?v=zGFmcRGT6Xo&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 8,
      title: "Dil Maang Raha Hai",
      artist: "Yasser Desai",
      videoId: "qry--THlp2M",
      durationStr: "4:14",
      durationSec: 254,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=ambient-piano-amp-strings-10711.mp3",
      ytUrl: "https://music.youtube.com/watch?v=qry--THlp2M&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 9,
      title: "Jaan Ban Gaye",
      artist: "Mithoon, Vishal Mishra & Asees Kaur",
      videoId: "fL9uyJlPONE",
      durationStr: "3:28",
      durationSec: 208,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_99391e4a3b.mp3?filename=soft-notice-124376.mp3",
      ytUrl: "https://music.youtube.com/watch?v=fL9uyJlPONE&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 10,
      title: "Naiyo Lagda",
      artist: "Himesh Reshammiya, Kamaal Khan & Palak Muchhal",
      videoId: "EmaR55Xu-z8",
      durationStr: "5:17",
      durationSec: 317,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/11/06/audio_c6f2df83c9.mp3?filename=acoustic-guitars-ambient-126435.mp3",
      ytUrl: "https://music.youtube.com/watch?v=EmaR55Xu-z8&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 11,
      title: "O Meri Laila",
      artist: "Atif Aslam & Jyotica Tangri",
      videoId: "DdPqtnuZVnI",
      durationStr: "4:40",
      durationSec: 280,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
      ytUrl: "https://music.youtube.com/watch?v=DdPqtnuZVnI&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 12,
      title: "Suna Hai",
      artist: "Jubin Nautiyal, Rashmi Virag & Jeet Gannguli",
      videoId: "dCifSQ5yO9Y",
      durationStr: "3:20",
      durationSec: 200,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=chill-abstract-intention-12099.mp3",
      ytUrl: "https://music.youtube.com/watch?v=dCifSQ5yO9Y&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 13,
      title: "Nazm Nazm",
      artist: "Arko",
      videoId: "BSSVbw0I818",
      durationStr: "3:47",
      durationSec: 227,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=ambient-piano-amp-strings-10711.mp3",
      ytUrl: "https://music.youtube.com/watch?v=BSSVbw0I818&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 14,
      title: "Qaafirana",
      artist: "Arijit Singh & Nikhita Gandhi",
      videoId: "MDJSSNyGvTk",
      durationStr: "5:41",
      durationSec: 341,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_99391e4a3b.mp3?filename=soft-notice-124376.mp3",
      ytUrl: "https://music.youtube.com/watch?v=MDJSSNyGvTk&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 15,
      title: "Sau Aasmaan",
      artist: "Armaan Malik, Neeti Mohan & Kumaar",
      videoId: "5aesFWsSvj4",
      durationStr: "3:54",
      durationSec: 234,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/11/06/audio_c6f2df83c9.mp3?filename=acoustic-guitars-ambient-126435.mp3",
      ytUrl: "https://music.youtube.com/watch?v=5aesFWsSvj4&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 16,
      title: "Jogi",
      artist: "Yasser Desai & Aakanksha Sharma",
      videoId: "ERnRNHKmT1Y",
      durationStr: "4:33",
      durationSec: 273,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
      ytUrl: "https://music.youtube.com/watch?v=ERnRNHKmT1Y&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 17,
      title: "Naina Da Kya Kasoor",
      artist: "Amit Trivedi",
      videoId: "9PrPdCLpZMU",
      durationStr: "3:30",
      durationSec: 210,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=chill-abstract-intention-12099.mp3",
      ytUrl: "https://music.youtube.com/watch?v=9PrPdCLpZMU&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 18,
      title: "Dil Na Jaaneya",
      artist: "Rochak Kohli, Lauv & AKASA",
      videoId: "qwFp5-0vluw",
      durationStr: "3:46",
      durationSec: 226,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=ambient-piano-amp-strings-10711.mp3",
      ytUrl: "https://music.youtube.com/watch?v=qwFp5-0vluw&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 19,
      title: "Atak Gaya",
      artist: "Arijit Singh & Rupali Moghe",
      videoId: "15Y7UjMMayI",
      durationStr: "4:24",
      durationSec: 264,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_99391e4a3b.mp3?filename=soft-notice-124376.mp3",
      ytUrl: "https://music.youtube.com/watch?v=15Y7UjMMayI&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 20,
      title: "Ikk Kudi - Reprised Version",
      artist: "Diljit Dosanjh",
      videoId: "XIJ7WEI-GLU",
      durationStr: "4:07",
      durationSec: 247,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/11/06/audio_c6f2df83c9.mp3?filename=acoustic-guitars-ambient-126435.mp3",
      ytUrl: "https://music.youtube.com/watch?v=XIJ7WEI-GLU&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 21,
      title: "Ik Tu Hai",
      artist: "Jubin Nautiyal, Shashwat Sachdev & Kumaar",
      videoId: "AfaO3wjUa0k",
      durationStr: "3:50",
      durationSec: 230,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
      ytUrl: "https://music.youtube.com/watch?v=AfaO3wjUa0k&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 22,
      title: "Aahista",
      artist: "Arijit Singh & Jonita Gandhi",
      videoId: "bu0GaSacsaU",
      durationStr: "5:20",
      durationSec: 320,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=chill-abstract-intention-12099.mp3",
      ytUrl: "https://music.youtube.com/watch?v=bu0GaSacsaU&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    },
    {
      id: 23,
      title: "Pehli Baar",
      artist: "Ajay Gogavale",
      videoId: "aA_izMdyicY",
      durationStr: "5:15",
      durationSec: 315,
      cover: "playlist.jpg",
      src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=ambient-piano-amp-strings-10711.mp3",
      ytUrl: "https://music.youtube.com/watch?v=aA_izMdyicY&list=OLAK5uy_nrsol77KIGNjXoQrCTMw0tU1E2FjTeZ4I"
    }
  ];

  let currentTrackIndex = 0;
  let isPlaying = false;
  let isSeeking = false;
  let simulatedCurrentTime = 0;
  let simulatedTimer = null;
  let ytPlayer = null;
  let isYtReady = false;
  let synthAudioCtx = null;
  let synthGainNode = null;
  let synthInterval = null;

  // --- YouTube IFrame API Ready Callback ---
  window.initYTPlayer = function () {
    if (ytPlayer) return;
    ytPlayer = new YT.Player('yt-player', {
      height: '360',
      width: '640',
      videoId: playlist[currentTrackIndex].videoId,
      playerVars: {
        'autoplay': 0,
        'controls': 0,
        'disablekb': 1,
        'fs': 0,
        'modestbranding': 1,
        'rel': 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };

  // If API loaded before DOMContentLoaded
  if (window.ytAPIReady || (window.YT && window.YT.Player)) {
    window.initYTPlayer();
  }

  function onPlayerReady(event) {
    isYtReady = true;
    if (ytPlayer && ytPlayer.setVolume) {
      ytPlayer.setVolume(80);
    }
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      nextTrack();
    } else if (event.data === YT.PlayerState.PLAYING) {
      isPlaying = true;
      vinylDiscEl.classList.add('playing');
      playIcon.className = 'fa-solid fa-pause';
      btnPlayPause.classList.add('playing');
      startPlaybackTimer();
      renderPlaylist();
    } else if (event.data === YT.PlayerState.PAUSED) {
      isPlaying = false;
      vinylDiscEl.classList.remove('playing');
      playIcon.className = 'fa-solid fa-play';
      btnPlayPause.classList.remove('playing');
      stopPlaybackTimer();
      renderPlaylist();
    }
  }

  // --- DOM Elements ---
  const systemTimeEl = document.getElementById('system-time');
  const audio = document.getElementById('audio-player');
  const songTitleEl = document.getElementById('song-title');
  const artistNameEl = document.getElementById('artist-name');
  const vinylDiscEl = document.getElementById('vinyl-disc');
  const discArtEl = document.getElementById('disc-art');
  const progressSlider = document.getElementById('progress-slider');
  const progressFill = document.getElementById('progress-fill');
  const currentTimeEl = document.getElementById('current-time');
  const totalDurationEl = document.getElementById('total-duration');
  const btnPlayPause = document.getElementById('btn-play-pause');
  const playIcon = document.getElementById('play-icon');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnVolume = document.getElementById('btn-volume');
  const volIcon = document.getElementById('vol-icon');
  const volumeSlider = document.getElementById('volume-slider');
  const volumePopover = document.getElementById('volume-popover');
  const btnPlaylistToggle = document.getElementById('btn-playlist-toggle');
  const playlistDrawer = document.getElementById('playlist-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const playlistItemsEl = document.getElementById('playlist-items');
  const ytMusicLink = document.getElementById('yt-music-link');

  // --- 1. Live System Time Update ---
  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    systemTimeEl.textContent = `${hours}:${minutes} ${ampm}`;
  }
  updateTime();
  setInterval(updateTime, 1000);

  // --- 3. Render Playlist Items ---
  function renderPlaylist() {
    playlistItemsEl.innerHTML = '';
    playlist.forEach((track, index) => {
      const li = document.createElement('li');
      li.className = `playlist-item ${index === currentTrackIndex ? 'active' : ''}`;
      li.innerHTML = `
        <div class="playlist-thumb" style="background-image: url('${track.cover}');"></div>
        <div class="playlist-info">
          <div class="playlist-song-title">${track.title}</div>
          <div class="playlist-song-artist">${track.artist}</div>
        </div>
        <div class="playlist-duration">${track.durationStr}</div>
        <div class="playlist-action">
          <a href="${track.ytUrl}" target="_blank" rel="noopener noreferrer" class="yt-direct-link" title="Open on YouTube Music" onclick="event.stopPropagation();">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <i class="fa-solid ${index === currentTrackIndex && isPlaying ? 'fa-volume-high' : 'fa-play'}" style="font-size: 0.8rem; margin-left: 4px;"></i>
        </div>
      `;
      li.addEventListener('click', () => {
        loadTrack(index);
        playTrack();
        closeDrawer();
      });
      playlistItemsEl.appendChild(li);
    });
  }

  // --- 4. Track Management ---
  function loadTrack(index) {
    currentTrackIndex = index;
    const track = playlist[currentTrackIndex];

    simulatedCurrentTime = 0;
    songTitleEl.textContent = track.title;
    artistNameEl.textContent = track.artist;
    discArtEl.style.backgroundImage = `url('${track.cover}')`;
    if (ytMusicLink) {
      ytMusicLink.href = track.ytUrl || MONSOON_YT_PLAYLIST;
    }

    if (isYtReady && ytPlayer && ytPlayer.loadVideoById) {
      ytPlayer.loadVideoById(track.videoId);
      if (!isPlaying) {
        ytPlayer.pauseVideo();
      }
    }

    audio.src = track.src;
    audio.load();
    progressSlider.value = 0;
    progressFill.style.width = '0%';
    currentTimeEl.textContent = '0:00';
    totalDurationEl.textContent = track.durationStr || '5:01';

    renderPlaylist();
  }

  function startPlaybackTimer() {
    stopPlaybackTimer();
    simulatedTimer = setInterval(() => {
      if (!isPlaying || isSeeking) return;

      const track = playlist[currentTrackIndex];
      let totalSec = track.durationSec;
      let curSec = simulatedCurrentTime;

      if (isYtReady && ytPlayer && ytPlayer.getCurrentTime) {
        const ytCur = ytPlayer.getCurrentTime();
        const ytDur = ytPlayer.getDuration();
        if (ytDur > 0) totalSec = ytDur;
        if (ytCur >= 0) curSec = ytCur;
      } else if (audio.duration && !isNaN(audio.duration) && audio.currentTime > 0) {
        totalSec = audio.duration;
        curSec = audio.currentTime;
      } else {
        simulatedCurrentTime += 1;
        curSec = simulatedCurrentTime;
      }

      if (curSec >= totalSec && totalSec > 0) {
        nextTrack();
        return;
      }

      const progressPercent = Math.min(100, (curSec / totalSec) * 100);
      progressSlider.value = progressPercent;
      progressFill.style.width = `${progressPercent}%`;
      currentTimeEl.textContent = formatTime(curSec);
      totalDurationEl.textContent = formatTime(totalSec);
      updateMediaSession();
    }, 1000);
  }

  function stopPlaybackTimer() {
    if (simulatedTimer) {
      clearInterval(simulatedTimer);
      simulatedTimer = null;
    }
  }

  function playTrack() {
    isPlaying = true;
    vinylDiscEl.classList.add('playing');
    playIcon.className = 'fa-solid fa-pause';
    btnPlayPause.classList.add('playing');

    startPlaybackTimer();

    if (isYtReady && ytPlayer && ytPlayer.playVideo) {
      ytPlayer.playVideo();
      audio.pause(); // Ensure fallback audio doesn't play
      enableBackgroundAudioKeepAlive(); // Wake lock keep-alive for YouTube
    } else {
      disableBackgroundAudioKeepAlive(); // Disable wake lock for fallback
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Audio autoplay blocked or stream error, starting ambient synth mode", error);
          startSynthesizedAudio();
        });
      }
    }
    updateMediaSession();
    renderPlaylist();
  }

  function pauseTrack() {
    isPlaying = false;
    vinylDiscEl.classList.remove('playing');
    playIcon.className = 'fa-solid fa-play';
    btnPlayPause.classList.remove('playing');

    if (isYtReady && ytPlayer && ytPlayer.pauseVideo) {
      ytPlayer.pauseVideo();
    }
    audio.pause();
    stopPlaybackTimer();
    stopSynthesizedAudio();
    disableBackgroundAudioKeepAlive(); // Always disable keep-alive on pause
    updateMediaSession();
    renderPlaylist();
  }

  // Ambient Monsoon Audio Synthesizer (Chords & Rain Tones)
  function startSynthesizedAudio() {
    if (!synthAudioCtx) {
      synthAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (synthAudioCtx.state === 'suspended') {
      synthAudioCtx.resume();
    }

    stopSynthesizedAudio();

    const notes = [261.63, 329.63, 392.00, 440.00, 523.25]; // C4, E4, G4, A4, C5
    let noteIdx = 0;

    synthGainNode = synthAudioCtx.createGain();
    synthGainNode.gain.setValueAtTime(0.06, synthAudioCtx.currentTime);
    synthGainNode.connect(synthAudioCtx.destination);

    synthInterval = setInterval(() => {
      if (!isPlaying) return;
      try {
        const osc = synthAudioCtx.createOscillator();
        const noteGain = synthAudioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[noteIdx % notes.length], synthAudioCtx.currentTime);
        noteIdx++;

        noteGain.gain.setValueAtTime(0.04, synthAudioCtx.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.001, synthAudioCtx.currentTime + 1.2);

        osc.connect(noteGain);
        noteGain.connect(synthGainNode);
        osc.start();
        osc.stop(synthAudioCtx.currentTime + 1.2);
      } catch (e) { }
    }, 600);
  }

  function stopSynthesizedAudio() {
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
    if (synthGainNode) {
      try { synthGainNode.disconnect(); } catch (e) { }
      synthGainNode = null;
    }
  }

  // --- Background Audio Keep-Alive via Web Audio API ---
  let wakeLockAudio = null;

  function enableBackgroundAudioKeepAlive() {
    if (wakeLockAudio) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      
      // Create a 1-second silent buffer
      const buffer = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
      const channelData = buffer.getChannelData(0);
      for (let i = 0; i < channelData.length; i++) {
        channelData[i] = 0; // Pure silence
      }
      
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      
      // Connect to destination
      source.connect(ctx.destination);
      source.start();
      
      wakeLockAudio = { ctx, source };
      console.log("Background audio keep-alive activated.");
    } catch (e) {
      console.warn("Could not start background audio keep-alive:", e);
    }
  }

  function disableBackgroundAudioKeepAlive() {
    if (wakeLockAudio) {
      try {
        wakeLockAudio.source.stop();
        wakeLockAudio.source.disconnect();
        wakeLockAudio.ctx.close();
      } catch (e) {}
      wakeLockAudio = null;
      console.log("Background audio keep-alive deactivated.");
    }
  }

  // --- Media Session API Integration ---
  function updateMediaSession() {
    if ('mediaSession' in navigator) {
      const track = playlist[currentTrackIndex];
      
      navigator.mediaSession.metadata = new MediaMetadata({
        title: track.title,
        artist: track.artist,
        album: "Monsoon Hits",
        artwork: [
          { src: track.cover, sizes: '512x512', type: 'image/jpeg' }
        ]
      });

      navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused";
      
      let cur = simulatedCurrentTime;
      let dur = track.durationSec;
      if (isYtReady && ytPlayer && ytPlayer.getCurrentTime) {
        const ytCur = ytPlayer.getCurrentTime();
        const ytDur = ytPlayer.getDuration();
        if (ytDur > 0) dur = ytDur;
        if (ytCur >= 0) cur = ytCur;
      } else if (audio.duration && !isNaN(audio.duration) && audio.currentTime > 0) {
        dur = audio.duration;
        cur = audio.currentTime;
      }
      
      try {
        navigator.mediaSession.setPositionState({
          duration: dur,
          playbackRate: 1.0,
          position: cur
        });
      } catch (e) {}
    }
  }

  function initMediaSessionHandlers() {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => {
        playTrack();
      });
      navigator.mediaSession.setActionHandler('pause', () => {
        pauseTrack();
      });
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        prevTrack();
      });
      navigator.mediaSession.setActionHandler('nexttrack', () => {
        nextTrack();
      });
      navigator.mediaSession.setActionHandler('seekto', (details) => {
        const track = playlist[currentTrackIndex];
        let dur = track.durationSec;
        if (isYtReady && ytPlayer && ytPlayer.getDuration) {
          const ytDur = ytPlayer.getDuration();
          if (ytDur > 0) dur = ytDur;
        } else if (audio.duration && !isNaN(audio.duration)) {
          dur = audio.duration;
        }
        
        const targetPercent = (details.seekTime / dur) * 100;
        performSeek(targetPercent);
        updateMediaSession();
      });
    }
  }

  // --- 5. Timeline Formatting & Synchronization ---
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds === Infinity) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  audio.addEventListener('loadedmetadata', () => {
    if (audio.duration && !isNaN(audio.duration)) {
      totalDurationEl.textContent = formatTime(audio.duration);
    }
  });

  audio.addEventListener('timeupdate', () => {
    if (isSeeking) return;
    const track = playlist[currentTrackIndex];
    let totalSec = track.durationSec;
    let currentSec = simulatedCurrentTime;

    if (isYtReady && ytPlayer && ytPlayer.getCurrentTime) {
      const ytCur = ytPlayer.getCurrentTime();
      const ytDur = ytPlayer.getDuration();
      if (ytDur > 0) totalSec = ytDur;
      if (ytCur >= 0) currentSec = ytCur;
    } else if (audio.currentTime && audio.currentTime > 0) {
      currentSec = audio.currentTime;
      if (audio.duration && !isNaN(audio.duration)) totalSec = audio.duration;
    }

    const progressPercent = Math.min(100, (currentSec / totalSec) * 100);
    progressSlider.value = progressPercent;
    progressFill.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(currentSec);
  });

  audio.addEventListener('ended', () => {
    nextTrack();
  });

  // Smooth & Accurate Seeking Logic
  function performSeek(sliderValue) {
    const track = playlist[currentTrackIndex];
    let totalSec = track.durationSec;

    if (isYtReady && ytPlayer && ytPlayer.getDuration) {
      const ytDur = ytPlayer.getDuration();
      if (ytDur > 0) totalSec = ytDur;
    } else if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
      totalSec = audio.duration;
    }

    const targetSeconds = (parseFloat(sliderValue) / 100) * totalSec;
    simulatedCurrentTime = targetSeconds;

    if (isYtReady && ytPlayer && ytPlayer.seekTo) {
      ytPlayer.seekTo(targetSeconds, true);
    }
    if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
      try { audio.currentTime = targetSeconds; } catch (e) { }
    }

    progressFill.style.width = `${sliderValue}%`;
    currentTimeEl.textContent = formatTime(targetSeconds);
  }

  progressSlider.addEventListener('mousedown', () => { isSeeking = true; });
  progressSlider.addEventListener('touchstart', () => { isSeeking = true; });

  progressSlider.addEventListener('input', (e) => {
    isSeeking = true;
    const track = playlist[currentTrackIndex];
    let totalSec = track.durationSec;
    if (isYtReady && ytPlayer && ytPlayer.getDuration) {
      const ytDur = ytPlayer.getDuration();
      if (ytDur > 0) totalSec = ytDur;
    }
    const targetSeconds = (parseFloat(e.target.value) / 100) * totalSec;
    simulatedCurrentTime = targetSeconds;
    progressFill.style.width = `${e.target.value}%`;
    currentTimeEl.textContent = formatTime(targetSeconds);
  });

  progressSlider.addEventListener('change', (e) => {
    performSeek(e.target.value);
    isSeeking = false;
  });

  progressSlider.addEventListener('mouseup', (e) => {
    if (isSeeking) {
      performSeek(progressSlider.value);
      isSeeking = false;
    }
  });

  progressSlider.addEventListener('touchend', (e) => {
    if (isSeeking) {
      performSeek(progressSlider.value);
      isSeeking = false;
    }
  });

  // --- 6. Event Handlers & Control Buttons ---
  btnPlayPause.addEventListener('click', () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  });

  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    playTrack();
  }

  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    playTrack();
  }

  btnPrev.addEventListener('click', prevTrack);
  btnNext.addEventListener('click', nextTrack);

  // Volume Logic
  function updateVolume(val) {
    const vol = parseFloat(val);
    audio.volume = vol;
    if (isYtReady && ytPlayer && ytPlayer.setVolume) {
      ytPlayer.setVolume(Math.round(vol * 100));
    }
    if (vol === 0) {
      volIcon.className = 'fa-solid fa-volume-xmark';
    } else if (vol < 0.5) {
      volIcon.className = 'fa-solid fa-volume-low';
    } else {
      volIcon.className = 'fa-solid fa-volume-high';
    }
  }

  volumeSlider.addEventListener('input', (e) => {
    updateVolume(e.target.value);
  });

  volumeSlider.addEventListener('change', (e) => {
    updateVolume(e.target.value);
  });

  btnVolume.addEventListener('click', (e) => {
    e.stopPropagation();
    volumePopover.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!volumePopover.contains(e.target) && e.target !== btnVolume) {
      volumePopover.classList.remove('active');
    }
  });

  // Drawer Logic
  function openDrawer() {
    playlistDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
  }

  function closeDrawer() {
    playlistDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
  }

  btnPlaylistToggle.addEventListener('click', openDrawer);
  closeDrawerBtn.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  // --- Keyboard Shortcuts (YouTube Music & Media Key Standards) ---
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    const key = e.key.toLowerCase();
    const code = e.code;

    // 1. Play / Pause ('Space', 'k', MediaPlayPause)
    if (code === 'Space' || key === 'k' || code === 'MediaPlayPause') {
      e.preventDefault();
      if (isPlaying) {
        pauseTrack();
      } else {
        playTrack();
      }
    }
    // 2. Next Track ('n', Shift + 'n', MediaTrackNext)
    else if (key === 'n' || code === 'MediaTrackNext') {
      e.preventDefault();
      nextTrack();
    }
    // 3. Previous Track ('p', Shift + 'p', MediaTrackPrevious)
    else if (key === 'p' || code === 'MediaTrackPrevious') {
      e.preventDefault();
      prevTrack();
    }
    // 4. Seek Forward 5s ('ArrowRight' or 'l')
    else if (code === 'ArrowRight' || key === 'l') {
      e.preventDefault();
      let cur = simulatedCurrentTime;
      if (isYtReady && ytPlayer && ytPlayer.getCurrentTime) {
        const ytCur = ytPlayer.getCurrentTime();
        if (ytCur >= 0) cur = ytCur;
      } else if (audio.currentTime && audio.currentTime > 0) {
        cur = audio.currentTime;
      }
      const dur = playlist[currentTrackIndex].durationSec;
      performSeek(Math.min(100, ((cur + 5) / dur) * 100));
    }
    // 5. Seek Backward 5s ('ArrowLeft' or 'j')
    else if (code === 'ArrowLeft' || key === 'j') {
      e.preventDefault();
      let cur = simulatedCurrentTime;
      if (isYtReady && ytPlayer && ytPlayer.getCurrentTime) {
        const ytCur = ytPlayer.getCurrentTime();
        if (ytCur >= 0) cur = ytCur;
      } else if (audio.currentTime && audio.currentTime > 0) {
        cur = audio.currentTime;
      }
      const dur = playlist[currentTrackIndex].durationSec;
      performSeek(Math.max(0, ((cur - 5) / dur) * 100));
    }
    // 6. Volume Up ('ArrowUp')
    else if (code === 'ArrowUp') {
      e.preventDefault();
      const currentVol = parseFloat(volumeSlider.value);
      const newVol = Math.min(1, currentVol + 0.05);
      volumeSlider.value = newVol;
      updateVolume(newVol);
    }
    // 7. Volume Down ('ArrowDown')
    else if (code === 'ArrowDown') {
      e.preventDefault();
      const currentVol = parseFloat(volumeSlider.value);
      const newVol = Math.max(0, currentVol - 0.05);
      volumeSlider.value = newVol;
      updateVolume(newVol);
    }
    // 8. Mute / Unmute ('m')
    else if (key === 'm') {
      e.preventDefault();
      if (parseFloat(volumeSlider.value) > 0) {
        volumeSlider.dataset.prevVol = volumeSlider.value;
        volumeSlider.value = 0;
        updateVolume(0);
      } else {
        const prev = volumeSlider.dataset.prevVol || 0.8;
        volumeSlider.value = prev;
        updateVolume(prev);
      }
    }
  });

  // --- 8. Miniplayer Static Position with Localized Mouse Cursor Spotlight ---
  function initMiniplayerHoverEffect() {
    const miniplayer = document.querySelector('.miniplayer');
    if (!miniplayer) return;

    miniplayer.addEventListener('mousemove', (e) => {
      const rect = miniplayer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      miniplayer.style.setProperty('--mouse-x', `${x}px`);
      miniplayer.style.setProperty('--mouse-y', `${y}px`);
      miniplayer.style.setProperty('--mouse-opacity', '1');
    });

    miniplayer.addEventListener('mouseleave', () => {
      miniplayer.style.setProperty('--mouse-opacity', '0');
    });
  }

  initMiniplayerHoverEffect();

  // --- 9. Playlist Drawer Localized Mouse Cursor Spotlight ---
  function initPlaylistDrawerHoverEffect() {
    const drawer = document.querySelector('.playlist-drawer');
    if (!drawer) return;

    drawer.addEventListener('mousemove', (e) => {
      const rect = drawer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      drawer.style.setProperty('--drawer-mouse-x', `${x}px`);
      drawer.style.setProperty('--drawer-mouse-y', `${y}px`);
      drawer.style.setProperty('--drawer-mouse-opacity', '1');
    });

    drawer.addEventListener('mouseleave', () => {
      drawer.style.setProperty('--drawer-mouse-opacity', '0');
    });
  }

  initPlaylistDrawerHoverEffect();

  // Initialize
  initMediaSessionHandlers();
  loadTrack(0);
});
