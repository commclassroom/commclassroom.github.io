import clsx from 'clsx';

import styles from './index.module.css';

import Button from '../../Button';

const Banner = () => {
  return (
    <section className={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <p>
          Check out our <span className='highlight'> upcoming events </span>
          and <span className='highlight'>win exciting prizes</span>!
        </p>
        <Button>Events</Button>
      </div>
    </section>
  );
};

export default Banner;
