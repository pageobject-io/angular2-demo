import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Part} from "./part";
import * as _ from "lodash";
import {Page} from "./page";

@Injectable()
export class PartRepository {

    private _parts: Part[] = [new Part(1, "First part", "123-234-456-A", "eBay", "http://www.example.com", "https://s-media-cache-ak0.pinimg.com/originals/15/ed/a3/15eda3e5e0c9b5a2cf12957d310659a6.jpg", false, null, 15000),
        new Part(2, "First part", "123-234-456-A", "eBay", "http://www.example.com", "https://s-media-cache-ak0.pinimg.com/originals/15/ed/a3/15eda3e5e0c9b5a2cf12957d310659a6.jpg", false, null, 15000),
        new Part(3, "First part", "123-234-456-A", "eBay", "http://www.example.com", "http://images.thesamba.com/vw/gallery/pix/490560.jpg", false, null, 15000),
        new Part(4, "First part", "123-234-456-A", "eBay", "http://www.example.com", "https://s-media-cache-ak0.pinimg.com/originals/15/ed/a3/15eda3e5e0c9b5a2cf12957d310659a6.jpg", false, null, 15000),
        new Part(5, "First part", "123-234-456-A", "eBay", "http://www.example.com", "https://s-media-cache-ak0.pinimg.com/originals/15/ed/a3/15eda3e5e0c9b5a2cf12957d310659a6.jpg", false, null, 15000),
        new Part(6, "First part", "123-234-456-A", "eBay", "http://www.example.com", "https://s-media-cache-ak0.pinimg.com/originals/15/ed/a3/15eda3e5e0c9b5a2cf12957d310659a6.jpg", false, null, 15000),
        new Part(7, "First part", "123-234-456-A", "eBay", "http://www.example.com", "https://s-media-cache-ak0.pinimg.com/originals/15/ed/a3/15eda3e5e0c9b5a2cf12957d310659a6.jpg", false, null, 15000),
        new Part(8, "First part", "123-234-456-A", "eBay", "http://www.example.com", "https://s-media-cache-ak0.pinimg.com/originals/15/ed/a3/15eda3e5e0c9b5a2cf12957d310659a6.jpg", false, null, 15000),
        new Part(9, "First part", "123-234-456-A", "eBay", "http://www.example.com", "https://s-media-cache-ak0.pinimg.com/originals/15/ed/a3/15eda3e5e0c9b5a2cf12957d310659a6.jpg", false, null, 15000),
        new Part(10, "First part", "123-234-456-A", "eBay", "http://www.example.com", "https://s-media-cache-ak0.pinimg.com/originals/15/ed/a3/15eda3e5e0c9b5a2cf12957d310659a6.jpg", false, null, 15000),
        new Part(11, "First part", "123-234-456-A", "eBay", "http://www.example.com", "https://s-media-cache-ak0.pinimg.com/originals/15/ed/a3/15eda3e5e0c9b5a2cf12957d310659a6.jpg", false, null, 15000),
        new Part(12, "First part", "123-234-456-A", "eBay", "http://www.example.com", "https://s-media-cache-ak0.pinimg.com/originals/15/ed/a3/15eda3e5e0c9b5a2cf12957d310659a6.jpg", false, null, 15000)];

    private _nextId: number = 13;

    public findPage(page: number, perPageCount: number): Observable<Page> {
        let result = new Page(this._parts.slice((page - 1) * perPageCount, page * perPageCount), this._parts.length);
        return Observable.of(result);
    }

    public save(part: Part): void {
        if (part.id) {
            let index: number = _.indexOf(this._parts, _.find(this._parts, {id: part.id}));
            this._parts.splice(index, 1, part);
        } else {
            part.id = this._nextId++;
            this._parts.push(part);
        }
    }

    public 'delete'(part: Part): void {
        _.remove(this._parts, {id: part.id});
    }

}