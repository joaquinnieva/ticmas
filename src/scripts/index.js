const tabs = ['info', 'exp', 'skills'];
const separator = '_';
const sectionId = 'data';
const infoSections = tabs.map((tab) => {
  return tab + separator + sectionId;
});

const tabHandler = (tabName) => {
  const tabElement = document.getElementById(tabName);
  for (const tab of tabs) {
    const element = document.getElementById(tab);
    element.className = 'pointer btn-tab';
  }
  tabElement.className = 'pointer btn-tab active';

  const infoElement = document.getElementById(tabName + separator + sectionId);
  for (const section of infoSections) {
    const element = document.getElementById(section);
    element.className = 'hidden';
  }
  infoElement.className = 'info-visible';
};

for (const tab of tabs) {
  const tabElement = document.getElementById(tab);
  tabElement.addEventListener('click', () => tabHandler(tabElement.id));
}
