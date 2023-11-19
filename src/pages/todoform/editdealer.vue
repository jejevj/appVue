<template>
  <div class="w-full h-full px-12 py-12 text-black bg-gray-100">
    <h3 class="my-2 text-xl font-bold">Edit Dealer</h3>
    <div class="mx-5 bg-white">
      <form action="">
        <div class="items-start px-5 py-5 text-lg">
          <div class="px-2 py-2 my-4">
            <label class="block">Nama Dealer</label>
            <input type="text" name="" id="" placeholder="Masukkan nama dealer.." />
          </div>
          <div class="px-2 py-2 my-2">
            <label class="block">Alamat</label>
            <input type="text" name="" id="" placeholder="Masukkan alamat.." />
          </div>
          <br />
          <div class="px-2 py-2">
            <label class="block">No. Telepon</label>
            <input type="text" placeholder="Masukkan No Telepon.." />
          </div>

          <div class="px-2 py-2 my-4">
            <label class="block">Merek</label>
            <select v-model="selected" data-te-select-init
            data-te-select-placeholder="">
              <option value="SmootTempur">Smoot Tempur</option>
              <option value="Selis">Selis</option>
              <option value="Polytron">Polytron</option>
              <option value="Alva">Alva</option>
              <option value="Gesits">Gesits</option>
            </select>
          </div>
          <label class="block my-4">
            <span class="block text-sm font-medium"> Keterangan (optional) </span>
            <textarea
              class="peer block min-h-[auto] w-full 
              rounded border-0 bg-transparent px-3 py-[0.32rem]"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </label>
          <br />
          <div class="px-3 mx-3 my-4">
            <button
        @click.prevent="onSimpanDealerClick"
        class="mb-2 rounded-lg border-2 border-cyan-500 
          px-6 pb-[6px] pt-2 font-medium leading-normal 
          text-white bg-cyan-500 
          hover:border-cyan-500 hover:bg-cyan-500 
          hover:bg-opacity-40 hover:text-gray-800 
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
          hover:bg-opacity-40 hover:text-gray-800 
          focus:border-cyan-600 focus:text-gray-800 
          focus:outline-none focus:ring-0 active:border-cyan-600 
          active:text-gray-700"
          data-te-ripple-init
        >
          Batal
        </button>
          </div>
        </div>
      </form>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "TodoForm",

  data: () => ({
    currentItem: null,
    merekmolis: {
      selected: "",
    },
  }),

  dataDealer() {
    return {
      formAddDealer: {
        namaDealer: "",
        Alamat: "",
        noTelp: "",
        merek: this.selected,
      },
    };
  },

  methods: {
    onbatalClick() {
      this.$router.push("/listdealer");
    },
    onSimpanDealerClick() {
      this.$router.push("/listdealer");
    },
  },
};
</script>

<style></style>
