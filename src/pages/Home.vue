<template>
  <div>
    <div
      class="w-full h-80 bg-gray-300 fixed overflow-hidden bg-[url('https://images.pexels.com/photos/2072152/pexels-photo-2072152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] -z-10"
    >
      <!-- <img src="https://images.pexels.com/photos/2072152/pexels-photo-2072152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> -->
    </div>
    <div class="px-4">
      <div class="flex justify-between pt-6">
        <div>
          <button class="px-4 py-2 bg-black opacity-80 rounded-full mr-2">
            <font-awesome-icon class="text-white" icon="fa-angle-left" />
          </button>
          <button class="px-4 py-2 bg-black opacity-80 rounded-full">
            <font-awesome-icon class="text-white" icon="fa-angle-right" />
          </button>
        </div>
        <div class="bg-black flex items-center px-2 py-3 rounded-full">
          <img
            class="w-6 h-6 object-scale-fill border border-slate-700 rounded-full mr-2"
            src="https://robohash.org/UPK.png?set=set1&size=150x150"
            alt=""
          />
          <span class="text-white text-sm mr-2">Alea Eifouly K...</span>
          <font-awesome-icon size="sm" class="text-white" icon="fa-chevron-down" />
        </div>
      </div>
      <div class="pt-8">
        <h1 class="font-semibold text-white text-3xl py-2">Good Morning, Alea.</h1>
        <p class="text-white uppercase text-sm">Wednesday, August 17, 2022</p>
      </div>
      <div class="mt-8 flex">
        <div class="flex-grow h-48 bg-white rounded-lg shadow-md mx-4"></div>
        <div class="w-96 h-48 bg-blue-200 rounded-lg shadow-md mx-4"></div>
      </div>
      <div class="mt-8">
        <div class="w-full h-96 bg-white rounded-lg shadow-lg mx-4"></div>
      </div>
    </div>
    <div class="absolute bottom-4 right-8 bg-lime-500 text-white py-4 px-2 w-48 h-14 rounded-full flex justify-between items-center">
      <div><font-awesome-icon class="text-white mx-2" icon="fa-plus" /><span class="font-bold">New</span></div>
      <font-awesome-icon class="text-white mr-2" icon="fa-chevron-down" />
    </div>
  </div>
</template>
<script setup></script>
