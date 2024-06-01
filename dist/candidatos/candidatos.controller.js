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
exports.CandidatosController = void 0;
const common_1 = require("@nestjs/common");
const candidatos_service_1 = require("./candidatos.service");
const utils_enum_1 = require("./utils/utils.enum");
const candidato_dto_1 = require("./dto/candidato.dto");
let CandidatosController = class CandidatosController {
    constructor(candidatosService) {
        this.candidatosService = candidatosService;
    }
    async findAll() {
        return this.candidatosService.findAll();
    }
    async findEleitos() {
        return this.candidatosService.findEleitos();
    }
    async findEleitosRegiao(regiao) {
        return this.candidatosService.findEleitosRegiao(regiao);
    }
    async findEleitosSexo(sexo) {
        return this.candidatosService.findEleitosSexo(sexo);
    }
    async findVereadoresEleitos() {
        return this.candidatosService.findVereadoresEleitos();
    }
    async findPrefeitosEleitos() {
        return this.candidatosService.findPrefeitosEleitos();
    }
    async findCandidatoById(id) {
        return this.candidatosService.findCandidato(id);
    }
    async updateCandidat(id, candidato) {
        return this.candidatosService.updateCandidato(id, candidato);
    }
    async create(candidatos) {
        const criados = candidatos.map(async (candidato) => {
            return this.candidatosService.create(candidato);
        });
        return Promise.all(criados);
    }
};
exports.CandidatosController = CandidatosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidatosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/eleitos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidatosController.prototype, "findEleitos", null);
__decorate([
    (0, common_1.Get)('/eleitos/regiao'),
    __param(0, (0, common_1.Query)('regiao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatosController.prototype, "findEleitosRegiao", null);
__decorate([
    (0, common_1.Get)('/eleitos/sexo'),
    __param(0, (0, common_1.Query)('sexo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatosController.prototype, "findEleitosSexo", null);
__decorate([
    (0, common_1.Get)('eleitos/vereadores'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidatosController.prototype, "findVereadoresEleitos", null);
__decorate([
    (0, common_1.Get)('eleitos/prefeitos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidatosController.prototype, "findPrefeitosEleitos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatosController.prototype, "findCandidatoById", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, candidato_dto_1.CandidatoDTO]),
    __metadata("design:returntype", Promise)
], CandidatosController.prototype, "updateCandidat", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CandidatosController.prototype, "create", null);
exports.CandidatosController = CandidatosController = __decorate([
    (0, common_1.Controller)('candidatos'),
    __metadata("design:paramtypes", [candidatos_service_1.CandidatosService])
], CandidatosController);
//# sourceMappingURL=candidatos.controller.js.map