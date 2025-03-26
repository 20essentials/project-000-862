export const Section = ({ color = 'transparent', children }) => {
  return (
    <section
      className='section section1 '
      style={{ backgroundColor: 'transparent' }}
    >
      {children}
    </section>
  );
};
