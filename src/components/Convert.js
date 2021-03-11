import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = (props) => {
  const { language, text } = props;
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: process.env.REACT_APP_API_KEY,
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    if (debouncedText) {
      doTranslation();
    }
  }, [language, debouncedText]);

  return (
    <div className="ui header">
      <h1>{translated}</h1>
    </div>
  );
};

export default Convert;
