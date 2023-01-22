<template>
  <div class="flex h-screen w-full">
    <div class="w-72 justify-evenly h-full bg-gray-900">
      <div class="h-28 relative">
        <div class="absolute top-8 left-4 bg-lime-300 w-14 h-10" />
        <span class="absolute top-7 left-10 text-3xl text-white font-semibold">noted</span>
        <div class="absolute top-16 left-16 bg-gray-600 w-2 h-2"></div>
        <span class="absolute top-16 left-20 text-xs font-medium text-gray-200">Paperless & Easy</span>
      </div>
      <div class="mx-auto w-64 h-3 border-t border-gray-600"></div>
      <div class="p-4">
        <form class="relative">
          <button type="submit" class="absolute top-0 left-0 px-2 py-1 rounded m-1 hover:bg-slate-400">
            <font-awesome-icon class="text-white" icon="fa-search" />
          </button>
          <input
            class="w-54 bg-transparent indent-8 focus:ring-2 rounded-md bg-gray-700 outline-none border-none text-white"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
      <div class="my-4">
        <ul class="text-white">
          <li class="px-3 border-l-4 py-3 border-lime-500 bg-gray-700 hover:border-lime-500">
            <font-awesome-icon class="mr-4" icon="fa-house" />Home
          </li>
          <li class="px-3 border-l-4 py-3 border-gray-900 hover:bg-gray-700 hover:border-lime-500">
            <font-awesome-icon class="mr-4" icon="fa-bell" />Notifications
          </li>
          <li class="px-3 border-l-4 py-3 border-gray-900 hover:bg-gray-700 hover:border-lime-500">
            <font-awesome-icon class="mr-4" icon="fa-note-sticky" />Notes
          </li>
          <li class="px-3 border-l-4 py-3 border-gray-900 hover:bg-gray-700 hover:border-lime-500">
            <font-awesome-icon class="mr-4" icon="fa-bolt" />Tips
          </li>
          <li class="px-3 border-l-4 py-3 border-gray-900 hover:bg-gray-700 hover:border-lime-500">
            <font-awesome-icon class="mr-4" icon="fa-trash" />Trash
          </li>
          <li class="px-3 border-l-4 py-3 border-gray-900 hover:bg-gray-700 hover:border-lime-500">
            <font-awesome-icon class="mr-4" icon="fa-gear" />Settings
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-grow overflow-y-scroll">
      <router-view></router-view>
    </div>
  </div>
</template>
