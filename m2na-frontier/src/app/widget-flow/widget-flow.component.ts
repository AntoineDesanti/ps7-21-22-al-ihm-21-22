import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-widget-flow',
  templateUrl: './widget-flow.component.html',
  styleUrls: ['./widget-flow.component.scss']
})
export class WidgetFlowComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() minValue: number = 0;
  @Input() maxValue: number = 100;
  @Input() bestValue: number = 100;
  @Input() value: number = 100;
  @Input() widgetName: string = "widget name";
  @Input() widgetUnit: string = "unit";
  @Input() attributeName: string = "";
  @Output() selectedModelAttribute = new EventEmitter<string>();

  readonly colors: string[] = ["#bf0000", "#e80000", "#e81b00", "#f04000",
    "#f08400", "#ffcb0d", "#c6ff0d", "#a2ff00",
    "#63e31e", "#46b50b"] as string[];
  public progressColor: string = "#000000";

  ngOnInit(): void {
    this.computeColor();
  }

  computeColor(): void {

    const worstDistance = Math.max(Math.abs(this.bestValue-this.minValue), Math.abs(this.bestValue-this.maxValue))

    let distance = Math.abs(this.bestValue-this.value);
    let step : number = worstDistance/10;
    let colorID = Math.max(0, (this.colors.length-1)-Math.floor(distance/step));
    this.progressColor = this.colors[colorID];

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.computeColor();
  }

  onSelectWidget() {
      this.selectedModelAttribute.emit(this.attributeName);
  }
}
