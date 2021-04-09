import { Candidate } from "./candidate";

export interface CandidatesAPIResult {
  results: Candidate[];
  info:    Info;
}

export interface Info {
  seed:    string;
  results: number;
  page:    number;
  version: string;
}
