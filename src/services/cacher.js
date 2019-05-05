
let instance = undefined;

export class Cacher {
    cache = {};

    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    isValueCached(key) {
        return !!this.getCacheVale(key);
    }

    cacheValue(key, value) {
        this.cache[key] = value;
    }

    getCacheVale(key) {
        return this.cache[key];
    }
}