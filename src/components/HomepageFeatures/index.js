import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        There is no need to pay attention to the development and operation and maintenance of
        the underlying infrastructure and service-oriented, and the AI ​​engine can be deployed, 
        upgraded, scaled, monitored and operated in an efficient, safe, autonomous and
        controllable manner
      </>
    ),
  },
  {
    title: 'Focus on AI Algorithm Engineer',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A Serverless, fully managed A.I. engine platform for A.I. algorithm engineers. 
        For more details, see<code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Stable and Reliable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Polishing of daily billion-level PV, cloud native architecture and SRE dual-wheel drive,
        system availability 99.99%
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
