import { Component, ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appExampleZippyContent]'
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'app-slot-basic',
  templateUrl: './slot-basic.component.html',
  styleUrls: ['./slot-basic.component.css']
})
export class SlotBasicComponent {

  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
}


