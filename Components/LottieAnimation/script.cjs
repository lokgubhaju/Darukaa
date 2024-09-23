// Script to convert Lottie JSON to png files

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const lottieJson = require('./Final_JSON.json'); // your lottie file

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(`
        <html>
        <body>
            <div id="animation"></div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.5/lottie.min.js"></script>
            <script>
                const animation = lottie.loadAnimation({
                    container: document.getElementById('animation'),
                    renderer: 'canvas',
                    loop: false,
                    autoplay: false,
                    animationData: ${JSON.stringify(lottieJson)}
                });
                window.animation = animation;
            </script>
        </body>
        </html>
    `);

    const numFrames = 358; // Change this to match your animation's total frames
    const outputDir = './output-frames';

    if (!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir);
    }

    for (let i = 0; i < numFrames; i++) {
        await page.evaluate((frame) => {
            window.animation.goToAndStop(frame, true);
        }, i);

        await page.screenshot({ path: path.join(outputDir, `frame-${i}.png`) });
    }

    await browser.close();
})();
