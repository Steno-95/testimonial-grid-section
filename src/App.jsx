import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import CardQuote from "./components/CardQuote";
import CardText from "./components/CardText";
import Footer from "./ui/Footer";
const reviews = [
  {
    image: "daniel",
    username: "Daniel Clifford",
    verified: "Verified Graduate",
    header:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    description:
      "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
    bg: "bg-(--primary-dark)",
    hdColor: "text-(--white)",
    textColor: "text-(--card-1)",
    outColor: "outline-(--primary)",
    quote: true,
    gridPos: "sm:col-start-1 sm:col-end-3 lg:row-start-1",
  },
  {
    image: "jonathan",
    username: "Jonathan Walters",
    verified: "Verified Graduate",
    header: "The team was very supportive and kept me motivated",
    description:
      " “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
    bg: "bg-(--card-2)",
    hdColor: "text-(--white)",
    textColor: "text-(--card-1)",
  },
  {
    image: "jeanette",
    username: "Jeanette Harmon",
    verified: "Verified Graduate",
    header: "An overall wonderful and rewarding experience",
    description:
      "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
    bg: "bg-(--card-1)",
    hdColor: "text-(--card-2)",
    textColor: "text-(--text)",
    gridPos: "lg:col-start-1 lg:col-end-2",
  },
  {
    image: "patrick",
    username: "Patrick Abrams",
    verified: "Verified Graduate",
    header:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    description:
      "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.”",
    bg: "bg-(--card-3)",
    hdColor: "text-(--white)",
    textColor: "text-(--card-1)",
    outColor: "outline-(--primary-dark)",
    gridPos: "sm:col-start-1 sm:col-end-3 md:col-start-2 md:col-end-4",
  },
  {
    image: "kira",
    username: "Kira Whittle",
    verified: "Verified Graduate",
    header: " Such a life-changing experience. Highly recommended!",
    description:
      "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
    bg: "bg-(--card-1)",
    hdColor: "text-(--card-2)",
    textColor: "text-(--text)",
    gridPos:
      "sm:col-start-1 sm:col-end-3 md:col-end-4 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3",
  },
];

function App() {
  return (
    <main className="bg-(--main-bg) min-h-[100vh] py-15 flex flex-col gap-10">
      <div className=" flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:p-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 lg:grid-rows-2 lg:max-w-[80rem] mx-auto items-center justify-center">
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
      </div>
      <Footer />
    </main>
  );
}

export default App;
