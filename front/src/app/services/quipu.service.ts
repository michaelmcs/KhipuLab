import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface QuipuNode {
  id: number;
  cord: number;
  knot: number;
  label: string;
  occurred_at?: string;
}

export interface QuipuResponse {
  sample?: { id: number; code: string };
  nodes: QuipuNode[];
}

/** Payload para crear un evento (no incluye id) */
export type NewEvent = Omit<QuipuNode, 'id'>;

/** Respuesta de crear evento */
export interface AddEventResponse {
  id: number;
  chain_hash: string;
}

/** Respuesta de verificación */
export interface VerifyResponse {
  valid: boolean;
  count?: number;
  tampered_event_id?: number;
}

@Injectable({ providedIn: 'root' })
export class QuipuService {
  // Cambia el host/puerto si tu backend Laravel está en otro lugar
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  /** Obtener el quipu (nodos + sample) */
  getQuipu(id: number): Observable<QuipuResponse> {
    return this.http.get<QuipuResponse>(`${this.baseUrl}/quipu/${id}`);
  }

  /** Crear un evento en la cadena del quipu */
  addEvent(sampleId: number, body: NewEvent): Observable<AddEventResponse> {
    return this.http.post<AddEventResponse>(
      `${this.baseUrl}/quipu/${sampleId}/events`,
      body
    );
  }

  /** Verificar la cadena del quipu */
  verify(sampleId: number): Observable<VerifyResponse> {
    return this.http.get<VerifyResponse>(
      `${this.baseUrl}/quipu/${sampleId}/verify`
    );
  }
}
