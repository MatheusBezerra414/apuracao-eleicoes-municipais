"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidatosProvider = void 0;
const candidatos_schema_1 = require("./candidatos.schema");
exports.candidatosProvider = [
    {
        provide: 'CANDIDATOS_MODEL',
        useFactory: (mongoose) => mongoose.model('Candidato', candidatos_schema_1.CandidatosSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=candidatos.provider.js.map