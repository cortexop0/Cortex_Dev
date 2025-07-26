// Meta Pixel Code
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1917558402151095');
fbq('track', 'PageView');

// Video: ensure only one plays at a time
const videos = document.querySelectorAll("video");
videos.forEach(video => {
  video.addEventListener("play", () => {
    videos.forEach(otherVideo => {
      if (otherVideo !== video) otherVideo.pause();
    });
  });
});

// Horizontal scroll buttons
const reelsContainer = document.getElementById('reels');
function scrollReels(direction) {
  const scrollAmount = 300;
  reelsContainer.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
