export const japaneseTab = () => {
  const box = document.getElementById('bxxx');

  const grid = document.createElement('div');
  grid.classList.add('box-grid');
  grid.innerHTML = `
    <div class='food-item'> 
      <div class='food-img' id='sushi'></div>
      <h2 class='food-name'>Sushi</h2>
      <p>An awesome description about this item</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='takoyaki'></div>
      <h2 class='food-name'>Takoyaki</h2>
      <p>An awesome description about this item</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='katsu'></div>
      <h2 class='food-name'>Katsu Curry</h2>
      <p>An awesome description about this item</p>
    </div>
  `

  box.append(grid)
  // grid.appendChild(foodItem1, foodItem2, foodItem3)
}