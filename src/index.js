import './style.css';
import { pageLoad } from './pageLoad';
import { tabCreate } from './tabCreate'
import { homeTab } from './homeTab';
import { japaneseTab } from './japaneseTab';
import { mexicanTab } from './mexicanTab';
import { americanTab } from './americanTab';
import { italianTab } from './italianTab';
// import { foodCatalog } from './foodCatalog'

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
      clearFields();
      let tabId = e.target.id;
      displayTabContent(tabId);
      // clearFields();
    })
  })
}

tabSelect();

const clearFields = () => {
  const div = document.getElementById('bxxx')
  const h1 = document.querySelector('.header')
  const para = document.querySelector('.para');
  const ul = document.querySelector('.countries-ul');
  div.innerHTML = ''
//   ul.innerHTML = '';
}

const displayTabContent = (tabId) => {
  // clearFields();
  (tabId === 'home') ? homeTab() :
  (tabId === 'japanese') ?  japaneseTab() :
  (tabId === 'mexican') ? mexicanTab() :
  (tabId === 'american') ? americanTab() :
  (tabId === 'italian') ? italianTab() :
  console.log('djbekd');
};