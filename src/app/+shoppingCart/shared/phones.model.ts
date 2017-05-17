export class PhoneStore {
    public static fromJsonList(array): PhoneStore[] {
        // array should be in format [Object, Object, Object]
        return array.map(PhoneStore.fromJson);
    }
    public static fromJson({ age, id, imageUrl, name, price, snippet }): PhoneStore {
        return new PhoneStore(age, id, imageUrl, name, price, snippet);
    }

    constructor(
        public age: number,
        public id: string,
        public imageUrl: string,
        public name: string,
        public price: number,
        public snippet: string
    ) { }
}
