export const americanTab = () => {
  const box = document.getElementById('bxxx');

  const grid = document.createElement('div');
  grid.classList.add('box-grid');
  grid.innerHTML = `
    <div class='food-item'> 
      <div class='food-img' id='pancakes'></div>
      <h2 class='food-name'>Pancakes</h2>
      <p>An awesome description about this item</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='hamburger'></div>
      <h2 class='food-name'>Hamburger</h2>
      <p>An awesome description about this item</p>
    </div>
    <div class='food-item'> 
      <div class='food-img' id='hotdog'></div>
      <h2 class='food-name'>Hotdog</h2>
      <p>An awesome description about this item</p>
    </div>
  `

  box.append(grid)
}