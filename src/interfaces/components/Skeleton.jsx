export const Skeleton = ({ length }) => {
  return (
    <section className="skeleton-container">
      {Array.from({ length }).map((_, i) => (
        <div className="skeleton" key={i} />
      ))}
    </section>
  );
};
