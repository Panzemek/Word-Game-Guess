# Word-Game-Guess


## Description
This project runs a game of what is essentially hangman.  Players will guess letters until they either figure out the word or run out of guesses.  

## Tools
HTML

CSS

Javascript


The use of HTML and CSS were barebones.  The Javascript functioning is the primary focus.

## Under the Hood
The game runs by tracking several elements:

It begins by pressing a button.

It selects a random word from a small array of options.

It generates the blank spaces of the word and displays them.

It listens for keystrokes while running, disregarding duplicated keystrokes.

It tracks wrong guesses and displays them.

It tracks right guesses and places them in the correct spot in the display.

It tracks wins and displays them.

It resets when the game is won or lost.

## Challenges
The Win and Loss alerts do not allow the final keystroke when winning or losing to display.  I also intended to use some javascript to display remaining guesses in a graphical manner, but scaled back my goal when we beginning learning jQuery and it appeared I would be better served learning that tool.


Managing bootstrap formatting is still somewhat difficult for me; I need additional practice using their grid system and learning the page flow for elements.

