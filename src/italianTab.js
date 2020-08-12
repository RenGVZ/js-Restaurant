export const italianTab = () => {
  const box = document.getElementById('bxxx');

  const grid = document.createElement('div');
  grid.classList.add('box-grid');
  grid.innerHTML = `
    <div class='food-item'> 
      <div class='food-img' id='pennepasta'></div>
      <h2 class='food-name'>Pesto pasta</h2>
      <p>An awesome description about this item</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='fruttidimare'></div>
      <h2 class='food-name'>Frutti di mare</h2>
      <p>An awesome description about this item</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='margheritapizza'></div>
      <h2 class='food-name'>Margherita pizza</h2>
      <p>An awesome description about this item</p>
    </div>
  `

  box.append(grid)
}