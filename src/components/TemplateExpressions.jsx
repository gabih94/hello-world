const TemplateExpressions = () => {

  const animal = ['Gato', 'Cachorro', 'Hamster', 'Peixe']
  const data = {
    animal: 'Gato',
    nome: 'Frida',
  }

  return(
    <div>
      <ul>
        <li>{data.animal} de nome {data.nome}</li>
        <li>{animal[1]}</li>
        <li>{animal[2]}</li>
        <li>{animal[3]}</li>
      </ul>
    </div>
  );
};

export default TemplateExpressions;