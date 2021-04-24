class Db {
  private static instance: Db;
  private constructor(name: string) {
    this.name = name;
  }

  public name: string;

  public static getInstance(): Db {
    if (!this.instance) {
      this.instance = new Db("First instance");
    }

    return this.instance;
  }
}

export default () => {
  const inst1 = Db.getInstance();
  const inst2 = Db.getInstance();
  // const newInst = new Db('Second instance'); Will not work

  console.log(`Instance 1: ${inst1.name}, Instance 2: ${inst2.name}`);
  console.log(inst1 === inst2);
};
