// STEP 2
export const tabCreate = () => {
  const box = document.getElementById('bxxx');
  const landing = document.querySelector('.landing');
  const tabNav = document.createElement('ul');
  tabNav.classList.add('tab-nav');
  tabNav.innerHTML = `
    <li class='tabs active' id='home'>Home</li>
    <li class='tabs' id='japanese'>Japanese</li>
    <li class='tabs' id='mexican'>Mexican</li>
    <li class='tabs' id='american'>American</li>
    <li class='tabs' id='italian'>Italian</li>
  `

  landing.insertBefore(tabNav, box);
}
