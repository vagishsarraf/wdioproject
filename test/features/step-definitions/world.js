let swc = require('@wdio/cucumber-framework').setWorldConstructor

class CustomWorld {
    constructor() {
        this.testid = ""
    }
}
swc(CustomWorld)