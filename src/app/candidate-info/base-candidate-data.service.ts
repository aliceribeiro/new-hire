import { Candidate } from './candidate';
import { BehaviorSubject } from 'rxjs';

export class BaseCandidatoDataService {

  protected candidatosSource = new BehaviorSubject<Candidate[]>([]);
  protected candidatos: Candidate[] = [];

  constructor() { }

  add(candidate: Candidate) {
    this.candidatos.push(candidate);
    this.candidatosSource.next(this.candidatos)
  }

  getAll() {
    return this.candidatosSource;
  }

  getByUUID(uuid: string) {
    return this.candidatos.filter((candidato) => candidato.login.uuid === uuid)
  }

  protected moveTo(uuid: string, dataSource: BaseCandidatoDataService): boolean {
    const index = this.candidatos
      .findIndex((candidato: Candidate) => candidato.login.uuid === uuid)
    const isCandidateInArray = index !== -1
    if (isCandidateInArray) {
      const [candidatoRemovido] = this.candidatos.splice(index, 1)
      dataSource.add(candidatoRemovido)
    }
    this.candidatosSource.next(this.candidatos)
    return isCandidateInArray
  }
}