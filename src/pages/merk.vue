<template>
  <div>
    <div class="h-full min-w-full">
      <!--header content-->
      <div class="h-[180px] max-w-full bg-gray-100 flex justify-start">
        <div class="pt-12 pl-12">
          <div
            class="bg-gray-200 h-[50px] flex items-center shadow-sm px-[10px] w-full py-[10px] border-b"
          >
            <h3 class="ml-5 text-3xl font-bold">Merek</h3>
          </div>
        </div>
      </div>
    </div>

    <!--content-->
    <div class="h-full p-[25px] bg-white">
      <!--navbar-->
      <div class="h-[60px] flex relative">
        <div class="absolute pt-6 right-20">
          <div class="relative flex items-center w-full mb-5 bottom-2 right-4">
            <!--search box-->
            <input
              type="search"
              name="search"
              class="relative block w-[200px] min-w-[20px] bg-transparent flex-auto rounded-full border border-green-300 outline-none pl-5 focus:border-green-600 focus:text-gray-700 focus:cursor-text focus:pr-3 px-3 py-[0.25rem] text-gray-400 transition duration-200 ease-in-out focus:z-[3] dark:border-green-200 dark:text-neutral-200 dark:placeholder:text-gray-400 dark:focus:border-green-400"
              placeholder="Cari..."
              aria-label="Cari..."
              aria-describedby="button-addon3"
            />
            <!--Search button-->
            <button
              class="relative px-6 py-2 font-medium text-green-500 transition duration-150 ease-in-out border-none rounded-full hover:bg-green-400 hover:bg-opacity-7 hover:text-gray-600 focus:ring-2"
              type="button"
              id="button-addon3"
              data-te-ripple-init
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <!--tambah produk-->
            <button
              class="inline-flex items-center justify-center bg-green-400 px-[8px] ml-8 h-[35px] rounded-full text-white text-sm font-bold hover:bg-green-600"
               v-on:click.prevent="onTambahMerkClick"
              >
              Tambah Merek
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!--table produk-->
      <div class="border rounded-full">
        <div class="relative overflow-x-auto sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-gray-800 uppercase bg-blue-200 text-md">
              <tr>
                <th scope="col" class="px-6 py-3">No</th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Nama Merek</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Nama Perusahaan</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Link Website</div>
                </th>
                 <th scope="col" class="px-6 py-3">
                      <div class="flex items-center">Aktif</div>
                      </th>
                  <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">Aksi</div>
                  </th>
                 
               
              </tr>
            </thead>
            <tbody>
              
              <tr class="text-gray-700 bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium">1</th>
                <td class="px-6 py-4">Honda V-Go</td>
                <td class="px-6 py-4">Honda </td>
                <td class="px-6 py-4">https://global.honda/en/</td>
                <td class="px-6 py-4">
                  <div id="app">
                    <div :class="{ 'switch-on': isToggled, 'switch-off': !isToggled }"></div>
                    <label for="toggleSwitch" class="switch">
                      <input  id="toggleSwitch" v-model="isToggled">
                      <span class="slider"></span>
                    </label></div>
                </td>
                <td class="px-6 py-4 text-right">
                  <a href="#"
                  class="font-medium text-blur-600 dark:text-blue-500 hover:underline">aksi</a>
                </td>
              </tr>
              <tr class="text-gray-700 bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium">2</th>
                <td class="px-6 py-4">Gesits</td>
                <td class="px-6 py-4">Gesits motor</td>
                <td class="px-6 py-4">https://gesitsmotors.com/en/</td>
                <td class="px-6 py-4">
                   <div id="app">
                      <div :class="{ 'switch-on': isToggled, 'switch-off': !isToggled }"></div>
                      <label for="toggleSwitch" class="switch">
                        <input  id="toggleSwitch" v-model="isToggled">
                        <span class="slider"></span>
                      </label></div>
                </td>
                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >Aksi</a
                  >
                </td>
              </tr>
              <tr class="text-gray-700 bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium">3</th>
                <td class="px-6 py-4">Motor listrik Niu</td>
                <td class="px-6 py-4">Niu</td>
                <td class="px-6 py-4">https://www.niu.com/id</td>
                <td class="px-6 py-4">
                   <div id="app">
                      <div :class="{ 'switch-on': isToggled, 'switch-off': !isToggled }"></div>
                      <label for="toggleSwitch" class="switch">
                        <input  id="toggleSwitch" v-model="isToggled">
                        <span class="slider"></span>
                      </label></div>
                </td>
                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >Aksi</a
                  >
                </td>
              </tr>
              <tr class="text-gray-700 bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium">4</th>
                <td class="px-6 py-4">gogoro</td>
                <td class="px-6 py-4">Gojek</td>
                <td class="px-6 py-4">https://www.gogoro.com/smartscooter/</td>
                <td class="px-6 py-4">
                   <div id="app">
                      <div :class="{ 'switch-on': isToggled, 'switch-off': !isToggled }"></div>
                      <label for="toggleSwitch" class="switch">
                        <input  id="toggleSwitch" v-model="isToggled">
                        <span class="slider"></span>
                      </label></div>
                </td>
                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >Aksi</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="relative flex justify-end text-gray-800">
          <button
            type="button"
            class="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
          >
            Previous
          </button>
          <button
            type="button"
            class="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
          >
            Next
          </button>
        </div>
        <div class="relative flex justify-start">
          <h3>page 1 of 10</h3>
        </div>
      </div>
    </div>
  </div>
  <!--main-->
</template>

<script>
export default {
  methods: {
    onTambahMerkClick() {
      this.$router.push({ path: "/tambahmerek" });
    },
    name: 'App',
    data() {
      return {
        isOn: true,
      };
    },
  },

};

</script>

<style>
/* Gaya CSS untuk tombol switch */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  p {
    margin-top: 10px;
  }
</style>
