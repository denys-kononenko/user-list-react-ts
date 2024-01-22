type Props = {
  title: string,
  value: string,
}

export const UserInfoItem: React.FC<Props> = ({ title, value }) => {
  return (
    <li className="p-1">
      <span className="is-size-7 is-capitalized has-text-weight-bold mr-4">
        {title}:
      </span>

      {value}
    </li>
  );
}
