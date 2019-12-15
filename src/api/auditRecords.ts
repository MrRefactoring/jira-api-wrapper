import { Sender } from "../sender";
import { AuditRecords as AuditRecordsModel } from '../models';
import { Callback } from "../callback";
import { AxiosRequestConfig } from "axios";

export class AuditRecords {
  private client: Sender;

  constructor(client: Sender) {
    this.client = client;
  }

  public async getAuditRecords(
    options?: {
      offset?: number;
      limit?: number;
      filter?: string;
      from?: string;
      to?: string;
    },
    callback?: Callback<AuditRecordsModel>
  ): Promise<AuditRecordsModel> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/auditing/record',
      method: 'GET',
      params: options
    };

    return this.client.sendRequest(request, callback);
  }
}
