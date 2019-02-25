import { IConfiguration } from 'interfaces/api/iConfiguration';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Configuration implements IConfiguration {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'configuration';
    this.context = context;
  }

  public getGlobalSettings(callback?: any): any {
    const endpoint = this.prefix;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getSelectedTimeTrackingProvider(callback?: any): any {
    const endpoint = `${this.prefix}/timetracking`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public selectTimeTrackingProvider(
    params: {
      key: string,
      name?: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/timetracking`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        key: params.key,
        name: params.name
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public disableTimeTracking(callback?: any): any {
    const endpoint = `${this.prefix}/timetracking`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getAllTimeTrackingProviders(callback?: any): any {
    const endpoint = `${this.prefix}/timetracking/list`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getTimeTrackingSettings(callback?: any): any {
    const endpoint = `${this.prefix}/timetracking/options`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public setTimeTrackingSettings(
    params: {
      workingHoursPerDay: number,
      workingDaysPerWeek: number,
      timeFormat: 'pretty' | 'days' | 'hours' | string,
      defaultUnit: 'minute' | 'hour' | 'day' | 'week' | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/timetracking/options`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        workingHoursPerDay: params.workingHoursPerDay,
        workingDaysPerWeek: params.workingDaysPerWeek,
        timeFormat: params.timeFormat,
        defaultUnit: params.defaultUnit
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
