export class LoggingService{
  logStatusChanged(logStatus: string){
    console.log('A server status changed, new status: ' + logStatus);
  }
}
