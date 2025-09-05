// src/app/UI/Pages/quipu-page/quipu-page.component.ts
import { Component } from '@angular/core';
import { QuipuService } from '../../../services/quipu.service';

@Component({
  selector: 'app-quipu-page',
  templateUrl: './quipu-page.component.html',
  styleUrls: ['./quipu-page.component.css']
})
export class QuipuPageComponent {
  sampleId?: number;

  form: any = {
    event_type: '',
    state: '',
    occurred_at: '',
    quipu_cord: 0,
    quipu_knot: 0,
    quipu_color: ''
  };

  msg = '';

  constructor(private api: QuipuService) {}

  crearEvento() {
    if (!this.sampleId) return;
    this.api.addEvent(this.sampleId, this.form).subscribe({
      next: r => {
        this.msg = `OK evento #${r.id}, hash=${r.chain_hash}`;
        // opcional: limpiar formulario
        // this.form = { event_type:'', state:'', occurred_at:'', quipu_cord:0, quipu_knot:0, quipu_color:'' };
      },
      error: () => this.msg = 'Error al guardar evento'
    });
  }

  verificar() {
    if (!this.sampleId) return;
    this.api.verify(this.sampleId).subscribe({
      next: r => this.msg = r.valid
        ? `Cadena válida (${r.count ?? 0} eventos)`
        : `Cadena ALTERADA en evento id=${r.tampered_event_id}`,
      error: () => this.msg = 'Error al verificar'
    });
  }
}
