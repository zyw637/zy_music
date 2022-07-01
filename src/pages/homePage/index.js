import React, { memo } from 'react';

import TopBanner from '@pages/homePage/topBanner';
import { MySection } from '@/components/ui'
import Language from '@/common/lang/language'

import PlayList from '@pages/homePage/playList'

export default memo(function HomePage() {
  return (
    <>
      <TopBanner />
      <MySection
        title={Language.cn("热门推荐").en("Recommended Playlists").getMessage()}
        more={{ moreText: Language.cn("查看更多").en("more").getMessage(), url: "Asd" }} >
        <PlayList />
      </MySection>
    </>
  )
})
