import { Injectable } from '@angular/core';
import { combineLatest, fromEvent, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {
  constructor() { }

  public loadFiles(files: string[]) {
    for (const file of files) {
        let script = document.createElement("script");
        script.src = "./assets/js/" + file + ".js";
        let body = document.getElementsByTagName("body")[0];
        body.appendChild( script );
    }
  }
}
