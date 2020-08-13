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
      let tabId = e.target;
      displayTabContent(tabId);
      changeActive(tabId)
    })
  })
}

tabSelect();

const clearFields = () => {
  const div = document.getElementById('bxxx')
  div.innerHTML = ''
}

const displayTabContent = (tabId) => {
  // clearFields();
  (tabId.id === 'home') ? homeTab() :
  (tabId.id === 'japanese') ?  japaneseTab() :
  (tabId.id === 'mexican') ? mexicanTab() :
  (tabId.id === 'american') ? americanTab() :
  (tabId.id === 'italian') ? italianTab() :
  null;
  removeActive(tabId)
};

const changeActive = (target) => {
  target.classList.toggle('active');
}

const removeActive = (target) => {
  target.classList.remove('active')
}