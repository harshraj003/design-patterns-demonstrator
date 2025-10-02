import { createLogger } from '../utils/Logger';

const logger = createLogger();

export class MissionConfigManager {
  private static instance: MissionConfigManager;
  private config: Map<string, string> = new Map();

  private constructor() {
    logger.info('MissionConfigManager singleton instance created.');
  }

  static getInstance(): MissionConfigManager {
    if (!MissionConfigManager.instance) {
      MissionConfigManager.instance = new MissionConfigManager();
    }
    return MissionConfigManager.instance;
  }

  setConfig(key: string, value: string): void {
    try {
      if (!key || !value) throw new Error('Config key and value cannot be empty.');
      this.config.set(key, value);
      logger.info(`Set config: ${key} = ${value}`);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      logger.error(`Failed to set config: ${message}`);
      throw error;
    }
  }

  getConfig(key: string): string | undefined {
    return this.config.get(key);
  }
}