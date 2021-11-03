import { Frase } from "../shared/frase.model";

const FRASES: Frase[] = [
  new Frase("I've been learning Angular", "Eu estou aprendendo Angular"), // dessa forma como no C#
  { fraseEng: "I like to learn english", frasePtBr: "Eu gosto de aprender inglês"}, // também pode ser assim
  new Frase("I watch TV", "Eu assisto TV"),
  new Frase("I need to resume my English studies", "Eu preciso retomar meus estudos em inglês")
];

// apenas para teste no export

function Sum(n1: number, n2: number) : number {
  return n1 + n2;
}

export {
  FRASES,
  Sum
};