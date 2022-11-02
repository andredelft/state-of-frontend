import { Article } from "../components/article/Article";
import { Slide } from "../components/slide/Slide";
import image from "../assets/images/unsplash/lucas-kapla.jpg";

type MockArticleProps = {
  container?: boolean;
};

function MockArticle({ container }: MockArticleProps) {
  return (
    <Article
      container={container}
      resizable
      image={image}
      tags={["CSS"]}
      title="Container responsive components with container queries"
      description={
        "By creating reusable intrinsically responsive primatives like the sidebar and the stack, we can create container sensitive components, in a fraction of the time."
      }
      date={new Date()}
    />
  );
}

export function ContainerQueries() {
  return (
    <Slide>
      <MockArticle container />
    </Slide>
  );
}
