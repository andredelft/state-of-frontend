import { Article } from "components/article/Article";
import { Slide } from "components/slide/Slide";
import image1 from "assets/images/unsplash/lucas-kapla.jpg";
import image2 from "assets/images/unsplash/aperture-vintage.jpg";
import image3 from "assets/images/unsplash/anton-repponen.jpg";
import { Minus, Plus } from "phosphor-react";
import { Button } from "components/button/Button";
import "./container-queries.css";
import { useState } from "react";
import { WithLabel } from "components/inputs/WithLabel";
import { Switch } from "components/inputs/switch/Switch";
import clsx from "clsx";

type MockArticleProps = {
  container?: boolean;
};

function FirstArticle({ container }: MockArticleProps) {
  return (
    <Article
      id="first-article"
      container={container}
      resizable
      image={image1}
      tags={["CSS"]}
      title="Container responsive components with container queries"
      description={
        "By creating reusable intrinsically responsive primatives like the sidebar and the stack, we can create container sensitive components, in a fraction of the time."
      }
      date={"2-11-2022"}
    />
  );
}

function SecondArticle({ container }: MockArticleProps) {
  return (
    <Article
      container={container}
      image={image2}
      tags={["Lorem ipsum"]}
      title="Donec lacinia consequat libero, vulputate viverra dui tempus non"
      description={
        "Donec lacinia consequat libero, vulputate viverra dui tempus non. Praesent vel turpis ut tellus viverra euismod vitae ac est. Ut pharetra luctus nisi, at viverra."
      }
      date={"1-11-2022"}
    />
  );
}

function ThirdArticle({ container }: MockArticleProps) {
  return (
    <Article
      container={container}
      image={image3}
      tags={["Cicero"]}
      title="Pellentesque euismod feugiat pellentesque"
      description={
        "Pellentesque euismod feugiat pellentesque. Sed hendrerit pulvinar purus ac hendrerit. Morbi vehicula iaculis pulvinar. Sed eu sem non diam molestie aliquet. Fusce id tincidunt neque."
      }
      date={"31-10-2022"}
    />
  );
}

export function ContainerQueries() {
  const [enableCQ, setEnableCQ] = useState(false);
  const [counter, setCounter] = useState(1);

  function handleResetWidth() {
    const firstArticle = document.getElementById("first-article");
    if (firstArticle) {
      firstArticle.style.width = "";
    }
  }

  return (
    <Slide
      warning="Your browser does not yet support container queries. Try another browser!"
      id="container-queries"
    >
      <div
        className={clsx(counter !== 1 && "container-queries__article-wrapper")}
      >
        <FirstArticle container={enableCQ} />
        {counter > 1 && <SecondArticle container={enableCQ} />}
        {counter > 2 && <ThirdArticle container={enableCQ} />}
      </div>
      <div className="container-queries__controls">
        <Button onClick={handleResetWidth}>Reset width</Button>
        <WithLabel label="Container queries">
          <Switch checked={enableCQ} onChange={setEnableCQ} />
        </WithLabel>
        <WithLabel label={`Number of articles: ${counter}`}>
          <Button.Group small>
            <Button
              rounded
              onClick={() => setCounter(counter - 1)}
              disabled={counter <= 1}
            >
              <Minus />
            </Button>
            <Button
              rounded
              onClick={() => setCounter(counter + 1)}
              disabled={counter >= 3}
            >
              <Plus />
            </Button>
          </Button.Group>
        </WithLabel>
      </div>
    </Slide>
  );
}
