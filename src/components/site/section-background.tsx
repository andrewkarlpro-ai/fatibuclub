/* SectionBackground — renders a photo as a true CSS background image
   behind the section content. The photo is visible through a light
   semi-transparent white overlay so text stays readable on a bright surface. */

export function SectionBackground({
  src,
  overlay = 0.7,
  className,
}: {
  src: string;
  overlay?: number;
  className?: string;
}) {
  return (
    <>
      {/* Background photo layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Light overlay — keeps text on a bright, readable surface */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: `rgba(251, 253, 251, ${overlay})` }}
      />
    </>
  );
}
