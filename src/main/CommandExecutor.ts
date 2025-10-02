import { Command } from '../types/Interfaces';
import { createLogger } from '../utils/Logger';

const logger = createLogger();

export class CommandExecutor {
  executeCommand(command: Command): void {
    try {
      command.execute();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      logger.error(`Command execution failed: ${message}`);
      throw error;
    }
  }
}

export class LaunchRocketCommand implements Command {
  private missionId: string;

  constructor(missionId: string) {
    this.missionId = missionId;
  }

  execute(): void {
    console.log(`Launching rocket for mission ${this.missionId}`);
    logger.info(`Executed launch for mission ${this.missionId}`);
  }
}

export class DeploySatelliteCommand implements Command {
  private satelliteName: string;

  constructor(satelliteName: string) {
    this.satelliteName = satelliteName;
  }

  execute(): void {
    console.log(`Deploying satellite ${this.satelliteName}`);
    logger.info(`Executed deployment for satellite ${this.satelliteName}`);
  }
}