import mongoose from 'mongoose';
import { Cargos, Regioes, Sexo } from './utils/utils.enum';

export const CandidatosSchema = new mongoose.Schema({
  nome: String,
  partido: { type: String, default: 'Republicanos' },
  cargo: { type: String, enum: Cargos },
  numero: String,
  origem: {
    uf: String,
    cidade: String,
    regiao: { type: String, enum: Regioes },
  },
  sexo: { type: String, enum: Sexo },
  isEleito: { type: Boolean, default: false },
  votos: Number,
});
