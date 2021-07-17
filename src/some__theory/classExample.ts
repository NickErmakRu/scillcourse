class Constructor {
  public field: number = 123;
  private privateField: number = 123;

  constructor(arg: number) {
      this.field = arg;
  }

  // public, private, protected - модификаторы доступа в TS

  public publicMethod(): number {
    return this.field;
  }

  protected protectedMethod() {
    return this.field + 10;
  }

  private privateMethod() {
    return this.field + 30;
  }
}

const instance = new Constructor(123);

// protected оступны в наследниках (в отличие от private)

class Child extends Constructor {
  public childMethod() {
  }

  protected protectedMethod(): number {
    return super.protectedMethod();
  }

  public publicMethod(): number {
    return super.publicMethod();
  }
}


// абстрактные классы - невозможно инстанциировать 

abstract class AbstractClass {
  public abstract abstractField: number;

  public abstract abstractMethod(): number;

  protected protectMethod() {
    return this.abstractField;
  }
}

class newChild extends AbstractClass {
  public abstractField: number = 123;
  public abstractMethod(): number {
    return this.protectMethod();
  }
}


// интерфейсы, имплеменция
      // можно использовать дженерики

interface MyInterface {
  field: string;
  method(): string;
}

class NewClass implements MyInterface {
  field: string = "123";
  method(): string {
    return ""
  }
}