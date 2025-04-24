function CardText({ children, textColor }) {
  return (
    <p className={" text-[.9rem] font-semibold lg:text-[1.1rem] " + textColor}>
      {children}
    </p>
  );
}

export default CardText;
