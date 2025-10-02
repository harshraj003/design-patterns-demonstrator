 
import { Report } from '../types/Interfaces';

export class BasicMissionReport implements Report {
  generate(): string {
    return 'Basic mission report.';
  }
}

export abstract class ReportDecorator implements Report {
  protected wrappedReport: Report;

  constructor(report: Report) {
    this.wrappedReport = report;
  }

  generate(): string {
    return this.wrappedReport.generate();
  }
}

export class TimestampDecorator extends ReportDecorator {
  generate(): string {
    return `${super.generate()} [Timestamp: ${new Date().toISOString()}]`;
  }
}

export class SignatureDecorator extends ReportDecorator {
  private signature: string;

  constructor(report: Report, signature: string) {
    super(report);
    this.signature = signature;
  }

  generate(): string {
    return `${super.generate()} [Signed: ${this.signature}]`;
  }
}