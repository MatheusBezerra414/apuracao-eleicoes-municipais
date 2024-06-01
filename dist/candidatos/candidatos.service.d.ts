/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Candidato } from './interfaces/candidato.interface';
import { Regioes, Sexo } from './utils/utils.enum';
import { CandidatoDTO } from './dto/candidato.dto';
export declare class CandidatosService {
    private readonly candidatoModel;
    constructor(candidatoModel: Model<Candidato>);
    findAll(): Promise<Candidato[]>;
    findEleitos(): Promise<Candidato[]>;
    findEleitosRegiao(regiao: Regioes): Promise<Candidato[]>;
    findEleitosSexo(sexo: Sexo): Promise<Candidato[]>;
    findVereadoresEleitos(): Promise<Candidato[]>;
    findPrefeitosEleitos(): Promise<Candidato[]>;
    findCandidato(id: string): Promise<Candidato>;
    updateCandidato(id: string, candidato: CandidatoDTO): Promise<Candidato>;
    create(candidato: CandidatoDTO): Promise<Candidato>;
}
