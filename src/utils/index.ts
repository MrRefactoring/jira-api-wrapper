import * as jwt from 'atlassian-jwt';
import { Config } from "../config";

export namespace Utils {
  export const getAuthorization = (config: Config): string | undefined => {
    if (!!config.authentication?.jwt) {
      const now = Math.floor(Date.now() / 1000);
      const tokenData = {
        iss: config.authentication.jwt.iss,
        iat: now,
        exp: now + (config.authentication.jwt.expiryTimeSeconds || 3 * 60),
        qsh: jwt.createQueryStringHash({
          method: '',
          pathname: '',
          query: {} // TODO
        }),
      };

      const token = jwt.encode(tokenData, config.authentication.jwt.secret);

      return `JWT ${token}`;
    } else if (!!config.authentication?.accessToken) {
      return `Bearer ${config.authentication.accessToken}`
    } else if (!!config.authentication?.basic) {
      const base64 = Buffer.from(`${config.authentication.basic.username}:${config.authentication.basic.apiToken}`).toString('base64');
      return `Basic ${base64}`;
    }

    return undefined;
  }
}
