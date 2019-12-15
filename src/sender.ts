import { Client } from '.';
import { AxiosRequestConfig } from 'axios';
import { Callback } from './callback';

export type Sender = Client | { sendRequest(config: AxiosRequestConfig, callback?: Callback) };
