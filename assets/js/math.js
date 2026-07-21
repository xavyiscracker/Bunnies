const images = [
    {
        title: "1 Date Danger",
        image: "/assets/math/1datedanger/logo.png",
        source: "/assets/math/1datedanger/"
    },
    {
        title: "BFDIA 5b",
        image: "/assets/math/bfdia5b/637.png",
        source: "/assets/math/bfdia5b/"
    },
    {
        title: "Hollow Knight",
        image: "/assets/math/hollowknight/468.png",
        source: "/assets/math/hollowknight/"
    },
    {
        title: "Omori",
        image: "/assets/math/omori/427.png",
        source: "/assets/math/omori/"
    },
    {
        title: "OneShot",
        image: "/assets/math/oneshot/622.png",
        source: "/assets/math/oneshot/"
    },
    {
        title: "Silk Song",
        image: "/assets/math/silksong/771.png",
        source: "/assets/math/silksong/"
    },
    {
        title: "Animal Crossing (GAMECUBE)",
        image: "/assets/math/animalcrossing/828.png",
        source: "/assets/math/animalcrossing/"
    },
    {
        title: "Eaglercraft 1.8",
        image: "/assets/math/eaglercraft1122/minecrafteagle.png",
        source: "/assets/math/eaglercraft18/"
    },
    {
        title: "Eaglercraft 1.12.2",
        image: "/assets/math/eaglercraft1122/minecrafteagle.png",
        source: "/assets/math/eaglercraft1122/"
    },
    {
        title: "BlockPost",
        image: "/assets/math/blockpost/273.png",
        source: "/assets/math/blockpost/"
    },
    {
        title: "OvO",
        image: "/assets/math/ovo/1.png",
        source: "/assets/math/ovo/"
    },
    {
        title: "OvO 2",
        image: "/assets/math/ovo2/2.png",
        source: "/assets/math/ovo2/"
    },
    {
        title: "OvO 3",
        image: "/assets/math/ovo3/3.png",
        source: "/assets/math/ovo3/"
    },
    {
        title: "Bad Parenting",
        image: "/assets/math/badparenting/166.png",
        source: "/assets/math/badparenting/"
    },
    {
        title: "Tattletail",
        image: "/assets/math/tattletail/607.png",
        source: "/assets/math/tattletail/"
    },
    {
        title: "Ultrakill",
        image: "/assets/math/ultrakill/196.png",
        source: "/assets/math/ultrakill/"
    },
    {
        title: "Half Life",
        image: "/assets/math/halflife/262.png",
        source: "/assets/math/halflife/"
    },
    {
        title: "Terraria",
        image: "/assets/math/terraria/669.png",
        source: "/assets/math/terraria/"
    },
    {
        title: "Just Shapes & Beats",
        image: "/assets/math/justshapes/826.png",
        source: "/assets/math/justshapes/"
    },
    {
        title: "FNAE",
        image: "/assets/math/fivenightsatepsteins/710.png",
        source: "/assets/math/fivenightsatepsteins/"
    },
    {
        title: "Iron Lung",
        image: "/assets/math/ironlung/705.png",
        source: "/assets/math/ironlung/"
    },
    {
        title: "Cooking Mama",
        image: "/assets/math/cookingmama/cookingmama.png",
        source: "/assets/math/cookingmama/"
    },
    {
        title: "20 Minutes Till Dawn",
        image: "/assets/math/20minutestildawn/819.png",
        source: "/assets/math/20minutestildawn/"
    },
    {
        title: "2048",
        image: "/assets/math/2048/114.png",
        source: "/assets/math/2048/2048.html"
    },
    {
        title: "2048 Merge Run",
        image: "/assets/math/2048mergerun/375.png",
        source: "/assets/math/2048mergerun/"
    },
    {
        title: "T.A.B.S",
        image: "/assets/math/tabs/827.png",
        source: "/assets/math/tabs/"
    },
    {
        title: "Bad Time Simulator",
        image: "/assets/math/badtimesimulator/472.png",
        source: "/assets/math/badtimesimulator/"
    },
    {
        title: "Slope",
        image: "/assets/math/slope/198.png",
        source: "/assets/math/slope/"
    },
    {
        title: "Slope 2",
        image: "/assets/math/slope2/368.png",
        source: "/assets/math/slope2/"
    },
    {
        title: "Slowroads",
        image: "/assets/math/slowroads/369.png",
        source: "/assets/math/slowroads/"
    },
    {
        title: "FNF Shucks",
        image: "/assets/math/shucks/836.png",
        source: "/assets/math/shucks/"
    },
    {
        title: "FNF Pibby Corrupted",
        image: "/assets/math/pibbycorrupted/700.png",
        source: "/assets/math/pibbycorrupted/"
    },
    {
        title: "FNF Bobs Onslaught",
        image: "/assets/math/bobsonslaught/618.png",
        source: "/assets/math/bobsonslaught/"
    },
    {
        title: "FNF Wedndesdays Infidelity",
        image: "/assets/math/wednesdaysinfidelity/616.png",
        source: "/assets/math/wednesdaysinfidelity/"
    },
    {
        title: "FNF Dave and Bambi",
        image: "/assets/math/daveandbambi/615.png",
        source: "/assets/math/daveandbambi/"
    },
    {
        title: "FNF Sonic.exe",
        image: "/assets/math/sonicexe/601.png",
        source: "/assets/math/sonicexe/"
    },
    {
        title: "Famidash",
        image: "/assets/math/famidash/famidash.png",
        source: "/assets/math/famidash/"
    },
    {
        title: "Cookie Clicker",
        image: "/assets/math/cookieclicker/82.png",
        source: "/assets/math/cookieclicker/"
    },
    {
        title: "Jetpack Joyride",
        image: "/assets/math/jetpackjoyride/7.png",
        source: "/assets/math/jetpackjoyride/"
    },
    {
        title: "Stickman Hook",
        image: "/assets/math/stickmanhook/11.png",
        source: "/assets/math/stickmanhook/"
    },
    {
        title: "Bridge Race",
        image: "/assets/math/bridgerace/14.png",
        source: "/assets/math/bridgerace/"
    },
    {
        title: "Attack Hole",
        image: "/assets/math/attackhole/13.png",
        source: "/assets/math/attackhole/"
    },
    {
        title: "Achievement Unlocked",
        image: "/assets/math/achievementunlocked/60.png",
        source: "/assets/math/achievementunlocked/"
    },
    {
        title: "Achievement Unlocked 2",
        image: "/assets/math/achievementunlocked2/61.png",
        source: "/assets/math/achievementunlocked2/"
    },
    {
        title: "Achievement Unlocked 3",
        image: "/assets/math/achievementunlocked3/62.png",
        source: "/assets/math/achievementunlocked3/"
    },
    {
        title: "FNF Twiddlefinger",
        image: "/assets/math/twiddlefinger/500.png",
        source: "/assets/math/twiddlefinger/"
    },
    {
        title: "8 Ball Pool",
        image: "/assets/math/8ballpool/115.png",
        source: "/assets/math/8ballpool/"
    },
    {
        title: "Awesome Tanks",
        image: "/assets/math/awesometanks/436.png",
        source: "/assets/math/awesometanks/"
    },
    {
        title: "Awesome Tanks 2",
        image: "/assets/math/awesometanks2/438.png",
        source: "/assets/math/awesometanks2/"
    },
    {
        title: "Bad Ice Cream",
        image: "/assets/math/badicecream/269.png",
        source: "/assets/math/badicecream/"
    },
    {
        title: "Bad Ice Cream 2",
        image: "/assets/math/badicecream2/270.png",
        source: "/assets/math/badicecream2/"
    },
    {
        title: "Bad Ice Cream 3",
        image: "/assets/math/badicecream3/271.png",
        source: "/assets/math/badicecream3/"
    }
];

const grid = document.getElementById("imageGrid");
const search = document.getElementById("searchBar");

const viewerModal = document.getElementById("viewerModal");
const viewerFrame = document.getElementById("viewerFrame");
const gameTitle = document.getElementById("gameTitle");

// URL ?url= support
const params = new URLSearchParams(window.location.search);
const urlGame = params.get("url");


function render(list) {
    grid.innerHTML = "";

    list.forEach(item => {

        const card = document.createElement("div");
        card.className = "imageCard";

        card.innerHTML = `
            <img src="${item.image}">
            <p>${item.title}</p>
        `;

        card.onclick = () => {
            viewerModal.style.display = "flex";

            if (urlGame) {
                viewerFrame.src = urlGame;
                gameTitle.textContent = "External Game";
            } else {
                viewerFrame.src = item.source;
                gameTitle.textContent = item.title;
            }
        };

        grid.appendChild(card);

    });
}


render(images);

if (urlGame) {
    viewerModal.style.display = "flex";
    viewerFrame.src = urlGame;
    gameTitle.textContent = "External Content on Bunnies";
}


search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    render(images.filter(image =>
        image.title.toLowerCase().includes(value)
    ));

});


function closeFrame() {
    viewerModal.style.display = "none";
    viewerFrame.src = "";
    gameTitle.textContent = "No game selected";
}


function refreshFrame() {
    viewerFrame.src = viewerFrame.src;
}


function fullscreenFrame() {
    if (viewerFrame.requestFullscreen) {
        viewerFrame.requestFullscreen();
    }
}