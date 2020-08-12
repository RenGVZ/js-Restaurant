import { foodCatalog } from './foodCatalog'
export const americanTab = () => {
  const box = document.getElementById('bxxx');

  const grid = document.createElement('div');
  grid.classList.add('box-grid');
  grid.innerHTML = `
    <div class='food-item'> 
      <div class='food-img' id='pancakes'></div>
      <h2 class='food-name'>${foodCatalog[2][0]['name']}</h2>
      <p>${foodCatalog[2][0]['description']}</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='hamburger'></div>
      <h2 class='food-name'>${foodCatalog[2][1]['name']}</h2>
      <p>${foodCatalog[2][1]['description']}</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='hotdog'></div>
      <h2 class='food-name'>${foodCatalog[2][2]['name']}</h2>
      <p>${foodCatalog[2][2]['description']}</p>
    </div>
  `

  box.append(grid)
}