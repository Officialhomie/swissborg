const questions = document.querySelectorAll('.que');

// FREQUENTKY ASKED QUESTION

questions.forEach(question => {
    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;

        answer.classList.toggle('hidden');

    });
});

// TWO BUTTONS
document.addEventListener("DOMContentLoaded", function() {
    const thematicsButton = document.getElementById("thematicsButton");
    const swissBorgButton = document.getElementById("swissBorgButton");

    // Add the thematicsActive class to the Thematics button initially
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

// Add click event listeners to the buttons
smartEngineBtn.addEventListener('click', () => showContent(smartEngineContent));
portfolioAnalyticsBtn.addEventListener('click', () => showContent(portfolioAnalyticsContent));
hourlyAssetAnalysisBtn.addEventListener('click', () => showContent(hourlyAssetAnalysisContent));

// Show Smart Engine content by default
showContent(smartEngineContent);







