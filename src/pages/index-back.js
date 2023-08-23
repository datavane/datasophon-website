import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/current/概览">
             快速开始⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function VideoContainer() {
  return (
    <div className="container text--center margin-bottom--xl">
      <div className="row">
        <div className="col">
          <h2>
           
          </h2>
          {/* <div className={styles.ytVideo}>
          <iframe src="https://player.bilibili.com/player.html?aid=343342962&bvid=BV1j94y1978W&cid=771685383&page=1&high_quality=1" 
          scrolling="no" 
          border="0" 
          frameborder="no" 
          width="762"
          height="462"
          framespacing="0"
           allowfullscreen="true">
             </iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <VideoContainer />
      </main>
    </Layout>
  );
}
