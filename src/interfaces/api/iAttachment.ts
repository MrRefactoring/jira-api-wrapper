import { IJiraApi } from 'interfaces/iJiraApi';

export interface IAttachment {
  context: IJiraApi;
  prefix: string;

  getGlobalAttachmentSettings(callback?: any): any;
  getAttachmentMetadata(params: { id: number | string }, callback?: any): any;
  deleteAttachment(params: { id: number | string }, callback?: any): any;
  getAllMetadata(params: { id: number | string }, callback?: any): any;
  getContentsMetadata(params: { id: number | string }, callback?: any): any;
}
