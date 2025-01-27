import { ref } from 'vue';

export function useTypewriter(options = {
  typingSpeed: 150,
  pauseBetweenLines: 1000,
}) {
  const displayText = ref('');
  let currentTextIndex = 0;
  let currentCharIndex = 0;

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  async function typeText(texts: string[]) {
    while (currentTextIndex < texts.length) {
      const currentText = texts[currentTextIndex];
      
      // Type current text
      while (currentCharIndex < currentText.length) {
        // Check if we're at the start of an HTML tag
        if (currentText[currentCharIndex] === '<') {
          // Find the end of the tag
          const tagEnd = currentText.indexOf('>', currentCharIndex);
          if (tagEnd !== -1) {
            // Add the entire tag at once
            const fullTag = currentText.substring(currentCharIndex, tagEnd + 1);
            displayText.value = displayText.value + fullTag;
            currentCharIndex = tagEnd + 1;
            continue;
          }
        }
        
        // Normal character-by-character typing for non-tag text
        displayText.value = displayText.value + currentText[currentCharIndex];
        currentCharIndex++;
        await sleep(options.typingSpeed);
      }

      // Pause between texts
      if (currentTextIndex < texts.length - 1) {
        await sleep(options.pauseBetweenLines);
      }

      currentTextIndex++;
      currentCharIndex = 0;
    }
  }

  function reset() {
    displayText.value = '';
    currentTextIndex = 0;
    currentCharIndex = 0;
  }

  return {
    displayText,
    typeText,
    reset
  };
}
