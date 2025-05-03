function CardHeader({
  img,
  name,
  verified,
  textColor,
  userColor,
  outlineColor = undefined,
}) {
  return (
    <header className="flex items-center gap-5 mb-5 lg:mb-3 lg:gap-3 z-10">
      <figure
        className={`size-[2.1rem] rounded-[100%] lg:size-[3rem] overflow-hidden ${
          outlineColor && outlineColor + " outline-2 "
        }`}
      >
        <img
          src={`/images/image-${img}.jpg`}
          alt={`${img} photo`}
          className="size-[2.1rem] lg:size-[3rem] "
        />
      </figure>
      <article className="flex flex-col">
        <h2
          className={"text-[.8rem] font-semibold lg:text-[1.2rem] " + userColor}
        >
          {name}
        </h2>
        <p className={"text-[.7rem] lg:text-[1.1rem] " + textColor}>
          {verified}
        </p>
      </article>
    </header>
  );
}

export default CardHeader;
