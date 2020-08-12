import Restaurant from './img/restaurant.jpg'
export const pageLoad = () => {
    const container = document.getElementById('content');

    const landing = document.createElement('div');
    landing.classList.add('landing');
    container.appendChild(landing);

    const header = document.createElement('div');
    header.classList.add('header');
    landing.appendChild(header);
    const h1 = document.createElement('h1');
    h1.innerText = 'IMMERSE YOURSELF IN CULINARY EXPERIENCES';
    h1.classList.add('h1')
    header.appendChild(h1);

    const para = document.createElement('p');
    para.innerText = "Hey there, you big YOU you! We are so fired up you picked Upper Crust above anyone else! Either by skill or luck, you have wandered into pizza utopia and we won't let you let this chance go to waste.";
    para.classList.add('hello');
    container.appendChild(para);

    // const img = document.createElement('img');
    // img.src = Restaurant;
    // img.classList.add('landing-img')
    // div.appendChild(img);
};
