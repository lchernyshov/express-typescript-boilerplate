const formatTime = (num: number) => (num < 10 ? `0${num}` : num);

class LoggerService {
  private static _instance: LoggerService;

  private constructor() {}

  static getInstance() {
    if (!LoggerService._instance) {
      LoggerService._instance = new LoggerService();
    }

    return LoggerService._instance;
  }

  private getDateString = () => {
    const date = new Date();

    const hh = formatTime(date.getHours());
    const mm = formatTime(date.getMinutes());
    const ss = formatTime(date.getSeconds());
    const ms = formatTime(date.getMilliseconds());

    return `${hh}:${mm}:${ss}:${ms}`;
  };

  log = (msg: string) => {
    console.log(`⚡️[${this.getDateString()}]: ${msg}`);
  };

  warn = (msg: string) => {
    console.warn(`⚡️[${this.getDateString()}]: ${msg}`);
  };

  err = (msg: any) => {
    console.error(`⚡️[${this.getDateString()}]: ${msg}`);
  };
}

export const logger = LoggerService.getInstance();
