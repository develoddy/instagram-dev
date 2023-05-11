import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { FiltroService } from '@data/services/api/filtro.service';



export interface Stories {
    id: number;
    username: string;
    url: string
}

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})

export class StoriesComponent implements OnInit {

    /** The total number of records */
    @Input()
    collectionSize = 0;

    /** The number of records to display */
    @Input()
    pageSize = 8;

    /** Current page */
    @Input()
    currentPage = 1;

    /** The number of buttons to show either side of the current page */
    @Input()
    maxSize = 2;

    totalPages: any[] = [];

    public clientX = 0;
   
    @Input() data = [
      {id: 0, url: 'https://images.unsplash.com/photo-1500042600524-37ecb686c775?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29sb3Jlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60', username: 'eddy'},
      {id: 1, url: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29sb3Jlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60', username: 'jordan'},
      {id: 2, url: 'https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbG9yZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', username: 'paola'},
      {id: 3, url: 'https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbG9yZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', username: 'nicole'},
      {id: 4, url: 'https://images.unsplash.com/photo-1587586062323-836089e60d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbG9yZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', username: 'rebeca'},
      {id: 5, url: 'https://images.unsplash.com/photo-1579773395269-fe2be5144c29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbG9yZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', username: 'teresa'},
      {id: 6, url: 'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNvbG9yZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', username: 'maria'},
      {id: 7, url: 'https://images.unsplash.com/photo-1557682268-e3955ed5d83f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvbG9yZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', username: 'marlene'},
      {id: 8, url: 'https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGNvbG9yZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', username: 'vivi'},
      {id: 9, url: 'https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGNvbG9yZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', username: 'dayana'},
      {id: 10, url: 'https://images.unsplash.com/photo-1498081959737-f3ba1af08103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGNvbG9yZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', username: 'luna'},
      {id: 11, url: 'https://images.unsplash.com/photo-1515144225933-899dcb0ca32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGNvbG9yZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', username: 'carmen'},
      {id: 12, url: 'https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGNvbG9yZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', username: 'pamela'},
      {id: 13, url: 'https://images.unsplash.com/photo-1623949366895-4d7e63f08037?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxjb2xvcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', username: 'pepita'},
      {id: 14, url: 'https://images.unsplash.com/photo-1529426301869-82f4d98d3d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxjb2xvcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', username: 'cielo'},
      {id: 15, url: 'https://images.unsplash.com/photo-1594848328162-90258f635e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxjb2xvcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', username: 'rosa'},
      {id: 16, url: 'https://images.unsplash.com/photo-1545599770-28d3851b7829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxjb2xvcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', username: 'arancha'},
      {id: 17, url: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxjb2xvcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', username: 'tom'},
    ];

    @Input() stories: Stories[] = [];
    public translateX:number;
    public btnLeft: boolean;
    public btnRight: boolean;
    public netxRightStories = false;
    public overflowXHidden:string;

    constructor( public filter: FiltroService ) {
        this.translateX = 80;
        this.btnLeft = false;
        this.btnRight = false;
    }

    ngOnInit() {
        this.stories = [...this.data];
        if ( this.stories.length > 8 ) {
            this.btnRight = true;
        } else {
            // Hay menos o igual que 8 item
        }
        this.totalPages = new Array(Math.ceil(this.stories.length / this.pageSize));
    }

    ngOnChanges(changes: SimpleChanges) {
        this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
    }

    swipeLeft() {
        this.previous();
    }

    swipeRight() {
        this.next();
    }

    /** Set next page number */
    next() {
        this.clientX = -320;
        this.netxRightStories = true;
        setTimeout (() => {
            this.netxRightStories = false;
        }, 100); 
        
        const nextPage = this.currentPage + 1;
        this.selectPageNumber(nextPage);
        nextPage <= this.totalPages.length ? this.btnLeft = true : this.btnRight = false;
    }

    /** Set previous page number */
    previous() {
        this.clientX = 320;
        this.netxRightStories = true;
        setTimeout (() => {
            this.netxRightStories = false;
         }, 100);

        const previousPage = this.currentPage - 1;
        this.selectPageNumber(previousPage);
        previousPage == 1 ? this.btnLeft = false : this.btnRight = true;
    }

    /** Set page number */
    selectPageNumber(pageNumber: number) {
        this.currentPage = pageNumber;
    }

    viewStories(username: string, idstorie:string) {

    }
}
