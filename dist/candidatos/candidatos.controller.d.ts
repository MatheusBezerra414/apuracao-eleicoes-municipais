import { CandidatosService } from './candidatos.service';
import { Candidato } from './interfaces/candidato.interface';
import { Regioes, Sexo } from './utils/utils.enum';
import { CandidatoDTO } from './dto/candidato.dto';
export declare class CandidatosController {
    private readonly candidatosService;
    constructor(candidatosService: CandidatosService);
    findAll(): Promise<Candidato[]>;
    findEleitos(): Promise<Candidato[]>;
    findEleitosRegiao(regiao: Regioes): Promise<Candidato[]>;
    findEleitosSexo(sexo: Sexo): Promise<Candidato[]>;
    findVereadoresEleitos(): Promise<Candidato[]>;
    findPrefeitosEleitos(): Promise<Candidato[]>;
    findCandidatoById(id: string): Promise<Candidato>;
    updateCandidat(id: string, candidato: CandidatoDTO): Promise<Candidato>;
    create(candidatos: CandidatoDTO[]): Promise<Candidato[]>;
}
