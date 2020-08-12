import './style.css';
import { pageLoad } from './pageLoad';
import { tabCreate } from './tabCreate'
import { homeTab } from './homeTab';
import { japaneseTab } from './japaneseTab';
import { mexicanTab } from './mexicanTab';
import { americanTab } from './americanTab';
import { italianTab } from './italianTab';

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
  h1.remove();
  para.remove();
  ul.remove();
}

const displayTabContent = (tabId) => {
  (tabId === 'home') ? homeTab() : 
  (tabId === 'japanese') ?  japaneseTab() :
  (tabId === 'mexican') ? mexicanTab() :
  (tabId === 'american') ? americanTab() :
  (tabId === 'italian') ? italianTab() :
  null;
}