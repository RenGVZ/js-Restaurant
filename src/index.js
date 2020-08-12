import './style.css';
import { pageLoad } from './pageLoad';
import { tabCreate } from './tabCreate'
import { homeTab } from './homeTab';

// STEP 1
pageLoad();

// STEP 2
tabCreate();

// STEP 3 - HOME TAB
homeTab();

// STEP 4 - DEFINE RUN PROCESS
const tabSelect = () => {
  const tabs = document.querySelectorAll('.tabs');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      let tabId = e.target.id;
      clearFields();
      displayTabContent(tabId);
    })
  })
}

tabSelect();

const clearFields = () => {
  const h1 = document.querySelector('.header');
  const para = document.querySelector('.para');
  const ul = document.querySelector('.countries-ul');
  h1.innerText = '';
  para.innerText = '';
  ul.innerHTML = '';
}

const displayTabContent = (tabId) => {
  // (tab.id === 'japanese') ? 
}