"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = void 0;
const mongoose = require("mongoose");
exports.databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await mongoose.connect('mongodb://localhost:27017/eleicoes-db'),
    },
];
//# sourceMappingURL=database.provider.js.map