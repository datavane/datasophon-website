import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>极易部署</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        用户仅需几步即可完成初始化环境配置，可快速完成300个节点规模的大数据集群部署。
      </>
    ),
  },
  {
    title: <Translate>兼容开源生态</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        全面兼容开源生态，基于开放式的管理架构，已集成多种常用大数据组件，包括数据集成、数据存储、计算引擎、任务调度、权限管理等大数据处理的各个环节。
      </>
    ),
  },
  {
    title: <Translate>兼容复杂环境</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        极简的架构设计，使其极易适配各种复杂环境，支持arm和x86机器混合部署，支持常用的Linux生态操作系统。
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
