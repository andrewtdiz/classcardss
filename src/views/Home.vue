<template>
  <div class="home flex flex-col relative">
    <NavBar />
    <div class="mt-16 flex h-full justify-center items-center relative" style="height: 60vh">
      <div class="absolute right-0 top-0 h-full w-1/3 bg-brand-400 m-4 rounded-lg"></div>
      <div class="h-full container flex flex-col justify-center lg:mt-0 lg:justify-around lg:flex-row items-start">
          <div class="lg:w-1/2 w-full justify-center h-full pb-6 flex flex-col items-center">
              <p class="text-gray-800 text-4xl md:text-5xl font-bold text-center lg:text-left leading-tight lg:mr-auto">A  lot more than <br> flashcards.</p>
              <p class="text-gray-800 text-2xl w-full font-normal mt-6 text-center lg:text-left leading-tight">ClassCards is built to provide structure, organization, and collaboration to your studying.</p>
              <div class="mt-8 flex w-full lg:justify-start justify-center">
                <button class="btn btn-started px-6 text-xl font-normal py-3 text-lg hover:bg-green-600" >
                  Get Started
                </button>
              </div>
          </div>
          <div class="flex flex-col justify-center h-full relative pointer-events-none items-center flex-1 z-10">
        <div class="absolute top-0 left-0 flex flex-col svg-shadow bg-white shadow-lg pointer-events-auto h-64 w-3/4 rounded-md z-20" style=" top: 50%; left: 50%;">
            <div class="flex w-full items-center p-1">
                <div class="w-3 h-3 bg-red-500 ml-1 mr-1 rounded-full">
                </div>
                <div class="w-3 h-3  mr-1 rounded-full" style="background: #fbbd35">
                </div>
                <div class="w-3 h-3 bg-green-500 mr-1 rounded-full">
                </div>
            </div>
            <div class="flex-1 pt-4 px-3 flex flex-col">
                <h1 class="my-2 text-xs text-left text-gray-600">Front</h1>            
                <h1 class="mb-4 text-left" v-html="'The {..} is the <b>powerhouse</b> of the cell'"></h1>            
                <h1 class="my-2 text-xs text-left text-gray-600">Back</h1>            
                <h1 class="mb-2 text-left">The <span class="text-brand-500">Mitochondria</span> is the powerhouse of the cell.</h1>          
            </div>
            <div class="pt-4 px-3 flex flex-col items-center">
            <div class="flex text-sm items-center py-2">
                <h1 class="mx-3 bg-brand-500 text-white text-md px-2 py-1 rounded">Hard</h1>
                <h1 class="mx-3 bg-orange-400 text-white text-md px-2 py-1 rounded">Medium</h1>
                <h1 class="mx-3 bg-green-500 text-white text-md px-2 py-1 rounded">Easy</h1>

            </div>
            </div>
        </div>

        <div class="absolute top-0 left-0 flex flex-col svg-shadow-2 bg-white shadow-lg pointer-events-auto h-64 w-3/4 rounded-md z-10" style=" top: 51%; left: 51%;">
            <div class="flex w-full items-center p-1">
                <div class="w-3 h-3 bg-red-500 ml-1 mr-1 rounded-full">
                </div>
                <div class="w-3 h-3  mr-1 rounded-full" style="background: #fbbd35">
                </div>
                <div class="w-3 h-3 bg-green-500 mr-1 rounded-full">
                </div>
            </div>
            <div class="flex-1 pt-4 px-3 flex flex-col">
                <h1 class="my-2 text-xs text-gray-600">Front</h1>            
                <h1 class="mb-4">{@html 'The {..} is the <b>powerhouse</b> of the cell'}</h1>            
                <h1 class="my-2 text-xs text-gray-600">Back</h1>            
                <h1 class="mb-2">The <span class="text-brand-500">Mitochondria</span> is the powerhouse of the cell.</h1>          
            </div>
            <div class="pt-4 px-3 flex flex-col items-center">
            <div class="flex text-sm items-center py-2">
                <!-- <h1 class="mx-3 bg-blue-500 text-white px-2 py-1 rounded">Hard</h1>
                <h1 class="mx-3 bg-orange-400 text-white px-2 py-1 rounded">Medium</h1>
                <h1 class="mx-3 bg-green-500 text-white px-2 py-1 rounded">Easy</h1> -->

            </div>
            </div>
          </div>
          <div class="absolute top-0 left-0 flex flex-col svg-shadow-3 bg-white shadow-lg pointer-events-auto h-64 w-3/4 rounded-md z-0" style=" top: 52%; left: 52%;">
              <div class="flex w-full items-center p-1">
                  <div class="w-3 h-3 bg-red-500 ml-1 mr-1 rounded-full">
                  </div>
                  <div class="w-3 h-3  mr-1 rounded-full" style="background: #fbbd35">
                  </div>
                  <div class="w-3 h-3 bg-green-500 mr-1 rounded-full">
                  </div>
              </div>
              <div class="flex-1 pt-4 px-3 flex flex-col">
                  <h1 class="my-2 text-xs text-gray-600">Front</h1>            
                  <h1 class="mb-4">{@html 'The {..} is the <b>powerhouse</b> of the cell'}</h1>            
                  <h1 class="my-2 text-xs text-gray-600">Back</h1>            
                  <h1 class="mb-2">The <span class="text-brand-500">Mitochondria</span> is the powerhouse of the cell.</h1>          
              </div>
              <div class="pt-4 px-3 flex flex-col items-center">
              <div class="flex text-sm items-center py-2">
                  <!-- <h1 class="mx-3 bg-blue-500 text-white px-2 py-1 rounded">Hard</h1>
                  <h1 class="mx-3 bg-orange-400 text-white px-2 py-1 rounded">Medium</h1>
                  <h1 class="mx-3 bg-green-500 text-white px-2 py-1 rounded">Easy</h1> -->

              </div>
              </div>
          </div>

      </div> 
      </div>
          
      <!-- <div class="w-full lg:px-12 flex justify-center items-center h-full mt-18 flex">
        <div class="container-lg flex lg:flex-row flex-col h-full">
            <p class="text-white text-5xl font-bold text-left leading-tight mr-auto">A whole lot more <br> than just flashcards.</p>
            <p class="text-white text-xl w-full font-normal mt-6 text-left leading-tight">ClassCards brings structure, organization, and collaboration to your studying.</p>
        </div>
      </div> -->
    </div>
    <section class="w-full flex flex-col items-center my-8 py-4">
      <div class="flex flex-col items-center">
        <p class="text-landing w-2/3">Join over 10,000 students who learn with ClassCards everyday</p>
      </div>
      <div class="container flex items-center justify-around mt-8">
        <img class="w-16 h-16 opacity-50 cursor-pointer hover:opacity-100" style="filter: grayscale(100%)" src="https://pbs.twimg.com/profile_images/912676696620359680/e-G5lqVs_400x400.jpg" alt="">
        <img class="w-auto hidden md:block h-12 opacity-50 cursor-pointer hover:opacity-100" src="https://image4.owler.com/logo/sketchy-group_owler_20190218_192837_original.jpg" style="filter: grayscale(100%)" alt="">
        <img class="w-auto hidden lg:block h-24 opacity-50 cursor-pointer hover:opacity-100" src="https://cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/000/457/original/khan-logo_clear-bg.jpg" style="filter: grayscale(100%)" alt="">
        <img class="w-auto hidden md:block h-8 opacity-50 cursor-pointer hover:opacity-100" src="https://www.uworld.com/assets/media/images/UWorld_logo.svg" style="filter: grayscale(100%)" alt="">
        <img class="w-16 h-16 opacity-50 cursor-pointer hover:opacity-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/McGraw-Hill_Education_wordmark.svg/1200px-McGraw-Hill_Education_wordmark.svg.png" style="filter: grayscale(100%)" alt="">
      </div>
    </section>

  <section class="text-gray-700 body-font">
  <div class="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="text-landing">A learning platform organized around you<span class="text-5xl text-brand-500">.</span> </h1>
      <p class="mt-8 mb-6 text-2xl leading-relaxed">With ClassCards, I'm able to work in a way that suites my needs and makes studying more efficient than ever before.</p>
      <div class="flex justify-center">
        <div class="h-16 w-16 bg-blue-500 rounded-full shadow mr-4"> </div>
        <div class="flex flex-col justify-center items-start">
          <p class="font-bold">Andrew DiZenzo</p>
          <div class="h-1 w-full"> </div>
          <p class="font-medium ">University of Miami, 3rd year Medical Student</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-700 body-font">
  <div class="container mx-auto flex px-5 py-32 md:flex-row-reverse flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="text-landing">Memorize faster and focus on what matters<span class="text-5xl text-brand-500">.</span> </h1>
      <p class="mt-8 mb-6 text-2xl leading-relaxed">Spaced repetition will totally changed the way teachers engage with students. Classroom time can now be dedicated to content mastery than first principles.</p>
    </div>
  </div>
</section>

<section class="text-gray-700 body-font">
  <div class="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="text-landing">Collaborate in one shared workspace<span class="text-5xl text-brand-500">.</span> </h1>
      <p class="mt-8 mb-6 text-2xl leading-relaxed">Share, chat, and study all on one platform with your friends and classmates.</p>
    </div>
  </div>
</section>

<!-- <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Raw Denim Heirloom Man Braid
      <br class="hidden sm:block">Selfies Wayfarers
    </h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Neptune</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section> -->

    
    <!-- <section class="text-gray-700 body-font">
      <div class="container py-12 mx-auto">
        <h1 class="text-5xl text-gray-800 font-bold leading-tight">Learning reimagined
        </h1>
        <p class="text-lg mt-4 text-gray-900 font-medium">Never before has content creation, </p>
        <div class="flex flex-wrap mt-16 -mx-4 -mb-10">
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <img src="../assets/edit-tools.svg" class="fill-current text-green-500 w-6" alt="">
            </div>
            <div class="flex-grow pl-6 flex flex-col">
              <h2 class="text-gray-900 text-lg title-font text-left font-medium mb-2">Create cards</h2>
              <p class="leading-relaxed text-base text-left">Create cards that test your knowledge and understanding. Insert images and PowerPoint slides to maximize efficiency with learning.</p>
              <a class="mt-3 mr-auto text-indigo-500 inline-flex items-center mr-auto cursor-pointer">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <img src="../assets/file.svg" class="fill-current text-green-500 w-7" alt="">

            </div>
            <div class="flex-grow pl-6 flex flex-col">
              <h2 class="text-gray-900 text-lg title-font text-left font-medium mb-2">Share and Collaborate</h2>
              <p class="leading-relaxed text-base text-left">Add your friends and classmates to your deck to sync all edits to members of the deck.</p>
              <a class="mt-3 mr-auto text-indigo-500 inline-flex items-center mr-auto cursor-pointer">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <img src="../assets/good.svg" class="fill-current text-green-500 w-7" alt="">

            </div>
            <div class="flex-grow pl-6 flex flex-col">
              <h2 class="text-gray-900 text-lg title-font text-left font-medium mb-2">Study Efficiently</h2>
              <p class="leading-relaxed text-base text-left">Using spaced repitition, cards are displayed at the most efficient interval to maximize retention.</p>
              <a class="mt-3 mr-auto text-indigo-500 inline-flex items-center mr-auto cursor-pointer">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> -->

<section class="text-gray-700 body-font" style="background: #f5f6f8">
  <div class="container mx-auto flex px-5 py-32 md:flex-row-reverse flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="text-landing">ClassCards for studying remotely</h1>
      <p class="mt-8 mb-6 text-2xl leading-relaxed">Study and collaborate with classmates anywhere, anytime. ClassCards even works in offline mode.</p>
    </div>
  </div>
</section>


    <section class="text-gray-700 body-font">
    <div class="container px-5 py-32 mx-auto">
      <div class="lg:w-3/4 flex flex-col sm:items-center items-start mx-auto">
        <h1 class="flex-grow sm:pr-16 text-5xl font-bold title-font text-gray-900 mb-6">Try ClassCards today, <span class="text-brand-500"> 100% free. </span></h1>
        <button class="btn btn-started px-6 text-xl font-normal py-3 text-lg hover:bg-green-600" >
          Get Started
        </button>
      </div>
    </div>
  </section>


  <footer class="text-gray-700 body-font" style="background: #f5f6f8">
  <div class="px-5 py-12 px-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
    <div class="w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="../assets/logo.png" class="h-8 w-auto object-cover " alt="">
        <span class="ml-3 text-xl">ClassCards</span>
      </a>
      <p class="mt-2 text-sm text-gray-600">All Rights Reserved © ClassCards, Inc.</p>
      <p class="mt-8 text-lg font-bold">Address:</p>
      <p class="mt-2 text-sm text-gray-600">4400 NW 19th Ave. Deerfield Beach, FL 33012</p>
      <div class="mt-4 flex items-center">
        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" class="h-10 w-auto object-cover " alt="">
        <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" class="h-7 w-auto object-cover " alt="">

      </div>

    </div>
    <div class="flex w-3/5 flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div v-for="(route, ind) in routes" :key="ind+100" class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font text-lg text-gray-700 font-bold text-sm mb-3">{{route.name}}</h2>
        <nav class="list-none mb-10 w-full">
          <li v-for="(route2, ind2) in route.vals" :key="ind2" class="my-4 w-full">
            <a class="text-gray-600 cursor-pointer w-full block text-base text-left common-trans hover:text-brand-500">{{route2.name}}</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="border-t border-gray-300">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 ClassCards, Inc
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

  </div>
</template>

<script>
import NavBar from '../components/navbar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  },
  computed: {
    routes() {
      return this.$store.getters.getRoutes
    },
  }
}
</script>

<style scoped>

.svg-shadow {
  -webkit-filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .25));
  filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .25));
  /* Similar syntax to box-shadow */
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
	0% {
		transform: translate(-50%, -50%);
	}
	50% {
		transform: translate(-50%, calc(-50% - 25px));

	}
	100% {
		transform: translate(-50%, -50%);
	}
}

.svg-shadow-2 {
  -webkit-filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .25));
  filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .25));
  /* Similar syntax to box-shadow */
  animation: float2 6s ease-in-out infinite;
}

@keyframes float2 {
	0% {
		transform: translate(-50%, -50%);
	}
	50% {
		transform: translate(-50%, calc(-50% - 20px));

	}
	100% {
		transform: translate(-50%, -50%);
	}
}

.svg-shadow-3 {
  -webkit-filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .25));
  filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .25));
  /* Similar syntax to box-shadow */
  animation: float3 6s ease-in-out infinite;
}

@keyframes float3 {
	0% {
		transform: translate(-50%, -50%);
	}
	50% {
		transform: translate(-50%, calc(-50% - 15px));

	}
	100% {
		transform: translate(-50%, -50%);
	}
}
</style>
