import * as React from 'react';
import './style.css';

export default function App() {
  const ref = React.useRef(0);
  const selectText = React.useRef();

  const handleClick = () => {
    // console.log((ref.current += 1));
    console.log(selectText.current);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p ref={selectText} className="my-paragraph">
        Start editing to see some magic happen :)
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
