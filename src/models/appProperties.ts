export interface PropertyKeys {
  keys: PropertyKey[];
}

export interface PropertyKey {
  self: string;
  key: string;
}

export interface EntityProperty {
  [key: string]: any;
}

export interface OperationMessage {
  message: string;
  statusCode: number;
}
