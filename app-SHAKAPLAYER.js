/**
 * PLAYER SELECTION
 */

const playerEngineOptions = {
    aamp: "aamp",
    videotag: "videotag",
    shaka: "shaka"
};

const playerEngine = playerEngineOptions.shaka;

var videoA;
var videoB;

// --- Assume these are defined in a suitable scope ---
let shakaPlayerA = null; // Reference to the player instance for screen A
let shakaPlayerB = null; // Reference to the player instance for screen B


/**
 * KEY PRESS HANDLING
 */

function keyMute() {
    //goto Previous button
    console.log(`DEBUG PURPOSE: KeyMute, currentPos = ${currentPos}`);
    if (currentPos == 0) {
        console.log("DEBUG PURPOSE:mediafocus for  screen A");
        videoA = document.getElementById('videoA');
        videoA.muted = true;
    } else if (currentPos == 1) {
        console.log("DEBUG PURPOSE: media focus for screen B");
        videoB = document.getElementById('videoB');
        videoB.muted = true;
    }
}


function keyUnmute() {
    //goto Previous button
    console.log(`DEBUG PURPOSE: KeyUnmute, currentPos = ${currentPos}`);
    if (currentPos == 0) {
        console.log("DEBUG PURPOSE:mediafocus for  screen A");
        videoA = document.getElementById('videoA');
        videoA.muted = false;
    } else if (currentPos == 1) {
        console.log("DEBUG PURPOSE: media focus for screen B");
        videoB = document.getElementById('videoB');
        videoB.muted = false;
    }
}

function keyResume() {
    console.log(`DEBUG PURPOSE: KeySeek, currentPos = ${currentPos}`);
    if (currentPos == 0) {
        console.log("DEBUG PURPOSE : Seeking screen A");
        var videoA = document.getElementById('videoA');
        videoA.currentTime += 0.5;
    } else if (currentPos == 1) {
        console.log("DEBUG PURPOSE : Seeking screen B");
        var videoB = document.getElementById('videoB');
        videoB.currentTime += 0.5;
    }
}

function keyPause() {
    console.log(`DEBUG PURPOSE: KeyPause, currentPos = ${currentPos}`);
    if (currentPos == 0) {
        console.log("DEBUG PURPOSE : Pausing screen A");
        videoA = document.getElementById('videoA');
        videoA.pause();
    } else if (currentPos == 1) {
        console.log("DEBUG PURPOSE : Pausing screen B");
        videoB = document.getElementById('videoB');
        videoB.pause();
    }
}

function keyPlay() {
    console.log(`DEBUG PURPOSE: KeyPlay, currentPos = ${currentPos}`);
    if (currentPos == 0) {
        console.log("DEBUG PURPOSE : Playing screen A");
        videoA = document.getElementById('videoA');
        videoA.play();
    } else if (currentPos == 1) {
        console.log("DEBUG PURPOSE : Playing screen B");
        videoB = document.getElementById('videoB');
        videoB.play();
    }
}

function keySeek(value) {
    console.log(`DEBUG PURPOSE: KeySeek, currentPos = ${currentPos}`);
    if (currentPos == 0) {
        console.log("DEBUG PURPOSE : Seeking screen A");
        videoA = document.getElementById('videoA');
        videoA.currentTime += value;
    } else if (currentPos == 1) {
        console.log("DEBUG PURPOSE : Seeking screen B");
        videoB = document.getElementById('videoB');
        videoB.currentTime += value;
    }
}
function keyLeft() {
    //goto Previous button
    removeFocus();
    if (currentPos > 0) {
        currentPos--;
    } else {
        currentPos = components.length - 1;
    }
    currentObj = components[currentPos];
    addFocus();
    console.log(`DEBUG PURPOSE: KeyLeft, currentPos = ${currentPos}`);
    if (currentPos == 0) {
        console.log("DEBUG PURPOSE:mediafocus for  screen A");

        //videoA.mediaFocus = 1;
    } else if (currentPos == 1) {
        console.log("DEBUG PURPOSE: media focus for screen B");

        //videoB.mediaFocus = 2;
    }
}

function keyRight() {
    //goto Next button
    removeFocus();
    if (currentPos < components.length - 1) {
        currentPos++;
    } else {
        currentPos = 0;
    }
    currentObj = components[currentPos];
    addFocus();
    console.log(`DEBUG PURPOSE: KeyRight, currentPos = ${currentPos}`);

    if (currentPos == 0) {
        console.log("DEBUG PURPOSE: mediafocus for screen A");

        //videoA.mediaFocus = 1;
    } else if (currentPos == 1) {
        console.log("DEBUG PURPOSE: media focus for screen B");

        //videoB.mediaFocus = 2;
    }

}

function keyUp() {
    if ((components[currentPos] == dropdownA) && (dropDownAListVisible)) {
        prevVideoASelect();
    } else if ((components[currentPos] == dropdownB) && (dropDownBListVisible)) {
        prevVideoBSelect();
    }
}

function keyDown() {
    if ((components[currentPos] == dropdownA) && (dropDownAListVisible)) {
        nextVideoASelect();
    } else if ((components[currentPos] == dropdownB) && (dropDownBListVisible)) {
        nextVideoBSelect();
    }
}

// Move to previous video url in the selection list A
function prevVideoASelect() {
    if (listAIndex > 0) {
        listAIndex--;
    } else {
        listAIndex = dropdownA.options.length - 1;
    }
    this.dropdownA.options[listAIndex].selected = true;
}

// Move to next video url in the selection list A
function nextVideoASelect() {
    if (listAIndex < dropdownA.options.length - 1) {
        listAIndex++;
    } else {
        listAIndex = 0;
    }
    dropdownA.options[listAIndex].selected = true;
}

// Move to previous video url in the selection list B
function prevVideoBSelect() {
    if (listBIndex > 0) {
        listBIndex--;
    } else {
        listBIndex = dropdownB.options.length - 1;
    }
    dropdownB.options[listBIndex].selected = true;
}

// Move to next video url in the selection list B
function nextVideoBSelect() {
    if (listBIndex < dropdownB.options.length - 1) {
        listBIndex++;
    } else {
        listBIndex = 0;
    }
    dropdownB.options[listBIndex].selected = true;
}


function showDropDownA() {
    dropDownAListVisible = true;
    var n = dropdownA.options.length;
    dropdownA.size = n;
}

function hideDropDownA() {
    dropDownAListVisible = false;
    dropdownA.size = 1;
    console.log("DEBUG PURPOSE: Reached hideDropDownA and  startStreamPlayback calling ");
    startStreamPlayback(dropdownA.options[listAIndex].value, true, "A");
}

function showDropDownB() {
    dropDownBListVisible = true;
    var n = this.dropdownB.options.length;
    dropdownB.size = n;
}

function hideDropDownB() {
    dropDownBListVisible = false;
    dropdownB.size = 1;
    console.log("DEBUG PURPOSE: Reached hideDropDownB and  startStreamPlayback calling ");
    startStreamPlayback(dropdownB.options[listBIndex].value, true, "B");
}

function startStreamPlayback(url, multiView, screen) {
    console.log("DEBUG PURPOSE:startStreamPlayback called ");
    console.log("Playing URL: " + url + " multiView: " + multiView);
    console.log("Current screen: " + screen);
    // According to screen load the player instance
    if (screen === "A") {
        if (playerEngine === playerEngineOptions.videotag) {
            console.log("DEBUG PURPOSE:playerengine videotag Received in Screen A");
            if (videoA) {
                try {
                    videoA.destroy();
                }
                catch (error) {
                    console.error("DEBUG PURPOSE: Error destroying previous player for Screen A (might be already destroyed):", error);
                }
                finally {
                    videoA = null; // Clear the reference regardless
                }
            }
            videoA = document.createElement('video');
            videoA = document.getElementById('videoA');
            videoA.src = url;
            videoA.autoplay = true;
            videoA.muted = true;
            videoA.play();
        } else if (playerEngine === playerEngineOptions.aamp) {
            playerA.load(url, true, "", multiView);
            drawVideoRectHelper("A");
        } else if (playerEngine === playerEngineOptions.shaka) {

            if (shakaPlayerA) {
                try {
                    shakaPlayerA.destroy();
                }
                catch (error) {
                    console.error("DEBUG PURPOSE: Error destroying previous player for Screen A (might be already destroyed):", error);
                }
                finally {
                    shakaPlayerA = null; // Clear the reference regardless
                }
            }
            shaka.polyfill.installAll();
            videoA = document.getElementById('videoA');
            videoA.autoplay = true;
            videoA.decryptToHost = false; // Screen A uses SVP secure memory
            console.log("DEBUG PURPOSE: Screen A decryptToHost set to FALSE (SVP mode)");
            //videoA.muted = false;
            console.log(" Loading " + url + " using SHAKA");

            console.log("DEBUG PURPOSE:Screen A Encrytpted configure for widewine ");

            const shakaDrmConfig = {
                drm: {
                    servers: {
                        'com.widevine.alpha': 'https://cwip-shaka-proxy.appspot.com/no_auth'
                    }
                }
            };
            const videoUrl = url; // Assuming 'url' is defined elsewhere
            console.log('DEBUG PURPOSE: videoa started playing..');
            shakaPlayerA = setupPlayer(videoA, shakaDrmConfig, videoUrl);
            //shakaPlayerA.log.setLevel(shaka.log.Level.DEBUG);

        } else if (playerEngine === playerEngineOptions.videotag) {
            console.log("DEBUG PURPOSE:playerengine videotag Received in Screen A");
            videoA.src = url;
            videoA.autoplay = true;
            videoA.muted = true;
            videoA.play();
        }
    } else if (screen === "B") {
        if (playerEngine === playerEngineOptions.videotag) {
            console.log("DEBUG PURPOSE:playerengine videotag Received in Screen B");
            if (videoB) {
                try {
                    videoB.destroy();
                }
                catch (error) {
                    console.error("DEBUG PURPOSE: Error destroying previous player for Screen A (might be already destroyed):", error);
                }
                finally {
                    videoB = null; // Clear the reference regardless
                }
            }
            videoB = document.createElement('video');
            videoB = document.getElementById('videoB');
            videoB.src = url;
            videoB.autoplay = true;
            videoB.play();
        } else if (playerEngine === playerEngineOptions.aamp) {
            playerB.load(url, true, "", multiView);
            drawVideoRectHelper("B");
        } else if (playerEngine === playerEngineOptions.shaka) {

            if (shakaPlayerB) {
                try {
                    shakaPlayerB.destroy();
                }
                catch (error) {
                    console.error("DEBUG PURPOSE: Error destroying previous player for Screen B (might be already destroyed):", error);
                }
                finally {
                    shakaPlayerB = null; // Clear the reference regardless
                }
            }
            // Install Shaka polyfills
            shaka.polyfill.installAll();
            videoB = document.getElementById('videoB');

            videoB.autoplay = true;
            videoB.decryptToHost = true; // Screen B uses host memory to avoid device memory exhaustion
            console.log("DEBUG PURPOSE: Screen B decryptToHost set to TRUE (host memory mode)");
            //videoB.muted = false;
            console.log("Loading " + url + " using SHAKA");


            const shakaDrmConfigB = {
                drm: {
                    servers: {
                        'com.widevine.alpha': 'https://cwip-shaka-proxy.appspot.com/no_auth'
                    }
                }
            };

            const videoUrl = url; // Assuming 'url' is defined elsewhere
            console.log('DEBUG PURPOSE: videob started playing..');
            shakaPlayerB = setupPlayer(videoB, shakaDrmConfigB, videoUrl);
            //shakaPlayerB.log.setLevel(shaka.log.Level.DEBUG);





        } else if (playerEngine === playerEngineOptions.videotag) {
            console.log("DEBUG PURPOSE:playerengine videotag Received in Screen B");
            var videoB = document.getElementById('videoB');
            videoB.src = url;
            videoB.autoplay = true;
            videoB.muted = false;
            videoB.play();
        }
    }
}

async function setupPlayer(videoElement, drmConfig, mediaUrl) {
    shaka.polyfill.installAll();

    console.log("Creating Shaka Player instance");
    const player = new shaka.Player(); // Create player instance WITHOUT video element

    // Add error event listener early
    player.addEventListener('error', (event) => {
        console.error('Shaka Player Error Code:', event.detail.code, 'Object:', event.detail);
        // Optionally destroy player on error
        player.destroy().then(() => console.log('Player destroyed due to error.'));
    });

    // Attach event listener for playback end to the VIDEO element
    videoElement.addEventListener('ended', () => {
        console.log('Video playback has ended. Destroying Shaka Player.');
        player.destroy().then(() => {
            console.log('Player destroyed successfully after playback ended.');
        }).catch((error) => {
            console.error('Error destroying player:', error);
        });
    });

    try {
        console.log("Attaching player to video element");
        player.attach(videoElement); // *** Attach the player ASYNCHRONOUSLY ***
        console.log("Player attached successfully.");

        player.resetConfiguration();
        player.configure(drmConfig); // Configure after attaching

        console.log("DEBUG PURPOSE:Setting MediaFocus for Screen B now"); // Or handle MediaFocus appropriately
        console.log("Loading " + mediaUrl + " using SHAKA");
        player.load(mediaUrl); // Load the media
        console.log('The video has been loaded successfully!');

        return player;
        // Autoplay is often handled by the video tag attribute,
        // but you might need to call videoElement.play() explicitly
        // depending on browser policies if the attribute isn't sufficient.
        // videoElement.play(); // May be needed

    } catch (error) {
        console.error('Error setting up Shaka Player:', error);
        // Ensure cleanup even if attach or load fails
        if (player) {
            player.destroy();
        }
    }
}

// helper function to set video position
function drawVideoRectHelper(screenName) {
    let video = document.getElementById(screenName === "A" ? "videoA" : "videoB");
    let w = 192; // width
    let h = 108; // height
    let x = 300; // align left
    let y = 400; // place at 80% of screen height
    video.style.width = w + "px";
    video.style.height = h + "px";
    video.style.top = y + "px";

    if (screenName === "A") {
        video.style.left = x + "px";
        playerA.setVideoRect(x, y, w, h); // place video using graphics plane coordinates
    } else if (screenName === "B") {
        let x = 600; // add first div width
        video.style.left = x + "px";
        playerB.setVideoRect(x, y, w, h); // place video using graphics plane coordinates
    }
}


function ok() {
    console.log("DEBUG PURPOSE:function Ok Received ");

    switch (currentPos) {
        case 0:
            console.log("DEBUG PURPOSE:function Ok Case0 Received ");
            if (dropDownAListVisible) {
                hideDropDownA();
            } else {
                showDropDownA();
            }
            break;
        case 1:
            console.log("DEBUG PURPOSE:function Ok Case1 Received ");
            if (dropDownBListVisible) {
                hideDropDownB();
            } else {
                showDropDownB();
            }
            break;
        default:
            console.log("DEBUG PURPOSE:function Ok default Case Received ");
            break;
    }
}

function addFocus() {
    if (currentObj) {
        currentObj.classList.add("focus");
    } else {
        currentObj.focus();
    }
}

function removeFocus() {
    if (currentObj) {
        currentObj.classList.remove("focus");
    } else {
        currentObj.blur();
    }
}


keyEventHandler = function (e) {
    var keyCode = e.which || e.keyCode;
    //e.preventDefault();
    switch (keyCode) {
        case 37: // Left Arrow
            console.log("DEBUG PURPOSE:KeyHandler Key_Left Received ");
            keyLeft();
            break;
        case 38: // Up Arrow
            console.log("DEBUG PURPOSE:KeyHandler Key_Up Received ");
            keyUp();
            break;
        case 39: // Right Arrow
            console.log("DEBUG PURPOSE:KeyHandler Key_Right Received ");
            keyRight();
            break;
        case 40: // Down Arrow
            console.log("DEBUG PURPOSE:KeyHandler Key_Down Received ");
            keyDown();
            break;
        case 13: // Enter
        case 32:
            console.log("DEBUG PURPOSE:KeyHandler Key_Ok Received ");
            ok();
            break;
        case 49:
            console.log("DEBUG PURPOSE:KeyHandler Key_Mute Received ");
            keyMute();
            break;
        case 50:
            console.log("DEBUG PURPOSE:KeyHandler Key_UnMute Received ");
            keyUnmute();
            break;
        case 51:
            console.log("DEBUG PURPOSE:KeyHandler Key_Pause Received ");
            keyPause();
            break;
        case 52:
            console.log("DEBUG PURPOSE:KeyHandler Key_Play Received ");
            keyPlay();
            break;
        case 53:
            console.log("DEBUG PURPOSE:KeyHandler Key_FastForward Received ");
            keySeek(10);
            break;
        case 54:
            console.log("DEBUG PURPOSE:KeyHandler Key_Rewind Received ");
            keySeek(-10);
            break;
        case 55:
            console.log("DEBUG PURPOSE: KeyHandler Key_Resume Received");
            keyResume();
            break;
        default:
            console.log("DEBUG PURPOSE:KeyHandler Key_Received " + keyCode);
            break;
    }
    return false;
}


if (playerEngine === playerEngineOptions.aamp) {
    // Create AAMP Player instances
    let playerA = new AAMPMediaPlayer();
    let playerB = new AAMPMediaPlayer();
}

window.onload = function () {
    // HTML elements
    const dropdownA = document.getElementById("dropdownA");
    const dropdownB = document.getElementById("dropdownB");

    shaka.polyfill.installAll();
    document.addEventListener("keydown", keyEventHandler);

    currentObj = dropdownA;
    components = [dropdownA, dropdownB];
    currentPos = 0;

    dropDownAListVisible = false;
    dropDownBListVisible = false;
    listAIndex = 0;
    listBIndex = 0;

    // Setup decrypt-to-host control
    setupDecryptToHostControl();

    // Focus screen A by default
    addFocus();
}

// Decrypt-to-Host Control Handler
function setupDecryptToHostControl() {
    const videoA = document.getElementById('videoA');
    const videoB = document.getElementById('videoB');

    // Tile 1 (Screen A): Always use SVP secure memory (decryptToHost = false)
    // Tile 2 (Screen B): Always use host memory (decryptToHost = true)
    videoA.decryptToHost = false;
    videoB.decryptToHost = true;

    console.log('[v40] Decrypt-to-host control initialized');
    console.log('[v40] Screen A (Tile 1): decryptToHost = FALSE (SVP secure memory)');
    console.log('[v40] Screen B (Tile 2): decryptToHost = TRUE (host memory)');
}
