import * as fs from 'fs';
import * as moment from 'moment';

export class Logger {
    private logFile;

    constructor(logFile: string = 'logger.log') {
        this.logFile = logFile;
    }

    private log(log: any, level: string) {
        fs.appendFileSync(this.logFile, `[${moment().format("DD/MM/YYYY HH:mm:ss ZZ")}][${level}] ${JSON.stringify(log)}\r\n`);
    }

    public info(log: any) {
        this.log(log, 'INFO');
    }

    public error(log: any) {
        (new Error(log).stack).split('\n').forEach((line) => {
            this.log(line, 'ERROR');
        })
    }

    public fatal(log: any) {
        (new Error(log).stack).split('\n').forEach((line) => {
            this.log(line, 'FATAL');
        })
    }

    public debug(log: any) {
        if (process.env.DEBUG)
            this.log(log, 'DEBUG');
    }
}

export default Logger;
