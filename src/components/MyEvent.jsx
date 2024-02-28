import { render } from "@testing-library/react";

const MyEvent = () => {

  const handleMyEvent = (e) => {
    console.log(e)

    console.log('Evento')
  }

  const renderSomething = (x) => {
    if(x) {
      return <h4>Renderizando...</h4>
    } else {
      return <h4>Error...</h4>
    }
  };

  return(
    <div>
        <div>
            <button onClick={handleMyEvent}>Click aqui</button>
            <button onClick={() => console.log("função de click")}>
              Click
            </button>
            <button onClick={() => {
              if(true)
              console.log('Má conduta de desenvolvimento')
            }}>Click errado</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}

    </div>
  )
};

export default MyEvent;