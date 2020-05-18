<template>
  <div class="flex flex-col h-screen" >
    <!-- <div class="flex justify-center items-stretch my-2" style="padding-bottom: 2px;">
      <div class="flex items-center rounded" >
        <input @keydown.enter="sendCard" ref="inp" style="margin: 2px;" :class="inputText!='' ? '' : 'shadow-inner'" v-model="inputText" 
        class="inputborder text-md h-full px-2 py-2 border focus:border-blue-500 rounded hover:border-gray-400 border-gray-300 bg-white appearance-none focus:outline-none" @focus="isFocused" type="text">
      </div>
      <button @click="sendCard" class="inputborder cursor-pointer px-4 focus:outline-none py-2 text-sm ml-4 bg-white border focus:border-blue-500 appearance-none rounded-md border-gray-300 hover:border-gray-400">Submit</button>
    </div> -->
    <div class="w-full h-full flex justify-center px-6 pt-12 mt-16" style="background: #e3e6ed">
        <div class="absolute top-0 left-0 bg-white w-full h-16">
          <div class="flex-1 flex items-end h-full pl-16 rotato" :class="!sidebar ? 'ml-14' : 'ml-96'">
            <div class="cursor-pointer rounded hover:bg-gray-300 mb-1">
              <p class=" text-xl text-gray-800 px-4 py-1">Zanki Step 1</p>
            </div>
            <div class="ml-16 flex items-center justify-center rounded-t cursor-pointer" :class="mode=='list' ? ['text-gray-700', 'bg-gray-200','shadow-inner'] : ['text-gray-500', 'hover:text-gray-700', 'hover:bg-gray-200']">
              
              
            <svg class="fill-current ml-3 mr-1 my-2 w-6 h-6" x="0px" y="0px" 
              viewBox="0 0 512 512" style="enable-background:new 0 0 512 512; transform: translateY(-2px)" xml:space="preserve">
              <g>
                <g>
                  <path d="M251.328,196.704c-6.24-6.24-16.384-6.272-22.656-0.032L176,249.376l-20.672-20.704c-6.24-6.24-16.384-6.24-22.624,0
                    s-6.24,16.384,0,22.624l32,32c3.104,3.136,7.2,4.704,11.296,4.704s8.192-1.568,11.328-4.672l64-64
                    C257.568,213.088,257.568,202.944,251.328,196.704z"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M251.328,324.704c-6.24-6.24-16.384-6.272-22.656-0.032L176,377.376l-20.672-20.672c-6.24-6.24-16.384-6.24-22.624,0
                    s-6.24,16.384,0,22.624l32,32c3.104,3.104,7.2,4.672,11.296,4.672s8.192-1.568,11.328-4.672l64-64
                    C257.568,341.088,257.568,330.944,251.328,324.704z"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M368,224h-64c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16C384,231.168,376.832,224,368,224
                    z"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M368,352h-64c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16C384,359.168,376.832,352,368,352
                    z"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M416,64h-64V48c0-8.832-7.168-16-16-16h-34.72C294.656,13.376,276.864,0,256,0s-38.656,13.376-45.28,32H176
                    c-8.832,0-16,7.168-16,16v16H96c-17.632,0-32,14.368-32,32v384c0,17.632,14.368,32,32,32h320c17.632,0,32-14.368,32-32V96
                    C448,78.368,433.632,64,416,64z M192,64h32c8.832,0,16-7.168,16-16c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16
                    c0,8.832,7.168,16,16,16h32v32H192V64z M416,480H96V96h64v16c0,8.832,7.168,16,16,16h160c8.832,0,16-7.168,16-16V96h64V480z"/>
                </g>
              </g>
            </svg>

              <p class="text-md font-normal px-3" :class="mode=='list' ? 'text-gray-800' : ''">List</p>

            </div>
            <div class="flex items-center justify-center rounded-t text-gray-500 hover:text-gray-600 cursor-pointer" :class="mode=='cards' ? ['text-gray-700', 'bg-gray-200','shadow-inner'] : ['text-gray-500', 'hover:text-gray-700', 'hover:bg-gray-200']">
              <svg class="fill-current ml-3 mr-1 my-2 w-6 h-6" x="0px" y="0px"
                viewBox="0 0 26.001 26.001" style="enable-background:new 0 0 26.001 26.001;" xml:space="preserve">
                <g>
                  <path d="M25.911,17.597c0.229,0.503,0.007,1.096-0.496,1.324l-11,5c-0.131,0.06-0.272,0.09-0.414,0.09
                    c-0.099,0-0.198-0.015-0.294-0.044l-13-4c-0.528-0.163-0.824-0.723-0.662-1.25c0.162-0.528,0.723-0.827,1.25-0.662l12.638,3.889
                    l10.654-4.843C25.095,16.868,25.684,17.096,25.911,17.597z M13.933,17.944L1.295,14.055c-0.527-0.165-1.087,0.134-1.25,0.662
                    c-0.163,0.527,0.134,1.087,0.662,1.25l13,4c0.096,0.029,0.195,0.044,0.294,0.044c0.142,0,0.283-0.03,0.414-0.09l11-5
                    c0.503-0.229,0.725-0.821,0.496-1.324c-0.228-0.501-0.816-0.726-1.324-0.496L13.933,17.944z M0.002,11.061
                    c-0.021-0.42,0.223-0.808,0.61-0.972l7.301-3.077C9.35,6.406,10.034,5.65,10.034,2.99c0-0.307,0.141-0.598,0.383-0.787
                    c0.242-0.19,0.557-0.257,0.856-0.184l12.939,3.188c0.446,0.11,0.761,0.511,0.761,0.971V6.33c0.001,2.958,0.002,4.911-3.621,6.438
                    c-2.425,1.022-6.88,3.125-6.924,3.147c-0.134,0.064-0.281,0.096-0.427,0.096c-0.099,0-0.198-0.015-0.294-0.044l-13-4
                    C0.305,11.843,0.023,11.481,0.002,11.061z M3.924,10.864l10,3.078c1.112-0.523,4.562-2.136,6.65-3.016
                    c2.211-0.932,2.385-1.649,2.397-3.964l-10.99-2.709c-0.193,2.052-0.971,3.624-3.29,4.602L3.924,10.864z"/>
                </g>
              </svg>

              <p class="text-md font-normal px-3" :class="mode=='cards' ? 'text-gray-800' : ''">Cards</p>

            </div>

            <div class="flex items-center justify-center rounded-t text-gray-500 hover:text-gray-600 cursor-pointer" :class="mode=='chat' ? ['text-gray-700', 'bg-gray-200','shadow-inner'] : ['text-gray-500', 'hover:text-gray-700', 'hover:bg-gray-200']">
              
              <svg class="fill-current ml-3 mr-1 my-2 w-6 h-6" x="0px" y="0px"
                width="356.484px" height="356.484px" viewBox="0 0 356.484 356.484" style="enable-background:new 0 0 356.484 356.484;"
                xml:space="preserve">
              <g>
                <g>
                  <path d="M293.984,7.23H62.5C28.037,7.23,0,35.268,0,69.731v142.78c0,34.463,28.037,62.5,62.5,62.5l147.443,0.001l70.581,70.58
                    c2.392,2.393,5.588,3.662,8.842,3.662c1.61,0,3.234-0.312,4.78-0.953c4.671-1.934,7.717-6.49,7.717-11.547v-62.237
                    c30.759-3.885,54.621-30.211,54.621-62.006V69.731C356.484,35.268,328.447,7.23,293.984,7.23z M331.484,212.512
                    c0,20.678-16.822,37.5-37.5,37.5h-4.621c-6.903,0-12.5,5.598-12.5,12.5v44.064l-52.903-52.903
                    c-2.344-2.345-5.522-3.661-8.839-3.661H62.5c-20.678,0-37.5-16.822-37.5-37.5V69.732c0-20.678,16.822-37.5,37.5-37.5h231.484
                    c20.678,0,37.5,16.822,37.5,37.5V212.512z"/>
                  <path d="M270.242,95.743h-184c-6.903,0-12.5,5.596-12.5,12.5c0,6.903,5.597,12.5,12.5,12.5h184c6.903,0,12.5-5.597,12.5-12.5
                    C282.742,101.339,277.146,95.743,270.242,95.743z"/>
                  <path d="M270.242,165.743h-184c-6.903,0-12.5,5.596-12.5,12.5s5.597,12.5,12.5,12.5h184c6.903,0,12.5-5.597,12.5-12.5
                    S277.146,165.743,270.242,165.743z"/>
                </g>
              </g>
              </svg>
              <p class="text-md font-normal px-3" :class="mode=='chat' ? 'text-gray-800' : ''">Chat</p>
            </div>
            <div class="flex items-center justify-center rounded-t text-gray-500 hover:text-gray-600 cursor-pointer" :class="mode=='chat' ? ['text-gray-700', 'bg-gray-200','shadow-inner'] : ['text-gray-500', 'hover:text-gray-700', 'hover:bg-gray-200']">
              <svg class="fill-current ml-3 mr-1 my-2 w-6 h-6" x="0px" y="0px"
            viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 477.867 477.867;" xml:space="preserve">
                <g>
                  <g>
                    <path d="M421.649,90.317L336.316,4.983c-1.589-1.593-3.481-2.852-5.564-3.703c-2.059-0.841-4.261-1.276-6.485-1.28H102.4
                      C74.123,0,51.2,22.923,51.2,51.2v375.467c0,28.277,22.923,51.2,51.2,51.2h273.067c28.277,0,51.2-22.923,51.2-51.2V102.4
                      C426.643,97.87,424.841,93.531,421.649,90.317z M341.333,58.266l27.068,27.068h-27.068V58.266z M392.533,426.667
                      c0,9.426-7.641,17.067-17.067,17.067H102.4c-9.426,0-17.067-7.641-17.067-17.067V51.2c0-9.426,7.641-17.067,17.067-17.067h204.8
                      V102.4c0,9.426,7.641,17.067,17.067,17.067h68.267V426.667z"/>
                  </g>
                </g>
              </svg>
              <p class="text-md font-normal px-3" :class="mode=='docs' ? 'text-gray-800' : ''">
                Docs
              </p>
            </div>

            <div class="flex items-center justify-center rounded-t text-gray-500 hover:text-gray-600 cursor-pointer"
            :class="mode=='chat' ? ['text-gray-700', 'bg-gray-200','shadow-inner'] : ['text-gray-500', 'hover:text-gray-700', 'hover:bg-gray-200']">
              <svg class="fill-current ml-3 mr-1 my-2 w-6 h-6" x="0px" y="0px"
                viewBox="0 0 478.075 478.075" style="enable-background:new 0 0 478.075 478.075; transform: translateY(1px)" xml:space="preserve">
              <g>
                <g>
                  <path d="M454.688,22.9h-196.3v-3c0-11-9-19.9-19.9-19.9s-19.9,9-19.9,19.9v3h-195.3c-11,0-19.9,9-19.9,19.9v276.9
                    c0,11,9,19.9,19.9,19.9h181.2l-59.7,109.2c-5,9-2,21.9,8,26.9c9,5,21.9,2,26.9-8l59.8-109.3l59.8,109.3c5,10,16.9,13,26.9,8
                    s13-16.9,8-26.9l-59.7-109.2h179.3c12,0,20.9-9,20.9-19.9V42.9C474.588,31.9,465.588,22.9,454.688,22.9z M434.788,299.9h-391.6
                    V62.8h391.5v237.1H434.788z"/>
                </g>
              </g>
              </svg>
              <p class="text-md font-normal px-3" :class="mode=='slides' ? 'text-gray-800' : ''">
                Slides
              </p>
            </div>

          


          </div>
        </div>
        <div class="absolute top-0 left-0 bg-blue-900 select-none overflow-x-hidden flex flex-col items-start rotato h-full z-10 w-16" > 
            <div class="flex justify-center py-4 w-full hover:bg-blue-800 cursor-pointer">
              <div class="h-8 w-8 flex justify-center items-center bg-green-500 rounded">
                <p class="text-white"> Z </p>
              </div>
            </div>
            <div class="flex justify-center w-full hover:bg-blue-800 cursor-pointer">
              
            <svg class="fill-current text-blue-100 py-4 w-7"  viewBox="-43 0 512 512" >
              <path d="m213.332031 512c-44.117187 0-80-35.882812-80-80 0-8.832031 7.167969-16 16-16s16 7.167969 16 16c0 26.476562 21.527344 48 48 48 26.476563 0 48-21.523438 48-48 0-8.832031 7.167969-16 16-16s16 7.167969 16 16c0 44.117188-35.882812 80-80 80zm0 0"/><path d="m389.332031 448h-352c-20.585937 0-37.332031-16.746094-37.332031-37.332031 0-10.925781 4.757812-21.269531 13.054688-28.375 32.449218-27.414063 50.945312-67.261719 50.945312-109.480469v-59.480469c0-82.34375 66.988281-149.332031 149.332031-149.332031 82.347657 0 149.335938 66.988281 149.335938 149.332031v59.480469c0 42.21875 18.496093 82.066406 50.730469 109.332031 8.511718 7.253907 13.269531 17.597657 13.269531 28.523438 0 20.585937-16.746094 37.332031-37.335938 37.332031zm-176-352c-64.703125 0-117.332031 52.628906-117.332031 117.332031v59.480469c0 51.644531-22.632812 100.414062-62.078125 133.757812-.75.640626-1.921875 1.964844-1.921875 4.097657 0 2.898437 2.433594 5.332031 5.332031 5.332031h352c2.902344 0 5.335938-2.433594 5.335938-5.332031 0-2.132813-1.175781-3.457031-1.878907-4.054688-39.488281-33.386719-62.121093-82.15625-62.121093-133.800781v-59.480469c0-64.703125-52.628907-117.332031-117.335938-117.332031zm0 0"/><path d="m213.332031 96c-8.832031 0-16-7.167969-16-16v-64c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v64c0 8.832031-7.167969 16-16 16zm0 0"/>
            </svg>

            </div>
            
            <div class="flex justify-center w-full hover:bg-blue-800 cursor-pointer">
              <svg version="1.1" class="fill-current text-blue-100 py-4 w-6" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
              <g>
                <g>
                  <path d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
                    C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
                    M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
                    L338.213,256L482,112.212V399.787z"/>
                </g>
              </g>
              </svg>

            </div>

            
          <div class="w-full cursor-pointer flex flex-col justify-between items-center" @click="sidebar = !sidebar">

            <div class="flex justify-center py-5 w-full hover:bg-blue-800">
              <svg version="1.1" class="fill-current text-gray-300 h-4" :class="!sidebar ? '' : 'rotate-180'" 
            viewBox="0 0 284.936 284.936" style="enable-background:new 0 0 284.936 284.936;">
              <g>
                <g>
                  <path d="M277.515,135.9L144.464,2.857C142.565,0.955,140.375,0,137.9,0c-2.472,0-4.659,0.955-6.562,2.857l-14.277,14.275
                    c-1.903,1.903-2.853,4.089-2.853,6.567c0,2.478,0.95,4.664,2.853,6.567l112.207,112.204L117.062,254.677
                    c-1.903,1.903-2.853,4.093-2.853,6.564c0,2.477,0.95,4.667,2.853,6.57l14.277,14.271c1.902,1.905,4.089,2.854,6.562,2.854
                    c2.478,0,4.665-0.951,6.563-2.854l133.051-133.044c1.902-1.902,2.851-4.093,2.851-6.567S279.417,137.807,277.515,135.9z"/>
                  <path d="M170.732,142.471c0-2.474-0.947-4.665-2.857-6.571L34.833,2.857C32.931,0.955,30.741,0,28.267,0s-4.665,0.955-6.567,2.857
                    L7.426,17.133C5.52,19.036,4.57,21.222,4.57,23.7c0,2.478,0.95,4.664,2.856,6.567L119.63,142.471L7.426,254.677
                    c-1.906,1.903-2.856,4.093-2.856,6.564c0,2.477,0.95,4.667,2.856,6.57l14.273,14.271c1.903,1.905,4.093,2.854,6.567,2.854
                    s4.664-0.951,6.567-2.854l133.042-133.044C169.785,147.136,170.732,144.945,170.732,142.471z"/>
                </g>
              </g>
            </svg>
            </div>
            
          </div>
          
            <div class="mt-auto flex justify-center w-full hover:bg-blue-800 cursor-pointer">
            
              <svg class="fill-current text-blue-100 py-4 w-7" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 256c0 140.946 115.033 255.99 255.983 256h.013.008c140.956-.002 255.996-115.049 255.996-256 0-140.959-115.049-256-256-256-140.779 0-256 114.919-256 256zm30 0c0-44.864 13.142-86.715 35.776-121.91l28.486 6.937c5.003 1.251 9.058 4.681 11.123 9.41 2.063 4.722 1.813 10.039-.685 14.587-10.852 19.758-4.328 45.251 14.851 58.037l64.813 43.208 14.9 29.8c5.075 10.149 3.093 22.358-4.93 30.382l-8.941 8.941c-5.858 5.858-5.858 15.355 0 21.213l17.898 17.898c4.971 4.971 7.708 11.579 7.708 18.609 0 30.48 6.944 60.693 20.065 87.504-112.925-12.45-201.064-108.427-201.064-224.616zm196.098 26.654-5.827-11.654h2.188c14.971 0 28.43 8.318 35.125 21.708 11.81 23.619 35.55 38.292 61.958 38.292h11.458v15c0 12.128-4.753 23.5-13.385 32.023-27.687 27.337-48.392 54.657-62.667 82.79-9.03-20.904-13.948-44.62-13.948-67.699 0-15.043-5.858-29.185-16.495-39.822l-7.326-7.326c15.797-17.161 19.425-42.301 8.919-63.312zm52.461 198.223c12.789-27.487 32.611-54.331 60.133-81.506 14.386-14.203 22.308-33.157 22.308-53.371v-30c0-8.284-6.716-15-15-15h-26.459c-14.971 0-28.43-8.318-35.125-21.708-11.809-23.619-35.55-38.292-61.957-38.292h-17.188l-4.561-9.123c-8.083-16.165-.753-35.834 16.687-44.779 14.337-7.353 23.603-23.441 23.603-40.985v-10.113c0-8.271 6.729-15 15-15h18.099c30.851 0 52.495-30.428 42.63-59.411l-8.499-25.485c33.638 7.989 64.386 23.516 90.359 44.694l-4.579 13.739c-.733 2.199-1.986 4.226-3.624 5.864l-16.206 16.206c-8.499 8.499-13.18 19.8-13.18 31.82v17.573c0 24.813 20.187 45 45 45 8.271 0 15 6.729 15 15v22.918c0 2.316-.548 4.636-1.583 6.708l-5.125 10.25c-7.025 14.052-6.289 30.419 1.97 43.782 8.26 13.364 22.569 21.332 38.279 21.332h14.65c-28.6 81.059-102.187 141.081-190.632 149.887zm203.441-224.877c0 15.405-1.555 30.453-4.506 45h-22.953c-7.548 0-11.438-4.975-12.76-7.114s-4.032-7.843-.657-14.594l5.126-10.25c3.107-6.216 4.75-13.175 4.75-20.124v-22.918c0-24.813-20.187-45-45-45-8.271 0-15-6.729-15-15v-17.574c0-4.007 1.56-7.774 4.393-10.606l16.206-16.205c4.914-4.913 8.673-10.995 10.872-17.59l.174-.521c36.841 40.225 59.355 93.779 59.355 152.496zm-226-226c6.343 0 12.622.276 18.835.791l13.464 40.375c3.317 9.744-3.911 19.834-14.2 19.834h-18.099c-24.813 0-45 20.187-45 44.999v10.113c0 6.312-2.931 12.055-7.294 14.293-23.406 12.004-36.727 34.933-36.341 58.477l-31.172-20.781c-6.333-4.223-8.616-12.408-5.196-18.635 7.011-12.766 7.696-27.723 1.881-41.037-5.818-13.321-17.241-22.982-31.428-26.528l-16.095-3.92c41.468-47.743 102.591-77.981 170.645-77.981z"/>
              </svg>
            </div>
            <div class="flex justify-center w-full hover:bg-blue-800 cursor-pointer">
              <img src="../assets/logo.svg" class="py-3 w-10 h-auto" alt="">

            </div>
        </div>
        <div class="absolute top-0 left-0 bg-white shadow flex flex-col items-center overflow-x-hidden ml-16 rotato h-full" :class="sidebar ? 'w-90' : 'w-6'">
          <div class="absolute top-0 left-0 w-90 px-4 flex flex-col items-start" v-if="sidebar">
            <div class="w-full flex flex-col bg-blue-100 border rounded border-blue-200 items-start px-4 py-2 my-2">
              <p class="text-xs py-2 text-left">Add tags to your cards to organize them by concept, lecture, etc.</p>
              <p class="text-xs text-left cursor-pointer hover:underline text-blue-700">Learn more here</p>

            </div>
            <div class="flex flex-col items-start w-full">
              <p class="text-sm uppercase font-bold text-gray-700 py-2">Tags</p>
              
              <div v-for="(tag,ind) in tags" :key="ind+20" class="w-full select-none flex flex-col items-stretch" :class="ind!=0 ? 'mt-6' : ''">
                <TagDropDown :tag="tag" :depth="1"/>
              </div>

            </div>
          </div>
        </div>
        <div class="flex flex-col w-full rotato" :class="sidebar ? ['ml-72', 'pl-32'] : ['ml-2', 'pl-24']">
          <ListViewCardGroup v-for="(cardGroup, ind) in cards" :key="1000+ind" :cardGroup="cardGroup" />

        </div>
    </div>
  </div>
</template>

<script>
import ListViewCardGroup from '../components/ListViewCardGroup.vue'
import TagDropDown from '../components/tagdropdown.vue'

export default {
  components: {
    ListViewCardGroup,
    TagDropDown
  },
  data () {
    return {
      isFocus: false,
      sidebar: false,
      inputText: '',
      mode: 'list',
    }
  },
  methods: {
    sendCard () {
      this.$store.commit('pushCard', { front: this.inputText, time: new Date().toLocaleString() })
      this.inputText = ''
    },
    isFocused () {
      this.isFocus = true
    }
  },
  computed: {
    cards () {
      return this.$store.getters.getCardGroups
    },
    tags () {
      window.console.log(this.$store.getters.getTags)
      return this.$store.getters.getTags
    }
  }
}
</script>

<style scoped>
.inputborder:focus-within {
  box-shadow:
    0 0 0 2px #bee3f8;
}

.rotato {
  transition: all 0.2s;
}

.rotate-180{
  transform: rotate(180deg)
}

.rotate-90{
  transform: rotate(90deg)
}
</style>
