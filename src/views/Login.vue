<template>
  <div class="w-screen h-screen bg-brand-500 flex justify-center items-center">
      <div :class="animDelay ? 'opacity-100' : ['opacity-0', 'mt-16']" class="common-trans bg-white px-12 py-12 rounded-md flex flex-col shadow-md" style="width: 34rem;">
        <h1 class="font-bold text-2xl">Login to ClassCards</h1>
        <div class="flex mx-auto items-baseline">
            <h1 class="text-sm">Don't have an account? </h1>
            <button class="cursor-pointer ml-1 text-sm hover:underline text-brand-500">Sign up</button> 
        </div>
        <div class="mt-8 w-full flex flex-col">
            <h1 class="text-left text-sm text-gray-600 mb-1 font-medium">Email:</h1>
            <input class="w-full boxborder-me inpt" type="text">
        </div>
        <div class="mt-3 w-full flex flex-col">
            <h1 class="text-left text-sm text-gray-600 mb-1 font-medium">Password:</h1>
            <input class="border w-full boxborder-me inpt" type="text">
        </div>
        <div class="w-full my-6 flex flex items-center">
            <div @click="remember = !remember" :class="remember ? ['bg-brand-500', 'border-brand-500'] :['border-gray-400']" class="border cursor-pointer h-5 w-5 rounded mr-3">
                
                <svg class="h-full fill-current text-white w-auto" enable-background="new 0 0 515.556 515.556" viewBox="0 0 515.556 515.556" xmlns="http://www.w3.org/2000/svg"><path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"/></svg>
            </div>
            <h1 @click="remember = !remember" class="text-left text-sm cursor-pointer" style="user-select: none !important" :class="remember ? 'text-gray-800' : 'text-gray-600'">Remember me</h1>
            <h1 class="text-right text-xs ml-auto text-brand-500 cursor-pointer hover:underline ">Forgot Password?</h1>

        </div>
        <router-link to="/dashboard" class="w-full">
            <button class="w-full btn btn-blue">
                Sign in
            </button>
        </router-link>
        

        <div style="height: 1px;" class="bg-gray-200 my-8"></div>
        <div class="border flex items-center justify-center py-2 border-gray-300 hover:border-brand-500 text-gray-700 hover:text-gray-800 cursor-pointer rounded w-full">
            
            
            
            <svg class="w-6 h-6 mr-2" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
            <h1 class="text-sm cursor-pointer ">Sign in with Google </h1>
            
        </div>

        <div class="border flex items-center justify-center py-2  mt-2 border-gray-300 hover:border-brand-500 text-gray-700 hover:text-gray-800 cursor-pointer rounded w-full">
            
            
            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="88.428 12.828 107.543 207.085"><path d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z" fill="#1778F2"/></svg>
            <h1 class="text-sm cursor-pointer ">Sign in with Facebook </h1>
            
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            animDelay: false,
            remember: false,
        }
    },
    mounted() {
        this.animDelay = false
        setTimeout(() => {
            this.animDelay = true
        }, 200)
    },
}
</script>

<style >
.common-trans {
    transition: all 0.3s ease;
}

.boxborder-me:focus {
  box-shadow: 0 0 0 1px #A5D3FA;
}
</style>