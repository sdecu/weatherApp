
export default function printMenu() {
    const contentDiv = document.getElementById('content');
 const menuData = {
  gumboGlory: [
    {
      title: 'Jambalaya Gumbo (Chicken & Andouille Sausage)',
      price: 18.99,
      description: 'A hearty stew chock-full of tender chicken, spicy andouille sausage, and the holy trinity (bell pepper, onion, celery) simmered in a rich, dark roux.'
    },
    {
      title: 'Seafood Gumbo (Shrimp, Crawfish, & Crab)',
      price: 22.99,
      description: 'A seafood lover\'s dream! Fresh Gulf shrimp, juicy crawfish tails, and succulent crab meat nestled in a flavorful seafood stock with a hint of okra.'
    },
    {
      title: 'Vegetarian Gumbo (Seasonal Veggies & Smoked Sausage)',
      price: 16.99,
      description: 'A delicious twist on the classic. A medley of seasonal vegetables like okra, bell peppers, and corn gets a smoky kick from the addition of smoked sausage.'
    }
  ],
  poBoyParadise: [
    {
      title: 'Classic Fried Chicken Po\'Boy',
      price: 14.99,
      description: 'Crispy golden fried chicken with our special Cajun mayo, shredded lettuce, tomato, and pickles. A true taste of New Orleans!'
    },
    {
      title: 'Blackened Shrimp Po\'Boy',
      price: 17.99,
      description: 'Spicy blackened shrimp with remoulade sauce, shredded lettuce, tomato, and pickles. A fiery favorite!'
    },
    {
      title: 'Fried Catfish Po\'Boy',
      price: 16.99,
      description: 'Tender, flaky fried catfish dressed with our signature comeback sauce, lettuce, tomato, and pickles. A catfish classic!'
    }
  ],
  sidekicksSpice: [
    {
      title: 'Red Beans & Rice',
      price: 4.99,
      isSide: true
    },
    {
      title: 'Cajun Fried Corn',
      price: 3.99,
      isSide: true
    },
    {
      title: 'Spicy Jambalaya',
      price: 5.99,
      isSide: true
    },
    {
      title: 'Garlic Green Beans',
      price: 3.99,
      isSide: true
    }
  ]
};

function createMenuItem(item) {
  const menuItem = document.createElement('li');
  menuItem.classList.add('menu-item');

  const titleSpan = document.createElement('span');
  titleSpan.textContent = item.title;

  const priceSpan = document.createElement('span');
  priceSpan.classList.add('price');
  priceSpan.textContent = `$${item.price.toFixed(2)}`;  // Format price with two decimals

  menuItem.appendChild(titleSpan);

  if (item.isSide) {
menuItem.appendChild(priceSpan);
const descriptionPar = document.createElement('p');
descriptionPar.classList.add('menu-item-description');
descriptionPar.textContent = item.description;
menuItem.appendChild(descriptionPar);
} else {
const priceWithAddSpan = document.createElement('span');
priceWithAddSpan.classList.add('price');
priceWithAddSpan.textContent = `$${item.price.toFixed(2)} (add)`;
menuItem.appendChild(titleSpan);
menuItem.appendChild(priceWithAddSpan);
}

return menuItem;
}

function createMenuSection(sectionName, items) {
const section = document.createElement('section');
section.classList.add('menu-section');

const heading = document.createElement('h2');
heading.textContent = sectionName;
section.appendChild(heading);

const menuList = document.createElement('ul');
items.forEach(item => menuList.appendChild(createMenuItem(item)));
section.appendChild(menuList);

return section;
}

// Generate menu sections and append to container
contentDiv.appendChild(createMenuSection('Gumbo Glory (All Gumbo served with fluffy white rice)', menuData.gumboGlory));
contentDiv.appendChild(createMenuSection('Po\'Boy Paradise (Served on toasted Leidenheimer bread)', menuData.poBoyParadise));
contentDiv.appendChild(createMenuSection('Sidekicks with Spice (Choose two with any entree)', menuData.sidekicksSpice));   
}
