import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Candidato } from './interfaces/candidato.interface';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cargos, Regioes, Sexo } from './utils/utils.enum';
import { CandidatoDTO } from './dto/candidato.dto';

@Injectable()
export class CandidatosService {
  constructor(
    @Inject('CANDIDATOS_MODEL')
    private readonly candidatoModel: Model<Candidato>,
  ) {}

  async findAll(): Promise<Candidato[]> {
    try {
      const candidatos = await this.candidatoModel.find().exec();
      return candidatos;
    } catch (err) {
      throw new HttpException(
        `Erro ao buscar por candidatos`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findEleitos(): Promise<Candidato[]> {
    try {
      const eleitos = await this.candidatoModel
        .find({
          isEleito: true,
        })
        .exec();
      return eleitos;
    } catch (err) {
      throw new HttpException(
        `Erro ao buscar por eleitos`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findEleitosRegiao(regiao: Regioes): Promise<Candidato[]> {
    try {
      const candidatosPorRegiao = await this.candidatoModel
        .find({
          isEleito: true,
          'origem.regiao': regiao,
        })
        .exec();
      return candidatosPorRegiao;
    } catch (err) {
      throw new HttpException(
        `Erro ao buscar por eleitos filtrados por regiao`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return;
  }

  async findEleitosSexo(sexo: Sexo): Promise<Candidato[]> {
    try {
      const eleitosPorSexo = await this.candidatoModel
        .find({
          sexo,
          isEleito: true,
        })
        .exec();
      return eleitosPorSexo;
    } catch (err) {
      throw new HttpException(
        `Erro ao buscar por eleitos filtrados por sexo`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findVereadoresEleitos(): Promise<Candidato[]> {
    try {
      const vereadoreseleitos = await this.candidatoModel.find({
        isEleito: true,
        cargo: Cargos.VEREADOR,
      });
      return vereadoreseleitos;
    } catch (err) {
      throw new HttpException(
        `Erro ao buscar por vereadores eleitos`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findPrefeitosEleitos(): Promise<Candidato[]> {
    try {
      const prefeitosEleitos = await this.candidatoModel.find({
        isEleito: true,
        cargo: Cargos.PREFEITO,
      });
      return prefeitosEleitos;
    } catch (err) {
      throw new HttpException(
        `Erro ao buscar por prefeitos eleitos`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findCandidato(id: any): Promise<Candidato> {
    try {
      const candidato = await this.candidatoModel.findById(id);
      return candidato;
    } catch (err) {
      throw new HttpException(
        `Erro ao buscar por candidato`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateCandidato(id: any, candidato: CandidatoDTO): Promise<Candidato> {
    try {
      const update = {
        nome: candidato.nome,
        partido: candidato.partido,
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
      };
      const novoCandidato = await this.candidatoModel.findOneAndUpdate(
        {
          _id: id,
        },
        update,
        {
          new: true,
        },
      );
      return novoCandidato;
    } catch (err) {
      throw new HttpException(
        `Erro ao atualizar candidato`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(candidato: CandidatoDTO): Promise<Candidato> {
    try {
      return await this.candidatoModel.create(candidato);
    } catch (err) {
      throw new HttpException(
        `Erro ao criar candidato`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
