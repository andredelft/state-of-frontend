import { Article } from "../components/article/Article";
import { Slide } from "../components/slide/Slide";
import image from "../assets/images/unsplash/lucas-kapla.jpg";
import { Minus, Plus } from "phosphor-react";
import { Button } from "../components/button/Button";
import "./container-queries.css";
import { useState } from "react";
import { WithLabel } from "../components/inputs/WithLabel";
import { Switch } from "../components/inputs/switch/Switch";
import clsx from "clsx";

type MockArticleProps = {
  container?: boolean;
  id?: string;
};

function MockArticle({ container, id }: MockArticleProps) {
  return (
    <Article
      id={id}
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
  const [enableCQ, setEnableCQ] = useState(false);
  const [counter, setCounter] = useState(1);

  function handleResetWidth() {
    const firstArticle = document.getElementById("first-article");
    if (firstArticle) {
      firstArticle.style.width = "";
    }
  }

  return (
    <Slide>
      <div
        className={clsx(counter !== 1 && "container-queries__article-wrapper")}
      >
        <MockArticle id="first-article" container={enableCQ} />
        {counter > 1 && <MockArticle container={enableCQ} />}
        {counter > 2 && <MockArticle container={enableCQ} />}
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
