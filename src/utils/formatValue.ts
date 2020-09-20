const formatValue = (value: number): string =>
  // Intl.NumberFormat('pt-br' {style: 'currency', currency: VR}).format(value);
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export default formatValue;
