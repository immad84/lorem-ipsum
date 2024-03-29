import { useEffect, useRef, useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const refInput = useRef(null);

  const useRefInputs = (e) => {
    e.preventDefault();
    console.log(refInput.current.value);
  };

  const unControlledInputs = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const para = formData.get('paragraphs');
    setText(data.slice(0, parseInt(para)));
  };

  const controlledInputs = (e) => {
    e.preventDefault();
    setText(data.slice(0, parseInt(count)));
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={useRefInputs}>
        <label htmlFor="paragraphs" className="form-label">
          paragraphs
        </label>
        <input
          type="number"
          name="paragraphs"
          id="paragraphs"
          value={count}
          min={1}
          step={1}
          max={8}
          className="form-input"
          ref={refInput}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <div key={nanoid()}>
              {/* <span>{index + 1}</span> */}
              <p ref={refInput}>{item}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};
export default App;
