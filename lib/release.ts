/**
 * Single source of truth for the public Android release. The APK is published
 * as a GitHub Release asset, rather than bundled into the web deployment.
 */
export const latestRelease = {
  version: "1.0.0",
  releaseDate: "20 September 2026",
  apkSize: "233 MB",
  minAndroid: "Android 8.0+",
  downloadUrl: "https://github.com/yong-boo/street-smart-dl/releases/download/v1.0.0/StreetSmart-v1.0.apk",
  sha256: "02921e36a0b518a39fb2ca16b9a18832dcc7cb4dd375bcda2e390fa5ee5689e4",
} as const;
