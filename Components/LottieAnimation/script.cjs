const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const lottieJson = require('./Final_JSON.json'); // Your Lottie file

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Define the animation size based on the original Lottie animation data
    const animationWidth = lottieJson.w || 1500; // Replace with correct width from your JSON
    const animationHeight = lottieJson.h || 1500; // Replace with correct height from your JSON

    // Set viewport with high DPI (deviceScaleFactor for high quality)
    await page.setViewport({
        width: animationWidth,
        height: animationHeight,
        deviceScaleFactor: 4 // Increase for higher pixel density (2x, 3x for retina-like)
    });

    // Load page content with Lottie animation
    await page.setContent(`
        <html>
        <body style="margin: 0; padding: 0; background: transparent;">
            <div id="animation" style="width: ${animationWidth}px; height: ${animationHeight}px; background: transparent;"></div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.5/lottie.min.js"></script>
            <script>
                const animation = lottie.loadAnimation({
                    container: document.getElementById('animation'),
                    renderer: 'canvas',
                    loop: false,
                    autoplay: false,
                    animationData: ${JSON.stringify(lottieJson)},
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid meet', // Keeps aspect ratio without cropping
                        clearCanvas: true,
                        backgroundAlpha: 0 // Ensures transparency
                    }
                });
                window.animation = animation;
            </script>
        </body>
        </html>
    `);

    // Set number of frames based on your Lottie animation's total frames
    const numFrames = 358; // Modify this based on your animation's frame count
    const outputDir = './output-frames';

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    // Capture frames
    for (let i = 0; i < numFrames; i++) {
        await page.evaluate((frame) => {
            window.animation.goToAndStop(frame, true); // Control animation frame
        }, i);

        // Capture screenshot with transparent background and high DPI
        await page.screenshot({
            path: path.join(outputDir, `lottie_frame_${i}.png`), // Save as PNG (for transparency)
            omitBackground: true, // Keep background transparent
            clip: {
                x: 0,
                y: 0,
                width: animationWidth,
                height: animationHeight
            }
        });
    }

    await browser.close();
})();
