<script>
  import { onMount } from 'svelte';

  import "../app.css";

  onMount(async () => {  
    var navcontent = document.getElementById("nav-content");
    var navToggle = document.getElementById('nav-toggle');
    navToggle.addEventListener('click', function() {
      if (navcontent.classList.contains('hidden'))
        navcontent.classList.remove('hidden');
      else
        navcontent.classList.add('hidden');
    });
  });
</script>

<svelte:head>
  <script>if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"rainer@no5.at",utcoffset:"1"}))};sessionStorage.setItem("_swa","1");</script>
</svelte:head>

<nav id="header" class="fixed w-full z-30 top-0 text-white shadow bg-white">
  <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    <div class="pl-4 flex items-center">
      <a class="text-gray-800 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
        LiviaAI
      </a>
    </div>

    <div class="block lg:hidden pr-4">
      <button id="nav-toggle" class="flex items-center p-1 text-gray-900 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/team">Team</a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/blog/2023-02-history-of-digitalization-wm">Blog</a>
        </li>
      </ul>
      <button
        id="navAction"
        class="mx-auto lg:mx-0 hover:underline gradient font-bold lg:rounded-full mt-4 lg:mt-0 py-4 px-4 lg:px-8 lg:shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        <a href="/" class="text-white">Home</a>
      </button>
    </div>
  </div>
  <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>

<section class="bg-white py-8">
  <div class="container max-w-5xl mx-auto m-8 blogpost">
    <div class="w-6/6 sm:w-2/2 p-6 text-gray-600">
      <h1>The LiviaAI Team</h1>

      <h2>Principal Investigators</h2>

      <h3>Dr Nicole High-Steskal</h3>
      <p>
        Nicole High-Steskal is an archaeologist and art historian by training, and is a Research Associate in the 
        Department for Arts and Cultural Studies at the University for Continuing Education, Krems, where she 
        is the course director for MA-program “Collections Studies and Management”. Her particular interests are 
        in the topics of geo-spatial humanities, object histories, collection studies, research data management 
        and Linked Open Data.
      </p>

      <p>
        In the LiviaAI-project she and Michaela Feurstein-Prasser are working on the digitization history of the 
        different collections to better understand biases. Nicole is also responsible for the project management 
        and communication with partners.
      </p>

      <h3>Dr Rainer Simon</h3>
      <p>
        Rainer Simon is a Senior Scientist at the Austrian Institute of Technology. He has worked in the field of
        multimedia information management and retrieval for more than 15 years, with a particular focus on technologies
        and user interfaces that process and visualize geospatial information. His current research interest is in 
        the application of Linked Open Data methods and visualization techniques in the Digital Humanities. 
      </p>

      <h2>Project Team</h2>

      <h3>Dr Michaela Feurstein-Prasser</h3>
      <p>
        Michaela Feurstein-Prasser is a freelance curator and cultural mediator, based in Vienna. She has worked 
        on projects in several Viennese museums, including the Jewish Museum and the Volkskundemuseum. She is 
        also part of the team at xhibit, a research and exhibition consultancy who specialise in creating work
        which reveals the stories behind museum objects. 
      </p>

      <h3>Bernhard Franzl</h3>
      <p>
        Bernhard Franzl is a student of Artificial Intelligence at the University of Linz, and an intern at 
        the Austrian institute of Technology. 
      </p>

      <h2>Project Consultant</h2>

      <h3>Dr Rebecca Kahn</h3>
      <p>
        Rebecca Kahn is a post-doctoral researcher in the History Department at the University of Vienna. 
        Her research (funded by the Marie Sklodowska Curie Actions COFUND/REWIRE initiative) is focussed 
        on the use of Linked Open Data for museum collections, and the implications of using abstracted 
        data models for heritage data. In LiviaAI, she has been working on documenting the process of the project.
      </p>
    </div>
  </div>
</section>

<svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
      <g class="wave" fill="#fff">
        <path
          d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
        ></path>
      </g>
      <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
        <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
          <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
          <path
            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
            opacity="0.100000001"
          ></path>
          <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
        </g>
      </g>
    </g>
  </g>
</svg>

<footer class="gradient">
  <div class="container mx-auto px-8 pb-6">
    <div class="w-full flex flex-col md:flex-row py-6">
      <div class="flex-1">
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            Funded by<br/>
            <a href="https://www.oeaw.ac.at/foerderungen/jubilaeumsfonds/1/ausschreibung-2017/1/jubilaeumsfonds-gefoerderte-projekte-2017-1" class="text-white">
              Jubiläumsfonds der Stadt Wien für die ÖAW
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
