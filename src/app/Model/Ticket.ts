import {Time} from "@angular/common";
import {Utente} from "./Utente";
import {Priorita} from "./Priorita";
import {Status} from "./Status";
import {Area} from "./Area";
import {Lavorazione} from "./Lavorazione";

export interface Ticket{
  ticketId: number;
data_apertura: Date;
ora_apertura?: Time;
data_chiusura?: Date;
ora_chiusura?: Time;
descrizione?: string;
lavorazioni_ticket: Lavorazione[];
soluzione?: string;
prodotto?: string;
utenteId?: number;
utente: Utente;
priorita?: Priorita;
area?: Area;
areaId?: number
status?: Status;
deleted: boolean;
assegnaAllUtenteLoggato: boolean;
}
