import { v4 as uuidv4 } from 'uuid';
import { createLogger } from '../utils/Logger';
import { retryOperation } from '../utils/RetryOperation';
import { SpaceStation, AstronautObserver } from './SpaceStation';
import { CommandExecutor, LaunchRocketCommand, DeploySatelliteCommand } from './CommandExecutor';
import { MissionConfigManager } from './MissionConfigManager';
import { SpacecraftFactory } from './SpacecraftFactory';
import { SpacecraftType } from '../types/Enums';
import { LegacySensorAdapter, LegacySensor } from './LegacySensorAdapter';
import { BasicMissionReport, TimestampDecorator, SignatureDecorator } from './ReportDecorators';
import readlineSync from 'readline-sync';

const logger = createLogger();

function demonstrateObserver(): void {
  const station = new SpaceStation();
  const astro1 = new AstronautObserver('Astro1');
  const astro2 = new AstronautObserver('Astro2');
  station.registerObserver(astro1);
  station.registerObserver(astro2);
  const alert = retryOperation(() => {
    const input = readlineSync.question('Enter alert message: ');
    if (!input.trim()) throw new Error('Alert message cannot be empty.');
    return input;
  });
  station.sendAlert(alert);
}

function demonstrateCommand(): void {
  const executor = new CommandExecutor();
  const missionId = retryOperation(() => {
    const input = readlineSync.question('Enter mission ID: ');
    if (!input.trim()) throw new Error('Mission ID cannot be empty.');
    return input;
  });
  const launchCommand = new LaunchRocketCommand(missionId);
  executor.executeCommand(launchCommand);
  const satelliteName = retryOperation(() => {
    const input = readlineSync.question('Enter satellite name: ');
    if (!input.trim()) throw new Error('Satellite name cannot be empty.');
    return input;
  });
  const deployCommand = new DeploySatelliteCommand(satelliteName);
  executor.executeCommand(deployCommand);
}

function demonstrateSingleton(): void {
  const config = MissionConfigManager.getInstance();
  const key = retryOperation(() => {
    const input = readlineSync.question('Enter config key: ');
    if (!input.trim()) throw new Error('Config key cannot be empty.');
    return input;
  });
  const value = retryOperation(() => {
    const input = readlineSync.question('Enter config value: ');
    if (!input.trim()) throw new Error('Config value cannot be empty.');
    return input;
  });
  config.setConfig(key, value);
  console.log(`Retrieved config: ${key} = ${config.getConfig(key)}`);
}

function demonstrateFactory(): void {
  console.log('Available types: Rover, Orbiter');
  const typeInput = retryOperation(() => {
    const input = readlineSync.question('Enter spacecraft type: ');
    const normalizedInput = input.trim().charAt(0).toUpperCase() + input.trim().slice(1).toLowerCase();
    if (!Object.values(SpacecraftType).includes(normalizedInput as SpacecraftType)) {
      throw new Error('Invalid type. Choose Rover or Orbiter.');
    }
    return normalizedInput as SpacecraftType;
  });
  const spacecraft = SpacecraftFactory.createSpacecraft(typeInput);
  spacecraft.launch();
}

function demonstrateAdapter(): void {
  const legacySensor = new LegacySensor();
  const adapter = new LegacySensorAdapter(legacySensor);
  console.log(`Adapted data: ${adapter.readData()}`);
}

function demonstrateDecorator(): void {
  let report = new BasicMissionReport();
  report = new TimestampDecorator(report);
  const signature = retryOperation(() => {
    const input = readlineSync.question('Enter signature: ');
    if (!input.trim()) throw new Error('Signature cannot be empty.');
    return input;
  });
  report = new SignatureDecorator(report, signature);
  console.log(`Generated report: ${report.generate()}`);
}

function main(): void {
  let running = true;
  while (running) {
    console.log('\nDesign Patterns Demonstration Menu:');
    console.log('1. Observer Pattern: Space Station Alert System');
    console.log('2. Command Pattern: Mission Command Executor');
    console.log('3. Singleton Pattern: Mission Config Manager');
    console.log('4. Factory Pattern: Spacecraft Factory');
    console.log('5. Adapter Pattern: Legacy Sensor Adapter');
    console.log('6. Decorator Pattern: Mission Report Decorator');
    console.log('7. Exit');
    const choice = retryOperation(() => {
      const input = readlineSync.question('Enter your choice: ');
      const num = parseInt(input, 10);
      if (isNaN(num) || num < 1 || num > 7) {
        throw new Error('Invalid choice. Enter a number between 1 and 7.');
      }
      return num;
    });
    try {
      switch (choice) {
        case 1: demonstrateObserver(); break;
        case 2: demonstrateCommand(); break;
        case 3: demonstrateSingleton(); break;
        case 4: demonstrateFactory(); break;
        case 5: demonstrateAdapter(); break;
        case 6: demonstrateDecorator(); break;
        case 7: running = false; logger.info('Application exiting.'); console.log('Exiting...'); break;
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      console.log(`Error during demonstration: ${message}`);
      logger.error(`Demonstration error: ${message}`);
    }
  }
}

main();