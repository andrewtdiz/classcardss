<template>
    <div class="fixed top-0 z-10 bg-white w-full flex items-center md:items-baseline justify-center shadow ">
      <div class="container flex items-center bg-white  md:items-baseline justify-between py-3 lg:py-1">
        <div class="flex items-baseline bg-white ">
            <div class="flex items-center pl-8 ml-3 lg:ml-0 relative cursor-pointer">
            <img src="../assets/logo.svg" class="absolute left-0 w-8 h-auto" alt="">
            <h1 class="text-2xl text-gray-900 font-bold tracking-tight">ClassCards</h1>
            </div>
            <div class="lg:flex items-baseline px-6 hidden">
                <NavLink :title="'Features'" :dropdown="['Cards', 'Decks', 'Study Sessions', 'Groups']"/>
                <NavLink :title="'Guides'"  :dropdown="['Making Cards', 'Studying', 'Interface', 'Settings & Customization', 'Teacher\'s Corner']"/>
                <NavLink :title="'Company'"  :dropdown="['About Us', 'Careers', 'Our Team', 'Press', 'Legal']"/>
                <NavLink :title="'About'" :link="'/about'"/>
            </div>
        </div>
        <div class="hidden md:flex items-baseline justify-center">
            <NavLink :title="'Log In'" class="mr-6 lg:mr-12" :link="'/login'"/>
            <NavLink :title="'Sign Up'" :link="'/signup'" :isbutton="true"/>
        </div>
        <div class="block md:hidden flex items-baseline cursor-pointer py-2 mr-6">
            <font-awesome-icon
                :icon="['fas', 'bars']"
                size="2x"
            />
        </div>
        </div>
    </div>
</template>

<script>
import NavLink from './navlink.vue'

export default {
  name: 'NavBar',
  components: {
    NavLink
  }
}
</script>
