import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent {
  
  @ViewChild('tmpDefaultModal') tmpDefaultModal;
  @ViewChild('tmpNMIMSModal') tmpNMIMSModal;
  @ViewChild('tmpHarvardModal') tmpHarvardModal;

  showTemplate(tmpNo) {
    switch(tmpNo) {
      case 1:
        this.tmpDefaultModal.show();
        break;
      case 2:
        this.tmpNMIMSModal.show();
        break;
      case 3:
        this.tmpHarvardModal.show();
        break;
    }
  }
}
