<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import WhySection from "./components/WhySection.vue";
import ArchSection from "./components/ArchSection.vue";
import DesignSection from "./components/DesignSection.vue";
import InstallSection from "./components/InstallSection.vue";
import ChannelsSection from "./components/ChannelsSection.vue";
import UseCasesSection from "./components/UseCasesSection.vue";
import RoadmapSection from "./components/RoadmapSection.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <HeroSection />
  <main>
    <WhySection />
    <ArchSection />
    <DesignSection />
    <InstallSection />
    <ChannelsSection />
    <UseCasesSection />
    <RoadmapSection />
  </main>
  <AppFooter />
</template>
