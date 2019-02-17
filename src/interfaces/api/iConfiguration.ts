import { IJiraApi } from 'interfaces/iJiraApi';

export interface IConfiguration {
  context: IJiraApi;
  prefix: string;

  getGlobalSettings(callback?: any): any;
  getSelectedTimeTrackingProvider(callback?: any): any;

  selectTimeTrackingProvider(
    params: {
      key: string,
      name?: string
    },
    callback?: any
  ): any;

  disableTimeTracking(callback?: any): any;
  getAllTimeTrackingProviders(callback?: any): any;
  getTimeTrackingSettings(callback?: any): any;

  setTimeTrackingSettings(
    params: {
      workingHoursPerDay: number,
      workingDaysPerWeek: number,
      timeFormat: 'pretty' | 'days' | 'hours' | string,
      defaultUnit: 'minute' | 'hour' | 'day' | 'week' | string
    },
    callback?: any
  ): any;
}
