# Papiro's Music Player
![papirosmusicplayer](https://github.com/user-attachments/assets/0bfdab6c-11a5-4777-8f6b-d3cc07b0fbf4)

A lightweight, customizable web-based music player designed with a mixture of neo-brutalist + retro "operating system" aesthetics.
It features a dual-window interface: a playback controller (`Player.exe`) and an interactive playlist (`Playlist.md`).

As a preview, you can test the designs [here](https://papirotheque.github.io/Papiros-music-player/) <- Toggle different themes in the dropdown menu below the player.

**Notes:** I have linked some songs I enjoy. Feel free to add your own songs. You can host them locally.

## Technical Overview

The player is built using vanilla web technologies, ensuring ease of integration without external dependencies.

- **HTML5:** Structured with containers for the player and playlist windows.
    
- **CSS3:** Utilizes a variable-driven approach (`:root`) to handle customization, as well as responsiveness.
    
- **Vanilla JavaScript:** Manages the `Audio` object API, playlist logic, and real-time progress bar updates.
    

## Download and installation

### 1. Download the `player` folder from this repo
### 2. Open `player.html` and/or edit the files directly
### 3. Enjoy! :)


## Customization Instructions

This project is designed to be easily adapted for personal use.

### 1. Modifying the Song List

To change the music tracks, open `player.js` and locate the `songs` array. Add or remove objects following this structure:

```JavaScript
const songs = [
    { 
        t: "Track Title", 
        a: "Artist Name", 
        s: "https://link-to-audio-file.mp3" 
    },
    // Add more tracks here
];
```

It supports the following formats: `.mp3`,`.mp4/.m4a`, `.wav/.ogg`

**Notes:** I'm not well-versed in JavaScript, so I wouldn't recommend changing anything else unless you know the syntax.


### 2. Styling and Theming

The visual appearance is controlled through CSS variables in `styles.css`.
You can change the entire theme by modifying the values in the `:root` selector:
I have personally added some comments to guide you through that process inside the file itself.

**Notes:** Use the search function in the code editor of choice (ex: `ctrl + F` in VSCode) to navigate through the different sections I prepared in the file.

#### The main CSS parts:

1. **Imports**
	- You can import fonts and other styles here.

2.  **Root values**
	- This is the most important part for theming. Here are the colors and values you can change and reference in the WHOLE document.

3.   **Player settings**
	- Here are the player's specific visual and responsive settings.




## Key Features

- **Dynamic Playlist:** Automatically generates list items based on the JavaScript data.

- **High customization:** The ability and ease for the user to customize the player.
    
- **Responsive Design:** Uses Flexbox for a layout that adapts to different screen sizes.
    
- **State Management:** Highlighting for the currently playing track and automatic playback of the next song in the list.


## License

The source code for this player is licensed under the **MIT License**. You are free to use, modify, and distribute it.

If you want to fork this project or add to your website, it would be amazing if you could link my [page](https://papiro.info)/[github](https://github.com/papirotheque) so more people can see and use the project.
