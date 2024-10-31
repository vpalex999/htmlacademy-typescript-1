import { SettingsManager } from "./i-face-settings-manager";

export const getBackupPath = (settings: SettingsManager) =>
  `${settings.path}/daily-backup.txt`;

