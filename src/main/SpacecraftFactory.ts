import { v4 as uuidv4 } from 'uuid';
import { createLogger } from '../utils/Logger';
import { Spacecraft } from '../types/Interfaces';
import { SpacecraftType } from '../types/Enums';

const logger = createLogger();

export class Rover implements Spacecraft {
  id: string;
  type = SpacecraftType.Rover;

  constructor(id: string) {
    this.id = id;
  }

  launch(): void {
    console.log(`Launching Rover ${this.id}`);
    logger.info(`Launched Rover ${this.id}`);
  }
}

export class Orbiter implements Spacecraft {
  id: string;
  type = SpacecraftType.Orbiter;

  constructor(id: string) {
    this.id = id;
  }

  launch(): void {
    console.log(`Launching Orbiter ${this.id}`);
    logger.info(`Launched Orbiter ${this.id}`);
  }
}

export class SpacecraftFactory {
  static createSpacecraft(type: SpacecraftType): Spacecraft {
    try {
      const id = uuidv4();
      switch (type) {
        case SpacecraftType.Rover:
          return new Rover(id);
        case SpacecraftType.Orbiter:
          return new Orbiter(id);
        default:
          throw new Error('Invalid spacecraft type.');
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      logger.error(`Spacecraft creation failed: ${message}`);
      throw error;
    }
  }
}