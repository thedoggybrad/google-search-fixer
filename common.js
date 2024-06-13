const RunningFirefoxVersion = (navigator.userAgent.match(/Firefox\/([0-9.]+)/) || ["", "58.0"])[1];
const RunningAndroidVersion = navigator.userAgent.match(/Android [0-9.]+/) || "Android 14";

const ChromeMajorVersionToMimic = `${parseInt(RunningFirefoxVersion) + 4}.0.0.0`;

const ChromePhoneUA = `Mozilla/5.0 (Linux; ${RunningAndroidVersion}; Pixel 8 Pro Build/AP1A.240505.004; wv) FxQuantum/${RunningFirefoxVersion} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ChromeMajorVersionToMimic} Mobile Safari/537.36`;
const ChromeTabletUA = `Mozilla/5.0 (Linux; ${RunningAndroidVersion}; Pixel 8 Pro Build/AP1A.240505.004; wv) FxQuantum/${RunningFirefoxVersion} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ChromeMajorVersionToMimic} Safari/537.36`;

function getUserAgentOverride(userAgent) {
  if (userAgent.includes("Mobile")) {
    return ChromePhoneUA;
  }
  if (userAgent.includes("Tablet")) {
    return ChromeTabletUA;
  }
  // Desktop mode requested.
  return userAgent;
}
