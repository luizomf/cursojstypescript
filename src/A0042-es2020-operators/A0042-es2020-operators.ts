// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? '1-Ixi, não existe data.');
console.log(undefined ?? '2-Ixi, não existe data.');
console.log(null ?? '3-Ixi, não existe data.');
console.log(false ?? '4-Ixi, não existe data.');
console.log(0 ?? '5-Ixi, não existe data.');
console.log('' ?? '6-Ixi, não existe data.');
