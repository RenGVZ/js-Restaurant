// STEP 1
export const pageLoad = () => {
    const container = document.getElementById('content');

    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const navUl = document.createElement('ul');
    navUl.classList.add('navUl');
    navUl.innerHTML = `
      <li class='links'><i class="fas fa-code"></i></li>
      <li class='links'><i class="fab fa-github"></i></li>
      <li class='links'><i class="fab fa-linkedin"></i></li>
    `;

    navbar.appendChild(navUl)
    container.appendChild(navbar);

    const landing = document.createElement('div');
    landing.classList.add('landing');
    container.appendChild(landing);

    const box = document.createElement('div');
    box.classList.add('box');
    box.id = 'bxxx'
    landing.appendChild(box);

  return { box }
};
