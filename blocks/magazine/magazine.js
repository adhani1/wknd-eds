
export default async function decorate(block) {

    const response=await fetch(`/query-index.json`)
    const content =await response.json()
    const blockContent = document.createElement('div');
    blockContent.id = 'blockContent';  
    block.appendChild(blockContent);
    content.data.filter(data => data.pagename==='magazine-details').forEach(element => {
        // Create the card container
        const card = document.createElement('div');
        card.classList.add('card'); 
        
        // Create the image element
        const image = document.createElement('img');
        image.src = element.image;  
        image.alt = element.title;  
        card.appendChild(image);    
    
        // Create the text content container for title and description
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
    
        // Create the title element
        const title = document.createElement('h3');
        title.textContent = element.title;
        textContainer.appendChild(title); // Append the title
    
        // Set the maximum length for the description
        const maxDescriptionLength = 50;  

        // Shorten the description and add "..." if it's too long
        let shortDescription = element.description;
        if (shortDescription.length > maxDescriptionLength) {
            shortDescription = shortDescription.substring(0, maxDescriptionLength) + '...';
        }

        // Create the description element
        const description = document.createElement('p');
        description.textContent = shortDescription;
        textContainer.appendChild(description); 
    
        // Append the text container to the card
        card.appendChild(textContainer);
        card.addEventListener('click', ()=> {
            window.location.href = element.path; 
        });
    
        // Append the anchor tag to blockContent
        blockContent.appendChild(card);
    
        // Optionally, append blockContent to block if necessary
        block.appendChild(blockContent);
    });
    
    

}
