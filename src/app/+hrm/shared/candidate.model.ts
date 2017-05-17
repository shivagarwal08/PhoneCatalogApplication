export class Candidate {
    public static fromJsonList(array): Candidate[] {
        return array.map(Candidate.fromJson);
    }
    public static fromJson({_id, panCard, email, phone, action, firstName, middleName, lastName }): Candidate {
        return new Candidate(_id, panCard, email, phone, action, firstName, middleName, lastName);
    }
    public static getBlankCandidate() {
        return new Candidate(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    constructor(
        public _id: string,
        public panCard: string,
        public email: string,
        public phone: string,
        public action: string,
        public firstName: string,
        public middleName: string,
        public lastName: string
    ) { }
}
