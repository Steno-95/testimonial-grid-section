function CardQuote({ children, textColor }) {
  return (
    <p className={" text-[.8rem] lg:text-[.9rem] " + textColor}>{children}</p>
  );
}

export default CardQuote;
