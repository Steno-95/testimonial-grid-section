function Card({ children, bg, pos, quote = undefined }) {
  const quoteClass = quote
    ? " before:bg-[url(/images/bg-pattern-quotation.svg)]  before:bg-no-repeat before:absolute before:top-0 before:right-20 relative before:-z-1 before:size-25 z-0 before:md:size-30 before:lg:size-35"
    : "";
  return (
    <div
      className={
        `${bg} p-8 rounded-md max-w-[300px] flex lg:p-3 flex-col mx-auto ${pos} sm:max-w-none lg:h-full ` +
        quoteClass
      }
    >
      {children}
    </div>
  );
}

export default Card;
