const messages = {
    _default: () => 'O valor do campo não é válido',
    after: ([target]) => `O campo deve estar depois do campo ${target}`,
    alpha: () => 'O campo deve conter somente letras',
    alpha_dash: () => 'O campo deve conter letras, números e traços',
    alpha_num: () => 'O campo deve conter somente letras e números',
    alpha_spaces: () => 'O campo só pode conter caracteres alfabéticos e espaços',
    before: ([target]) => `O campo deve estar antes do campo ${target}`,
    between: (field, [min, max]) => `O campo ${field} deve estar entre ${min} e ${max}`,
    confirmed: (confirmedField, field) => `Os campos '${field}' e '${confirmedField}' devem ser iguais`,
    credit_card: () => 'O campo é inválido',
    date_between: ([min, max]) => `O campo deve estar entre ${min} e ${max}`,
    date_format: ([format]) => `O campo deve estar no formato ${format}`,
    decimal: ([decimals = '*'] = []) => `O campo deve ser numérico e deve conter ${!decimals || decimals === '*' ? '' : decimals} casas decimais`,
    digits: ([length]) => `O campo deve ser numérico e ter exatamente ${length} dígitos`,
    dimensions: ([width, height]) => `O campo deve ter ${width} pixels de largura por ${height} pixels de altura`,
    email: () => 'O campo deve ser um email válido',
    excluded: () => 'O campo deve ser um valor válido',
    ext: () => 'O campo deve ser um arquivo válido',
    image: () => 'O campo deve ser uma imagem',
    included: () => 'O campo deve ter um valor válido',
    integer: () => 'O campo deve ser um número inteiro',
    ip: () => 'O campo deve ser um endereço IP válido',
    is: () => 'O valor inserido no campo não é válido',
    length: ([length, max]) => {
        if (max) {
            return `O tamanho do campo está entre ${length} e ${max}`;
        }

        return `O tamanho do campo deve ser ${length}`;
    },
    max: (field, value) => `O campo não deve ter mais que ${value} caracteres`,
    max_value: (field, value) => `O valor deve ser menor ou igual a ${value}`,
    mimes: () => 'O campo deve ser um tipo de arquivo válido',
    min: (field, value) => `O campo deve conter pelo menos ${value} caracteres`,
    min_value: (field, value) => `O valor deve ser maior ou igual a ${value}`,
    numeric: () => 'O campo deve conter apenas números',
    regex: () => 'O campo possui um formato inválido',
    required: () => 'O campo é obrigatório',
    url: () => 'O campo não é uma URL válida',
    //custom validators
    cnpj: () => 'CNPJ inválido',
};

const locale = {
    name: 'pt_BR',
    messages,
    attributes: {}
};

export default locale;