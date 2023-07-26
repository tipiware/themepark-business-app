// files
import data from "../data/homeStories.json";
import Hero from "../components/Hero";
import StoryContainer from "../components/StoryContainer";

export default function Home() {
  // components
  const IntroCards = data.map((story) => (
    <StoryContainer key={story.id} story={story} />
  ));
  return (
    <main>
      <Hero ImgRoute="hero__home" />
      <section>{IntroCards}</section>
    </main>
  );
}
