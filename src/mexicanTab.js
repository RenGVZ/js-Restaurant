import { foodCatalog } from './foodCatalog'
export const mexicanTab = () => {
  const box = document.getElementById('bxxx');

  const grid = document.createElement('div');
  grid.classList.add('box-grid');
  grid.innerHTML = `
    <div class='food-item'> 
      <div class='food-img' id='tacos'></div>
      <h2 class='food-name'>${foodCatalog[1][0]['name']}</h2>
      <p>${foodCatalog[1][0]['description']}</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='nachos'></div>
      <h2 class='food-name'>${foodCatalog[1][1]['name']}</h2>
      <p>${foodCatalog[1][1]['description']}</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='tamales'></div>
      <h2 class='food-name'>${foodCatalog[1][2]['name']}</h2>
      <p>${foodCatalog[1][2]['description']}</p>
    </div>
  `

  box.append(grid)
}