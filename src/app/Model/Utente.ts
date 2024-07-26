import {Ruolo} from "./Ruolo";

export interface Utente{
  UtenteId ?: number
  Nome ?: string
  Cognome ?: string
  Email ?: string |null
  Password ?: string | null
  Ruolo?: Ruolo
  IsLoggedIn : boolean
  HasChangedPassword ?: boolean
  RefreshToken?:string
  RefreshTokenExpiryTime ?:Date
}

