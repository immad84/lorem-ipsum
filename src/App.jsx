import { useEffect, useRef, useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const refInput = useRef(1);

  useEffect(() => {
    refInput.current;
  });

  const useRefInputs = (e) => {
    e.preventDefault();
    const para = refInput.current.value;
    setText(data.slice(0, parseInt(para)));
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
      <form className="lorem-form" onSubmit={controlledInputs}>
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
          onChange={(e) => setCount(e.target.value)}
          ref={refInput}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <div>
              {/* <span>{index + 1}</span> */}
              <p key={nanoid()} ref={useRefInputs}>
                {item}
              </p>
            </div>
          );
        })}
      </article>
    </section>
  );
};
export default App;
