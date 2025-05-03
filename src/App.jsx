import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import CardQuote from "./components/CardQuote";
import CardText from "./components/CardText";
import Footer from "./ui/Footer";
import { reviews } from "../data/data.json";
function App() {
  return (
    <div className="bg-(--main-bg) min-h-screen py-15 flex flex-col gap-10">
      <main className=" flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:p-5 md:grid-cols-3 xl:grid-cols-4 lg:gap-6 lg:grid-rows-fit lg:max-w-[80rem] mx-auto items-center justify-center">
        {reviews.map((review, i) => (
          <Card
            key={i}
            bg={review.bg}
            pos={review.gridPos}
            quote={review.quote}
          >
            <CardHeader
              img={review.image}
              name={review.username}
              verified={review.verified}
              textColor={review.textColor}
              userColor={review.hdColor}
              outlineColor={review.outColor}
            />
            <div className="flex flex-col gap-5">
              <CardText textColor={review.hdColor}>{review.header}</CardText>
              <CardQuote textColor={review.textColor}>
                {review.description}
              </CardQuote>
            </div>
          </Card>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
