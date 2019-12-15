export interface Config {
  host: string;
  authentication?: {
    jwt?: {
      iss: string;
      secret: string;
      expiryTimeSeconds?: number;
    },
    accessToken?: string;
    basic?: {
      username: string;
      apiToken: string;
    }
  }
}
