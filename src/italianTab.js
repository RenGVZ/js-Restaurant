import { foodCatalog } from './foodCatalog';
export const italianTab = () => {
  const box = document.getElementById('bxxx');

  const grid = document.createElement('div');
  grid.classList.add('box-grid');
  grid.innerHTML = `
    <div class='food-item'> 
      <div class='food-img' id='pennepasta'></div>
      <h2 class='food-name'>${foodCatalog[3][0]['name']}</h2>
      <p>${foodCatalog[3][0]['description']}</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='fruttidimare'></div>
      <h2 class='food-name'>${foodCatalog[3][1]['name']}</h2>
      <p>${foodCatalog[3][1]['description']}</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='margheritapizza'></div>
      <h2 class='food-name'>${foodCatalog[3][2]['name']}</h2>
      <p>${foodCatalog[3][2]['description']}</p>
    </div>
  `

  box.append(grid)
}