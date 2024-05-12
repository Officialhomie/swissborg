// FUNCTIONALITY FOR THE NAVBAR 

const investAnchor = document.getElementById('invest');
const aboutAnchor = document.getElementById('about');

const containerDiv = document.getElementById('container');
const containerDiv1 = document.getElementById('container1');

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


function toggleRotation() {
    chevronIcon.classList.toggle("rotate-180");
    toggleDrop.classList.toggle("bg-[#E6F9F4]");
}
function toggleRotation2() {
    chevronIcon2.classList.toggle("rotate-180");
    toggleDrop2.classList.toggle("bg-[#E6F9F4]");
}