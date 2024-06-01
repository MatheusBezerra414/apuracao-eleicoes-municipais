"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatosSchema = void 0;
const mongoose_1 = require("mongoose");
const utils_enum_1 = require("./utils/utils.enum");
exports.CandidatosSchema = new mongoose_1.default.Schema({
    nome: String,
    partido: { type: String, default: 'Republicanos' },
    cargo: { type: String, enum: utils_enum_1.Cargos },
    numero: String,
    origem: {
        uf: String,
        cidade: String,
        regiao: { type: String, enum: utils_enum_1.Regioes },
    },
    sexo: { type: String, enum: utils_enum_1.Sexo },
    isEleito: { type: Boolean, default: false },
    votos: Number,
    imagem: { type: String },
});
//# sourceMappingURL=candidatos.schema.js.map