import {Component, OnInit} from "@angular/core";
import {PartRepository} from "../part.repository";
import {Part} from "../part";
import * as _ from "lodash";

@Component({
    selector: 'part-manager',
    templateUrl: './part-manager.component.html',
    styleUrls: ['./part-manager.component.css']
})
export class PartManagerComponent implements OnInit {

    private parts: Part[];
    private currentPage: number = 1;
    private perPageCount: number = 10;
    private totalCount: number = 0;
    private currentPart: Part;

    constructor(private repository: PartRepository) {
    }

    ngOnInit() {
        this.loadParts();
    }

    private loadParts(): void {
        this.repository.findPage(this.currentPage, this.perPageCount).subscribe(page => {
            this.parts = page.elements;
            this.totalCount = page.totalCount;
        });
    }

    public addPart(): void {
        this.currentPart = new Part();
    }

    public cancelEdit(): void {
        this.currentPart = null;
    }

    public savePart(): void {
        this.repository.save(this.currentPart);
        this.currentPart = null;
        this.loadParts();
    }

    public editPart(part: Part): void {
        this.currentPart = part.clone();
    }

    public deletePart(part: Part): void {
        this.repository.delete(part);
        this.loadParts();
    }

    private pages(): number[] {
        return _.range(1, this.lastPage() + 1);
    }

    private lastPage(): number {
        return Math.ceil(this.totalCount / this.perPageCount);
    }

    private goToPreviousPage(event): void {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.loadParts();
        }
        event.preventDefault()
    }

    private goToNextPage(event): void {
        if (this.currentPage < this.lastPage()) {
            this.currentPage++;
            this.loadParts();
        }
        event.preventDefault()
    }

    private goToPage(page, event): void {
        this.currentPage = page;
        this.loadParts();
        event.preventDefault()
    }

}
