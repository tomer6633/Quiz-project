class Player {
    uid: string;
    constructor(
      public name: string,
      public date: Date,
      public picture:File|URL,
    ) {
      this.uid = uid();
    }
  }