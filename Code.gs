function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Le Maître des Angles')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
