import { foodCatalog } from "./foodCatalog";

export const japaneseTab = () => {
  console.log(foodCatalog[0][0].name)
  const box = document.getElementById('bxxx');
  const grid = document.createElement('div');
  grid.classList.add('box-grid');
  grid.innerHTML = `
    <div class='food-item'> 
      <div class='food-img' id='sushi'></div>
      <h2 class='food-name'>${foodCatalog[0][0].name}</h2>
      <p>${foodCatalog[0][0].description}</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='takoyaki'></div>
      <h2 class='food-name'>${foodCatalog[0][1].name}</h2>
      <p>${foodCatalog[0][1].description}</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='katsu'></div>
      <h2 class='food-name'>${foodCatalog[0][2].name}</h2>
      <p>${foodCatalog[0][2].description}</p>
    </div>
  `

  box.append(grid)  
}