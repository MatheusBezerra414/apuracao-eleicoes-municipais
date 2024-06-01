import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CandidatosService } from './candidatos.service';
import { Candidato } from './interfaces/candidato.interface';
import { Regioes, Sexo } from './utils/utils.enum';
import { CandidatoDTO } from './dto/candidato.dto';

@Controller('candidatos')
export class CandidatosController {
    constructor(private readonly candidatosService: CandidatosService){}

    @Get()
    async findAll(): Promise<Candidato[]>{
        return this.candidatosService.findAll();
    }
    @Get('/eleitos')
    async findEleitos(): Promise<Candidato[]>{
        return this.candidatosService.findEleitos();
    }
    @Get('/eleitos/regiao')
    async findEleitosRegiao(@Query('regiao') regiao: Regioes ): Promise<Candidato[]>{
        return this.candidatosService.findEleitosRegiao(regiao);
    }
    @Get('/eleitos/sexo')
    async findEleitosSexo(@Query('sexo') sexo: Sexo): Promise<Candidato[]>{
        return this.candidatosService.findEleitosSexo(sexo);
    }
    @Get('eleitos/vereadores')
    async findVereadoresEleitos(): Promise<Candidato[]>{
        return this.candidatosService.findVereadoresEleitos();
    }
    @Get('eleitos/prefeitos')
    async findPrefeitosEleitos(): Promise<Candidato[]>{
        return this.candidatosService.findPrefeitosEleitos();
    }
    @Get(':id')
    async findCandidatoById(@Param('id') id: string): Promise<Candidato>{
        return this.candidatosService.findCandidato(id);
    }
    @Put('/update/:id')
    async updateCandidat(@Param('id') id: string, @Body() candidato: CandidatoDTO): Promise<Candidato>{
        return this.candidatosService.updateCandidato(id, candidato);
    }
    @Post()
    async create(@Body() candidatos: CandidatoDTO[]): Promise<Candidato[]> {
        const criados = candidatos.map(async (candidato)=>{
            return this.candidatosService.create(candidato)
        })
        return Promise.all(criados)
    }
}
