import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  ngonit(){}
  url=""
  selectedFile: File
  constructor (private http: HttpClient) {}
  
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
          this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
  }
  }
  onUpload() {
    this.http.post('my-backend.com/file-upload', this.selectedFile)
    .subscribe(event => {
      console.log(event); // handle event here
    })
  }
}
