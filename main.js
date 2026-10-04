(function () {
  var intro = document.querySelector('.intro-cover');
  var music = document.getElementById('saBackgroundMusic');
  var musicButton = document.getElementById('saMusicButton');
  var scrollHint = document.getElementById('saScrollHint');
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  var opening = false;

  function updateMusicButton() {
    if (!music || !musicButton) return;
    var isPlaying = !music.paused && !music.muted;
    musicButton.textContent = isPlaying ? '🔊' : '🔇';
    musicButton.setAttribute('aria-label', isPlaying ? 'Mute music' : 'Play music');
    musicButton.title = isPlaying ? 'Mute music' : 'Play music';
  }

  function playMusic() {
    if (!music) return;
    music.muted = false;
    var playPromise = music.play();
    if (playPromise) playPromise.then(updateMusicButton).catch(updateMusicButton);
  }

  function openInvitation() {
    if (opening) return;
    opening = true;
    playMusic();
    if (intro) intro.classList.add('is-opening');
    window.setTimeout(function () {
      if (intro) intro.remove();
      document.documentElement.classList.remove('intro-locked');
      window.scrollTo(0, 0);
      window.dispatchEvent(new Event('invitation:opened'));
    }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 30 : 2250);
  }

  if (intro) intro.addEventListener('click', openInvitation);
  if (intro) intro.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openInvitation();
    }
  });

  if (musicButton) {
    musicButton.addEventListener('click', function (event) {
      event.stopPropagation();
      if (!music) return;
      if (music.paused) {
        playMusic();
      } else {
        music.muted = !music.muted;
        updateMusicButton();
      }
    });
  }
  if (music) {
    music.addEventListener('playing', updateMusicButton);
    music.addEventListener('pause', updateMusicButton);
  }
  updateMusicButton();
  if (music) {
    music.muted = false;
    var promise = music.play();
    if (promise !== undefined) {
      promise.catch(function() {
        document.body.addEventListener('click', function playOnInteraction() {
          music.play();
          updateMusicButton();
          document.body.removeEventListener('click', playOnInteraction);
        }, { once: true });
      });
    }
  }

  function updateScrollHint() {
    if (scrollHint) scrollHint.classList.toggle('is-hidden', window.scrollY > 80);
  }
  if (scrollHint) {
    window.addEventListener('scroll', updateScrollHint, { passive: true });
    updateScrollHint();
  }
}());


(function () {
  var aosStarted = false;

  function initInvitationAOS() {
    if (aosStarted || !window.AOS) return;
    aosStarted = true;
    AOS.init({ duration: 1800, once: false, mirror: true, offset: 80, easing: 'ease-out-cubic' });
  }

  window.initInvitationAOS = initInvitationAOS;
  window.addEventListener('invitation:opened', initInvitationAOS, { once: true });
  if (!document.documentElement.classList.contains('intro-locked')) initInvitationAOS();

  var sparkleLayer = document.querySelector('.junction__sparkles');
  if (sparkleLayer) {
    var sparkleFragment = document.createDocumentFragment();
    for (var sparkleIndex = 0; sparkleIndex < 28; sparkleIndex += 1) {
      var sparkle = document.createElement('i');
      sparkle.className = 'junction__sparkle';
      sparkle.style.setProperty('--x', (3 + (sparkleIndex * 37) % 95) + '%');
      sparkle.style.setProperty('--y', (7 + (sparkleIndex * 53) % 78) + '%');
      sparkle.style.setProperty('--size', (2 + (sparkleIndex * 17) % 4) + 'px');
      sparkle.style.setProperty('--duration', (1.4 + ((sparkleIndex * 23) % 18) / 10).toFixed(1) + 's');
      sparkle.style.setProperty('--delay', (-((sparkleIndex * 31) % 30) / 10).toFixed(1) + 's');
      sparkleFragment.appendChild(sparkle);
    }
    sparkleLayer.appendChild(sparkleFragment);
  }

  var petalSections = document.querySelectorAll('.events, .closing');
  var ticking = false;

  function updatePetals() {
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    petalSections.forEach(function (section, sectionIndex) {
      var rect = section.getBoundingClientRect();
      var sectionTop = window.scrollY + rect.top;
      var progress;
      if (section.classList.contains('events')) {
        // These petals belong to Dil Dhadakne Do near the bottom of .events.
        // Keep their exact Figma positions until that cluster enters the viewport.
        var clusterStart = sectionTop + section.offsetHeight * 0.682 - viewportHeight;
        var clusterEnd = sectionTop + section.offsetHeight * 0.86 - viewportHeight * 0.35;
        progress = Math.max(0, Math.min(1, (window.scrollY - clusterStart) / (clusterEnd - clusterStart)));
      } else {
        // Closing petals occupy roughly 28%-60% of their section. Tie their
        // motion to that cluster entering the viewport, not to the section top.
        var closingStart = sectionTop + section.offsetHeight * 0.27 - viewportHeight;
        var closingEnd = sectionTop + section.offsetHeight * 0.64 - viewportHeight * 0.35;
        progress = Math.max(0, Math.min(1, (window.scrollY - closingStart) / (closingEnd - closingStart)));
      }
      var motion = progress * progress * (3 - 2 * progress);
      var drift = motion * (section.classList.contains('events') ? 400 : 280);
      section.querySelectorAll('.events__petal, .closing__petal').forEach(function (petal, index) {
        var baseTransform = petal.dataset.baseTransform;
        if (baseTransform === undefined) {
          baseTransform = petal.style.transform || '';
          petal.dataset.baseTransform = baseTransform;
        }
        // Per-petal deterministic variation so the bunch doesn't fall as one block.
        var speed = 0.65 + ((index * 37) % 60) / 100;   // 0.65 - 1.25
        var swayAmp = 8 + ((index * 53) % 16);          // 8 - 24 px lateral drift
        var rotAmp = 6 + ((index * 29) % 12);           // 6 - 18 deg gentle rock
        var phase = (index % 7) * 0.9;
        var wave = motion * Math.PI * 2 + phase;
        var fall = drift * speed;
        var sway = Math.sin(wave) * swayAmp * motion;
        var rot = Math.sin(wave * 1.5) * rotAmp * motion;
        petal.style.transform = 'translate3d(' + sway.toFixed(2) + 'px, ' + fall.toFixed(2) + 'px, 0) rotate(' + rot.toFixed(2) + 'deg) ' + baseTransform;
      });
    });
    ticking = false;
  }

  function requestPetalUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(updatePetals);
      ticking = true;
    }
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', requestPetalUpdate, { passive: true });
    window.addEventListener('resize', requestPetalUpdate);
    requestPetalUpdate();
  }
}());


(function () {
  var story = document.querySelector('.story');
  var scrollBottom = story && story.querySelector('.story__scroll-bottom');
  var monkey = story && story.querySelector('.story__monkey');
  var ganesh = story && story.querySelector('.story__ganesh');
  var copy = story && story.querySelector('.story__copy');
  if (!story || !scrollBottom || !monkey || !ganesh || !copy) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    ganesh.style.clipPath = 'none';
    copy.style.clipPath = 'none';
    return;
  }

  var storyTicking = false;

  function updateStoryScroll() {
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var rect = story.getBoundingClientRect();
    var storyTop = window.scrollY + rect.top;
    var storyHeight = story.offsetHeight;
    var topBoundaryFrac = 0.19047 + 0.07224;
    var bottomTopFrac = 0.20799;
    var bottomHeightFrac = 0.63294;
    var topBoundaryY = storyTop + topBoundaryFrac * storyHeight;

    // Begin only after the fixed upper roll is clearly inside the viewport.
    var start = topBoundaryY - viewportHeight * 0.68;
    var end = start + storyHeight * 0.5;
    var progress = Math.max(0, Math.min(1, (window.scrollY - start) / (end - start)));
    var eased = progress * progress * (3 - 2 * progress);
    // Original CSS coordinates are the final positions. Initially the lower
    // parchment is rolled up with its bottom edge at the upper-roll boundary.
    var startOffset = (topBoundaryFrac - bottomTopFrac - bottomHeightFrac) * storyHeight;
    var translateY = startOffset * (1 - eased);

    scrollBottom.style.transform = 'translate3d(0, ' + translateY.toFixed(2) + 'px, 0)';
    monkey.style.transform = 'translate3d(0, ' + translateY.toFixed(2) + 'px, 0)';

    // The upper roll is the reveal boundary: hide the portion of the moving
    // parchment that has not crossed below it yet.
    var bottomTopY = storyTop + bottomTopFrac * storyHeight + translateY;
    var bottomHeight = bottomHeightFrac * storyHeight;
    // Keep the boundary mask active for the whole animation so parchment can
    // never appear above the upper roll. A small overlap remains underneath
    // the roll to avoid exposing a white seam at the join.
    var overlap = storyHeight * 0.016;
    var hiddenTop = Math.max(0, Math.min(bottomHeight, topBoundaryY - overlap - bottomTopY));
    var bottomClip = 'inset(' + (hiddenTop / bottomHeight * 100).toFixed(2) + '% 0 0 0)';
    scrollBottom.style.webkitClipPath = bottomClip;
    scrollBottom.style.clipPath = bottomClip;

    // The lower edge of the moving parchment is the actual opening edge.
    // Hold content back until the scroll has opened a little farther, rather
    // than revealing as soon as the lower edge merely touches each element.
    var openingEdgeY = bottomTopY + bottomHeight;
    var revealEdgeY = openingEdgeY - storyHeight * 0.055;
    var ganeshTopY = storyTop + ganesh.offsetTop;
    var ganeshReveal = Math.max(0, Math.min(1, (revealEdgeY - ganeshTopY) / ganesh.offsetHeight));
    var ganeshClip = 'inset(0 0 ' + (100 * (1 - ganeshReveal)).toFixed(2) + '% 0)';
    ganesh.style.webkitClipPath = ganeshClip;
    ganesh.style.clipPath = ganeshClip;

    var copyTopY = storyTop + copy.offsetTop;
    var reveal = Math.max(0, Math.min(1, (revealEdgeY - copyTopY) / copy.offsetHeight));
    var hiddenBottom = (100 * (1 - reveal)).toFixed(2);
    var clip = 'inset(0 0 ' + hiddenBottom + '% 0)';
    copy.style.webkitClipPath = clip;
    copy.style.clipPath = clip;
    storyTicking = false;
  }

  function requestStoryUpdate() {
    if (!storyTicking) {
      window.requestAnimationFrame(updateStoryScroll);
      storyTicking = true;
    }
  }

  window.addEventListener('scroll', requestStoryUpdate, { passive: true });
  window.addEventListener('resize', requestStoryUpdate);
  requestStoryUpdate();
}());


(function () {
  var portrait = document.querySelector('.events45__portrait');
  var section = portrait && portrait.closest('.events45');
  if (!portrait || !section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function arrive() {
    portrait.classList.add('is-arriving');
    window.removeEventListener('scroll', checkPosition);
    window.removeEventListener('resize', checkPosition);
  }

  function checkPosition() {
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var sectionRect = section.getBoundingClientRect();
    // Use the portrait's untransformed CSS position, not its off-screen
    // animated bounding box, to decide when the entrance should begin.
    var portraitRestTop = sectionRect.top + section.offsetHeight * 0.28974;
    if (portraitRestTop <= viewportHeight * 0.88 && portraitRestTop >= -viewportHeight * 0.2) {
      arrive();
    }
  }

  window.addEventListener('scroll', checkPosition, { passive: true });
  window.addEventListener('resize', checkPosition);
  checkPosition();
}());


(function () {
  var opening = document.querySelector('.opening');
  var mangoes = document.querySelectorAll('.opening__mango');
  if (!opening || !mangoes.length) return;

  var countdownDays = opening.querySelector('[data-countdown-days]');
  var countdownHours = opening.querySelector('[data-countdown-hours]');
  var countdownMins = opening.querySelector('[data-countdown-mins]');
  var countdownTarget = new Date('2026-10-25T00:00:00+05:30').getTime();

  function padCountdown(value) {
    return String(value).padStart(2, '0');
  }

  function updateCountdown() {
    var remaining = Math.max(0, countdownTarget - Date.now());
    var totalMinutes = Math.floor(remaining / 60000);
    var days = Math.floor(totalMinutes / 1440);
    var hours = Math.floor((totalMinutes % 1440) / 60);
    var mins = totalMinutes % 60;
    if (countdownDays) countdownDays.textContent = String(days);
    if (countdownHours) countdownHours.textContent = padCountdown(hours);
    if (countdownMins) countdownMins.textContent = padCountdown(mins);
  }

  updateCountdown();
  window.setInterval(updateCountdown, 30000);

  function launchConfetti() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var colors = ['#f4c542', '#e8899a', '#7fa64a', '#f08a38', '#9b5aa5', '#fff1c7'];
    var layer = document.createElement('div');
    layer.className = 'sa-confetti-layer';
    layer.setAttribute('aria-hidden', 'true');
    for (var index = 0; index < 52; index += 1) {
      var piece = document.createElement('i');
      piece.className = 'sa-confetti-piece';
      piece.style.setProperty('--left', (Math.random() * 100).toFixed(2) + 'vw');
      piece.style.setProperty('--size', (6 + Math.random() * 7).toFixed(2) + 'px');
      piece.style.setProperty('--color', colors[index % colors.length]);
      piece.style.setProperty('--delay', (Math.random() * .55).toFixed(2) + 's');
      piece.style.setProperty('--duration', (2.1 + Math.random() * .75).toFixed(2) + 's');
      piece.style.setProperty('--drift', (-55 + Math.random() * 110).toFixed(1) + 'px');
      piece.style.setProperty('--turn', (360 + Math.random() * 720).toFixed(0) + 'deg');
      layer.appendChild(piece);
    }
    document.body.appendChild(layer);
    window.setTimeout(function () { layer.remove(); }, 3300);
  }

  function revealDate() {
    if (opening.classList.contains('is-date-revealed')) return;
    updateCountdown();
    mangoes.forEach(function (mango) { mango.classList.add('is-revealed'); });
    opening.classList.add('is-date-revealed');
    launchConfetti();
  }

  opening.addEventListener('click', function (event) {
    if (event.target.closest('.opening__mango, .opening__reveal')) revealDate();
  });

  var moon = document.querySelector('.events45__moon');
  var moonSection = moon && moon.closest('.events45');
  var moonTicking = false;

  function updateMoon() {
    if (!moon || !moonSection) return;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var rect = moonSection.getBoundingClientRect();
    var sectionTop = window.scrollY + rect.top;
    var offH = moonSection.offsetHeight;
    // Boundary between Archie's section (upper) and Sarva Mangala (lower).
    // The moon starts hidden just above this line (lower end of Archie) and slides
    // straight down into Sarva Mangala. Only the portion that has crossed the
    // boundary into Sarva Mangala is shown — the rest stays hidden, so it reads
    // like the moon is emerging from behind Archie's section.
    var boundaryFrac = 0.50;
    var restFrac = 0.69894; // moon CSS top
    var moonFrac = 0.084;   // moon CSS height
    var boundaryY = sectionTop + boundaryFrac * offH;
    var restTopY = sectionTop + restFrac * offH;
    var moonH = moonFrac * offH;
    var startOffset = (boundaryY - moonH) - restTopY; // negative: up in Archie, fully hidden
    var descentStart = boundaryY - viewportHeight;      // boundary reaches viewport bottom
    var descentEnd = restTopY - viewportHeight * 0.55;  // rest reaches mid viewport
    var p = Math.max(0, Math.min(1, (window.scrollY - descentStart) / (descentEnd - descentStart)));
    var eased = p * p * (3 - 2 * p); // smoothstep for a soft settle
    var translateY = startOffset * (1 - eased);
    var moonTopY = restTopY + translateY;
    // Clip away whatever is still above the boundary (still inside Archie's section).
    var hiddenPx = Math.max(0, Math.min(moonH, boundaryY - moonTopY));
    var clip = 'inset(' + (hiddenPx / moonH * 100).toFixed(2) + '% 0 0 0)';
    moon.style.opacity = '1';
    moon.style.webkitClipPath = clip;
    moon.style.clipPath = clip;
    moon.style.transform = 'translate3d(0, ' + translateY.toFixed(2) + 'px, 0)';
    moonTicking = false;
  }

  function requestMoonUpdate() {
    if (!moonTicking) {
      window.requestAnimationFrame(updateMoon);
      moonTicking = true;
    }
  }

  if (moon && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', requestMoonUpdate, { passive: true });
    window.addEventListener('resize', requestMoonUpdate);
    requestMoonUpdate();
  }
}());



// Lenis Smooth Scrolling Setup
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Example Anime.js setup (you can add specific animations here)
document.addEventListener('DOMContentLoaded', () => {
  anime({
    targets: '.intro-cover__art',
    translateY: [-20, 0],
    opacity: [0, 1],
    delay: anime.stagger(200),
    easing: 'easeOutQuad'
  });
});
