const PessoaFisica = require('./PessoaFisica');
const PessoaJuridica = require('./PessoaJuridica');

let pFisica = new PessoaFisica();
pFisica.CPF = '1234567894';

let pJuridica = new PessoaJuridica();
pJuridica.CNPJ = '12345678912345';

pFisica.Validacao(pFisica.CPF, true);
pJuridica.Validacao(pJuridica.CNPJ, false);

// javascript => c#, java, typescript, swift, dart, c++, 