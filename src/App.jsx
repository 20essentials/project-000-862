import { Layout, Typography } from 'antd';
import Data from './data/info.json';

const { Content } = Layout;
const { Title } = Typography;

export const App = () => {
  const bodyStyle = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    position: 'relative',
    backgroundColor: '#000',
    color: '#e9e9e9',
    fontFamily:
      "'NotoSans', Inter, Roboto, 'Helvetica Neue', 'Arial Nova', Arial, sans-serif"
  };

  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -2,
    width: '100%',
    height: '100vh',
    backgroundColor: '#000',
    backgroundImage:
      'radial-gradient(100% 50% at 50% 100%, rgba(255,165,0,0.5) 0%, transparent 50%, transparent 100%)',
    overflow: 'hidden'
  };

  const containerIndicatorStyle = {
    position: 'fixed',
    top: '50%',
    left: '2.5vmax',
    width: '2vmax',
    height: '12vmax',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5vmax'
  };

  const followerStyle = {
    width: '2vmax',
    height: '2vmax',
    backgroundColor: 'orange',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translateY(0vmax) scale(0.7)'
  };

  const circleStyle = {
    width: '2vmax',
    height: '2vmax',
    border: '0.1vmax solid #fff',
    borderRadius: '50%'
  };

  const sectionStyle = {
    height: '100vh',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    position: 'relative',
    paddingInline: '17vmax',
    display: 'flex',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: '5vmax',
    width: '25%',
    fontWeight: 200,
    lineHeight: 1.1
  };

  const paragraphContainerStyle = {
    width: '60%',
    marginLeft: 'auto',
    height: '76%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const paragraphStyle = {
    fontSize: '1.7vmax',
    width: '80%',
    textAlign: 'justify',
    marginBottom: '1vmax'
  };

  const imageStyle = {
    float: 'left',
    width: '23vmax',
    marginRight: '2vmax',
    shapeMargin: '2vmax',
    maskImage: 'linear-gradient(to bottom, black 90%, transparent)'
  };

  return (
    <Layout style={bodyStyle}>
      <Content>
        <div style={backgroundStyle}></div>
        <aside style={containerIndicatorStyle}>
          <article style={followerStyle}></article>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={circleStyle}></div>
          ))}
        </aside>
        {Data.map(({ title, paragraphs, srcImage }, ind) => (
          <section key={ind} style={sectionStyle}>
            <Title
              level={2}
              style={titleStyle}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <aside
              style={{
                ...paragraphContainerStyle,
                '--bg-flower': `url(${srcImage})`
              }}
            >
              <img
                src={srcImage}
                alt={title}
                style={{
                  ...imageStyle,
                  filter:
                    ind === 2
                      ? 'hue-rotate(180deg)'
                      : ind === 3
                      ? 'hue-rotate(310deg)'
                      : 'none'
                }}
              />
              {paragraphs.map((text, i) => (
                <p
                  key={i}
                  style={paragraphStyle}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </aside>
          </section>
        ))}
      </Content>
    </Layout>
  );
};
