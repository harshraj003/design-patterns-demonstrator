import { createLogger } from './Logger';

const logger = createLogger();

export function retryOperation<T>(operation: () => T, maxRetries: number = 3): T {
  let attempts = 0;
  while (attempts < maxRetries) {
    try {
      return operation();
    } catch (error: unknown) {
      attempts++;
      const message = error instanceof Error ? error.message : 'Unknown error';
      logger.warn(`Transient error: ${message}. Attempt ${attempts}/${maxRetries}`);
      if (attempts >= maxRetries) {
        logger.error(`Failed after ${maxRetries} attempts: ${message}`);
        throw error;
      }
    }
  }
  throw new Error('Unexpected error: maxRetries not reached');
}