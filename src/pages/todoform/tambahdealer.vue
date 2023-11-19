<template>
  <div class="w-full h-full px-12 py-12 text-black bg-gray-100">
    <h3 class="my-2 text-xl font-bold">Tambah Dealer</h3>
    <div class="mx-5 bg-white">
      <form @submit.prevent="submitDealer" action="">
        <div class="items-start px-5 py-5 text-lg">
          <div class="px-2 py-2 my-4">
            <label class="block">Nama Dealer</label>
            <input
              v-model="namaDealer"
              class="w-full"
              type="text"
              name=""
              id=""
              placeholder="Masukkan nama dealer.."
            />
          </div>
          <div class="px-2 py-2 my-2">
            <label class="block">Alamat</label>
            <input
              v-model="Alamat"
              class="w-full"
              type="text"
              name=""
              id=""
              placeholder="Masukkan alamat.."
            />
          </div>
          <br />
          <div class="px-2 py-2">
            <label class="block">No. Telepon</label>
            <input
              v-model="noTelp"
              class="w-full"
              type="text"
              placeholder="Masukkan No Telepon.."
            />
          </div>

          <div class="px-2 py-2 my-4">
            <label class="block">Merek</label>
            <select
              v-model="Merek"
              placeholder="Pilih Merek"
              class="w-full"
              data-te-select-init
              data-te-select-placeholder="List Merek"
            >
              <option value="SmootTempur">Smoot Tempur</option>
              <option value="Selis">Selis</option>
              <option value="Polytron">Polytron</option>
              <option value="Alva">Alva</option>
              <option value="Gesits">Gesits</option>
            </select>
          </div>
          <div class="px-2 py-2 my-4">
            <label class="block my-4">
              <span class="block text-lg"> Keterangan (optional) </span>
              <textarea
                placeholder="Masukkan keterangan"
                class="block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem]"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </label>
          </div>
          <br />
        </div>
      </form>
      <div class="px-3 mx-3 my-4">
        <button
        @click.prevent="onSimpanDealerClick"
        class="mb-2 rounded-lg border-2 border-cyan-600 
          px-6 pb-[6px] pt-2 font-medium leading-normal 
          text-white bg-cyan-500 
          hover:bg-cyan-700 
          hover:bg-opacity-100 hover:text-white 
          focus:border-cyan-600 focus:text-gray-800 
          focus:outline-none focus:ring-0 active:border-cyan-600 
          active:text-gray-700"
          >
          Simpan
        </button>
        <span class="mx-3"></span>
        <button
        @click.prevent="onbatalClick"
          class="mb-2  rounded-lg border-2 border-cyan-500 
          px-6 pb-[6px] pt-2 font-medium leading-normal 
          text-cyan-600
          hover:border-cyan-500 hover:bg-cyan-500 
          hover:bg-opacity-40 hover:text-white 
          focus:border-cyan-600 focus:text-gray-800 
          focus:outline-none focus:ring-0 active:border-cyan-600 
          active:text-gray-700"
          data-te-ripple-init
        >
          Batal
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onbatalClick() {
      this.$router.push("/listdealer");
    },
    onSimpanDealerClick() {
      this.$router.push("/listdealer");
    },
    submitDealer() {
      alert("berhasil tambah dealer");
    },
  },
};
</script>

<style></style>
