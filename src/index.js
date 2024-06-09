import './style.css';
import printHome from './home';
import printMenu from './menu';
import printAbout from './about';



 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
const contentDiv = document.getElementById('content');

 const createButton = (text, id) =>  {
  const button = document.createElement(`button`);
  button.setAttribute("id", id);
  button.textContent = text;
  return button;
 };

 const nav = document.querySelector('nav');

 const headingNav  = [
   createButton('Home', 'home'), 
   createButton('About', 'about'),
   createButton('Menu', 'menu')
 ];

 headingNav.forEach(element => nav.appendChild(element));


 document.querySelector('#about').addEventListener('click', () =>  {
  contentDiv.innerHTML ='';
  printAbout();
})

document.querySelector('#home').addEventListener('click', () =>  {
  contentDiv.innerHTML ='';
  printHome();
})

document.querySelector('#menu').addEventListener('click', () =>  {
  contentDiv.innerHTML ='';
  printMenu();
})  

printHome();

