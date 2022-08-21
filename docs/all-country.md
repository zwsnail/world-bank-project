---
layout: doc
---
# I want to show!!!!!

<script setup>
import AllCountry from './.vitepress/components/AllCountry.vue'
import { useData } from 'vitepress'
const { page } = useData()
</script>

<pre>{{ page }}</pre>
{{1+1}}
<span v-for="i in 3">{{ i }}</span>

<AllCountry />



