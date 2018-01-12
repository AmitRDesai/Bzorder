import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CoreService {

  loading = new Subject<boolean>();
  constructor() { }

  setLoading(loading: boolean){
    this.loading.next(loading);
  }

}
