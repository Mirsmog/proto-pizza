import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    className='pizza-block'
    width={280}
    height={465}
    viewBox='0 0 280 465'
    backgroundColor='#eeeeee'
    foregroundColor='#e2e2e2'
  >
    <circle cx='140' cy='120' r='120' />
    <rect x='15' y='270' rx='4' ry='4' width='250' height='17' />
    <rect x='0' y='313' rx='8' ry='8' width='280' height='88' />
    <rect x='0' y='425' rx='4' ry='4' width='92' height='30' />
    <rect x='110' y='425' rx='4' ry='4' width='170' height='30' />
  </ContentLoader>
);

export default Skeleton;
