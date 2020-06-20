export class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver();
  }
}

export class MacroCommand {
  constructor() {
    this.commandsList = [];
  }
  add(command) {
    this.commandsList.push(command);
  }
  execute() {
    this.commandsList.forEach((command) => {
      command.execute();
    });
  }
}
