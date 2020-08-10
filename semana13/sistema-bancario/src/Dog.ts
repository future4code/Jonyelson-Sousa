export class Dog {
  public name: string;
  public weight: number;

  constructor(name: string) {
    this.name = name;
    this.weight = 10;
  }

  chirp(): void {}
}
