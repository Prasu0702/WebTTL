import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Publication {
  title: string;
  authors: string[];
  // other properties...
}
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})


export class PublicationsComponent implements OnInit {
  selectedStudent!: string; // using the non-null assertion operator

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedStudent = params['student'];
      // Implement the logic to highlight publications

    });
  }
  
  isStudentAuthor(publication: Publication, studentName: string): boolean {
    return publication.authors.includes(studentName);
  }
  
 
}
