const typed = new Typed(".typed", {
  stringsElement: "#content-change", // ID of the element containing string children
  typeSpeed: 75, // Speed to type each word
  startDelay: 300, // Speed delay to start the animation. 0 = no delay
  backSpeed: 75, // Speed to clear the text
  smartBackspace: true, // Delete only the words that are new in a text string.
  shuffle: false, // Alter the order in which you write the words.
  backDelay: 1500, // Timeout after finish typing a word.
  loop: true,
  loopCount: false, // Times to loop. false = infinite
  showCursor: true, // Show cursor as a blinking line
  cursorChar: "|", // Character for the cursor
  contentType: "html", // 'html' or 'null' for text without format
});
