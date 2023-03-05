interface TitleProps {
  title: string;
  context: string;
  className: string;
}

const Title = ({ className, context, title }: TitleProps) => {
  return (
    <div>
      <div className={className}>
        <h1>{title}</h1>
        <h3>{context}</h3>
      </div>
    </div>
  );
};

export default Title;
