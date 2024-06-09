export default function printAbout()    {
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
      
      
      function displayAboutPage() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ''; // Clear any existing content
      
        const aboutHeading = createHeading('Rosco\'s Cajun Fixin\'s: A Taste of Tradition', 2);
        const aboutParagraph1 = createParagraph('Rosco\'s Cajun Fixin\'s ain\'t your average restaurant. We\'re a family-owned establishment passed down through generations, bringin\' authentic Cajun flavors to your table since 1975.');
        const aboutParagraph2 = createParagraph('Our story began with Mama Rosco, a true Cajun cook with a passion for fresh ingredients and bold spices. Her recipes, passed down to her children and grandchildren, are the heart and soul of our menu. We use only the finest ingredients, sourced locally whenever possible, to create dishes that are bursting with flavor and tradition.');
        const aboutParagraph3 = createParagraph('At Rosco\'s, we believe in good food, good company, and good times. Come on down, y\'all, and experience the warmth of Cajun hospitality. We guarantee you\'ll leave with a full belly and a smile on your face!');
      
        contentDiv.appendChild(aboutHeading);
        contentDiv.appendChild(aboutParagraph1);
        contentDiv.appendChild(aboutParagraph2);
        contentDiv.appendChild(aboutParagraph3);
      }
      
      displayAboutPage();
      
}