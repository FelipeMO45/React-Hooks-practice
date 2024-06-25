import React, { useState } from 'react';
import styles from './styles/formComponente.module.css';

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [lastKeyPressed, setLastKeyPressed] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    alert(`El valor del campo de entrada es: ${inputValue}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    setLastKeyPressed(event.key);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label htmlFor="inputField">Entrada de texto:</label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <button onClick={handleClick} className={styles.button}>
        Enviar
      </button>
      <div className={styles.inputGroup}>
        <label htmlFor="keypressField">Campo de Teclas:</label>
        <input
          type="text"
          id="keypressField"
          onKeyPress={handleKeyPress}
          className={styles.inputField}
        />
        <p>Última tecla presionada: {lastKeyPressed}</p>
      </div>
    </div>
  );
};

export default Form;
