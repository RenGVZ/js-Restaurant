// STEP 3 HOME TAB
export const homeTab = () => {
  const box = document.getElementById('bxxx');

  const homeHeader = document.createElement('h1');
  homeHeader.classList.add('header');
  homeHeader.textContent = 'IMMERSE YOURSELF IN CULINARY EXPERIENCES FROM AROUND THE WORLD';

  const para = document.createElement('p');
  para.classList.add('para');
  para.innerText = 'Choose from any of these world-class menus from around the world'
  
  const images = document.createElement('ul');
  images.classList.add('countries-ul');
  images.innerHTML = `
    <li class='image-text'>Japan
      <div class='image-thumb'id='jp'></div>
    </li>
    <li class='image-text'>Mexico
      <div class='image-thumb'id='mx'></div>
    </li>
    <li class='image-text'>America
      <div class='image-thumb'id='am'></div>
    </li>
    <li class='image-text'>Italy
      <div class='image-thumb'id='it'></div>
    </li>
  `
  
  box.append(homeHeader, para, images);

}