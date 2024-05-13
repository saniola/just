<template>
  <header :class="$style.header">
    <div :class="$style.content">
      <div :class="$style.logo">
        <router-link to="/">
          <img src="../assets/images/logo-min.svg" alt="Logo" />
        </router-link>
      </div>

      <nav :class="$style.nav">
        <ul
          v-if="!isMobile"
          :class="$style.navList">
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>

        <button :class="$style.menuToggle" @click="toggleMenu" v-else>
          <img src="../assets/images/hamburger.svg" alt="Menu" />
        </button>
      </nav>

      <div :class="$style.controls">
        <button @click="toggleTheme">
          <img :src="currentThemeIcon" alt="Toggle Theme" />
        </button>
        <dropdown-languages :languages="['EN', 'UA']" />
      </div>
    </div>

    <div :class="$style.mobileMenu" v-if="menuOpen && isMobile">
      <ul>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';

const menuOpen = ref(false);
const isMobile = computed(() => window.innerWidth < 768);
const currentThemeIcon = ref("@/assets/light-theme-icon.svg");

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const toggleTheme = () => {
  // Тут ваш код для зміни теми
};
</script>

<style module>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-background);
}

.content {
  width: 100%;
  max-width: 1200px; /* стандартна максимальна ширина */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  flex: 1;
}

.nav {
  flex: 3;
  display: flex;
  justify-content: center;
}

.controls {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.menuToggle {
  display: none;
}

.mobileMenu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .menuToggle {
    display: block;
  }
}
</style>
