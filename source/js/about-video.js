const videoBlock = document.querySelector('.about__video-wrapper');
const playButton = document.querySelector('.about__button');
const videoSrc = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';

const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.classList.add('about__video');
  iframe.setAttribute('src', videoSrc);
  iframe.setAttribute('title', 'Видео о нашем тренажёрном зале');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  iframe.setAttribute('allowfullscreen', 'true');

  videoBlock.appendChild(iframe);
};

const startVideo = () => {
  videoBlock.addEventListener('click', () => {
    playButton.remove();
    createIframe();
  });
};

export {startVideo};
