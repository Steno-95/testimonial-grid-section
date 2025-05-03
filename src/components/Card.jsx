function Card({ children, bg, pos, quote = false }) {
  const quoteClass = quote
    ? " before:md:bg-[url(/images/bg-pattern-quotation.svg)]  before:md:bg-no-repeat before:md:absolute before:md:top-0 before:md:right-20 relative before:md:-z-1 before:md:size-25 z-0 before:md:size-30 before:lg:size-35"
    : "";
  return (
    <article
      className={
        `${bg} p-8 rounded-md max-w-[300px] flex lg:p-5 flex-col mx-auto ${pos} sm:max-w-none min-h-full shadow-[5px_10px_10px_var(--black)] xl:p-8  ` +
        quoteClass
      }
    >
      {children}
    </article>
  );
}

export default Card;
