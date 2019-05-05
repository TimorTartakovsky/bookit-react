import * as urlParams from '../consts/request-const';
import * as moment from 'moment';
import * as jwt from 'jsonwebtoken';

class AuthService {

    getToken() {
        return localStorage.getItem(urlParams.authTokenStorageKey);
    }

    decode(token) {
        return jwt.decode(token);
    }

    getExpiration(token) {
        const decodedToken = this.decode(token);
        return moment.unix(decodedToken.exp);
    }

    isValid(token) {
        return moment().isBefore(this.getExpiration(token));
    }

    isAuthenticated() {
        const token = this.getToken();
        return token && this.isValid(token);
    }

}

export default new AuthService();