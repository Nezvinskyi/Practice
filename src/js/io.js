const options = {
  // root: document.querySelector('#scrollArea'),
  // rootMargin: '0px',
  // threshold: 1.0,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Hello from observer callback in forEach');
      console.log(entry.target);
    }
  });
}, options);

const sentinel = document.querySelector('#sentinel');
observer.observe(sentinel);
