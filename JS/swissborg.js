const questions = document.querySelectorAll('.que');


questions.forEach(question => {
    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;

        answer.classList.toggle('hidden');

    });
});
