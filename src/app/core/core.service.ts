import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  loading = true;

  constructor() { }

  setLoading(loading: boolean){
    this.loading = loading;
  }

}
