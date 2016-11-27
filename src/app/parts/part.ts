export class Part {

    private _id: number;
    private _partName: string;
    private _vwOemNumber: string;
    private _webshopName: string;
    private _productUrl: string;
    private _pictureUrl: string;
    private _haveIt: boolean;
    private _purchaseDate: string;
    private _price: number;

    constructor(id?: number, partName?: string, vwOemNumber?: string, webshopName?: string, productUrl?: string, pictureUrl?: string, haveIt?: boolean, purchaseDate?: string, price?: number) {
        this._id = id;
        this._partName = partName;
        this._vwOemNumber = vwOemNumber;
        this._webshopName = webshopName;
        this._productUrl = productUrl;
        this._pictureUrl = pictureUrl;
        this._haveIt = haveIt;
        this._purchaseDate = purchaseDate;
        this._price = price;
    }

    public clone(): Part {
        let clone: Part = new Part();
        clone.id = this.id;
        clone.partName = this.partName;
        clone.vwOemNumber = this.vwOemNumber;
        clone.webshopName = this.webshopName;
        clone.productUrl = this.productUrl;
        clone.pictureUrl = this.pictureUrl;
        clone.haveIt = this.haveIt;
        clone.purchaseDate = this.purchaseDate;
        clone.price = this.price;
        return clone;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get partName(): string {
        return this._partName;
    }

    set partName(value: string) {
        this._partName = value;
    }

    get vwOemNumber(): string {
        return this._vwOemNumber;
    }

    set vwOemNumber(value: string) {
        this._vwOemNumber = value;
    }

    get webshopName(): string {
        return this._webshopName;
    }

    set webshopName(value: string) {
        this._webshopName = value;
    }

    get productUrl(): string {
        return this._productUrl;
    }

    set productUrl(value: string) {
        this._productUrl = value;
    }

    get pictureUrl(): string {
        return this._pictureUrl;
    }

    set pictureUrl(value: string) {
        this._pictureUrl = value;
    }

    get haveIt(): boolean {
        return this._haveIt;
    }

    set haveIt(value: boolean) {
        this._haveIt = value;
    }

    get purchaseDate(): string {
        return this._purchaseDate;
    }

    set purchaseDate(value: string) {
        this._purchaseDate = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}
