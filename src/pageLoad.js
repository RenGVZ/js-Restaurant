// STEP 1
export const pageLoad = () => {
    const container = document.getElementById('content');

    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const navUl = document.createElement('ul');
    navUl.classList.add('navUl');
    navUl.innerHTML = `
      <li class='links'><a href="https://www.gavinrene.codes" target="_blank"><i class="fas fa-code"></i></a></li>
      <li class='links'><a href="https://github.com/RenGVZ" target="_blank" <i class="fab fa-github"></i></a></li>
      <li class='links'><a href="https://www.linkedin.com/in/gavin-garza/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
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
