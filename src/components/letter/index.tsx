import { LetterWrapper } from './styles';

type LetterProps = {
  letter?: string;
  match?: string;
}

const Letter = ({ letter, match }: LetterProps) => {
  return (
    <LetterWrapper match={match}>{letter}</LetterWrapper>
  );
}

export default Letter;
