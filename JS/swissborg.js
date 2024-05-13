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


// four buttons
const bestExecutionBtn = document.getElementById('bestExecutionBtn');
const uniqueTradingPairBtn = document.getElementById('uniqueTradingPairBtn');
const transparentBtn = document.getElementById('transparentBtn');
const noHiddenFeesBtn = document.getElementById('noHiddenFeesBtn');

function toggleClasses(clickedBtn) {
    bestExecutionBtn.classList.remove('bg-[#E5F9F3]', 'text-[#01C38D]', 'font-bold');
    uniqueTradingPairBtn.classList.remove('bg-[#E5F9F3]', 'text-[#01C38D]', 'font-bold');
    transparentBtn.classList.remove('bg-[#E5F9F3]', 'text-[#01C38D]', 'font-bold');
    noHiddenFeesBtn.classList.remove('bg-[#E5F9F3]', 'text-[#01C38D]', 'font-bold');

    clickedBtn.classList.add('bg-[#E5F9F3]', 'text-[#01C38D]', 'font-bold');
}

bestExecutionBtn.addEventListener('click', () => toggleClasses(bestExecutionBtn));
uniqueTradingPairBtn.addEventListener('click', () => toggleClasses(uniqueTradingPairBtn));
transparentBtn.addEventListener('click', () => toggleClasses(transparentBtn));
noHiddenFeesBtn.addEventListener('click', () => toggleClasses(noHiddenFeesBtn));

toggleClasses(bestExecutionBtn);

// FUNCTIONALITY TO DISPLAY WHAT CORRESPONDING DIV 

const bestExecutionContent = document.getElementById('bestExecutionContent');
const uniqueTradingPairContent = document.getElementById('uniqueTradingPairContent');
const transparentContent = document.getElementById('transparentContent');
const noHiddenFeesContent = document.getElementById('noHiddenFeesContent');

// Function to show content based on clicked button
function showContent(content) {
    bestExecutionContent.style.display = 'none';
    uniqueTradingPairContent.style.display = 'none';
    transparentContent.style.display = 'none';
    noHiddenFeesContent.style.display = 'none';

    content.style.display = 'flex';
}

bestExecutionBtn.addEventListener('click', () => showContent(bestExecutionContent));
uniqueTradingPairBtn.addEventListener('click', () => showContent(uniqueTradingPairContent));
transparentBtn.addEventListener('click', () => showContent(transparentContent));
noHiddenFeesBtn.addEventListener('click', () => showContent(noHiddenFeesContent))

showContent(bestExecutionContent);




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



const containerDiv = document.getElementById('container');
const containerDiv1 = document.getElementById('container1');

  

// FUNCTIONALITY FOR THE NAVBAR 
document.addEventListener("DOMContentLoaded", function() {

    const investAnchor = document.getElementById('invest');
    const aboutAnchor = document.getElementById('about');
    
    
    const toggleContainerDisplay = () => {
        if( containerDiv.classList.contains("hidden")) {
            containerDiv.classList.remove("hidden");
        } else {
            containerDiv.classList.add("hidden");
        }
    }
    
    const toggleContainerDisplay1 = () => {
        if( containerDiv1.classList.contains("hidden")) {
            containerDiv1.classList.remove("hidden");
        } else {
            containerDiv1.classList.add("hidden");
        }
    }
    
    investAnchor.addEventListener('click', function() {
        if(!containerDiv1.classList.contains('hidden')) {
            containerDiv1.classList.add('hidden');
        }
    
        toggleContainerDisplay();
    
        containerDiv.innerHTML = `
                                    <div class="p-[15px] grid grid-cols-2 grid-rows-5 gap-3">
                                        <a class="high" href="">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center justify-between gap-[7px]">
                                                    <img class="w-12" src="/Image/smart-engine-icon.svg" alt="">
                                                    <div class="flex flex-col ">
                                                        <h1 class="text-black font-medium mb-[4px] text-sm">Buy Cryptos</h1>
                                                        <p class="text-[#aaa] text-[12px]">Exchange instantly at the best price</p>
                                                    </div>
                                                </div>
                                                <i class="bi bi-chevron-right text-[#019c71] text-md"></i>
                                            </div>
                                        </a>
                                        <a class="high" href="">
                                            <div class="flex items-center justify-between ">
                                                <div class="flex items-center justify-between gap-[7px]">
                                                    <img class="w-12" src="/Image/earn.svg" alt="">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-black font-medium mb-[4px] text-sm">Earn Cryptos</h1>
                                                        <p class="text-[#aaa] text-[12px]">Generate passive income 24/7</p>
                                                    </div>
                                                </div>
                                                <i class="bi bi-chevron-right text-[#019c71] text-md"></i>
                                            </div>
                                        </a>
                        
                                        <a class="high" href="http://127.0.0.1:5501/diversify.html">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center justify-between gap-[7px]">
                                                    <img class="w-12" src="/Image/navbar-invest-Thematics.svg" alt="">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-black font-medium mb-[4px] text-sm">Diversify with Thematics</h1>
                                                        <p class="text-[#aaa] text-[12px]">Crypto bundles to invest in entire sectors</p>
                                                    </div>
                                                </div>
                                                <i class="bi bi-chevron-right text-[#019c71] text-md"></i>
                                            </div>
                                        </a>
                                        <a class="high" href="http://127.0.0.1:5501/cardFunding.html">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center justify-between gap-[7px]">
                                                    <img class="w-12" src="/Image/Card Deposit.svg" alt="">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-black font-medium mb-[4px] text-sm">Card Funding</h1>
                                                        <p class="text-[#aaa] text-[12px]">Top up your fiat account using your credit and debit card</p>
                                                    </div>
                                                </div>
                                                <i class="bi bi-chevron-right text-[#019c71] text-md"></i>
                                            </div>
                                        </a>
                                        <a class="high" href="http://127.0.0.1:5501/allcryptos.html">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center justify-between gap-[7px]">
                                                    <img class="w-12" src="/Image/Navigation-All_cryptos.svg" alt="">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-black font-medium mb-[4px] text-sm">All Cryptos</h1>
                                                        <p class="text-[#aaa] text-[12px]">More than 50 curated crypto assets</p>
                                                    </div>
                                                </div>
                                                <i class="bi bi-chevron-right text-[#019c71] text-md"></i>
                                            </div>
                                        </a>
                                        <a class="high" href="http://127.0.0.1:5501/assetAnalysis.html">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center justify-between gap-[7px]">
                                                    <img class="w-12" src="/Image/Navigation-Asset_Analysis.svg" alt="">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-black font-medium mb-[4px] text-sm">Asset Analysis</h1>
                                                        <p class="text-[#aaa] text-[12px]">Live analysis of all cryptos</p>
                                                    </div>
                                                </div>
                                                <i class="bi bi-chevron-right text-[#019c71] text-md"></i>
                                            </div>
                                        </a>
                                        <a class="high" href="http://127.0.0.1:5501/portfolio.html">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center justify-between gap-[7px]">
                                                    <img class="w-12" src="/Image/navbar-invest-Portfolio Analytics.svg" alt="">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-black font-medium mb-[4px] text-sm">Portfolio Visualizer</h1>
                                                        <p class="text-[#aaa] text-[12px]">Live monitoring of your portfolio</p>
                                                    </div>
                                                </div>
                                                <i class="bi bi-chevron-right text-[#019c71] text-md"></i>
                                            </div>
                                        </a>
                                        <a class="high" href="http://127.0.0.1:5501/automate.html">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center justify-between gap-[7px]">
                                                    <img class="w-12" src="/Image/icon-navigation-AutoInvest.svg" alt="">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-black font-medium mb-[4px] text-sm">Auto Invest</h1>
                                                        <p class="text-[#aaa] text-[12px]">Automate Your Crypto Investment with Swissborg</p>
                                                    </div>
                                                </div>
                                                <i class="bi bi-chevron-right text-[#019c71] text-md"></i>
                                            </div>
                                        </a>
                                        <a class="high" href="http://127.0.0.1:5501/investwithalpha.html">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center justify-between gap-[7px]">
                                                    <img class="w-12" src="/Image/navigation-alpha.svg" alt="">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-black font-medium mb-[4px] text-sm">Invest through Alpha <span class="bg-purple-600">New</span></h1>
                                                        <p class="text-[#aaa] text-[12px]">Discover the next emerging projects</p>
                                                    </div>
                                                </div>
                                                <i class="bi bi-chevron-right text-[#019c71] text-md"></i>
                                            </div>
                                        </a> 
                                    </div>`;
    });
    
    aboutAnchor.addEventListener('click', function() {
        if(!containerDiv.classList.contains('hidden')) {
            containerDiv.classList.add('hidden');
        }
        toggleContainerDisplay1();
        containerDiv1.innerHTML = `
                                    <div class="p-[15px] grid grid-cols-2 grid-rows-2 gap-3">
                                        <a class="high" href="http://127.0.0.1:5501/abouttml">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center justify-between gap-[7px]">
                                                    <img class="w-12" src="/Image/swissborg-app.svg" alt="">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-black font-medium mb-[4px] text-sm">About swissborg</h1>
                                                        <p class="text-[#aaa] text-[12px]">Learn more about Swissborg</p>
                                                    </div>
                                                </div>
                                                <i class="bi bi-chevron-right text-[#019c71] text-md"></i>
                                            </div>
                                        </a>
                                        <a class="high" href="http://127.0.0.1:5501/affilate.html">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center justify-between gap-[7px]">
                                                    <img class="w-12" src="/Image/community-icon.svg" alt="">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-black font-medium mb-[4px] text-sm">Become an affilate for swissborg</h1>
                                                        <p class="text-[#aaa] text-[12px]">Join 100+ affilates worldwide</p>
                                                    </div>
                                                </div>
                                                <i class="bi bi-chevron-right text-[#019c71] text-md"></i>
                                            </div>
                                        </a>
                                    </div>`;
    });
    
    containerDiv.addEventListener('mouseleave', function() {
        if(!containerDiv1.classList.contains('hidden')) {
            containerDiv1.classList.add('hidden');
        }
        toggleContainerDisplay();
    });
    containerDiv1.addEventListener('mouseleave', function() {
        if(!containerDiv.classList.contains('hidden')) {
            containerDiv.classList.add('hidden');
        }
        toggleContainerDisplay1();
    });
});


