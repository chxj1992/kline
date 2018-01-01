import CName from './cname';

export default class NamedObject {

    constructor(name) {
        this._name = name;
        this._nameObj = new CName(name);
    }

    getFrameName() {
        return this._nameObj.getName(0);
    }

    getDataSourceName() {
        return this._nameObj.getName(1);
    }

    getAreaName() {
        return this._nameObj.getName(2);
    }

    getName() {
        return this._nameObj.getName(-1);
    }

    getNameObject() {
        return this._nameObj;
    }

}
