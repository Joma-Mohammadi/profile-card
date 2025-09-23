
const images = [
    'image/01.jpg',
    'image/1.jpg',
    'image/3.jpg',
    'image/4.jpg',
    'image/5.jpg',
    'image/6.jpg',
    'image/8.jpg',
    'image/7.jpg',
    'image/9.jpg',
    'image/10.jpg',
    'image/11.jpg',
    'image/12.jpg',


];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const modalContent = document.getElementById('modal-content');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close-btn');
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
let isOpen = false;

// Build gallery dynamically
function buildGallery() {
  images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${i + 1}`;
    img.className = 'w-full h-48 object-cover rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform';
    img.dataset.index = i;
    img.addEventListener('click', () => openModal(i));
    gallery.appendChild(img);
  });
}

//code open modal
function openModal(index) {
  currentIndex = index;
  isOpen = true;
  updateModal();
  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modalContent.classList.remove('scale-95', 'opacity-0');
    modalContent.classList.add('scale-100', 'opacity-100');
  });
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

// code close modal
function closeModal() {
  isOpen = false;
  modalContent.classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 180);
}

// code update modal content
function updateModal() {
  modalImage.src = images[currentIndex];
  slider.innerHTML = '';

  images.forEach((src, i) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = `Thumbnail ${i + 1}`;
    thumb.className = `h-20 w-28 object-cover rounded-lg cursor-pointer flex-shrink-0 border-2 transition-transform ${
      i === currentIndex ? 'ring-2 ring-blue-500 scale-105' : 'ring-transparent'
    }`;
    thumb.dataset.index = i;
    thumb.addEventListener('click', () => {
      currentIndex = i;
      updateModal();
    });
    slider.appendChild(thumb);
  });

  const activeThumb = slider.querySelector(`img[data-index='${currentIndex}']`);
  if (activeThumb) activeThumb.scrollIntoView({ inline: 'center', behavior: 'smooth' });
}

// code keyboard controls
function handleKey(e) {
  if (!isOpen) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModal();
  }
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % images.length;
    updateModal();
  }
}


overlay.addEventListener('click', closeModal);
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateModal();
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateModal();
});
closeBtn.addEventListener('click', closeModal);
window.addEventListener('keydown', handleKey);


window.addEventListener('DOMContentLoaded', buildGallery);