import {Part} from "./part";

export class Page {

    private _elements: Part[];
    private _totalCount: number;

    constructor(elements: Part[], totalCount: number) {
        this._elements = elements;
        this._totalCount = totalCount;
    }

    get elements(): Part[] {
        return this._elements;
    }

    set elements(value: Part[]) {
        this._elements = value;
    }

    get totalCount(): number {
        return this._totalCount;
    }

    set totalCount(value: number) {
        this._totalCount = value;
    }
}