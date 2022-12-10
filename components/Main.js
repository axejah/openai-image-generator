import styles from '../styles/Main.module.css';
import LoadingSpinner from './LoadingSpinner';
import GeneratedImage from './GeneratedImage';
import React, { useState, useEffect } from 'react';

const randomSuggestions = [
  'turtle with sunglasses on a beach',
  'goat near a swimming pool',
  'a cat drinking whisky',
  'a car with a joystick as steeringwheel',
  'a whale riding a bycicle',
  'a mouse chasing a cat',
  'a car with 36 wheels',
  'a cat chasing a dog',
  'a monkey with 3 arms',
  'a bicycle with 6 wheels',
  'a bird with 2 tails',
  'a snake with 4 legs',
  'a fish with wings',
  "a dog with a cat's tail",
  "a cat with a dogs'ears",
  'a giraffe with spots',
  'a bear with stripes',
];

function Main() {
  const [phText, setPhText] = useState('');
  const [genImgUrl, setGenImgUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const setRandomSuggestion = (randomSuggestion) => {
    let index = Math.floor(Math.random() * randomSuggestion.length);
    return setSuggestion(randomSuggestion[index]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);
    const data = {
      inputText: e.target.inputText.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/generateImage';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    setLoading(false);
    console.log(result);
    if (result.success === false) {
      setErrorMessage(result.data);
    }
    e.target.inputText.value = '';
    return setGenImgUrl(result.imageUrl);
  };

  useEffect(() => {
    setRandomSuggestion(randomSuggestions);
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <header>
          <div className={styles.logo}>
            <h2>Image Generator</h2>
          </div>
        </header>
        <section>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              id="inputText"
              name="inputText"
              className="generate-input"
            />
            <button className="submit-btn" type="submit">
              Generate
            </button>
            <div className={styles.textMuted}>
              Need a suggestion? Try: {suggestion}
            </div>
          </form>
          <div className={styles.output}>
            <div id="output-container">
              {errorMessage && (
                <p style={{ color: 'yellow', fontWeight: 'bold' }}>
                  {errorMessage}
                </p>
              )}
              {loading ? (
                <LoadingSpinner />
              ) : (
                genImgUrl && (
                  <GeneratedImage imageUrl={genImgUrl} prompt={phText} />
                )
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
