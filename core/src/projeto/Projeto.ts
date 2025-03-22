import { Nivel } from "./Nivel"
import { tipo } from "./Tipo"

export default interface Projeto {
    id: number
    nome: string
    descricao: string
    imagens: string[]
    tipo: tipo
    nivel: Nivel
    repositorio: string
    destaque: boolean
    tecnologias: Tecnologia[]

}