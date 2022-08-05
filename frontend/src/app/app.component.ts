import { Component } from '@angular/core';
import { SvgdataService } from './svgdata.service';
import { Doc } from './svgdoc/svgdoc.component';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  docs: Doc[] = [];
  debug: any[] = [];
  isLoading = false;
  constructor(private svgdata: SvgdataService, private http:HttpClient) {

  }
  ngOnInit() {
    // this.svgdata.loadData().subscribe(
    //   data => {this.docs = data;},
    //   error => console.log(error)
    // );

    this.isLoading = true;
    this.loadViaOboe();
    // this.http.get<any>('http://localhost:3001', {}).subscribe(data=>{
    //   console.log(data);
    // });
    // this.svgdata.loadFile().subscribe(
    //   data => {this.docs = data;},
    //   error => console.log(error),
    //   ()=>{this.isLoading = false;}
    // );

  }
  trackById(index: number, el: any): number {
    return el.docId;
  }

  loadVanillla(){
    this.svgdata.loadAnyData().subscribe(data=>{
      console.log(data);
    })
  }

  loadViaOboe() {
    this.svgdata.loadViaOboe().pipe(delay(200)).subscribe(
      (data: Doc) => {
        this.docs.push(data);
        console.log(data)
      },
      error => console.log(error),
      () => { this.isLoading = false; console.log(this.docs) }
    );
  }
}
