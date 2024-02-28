const Challenge = () => {

  const data = {
    n1: 6,
    n2: 7,
  }

  const handleCount = () => {
    return console.log(data.n1 + data.n2)
  }
  return(
    <div>
      <p>{data.n1} + {data.n2}</p>
      <button onClick={handleCount}>=</button>
    </div>
  );
};

export default Challenge;
