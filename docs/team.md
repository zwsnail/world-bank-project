---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/46317516?v=4',
    name: 'Zhang Wei',
    title: 'Mentee',
    links: [
      { icon: 'github', link: 'https://github.com/zwsnail' },
      { icon: 'twitter', link: 'https://twitter.com/zhangweicoco' }
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/46317516?v=4',
    name: 'Leo',
    title: 'Mentor',
    links: [
      { icon: 'github', link: 'https://github.com/zwsnail' },
      { icon: 'twitter', link: 'https://twitter.com/zhangweicoco' }
    ]
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of World Bank Project is built by:
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
