const questions = document.querySelectorAll('.que');

// FREQUENTKY ASKED QUESTION

questions.forEach(question => {
    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;

        answer.classList.toggle('hidden');

    });
});









// NAVBAR ICONS 
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");
    
    // Hide the closeIcon initially
    closeIcon.classList.add("hidden");
    
    // Add click event listener to menuIcon
    menuIcon.addEventListener("click", function() {
        menuIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    });
    
    // Add click event listener to closeIcon
    closeIcon.addEventListener("click", function() {
        closeIcon.classList.add("hidden");
        menuIcon.classList.remove("hidden");
    });
});


// MENU DISPLAY 
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const menuDisplay = document.getElementById("menuDisplay")

menuIcon.addEventListener("click", function() {
    menuDisplay.classList.toggle("hidden");
})

closeIcon.addEventListener("click", function() {
    menuDisplay.classList.add("hidden");
})





// invest display
const toggleDrop = document.getElementById("toggleDrop");
const toggleDrop2 = document.getElementById("toggleDrop2");
const investContent = document.getElementById("investContent");
const aboutContent = document.getElementById("aboutContent");

toggleDrop.addEventListener("click", function() {
    investContent.classList.toggle("hidden");
});
toggleDrop2.addEventListener("click", function() {
    aboutContent.classList.toggle("hidden");
});





// TWO BUTTONS
document.addEventListener("DOMContentLoaded", function() {
    const thematicsButton = document.getElementById("thematicsButton");
    const swissBorgButton = document.getElementById("swissBorgButton");

    thematicsButton.classList.add("thematicsActive");

    thematicsButton.addEventListener("click", function() {
        thematicsButton.classList.add("thematicsActive");
        swissBorgButton.classList.remove("swissBorgActive");
    });

    swissBorgButton.addEventListener("click", function() {
        swissBorgButton.classList.add("swissBorgActive");
        thematicsButton.classList.remove("thematicsActive");
    });
});

const thematicsButton = document.getElementById('thematicsButton');
const swissBorgButton = document.getElementById('swissBorgButton');
const thematicsDiv = document.getElementById('thematicsDiv');
const swissBorgDiv = document.getElementById('swissBorgDiv');

thematicsButton.addEventListener('click', () => {
    thematicsDiv.style.display = 'flex';
    swissBorgDiv.style.display = 'none';
});

swissBorgButton.addEventListener('click', () => {
    swissBorgDiv.style.display = 'flex';
    thematicsDiv.style.display = 'none';
});











// three buttons
const smartEngineBtn = document.getElementById('smartEngineBtn');
const portfolioAnalyticsBtn = document.getElementById('portfolioAnalyticsBtn');
const hourlyAssetAnalysisBtn = document.getElementById('hourlyAssetAnalysisBtn');

function toggleClasses(clickedBtn) {
    smartEngineBtn.classList.remove('bg-[#E5F9F3]', 'text-[#01C38D]', 'font-bold');
    portfolioAnalyticsBtn.classList.remove('bg-[#E5F9F3]', 'text-[#01C38D]', 'font-bold');
    hourlyAssetAnalysisBtn.classList.remove('bg-[#E5F9F3]', 'text-[#01C38D]', 'font-bold');

    clickedBtn.classList.add('bg-[#E5F9F3]', 'text-[#01C38D]', 'font-bold');
}

smartEngineBtn.addEventListener('click', () => toggleClasses(smartEngineBtn));
portfolioAnalyticsBtn.addEventListener('click', () => toggleClasses(portfolioAnalyticsBtn));
hourlyAssetAnalysisBtn.addEventListener('click', () => toggleClasses(hourlyAssetAnalysisBtn));

toggleClasses(smartEngineBtn);

// FUNCTIONALITY TO DISPLAY WHAT CORRESPONDING DIV 

const smartEngineContent = document.getElementById('smartEngineContent');
const portfolioAnalyticsContent = document.getElementById('portfolioAnalyticsContent');
const hourlyAssetAnalysisContent = document.getElementById('hourlyAssetAnalysisContent');

// Function to show content based on clicked button
function showContent(content) {
    smartEngineContent.style.display = 'none';
    portfolioAnalyticsContent.style.display = 'none';
    hourlyAssetAnalysisContent.style.display = 'none';

    content.style.display = 'flex';
}

smartEngineBtn.addEventListener('click', () => showContent(smartEngineContent));
portfolioAnalyticsBtn.addEventListener('click', () => showContent(portfolioAnalyticsContent));
hourlyAssetAnalysisBtn.addEventListener('click', () => showContent(hourlyAssetAnalysisContent));

showContent(smartEngineContent);




const chevronIcon = document.getElementById("chevronIcon");
const chevronIcon2 = document.getElementById("chevronIcon2");

// toggle rotation in on website
function toggleRotation() {
    chevronIcon.classList.toggle("rotate-180");
    toggleDrop.classList.toggle("bg-[#E6F9F4]");
}
function toggleRotation2() {
    chevronIcon2.classList.toggle("rotate-180");
    toggleDrop2.classList.toggle("bg-[#E6F9F4]");
}

