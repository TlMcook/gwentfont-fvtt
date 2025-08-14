Hooks.on("init", () => {
    // Preload the GWENT font.  Important for it to work.
    loadFont("GWENT");

    // Override the text style for token nameplates.
    CONFIG.canvasTextStyle = mergeObject(CONFIG.canvasTextStyle, {
        fontFamily: "GWENT",
        fontSize: 28,
        fill: "#FFFFFF",
        stroke: "#000000",
        strokeThickness: 2,
    });
});

// Helper function to load the font
function loadFont(fontFamily) {
    const font = new FontFace(fontFamily, "url(../../modules/gwent - font/fonts/hinted - GWENT - ExtraBold.ttf)");
    font.load().then(function (font) {
        document.fonts.add(font);
        console.log(`GWENT font loaded`);
    });
}