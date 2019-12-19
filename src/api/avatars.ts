import { Sender } from '../sender';
import { Callback } from '../callback';
import { AxiosRequestConfig } from 'axios';
import { SystemAvatars, Avatars as AvatarsModel, Avatar } from '../models';

export class Avatars {
  constructor(private readonly client: Sender) { }

  public async getSystemAvatarsByType(
    options: {
      type: 'issuetype' | 'project' | 'user' | string;
    },
    callback?: Callback<SystemAvatars>
  ): Promise<SystemAvatars> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/avatar/${options.type}/system`,
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getAvatars(
    options: {
      type: string;
      entityId: string;
    },
    callback?: Callback<AvatarsModel>
  ): Promise<AvatarsModel> {
    const { type, entityId, } = options;

    const request: AxiosRequestConfig = {
      url: `/rest/api/2/universal_avatar/type/${type}/owner/${entityId}`,
      method: 'GET'
    };

    return this.client.sendRequest(request, callback);
  }

  public async loadAvatar(
    options: {
      type: string;
      entityId: string;
      x?: number;
      y?: number;
      size: number;
      avatar: string;
      avatarExtension: 'JPEG' | 'GIF' | 'PNG';
    },
    callback?: Callback<Avatar>
  ): Promise<Avatar> {
    const {
      type,
      entityId,
      x,
      y,
      size,
      avatar,
      avatarExtension
    } = options;

    const request: AxiosRequestConfig = {
      url: `/rest/api/2/universal_avatar/type/${type}/owner/${entityId}`,
      method: 'POST',
      headers: {
        'X-Atlassian-Token': 'no-check',
        'Content-Type': `image/${avatarExtension}`
      },
      params: {
        x,
        y,
        size,
      },
      data: avatar
    };

    return this.client.sendRequest(request, callback);
  }

  public async deleteAvatar(
    options: {
      type: string;
      owningObjectId: string;
      id: number;
    },
    callback?: Callback<void>
  ): Promise<void> {
    const { type, owningObjectId, id, } = options;

    const request: AxiosRequestConfig = {
      url: `/rest/api/2/universal_avatar/type/${type}/owner/${owningObjectId}/avatar/${id}`,
      method: 'DELETE'
    };

    return this.client.sendRequest(request, callback);
  }
}
