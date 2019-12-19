export interface AuditRecords {
  offset: number;
  limit: number;
  total: number;
  records: Record[];
}

export interface Record {
  id: number;
  summary: string;
  remoteAddress: string;
  authorKey: string;
  created: string;
  category: string;
  eventSource: string;
  description: string;
  objectItem: Item;
  changedValues: ChangedValue[];
  associatedItems: Item[];
}

export interface Item {
  id: string;
  name: string;
  typeName: string;
  parentId: string;
  parentName: string;
}

export interface ChangedValue {
  fieldName: string;
  changedFrom: string;
  changedTo: string;
}
