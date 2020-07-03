<template>
  <div class="home flex flex-col relative">
    <NavBar />
    <div class="mt-16 flex h-full justify-center items-center relative" style="height: 60vh">
      <div class="absolute right-0 top-0 h-full w-1/3 bg-brand-400 m-4 rounded-lg"></div>
      <div class="h-full container flex flex-col justify-center lg:mt-0 lg:justify-around lg:flex-row items-start">
          <div class="lg:w-1/2 w-full justify-center h-full pb-6 flex flex-col items-center">
              <p class="text-gray-800 text-4xl md:text-5xl font-bold text-center lg:text-left leading-tight lg:mr-auto">A  lot more than <br> flashcards.</p>
              <p class="text-gray-800 text-xl w-full font-normal mt-6 text-center lg:text-left leading-tight">ClassCards is built to provide structure, organization, and collaboration to your studying.</p>
              <div class="mt-6 flex w-full lg:justify-start justify-center">
                <button class="btn btn-blue text-lg hover:bg-blue-600" >
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
    <section class="w-full flex flex-col items-center my-8">
      <div class="flex flex-col items-center">
        <p class="text-5xl text-gray-800 font-bold">Trusted by educators across the world</p>
        <p class="text-lg mt-4 text-gray-900 font-medium">From elementary school to graduate-level education, ClassCards is used by hundreds <br> of companies and educators</p>
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
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </section>
    <section class="text-gray-700 body-font">
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
    </section>
    <div class="h-screen bg-white">
      <h1></h1>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/navbar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
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
