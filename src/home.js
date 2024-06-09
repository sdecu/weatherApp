export default function printHome() {
    const contentDiv = document.getElementById('content');

 const createHeading = (text, level) => {
   const heading = document.createElement(`h${level}`);
   heading.textContent = text;
   return heading;
 };
 
 const createParagraph = (text) => {
   const paragraph = document.createElement('p');
   paragraph.textContent = text;
   return paragraph;
 };
 
 const content = [
   createHeading('Rosco\'s Cajun Fixin\'s: Made with Real Louisiana Love', 1),
   createHeading('Come on down, y\'all, and get a taste of the real deal!', 2),
   createParagraph('At Rosco\'s, we ain\'t messin\' around with fancy talk. We serve up down-home Cajun cookin\' made with the freshest ingredients this side of the Mississippi. We source our seafood straight from the Gulf, our vegetables come bursting with garden freshness, and our spices? Well, let\'s just say they\'ll have you tappin\' your toes and sayin\', "Laissez les bons temps rouler!"'),
   createHeading('Rosco\'s: Where Gumbo Ain\'t No Mystery', 2),
   createParagraph('Forget fancy titles, at Rosco\'s we got seasoned Cajun chefs who know their roux from their remoulade. These folks ain\'t just cooks, they\'re gumbo gurus and etouffee experts. They\'ve spent years perfectin\' their craft, learnin\' the secrets passed down through generations. So when you order a plate at Rosco\'s, you know you\'re gettin\' authentic Cajun cookin\' made with love and honed by skill. We don\'t need fancy labels, just come hungry and ready to taste the real deal!')
 ];
 
 content.forEach(element => contentDiv.appendChild(element));

}
 