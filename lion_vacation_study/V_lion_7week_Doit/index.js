const category = e.currentTarget.dataset.id;

// items data
const player = [
    {
    title: '시어드 자켓',
    category: 'top',
    position: '상의',
    img: 'img/시어드 자켓.png',
    desc: `적당히 크롭 된 기장감과 심플한 디테일로<br>
    편안하게 코디하기 좋은 베이직한 재킷을 소개드려요.<br><br>

    포멀한 아웃핏이 돋보이는 쇼트한 기장감과<br>
    폴리/레이온 소재로 제작되어 소프트한 터치감이 특징입니다.<br><br>`,
    },
    {
    title: '라인 와이드 팬츠',
    category: 'bottom',
    position: '하의',
    img: 'img/라인와이드팬츠.png',
    desc: `포멀하고 매니시한 무드가 돋보이는<br>
    와이드한 핏 감의 핀턱 팬츠를 소개 드려요.<br><br>

    양쪽 레그 라인 후면 중앙의 일자로 곧게 뻗은<br>
    절개 라인으로 은은하게 포인트를 주었으며,<br><br>

    전면의 하프 핀턱 디자인으로<br>
    더욱 볼륨감 있는 아웃핏이 완성됩니다.<br><br>`
    }
    ] ;

window.addEventListener('DOMContentLoaded', function() {
    displayPlayerItems(player);
    displayPlayerItems();
})

// displayPlayerItems 함수 내용
function displayPlayerItems(playerItmes){
    let displayPlayer = playerItmes.map(function(item) {

        // return할 템플릿 내용(js)
            return `<article class="player-item">
            <div class="img-info">
                <img src="${item.img}" alt=""${item.title}>
            </div>
            <div class="item-info">
                <header>
                    <h2>${item.title}</h2>
                    <h4 class="price">${item.position}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
        </article>`;
    });
    displayPlayer = displayPlayer.join("");
    sectionCenter.innerHTML = displayPlayer;
}

// DOM
const sectionCenter = document.querySelector('.section-center');
const containerBtn = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', function() {
    displayPlayerItems(player);
    displayPlayerItems();
})

function displayPlayerButtons(){
    // 생략
    const filterBtns = containerBtn.querySelectorAll('.filter-btn');
    // filter items
    filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
    const category = e.currentTarget.dataset.id;
    const playerCategory = player.filter(function(playerItem) {
    if(playerItem.category === category){
    return playerItem;
    }
    });
    if(category === 'all'){
    displayPlayerItems(player);
    }
    else{
    displayPlayerItems(playerCategory);
    }
    });
    });
    };
