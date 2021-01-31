const images = document.querySelectorAll('.feed img');

const options = {
  rootMargin: '100px',
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.dataset.lazy;
      image.src = src;
      image.classList.add('appear');
      observer.unobserve(image);
    }
  });
};

const io = new IntersectionObserver(onEntry, options);

images.forEach(image => io.observe(image));
