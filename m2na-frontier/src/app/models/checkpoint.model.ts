
export interface Checkpoint  {
  id: string;
  name: string;
  lat: number;
  long: number;
  type: string;
  maximumFlowPerMinute: number;
  minimumControllers: number;
  maximumControllers: number;
  isOpen: boolean;
  awaitingPassengers: number;
  value:number;
}

/*
[{"id": "1", "lat": 21.5, "long":17, "type": "Checkpoint A", "maximumFlowPerMinute":500, "minimumControllers": 2, "maximumControllers":8, "isOpen":false , "value":150},
  {"id": "2", "lat": 30.6, "long":72, "type": "Checkpoint B", "maximumFlowPerMinute":500, "minimumControllers": 2, "maximumControllers":8, "isOpen":false, "value":500},
  {"id": "3", "lat": 66.5, "long":73, "type": "Checkpoint C", "maximumFlowPerMinute":500, "minimumControllers": 2, "maximumControllers":8, "isOpen":false, "value":75}];*/
