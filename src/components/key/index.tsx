import { KeyWrapper } from './styles'

type KeyProps = {
  letter: string;
  match: string;
  action?: React.MouseEventHandler<HTMLButtonElement>;
}

const Key = ({ letter, match, action }: KeyProps) => {
  return (
    <>
      <KeyWrapper match={match} onClick={action}>{letter}</KeyWrapper>
    </>
  )
}

export default Key;
