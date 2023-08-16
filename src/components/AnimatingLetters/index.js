import './index.scss';

const AnimatingLetters = ({ letterClass, stArray, idx }) => {
  return (
    <span>
      {stArray.map((char, i) => (
        <span key={char + i} className={`${letterClass}_${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};
export default AnimatingLetters;
