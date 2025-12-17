# Client-Side Multi-View Video Streaming App

A web-based multi-view video player application that allows simultaneous playback of two video streams using Shaka Player. Supports DASH and HLS streaming protocols with encrypted content support.

## Features

- 🎥 **Dual Video Players** - Watch two video streams simultaneously
- 📺 **Multiple Format Support** - DASH, HLS, and encrypted streams
- 🎬 **Shaka Player Integration** - Industry-standard adaptive streaming
- 🔒 **DRM Support** - Widevine encrypted content playback
- 📱 **Responsive Design** - Works on various screen sizes
- 🎨 **Clean UI** - Easy-to-use dropdown for stream selection

## Supported Stream Types

- DASH (Dynamic Adaptive Streaming over HTTP)
- HLS (HTTP Live Streaming)
- Encrypted/DRM protected content
- Live video streams
- 4K/UHD video content
- Multiple codec support (H.264, H.265/HEVC)

## Live Demo

🔗 **[View Live Demo](https://yourusername.github.io/MultiviewTestApp/index-SHAKA.html)**

_(Update the URL above after deploying to GitHub Pages)_

## Quick Start

### View Locally

Simply open the HTML files in a web browser:

```bash
# Option 1: Use the provided server script
./start_server.sh

# Option 2: Use Python's built-in server
python3 -m http.server 8000

# Option 3: Use Node.js http-server
npx http-server -p 8000
```

Then navigate to:
- Shaka Player version: `http://localhost:8000/index-SHAKA.html`
- Video tag version: `http://localhost:8000/index-videotag.html`

## Files Structure

```
MultiviewTestApp/
├── index-SHAKA.html          # Main Shaka Player version
├── index-videotag.html       # Native video tag version
├── app-SHAKAPLAYER.js        # Shaka Player logic
├── app-SHAKA.js              # Alternative Shaka implementation
├── app-videotag.js           # Native video tag logic
├── style.css                 # Styling
├── start_server.sh           # Local server script
└── README.md                 # This file
```

## Technologies Used

- **Shaka Player** - v4.12.6 - Adaptive media player
- **EME Encryption Scheme Polyfill** - v2.0.4 - DRM support
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Modern styling with Flexbox
- **Google Fonts** - Oswald font family

## Usage

1. Select a video stream from the dropdown menu
2. The video will automatically load and start playing
3. Use the video controls to play, pause, adjust volume, etc.
4. Repeat for the second video player

## Browser Compatibility

- ✅ Chrome/Chromium (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Some encrypted streams may require specific browser support

## Deployment

This app is deployed on GitHub Pages. Any updates to the `main` branch will automatically update the live site.

## License

This project is for demonstration and testing purposes.

## Contributing

Feel free to submit issues and enhancement requests!
