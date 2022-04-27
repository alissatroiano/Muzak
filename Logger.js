
/** Logger which outputs to the browser console */
export class ConsoleLogger extends React {

    /** Logger which outputs to a file */
    constructor() {
      this.log = console.log.bind(console);
      this.warn = console.warn.bind(console);
      this.error = console.error.bind(console);
    }
  }