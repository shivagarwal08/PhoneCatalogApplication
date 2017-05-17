export class CheckoutParameters {
    public serviceName;
    public merchantID;
    public options;
    constructor(serviceName, merchantID, options) {
        this.serviceName = serviceName;
        this.merchantID = merchantID;
        this.options = options;
    }
}
