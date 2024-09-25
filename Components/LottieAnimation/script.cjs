const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const lottieJson = require('./Final_JSON.json'); // your Lottie file

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Define the animation size based on the original Lottie animation data
    const animationWidth = lottieJson.w || 1920; // Replace with the correct width from your JSON if needed
    const animationHeight = lottieJson.h || 1080; // Replace with the correct height from your JSON if needed

    await page.setViewport({ width: animationWidth, height: animationHeight });

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
                        backgroundAlpha: 0
                    }
                });
                window.animation = animation;
            </script>
        </body>
        </html>
    `);

    const numFrames = 358; // Change this to match your animation's total frames
    const outputDir = './output-frames';

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    for (let i = 0; i < numFrames; i++) {
        await page.evaluate((frame) => {
            window.animation.goToAndStop(frame, true);
        }, i);

        // Capture screenshot with transparent background
        await page.screenshot({
            path: path.join(outputDir, `lottie_frame_${i}.png`),
            omitBackground: true // Keeps background transparent
        });
    }

    await browser.close();
})();
