export const mexicanTab = () => {
  const box = document.getElementById('bxxx');

  const grid = document.createElement('div');
  grid.classList.add('box-grid');
  grid.innerHTML = `
    <div class='food-item'> 
      <div class='food-img' id='tacos'></div>
      <h2 class='food-name'>Tacos de Adobada</h2>
      <p>An awesome description about this item</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='nachos'></div>
      <h2 class='food-name'>Nachos</h2>
      <p>An awesome description about this item</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='tamales'></div>
      <h2 class='food-name'>Tamales</h2>
      <p>An awesome description about this item</p>
    </div>
  `

  box.append(grid)
}