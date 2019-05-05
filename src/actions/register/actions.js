export class RegisterUser {
    static Type = 'REGISTRATION.USER_REGISTER';
    type = RegisterUser.Type;

    constructor(payload) {
        this.payload = payload;
    }
}

export class RegistrationError {
    static Type = 'REGISTRATION.USER_REGISTER_ERROR';
    type = RegistrationError.Type;

    constructor(payload) {
        this.payload = payload;
    }
}

export class LoginUser {
    static Type = 'REGISTRATION.USER_LOGIN';
    type = LoginUser.Type;

    constructor(payload) {
        this.payload = payload;
    }
}

export class LoginUserError {
    static Type = 'REGISTRATION.USER_LOGIN_ERROR';
    type = LoginUserError.Type;

    constructor(payload) {
        this.payload = payload;
    }
}
