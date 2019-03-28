export interface INotificationScheme {
  getNotificationSchemesPaginated(
    params?: {
      startAt?: number,
      maxResults?: number,
      expand?: string
    },
    callback?: any
  ): any;

  getNotificationScheme(
    params: {
      id: number,
      expand?: string
    },
    callback?: any
  ): any;
}
