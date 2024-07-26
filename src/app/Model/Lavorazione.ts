import {Ticket} from "./Ticket";
import {Time} from "@angular/common";
import {Utente} from "./Utente";

export interface Lavorazione{
lavorazioneTicketId: number;
ticketId: number;
ticket?: Ticket;
data_presa_in_carico?: Date;
ora_presa_incarico: Time;
motivazione?: string;
utenteId?: number;
utente?: Utente;
deleted: boolean;
}
