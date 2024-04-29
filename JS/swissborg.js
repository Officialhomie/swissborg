const faqs = document.querySelectorAll(".faq");




faqs.forEach(faqq =>{
    faqq.addEventListener("click", ()=>{
        faqq.classList.toggle("active")
    })
})