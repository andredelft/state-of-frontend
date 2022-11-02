import clsx from "clsx";
import { ReactNode } from "react";
import "./article.css";

export type ArticleProps = {
  image: string;
  alt?: string;
  tags: string[];
  title: string;
  description: ReactNode;
  date: Date;
  resizable?: boolean;
  container?: boolean;
};

export function Article({
  image,
  alt,
  tags,
  title,
  description,
  date,
  resizable,
  container,
}: ArticleProps) {
  return (
    <div
      className={clsx(
        "article",
        resizable && "article__resizable",
        container ? "article__container-query" : "article__media-query"
      )}
    >
      <div className="article__content-wrapper">
        <img
          alt={alt}
          className="article__cover-image"
          src={image}
          width={400}
          height={400}
        />
        <div className="article__content">
          <div className="article__tags">
            {tags.map((tag, i) => (
              <div key={i}>{tag}</div>
            ))}
          </div>
          <h1 className="article__title">{title}</h1>
          <p className="article__description">{description}</p>
          <div className="article__date">{date.toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
}
