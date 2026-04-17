<template>
  <nav class="headernav">
    <ul class="headernav__links title-16px-regular">
      <li v-for="(link, index) in links" :key="index" :to="link.path">
        {{ link.title }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      links: [
        {
          path: "/",
          title: "Home",
        },
        {
          path: "/contact",
          title: "Contact",
        },
        {
          path: "/about",
          title: "About",
        },
      ],
    };
  },
};
</script>

<style scoped>
.headernav__links {
  display: flex;
  align-items: center;
  gap: 40px; /* Relatively: 540 - (444 + 48) */
  list-style: none;

  white-space: nowrap;
  margin-left: 60px; /* TODO: figma design deviation (191px) */
  margin-right: 60px; /* TODO: check whether this is correct */
}

.headernav__links a {
  text-decoration: none;
  color: var(--color-black);
}

.headernav__links a:visited {
  color: var(--color-black);
}

.headernav__links a.router-link-exact-active {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 2px;
}
</style>
