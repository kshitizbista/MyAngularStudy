import {Component, Output, EventEmitter, ViewChild, ElementRef} from "@angular/core";
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent{

  @ViewChild('serverContentInput') serverContentInput : ElementRef;
 @Output('svCreated') serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  onAddServer(serverNameInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName:serverNameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:serverNameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
  }
}
