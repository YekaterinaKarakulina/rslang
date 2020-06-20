import { LINKS, CHILDREN } from './constants.speakit';

export const renderDom = () => {
    const page = document.querySelector('.page')
    const wrapper = document.createElement('div');
    wrapper.classList = 'wrapper__speakit';
    wrapper.innerHTML = `
    <div class="start-page__speakit">
        <h1 class="title__speakit">Говори</h1>
        <h3 class="start-page__text_speakit">Нажми на слово, чтобы послушать.
            <br>Нажми на кнопку говорить и говори слова.</h3>
        <button class="button start-page__btn_speakit">Старт</button>
    </div>
    <div class="main__speakit hidden">
        <div class="header__speakit">
            <div class="level__container_speakit">
                <label for="level">Уровень</label>
                <select name="Level" class="level__speakit" id="level">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <label for="page">Страница</label>
                <input type="number" name="Page" class="page__speakit" id="page__speakit" min="1" max="60" value="1">
            </div>
            <div class="wrapper__stars"><img class="star hidden" src="./assets/img/star-win.svg"></div>
        </div>
        <div class="image__container_speakit"></div>
        <div class="translate__speakit"></div>
        <div class="result-speak__speakit hidden"></div>
        <div class="wrapper__cards_speakit"></div>
        <div class="wrapper__btn_speakit ">
            <button class="button btn-restart__speakit ">Заново</button>
            <button class="button btn-speak__speakit ">Говорить</button>
            <button class="button btn-result__speakit">Результаты</button>
        </div>
    </div>
    <div class="results__speakit hidden">
        <p class="error__speakit">Error<span class="error__speakit_curr">10</span></p>
        <div class="results__item_error"></div>
        <p class="correct__speakit">Correct<span class="correct__speakit_curr">0</span></p>
        <div class="results__item_correct"></div>
        <div class="btn-results__speakit">
            <button class="button btn-return__speakit">Назад</button></button>
            <button class="button btn-new-game__speakit">Новая игра</button>
        </div>
    </div>`
    page.append(wrapper)
}

export const addCard = (word, transcription, wordTranslate, img, audio) => {
    const wrapper = document.querySelector('.wrapper__cards_speakit')
    const card = document.createElement('div')
    card.classList = 'card-speakit'
    card.id = word
    card.innerHTML = ` <img src="./assets/img/icon-audio.png" class="icon icon__speakit" alt="icon">
    <div class='card-speakit__audio'>${LINKS.LINK__AUDIO}${audio}</div>
    <div class= 'card-speakit__img'>${LINKS.LINK__IMG}${img}</div>
    <div class="card-speakit__translate">${wordTranslate}</div>
    <div class="wrapper-text__speakit">
        <p class="card-speakit__word">${word}</p>
        <p class="card-speakit__transcription">${transcription}</p>  
    </div>`
    wrapper.append(card)
};

export const addCardResult = (word, transcription, wordTranslate, img, audio) => {
    const results = document.querySelector('.results__item_error')
    const result = document.createElement('div')
    result.classList = 'result-speakit'
    result.innerHTML = ` <img src="./assets/img/icon-audio.png" class="result icon icon__speakit" alt="icon">
    <div class='result result-speakit__audio'>${LINKS.LINK__AUDIO}${audio}</div>
    <div class= 'result result-speakit__img'>${LINKS.LINK__IMG}${img}</div>
    <p class="result result-speakit__word">${word}</p>
    <p class="result result-speakit__transcription">${transcription}</p>
    <p class="result result-speakit__translate">${wordTranslate}</p>
    </div>`
    results.append(result)
}

export const removeCards = () => {
    const cards = document.querySelectorAll('.card-speakit');
    cards.forEach((el) => {
        el.remove()
    })
};

export const removeCardsResults = () => {
    const results = document.querySelectorAll('.result-speakit');
    results.forEach((el) => {
        el.remove()
    })
};

export const addStar = () => {
    const stars = document.querySelectorAll('.star');
    const cards = document.querySelectorAll('.active-card__speakit');
    if (stars.length < cards.length + 1) {
        const star = document.createElement('img');
        star.src = LINKS.STAR_WIN_SRC;
        star.classList = 'star';
        stars[CHILDREN.FIRST].before(star)
    }
}

export const removeStars = () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach((el, index) => {
        if (el.classList.contains('star') && !el.classList.contains('hidden')) {
            stars[index].remove()
        }
    })
}