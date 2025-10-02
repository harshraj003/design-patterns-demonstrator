 
export interface Observer {
  update(message: string): void;
}

export interface Command {
  execute(): void;
}

export interface Spacecraft {
  id: string;
  type: string;
  launch(): void;
}

export interface ModernSensor {
  readData(): string;
}

export interface Report {
  generate(): string;
}