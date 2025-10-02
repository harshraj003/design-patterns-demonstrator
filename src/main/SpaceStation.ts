import { Observer } from '../types/Interfaces';
import { createLogger } from '../utils/Logger';

const logger = createLogger();

export class SpaceStation {
  private observers: Observer[] = [];
  private alerts: string[] = [];

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
    logger.info('Observer registered.');
  }

  notifyObservers(message: string): void {
    this.observers.forEach(observer => observer.update(message));
  }

  sendAlert(alert: string): void {
    try {
      if (!alert.trim()) throw new Error('Alert message cannot be empty.');
      this.alerts.push(alert);
      this.notifyObservers(alert);
      logger.info(`Alert sent: ${alert}`);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      logger.error(`Failed to send alert: ${message}`);
      throw error;
    }
  }
}

export class AstronautObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(message: string): void {
    console.log(`${this.name} received alert: ${message}`);
    logger.info(`${this.name} notified of alert: ${message}`);
  }
}