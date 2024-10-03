import * as React from 'react'
import Giscus from '@giscus/react';

import styles from './styles.module.css'

export const PageFooter: React.FC<{
  isBlogPost: boolean
}> = ({ isBlogPost }) => {
  // only display comments and page actions on blog post pages
  if (isBlogPost) {
    return (
      <div className={styles.comments}>
        <Giscus
          id="comments"
          repo="kiwookkim12/develog"
          repoId="R_kgDOMrNn5w"
          category="Comment"
          categoryId="DIC_kwDOMrNn584CjAAz"
          mapping="title"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="preferred_color_scheme"
          lang="ko"
          loading="lazy"
        />
      </div>
    );
  }

  return null
}
