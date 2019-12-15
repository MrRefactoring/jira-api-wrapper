export interface SystemAvatars {
  system: Avatar[];
}

export interface Avatars extends SystemAvatars {
  custom: Avatar[];
}

export interface Avatar {
  id: string;
  owner: string;
  isSystemAvatar: boolean;
  isSelected: boolean;
  isDeletable: boolean;
  fileName: string;
  urls: { [key: string]: any };
}
