// Halkan waxaan ku samaynaynaa typing effect-ga
const textElement = document.querySelector(".typing-text");
const words = ["Web Developer", "gymer", "baller"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChars = currentWord.substring(0, charIndex);
    
    textElement.textContent = currentChars;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100); // Xawaaraha qorista
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50); // Xawaaraha tirtirida
    } else {
        // Hadda wuu dhammeeyay qorista ama tirtirida
        isDeleting = !isDeleting;
        
        // Kani waa isbeddelka: Hubi inuu erayga xiga u gudbo haddii uusan tirtirayn
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length; // U gudub erayga xiga, dibna u bilow haddii uu dhammaado
        }
        
        setTimeout(typeEffect, 1000); // Hakadka inta u dhaxeysa ereyada
    }
}

// Bilaabidda function-ka (Waxaa lagu daray dib u dhac yar oo bilowga ah si uu u degto)
document.addEventListener("DOMContentLoaded", function() {
    if(textElement && words.length) {
        setTimeout(typeEffect, 1500); 
    }
});