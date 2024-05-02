const questions = document.querySelectorAll('.que');


questions.forEach(question => {
    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;

        answer.classList.toggle('hidden');

    });
});

// Function to count up to a target number
function countUp(target, duration) {
    let current = 0;
    const step = Math.ceil(target / (duration / 16)); // 60 frames per second
  
    // Interval function to update the count
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        clearInterval(interval);
        current = target;
      }
      document.getElementById('count').textContent = current.toLocaleString(); // Display current count with comma separators
    }, 16); // Update every 16ms for smoother animation
  }
  
  // Function to check if the element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to start counting when element is in viewport
  function startCounting() {
    const counterSection = document.getElementById('counter-section');
    if (isInViewport(counterSection)) {
      countUp(17366, 3000); // Example: Count up to 1000 in 2 seconds
      window.removeEventListener('scroll', startCounting); // Remove event listener after counting starts
    }
  }
  
  // Event listener to start counting when user scrolls to section
  window.addEventListener('scroll', startCounting);
  