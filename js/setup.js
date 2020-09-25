'use strict';

var NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
var SURMAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
var COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
var EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
var generatedWizards = [];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var generateRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var generateObject = function () {
  var object = {
    name: generateRandomElement(NAMES) + ' ' + generateRandomElement(SURMAMES),
    coatColor: generateRandomElement(COAT_COLORS),
    eyeColor: generateRandomElement(EYES_COLORS)
  };
  return object;
};

for (var i = 0; i < 4; i++) {
  generateObject();
  generatedWizards.push(generateObject());
}

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content
.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var addRenderedWizardsToTheList = function (createdFragment, wizards, list) {
  for (var j = 0; j < wizards.length; j++) {
    createdFragment.appendChild(renderWizard(wizards[j]));
  }

  list.appendChild(createdFragment);
};

addRenderedWizardsToTheList(fragment, generatedWizards, similarListElement);

setup.querySelector(`.setup-similar`).classList.remove(`hidden`);

