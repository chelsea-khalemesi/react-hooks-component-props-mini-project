import React from "react";



function Article({ title, date="January 1, 1970", preview, minutes }) {
    
 let emojis=""
 const minutesTaken = (minutes) => {
   if (minutes <= 30) {
    const cofeeCups = Math.ceil(minutes / 5);
     emojis="☕️ ".repeat (cofeeCups)
    } else {

        const bentoBoxes = Math.ceil(minutes / 10);
        emojis = "🍱".repeat (bentoBoxes)
    } 
     return `${emojis}${minutes} min read`

    
 }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}.{minutesTaken(minutes)}</small>
            <p>{preview}</p>
            
        </article>
    );
}

export default Article;