import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs"; // importare questo modulo

@Component({
  selector: "app-observable04",
  templateUrl: "./observable04.component.html",
  styleUrls: ["./observable04.component.css"],
})
export class Observable04Component implements OnInit {
  myObservable: Observable<number>;

  makeSubscription1(): void {
    this.myObservable.subscribe(
      (x: number) => { console.log("Observer4: ho ricevuto il dato: " + x); }
    );
  }

  makeSubscription2(): void {
    this.myObservable.subscribe(
      (x: number) => { console.log("Observer4: ho ricevuto il dato: " + x); },
      (e: string) => { console.log("Observer4: ho ricevuto errore: " + e);  }
    );
  }

  makeSubscription3(): void {
    this.myObservable.subscribe(
      (x: number) => { console.log("Observer4: ho ricevuto il dato: " + x); },
      (e: string) => { console.log("Observer4: ho ricevuto errore: " + e);  },
      () => { console.log("Observer4: ho ricevuto complete bye"); }
    );
  }



  constructor() {}
  ngOnInit() {
    this.myObservable = new Observable<number>(function (observer) {
      let i: number = 0;
      observer.next(i++); // 0
      observer.next(i++); // 1
      observer.next(i++); // 2
      //observer.complete();
      observer.error("numeri finiti");
      observer.next(i++); // questo non viene intercettato
    });
  }
}
