import { Component, Input, OnInit } from '@angular/core';
import { CheckCat } from '../CheckCat';
import { DocsService } from '../docs-service';

@Component({
  selector: '[app-img-comment]',
  templateUrl: './img-comment.component.html',
  styleUrls: ['./img-comment.component.css']
})
export class ImgCommentComponent implements OnInit {

  @Input() nameCat: string;
  @Input() nameImg: string[];
  @Input() userid: number;
  @Input() catid: number;

  comm: any;
  comment: string;
  chCat: CheckCat;

  constructor(private docsService: DocsService) { }

  ngOnInit(): void {
    this.loadComment();
  }

  onTitleChange(num, val) {
    var ch = new CheckCat();
    ch.userId = this.userid;
    ch.fileCatId = num;
    ch.comments = val;
    console.log(ch);
    this.docsService.postComment(ch).subscribe(data=> this.comm=data);
  }
  loadComment() {
    this.docsService.getComment(this.userid, this.catid).subscribe(data => this.comment = data.comments);
  }
}
