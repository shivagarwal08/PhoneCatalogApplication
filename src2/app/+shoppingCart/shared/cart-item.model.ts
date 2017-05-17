export class CartItem {
    public sku: string;
    public name: string;
    public price: number;
    public quantity: number;
    constructor(sku, name, price, quantity) {
        this.sku = sku;
        this.name = name;
        this.price = price * 1;
        this.quantity = quantity * 1;
    }
}
