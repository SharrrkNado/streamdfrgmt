import { Component, Input, OnInit } from '@angular/core';

export interface Box {
  boxId: number;
  x: number;
  y: number;
  w: number;
  h: number;

}
export interface Doc {
  docId: number;
  title: string;
  boxes: Box[]
}

@Component({
  selector: 'app-svgdoc',
  templateUrl: './svgdoc.component.html',
  styleUrls: ['./svgdoc.component.scss']
})
export class SvgdocComponent {
  @Input() doc: Doc;

  showInfo(box: Box){
    alert(JSON.stringify(box, null, 4 ));
  }

}
