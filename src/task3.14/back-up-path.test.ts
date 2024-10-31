import { getBackupPath } from "./back-up-path";
import { SettingsManager } from "./i-face-settings-manager";

describe("поведение back-up-path", () => {
  const getMockSettingsManager = (): SettingsManager => {
    const result: SettingsManager = {
      name: "a-name",
      path: "a-path",
    };

    return result;
  };
  it("добавляет название файла к базовому пути", () => {
    const mockSettingsManager = getMockSettingsManager();
    const backupPath = getBackupPath(mockSettingsManager);
    expect(backupPath.startsWith(mockSettingsManager.path)).toBeTruthy();
  });
});
