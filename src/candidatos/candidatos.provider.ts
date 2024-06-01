import { Connection, Mongoose } from 'mongoose';
import { CandidatosSchema } from './candidatos.schema';

export const candidatosProvider = [
  {
    provide: 'CANDIDATOS_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Candidato', CandidatosSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
