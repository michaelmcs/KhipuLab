import { Component, OnInit } from '@angular/core';
import { TraceEventService } from '../../../services/trace-event.service';
import { TraceEvent } from '../../../models/trace-event.model';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-quipu-page',
  templateUrl: './quipu-page.component.html',
  styleUrls: ['./quipu-page.component.css']
})
export class QuipuPageComponent implements OnInit {

  sampleId: number = 0;

  newEvent: TraceEvent = {
    id: 0,
    event_type: '',
    state: '',
    occurred_at: '',
    quipu_cord: 0,
    quipu_knot: 0,
    quipu_color: '',
    payload_hash: '',
    chain_hash: '',
    payload: {}
  };

  events: TraceEvent[] = [];
  msg: string = '';

  constructor(private traceEventService: TraceEventService) { }

  ngOnInit(): void {}

  loadEvents(): void {
    if (!this.sampleId) return;
    this.traceEventService.getEventsBySample(this.sampleId).subscribe(
      (data: TraceEvent[]) => this.events = data,
      () => this.msg = 'Error al cargar los eventos'
    );
  }
  hashSHA256(str: string): string {
    return sha256(str);
  }
  registerEvent(): void {
    if (!this.sampleId) {
      this.msg = 'Debe ingresar el ID de la muestra primero';
      return;
    }
    try {
      const payloadStr = JSON.stringify(this.newEvent.payload);
      this.newEvent.payload_hash = this.hashSHA256(payloadStr);
      this.newEvent.chain_hash = this.hashSHA256(
        (this.events.length > 0 ? this.events[this.events.length - 1].chain_hash : '') +
        this.newEvent.payload_hash +
        this.newEvent.occurred_at
      );

      this.newEvent.lab_sample_id = this.sampleId;

      this.traceEventService.createEvent(this.sampleId, this.newEvent).subscribe(
        (data: TraceEvent) => {
          this.events.push(data);
          this.msg = 'Evento registrado con éxito';
          this.newEvent = {
            id: 0,
            event_type: '',
            state: '',
            occurred_at: '',
            quipu_cord: 0,
            quipu_knot: 0,
            quipu_color: '',
            payload_hash: '',
            chain_hash: '',
            payload: {}
          };
        },
        () => this.msg = 'Error al registrar el evento'
      );

    } catch {
      this.msg = 'Error en los datos del evento';
    }
  }
  verify(): void {
    if (!this.sampleId) {
      this.msg = 'Debe ingresar el ID de la muestra primero';
      return;
    }

    if (this.events.length === 0) {
      this.msg = 'No hay eventos para verificar';
      return;
    }

    const resultados: string[] = [];

    this.events.forEach((event) => {
      this.traceEventService.verifyEvent(event.id).subscribe(
        (res: any) => {
          resultados.push(`Evento ID ${event.id}: ${res.status === 'integrity_valid' ? 'Cadena Verificada' : 'Cadena Inválida'}`);
          this.msg = resultados.join(' | ');
        },
        () => {
          resultados.push(`Evento ID ${event.id}: Error al verificar`);
          this.msg = resultados.join(' | ');
        }
      );
    });
  }
}


