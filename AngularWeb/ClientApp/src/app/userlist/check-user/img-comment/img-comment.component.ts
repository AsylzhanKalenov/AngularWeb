import { Component, Input, OnInit } from '@angular/core';
import { CheckCat } from '../CheckCat';
import { DocsService } from '../docs-service';

@Component({
  selector: 'app-img-comment',
  templateUrl: './img-comment.component.html',
  styleUrls: ['./img-comment.component.css']
})
export class ImgCommentComponent implements OnInit {

  @Input() nameCat: string;
  @Input() nameImg: string[];
  @Input() userid: number;

  comm: any;
  comment: string;

  constructor(private docsService: DocsService) { }

  ngOnInit(): void {
  }

  onTitleChange(num, val) {
    var ch = new CheckCat();
    ch.userId = this.userid;
    ch.fileCatId = num;
    ch.comments = val;
    console.log(ch);
    this.docsService.postComment(ch).subscribe(data=> this.comm=data);
  }
}
