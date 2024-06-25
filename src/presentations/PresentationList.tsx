import { Slide } from "components/slide/Slide";

type PresentationListProps = {
  presentationRoutes: { path: string; label?: string }[];
};

export function PresentationList({
  presentationRoutes,
}: PresentationListProps) {
  return (
    <Slide>
      <ul>
        {presentationRoutes.map(({ path, label }) => (
          <li key={path}>
            <a href={path}>{label || path}</a>
          </li>
        ))}
      </ul>
    </Slide>
  );
}
