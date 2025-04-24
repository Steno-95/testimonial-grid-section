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
      <picture
        className={`size-[2.1rem] rounded-[100%] lg:size-[3rem] overflow-hidden ${
          outlineColor && outlineColor + " outline-2 "
        }`}
      >
        <img
          src={`/images/image-${img}.jpg`}
          alt={`${img} photo`}
          className="size-[2.1rem] lg:size-[3rem] "
        />
      </picture>
      <div className="flex flex-col">
        <h1
          className={"text-[.8rem] font-semibold lg:text-[1.2rem] " + userColor}
        >
          {name}
        </h1>
        <h2 className={"text-[.7rem] lg:text-[1.1rem] " + textColor}>
          {verified}
        </h2>
      </div>
    </header>
  );
}

export default CardHeader;
