import { GithubLogo } from "phosphor-react";
import { TitleSlide } from "../components/slide/TitleSlide";
import "./conclusion.css";

export function Conclusion() {
  return (
    <TitleSlide
      title="Vragen?"
      description={
        <span className="conclusion__source">
          <GithubLogo className="conclusion__source--logo" />
          <a href="https://github.com/andredelft/state-of-css">
            andredelft/state-of-css
          </a>
        </span>
      }
    />
  );
}
