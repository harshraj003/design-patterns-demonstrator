 
import { ModernSensor } from '../types/Interfaces';

export class LegacySensor {
  getLegacyData(): string {
    return 'Legacy sensor data';
  }
}

export class LegacySensorAdapter implements ModernSensor {
  private legacySensor: LegacySensor;

  constructor(legacySensor: LegacySensor) {
    this.legacySensor = legacySensor;
  }

  readData(): string {
    return this.legacySensor.getLegacyData() + ' (adapted)';
  }
}