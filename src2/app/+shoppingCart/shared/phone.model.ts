export class Phone {
    public static fromJsonList(array): Phone[] {
        return array.map(Phone.fromJson);
    }
    public static fromJson({ price, additionalFeatures, android, availability, battery, camera, connectivity,
        description, display, hardware, id, images, name, sizeAndWeight, storage }): Phone {
        return new Phone(price, additionalFeatures, android, availability, battery, camera, connectivity,
            description, display, hardware, id, images, name, sizeAndWeight, storage);
    }
    public static getBlankPhone() {
        return new Phone(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    constructor(
        public price: number,
        public additionalFeatures: string,
        public android: any,
        public availability: any,
        public battery: any,
        public camera: any,
        public connectivity: any,
        public description: string,
        public display: any,
        public hardware: any,
        public id: string,
        public images: any,
        public name: string,
        public sizeAndWeight: any,
        public storage: any
    ) { }
}
/*export interface Comment {
    name: string;
    comment: string;
    rate?: number;
}*/
