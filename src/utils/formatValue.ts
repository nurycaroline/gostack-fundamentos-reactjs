const formatValue = (value: number): string =>
  value
    ? Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency',
      }).format(value)
    : 'R$ 0,00';

export default formatValue;
