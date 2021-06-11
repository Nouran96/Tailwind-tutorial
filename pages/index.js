export default function Home() {
  return (
    <div class="dark">
      {/* Difference between regular structure and tailwind */}
      <div class="chat-notification">
        <div class="chat-notification-logo-wrapper">
          <img
            class="chat-notification-logo"
            src="/assets/chat-logo.jpg"
            alt="ChitChat Logo"
          />
        </div>
        <div class="chat-notification-content">
          <h4 class="chat-notification-title"> ChitChat </h4>
          <p class="chat-notification-message"> You have a new message! </p>
        </div>
      </div>
      <br />
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-5">
        <div class="flex-shrink-0">
          <img
            class="h-12 w-12"
            src="/assets/chat-logo.jpg"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div class="text-xl font-small text-black"> ChitChat </div>
          <p class="text-gray-500"> You have a new message! </p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/* Responsive Design with breakpoints customization */}
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover xs:h-32 md:h-full md:w-48 "
              src="/assets/man-image.jpeg"
              alt="Man looking at item at a store"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p class="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work.Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/* Using state utilities */}
      <form class="max-w-md rounded-xl mx-auto bg-indigo-200 p-6 space-x-4 flex justify-center">
        <input
          class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md px-3 placeholder-purple-400"
          placeholder="Your email"
        />
        <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-md px-4 py-2 text-white font-semibold">
          Sign up
        </button>
      </form>
      <br />
      <hr />
      <br />
      {/* Dark Mode */}
      {/* lg:dark:hover => responsive:dark:state */}
      <div class="bg-white dark:bg-gray-800">
        <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
        <p class="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
      </div>
      <br />
      <hr />
      <br />
      {/* Adding base styles and preflight option in corePlugins */}
      <h1 class="main-title">Changing base styles</h1>
      <br />
      <hr />
      <br />
      {/* Nice features in tailwind */}
      {/* truncate => 	overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap; */}
      <p class="truncate">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at
        sed dolorum ratione dolorem nisi velit cum.
      </p>
      <br />
      {/* Background clip with linear gradient */}
      <div class="text-5xl font-extrabold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Hello world
        </span>
      </div>
      <br />
      {/* Border radius full option */}
      <div class="flex items-start space-x-4">
        <div class="rounded-full py-3 px-6 bg-purple-500 text-white font-semibold">
          Pill Shape
        </div>
        <div class="rounded-full h-24 w-24 flex items-center justify-center bg-purple-500 text-white font-semibold">
          Circle
        </div>
      </div>
      <br />
      {/* Divider */}
      <div class="grid grid-cols-3 divide-x divide-green-500 text-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <br />
      <div class="grid grid-cols-1 divide-y divide-yellow-500">
        <div class="py-2">1</div>
        <div class="py-2">2</div>
        <div class="py-2">3</div>
      </div>
      <br />
      {/* Animations */}
      {/* Spin */}
      <button
        type="button"
        class="bg-pink-600 px-4 py-2 text-white rounded-md animate-spin mb-10"
        disabled
      >
        Spinning
      </button>
      <br />

      {/* Ping */}
      <button
        type="button"
        class="border-2 border-purple-500 px-4 py-2 text-indigo-500 rounded-md flex"
        disabled
      >
        Pinging
        <span class="flex h-3 w-3 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
      </button>
      <br />

      {/* Pulse */}
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-blue-400 h-12 w-12"></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-blue-400 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-blue-400 rounded"></div>
              <div class="h-4 bg-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* Bounce */}
      <button
        type="button"
        class="bg-pink-600 px-4 py-2 text-white rounded-md animate-bounce mb-10"
        disabled
      >
        Bouncing
      </button>
      <br />
    </div>
  );
}
