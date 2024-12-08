const Child1 = (props) => {
    return (
  
      <div>
          <h2>{props.name}</h2>
          <h2>{props.year}</h2>
          <h2>{props.date.toLocaleString()}</h2>
          <h2>{JSON.stringify(props.date)}</h2>
      </div>
    );
  }
  
  export default Child1