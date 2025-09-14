export class TraceEvent {
  id: number;
  lab_sample_id?: number; 
  event_type: string;
  state: string;
  occurred_at: string;
  quipu_cord: number;
  quipu_knot: number;
  quipu_color: string;
  payload_hash: string;
  chain_hash: string;
  payload: any;

  constructor(
    id: number = 0,
    event_type: string = '',
    state: string = '',
    occurred_at: string = '',
    quipu_cord: number = 0,
    quipu_knot: number = 0,
    quipu_color: string = '',
    payload_hash: string = '',
    chain_hash: string = '',
    payload: any = {}
  ) {
    this.id = id;
    this.event_type = event_type;
    this.state = state;
    this.occurred_at = occurred_at;
    this.quipu_cord = quipu_cord;
    this.quipu_knot = quipu_knot;
    this.quipu_color = quipu_color;
    this.payload_hash = payload_hash;
    this.chain_hash = chain_hash;
    this.payload = payload;
  }
}
