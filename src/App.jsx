import { Section } from './components/Section';
import Data from './data/info.json';

export const App = () => {
  return (
    <>
      <div className='background'></div>
      <aside className='container-indicator'>
        <article className='follower'></article>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
      </aside>
      {Data.map(({ title, paragraphs, srcImage }, ind) => {
        return (
          <Section key={ind}>
            <h2
              className='title content'
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <aside
              className='container-paraghaps content'
              style={{ '--bg-flower': `url(${srcImage})` }}
            >
              <img
                src={srcImage}
                alt={title}
                className={`image ${ind === 2 ? 'third' : ''} ${
                  ind === 3 ? 'fourth' : ''
                }`}
              />
              {paragraphs.map((text, ind) => (
                <p key={ind} dangerouslySetInnerHTML={{ __html: text }} />
              ))}
            </aside>
          </Section>
        );
      })}
    </>
  );
};
