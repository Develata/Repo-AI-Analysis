---
title: RSS 订阅
---

<script setup lang="ts">
import { data as feeds } from './rss.data.mts';
</script>

这里列出当前 Repo-AI-Analysis 可用的订阅源。RSS 保留最新日期的 20 篇 repo analysis。

<ul>
  <li v-for="feed in feeds" :key="feed.url">
    <a :href="feed.url">{{ feed.title }}</a>
    <p>{{ feed.description }}</p>
  </li>
</ul>
