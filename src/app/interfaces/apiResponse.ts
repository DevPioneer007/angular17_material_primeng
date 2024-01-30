import { ILocation } from "../types/location";

export interface Result {
  items: ILocation[];
}

export interface ApiResponse {
  result: Result;
}