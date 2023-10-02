import { Observable } from "rxjs";

const observable = new Observable((observer) => {
  observer.next("Hola, mundo!");
  observer.next("Adiós, mundo!");
  observer.complete();
});

observable.subscribe((value) => {
  console.log(value);
});
