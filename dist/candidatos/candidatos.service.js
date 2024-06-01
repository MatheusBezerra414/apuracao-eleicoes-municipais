"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const utils_enum_1 = require("./utils/utils.enum");
let CandidatosService = class CandidatosService {
    constructor(candidatoModel) {
        this.candidatoModel = candidatoModel;
    }
    async findAll() {
        try {
            const candidatos = await this.candidatoModel.find().exec();
            return candidatos;
        }
        catch (err) {
            throw new common_1.HttpException(`Erro ao buscar por candidatos`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findEleitos() {
        try {
            const eleitos = await this.candidatoModel
                .find({
                isEleito: true,
            })
                .exec();
            return eleitos;
        }
        catch (err) {
            throw new common_1.HttpException(`Erro ao buscar por eleitos`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findEleitosRegiao(regiao) {
        try {
            const candidatosPorRegiao = await this.candidatoModel
                .find({
                isEleito: true,
                'origem.regiao': regiao,
            })
                .exec();
            return candidatosPorRegiao;
        }
        catch (err) {
            throw new common_1.HttpException(`Erro ao buscar por eleitos filtrados por regiao`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return;
    }
    async findEleitosSexo(sexo) {
        try {
            const eleitosPorSexo = await this.candidatoModel
                .find({
                sexo,
                isEleito: true,
            })
                .exec();
            return eleitosPorSexo;
        }
        catch (err) {
            throw new common_1.HttpException(`Erro ao buscar por eleitos filtrados por sexo`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findVereadoresEleitos() {
        try {
            const vereadoreseleitos = await this.candidatoModel.find({
                isEleito: true,
                cargo: utils_enum_1.Cargos.VEREADOR,
            });
            return vereadoreseleitos;
        }
        catch (err) {
            throw new common_1.HttpException(`Erro ao buscar por vereadores eleitos`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findPrefeitosEleitos() {
        try {
            const prefeitosEleitos = await this.candidatoModel.find({
                isEleito: true,
                cargo: utils_enum_1.Cargos.PREFEITO,
            });
            return prefeitosEleitos;
        }
        catch (err) {
            throw new common_1.HttpException(`Erro ao buscar por prefeitos eleitos`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findCandidato(id) {
        try {
            const candidato = await this.candidatoModel.findById(id);
            return candidato;
        }
        catch (err) {
            throw new common_1.HttpException(`Erro ao buscar por candidato`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateCandidato(id, candidato) {
        try {
            const update = {
                nome: candidato.nome,
                cargo: candidato.cargo,
                numero: candidato.numero,
                origem: {
                    uf: candidato.origem.uf,
                    cidade: candidato.origem.cidade,
                    regiao: candidato.origem.regiao,
                },
                sexo: candidato.sexo,
                isEleito: candidato.isEleito,
                votos: candidato.votos,
                imagem: candidato.imagem
            };
            const novoCandidato = await this.candidatoModel.findOneAndUpdate({
                _id: id,
            }, update, {
                new: true,
            });
            return novoCandidato;
        }
        catch (err) {
            throw new common_1.HttpException(`Erro ao atualizar candidato`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async create(candidato) {
        try {
            return await this.candidatoModel.create(candidato);
        }
        catch (err) {
            throw new common_1.HttpException(`Erro ao criar candidato: ${err}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.CandidatosService = CandidatosService;
exports.CandidatosService = CandidatosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CANDIDATOS_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CandidatosService);
//# sourceMappingURL=candidatos.service.js.map