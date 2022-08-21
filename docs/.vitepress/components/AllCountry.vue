<template>
  <!-- <h1>{{ theme.footer.copyright }}</h1> -->
  <!-- <div v-for="i in items" :key="i"> -->
  <!-- <h1>{{ items.data.page }}</h1> -->
  <h1 v-if="items">{{ items.data }}</h1>
  <h1 v-else>Oh no 😢</h1>
  <!-- {{ items.status }} -->
  <!-- {{ items."last-modified" }} -->

  <!-- {{ i }} -->
  <!-- {{ items.data }} -->
  {{ items.data[0] }}
  <!-- {{ items.data[1] }} -->
  <!-- <p>Page Number: {{ items.data[0].page }}</p>
  <p>Total Pages: {{ i[0].pages }}</p>
  <p>How Many on Each Page: {{ i[0].per_page }}</p>
  <p>Total Countries: {{ i[0].total }}</p> -->
  <!-- <hr /> -->
  <!-- lenth of i {{ i.length }} -->

  <!-- </div> -->
</template>


<script>
// import data from "./data/CAN_Metadata.csv";
import axios from "axios";

// import { useData } from "vitepress";

export default {
  // const { theme } = useData();

  data() {
    return {
      items: null,
    };
  },
  methods: {},
  mounted() {
    const url = "https://api.worldbank.org/v2/country/all?format=json";
    const res = axios.get(url).then((res) => (this.items = res));
  },
};
</script>