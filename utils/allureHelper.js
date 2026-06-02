const { allure } = require('allure-playwright');

class AllureHelper {
  static async setMetadata({
    epic,
    feature,
    story,
    severity = 'normal',
    owner = 'QA Automation Team',
    tags = [],
    description = ''
  }) {
    if (epic) await allure.epic(epic);
    if (feature) await allure.feature(feature);
    if (story) await allure.story(story);
    if (severity) await allure.severity(severity);
    if (owner) await allure.owner(owner);
    if (description) await allure.description(description);

    for (const tag of tags) {
      await allure.tag(tag);
    }
  }

  static async attachScreenshot(name, page) {
    const screenshot = await page.screenshot({ fullPage: true });

    await allure.attachment(
      name,
      screenshot,
      'image/png'
    );
  }

  static async attachJson(name, data) {
    await allure.attachment(
      name,
      JSON.stringify(data, null, 2),
      'application/json'
    );
  }
}

module.exports = { AllureHelper };