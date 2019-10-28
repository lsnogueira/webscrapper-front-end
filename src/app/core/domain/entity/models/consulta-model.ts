export interface ConsultaCivilModel {
  nome: string;
  cpf: string;
  nomeMae: string;
  dataNascimento: string;
  numero_processo: string;
  rg: string;
}

export interface ConsultaJuridicaModel {
  nome: string;
  cnpj: string;
}

export interface ConsultaProcessosModel {
  nomeProcesso?: string;
  numeroProcesso: string;
  estado?: string;
  nomeRegistrado?: string;
  cpfRegistrado?: string;
}

export interface ConsultaAutomotivaModel {
  id: number;
}

export interface ConsultaCriminalModel {
  apresentacao: string;
  instituicoes: string;
  departamentos: string;
  seccionais: string;
  distritos: string;
}
