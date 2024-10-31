import { SettingsManager } from "./i-face-settings-manager";

const DEFAULT_PROFILE = "default";

export class SettingsManagerImp implements SettingsManager {
  private profileName: string = DEFAULT_PROFILE;

  constructor(private readonly baseFolder: string) {}

  get name() {
    return this.profileName;
  }
  set name(value: string) {
    this.profileName = value;
  }

  get path() {
    return `${this.baseFolder}/${this.profileName}`;
  }
}
