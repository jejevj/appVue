<template>
  <div>
    <div class="w-full h-full">
      <!--header content-->
      <div class="h-[180px] max-w-full bg-gray-100 flex justify-start">
        <div class="pt-12 pl-12">
          <div
            class="bg-gray-200 h-[50px] flex items-center shadow-sm px-[10px] w-full py-[10px] border-b"
          >
            <button class="cursor-pointer w-[30px]" @click="toggleSideBar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
            <h3 class="ml-5 text-3xl font-bold">Produk Molis</h3>
          </div>
          <h4 class="pt-5 pr-32 font-super-light">Daftar Produk</h4>
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
            v-on:click.prevent="onTambahProdukClick"
            >

              Tambah Produk
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
                  <div class="flex items-center">Nama Produk</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Nama Merek</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Estimasi Jarak</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Kecepatan Max</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Kapasitas Baterai</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Ketahanan Baterai</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Daya Max</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Link Website Produk</div>
                </th>
                <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">Aktif</div>
                </th>
                <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">Aksi</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Logo</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Gambar Produk</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Data 1 -->
                <tr class="text-gray-700 bg-white border-b">
                  <th scope="row" class="px-6 py-4 font-medium">1</th>
                  <td class="px-6 py-4">Volta Patriot X</td>
                  <td class="px-6 py-4">Volta X</td>
                  <td class="px-6 py-4">70 km/jam</td>
                  <td class="px-6 py-4">60 km/jam </td>
                  <td class="px-6 py-4">65V/21,5Ah </td>
                  <td class="px-6 py-4">90km/jam </td>
                  <td class="px-6 py-4">1000 watt</td>
                  <td class="px-6 py-4">https://www.volta.id/patriotx</td>
                  <td class="px-6 py-4">aktif</td>
                  <td class="px-6 py-4">aksi</td>
                  <td class="px-6 py-4">
                    <img src="https://i.pinimg.com/originals/e0/35/22/e035221e8889dedd792ce31834d15028.png" width="61" alt="">             
                  </td>
                  <td class="px-6 py-4">
                    <img src="https://i.pinimg.com/originals/e0/35/22/e035221e8889dedd792ce31834d15028.png" width="61" alt="">             
                  </td>
             
                </tr>

                <!-- Data 2 -->
                
                <tr class="text-gray-700 bg-white border-b">
                  <th scope="row" class="px-6 py-4 font-medium">1</th>
                  <td class="px-6 py-4">Volta Patriot X</td>
                  <td class="px-6 py-4">Volta X</td>
                  <td class="px-6 py-4">70 km/jam</td>
                  <td class="px-6 py-4">60 km/jam </td>
                  <td class="px-6 py-4">65V/21,5Ah </td>
                  <td class="px-6 py-4">90km/jam </td>
                  <td class="px-6 py-4">1000 watt</td>
                  <td class="px-6 py-4">https://www.volta.id/patriotx</td>
                  <td class="px-6 py-4">aktif</td>
                    <td class="px-6 py-4">aksi</td>
                  <td class="px-6 py-4">
                    <img src="https://i.pinimg.com/originals/e0/35/22/e035221e8889dedd792ce31834d15028.png" width="61" alt="">             
                  </td>
                  <td class="px-6 py-4">
                    <img src="https://i.pinimg.com/originals/e0/35/22/e035221e8889dedd792ce31834d15028.png" width="61" alt="">             
                  </td>
             
                </tr>

                <!-- Data 3 -->

                <tr class="text-gray-700 bg-white border-b">
                  <th scope="row" class="px-6 py-4 font-medium">1</th>
                  <td class="px-6 py-4">Volta Patriot X</td>
                  <td class="px-6 py-4">Volta X</td>
                  <td class="px-6 py-4">70 km/jam</td>
                  <td class="px-6 py-4">60 km/jam </td>
                  <td class="px-6 py-4">65V/21,5Ah </td>
                  <td class="px-6 py-4">90km/jam </td>
                  <td class="px-6 py-4">1000 watt</td>
                  <td class="px-6 py-4">https://www.volta.id/patriotx</td>
                  <td class="px-6 py-4">aktif</td>
                    <td class="px-6 py-4">aksi</td>
                  <td class="px-6 py-4">
                    <img src="https://i.pinimg.com/originals/e0/35/22/e035221e8889dedd792ce31834d15028.png" width="61" alt="">             
                  </td>
                  <td class="px-6 py-4">
                    <img src="https://i.pinimg.com/originals/e0/35/22/e035221e8889dedd792ce31834d15028.png" width="61" alt="">             
                  </td>
             
                </tr>

                <!-- Data 4 -->
                
                <tr class="text-gray-700 bg-white border-b">
                  <th scope="row" class="px-6 py-4 font-medium">1</th>
                  <td class="px-6 py-4">Volta Patriot X</td>
                  <td class="px-6 py-4">Volta X</td>
                  <td class="px-6 py-4">70 km/jam</td>
                  <td class="px-6 py-4">60 km/jam </td>
                  <td class="px-6 py-4">65V/21,5Ah </td>
                  <td class="px-6 py-4">90km/jam </td>
                  <td class="px-6 py-4">1000 watt</td>
                  <td class="px-6 py-4">https://www.volta.id/patriotx</td>
                  <td class="px-6 py-4">aktif</td>
                    <td class="px-6 py-4">aksi</td>
                  <td class="px-6 py-4">
                    <img src="https://i.pinimg.com/originals/e0/35/22/e035221e8889dedd792ce31834d15028.png" width="61" alt="">             
                  </td>
                  <td class="px-6 py-4">
                    <img src="https://i.pinimg.com/originals/e0/35/22/e035221e8889dedd792ce31834d15028.png" width="61" alt="">             
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
    onTambahProdukClick() {
      this.$router.push({ path: "/tambahproduk" });
    },
  }
};
</script>

<style></style>
