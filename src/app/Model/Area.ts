import {Ticket} from "./Ticket";

export interface Area{
areaId: number;
descrizione?: string;
deleted?: boolean;
icon?: string;
tickets: Ticket[];
}
